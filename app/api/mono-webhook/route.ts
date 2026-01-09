import { NextResponse } from 'next/server';
import { createClient } from 'redis';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance';

const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err: Error) => console.error('[REDIS] Client Error', err));

/**
 * API endpoint для прийому вебхуків від Monobank
 * 
 * Monobank надсилатиме сюди POST-запити при нових транзакціях.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[MONO WEBHOOK] Received:', JSON.stringify(body, null, 2));

    // Отримуємо баланс з вебхука (в копійках)
    const newBalance = body?.statementItem?.jarBalance;

    if (typeof newBalance === 'number') {
      // Зберігаємо новий баланс в Redis (в гривнях)
      if (!redisClient.isOpen) await redisClient.connect();
      await redisClient.set(JAR_BALANCE_KEY, newBalance / 100);
      if (redisClient.isOpen) await redisClient.quit();
      console.log(`[MONO WEBHOOK] Updated balance in KV: ${newBalance / 100}`);
    }

    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('[MONO WEBHOOK] Error processing webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

/**
 * GET-запит для перевірки, що ендпоінт працює
 */
export async function GET() {
  return NextResponse.json({ message: 'Monobank webhook endpoint is active.' });
}
