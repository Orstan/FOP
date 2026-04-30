"use client"

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ESVCalculator() {
  const [income, setIncome] = useState<string>("");
  const [result, setResult] = useState<{
    esv: number;
    minESV: number;
    maxESV: number;
    recommended: number;
  } | null>(null);

  const calculateESV = () => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
      alert("Введіть коректну суму доходу");
      return;
    }

    const minWage = 8647;
    const esvRate = 0.22;
    
    const minESV = minWage * esvRate;
    const maxESV = 15 * minWage * esvRate;
    const calculatedESV = incomeAmount * esvRate;
    
    let recommended = minESV;
    if (calculatedESV > minESV && calculatedESV < maxESV) {
      recommended = calculatedESV;
    } else if (calculatedESV >= maxESV) {
      recommended = maxESV;
    }

    setResult({
      esv: Math.round(calculatedESV * 100) / 100,
      minESV: Math.round(minESV * 100) / 100,
      maxESV: Math.round(maxESV * 100) / 100,
      recommended: Math.round(recommended * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Калькулятор ЄСВ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Розрахунок Єдиного соціального внеску для ФОП
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Введіть дані
              </CardTitle>
              <CardDescription>
                Розрахуйте оптимальний розмір ЄСВ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="income">Місячний дохід (грн)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Наприклад: 50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="text-lg"
                />
              </div>

              <Button onClick={calculateESV} className="w-full" size="lg">
                <TrendingUp className="mr-2 h-5 w-5" />
                Розрахувати ЄСВ
              </Button>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    <p className="font-semibold mb-1">Що таке ЄСВ?</p>
                    <p>
                      Єдиний соціальний внесок - це обов'язковий платіж, який забезпечує 
                      вам пенсію, лікарняні та декретні виплати в майбутньому.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Результат розрахунку</CardTitle>
              <CardDescription>
                Детальний розклад платежів ЄСВ
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-2 border-green-500 dark:border-green-600">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Рекомендована сума ЄСВ:</p>
                      <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {result.recommended.toLocaleString('uk-UA')} грн
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Мінімальний ЄСВ:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.minESV.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Максимальний ЄСВ:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.maxESV.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-3">
                      <span className="text-gray-600 dark:text-gray-400">22% від вашого доходу:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.esv.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Важлива інформація:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• <strong>Мінімум:</strong> 1 902,34 грн (22% від мінімалки 8 647 грн)</li>
                      <li>• <strong>Максимум:</strong> 28 535,10 грн (22% від 15 мінзарплат)</li>
                      <li>• <strong>Термін сплати:</strong> до 20 числа наступного місяця</li>
                      <li>• <strong>Добровільний ЄСВ:</strong> можна платити більше мінімуму для вищої пенсії</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200">
                      <strong>Порада:</strong> Чим більше ви платите ЄСВ (в межах максимуму), 
                      тим вищу пенсію та лікарняні виплати ви отримаєте в майбутньому.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12">
                  <div className="text-center text-gray-400 dark:text-gray-500">
                    <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Введіть дохід та натисніть "Розрахувати"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Навіщо платити ЄСВ?</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Пенсія</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ваші внески формують вашу майбутню пенсію. Чим більше платите, тим більша пенсія.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Лікарняні</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Право на лікарняні виплати при тимчасовій непрацездатності.
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Декрет</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Декретні виплати при вагітності та догляді за дитиною.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
