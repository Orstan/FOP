import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const jarId = "9Ewef621zA";
    
    // Запит до Monobank API з сервера (обходить CORS)
    const response = await fetch(`https://api.monobank.ua/bank/jar/${jarId}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 300 } // Кешуємо на 5 хвилин
    });

    if (!response.ok) {
      throw new Error(`Monobank API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Баланс у копійках → переводимо в гривні
    const balanceInUAH = Math.round(data.balance / 100);
    
    return NextResponse.json({ 
      balance: balanceInUAH,
      goal: data.goal ? Math.round(data.goal / 100) : 25000,
      currency: 'UAH'
    });
    
  } catch (error) {
    console.error('Error fetching jar balance:', error);
    
    // Fallback на дефолтне значення
    return NextResponse.json({ 
      balance: 5000,
      goal: 25000,
      currency: 'UAH',
      error: 'Could not fetch real balance'
    }, { status: 200 });
  }
}
