import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance';
const LAST_UPDATED_KEY = 'jar-balance-last-updated';

export async function GET() {
  try {
    await kv.del(JAR_BALANCE_KEY, LAST_UPDATED_KEY);
    return NextResponse.json({ status: 'ok', message: 'Jar balance cache cleared.' });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Cache clearing failed', details: errorMessage }, { status: 500 });
  }
}
