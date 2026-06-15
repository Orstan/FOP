import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Як ФОП платити аліменти: Розрахунок та нюанси | ФОП Помічник 2026",
  description: "У 2026 році питання виплати аліментів ФОП стало актуальним для багатьох підприємців в Україні. Важливо знати, як правильно розрахувати аліменти та в які те",
  keywords: [
    "аліменти ФОП",
    "розрахунок аліментів",
    "виплата аліментів підприємцем"
  ],
  openGraph: {
    title: "Як ФОП платити аліменти: Розрахунок та нюанси",
    description: "У 2026 році питання виплати аліментів ФОП стало актуальним для багатьох підприємців в Україні. Важливо знати, як правильно розрахувати аліменти та в які те",
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
            Як ФОП платити аліменти: Розрахунок та нюанси
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 15 червня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 2 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як ФОП платити аліменти: Розрахунок та нюанси</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">У 2026 році питання виплати аліментів ФОП стало актуальним для багатьох підприємців в Україні. Важливо знати, як правильно розрахувати аліменти та в які терміни їх потрібно сплачувати, щоб уникнути юридичних проблем.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Розрахунок аліментів для ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Розрахунок аліментів для фізичних осіб-підприємців базується на доходах, отриманих за останні 6 місяців. Важливо враховувати, що аліменти можуть бути встановлені у відсотковому співвідношенні до доходу.</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Аліменти можуть складати 25% від доходу на одну дитину, 30% на двох дітей та 50% на трьох і більше дітей.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Якщо дохід коливається, слід використовувати середнє арифметичне за 6 місяців.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Нюанси виплати аліментів підприємцем</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Фізичні особи-підприємці мають дотримуватись певних нюансів при виплаті аліментів. Важливо правильно оформити документи та своєчасно виконувати зобов'язання.</p>
<div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
    <strong>Увага!</strong> Якщо аліменти не сплачуються, борг може призвести до накладення штрафів або арешту майна.
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Документи для розрахунку аліментів</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Для розрахунку аліментів ФОП необхідно підготувати пакет документів, що підтверджують доходи.</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Податкові декларації за останні 6 місяців.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Банківські виписки, що підтверджують надходження.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Витяги з реєстру платників податків.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Практичні поради для підприємців</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Для успішної виплати аліментів ФОП слід дотримуватись кількох простих рекомендацій:</p>
<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <strong>Порада:</strong> Ведіть облік доходів та витрат, це спростить розрахунок аліментів.
</div>
<p className="text-gray-700 dark:text-gray-300 mb-4">Також рекомендується:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Регулярно консультуватись з юристом для уникнення помилок.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Сплачувати аліменти вчасно, щоб уникнути накопичення боргів.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки виплати аліментів ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Виплата аліментів має свої переваги та недоліки, які підприємцям слід враховувати.</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Переваги:</strong> Можливість зберегти добру репутацію, уникнути штрафів.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Недоліки:</strong> Фінансове навантаження на бізнес, податкові наслідки.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Виплата аліментів для фізичних осіб-підприємців в Україні є важливим аспектом, що потребує уважності та обізнаності. Дотримуючись законодавства та рекомендацій, ви зможете уникнути проблем та забезпечити своїм дітям гідне майбутнє.</p>

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
