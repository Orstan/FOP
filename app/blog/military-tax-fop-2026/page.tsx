import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, AlertCircle, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Військовий Збір для ФОП 2026 — Нові Ставки 5%, Розрахунок, Терміни",
  description: "Повний гайд по військовому збору для ФОП у 2026 році. Нова ставка 5% для зарплат, 10% від мінзарплати для 1-2 групи, 1% від доходу для 3 групи. Терміни, розрахунки.",
  keywords: ["військовий збір ФОП 2026", "ВЗ для підприємців", "ставка військового збору 5%", "військовий збір 3 група"],
  openGraph: { title: "Військовий Збір для ФОП 2026 — Повний гайд", description: "Нові ставки ВЗ для всіх груп ФОП", type: "article" },
  alternates: { canonical: '/blog/military-tax-fop-2026' },
};

export default function MilitaryTaxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium no-underline">← Назад до блогу</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Військовий Збір для ФОП у 2026 році: Повний гайд</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 30 квітня 2026</time><span>•</span><span>Читання: 10 хв</span>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚠️ Важлива зміна з 2025 року!</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  З 1 січня 2025 року <strong>ставка військового збору для зарплат збільшена з 1,5% до 5%</strong>. Також введено обов'язковий ВЗ для всіх ФОП на спрощеній системі.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Що таке військовий збір?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Військовий збір (ВЗ)</strong> — обов'язковий податок для фінансування ЗСУ. З 2025 року ставки суттєво зросли і стали значною статтею витрат для підприємців. ВЗ діє під час воєнного стану та 3 роки після його завершення.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Ставки ВЗ для ФОП у 2026 році</h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-blue-100 dark:bg-blue-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Платник</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Ставка</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Сума/міс</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ФОП 1 група</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">10% мінзарплати</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">864,70 грн</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ФОП 2 група</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">10% мінзарплати</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">864,70 грн</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ФОП 3 група</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1% від доходу</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">Від доходу</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Загальна система</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">5% чистого доходу</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">Від доходу</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Зарплата працівників</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">5% від зарплати</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">Утримується</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Приклади розрахунку</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-green-700 dark:text-green-400">📗 ФОП 1 група</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>ВЗ:</strong> 8 647 × 10% = <strong>864,70 грн</strong></p>
                <p><strong>ЄП:</strong> до 302,20 грн</p>
                <p><strong>ЄСВ:</strong> 1 902,34 грн</p>
                <p className="pt-2 border-t font-bold">Разом: ≈ 3 069 грн/міс</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-blue-700 dark:text-blue-400">📘 ФОП 2 група</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>ВЗ:</strong> 864,70 грн</p>
                <p><strong>ЄП:</strong> 1 729,40 грн</p>
                <p><strong>ЄСВ:</strong> 1 902,34 грн</p>
                <p className="pt-2 border-t font-bold">Разом: 4 496 грн/міс</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-purple-500 dark:border-purple-600 dark:bg-gray-900 md:col-span-2">
              <CardHeader><CardTitle className="text-purple-700 dark:text-purple-400">📙 ФОП 3 група (дохід 100 000 грн)</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>ВЗ:</strong> 100 000 × 1% = <strong>1 000 грн</strong> | <strong>ЄП:</strong> 100 000 × 5% = 5 000 грн | <strong>ЄСВ:</strong> 1 902,34 грн</p>
                <p className="pt-2 border-t font-bold">Разом: 7 902 грн/міс (7,9% від доходу)</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Терміни та штрафи</h2>
          <div className="space-y-3 mb-8 not-prose text-sm">
            <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span><strong>ФОП 1-2 групи:</strong> щомісяця до 20 числа наступного місяця</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span><strong>ФОП 3 групи:</strong> щоквартально, протягом 10 днів після подання декларації</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <span><strong>Штрафи:</strong> 5% боргу (до 30 днів прострочення), 10% (більше 30 днів) + пеня 120% облікової ставки НБУ</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Хто звільнений від ВЗ?</h2>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>ФОП-<strong>військовослужбовці</strong> (на час служби)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>ФОП на території <strong>активних бойових дій</strong></span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Військовослужбовці — ВЗ із грошового забезпечення <strong>1,5%</strong></span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🧮 Розрахуйте податки з ВЗ</h3>
            <p className="text-blue-100 mb-6">Калькулятор оновлений і враховує ВЗ для всіх груп ФОП</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators/fop-tax">Калькулятор податків ФОП <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
