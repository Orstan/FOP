import { NextResponse } from 'next/server';

// This route is explicitly set to be dynamic to prevent caching
export const dynamic = 'force-dynamic';

export async function GET() {
  const MONOBANK_API_TOKEN = process.env.MONOBANK_API_TOKEN;
  const JAR_ID = '9Ewef621zA';

  if (!MONOBANK_API_TOKEN) {
    console.error('[JAR API] Monobank API token is not set.');
    return NextResponse.json({ balance: 150, source: 'fallback-no-token' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.monobank.ua/personal/client-info', {
      headers: {
        'X-Token': MONOBANK_API_TOKEN,
      },
      // Ensure no caching at the fetch level
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Monobank API error: ${response.statusText}`);
    }

    const data = await response.json();
    const jar = data.jars?.find((j: any) => j.sendId === `jar/${JAR_ID}`);

    if (!jar) {
      throw new Error(`Jar with ID ${JAR_ID} not found.`);
    }

    const balance = jar.balance / 100;

    return NextResponse.json({ 
      balance,
      source: 'monobank-api-direct',
    });

  } catch (error) {
    console.error('[JAR API] Failed to fetch jar balance:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ balance: 150, source: 'fallback-error', error: errorMessage }, { status: 500 });
  }
}
