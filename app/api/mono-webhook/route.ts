import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance';
const LAST_UPDATED_KEY = 'jar-balance-last-updated';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[MONO WEBHOOK] Received:', JSON.stringify(body, null, 2));

    const newBalance = body?.statementItem?.jarBalance;

    if (typeof newBalance === 'number') {
      const balanceInHryvnia = newBalance / 100;
      await kv.set(JAR_BALANCE_KEY, balanceInHryvnia);
      await kv.set(LAST_UPDATED_KEY, new Date().toISOString());
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
