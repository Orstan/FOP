import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const JAR_BALANCE_KEY = 'jar-balance';

export async function POST(request: Request) {
  if (!redis) {
    return NextResponse.json({ error: 'Redis client is not available' }, { status: 500 });
  }

  try {
    const body = await request.json();
    console.log('[MONO WEBHOOK] Received:', JSON.stringify(body, null, 2));

    const newBalance = body?.statementItem?.jarBalance;

    if (typeof newBalance === 'number') {
      await redis.set(JAR_BALANCE_KEY, newBalance / 100);
      console.log(`[MONO WEBHOOK] Updated balance in Redis: ${newBalance / 100}`);
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
