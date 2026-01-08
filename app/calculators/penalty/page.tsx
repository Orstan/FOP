"use client"

import { useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function PenaltyCalculator() {
  const [formData, setFormData] = useState({
    amount: "",
    daysLate: "",
    penaltyRate: "120",
  });

  const [result, setResult] = useState<{
    penalty: number;
    total: number;
    dailyPenalty: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePenalty = () => {
    const amount = parseFloat(formData.amount);
    const days = parseInt(formData.daysLate);
    const rate = parseFloat(formData.penaltyRate);

    if (isNaN(amount) || isNaN(days) || amount <= 0 || days <= 0) {
      alert("Введіть коректні дані");
      return;
    }

    const nbuRate = 0.13;
    const dailyRate = (nbuRate * (rate / 100)) / 365;
    const dailyPenalty = amount * dailyRate;
    const totalPenalty = dailyPenalty * days;

    setResult({
      penalty: Math.round(totalPenalty * 100) / 100,
      total: Math.round((amount + totalPenalty) * 100) / 100,
      dailyPenalty: Math.round(dailyPenalty * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/calculators" className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Калькулятори</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Калькулятор пені та штрафів
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Розрахуйте пеню за прострочення платежу податків або комерційних зобов'язань
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                Введіть дані
              </CardTitle>
              <CardDescription>
                Розрахунок пені за прострочення платежу
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Сума заборгованості (грн)</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Наприклад: 10000"
                  value={formData.amount}
                  onChange={handleChange}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="daysLate">Кількість днів прострочення</Label>
                <Input
                  id="daysLate"
                  name="daysLate"
                  type="number"
                  placeholder="Наприклад: 30"
                  value={formData.daysLate}
                  onChange={handleChange}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="penaltyRate">Ставка пені (% від облікової ставки НБУ)</Label>
                <Input
                  id="penaltyRate"
                  name="penaltyRate"
                  type="number"
                  placeholder="120"
                  value={formData.penaltyRate}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Для податків: 120%. Для комерційних договорів: зазвичай 100-150%
                </p>
              </div>

              <Button onClick={calculatePenalty} className="w-full" size="lg">
                <AlertCircle className="mr-2 h-5 w-5" />
                Розрахувати пеню
              </Button>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-900 dark:text-red-200">
                    <p className="font-semibold mb-1">Дані на 2026 рік</p>
                    <p>Облікова ставка НБУ: 13% річних</p>
                    <p>Ставка пені за податки: 120% від облікової ставки</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Результат розрахунку</CardTitle>
              <CardDescription>
                Сума пені та загальна заборгованість
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-2 border-red-500 dark:border-red-600">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Сума пені:</p>
                      <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                        {result.penalty.toLocaleString('uk-UA')} грн
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Основний борг:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {parseFloat(formData.amount).toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Пеня за день:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.dailyPenalty.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Разом до сплати:</span>
                        <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                          {result.total.toLocaleString('uk-UA')} грн
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Як уникнути пені:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Сплачуйте податки до 20 числа наступного місяця</li>
                      <li>• Подавайте декларації вчасно (до 10 числа)</li>
                      <li>• Встановіть автоплатежі у банку для податків</li>
                      <li>• Ведіть календар платежів</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200">
                      <strong>Важливо:</strong> Крім пені, податкова може нарахувати штраф до 50% від суми заборгованості. 
                      При великих боргах можливе блокування рахунків.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12">
                  <div className="text-center text-gray-400 dark:text-gray-500">
                    <AlertCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Введіть дані та натисніть "Розрахувати"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Види пені в Україні</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Податкова пеня</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                120% від облікової ставки НБУ за кожен день прострочення
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Нараховується за несвоєчасну сплату податків та ЄСВ
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Комерційна пеня</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Згідно з договором, зазвичай 0,1% - 0,5% за день
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                За прострочення оплати за товари/послуги
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">Інфляційні втрати</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Індекс інфляції + 3% річних
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                За простроченою грошовою заборгованістю
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
