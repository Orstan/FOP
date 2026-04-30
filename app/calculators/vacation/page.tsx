"use client"

import { useState } from "react";
import Link from "next/link";
import { Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function VacationCalculator() {
  const [formData, setFormData] = useState({
    monthlySalary: "",
    vacationDays: "14",
    workDays: "247",
  });

  const [result, setResult] = useState<{
    averageDailySalary: number;
    vacationPay: number;
    netPay: number;
    tax: number;
    esv: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateVacation = () => {
    const salary = parseFloat(formData.monthlySalary);
    const days = parseInt(formData.vacationDays);
    const workDays = parseInt(formData.workDays);

    if (isNaN(salary) || isNaN(days) || salary <= 0 || days <= 0) {
      alert("Введіть коректні дані");
      return;
    }

    const averageDailySalary = (salary * 12) / workDays;
    const vacationPay = averageDailySalary * days;
    
    const taxRate = 0.23; // ПДФО 18% + ВЗ 5%
    const esvRate = 0.22;
    
    const tax = vacationPay * taxRate;
    const esv = salary * esvRate;
    const netPay = vacationPay - tax;

    setResult({
      averageDailySalary: Math.round(averageDailySalary * 100) / 100,
      vacationPay: Math.round(vacationPay * 100) / 100,
      netPay: Math.round(netPay * 100) / 100,
      tax: Math.round(tax * 100) / 100,
      esv: Math.round(esv * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Калькулятор відпускних
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Розрахунок відпускних виплат для найманих працівників
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Введіть дані
              </CardTitle>
              <CardDescription>
                Розрахунок середньої заробітної плати та відпускних
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthlySalary">Середня місячна зарплата (грн)</Label>
                <Input
                  id="monthlySalary"
                  name="monthlySalary"
                  type="number"
                  placeholder="Наприклад: 25000"
                  value={formData.monthlySalary}
                  onChange={handleChange}
                  className="text-lg"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Зарплата за останні 12 місяців, включаючи премії
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vacationDays">Кількість днів відпустки</Label>
                <Input
                  id="vacationDays"
                  name="vacationDays"
                  type="number"
                  placeholder="14"
                  value={formData.vacationDays}
                  onChange={handleChange}
                  className="text-lg"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Мінімум 14 днів на рік, основна відпустка - 24 дні
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workDays">Робочих днів у році</Label>
                <Input
                  id="workDays"
                  name="workDays"
                  type="number"
                  placeholder="247"
                  value={formData.workDays}
                  onChange={handleChange}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Для 2026 року: 247 робочих днів (без вихідних та свят)
                </p>
              </div>

              <Button onClick={calculateVacation} className="w-full" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Розрахувати відпускні
              </Button>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <div className="flex gap-2">
                  <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-purple-900 dark:text-purple-200">
                    <p className="font-semibold mb-1">Формула розрахунку</p>
                    <p>Відпускні = (Зарплата × 12) / Робочі дні × Дні відпустки</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Результат розрахунку</CardTitle>
              <CardDescription>
                Сума відпускних та утримань
              </CardDescription>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border-2 border-purple-500 dark:border-purple-600">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Відпускні (до утримань):</p>
                      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        {result.vacationPay.toLocaleString('uk-UA')} грн
                      </p>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">Середньоденна зарплата:</span>
                      <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {result.averageDailySalary.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-3 border-b dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400">ПДФО (18%) + ВЗ (5%):</span>
                      <span className="text-lg font-semibold text-red-600 dark:text-red-400">
                        -{result.tax.toLocaleString('uk-UA')} грн
                      </span>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">На руки:</span>
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {result.netPay.toLocaleString('uk-UA')} грн
                        </span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ЄСВ сплачує роботодавець:</p>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {result.esv.toLocaleString('uk-UA')} грн
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">Правила відпусток:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>• Мінімальна відпустка: 24 календарні дні на рік</li>
                      <li>• Відпускні виплачуються за 3 дні до відпустки</li>
                      <li>• Можна ділити відпустку на частини (мінімум 14 днів основної)</li>
                      <li>• Невикористану відпустку можна компенсувати грошима</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200">
                      <strong>Важливо:</strong> Роботодавець зобов'язаний надати відпустку після 6 місяців роботи. 
                      Відмовити у відпустці можна тільки у виняткових випадках.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12">
                  <div className="text-center text-gray-400 dark:text-gray-500">
                    <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Введіть дані та натисніть "Розрахувати"</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Види відпусток в Україні</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Основна</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                24 календарні дні щорічно для всіх працівників
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Може бути збільшена за колективним договором
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Додаткова</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                До 10 днів за шкідливі умови праці або особливий характер роботи
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Надається окремим категоріям працівників
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Без збереження</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                За згодою роботодавця на будь-який термін
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Відпускні не виплачуються
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
