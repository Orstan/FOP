import { NextResponse } from 'next/server';
import { createClient } from 'redis';
import { kv } from '@vercel/kv'; // Keep for type compatibility, but we'll use redis client

const JAR_BALANCE_KEY = 'jar-balance';

// Create a Redis client from the Vercel environment variable
const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err: Error) => console.error('[REDIS] Client Error', err));

async function fetchFromMonobank() {
  const MONOBANK_API_TOKEN = process.env.MONOBANK_API_TOKEN;
  const JAR_ID = '9Ewef621zA';

  if (!MONOBANK_API_TOKEN) {
    throw new Error('Monobank API token is not set.');
  }

  const response = await fetch('https://api.monobank.ua/personal/client-info', {
    headers: { 'X-Token': MONOBANK_API_TOKEN },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('[JAR API] Monobank API Error Body:', errorBody);
    throw new Error(`Monobank API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const jar = data.jars?.find((j: any) => j.sendId === `jar/${JAR_ID}`);

  if (!jar) {
    throw new Error(`Jar with ID ${JAR_ID} not found.`);
  }

  const balance = jar.balance / 100;
  // Зберігаємо отриманий баланс в Redis
  if (!redisClient.isOpen) await redisClient.connect();
  await redisClient.set(JAR_BALANCE_KEY, balance);
  return balance;
}

export async function GET() {
  try {
    if (!redisClient.isOpen) await redisClient.connect();
    const balanceString = await redisClient.get(JAR_BALANCE_KEY);
    let balance: number | null = balanceString ? parseFloat(balanceString) : null;

    if (balance === null) {
      console.warn('[JAR BALANCE] No balance in KV, fetching from Monobank...');
      balance = await fetchFromMonobank();
      if (redisClient.isOpen) await redisClient.quit();
      return NextResponse.json({ balance, source: 'monobank-initial-fetch' });
    }

    if (redisClient.isOpen) await redisClient.quit();
    return NextResponse.json({ balance, source: 'redis-cache' });

  } catch (error) {
    console.error('[JAR BALANCE] Failed to get balance:', error);
    if (redisClient.isOpen) await redisClient.quit();
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ balance: 150, source: 'error-fallback', error: errorMessage }, { status: 500 });
  }
}
