import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as url from 'url';
import { getAllCitySlugs } from '../lib/cities-data';
import { getAllServiceSlugs } from '../lib/services-data';

const BASE_URL = 'https://www.fop-help.com';
const TOOL_DIR = path.join(process.cwd(), 'indexing-tool');

// Автоматично знаходимо всі client_secret файли
const CLIENT_SECRET_FILES = fs.readdirSync(TOOL_DIR)
  .filter(f => f.startsWith('client_secret_') && f.endsWith('.json'))
  .map(f => path.join(TOOL_DIR, f));

// Затримка між запитами (мс) — Google дозволяє ~200 запитів/день на акаунт
const DELAY_MS = 1500;
const BATCH_PER_ACCOUNT = 200;

// ==================== Генерація URL ====================

function generateAllUrls(): string[] {
  const urls: string[] = [];

  // Головна
  urls.push(`${BASE_URL}`);

  // Калькулятори
  const calculatorSlugs = [
    'fop-tax', 'esv', 'salary', 'margin', 'cash-flow',
    'roi', 'break-even', 'penalty', 'vacation', 'customs',
  ];
  urls.push(`${BASE_URL}/calculators`);
  calculatorSlugs.forEach(s => urls.push(`${BASE_URL}/calculators/${s}`));

  // Документи
  const documentSlugs = [
    'contract', 'act', 'invoice', 'rent', 'sale', 'construction',
    'employment', 'loan', 'commission', 'nda', 'commercial-rent',
    'franchise', 'transportation', 'storage',
  ];
  urls.push(`${BASE_URL}/documents`);
  documentSlugs.forEach(s => urls.push(`${BASE_URL}/documents/${s}`));

  // Блог
  urls.push(`${BASE_URL}/blog`);

  // Міста
  const citySlugs = getAllCitySlugs();
  urls.push(`${BASE_URL}/cities`);
  citySlugs.forEach(c => urls.push(`${BASE_URL}/cities/${c}`));

  // Міста × Сервіси
  const serviceSlugs = getAllServiceSlugs();
  for (const city of citySlugs) {
    for (const service of serviceSlugs) {
      urls.push(`${BASE_URL}/cities/${city}/${service}`);
    }
  }

  return urls;
}

// ==================== OAuth 2.0 Авторизація ====================

function getTokenFileName(clientSecretFile: string): string {
  const basename = path.basename(clientSecretFile);
  const match = basename.match(/client_secret_(\d+)-/);
  const id = match ? match[1] : 'unknown';
  return path.join(TOOL_DIR, `token_${id}.json`);
}

async function authorize(clientSecretFile: string, port: number): Promise<any> {
  const credentials = JSON.parse(fs.readFileSync(clientSecretFile, 'utf-8'));
  const { client_id, client_secret } = credentials.installed;
  const tokenFile = getTokenFileName(clientSecretFile);

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    `http://localhost:${port}`
  );

  // Перевіряємо чи є збережений токен
  if (fs.existsSync(tokenFile)) {
    const token = JSON.parse(fs.readFileSync(tokenFile, 'utf-8'));
    oauth2Client.setCredentials(token);

    // Перевіряємо чи токен не протух
    if (token.expiry_date && token.expiry_date < Date.now()) {
      console.log(`  🔄 Токен протух, оновлюємо...`);
      try {
        const { credentials: newCreds } = await oauth2Client.refreshAccessToken();
        oauth2Client.setCredentials(newCreds);
        fs.writeFileSync(tokenFile, JSON.stringify(newCreds), 'utf-8');
        console.log(`  ✅ Токен оновлено`);
      } catch (err) {
        console.log(`  ⚠️ Не вдалося оновити токен, потрібна нова авторизація`);
        return await getNewToken(oauth2Client, tokenFile, port);
      }
    }

    return oauth2Client;
  }

  return await getNewToken(oauth2Client, tokenFile, port);
}

async function getNewToken(oauth2Client: any, tokenFile: string, port: number): Promise<any> {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/indexing'],
  });

  console.log(`\n🔗 Відкрийте посилання у браузері:\n`);
  console.log(authUrl);
  console.log(`\n⏳ Очікую авторизацію на порті ${port}...\n`);

  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const queryParams = new url.URL(req.url!, `http://localhost:${port}`).searchParams;
        const code = queryParams.get('code');

        if (code) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>✅ Авторизація успішна! Можете закрити це вікно.</h1>');

          const { tokens } = await oauth2Client.getToken(code);
          oauth2Client.setCredentials(tokens);
          fs.writeFileSync(tokenFile, JSON.stringify(tokens), 'utf-8');
          console.log(`  ✅ Авторизація пройшла успішно! Токен збережено.\n`);

          server.close();
          resolve(oauth2Client);
        }
      } catch (err) {
        reject(err);
      }
    });

    server.listen(port, () => {
      console.log(`  🖥️  Локальний сервер на http://localhost:${port}`);
    });
  });
}

// ==================== Пінг Sitemap ====================

async function pingSitemap() {
  console.log('\n📡 Пінг sitemap в Google...');
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(pingUrl);
    if (response.ok) {
      console.log(`✅ Sitemap пінг успішний: ${sitemapUrl}`);
    } else {
      console.log(`⚠️ Sitemap пінг відповів з кодом: ${response.status}`);
    }
  } catch (err) {
    console.log(`❌ Помилка пінгу sitemap: ${err}`);
  }
}

// ==================== Indexing API ====================

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function submitUrl(auth: any, urlToIndex: string, type: 'URL_UPDATED' | 'URL_DELETED' = 'URL_UPDATED'): Promise<boolean> {
  try {
    const indexing = google.indexing({ version: 'v3', auth });
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: urlToIndex,
        type,
      },
    });
    return true;
  } catch (err: any) {
    const status = err?.response?.status;
    const message = err?.response?.data?.error?.message || err.message;

    if (status === 429) {
      console.log(`  ⏳ Rate limit — чекаємо 60 сек...`);
      await sleep(60000);
      return false;
    }

    console.log(`  ❌ Помилка (${status}): ${message}`);
    return false;
  }
}

// ==================== Головна функція ====================

async function main() {
  const args = process.argv.slice(2);
  const skipIndexing = args.includes('--sitemap-only');
  const startFrom = parseInt(args.find(a => a.startsWith('--start='))?.split('=')[1] || '0');
  const accountIndex = args.find(a => a.startsWith('--account='));

  console.log('═══════════════════════════════════════════════');
  console.log('  🔍 Google Indexing Tool — ФОП Помічник');
  console.log('═══════════════════════════════════════════════\n');

  console.log(`📦 Знайдено ${CLIENT_SECRET_FILES.length} акаунтів (${CLIENT_SECRET_FILES.length * BATCH_PER_ACCOUNT} URL/день)`);

  // Генеруємо всі URL
  const allUrls = generateAllUrls();
  console.log(`📋 Всього URL для індексації: ${allUrls.length}`);
  console.log(`📊 Потрібно днів: ~${Math.ceil(allUrls.length / (CLIENT_SECRET_FILES.length * BATCH_PER_ACCOUNT))}`);

  // Крок 1: Пінг sitemap
  await pingSitemap();

  if (skipIndexing) {
    console.log('\n✅ Режим --sitemap-only: тільки пінг sitemap.');
    return;
  }

  // Визначаємо стартову позицію
  const progressFile = path.join(TOOL_DIR, 'progress.json');
  let globalStart = startFrom;
  if (globalStart === 0 && fs.existsSync(progressFile)) {
    const progress = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
    globalStart = progress.processed || 0;
    console.log(`\n📖 Продовжуємо з позиції ${globalStart} (попередній запуск: ${progress.lastRun})`);
  }

  const urlsToProcess = allUrls.slice(globalStart);
  if (urlsToProcess.length === 0) {
    console.log('\n✅ Всі URL вже відправлені!');
    return;
  }

  console.log(`\n🚀 Відправляємо ${Math.min(urlsToProcess.length, CLIENT_SECRET_FILES.length * BATCH_PER_ACCOUNT)} URL з ${urlsToProcess.length} залишилось\n`);

  // Крок 2: Авторизація та індексація для кожного акаунту послідовно
  let totalSuccess = 0;
  let totalFailed = 0;
  let offset = 0;

  for (let i = 0; i < CLIENT_SECRET_FILES.length; i++) {
    if (offset >= urlsToProcess.length) break;

    const secretFile = CLIENT_SECRET_FILES[i];
    const accountName = path.basename(secretFile).match(/client_secret_(\d+)-/)?.[1] || `account_${i}`;
    const port = 3333 + i;
    const batch = urlsToProcess.slice(offset, offset + BATCH_PER_ACCOUNT);

    console.log(`\n${'─'.repeat(50)}`);
    console.log(`🔐 Акаунт ${i + 1}/${CLIENT_SECRET_FILES.length} (ID: ${accountName})`);
    console.log(`   Порт: ${port} | URL: ${batch.length} шт | Діапазон: ${globalStart + offset}–${globalStart + offset + batch.length}`);
    console.log(`${'─'.repeat(50)}`);

    try {
      const auth = await authorize(secretFile, port);
      
      for (let j = 0; j < batch.length; j++) {
        const u = batch[j];
        process.stdout.write(`  [${j + 1}/${batch.length}] ${u.replace(BASE_URL, '')} ... `);

        const ok = await submitUrl(auth, u);
        if (ok) {
          totalSuccess++;
          console.log('✅');
        } else {
          totalFailed++;
        }

        if (j < batch.length - 1) {
          await sleep(DELAY_MS);
        }
      }

      offset += batch.length;
    } catch (err: any) {
      console.log(`  ❌ Помилка з акаунтом ${accountName}: ${err.message}`);
    }
  }

  // Зберігаємо прогрес
  const newProcessed = globalStart + offset;
  fs.writeFileSync(progressFile, JSON.stringify({
    lastRun: new Date().toISOString(),
    processed: newProcessed,
    total: allUrls.length,
    remaining: allUrls.length - newProcessed,
  }, null, 2), 'utf-8');

  console.log(`\n${'═'.repeat(50)}`);
  console.log(`  📊 Результат:`);
  console.log(`     ✅ Успішно: ${totalSuccess}`);
  console.log(`     ❌ Помилок: ${totalFailed}`);
  console.log(`     📋 Оброблено всього: ${newProcessed}/${allUrls.length}`);
  console.log(`     ⏭️  Залишилось: ${allUrls.length - newProcessed}`);
  if (allUrls.length - newProcessed > 0) {
    console.log(`\n  💡 Запустіть скрипт ще раз завтра для наступної порції.`);
  }
  console.log(`${'═'.repeat(50)}\n`);
}

main().catch(console.error);
