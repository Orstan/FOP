import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Календар Податків ФОП 2026 — Терміни Сплати ЄП, ЄСВ, ВЗ, Декларацій",
  description: "Повний податковий календар для ФОП на 2026 рік. Всі терміни сплати єдиного податку, ЄСВ, військового збору та подання декларацій. Не пропустіть жодного дедлайну!",
  keywords: ["календар податків ФОП 2026", "терміни сплати ЄСВ", "коли подавати декларацію ФОП", "дедлайни ФОП"],
  openGraph: { title: "Календар Податків ФОП 2026", description: "Всі терміни сплати та подання декларацій", type: "article" },
  alternates: { canonical: '/blog/fop-tax-calendar-2026' },
};

export default function TaxCalendarPage() {
  const quarters = [
    {
      name: "І квартал (січень — березень)",
      color: "blue",
      events: [
        { date: "20 січня", desc: "Сплата ЄСВ, ЄП та ВЗ за грудень 2025" },
        { date: "20 лютого", desc: "Сплата ЄСВ, ЄП та ВЗ за січень" },
        { date: "9 лютого", desc: "Подання декларації ФОП 3 гр. за IV квартал 2025" },
        { date: "19 лютого", desc: "Сплата ЄП та ВЗ за IV квартал 2025 (3 гр.)" },
        { date: "20 березня", desc: "Сплата ЄСВ, ЄП та ВЗ за лютий" },
      ],
    },
    {
      name: "ІІ квартал (квітень — червень)",
      color: "green",
      events: [
        { date: "20 квітня", desc: "Сплата ЄСВ, ЄП та ВЗ за березень" },
        { date: "12 травня", desc: "Подання декларації ФОП 3 гр. за І квартал" },
        { date: "19 травня", desc: "Сплата ЄП та ВЗ за І квартал (3 гр.)" },
        { date: "20 травня", desc: "Сплата ЄСВ, ЄП та ВЗ за квітень" },
        { date: "20 червня", desc: "Сплата ЄСВ, ЄП та ВЗ за травень" },
      ],
    },
    {
      name: "ІІІ квартал (липень — вересень)",
      color: "orange",
      events: [
        { date: "20 липня", desc: "Сплата ЄСВ, ЄП та ВЗ за червень" },
        { date: "11 серпня", desc: "Подання декларації ФОП 3 гр. за ІІ квартал" },
        { date: "19 серпня", desc: "Сплата ЄП та ВЗ за ІІ квартал (3 гр.)" },
        { date: "20 серпня", desc: "Сплата ЄСВ, ЄП та ВЗ за липень" },
        { date: "20 вересня", desc: "Сплата ЄСВ, ЄП та ВЗ за серпень" },
      ],
    },
    {
      name: "ІV квартал (жовтень — грудень)",
      color: "red",
      events: [
        { date: "20 жовтня", desc: "Сплата ЄСВ, ЄП та ВЗ за вересень" },
        { date: "10 листопада", desc: "Подання декларації ФОП 3 гр. за ІІІ квартал" },
        { date: "19 листопада", desc: "Сплата ЄП та ВЗ за ІІІ квартал (3 гр.)" },
        { date: "20 листопада", desc: "Сплата ЄСВ, ЄП та ВЗ за жовтень" },
        { date: "20 грудня", desc: "Сплата ЄСВ, ЄП та ВЗ за листопад" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium no-underline">← Назад до блогу</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">📅 Календар Податків ФОП на 2026 рік</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 30 квітня 2026</time><span>•</span><span>Читання: 7 хв</span>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Не пропустіть дедлайн!</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Цей календар містить <strong>всі ключові дати</strong> для ФОП 1, 2, 3 групи. 
                  За прострочення — штраф від 5% до 10% + пеня. Збережіть цю сторінку!
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Щомісячні платежі (1-2 група)</h2>
          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-blue-100 dark:bg-blue-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Платіж</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Сума 2026</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Термін</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ЄСВ</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1 902,34 грн</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">до 20 числа</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ЄП (2 гр.)</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1 729,40 грн</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">до 20 числа</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ВЗ</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">864,70 грн</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">до 20 числа</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Поквартальний розклад</h2>

          <div className="space-y-6 mb-8 not-prose">
            {quarters.map((q, i) => (
              <Card key={i} className="dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    {q.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {q.events.map((e, j) => (
                      <div key={j} className="flex items-start gap-3 text-sm">
                        <span className="font-mono font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap min-w-[120px]">{e.date}</span>
                        <span className="text-gray-700 dark:text-gray-300">{e.desc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Річна декларація</h2>
          <div className="space-y-3 mb-8 not-prose text-sm">
            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span><strong>ФОП 1-2 групи:</strong> подають річну декларацію до <strong>1 березня</strong> наступного року</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span><strong>ФОП 3 групи:</strong> подають квартальну декларацію + річну до <strong>9 лютого</strong></span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🧮 Розрахуйте суму платежів</h3>
            <p className="text-blue-100 mb-6">Калькулятор автоматично порахує ЄП + ЄСВ + ВЗ</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators/fop-tax">Калькулятор податків <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
