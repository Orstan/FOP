import { NextResponse } from 'next/server';

/**
 * API endpoint для отримання балансу банки
 * 
 * ВАЖЛИВО: Monobank не має публічного API для банок!
 * Баланс оновлюється вручну через environment variable.
 * 
 * Як оновити баланс:
 * 1. Перейдіть на https://send.monobank.ua/jar/9Ewef621zA
 * 2. Подивіться поточний баланс
 * 3. Додайте в Vercel environment variable: JAR_BALANCE_UAH = [сума]
 * 4. Redeploy проекту
 */
export async function GET() {
  try {
    // Отримуємо баланс з environment variable
    const balanceFromEnv = process.env.JAR_BALANCE_UAH;
    
    if (balanceFromEnv) {
      const balance = parseInt(balanceFromEnv, 10);
      
      if (!isNaN(balance)) {
        return NextResponse.json({ 
          balance: balance,
          goal: 25000,
          currency: 'UAH',
          source: 'environment',
          lastUpdate: process.env.JAR_LAST_UPDATE || 'manual'
        });
      }
    }
    
    // Якщо env variable не встановлено, повертаємо останнє відоме значення
    console.warn('[JAR API] JAR_BALANCE_UAH не встановлено, використовується fallback');
    
    // Останнє оновлення: 09.01.2026
    // Для оновлення див. JAR_BALANCE_UPDATE.md
    return NextResponse.json({ 
      balance: 5247, // Оновіть в Vercel env variable JAR_BALANCE_UAH
      goal: 25000,
      currency: 'UAH',
      source: 'fallback',
      message: 'Set JAR_BALANCE_UAH environment variable in Vercel to update balance automatically'
    });
    
  } catch (error) {
    console.error('[JAR API] Error:', error);
    
    return NextResponse.json({ 
      balance: 5000,
      goal: 25000,
      currency: 'UAH',
      source: 'error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 200 });
  }
}
