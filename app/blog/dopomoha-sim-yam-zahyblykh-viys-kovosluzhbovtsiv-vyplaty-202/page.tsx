import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Допомога сім'ям загиблих військовослужбовців: виплати 2026 | ФОП Помічник 2026",
  description: "У 2026 році в Україні продовжуються виплати сім'ям загиблих військовослужбовців, що є важливою складовою соціальної підтримки. Ці компенсації мають на меті",
  keywords: [
    "виплати сім'ям загиблих",
    "компенсація за загиблого"
  ],
  openGraph: {
    title: "Допомога сім'ям загиблих військовослужбовців: виплати 2026",
    description: "У 2026 році в Україні продовжуються виплати сім'ям загиблих військовослужбовців, що є важливою складовою соціальної підтримки. Ці компенсації мають на меті",
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
            Допомога сім'ям загиблих військовослужбовців: виплати 2026
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 1 жовтня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 2 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Допомога сім'ям загиблих військовослужбовців: виплати 2026</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">У 2026 році в Україні продовжуються виплати сім'ям загиблих військовослужбовців, що є важливою складовою соціальної підтримки. Ці компенсації мають на меті допомогти родинам пережити важкі часи та забезпечити їх матеріальні потреби.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Які виплати отримують сім'ї загиблих?</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Сім'ї загиблих військовослужбовців можуть розраховувати на декілька видів виплат, серед яких:</p>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Компенсація за загиблого військовослужбовця</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Щомісячні виплати для утримання сім'ї</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Одноразова матеріальна допомога</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Процедура отримання виплат</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Для того щоб отримати виплати, сім'ям загиблих потрібно виконати певні кроки:</p>
<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
  <strong>Кроки для отримання виплат:</strong>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Зібрати необхідні документи (свідоцтво про смерть, документ, що підтверджує статус військовослужбовця)</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Подати заяву у відповідні органи (соціального захисту, військової частини)</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Очікувати на обробку звернення</span></li>
  </ul>
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки системи виплат</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Система виплат має свої переваги та недоліки, які важливо враховувати:</p>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Переваги:</strong> фінансова підтримка в важкий час, забезпечення базових потреб сім'ї.</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Недоліки:</strong> затримки у виплатах, бюрократичні перепони при оформленні.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як підприємці можуть підтримати сім'ї загиблих?</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Підприємці можуть внести свій вклад у підтримку сімей загиблих військовослужбовців наступними способами:</p>
<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
  <strong>Практичні поради для підприємців:</strong>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Організувати благодійні акції для збору коштів</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Надавати безкоштовні послуги або товари сім'ям загиблих</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Розміщувати інформацію про виплати та допомогу на своїх платформах</span></li>
  </ul>
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Виплати сім'ям загиблих військовослужбовців є важливою частиною державної підтримки в Україні. У 2026 році ця система продовжує вдосконалюватися, проте важливо враховувати всі нюанси та можливі труднощі при отриманні компенсацій. Підприємці також можуть відігравати активну роль у підтримці цих сімей, надаючи фінансову допомогу та інші ресурси.</p>

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
