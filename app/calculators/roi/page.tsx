"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ROICalculator() {
  const [investment, setInvestment] = useState<string>("");
  const [profit, setProfit] = useState<string>("");
  const [result, setResult] = useState<{
    roi: number;
    netProfit: number;
    isPositive: boolean;
  } | null>(null);

  const calculate = () => {
    const inv = parseFloat(investment);
    const prof = parseFloat(profit);
    if (isNaN(inv) || isNaN(prof) || inv <= 0) {
      alert("Введіть коректні суми");
      return;
    }

    const netProfit = prof - inv;
    const roi = (netProfit / inv) * 100;

    setResult({
      roi: Math.round(roi * 100) / 100,
      netProfit: Math.round(netProfit * 100) / 100,
      isPositive: roi >= 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"><ArrowLeft className="h-5 w-5" /><span className="font-semibold">ФОП Помічник</span></Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">ROI Калькулятор</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте повернення інвестицій (Return on Investment)</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-indigo-600" />Введіть дані</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="investment">💰 Інвестиція (витрати), грн</Label>
                <Input id="investment" type="number" placeholder="50000" value={investment} onChange={(e) => setInvestment(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Скільки ви вклали у проєкт/рекламу/обладнання</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profit">📈 Отриманий дохід, грн</Label>
                <Input id="profit" type="number" placeholder="75000" value={profit} onChange={(e) => setProfit(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Скільки ви заробили завдяки цій інвестиції</p>
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати ROI</Button>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Що таке ROI?</p>
                <p>Return on Investment показує, скільки ви заробили (або втратили) на кожну вкладену гривню. Позитивний ROI означає прибуток.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-600" />Результат</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Інвестиція:</span>
                    <span className="font-semibold">{parseFloat(investment).toLocaleString('uk-UA')} грн</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Отриманий дохід:</span>
                    <span className="font-semibold">{parseFloat(profit).toLocaleString('uk-UA')} грн</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b-2 dark:border-gray-600 border-gray-300">
                    <span className="font-semibold">Чистий прибуток:</span>
                    <span className={`text-xl font-bold ${result.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {result.isPositive ? '+' : ''}{result.netProfit.toLocaleString('uk-UA')} грн
                    </span>
                  </div>
                  
                  <div className={`rounded-lg p-4 ${result.isPositive ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                    <div className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">ROI (Return on Investment)</p>
                      <p className={`text-4xl font-bold ${result.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {result.isPositive ? '+' : ''}{result.roi}%
                      </p>
                      <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                        {result.isPositive 
                          ? `✅ На кожну вкладену гривню ви заробили ${(result.roi / 100).toFixed(2)} грн` 
                          : '⚠️ Інвестиція не окупилася'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-700 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Оцінка ефективності:</strong></p>
                    {result.roi >= 100 && <p>🔥 Відмінно! Інвестиція окупилася більш ніж вдвічі</p>}
                    {result.roi >= 50 && result.roi < 100 && <p>✅ Добре! Високий рівень повернення</p>}
                    {result.roi >= 20 && result.roi < 50 && <p>👍 Непогано! Стабільний прибуток</p>}
                    {result.roi >= 0 && result.roi < 20 && <p>⚡ Окей. Є прибуток, але можна краще</p>}
                    {result.roi < 0 && <p>❌ Збиток. Потрібно переглянути стратегію</p>}
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть дані та натисніть "Розрахувати ROI"</p></div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader><CardTitle>Формула ROI</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 font-mono text-center">
              <p className="text-lg">ROI = ((Дохід - Інвестиція) / Інвестиція) × 100%</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-semibold mb-2">Приклад 1 (реклама):</p>
                <p className="text-gray-600 dark:text-gray-400">Витратили 10 000 грн на рекламу<br/>Продали на 30 000 грн<br/>ROI = 200% (отримали 3 грн з кожної вкладеної)</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Приклад 2 (обладнання):</p>
                <p className="text-gray-600 dark:text-gray-400">Купили обладнання за 100 000 грн<br/>Заробили 150 000 грн за рік<br/>ROI = 50% (окупилося на 50%)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
