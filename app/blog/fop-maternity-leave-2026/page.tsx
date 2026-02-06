import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Baby, Heart, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Декретна відпустка для ФОП 2026: Допомога по вагітності та пологах | Як отримати",
  description: "Повний гайд про декрет для ФОП: як отримати декретні виплати, скільки платять, умови, документи. Допомога по вагітності та догляду за дитиною до 3 років.",
  keywords: [
    "декретна відпустка ФОП",
    "декретні для ФОП 2026",
    "допомога по вагітності ФОП",
    "допомога по догляду за дитиною ФОП",
    "як отримати декретні ФОП",
    "виплати при народженні дитини ФОП"
  ],
  openGraph: {
    title: "Декретна відпустка для ФОП 2026: Виплати та Умови",
    description: "Детальний розбір декретних виплат для підприємців: умови, розміри, як оформити, документи",
    type: "article",
  },
};

export default function FOPMaternityLeavePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium no-underline"
            >
              ← Назад до блогу
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Декретна відпустка для ФОП у 2026 році
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 6 лютого 2026</time>
            <span>•</span>
            <span>Читання: 13 хв</span>
          </div>

          <div className="bg-pink-50 dark:bg-pink-950/30 border-l-4 border-pink-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Baby className="h-6 w-6 text-pink-600 dark:text-pink-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚡ Головне про декрет для ФОП</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>ФОП має право на декретні виплати</strong>, якщо сплачував ЄСВ мінімум 12 місяців протягом 
                  останніх 2 років. Розмір виплат залежить від суми сплаченого ЄСВ.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Які види допомоги може отримати ФОП?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-pink-500 dark:border-pink-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-700 dark:text-pink-400">
                  <Heart className="h-5 w-5" />
                  По вагітності та пологах
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Період:</strong> 126 днів (70 до пологів + 56 після)</p>
                <p><strong>При ускладнених пологах:</strong> 140 днів</p>
                <p><strong>При багатоплідній вагітності:</strong> 180 днів</p>
                <p className="pt-2 text-xs text-gray-600 dark:text-gray-400">
                  Це основна декретна виплата до та після пологів
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                  <Baby className="h-5 w-5" />
                  По догляду за дитиною
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Період:</strong> До досягнення дитиною 3 років</p>
                <p><strong>Щомісячна виплата</strong></p>
                <p><strong>Розмір:</strong> Залежить від віку дитини</p>
                <p className="pt-2 text-xs text-gray-600 dark:text-gray-400">
                  Виплачується після закінчення декретної відпустки
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle2 className="h-5 w-5" />
                  При народженні дитини
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Одноразова виплата:</strong> 41 280 грн при народженні першої дитини</p>
                <p><strong>Друга дитина:</strong> 82 560 грн</p>
                <p><strong>Третя та наступні:</strong> 123 840 грн</p>
                <p className="pt-2 text-xs text-gray-600 dark:text-gray-400">
                  Виплачується незалежно від сплати ЄСВ
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 dark:border-purple-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                  <Calculator className="h-5 w-5" />
                  Державна допомога
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Малозабезпеченим:</strong> Додаткова допомога на дитину</p>
                <p><strong>Розмір:</strong> Залежить від доходу сім'ї</p>
                <p className="pt-2 text-xs text-gray-600 dark:text-gray-400">
                  Оформлюється окремо через соцзахист
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Умови для отримання декретних ФОП
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">✅ Що потрібно:</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Сплачувати ЄСВ мінімум 12 місяців</strong> протягом останніх 2 років перед виходом у декрет</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Бути зареєстрованою як ФОП</strong> на момент виходу у декрет</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Подати документи в Соцстрах</strong> (ФСС) протягом 12 місяців після пологів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Мати лікарняний лист</strong> з поліклініки про вагітність та пологи</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як розраховується розмір декретних?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Розмір допомоги по вагітності та пологах залежить від <strong>середньої суми ЄСВ</strong>, 
            яку ви сплачували протягом 12 календарних місяців перед виходом у декрет.
          </p>

          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">📊 Формула розрахунку</h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
                Декретні = (Сума ЄСВ за 12 міс / 12) × Кількість днів декрету / 30.44
              </p>
              
              <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                <p className="font-semibold mb-2">Приклад розрахунку:</p>
                <p>• ЄСВ сплачувався від мінімальної зарплати: 8000 грн × 22% = 1760 грн/міс</p>
                <p>• За 12 місяців: 1760 × 12 = 21 120 грн</p>
                <p>• Середня сума за місяць: 21 120 / 12 = 1760 грн</p>
                <p>• Декретні за 126 днів: 1760 × 126 / 30.44 = <strong className="text-purple-600">7 285 грн</strong></p>
              </div>

              <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                <p className="font-semibold mb-2">Якщо платили ЄСВ від більшої суми (наприклад, 20 000 грн):</p>
                <p>• ЄСВ: 20 000 × 22% = 4400 грн/міс</p>
                <p>• За 12 місяців: 4400 × 12 = 52 800 грн</p>
                <p>• Декретні за 126 днів: 4400 × 126 / 30.44 = <strong className="text-purple-600">18 212 грн</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Допомога по догляду за дитиною до 3 років
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-blue-100 dark:bg-blue-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Вік дитини</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Розмір щомісячної допомоги (2026)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">До досягнення 1 року</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">3 200 грн/міс (залежить від ЄСВ)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 1 до 2 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">4 000 грн/міс (залежить від ЄСВ)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 2 до 3 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">2 400 грн/міс (фіксована сума)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як оформити декретні для ФОП?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Візьміть лікарняний лист</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  На 30 тижні вагітності (при багатоплідній — на 28 тижні) отримайте лікарняний лист 
                  у жіночій консультації. Це електронний документ, який автоматично передається до ФСС.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Підготуйте документи</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Зберіть пакет документів:
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  <li>Заяву на призначення допомоги (форма ФСС)</li>
                  <li>Копія паспорта</li>
                  <li>Копія ІПН</li>
                  <li>Довідка про сплату ЄСВ (з ДПС або виписка з особистого кабінету)</li>
                  <li>Реквізити банківського рахунку</li>
                  <li>Свідоцтво про народження дитини (після пологів)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Подайте документи в ФСС</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Подати документи можна:<br/>
                  • Онлайн через портал ФСС (fse.gov.ua)<br/>
                  • Через Дію<br/>
                  • Особисто у відділенні ФСС<br/>
                  • Поштою з описом вкладення
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте виплату</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ФСС розглядає документи протягом 10 робочих днів. Після схвалення гроші перераховуються 
                  на ваш банківський рахунок протягом 5 робочих днів.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чи можна працювати в декреті?
          </h2>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">✅ Так, ФОП може працювати в декреті!</h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                На відміну від найманих працівників, <strong>ФОП не зобов'язаний припиняти діяльність</strong> 
                на час декретної відпустки. Ви можете:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Продовжувати працювати як ФОП та отримувати дохід</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Отримувати декретні виплати одночасно з доходом від бізнесу</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Платити податки та ЄСВ як зазвичай</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Не закривати ФОП на час декрету</span>
                </li>
              </ul>
              <p className="pt-3 border-t border-green-200 dark:border-green-700 text-xs">
                <strong>Важливо:</strong> Якщо ви отримуєте допомогу по догляду за дитиною та працюєте, 
                ви все одно маєте право на виплати, якщо дитина не відвідує дитсадок на повний день.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Поширені питання
          </h2>

          <div className="space-y-4 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Що буде, якщо не платити ЄСВ 12 місяців?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Ви не зможете отримати допомогу по вагітності та пологах від ФСС. Але <strong>допомогу 
                  при народженні дитини</strong> (41 280 грн) отримаєте в будь-якому випадку — вона не залежить від ЄСВ.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Чи можна отримати декретні, якщо закрити ФОП?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Так, якщо ви сплачували ЄСВ 12 місяців перед закриттям, ви маєте право подати документи 
                  на декретні протягом 12 місяців після пологів, навіть якщо вже закрили ФОП.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Чи впливає розмір доходу ФОП на декретні?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Ні, розмір декретних залежить тільки від <strong>суми сплаченого ЄСВ</strong>, а не від вашого доходу. 
                  Чим більше ЄСВ ви платили — тим більші декретні отримаєте.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>ФОП має право на декретні виплати</strong> нарівні з найманими працівниками, якщо сплачує ЄСВ. 
            Головна умова — сплатити ЄСВ мінімум 12 місяців протягом останніх 2 років. Чим більше ЄСВ ви платите, 
            тим більші декретні отримаєте.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Важлива перевага ФОП — <strong>можна працювати в декреті</strong> та отримувати дохід одночасно з 
            декретними виплатами. Це дозволяє не втрачати клієнтів та підтримувати бізнес під час декретної відпустки.
          </p>

          <div className="bg-gradient-to-r from-pink-600 to-purple-700 dark:from-pink-700 dark:to-purple-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🧮 Розрахуйте свої виплати</h3>
            <p className="text-pink-100 dark:text-pink-200 mb-6 max-w-2xl mx-auto">
              Використайте наші калькулятори для розрахунку ЄСВ та декретних виплат
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators">
                Калькулятори ФОП
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Пенсія для ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/fop-pensions">
                    Як формується пенсія
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Лікарняні для ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/blog/fop-sick-leave-2026">
                    Як отримати лікарняні
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
