import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const JAR_BALANCE_KEY = 'jar-balance';

/**
 * API endpoint для прийому вебхуків від Monobank
 * 
 * Monobank надсилатиме сюди POST-запити при нових транзакціях.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[MONO WEBHOOK] Received:', JSON.stringify(body, null, 2));

    // Отримуємо баланс з вебхука (в копійках)
    const newBalance = body?.statementItem?.jarBalance;

    if (typeof newBalance === 'number') {
      // Зберігаємо новий баланс в Vercel KV (в гривнях)
      await kv.set(JAR_BALANCE_KEY, newBalance / 100);
      console.log(`[MONO WEBHOOK] Updated balance in KV: ${newBalance / 100}`);
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
