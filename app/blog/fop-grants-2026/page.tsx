import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gift, CheckCircle2, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Гранти та Підтримка ФОП 2026 — єРобота, Дія.Бізнес, Держпрограми",
  description: "Як ФОП отримати грант у 2026 році: програма єРобота, Дія.Бізнес, мікрогранти для бізнесу. Умови участі, суми фінансування та покрокова інструкція подачі заявки.",
  keywords: ["гранти для ФОП 2026", "єРобота грант", "Дія Бізнес підтримка", "мікрогранти малий бізнес Україна"],
  openGraph: { title: "Гранти та Підтримка ФОП 2026", description: "єРобота, Дія.Бізнес та інші держпрограми підтримки", type: "article" },
  alternates: { canonical: '/blog/fop-grants-2026' },
};

export default function FopGrantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium no-underline">← Назад до блогу</Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">Гранти та Підтримка ФОП у 2026 році</h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 30 квітня 2026</time><span>•</span><span>Читання: 9 хв</span>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Gift className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🎁 Безкоштовні гроші для бізнесу!</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  У 2026 році в Україні діє кілька державних програм підтримки підприємців. Гранти — це <strong>безповоротна фінансова допомога</strong>: 
                  гроші не потрібно повертати, якщо ви виконали умови програми.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Програми підтримки 2026 року</h2>

          <div className="space-y-6 mb-8 not-prose">
            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-blue-700 dark:text-blue-400">🏗️ Програма «єРобота» — Мікрогранти</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><strong>Сума:</strong> до 250 000 грн</div>
                  <div><strong>Куди подавати:</strong> Дія (diia.gov.ua)</div>
                  <div><strong>Для кого:</strong> ФОП та мікропідприємства</div>
                  <div><strong>Термін:</strong> Подача відкрита</div>
                </div>
                <p className="pt-3 border-t dark:border-gray-700"><strong>На що можна витратити:</strong> обладнання, сировина, оренда приміщення, інструменти, ремонт приміщення (до 30%).</p>
                <p><strong>Умова:</strong> створити мінімум 1 нове робоче місце та зберегти його 12 місяців.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 dark:border-purple-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-purple-700 dark:text-purple-400">💼 «єРобота» — Гранти для ветеранів</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><strong>Сума:</strong> до 500 000 грн</div>
                  <div><strong>Для кого:</strong> Ветерани та члени їхніх родин</div>
                </div>
                <p className="pt-3 border-t dark:border-gray-700"><strong>Особливості:</strong> розширений перелік витрат, спрощена процедура подачі через Дію, пріоритетний розгляд.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-green-700 dark:text-green-400">🌾 Програма «єРобота» — Гранти для агро</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><strong>Сума:</strong> до 250 000 грн</div>
                  <div><strong>Для кого:</strong> Фермери та агро-ФОП</div>
                </div>
                <p className="pt-3 border-t dark:border-gray-700"><strong>Напрями:</strong> переробка с/г продукції, вирощування овочів та фруктів, садівництво, бджільництво.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader><CardTitle className="text-orange-700 dark:text-orange-400">💰 Пільгове кредитування «5-7-9%»</CardTitle></CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
                <div className="grid md:grid-cols-2 gap-4">
                  <div><strong>Ставка:</strong> від 5% річних</div>
                  <div><strong>Сума:</strong> до 60 млн грн</div>
                </div>
                <p className="pt-3 border-t dark:border-gray-700"><strong>Особливості:</strong> не грант, а пільговий кредит. Частину відсотків компенсує держава. Підходить для масштабування бізнесу.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Як отримати грант: покроково</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Зареєструйтесь у Дії</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Авторизуйтеся через BankID або КЕП на порталі diia.gov.ua</p></div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Підготуйте бізнес-план</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Опишіть ваш бізнес, плановані витрати, очікувані робочі місця. Шаблон доступний на порталі.</p></div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Подайте заявку онлайн</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Заповніть форму, додайте бізнес-план та документи. Розгляд — до 30 робочих днів.</p></div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div><h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Отримайте кошти та звітуйте</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Гроші надійдуть на рахунок. Зберігайте чеки та документи — звіт протягом 12 місяців.</p></div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">Хто може отримати грант?</h2>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Зареєстровані <strong>ФОП</strong> або мікропідприємства</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Без податкового боргу на момент подачі</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Готовність <strong>створити нове робоче місце</strong></span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Діяльність не пов'язана з виробництвом алкоголю, тютюну, грошовим посередництвом</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Бізнес <strong>не зареєстрований на окупованих територіях</strong></span></li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">📄 Підготуйте документи для гранту</h3>
            <p className="text-green-100 mb-6">Скористайтесь конструктором документів для оформлення договорів та актів</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/documents">Конструктор документів <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
