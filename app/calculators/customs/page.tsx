"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CustomsCalculator() {
  const [carPrice, setCarPrice] = useState<string>("");
  const [engineVolume, setEngineVolume] = useState<string>("");
  const [carAge, setCarAge] = useState<string>("0-3");
  const [fuelType, setFuelType] = useState<string>("petrol");
  const [result, setResult] = useState<{
    customsDuty: number;
    exciseTax: number;
    vat: number;
    total: number;
    totalWithCar: number;
  } | null>(null);

  const calculate = () => {
    const price = parseFloat(carPrice);
    const volume = parseFloat(engineVolume);
    if (isNaN(price) || isNaN(volume) || price <= 0 || volume <= 0) {
      alert("Введіть коректні дані");
      return;
    }

    // Ставка мита залежить від віку авто
    let dutyRate = 0.10; // 10% для нових авто
    if (carAge === "3-5") dutyRate = 0.10;
    else if (carAge === "5-8") dutyRate = 0.10;
    else if (carAge === "8+") dutyRate = 0.10;

    const customsDuty = price * dutyRate;

    // Акцизний збір залежить від об'єму двигуна та типу палива
    let exciseRate = 0;
    if (fuelType === "petrol") {
      if (volume <= 3000) exciseRate = 50 * volume / 1000;
      else exciseRate = 100 * volume / 1000;
    } else if (fuelType === "diesel") {
      if (volume <= 3500) exciseRate = 75 * volume / 1000;
      else exciseRate = 150 * volume / 1000;
    } else if (fuelType === "electric") {
      exciseRate = 0; // Електромобілі без акцизу
    }

    const exciseTax = exciseRate * (carAge === "0-3" ? 1 : carAge === "3-5" ? 1.5 : 2);

    // ПДВ 20% від (вартість + мито + акциз)
    const taxBase = price + customsDuty + exciseTax;
    const vat = taxBase * 0.20;

    const total = customsDuty + exciseTax + vat;
    const totalWithCar = price + total;

    setResult({
      customsDuty: Math.round(customsDuty),
      exciseTax: Math.round(exciseTax),
      vat: Math.round(vat),
      total: Math.round(total),
      totalWithCar: Math.round(totalWithCar),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Калькулятор розмитнення авто</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте вартість розмитнення автомобіля в Україні 2026</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Car className="h-5 w-5 text-blue-600" />Введіть дані авто</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="carPrice">Вартість авто (USD/EUR)</Label>
                <Input id="carPrice" type="number" placeholder="15000" value={carPrice} onChange={(e) => setCarPrice(e.target.value)} className="text-lg" />
                <p className="text-xs text-gray-500">Ціна на аукціоні або у продавця</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="engineVolume">Об'єм двигуна (см³)</Label>
                <Input id="engineVolume" type="number" placeholder="2000" value={engineVolume} onChange={(e) => setEngineVolume(e.target.value)} className="text-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carAge">Вік авто</Label>
                <Select value={carAge} onValueChange={setCarAge}>
                  <SelectTrigger id="carAge"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-3">До 3 років (нові)</SelectItem>
                    <SelectItem value="3-5">3-5 років</SelectItem>
                    <SelectItem value="5-8">5-8 років</SelectItem>
                    <SelectItem value="8+">Понад 8 років</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fuelType">Тип палива</Label>
                <Select value={fuelType} onValueChange={setFuelType}>
                  <SelectTrigger id="fuelType"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Бензин</SelectItem>
                    <SelectItem value="diesel">Дизель</SelectItem>
                    <SelectItem value="electric">Електро</SelectItem>
                    <SelectItem value="hybrid">Гібрид</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати</Button>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">⚠️ Попередній розрахунок</p>
                <p className="text-xs">Фінальна вартість може відрізнятися. Консультуйтесь з митним брокером.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle>Результат розрахунку</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Вартість авто:</span>
                    <span className="font-semibold">${parseFloat(carPrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Мито (10%):</span>
                    <span className="text-red-600 dark:text-red-400">${result.customsDuty.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Акцизний збір:</span>
                    <span className="text-red-600 dark:text-red-400">${result.exciseTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b-2 dark:border-gray-600 border-gray-300">
                    <span className="text-gray-600 dark:text-gray-400">ПДВ (20%):</span>
                    <span className="text-red-600 dark:text-red-400">${result.vat.toLocaleString()}</span>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Разом платежі:</span>
                      <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">${result.total.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Загальна вартість з авто:</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${result.totalWithCar.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-700 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p><strong>Додаткові витрати:</strong></p>
                    <p>• Послуги брокера: $300-800</p>
                    <p>• Доставка з Європи: $500-1500</p>
                    <p>• Сертифікація: $100-300</p>
                    <p>• Реєстрація: $50-150</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть дані та натисніть "Розрахувати"</p></div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader><CardTitle>Складові розмитнення</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-1">1. Мито (10%)</p>
              <p className="text-gray-600 dark:text-gray-400">Фіксована ставка 10% від вартості авто для всіх легкових автомобілів</p>
            </div>
            <div>
              <p className="font-semibold mb-1">2. Акцизний збір</p>
              <p className="text-gray-600 dark:text-gray-400">Залежить від об'єму двигуна, віку авто та типу палива. Електромобілі звільнені від акцизу до 2028 року.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">3. ПДВ (20%)</p>
              <p className="text-gray-600 dark:text-gray-400">20% від суми: вартість авто + мито + акциз</p>
            </div>
            <div className="pt-3 border-t dark:border-gray-700">
              <p className="text-xs text-gray-500">💡 Дані актуальні на 2026 рік. Ставки можуть змінюватися.</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
