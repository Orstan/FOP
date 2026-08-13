import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Відпустка для мобілізованих ФОП: збереження стажу | ФОП Помічник 2026",
  description: "В умовах військового конфлікту в Україні, питання збереження робочого стажу для фізичних осіб-підприємців, які були мобілізовані, стало надзвичайно важливи",
  keywords: [
    "відпустка мобілізованих",
    "стаж для ФОП ЗСУ"
  ],
  openGraph: {
    title: "Відпустка для мобілізованих ФОП: збереження стажу",
    description: "В умовах військового конфлікту в Україні, питання збереження робочого стажу для фізичних осіб-підприємців, які були мобілізовані, стало надзвичайно важливи",
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
            Відпустка для мобілізованих ФОП: збереження стажу
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 13 серпня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 3 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Відпустка для мобілізованих ФОП: збереження стажу</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">В умовах військового конфлікту в Україні, питання збереження робочого стажу для фізичних осіб-підприємців, які були мобілізовані, стало надзвичайно важливим. Відпустка мобілізованих ФОП має свої особливості, які необхідно знати для того, щоб не втратити накопичений стаж.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Правові основи відпустки мобілізованих ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Згідно з українським законодавством, мобілізовані фізичні особи-підприємці мають право на відпустку, яка дозволяє їм виконувати військові обов&rsquo;язки, не втрачаючи при цьому свій трудовий стаж.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Нормативно-правові акти</h3>
<p className="text-gray-700 dark:text-gray-300 mb-4">Основними документами, що регулюють питання відпустки для мобілізованих ФОП, є:</p>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Закон України &laquo;Про мобілізаційну підготовку та мобілізацію&raquo;</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Кодекс законів про працю України</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Інші постанови та розпорядження Кабінету Міністрів України</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Процедура оформлення відпустки для мобілізованих ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Оформлення відпустки для мобілізованих ФОП вимагає дотримання певних процедур, які необхідно виконати для забезпечення збереження стажу.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Кроки для оформлення</h3>
<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
  <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>1. Подайте заяву</strong> - написати заяву на ім&rsquo;я керівника органу, що відповідає за військові питання.</p>
  <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>2. Підготуйте документи</strong> - зберіть всі необхідні документи, що підтверджують вашу мобілізацію.</p>
  <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>3. Отримайте підтвердження</strong> - чекайте на відповідь від органів, що здійснюють обробку заяв.</p>
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Збереження стажу для мобілізованих ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Збереження стажу для фізичних осіб-підприємців, які проходять військову службу, регулюється рядом норм, що забезпечують права мобілізованих.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Як зберегти стаж</h3>
<p className="text-gray-700 dark:text-gray-300 mb-4">Для збереження стажу, мобілізовані ФОП повинні дотримуватись наступних рекомендацій:</p>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Регулярно перевіряти статус свого стажу в реєстрах</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Забезпечити наявність всіх документів, що підтверджують стаж та мобілізацію</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Консультуватись з юристом щодо правових аспектів</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Важливо враховувати всі переваги та недоліки, які виникають у процесі отримання відпустки для мобілізованих ФОП.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Переваги</h3>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Збереження трудового стажу під час служби</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Можливість повернення до бізнесу після завершення служби</span></li>
</ul>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Недоліки</h3>
<ul className="space-y-2 mb-6">
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Обмеження в можливостях ведення бізнесу під час служби</span></li>
  <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Необхідність постійного моніторингу правових змін</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Відпустка для мобілізованих ФОП є важливим аспектом, що потребує уважного підходу та розуміння правових норм. Збереження стажу дозволяє підприємцям не втрачати свої права та можливості у майбутньому. Рекомендуємо звертатися за юридичною допомогою для правильного оформлення документів та дотримання всіх необхідних процедур.</p>

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
