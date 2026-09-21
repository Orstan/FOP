import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Військовий збір для ФОП: ставки та правила сплати 2026 | ФОП Помічник 2026",
  description: "В Україні військовий збір є важливим елементом податкової системи, який стосується як фізичних осіб, так і підприємців. У 2026 році правила та ставки війсь",
  keywords: [
    "військовий збір ФОП",
    "оплата військового збору"
  ],
  openGraph: {
    title: "Військовий збір для ФОП: ставки та правила сплати 2026",
    description: "В Україні військовий збір є важливим елементом податкової системи, який стосується як фізичних осіб, так і підприємців. У 2026 році правила та ставки війсь",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium no-underline"
            >
              &larr; Назад до блогу
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Військовий збір для ФОП: ставки та правила сплати 2026
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 21 вересня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 2 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Військовий збір для ФОП: ставки та правила сплати 2026</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">В Україні військовий збір є важливим елементом податкової системи, який стосується як фізичних осіб, так і підприємців. У 2026 році правила та ставки військового збору для фізичних осіб-підприємців (ФОП) залишаються актуальними для всіх, хто займається підприємницькою діяльністю.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Що таке військовий збір?</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Військовий збір – це спеціальний податок, який запроваджений в Україні для фінансування Збройних Сил. Він стягується з доходів фізичних осіб та підприємців, які займаються діяльністю на території України.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Ставки військового збору в 2026 році</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Ставка військового збору для ФОП у 2026 році становить <strong>1,5%</strong> від загального оподатковуваного доходу. Це означає, що кожен підприємець повинен враховувати цю ставку при розрахунку своїх податкових зобов’язань.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Правила сплати військового збору для ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Сплата військового збору для фізичних осіб-підприємців має свої правила, які необхідно дотримуватись:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Військовий збір сплачується одночасно з податком на доходи фізичних осіб.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>ФОП зобов’язані подавати декларацію про доходи, в якій вказується сума військового збору.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Сплата збору має відбуватись до 30 числа місяця, наступного за звітним.</span></li>
</ul>

<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <strong>Практична порада:</strong> Рекомендуємо створити календар податкових зобов’язань, щоб не пропустити терміни сплати військового збору.
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки сплати військового збору</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Сплата військового збору має свої переваги та недоліки:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Переваги:</strong> Забезпечення фінансування Збройних Сил, можливість отримання соціальних пільг для учасників бойових дій.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Недоліки:</strong> Додаткове фінансове навантаження на підприємців, особливо в умовах кризи.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Військовий збір для ФОП є важливим аспектом оподаткування в Україні. Дотримання всіх правил сплати та своєчасна подача декларацій допоможуть уникнути проблем з податковими органами. Врахування ставки військового збору в плануванні фінансів підприємства є необхідним для успішної діяльності у 2026 році.</p>

          <div className="grid md:grid-cols-2 gap-4 not-prose mt-12">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Інші статті</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog">
                    Всі статті блогу
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Калькулятори</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/calculators">
                    Розрахувати податки
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </article>
      </main>
    </div>
  );
}
