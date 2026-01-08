"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function MarginCalculator() {
  const [costPrice, setCostPrice] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<string>("");
  const [result, setResult] = useState<{
    profit: number;
    margin: number;
    markup: number;
  } | null>(null);

  const calculate = () => {
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);
    if (isNaN(cost) || isNaN(selling) || cost <= 0 || selling <= 0) {
      alert("Введіть коректні суми");
      return;
    }

    const profit = selling - cost;
    const margin = (profit / selling) * 100;
    const markup = (profit / cost) * 100;

    setResult({
      profit: Math.round(profit * 100) / 100,
      margin: Math.round(margin * 100) / 100,
      markup: Math.round(markup * 100) / 100,
    });
  };

  const calculateSellingPrice = () => {
    const cost = parseFloat(costPrice);
    const markupValue = parseFloat(sellingPrice);
    if (isNaN(cost) || isNaN(markupValue) || cost <= 0) {
      alert("Введіть коректну собівартість");
      return;
    }
    const calculatedPrice = cost * (1 + markupValue / 100);
    setSellingPrice(calculatedPrice.toFixed(2));
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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Калькулятор маржі та наценки</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте прибуток, маржу та наценку для вашого товару</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-purple-600" />Введіть дані</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="costPrice">Собівартість (ціна закупки), грн</Label>
                <Input id="costPrice" type="number" placeholder="1000" value={costPrice} onChange={(e) => setCostPrice(e.target.value)} className="text-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellingPrice">Ціна продажу, грн</Label>
                <Input id="sellingPrice" type="number" placeholder="1500" value={sellingPrice} onChange={(e) => setSellingPrice(e.target.value)} className="text-lg" />
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати</Button>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-2">Різниця між маржею та наценкою:</p>
                <p><strong>Маржа</strong> - % прибутку від ціни продажу</p>
                <p><strong>Наценка</strong> - % прибутку від собівартості</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-600" />Результат</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Прибуток:</span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">{result.profit.toLocaleString('uk-UA')} грн</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Маржа (від ціни продажу):</span>
                    <span className="text-xl font-semibold text-purple-600 dark:text-purple-400">{result.margin}%</span>
                  </div>
                  
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Наценка (від собівартості):</span>
                    <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">{result.markup}%</span>
                  </div>

                  <div className="pt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>💡 <strong>Типові наценки:</strong></p>
                    <p>• Продукти харчування: 15-30%</p>
                    <p>• Одяг та взуття: 50-100%</p>
                    <p>• Електроніка: 10-20%</p>
                    <p>• Послуги: 30-100%</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть суми та натисніть "Розрахувати"</p></div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader><CardTitle>Формули розрахунку</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div><strong>Прибуток =</strong> Ціна продажу - Собівартість</div>
            <div><strong>Маржа (%) =</strong> (Прибуток / Ціна продажу) × 100</div>
            <div><strong>Наценка (%) =</strong> (Прибуток / Собівартість) × 100</div>
            <div className="pt-3 border-t dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">Приклад: Купили за 1000 грн, продали за 1500 грн</p>
              <p>Прибуток = 500 грн | Маржа = 33.3% | Наценка = 50%</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
