"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CashFlowCalculator() {
  const [income, setIncome] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [result, setResult] = useState<{
    totalIncome: number;
    totalExpenses: number;
    netCashFlow: number;
    isProfit: boolean;
  } | null>(null);

  const calculate = () => {
    const incomeVal = parseFloat(income);
    const expensesVal = parseFloat(expenses);
    if (isNaN(incomeVal) || isNaN(expensesVal)) {
      alert("Введіть коректні суми");
      return;
    }

    const netCashFlow = incomeVal - expensesVal;
    setResult({
      totalIncome: incomeVal,
      totalExpenses: expensesVal,
      netCashFlow: Math.round(netCashFlow * 100) / 100,
      isProfit: netCashFlow >= 0,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Калькулятор Cash Flow</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте грошовий потік та чистий прибуток вашого бізнесу</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-blue-600" />Введіть дані за місяць</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="income">💰 Доходи (грн)</Label>
                <Input id="income" type="number" placeholder="100000" value={income} onChange={(e) => setIncome(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Всі надходження: продажі, послуги, інше</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expenses">💸 Витрати (грн)</Label>
                <Input id="expenses" type="number" placeholder="70000" value={expenses} onChange={(e) => setExpenses(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Оренда, зарплати, податки, закупівля товарів</p>
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати</Button>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Що таке Cash Flow?</p>
                <p>Це різниця між вашими доходами та витратами. Позитивний cash flow означає прибуток, негативний - збиток.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle>Результат</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">📈 Доходи:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">+{result.totalIncome.toLocaleString('uk-UA')} грн</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">📉 Витрати:</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">-{result.totalExpenses.toLocaleString('uk-UA')} грн</span>
                  </div>
                  <div className={`rounded-lg p-4 ${result.isProfit ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {result.isProfit ? <TrendingUp className="h-5 w-5 text-green-600" /> : <TrendingDown className="h-5 w-5 text-red-600" />}
                        <span className="font-semibold">Cash Flow:</span>
                      </div>
                      <span className={`text-2xl font-bold ${result.isProfit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {result.isProfit ? '+' : ''}{result.netCashFlow.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                      {result.isProfit ? '✅ Позитивний cash flow - ваш бізнес прибутковий!' : '⚠️ Негативний cash flow - потрібно скоротити витрати або збільшити доходи'}
                    </p>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-700 space-y-2 text-sm">
                    <p><strong>Рентабельність:</strong> {((result.netCashFlow / result.totalIncome) * 100).toFixed(1)}%</p>
                    <p className="text-gray-600 dark:text-gray-400">Показує, скільки % прибутку ви отримуєте з кожної гривні доходу</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть дані та натисніть "Розрахувати"</p></div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader><CardTitle>Типові витрати ФОП</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-2">Обов'язкові:</p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Єдиний податок (5% для групи 3)</li>
                <li>• ЄСВ (1760 грн/міс мінімум)</li>
                <li>• Оренда приміщення</li>
                <li>• Комунальні платежі</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Додаткові:</p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Зарплата співробітників</li>
                <li>• Закупівля товарів/матеріалів</li>
                <li>• Реклама та маркетинг</li>
                <li>• Бухгалтерські послуги</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
