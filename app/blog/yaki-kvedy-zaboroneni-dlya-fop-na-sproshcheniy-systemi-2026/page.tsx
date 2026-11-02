import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Які КВЕДи заборонені для ФОП на спрощеній системі 2026 | ФОП Помічник 2026",
  description: "Фізичні особи-підприємці (ФОП) в Україні мають можливість обирати спрощену систему оподаткування, що спрощує ведення бізнесу. Проте, деякі види діяльності ",
  keywords: [
    "заборонені КВЕД ФОП",
    "ФОП 2 група заборонені види діяльності"
  ],
  openGraph: {
    title: "Які КВЕДи заборонені для ФОП на спрощеній системі 2026",
    description: "Фізичні особи-підприємці (ФОП) в Україні мають можливість обирати спрощену систему оподаткування, що спрощує ведення бізнесу. Проте, деякі види діяльності ",
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
            Які КВЕДи заборонені для ФОП на спрощеній системі 2026
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 2 листопада 2026 р.</time>
            <span>&bull;</span>
            <span>Читання: 3 хв</span>
          </div>

          <div>
  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Які КВЕДи заборонені для ФОП на спрощеній системі 2026</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Фізичні особи-підприємці (ФОП) в Україні мають можливість обирати спрощену систему оподаткування, що спрощує ведення бізнесу. Проте, деякі види діяльності заборонені для ФОП на спрощеній системі, що може суттєво вплинути на вибір КВЕДів при реєстрації.</p>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Основні заборонені КВЕДи для ФОП 2 групи</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">На спрощеній системі оподаткування існує ряд КВЕДів, які заборонені для ФОП 2 групи. Це стосується, зокрема, діяльності, яка пов’язана з високими ризиками. Нижче наведено основні з них:</p>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>КВЕД 64.19 - Діяльність у сфері фінансового посередництва, що не включена до інших груп</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>КВЕД 70.22 - Консультування з питань комерційної діяльності та управління</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>КВЕД 77.11 - Оренда автомобілів і легкових автотранспортних засобів</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>КВЕД 78.10 - Діяльність агентств працевлаштування</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>КВЕД 84.11 - Державне управління загального характеру</span></li>
  </ul>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Види діяльності з особливими умовами</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Крім заборонених КВЕДів, є також види діяльності, які потребують додаткових ліцензій або дозволів. Для ФОП на спрощеній системі це може стати суттєвим обмеженням.</p>
  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
    <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Увага!</strong> Перед вибором КВЕДів рекомендується звернутися до юридичних консультантів для уникнення проблем у майбутньому.</p>
  </div>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Переваги спрощеної системи оподаткування для ФОП</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Спрощена система оподаткування має ряд переваг, які роблять її привабливою для підприємців:</p>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Зниження податкового навантаження</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Спрощення бухгалтерського обліку</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Можливість вести бізнес без реєстрації ПДВ</span></li>
  </ul>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Недоліки спрощеної системи оподаткування</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Попри переваги, спрощена система оподаткування має і свої недоліки:</p>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Обмеження на види діяльності</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Обмеження за річним доходом</span></li>
  </ul>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Практичні поради для ФОП</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Перед відкриттям бізнесу та вибором КВЕДів, рекомендується дотримуватись наступних кроків:</p>
  <ul className="space-y-2 mb-6">
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Визначте основний вид діяльності вашого бізнесу</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Ознайомтеся з актуальним списком заборонених КВЕДів</span></li>
    <li className="flex items-start gap-2"><span className="text-blue-600">•</span><span>Консультуйтеся з юристами або бухгалтерами</span></li>
  </ul>

  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Висновок</h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">Заборона певних КВЕДів для ФОП на спрощеній системі оподаткування є важливим аспектом, який слід враховувати при виборі видів діяльності. Дотримуючись рекомендацій та отримуючи консультації, підприємці можуть уникнути непередбачуваних труднощів та успішно вести свій бізнес.</p>
</div>

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
