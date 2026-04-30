import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ФОП та Криптовалюта 2026 — Оподаткування, Ризики, Правила в Україні",
  description: "Як ФОП працювати з криптовалютою в Україні у 2026 році. Оподаткування крипто: ПДФО 18% + ВЗ 5%. Ризики для єдиного податку, декларування, поради юристів.",
  keywords: ["ФОП криптовалюта Україна", "оподаткування крипто 2026", "біткоїн ФОП", "податки на криптовалюту"],
  openGraph: { title: "ФОП та Криптовалюта 2026", description: "Оподаткування, ризики та правила роботи з крипто для підприємців", type: "article" },
  alternates: { canonical: '/blog/fop-crypto-2026' },
};

export default function FopCryptoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium no-underline">← Назад до блогу</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">ФОП та Криптовалюта у 2026 році: Що потрібно знати</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 30 квітня 2026</time><span>•</span><span>Читання: 8 хв</span>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚠️ Увага: правова невизначеність</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Станом на квітень 2026 року <strong>спеціальне законодавство про віртуальні активи ще не набуло чинності</strong>. 
                  Податкова застосовує загальні норми ПКУ. Проконсультуйтеся з юристом перед проведенням операцій.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Правовий статус криптовалюти в Україні</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Криптовалюта <strong>не є законним платіжним засобом</strong> в Україні. Вона розглядається податковими органами як нематеріальний актив (товар). 
            Розрахунки криптовалютою за товари чи послуги — ризиковані.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Законопроєкт №10225-д «Про віртуальні активи» досі на стадії доопрацювання. Поки що діють загальні норми Податкового кодексу.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як оподатковується крипто?</h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-purple-100 dark:bg-purple-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Тип операції</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Податок</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Ставка</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Продаж крипто за фіат</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">ПДФО + ВЗ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">18% + 5% = 23%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Отримання зарплати в крипто</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Як дохід фізособи</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">18% + 5% = 23%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Обмін крипто на крипто</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Спірна ситуація</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-orange-600">Невизначено</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Майнінг</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Як дохід фізособи</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">18% + 5% = 23%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Чи можна оплачувати крипто через ФОП?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-red-700 dark:text-red-400 flex items-center gap-2"><XCircle className="h-5 w-5" /> Ризики для ФОП</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p>❌ Крипто-дохід може <strong>не визнаватися</strong> підприємницьким</p>
                <p>❌ Ризик трактування як <strong>бартер</strong> (заборонено для ЄП)</p>
                <p>❌ Втрата статусу платника <strong>єдиного податку</strong></p>
                <p>❌ Донарахування за <strong>загальною системою</strong> (18% + 5%)</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-green-700 dark:text-green-400 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Безпечні варіанти</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <p>✅ Конвертувати крипто у <strong>фіат</strong> перед зарахуванням</p>
                <p>✅ Отримувати оплату <strong>тільки в гривні</strong> на банківський рахунок</p>
                <p>✅ Крипто-інвестиції робити як <strong>фізична особа</strong></p>
                <p>✅ Вести детальний <strong>облік</strong> всіх операцій</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як задекларувати дохід від крипто?</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Зафіксуйте операції</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Зберігайте скріншоти купівлі/продажу, виписки з бірж, дати та суми в UAH.</p></div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Подайте декларацію</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Річна декларація про майновий стан і доходи — до 1 травня наступного року.</p></div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Сплатіть податки</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">ПДФО 18% + ВЗ 5% = 23% від прибутку (різниця між ціною продажу та купівлі).</p></div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 not-prose rounded-r-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💡 Порада</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Якщо ви отримуєте оплату від іноземних замовників у крипто (Upwork, фріланс) — <strong>конвертуйте в гривню</strong> перед зарахуванням на рахунок ФОП. 
              Так ви уникнете проблем з трактуванням доходу та зберігатимете статус єдиного податку.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">📊 Калькулятор податків ФОП</h3>
            <p className="text-purple-100 mb-6">Розрахуйте свої податки з урахуванням усіх зборів</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators/fop-tax">Розрахувати <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
