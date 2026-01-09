import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const JAR_BALANCE_KEY = 'jar-balance';
const LAST_UPDATED_KEY = 'jar-balance-last-updated';
const CACHE_TTL_SECONDS = 300; // 5 minutes

async function fetchAndCacheFromMonobank() {
  if (!redis) throw new Error('Redis client is not available.');

  const MONOBANK_API_TOKEN = process.env.MONOBANK_API_TOKEN;
  if (!MONOBANK_API_TOKEN) throw new Error('Monobank API token is not set.');

  const response = await fetch('https://api.monobank.ua/personal/client-info', {
    headers: { 'X-Token': MONOBANK_API_TOKEN },
    next: { revalidate: 60 }, // Revalidate fetch itself every 60s
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
  
  // Use a pipeline to set both values atomically
  const pipeline = redis.multi();
  pipeline.set(JAR_BALANCE_KEY, balance);
  pipeline.set(LAST_UPDATED_KEY, new Date().toISOString());
  await pipeline.exec();

  console.log(`[JAR BALANCE] Fetched and cached new balance from Monobank: ${balance}`);
  return balance;
}

export async function GET() {
  if (!redis) {
    return NextResponse.json({ balance: 150, source: 'no-redis-client' }, { status: 500 });
  }

  try {
    const [balanceString, lastUpdatedString] = await redis.mGet([
      JAR_BALANCE_KEY,
      LAST_UPDATED_KEY,
    ]);

    const now = new Date();
    const lastUpdated = lastUpdatedString ? new Date(lastUpdatedString) : null;
    const isCacheStale = !lastUpdated || (now.getTime() - lastUpdated.getTime()) / 1000 > CACHE_TTL_SECONDS;

    if (isCacheStale || !balanceString) {
      console.warn(`[JAR BALANCE] Cache is stale or missing. Re-fetching from Monobank...`);
      const balance = await fetchAndCacheFromMonobank();
      return NextResponse.json({ balance, source: 'monobank-stale-fetch' });
    }

    return NextResponse.json({ balance: parseFloat(balanceString), source: 'redis-cache' });

  } catch (error) {
    console.error('[JAR BALANCE] Failed to get balance:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ balance: 150, source: 'error-fallback', error: errorMessage }, { status: 500 });
  }
}
