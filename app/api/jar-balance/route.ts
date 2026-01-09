import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance'; // Key for Vercel KV

/**
 * API endpoint для отримання балансу банки з кешу Vercel KV.
 * Баланс оновлюється через вебхук /api/mono-webhook.
 */
export async function GET() {
  try {
    const balance = await kv.get(JAR_BALANCE_KEY);

    if (balance === null) {
      // Якщо в кеші нічого немає, повертаємо fallback
      // Це може статися при першому запуску, до першого вебхука
      console.warn('[JAR BALANCE] No balance found in KV, returning fallback.');
      return NextResponse.json({ balance: 150, source: 'kv-fallback' });
    }

    return NextResponse.json({ 
      balance,
      source: 'kv-cache',
    });

  } catch (error) {
    console.error('[JAR BALANCE] Failed to fetch balance from KV:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ balance: 150, source: 'kv-error', error: errorMessage }, { status: 500 });
  }
}
