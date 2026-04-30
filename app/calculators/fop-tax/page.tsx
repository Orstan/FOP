"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, Info, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ThemeToggle } from "@/components/theme-toggle";

export default function FOPTaxCalculator() {
  const [income, setIncome] = useState<string>("");
  const [group, setGroup] = useState<string>("1");
  const [result, setResult] = useState<{
    singleTax: number;
    esv: number;
    militaryTax: number;
    total: number;
    netIncome: number;
  } | null>(null);

  const [penaltyState, setPenaltyState] = useState({
    debt: "",
    days: "",
    taxType: "esv",
    penaltyResult: null as number | null,
  });

  const nbuRate = 0.15; // NBU discount rate (15% станом на 2026)

  const calculatePenalty = () => {
    const debtAmount = parseFloat(penaltyState.debt);
    const daysDelayed = parseInt(penaltyState.days, 10);

    if (isNaN(debtAmount) || debtAmount <= 0 || isNaN(daysDelayed) || daysDelayed <= 0) {
      alert("Введіть коректну суму боргу та кількість днів прострочення");
      return;
    }

    let penalty = 0;
    if (penaltyState.taxType === "esv") {
      // Penalty for ESV is 0.1% per day
      penalty = debtAmount * 0.001 * daysDelayed;
    } else {
      // Penalty for Single Tax is 120% of NBU rate per year
      const dailyRate = (1.2 * nbuRate) / 365;
      penalty = debtAmount * dailyRate * daysDelayed;
    }

    setPenaltyState(prevState => ({
      ...prevState,
      penaltyResult: Math.round(penalty * 100) / 100,
    }));
  };

  const calculateTax = () => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount <= 0) {
      alert("Введіть коректну суму доходу");
      return;
    }

    let singleTax = 0;
    let esv = 0;
    let militaryTax = 0;
    const minWage = 8647;
    const esvRate = 0.22;

    switch (group) {
      case "1":
        singleTax = minWage * 0.10; // до 10% мінзарплати (встановлює місцева рада)
        esv = minWage * esvRate;
        militaryTax = minWage * 0.10; // 10% від мінзарплати
        break;
      case "2":
        singleTax = minWage * 0.20;
        esv = minWage * esvRate;
        militaryTax = minWage * 0.10; // 10% від мінзарплати
        break;
      case "3":
        singleTax = incomeAmount * 0.05;
        esv = minWage * esvRate;
        militaryTax = incomeAmount * 0.01; // 1% від доходу
        break;
    }

    const total = singleTax + esv + militaryTax;
    const netIncome = incomeAmount - total;

    setResult({
      singleTax: Math.round(singleTax * 100) / 100,
      esv: Math.round(esv * 100) / 100,
      militaryTax: Math.round(militaryTax * 100) / 100,
      total: Math.round(total * 100) / 100,
      netIncome: Math.round(netIncome * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Калькулятор податків ФОП
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Розрахуйте Єдиний податок та ЄСВ за вашою групою оподаткування
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-green-600 dark:text-green-400" />
                Введіть дані
              </CardTitle>
              <CardDescription>
                Оберіть групу ФОП та введіть очікуваний дохід
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="group">Група ФОП</Label>
                <Select value={group} onValueChange={setGroup}>
                  <SelectTrigger id="group">
                    <SelectValue placeholder="Оберіть групу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Група 1 (роздрібна торгівля, до 1 444 049 грн/рік)</SelectItem>
                    <SelectItem value="2">Група 2 (послуги для юросіб, до 7 211 598 грн/рік)</SelectItem>
                    <SelectItem value="3">Група 3 (послуги для всіх, до 10 091 049 грн/рік)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">Очікуваний дохід (грн)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Наприклад: 50000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="text-lg"
                />
              </div>

              <Button onClick={calculateTax} className="w-full" size="lg">
                <Calculator className="mr-2 h-5 w-5" />
                Розрахувати
              </Button>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900 dark:text-blue-200">
                    <p className="font-semibold mb-1">Дані актуальні на 2026 рік</p>
                    <p>Мінімальна зарплата: 8 647 грн</p>
                    <p>Ставка ЄСВ: 22% | Військовий збір: 10% мінзарплати (1-2 гр.) / 1% доходу (3 гр.)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Результат розрахунку</CardTitle>
              <CardDescription>
                Детальний розклад платежів до бюджету
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Єдиний податок:</span>
                      <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {result.singleTax.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Військовий збір:</span>
                      <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {result.militaryTax.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">ЄСВ (Єдиний соціальний внесок):</span>
                      <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {result.esv.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b-2 dark:border-gray-600 border-gray-300">
                      <span className="text-gray-900 dark:text-gray-100 font-semibold">Разом до сплати:</span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {result.total.toLocaleString('uk-UA')} грн
                      </span>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">Чистий дохід:</span>
                        <span className="text-2xl font-bold text-green-700 dark:text-green-300">
                          {result.netIncome.toLocaleString('uk-UA')} грн
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Терміни сплати:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Єдиний податок: до 20 числа наступного місяця</li>
                      <li>• ЄСВ: до 20 числа наступного місяця</li>
                      <li>• Квартальна звітність: до 10 числа наступного місяця</li>
                    </ul>
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <Link href="/blog/fop-taxes-2026">
                      Детальніше про податки ФОП
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12">
                  <div className="text-center text-gray-400 dark:text-gray-500">
                    <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Введіть дані та натисніть "Розрахувати"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Пояснення груп ФОП</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Група 1</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Роздрібна торгівля на ринках. Ліміт доходу: до 1 444 049 грн/рік. 
                Фіксований ЄП (до 10% мінзарплати) + ЄСВ + ВЗ (10% мінзарплати).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Група 2</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Надання послуг юридичним особам. Ліміт доходу: до 7 211 598 грн/рік.
                Фіксований податок (20% мінзарплати) + ЄСВ + ВЗ (10% мінзарплати).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Група 3</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Надання послуг будь-яким особам. Ліміт доходу: до 10 091 049 грн/рік.
                5% від доходу + ЄСВ + ВЗ (1% від доходу). Найпопулярніша група для IT-фахівців та фрілансерів.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              Калькулятор пені
            </CardTitle>
            <CardDescription>
              Розрахуйте пеню за несвоєчасну сплату ЄСВ або Єдиного податку
            </CardDescription>
          </CardHeader>
          <CardContent className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="taxType">Тип податку</Label>
                <Select 
                  value={penaltyState.taxType} 
                  onValueChange={(value) => setPenaltyState(s => ({...s, taxType: value, penaltyResult: null}))}
                >
                  <SelectTrigger id="taxType">
                    <SelectValue placeholder="Оберіть тип податку" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="esv">ЄСВ (пеня 0.1% за день)</SelectItem>
                    <SelectItem value="single_tax">Єдиний податок (120% ставки НБУ)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="debt">Сума боргу (грн)</Label>
                <Input
                  id="debt"
                  type="number"
                  placeholder="Наприклад: 10000"
                  value={penaltyState.debt}
                  onChange={(e) => setPenaltyState(s => ({...s, debt: e.target.value}))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="days">Днів прострочення</Label>
                <Input
                  id="days"
                  type="number"
                  placeholder="Наприклад: 30"
                  value={penaltyState.days}
                  onChange={(e) => setPenaltyState(s => ({...s, days: e.target.value}))}
                />
              </div>
              <Button onClick={calculatePenalty} className="w-full" size="lg">
                <Calculator className="mr-2 h-5 w-5" />
                Розрахувати пеню
              </Button>
            </div>
            <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
              {penaltyState.penaltyResult !== null ? (
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-400">Сума пені складає:</p>
                  <p className="text-4xl font-bold text-red-600 dark:text-red-400 my-2">
                    {penaltyState.penaltyResult.toLocaleString('uk-UA')} грн
                  </p>
                  <p className="text-xs text-gray-500 mt-4">* Розрахунок є орієнтовним. Остаточну суму уточнюйте в податковій.</p>
                </div>
              ) : (
                <div className="text-center text-gray-400 dark:text-gray-500">
                  <p>Введіть дані для розрахунку</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  );
}
