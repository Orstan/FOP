import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Як ФОП вести облік доходів та витрат | ФОП Помічник 2026",
  description: "Облік доходів та витрат є важливою складовою діяльності фізичних осіб-підприємців (ФОП) в Україні. Правильний облік допомагає контролювати фінанси, уникати",
  keywords: [
    "облік ФОП",
    "книга обліку доходів",
    "бухгалтерія для підприємця"
  ],
  openGraph: {
    title: "Як ФОП вести облік доходів та витрат",
    description: "Облік доходів та витрат є важливою складовою діяльності фізичних осіб-підприємців (ФОП) в Україні. Правильний облік допомагає контролювати фінанси, уникати",
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
            Як ФОП вести облік доходів та витрат
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 27 травня 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 3 хв</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як ФОП вести облік доходів та витрат</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Облік доходів та витрат є важливою складовою діяльності фізичних осіб-підприємців (ФОП) в Україні. Правильний облік допомагає контролювати фінанси, уникати податкових помилок та забезпечує прозорість у веденні бізнесу.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Книга обліку доходів</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Книга обліку доходів є основним документом, який зобов'язаний вести кожен ФОП. Вона допомагає фіксувати всі надходження, що є необхідним для податкової звітності.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Як заповнити книгу обліку доходів</h3>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Запишіть дату надходження доходу.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Вкажіть джерело доходу.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Зазначте суму доходу.</span></li>
</ul>

<div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
    <strong>Порада:</strong> Використовуйте електронні таблиці для ведення книги обліку доходів, це спростить підрахунки та аналіз.
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Облік витрат</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Облік витрат є не менш важливим, оскільки дозволяє контролювати витрати підприємства та оптимізувати їх. Правильний облік витрат допомагає зменшити податкове навантаження.</p>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Які витрати слід обліковувати</h3>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Орендні платежі.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Витрати на матеріали.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Заробітна плата працівників.</span></li>
</ul>

<div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
    <strong>Увага:</strong> Не забудьте зберігати всі первинні документи, що підтверджують витрати, адже вони можуть знадобитися під час перевірок.
</div>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Системи обліку для ФОП</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Існує декілька систем обліку, які можуть використовувати ФОП, зокрема:</p>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Спрощена система обліку.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Загальна система обліку.</span></li>
</ul>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Вибір системи обліку</h3>
<p className="text-gray-700 dark:text-gray-300 mb-4">Вибір системи обліку залежить від обсягу вашої діяльності та бажаного рівня податкової звітності. Спрощена система підходить для малих підприємців, тоді як загальна система може бути вигідною для більших бізнесів.</p>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги та недоліки ведення обліку</h2>
<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Переваги</h3>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Контроль фінансів.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Зменшення ризиків податкових помилок.</span></li>
</ul>

<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Недоліки</h3>
<ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Часові витрати на ведення обліку.</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Необхідність знання бухгалтерських норм.</span></li>
</ul>

<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4">Ведення обліку доходів та витрат є невід’ємною частиною успішної діяльності ФОП в Україні. Дотримуючись рекомендацій та використовуючи правильні інструменти, ви зможете ефективно управляти своїм бізнесом і зменшити податкові ризики.</p>

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
