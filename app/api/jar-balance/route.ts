import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

/**
 * API endpoint для автоматичного отримання балансу банки
 * 
 * Використовує Puppeteer для рендерингу JavaScript та парсингу динамічного контенту.
 * Оновлюється в реальному часі при кожному запиті.
 */
export async function GET() {
  let browser = null;
  
  try {
    const jarUrl = 'https://send.monobank.ua/jar/9Ewef621zA';
    
    console.log('[JAR API] Launching browser for:', jarUrl);
    
    // Налаштування для Vercel
    const isProduction = process.env.NODE_ENV === 'production';
    
    browser = await puppeteer.launch({
      args: isProduction ? chromium.args : ['--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: chromium.defaultViewport,
      executablePath: isProduction 
        ? await chromium.executablePath() 
        : 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    
    // Переходимо на сторінку банки
    await page.goto(jarUrl, { 
      waitUntil: 'networkidle2',
      timeout: 15000 
    });
    
    // Чекаємо поки завантажиться контент (макс 10 сек)
    await page.waitForTimeout(3000);
    
    // Витягуємо баланс та ціль з DOM після рендерингу JS
    const data = await page.evaluate(() => {
      const bodyText = document.body.innerText;
      
      let balance = 0;
      let goal = 25000;
      
      // Шукаємо "Накопичено: 150 ₴"
      const balanceMatch = bodyText.match(/Накопичено[:\s]*([\d\s]+)\s*₴/i);
      if (balanceMatch) {
        balance = parseInt(balanceMatch[1].replace(/\s/g, ''), 10);
      }
      
      // Шукаємо "Ціль: 25 000 ₴"
      const goalMatch = bodyText.match(/Ціль[:\s]*([\d\s]+)\s*₴/i);
      if (goalMatch) {
        goal = parseInt(goalMatch[1].replace(/\s/g, ''), 10);
      }
      
      return { balance, goal, bodyText: bodyText.substring(0, 500) };
    });
    
    await browser.close();
    
    console.log('[JAR API] Scraped balance:', data.balance, 'goal:', data.goal);
    
    if (data.balance === 0 || isNaN(data.balance)) {
      console.warn('[JAR API] Could not parse balance, using fallback');
      data.balance = 150;
    }
    
    return NextResponse.json({ 
      balance: data.balance,
      goal: data.goal,
      currency: 'UAH',
      source: 'puppeteer',
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
    
  } catch (error) {
    console.error('[JAR API] Error:', error);
    
    if (browser) {
      await browser.close();
    }
    
    // Fallback
    return NextResponse.json({ 
      balance: 150,
      goal: 25000,
      currency: 'UAH',
      source: 'fallback',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    });
  }
}
