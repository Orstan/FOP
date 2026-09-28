import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Декретні виплати для ФОП 2026: як оформити та отримати | ФОП Помічник 2026",
  description: "У 2026 році декретні виплати для фізичних осіб-підприємців (ФОП) залишаються важливим питанням для багатьох підприємців в Україні. У цій статті ми розгляне",
  keywords: [
    "декретні ФОП",
    "допомога по вагітності ФОП",
    "соціальні виплати"
  ],
  openGraph: {
    title: "Декретні виплати для ФОП 2026: як оформити та отримати",
    description: "У 2026 році декретні виплати для фізичних осіб-підприємців (ФОП) залишаються важливим питанням для багатьох підприємців в Україні. У цій статті ми розгляне",
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
            Декретні виплати для ФОП 2026: як оформити та отримати
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 28 вересня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 3 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Декретні виплати для ФОП 2026: як оформити та отримати</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">У 2026 році декретні виплати для фізичних осіб-підприємців (ФОП) залишаються важливим питанням для багатьох підприємців в Україні. У цій статті ми розглянемо, як правильно оформити та отримати допомогу по вагітності, а також розповімо про соціальні виплати, які доступні для ФОП.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Хто має право на декретні виплати?</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Декретні виплати для ФОП можуть отримувати жінки, які зареєстровані як фізичні особи-підприємці, а також сплачують єдиний соціальний внесок. Основні критерії для отримання допомоги включають:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Наявність реєстрації як ФОП.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Сплата єдиного соціального внеску не менше ніж 6 місяців.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Вік дитини до 3 років.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Які документи потрібні для оформлення декретних виплат?</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Щоб оформити декретні виплати, вам знадобляться наступні документи:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Заява на отримання допомоги.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Копія свідоцтва про народження дитини.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Довідка про сплату єдиного соціального внеску.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Ідентифікаційний код.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як оформити декретні виплати: покрокова інструкція</h2>
<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Крок 1: Підготовка документів</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">Зберіть усі необхідні документи, перелічені вище, та перевірте їх наявність.</p>
    
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Крок 2: Подання заяви</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">Зверніться до органу соціального захисту населення за місцем реєстрації та подайте заяву разом з документами.</p>
    
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Крок 3: Очікування рішення</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">Після подання документів вам потрібно буде дочекатися рішення. Зазвичай цей процес займає до 10 робочих днів.</p>
    
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Крок 4: Отримання виплат</h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">Після позитивного рішення ви можете отримати виплати на свій банківський рахунок або через пошту.</p>
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки декретних виплат для ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Декретні виплати для ФОП мають свої переваги та недоліки:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Переваги:</strong> забезпечення фінансової підтримки під час декретної відпустки, можливість поєднувати підприємницьку діяльність з вихованням дитини.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span><strong>Недоліки:</strong> складність в оформленні документів, обмеження по тривалості виплат.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Декретні виплати для ФОП у 2026 році залишаються важливим інструментом для підтримки підприємців, які стають батьками. Правильне оформлення документів і знання своїх прав допоможуть отримати необхідну фінансову допомогу у складний період. Не забувайте про своє право на соціальні виплати, адже це важлива підтримка для вас та вашої родини.</p>

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
