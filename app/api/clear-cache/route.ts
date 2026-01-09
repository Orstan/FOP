import { NextResponse } from 'next/server';
import { createClient } from 'redis';

const JAR_BALANCE_KEY = 'jar-balance';

const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err: Error) => console.error('[REDIS] Client Error', err));

/**
 * API endpoint для примусового очищення кешу балансу банки.
 */
export async function GET() {
  try {
    if (!redisClient.isOpen) await redisClient.connect();
    
    await redisClient.del(JAR_BALANCE_KEY);
    
    if (redisClient.isOpen) await redisClient.quit();

    return NextResponse.json({ status: 'ok', message: 'Jar balance cache cleared.' });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Cache clearing failed', details: errorMessage }, { status: 500 });
  }
}
