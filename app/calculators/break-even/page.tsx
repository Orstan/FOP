"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState<string>("");
  const [pricePerUnit, setPricePerUnit] = useState<string>("");
  const [variableCostPerUnit, setVariableCostPerUnit] = useState<string>("");
  const [result, setResult] = useState<{
    breakEvenUnits: number;
    breakEvenRevenue: number;
    contributionMargin: number;
  } | null>(null);

  const calculate = () => {
    const fixed = parseFloat(fixedCosts);
    const price = parseFloat(pricePerUnit);
    const variable = parseFloat(variableCostPerUnit);
    
    if (isNaN(fixed) || isNaN(price) || isNaN(variable) || fixed < 0 || price <= 0 || variable < 0) {
      alert("Введіть коректні суми");
      return;
    }

    if (price <= variable) {
      alert("Ціна продажу має бути більшою за змінні витрати на одиницю");
      return;
    }

    const contributionMargin = price - variable;
    const breakEvenUnits = Math.ceil(fixed / contributionMargin);
    const breakEvenRevenue = breakEvenUnits * price;

    setResult({
      breakEvenUnits,
      breakEvenRevenue: Math.round(breakEvenRevenue * 100) / 100,
      contributionMargin: Math.round(contributionMargin * 100) / 100,
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Break-Even калькулятор</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте точку беззбитковості вашого бізнесу</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-cyan-600" />Введіть дані</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fixedCosts">💼 Постійні витрати (на місяць), грн</Label>
                <Input id="fixedCosts" type="number" placeholder="30000" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Оренда, зарплати, комунальні, які не залежать від обсягу продажів</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerUnit">💰 Ціна за одиницю товару/послуги, грн</Label>
                <Input id="pricePerUnit" type="number" placeholder="500" value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Скільки коштує один товар або одна послуга</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="variableCostPerUnit">📦 Змінні витрати на одиницю, грн</Label>
                <Input id="variableCostPerUnit" type="number" placeholder="300" value={variableCostPerUnit} onChange={(e) => setVariableCostPerUnit(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Собівартість одного товару (закупівля, матеріали)</p>
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати</Button>
              
              <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Точка беззбитковості (Break-Even Point)</p>
                <p>Це кількість продажів, після якої ваш бізнес починає приносити прибуток. До цієї точки ви покриваєте тільки витрати.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Target className="h-5 w-5 text-orange-600" />Результат</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Точка беззбитковості</p>
                    <p className="text-4xl font-bold text-orange-600 dark:text-orange-400">{result.breakEvenUnits}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">одиниць товару/послуг</p>
                  </div>

                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Необхідний дохід:</span>
                    <span className="text-xl font-semibold">{result.breakEvenRevenue.toLocaleString('uk-UA')} грн</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Маржинальний дохід:</span>
                    <span className="font-semibold text-green-600 dark:text-green-400">{result.contributionMargin} грн/од.</span>
                  </div>

                  <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Що це означає?</strong></p>
                    <p>✅ Після продажу <strong>{result.breakEvenUnits} одиниць</strong> ви покриєте всі витрати</p>
                    <p>💰 Кожна наступна продана одиниця принесе <strong>{result.contributionMargin} грн</strong> чистого прибутку</p>
                    <p>🎯 Ваш мінімальний місячний дохід для нуля: <strong>{result.breakEvenRevenue.toLocaleString('uk-UA')} грн</strong></p>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-700">
                    <p className="text-sm font-semibold mb-2">Плануйте мінімум:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded p-2">
                        <p className="text-gray-500">На день:</p>
                        <p className="font-semibold">{Math.ceil(result.breakEvenUnits / 30)} од.</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded p-2">
                        <p className="text-gray-500">На тиждень:</p>
                        <p className="font-semibold">{Math.ceil(result.breakEvenUnits / 4)} од.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть дані та натисніть "Розрахувати"</p></div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader><CardTitle>Формула розрахунку</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="font-semibold mb-2">Break-Even Point (кількість) =</p>
              <p className="font-mono text-center text-lg">Постійні витрати / (Ціна - Змінні витрати на од.)</p>
            </div>
            <div className="pt-3">
              <p className="font-semibold mb-2">Приклад:</p>
              <p className="text-gray-600 dark:text-gray-400">
                Оренда і зарплати = 30 000 грн/міс<br/>
                Продаєте товар по 500 грн<br/>
                Закупівля одного товару = 300 грн<br/>
                <br/>
                Точка беззбитковості = 30 000 / (500 - 300) = <strong>150 одиниць</strong><br/>
                Потрібно продати мінімум 150 товарів, щоб вийти в нуль
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
