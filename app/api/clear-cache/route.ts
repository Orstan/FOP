import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const JAR_BALANCE_KEY = 'jar-balance';

export async function GET() {
  if (!redis) {
    return NextResponse.json({ error: 'Redis client is not available' }, { status: 500 });
  }

  try {
    await redis.del(JAR_BALANCE_KEY);
    return NextResponse.json({ status: 'ok', message: 'Jar balance cache cleared.' });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Cache clearing failed', details: errorMessage }, { status: 500 });
  }
}
