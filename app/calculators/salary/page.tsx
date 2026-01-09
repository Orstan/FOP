"use client"

import { useState } from "react";
import Link from "next/link";
import { Calculator, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SalaryCalculator() {
  const [grossSalary, setGrossSalary] = useState<string>("");
  const [result, setResult] = useState<{
    pdfo: number;
    militaryTax: number;
    esv: number;
    totalTaxes: number;
    netSalary: number;
    employerCost: number;
  } | null>(null);

  const calculate = () => {
    const gross = parseFloat(grossSalary);
    if (isNaN(gross) || gross <= 0) {
      alert("Введіть коректну суму");
      return;
    }

    const pdfo = gross * 0.18;
    const militaryTax = gross * 0.015;
    const esv = gross * 0.22;
    const totalTaxes = pdfo + militaryTax;
    const netSalary = gross - totalTaxes;
    const employerCost = gross + esv;

    setResult({
      pdfo: Math.round(pdfo * 100) / 100,
      militaryTax: Math.round(militaryTax * 100) / 100,
      esv: Math.round(esv * 100) / 100,
      totalTaxes: Math.round(totalTaxes * 100) / 100,
      netSalary: Math.round(netSalary * 100) / 100,
      employerCost: Math.round(employerCost * 100) / 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Калькулятор зарплати</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Розрахуйте чисту зарплату на руки з урахуванням всіх податків</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5 text-blue-600" />Введіть дані</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="grossSalary">Зарплата (до вирахування податків), грн</Label>
                <Input id="grossSalary" type="number" placeholder="15000" value={grossSalary} onChange={(e) => setGrossSalary(e.target.value)} className="text-lg" />
              </div>
              <Button onClick={calculate} className="w-full" size="lg"><Calculator className="mr-2 h-5 w-5" />Розрахувати</Button>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm">
                <p className="font-semibold mb-1">Ставки 2026:</p>
                <p>• ПДФО: 18%</p>
                <p>• Військовий збір: 1.5%</p>
                <p>• ЄСВ (платить роботодавець): 22%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900">
            <CardHeader><CardTitle className="flex items-center gap-2"><Wallet className="h-5 w-5 text-green-600" />Результат</CardTitle></CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Зарплата (gross):</span>
                    <span className="font-semibold">{result.netSalary + result.totalTaxes} грн</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">ПДФО (18%):</span>
                    <span className="text-red-600 dark:text-red-400">-{result.pdfo} грн</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Військовий збір (1.5%):</span>
                    <span className="text-red-600 dark:text-red-400">-{result.militaryTax} грн</span>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">На руки (чиста):</span>
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">{result.netSalary.toLocaleString('uk-UA')} грн</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t dark:border-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">ЄСВ (платить роботодавець):</span>
                      <span className="font-semibold">{result.esv} грн</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-900 dark:text-gray-100 font-semibold">Повна вартість для роботодавця:</span>
                      <span className="text-xl font-bold">{result.employerCost.toLocaleString('uk-UA')} грн</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center py-12 text-center text-gray-400"><Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" /><p>Введіть суму та натисніть "Розрахувати"</p></div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
