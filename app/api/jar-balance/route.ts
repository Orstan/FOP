import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance';
const LAST_UPDATED_KEY = 'jar-balance-last-updated';
const CACHE_TTL_SECONDS = 300; // 5 minutes

async function fetchAndCacheFromMonobank() {
  const MONOBANK_API_TOKEN = process.env.MONOBANK_API_TOKEN;
  if (!MONOBANK_API_TOKEN) throw new Error('Monobank API token is not set.');

  const response = await fetch('https://api.monobank.ua/personal/client-info', {
    headers: { 'X-Token': MONOBANK_API_TOKEN },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Monobank API error: ${response.statusText}`);
  }

  const data = await response.json();
  const jar = data.jars?.find((j: any) => j.sendId === `jar/9Ewef621zA`);

  if (!jar) {
    throw new Error(`Jar with ID 9Ewef621zA not found.`);
  }

  const balance = jar.balance / 100;
  
  await kv.set(JAR_BALANCE_KEY, balance);
  await kv.set(LAST_UPDATED_KEY, new Date().toISOString());

  console.log(`[JAR BALANCE] Fetched and cached new balance from Monobank: ${balance}`);
  return balance;
}

export async function GET() {
  try {
    const balance = await kv.get<number>(JAR_BALANCE_KEY);
    const lastUpdated = await kv.get<string>(LAST_UPDATED_KEY);

    const now = new Date();
    const lastUpdatedDate = lastUpdated ? new Date(lastUpdated) : null;
    const isCacheStale = !lastUpdatedDate || (now.getTime() - lastUpdatedDate.getTime()) / 1000 > CACHE_TTL_SECONDS;

    if (isCacheStale || balance === null) {
      console.warn(`[JAR BALANCE] Cache is stale or missing. Re-fetching from Monobank...`);
      const newBalance = await fetchAndCacheFromMonobank();
      return NextResponse.json({ balance: newBalance, source: 'monobank-stale-fetch' });
    }

    return NextResponse.json({ balance, source: 'kv-cache' });

  } catch (error) {
    console.error('[JAR BALANCE] Failed to get balance:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ balance: 150, source: 'error-fallback', error: errorMessage }, { status: 500 });
  }
}
