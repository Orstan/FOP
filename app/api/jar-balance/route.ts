import { NextResponse } from 'next/server';

// This route is revalidated every 60 seconds by Vercel's caching mechanism
export const revalidate = 60;

/**
 * API endpoint для отримання балансу банки Monobank
 * Використовує офіційний API Monobank.
 */
export async function GET() {
  const MONOBANK_API_TOKEN = process.env.MONOBANK_API_TOKEN;
  const JAR_ID = '9Ewef621zA'; // Ваш ID банки

  if (!MONOBANK_API_TOKEN) {
    console.error('[JAR API] Monobank API token is not set.');
    // Повертаємо fallback, щоб сайт не падав
    return NextResponse.json({ balance: 150, source: 'fallback-no-token' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.monobank.ua/personal/client-info', {
      headers: {
        'X-Token': MONOBANK_API_TOKEN,
      },
      // Next.js revalidation strategy
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Monobank API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Знаходимо потрібну банку за її sendId
    const jar = data.jars?.find((j: any) => j.sendId === JAR_ID);

    if (!jar) {
      throw new Error(`Jar with ID ${JAR_ID} not found.`);
    }

    // Баланс повертається в копійках, переводимо в гривні
    const balance = jar.balance / 100;

    return NextResponse.json({ 
      balance,
      source: 'monobank-api',
    });

  } catch (error) {
    console.error('[JAR API] Failed to fetch jar balance:', error);
    // Повертаємо fallback у випадку помилки
    return NextResponse.json({ balance: 150, source: 'fallback-error' }, { status: 500 });
  }
}
