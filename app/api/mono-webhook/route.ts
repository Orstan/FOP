import { NextResponse } from 'next/server';
import { redis } from '@/lib/redis';

const JAR_BALANCE_KEY = 'jar-balance';
const LAST_UPDATED_KEY = 'jar-balance-last-updated';

export async function POST(request: Request) {
  if (!redis) {
    return NextResponse.json({ error: 'Redis client is not available' }, { status: 500 });
  }

  try {
    const body = await request.json();
    console.log('[MONO WEBHOOK] Received:', JSON.stringify(body, null, 2));

    const newBalance = body?.statementItem?.jarBalance;

    if (typeof newBalance === 'number') {
      const balanceInHryvnia = newBalance / 100;
      const pipeline = redis.multi();
      pipeline.set(JAR_BALANCE_KEY, balanceInHryvnia);
      pipeline.set(LAST_UPDATED_KEY, new Date().toISOString());
      await pipeline.exec();
      console.log(`[MONO WEBHOOK] Updated balance via webhook: ${balanceInHryvnia}`);
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
