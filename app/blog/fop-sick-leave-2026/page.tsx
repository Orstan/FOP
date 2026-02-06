import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertCircle, Heart, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Лікарняні для ФОП 2026: Як отримати оплату за лікарняним | Умови та розрахунок",
  description: "Повний гайд про лікарняні для ФОП: умови отримання виплат, розмір компенсації, як оформити, що потрібно для оплати лікарняного листа. Актуально 2026.",
  keywords: [
    "лікарняні для ФОП",
    "оплата лікарняного ФОП 2026",
    "лікарняний лист ФОП",
    "як отримати лікарняні ФОП",
    "допомога по тимчасовій непрацездатності ФОП",
    "ФСС лікарняні ФОП"
  ],
  openGraph: {
    title: "Лікарняні для ФОП 2026: Умови та Виплати",
    description: "Детальний розбір лікарняних виплат для підприємців: умови, розміри, як оформити через ФСС",
    type: "article",
  },
};

export default function FOPSickLeavePage() {
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
            Лікарняні для ФОП у 2026 році: Як отримати оплату
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 6 лютого 2026</time>
            <span>•</span>
            <span>Читання: 11 хв</span>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Activity className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚡ Головне про лікарняні для ФОП</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>ФОП може отримати оплату за лікарняним</strong>, якщо сплачував ЄСВ мінімум 6 місяців 
                  протягом останніх 12 місяців. Виплати здійснює Фонд соціального страхування (ФСС).
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Умови для отримання лікарняних виплат
          </h2>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">✅ Що потрібно для оплати лікарняного:</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Сплачувати ЄСВ мінімум 6 місяців</strong> протягом останніх 12 місяців перед хворобою</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Бути зареєстрованим як ФОП</strong> на момент хвороби</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Мати електронний лікарняний лист</strong> від лікаря</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Подати заяву в ФСС</strong> протягом 12 місяців після видужання</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">❌ Коли лікарняні НЕ оплачуються:</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Якщо ви не платили ЄСВ або платили менше 6 місяців</li>
                  <li>• Хвороба настала до реєстрації ФОП</li>
                  <li>• Хвороба через алкогольне або наркотичне сп'яніння</li>
                  <li>• Травма при скоєнні злочину</li>
                  <li>• Перші 5 днів лікарняного (оплачуються з 6-го дня)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як розраховується розмір лікарняних?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Розмір виплати по тимчасовій непрацездатності для ФОП залежить від <strong>суми сплаченого ЄСВ</strong> 
            та <strong>страхового стажу</strong>.
          </p>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-blue-100 dark:bg-blue-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Страховий стаж</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Відсоток виплати</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Менше 3 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">50% від середньої зарплати</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 3 до 5 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">60% від середньої зарплати</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 5 до 8 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">70% від середньої зарплати</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Більше 8 років</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-blue-600">100% від середньої зарплати</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">📊 Формула розрахунку</h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-mono bg-gray-100 dark:bg-gray-800 p-3 rounded">
                Лікарняні = (Середня сума ЄСВ за 6 міс / 22%) × % стажу × Кількість днів / 30.44
              </p>
              
              <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                <p className="font-semibold mb-2">Приклад 1: ЄСВ від мінімалки, стаж 5 років</p>
                <p>• ЄСВ: 8000 грн × 22% = 1760 грн/міс</p>
                <p>• За 6 місяців: 1760 × 6 = 10 560 грн</p>
                <p>• Середня база: 10 560 / 6 / 22% = 8000 грн</p>
                <p>• Відсоток стажу: 70% (5-8 років)</p>
                <p>• Лікарняний за 10 днів: 8000 × 0.70 × 10 / 30.44 = <strong className="text-purple-600">1 842 грн</strong></p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Примітка: Оплачується тільки з 6-го дня, тобто за 5 днів = 921 грн
                </p>
              </div>

              <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                <p className="font-semibold mb-2">Приклад 2: ЄСВ від 20 000 грн, стаж 10 років</p>
                <p>• ЄСВ: 20 000 × 22% = 4400 грн/міс</p>
                <p>• Середня база: 4400 / 22% = 20 000 грн</p>
                <p>• Відсоток стажу: 100% (понад 8 років)</p>
                <p>• Лікарняний за 10 днів: 20 000 × 1.0 × 10 / 30.44 = <strong className="text-purple-600">6 571 грн</strong></p>
                <p>• З 6-го дня (5 днів): <strong className="text-purple-600">3 285 грн</strong></p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Особливості оплати лікарняних для ФОП
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-400">⏰ Перші 5 днів НЕ оплачуються</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  На відміну від найманих працівників, <strong>ФОП отримує оплату тільки з 6-го дня хвороби</strong>.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Приклад: Якщо ви хворіли 10 днів, оплата буде тільки за 5 днів (6-10 день).
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">💰 Максимальна сума виплати</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  Максимальна сума лікарняних обмежена <strong>розміром сплаченого ЄСВ</strong> та законодавчими лімітами.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  У 2026 році максимум ~8000 грн за місяць (якщо платите ЄСВ від 20 000 грн і стаж понад 8 років).
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">🏥 Догляд за хворою дитиною</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  ФОП може отримати лікарняні за <strong>догляд за хворою дитиною до 14 років</strong> на тих самих умовах.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Максимум 14 днів на рік для догляду за однією дитиною.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 dark:border-purple-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-400">📱 Електронний лікарняний</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2">
                  З 2021 року всі лікарняні <strong>тільки в електронному вигляді</strong>. Лікар створює е-лікарняний, 
                  який автоматично передається до ФСС.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як оформити лікарняний для ФОП?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Візьміть лікарняний у лікаря</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Зверніться до сімейного лікаря або спеціаліста в поліклініці. Лікар створить електронний 
                  лікарняний лист (е-лікарняний) у системі. Паперовий лікарняний більше не видається.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Подайте заяву в ФСС</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Після одужання подайте заяву на виплату через:<br/>
                  • Особистий кабінет на сайті ФСС (fse.gov.ua)<br/>
                  • Додаток Дія<br/>
                  • Особисто у відділенні ФСС<br/>
                  • Поштою
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Надайте документи</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  До заяви додайте:
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  <li>Копія паспорта</li>
                  <li>Копія ІПН</li>
                  <li>Довідка про сплату ЄСВ (з ДПС)</li>
                  <li>Реквізити банківського рахунку</li>
                  <li>Номер е-лікарняного (видає лікар)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте виплату</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ФСС розглядає заяву протягом 10 робочих днів. Після схвалення гроші перераховуються 
                  на банківський рахунок протягом 5 робочих днів.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Поширені питання
          </h2>

          <div className="space-y-4 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Чи можна працювати на лікарняному?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <strong>ФОП може працювати на лікарняному</strong>, але це не рекомендується з медичної точки зору. 
                  Якщо ви продовжуєте діяльність — це не впливає на виплату лікарняних, головне — мати лікарняний лист.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Що буде, якщо не платити ЄСВ 6 місяців?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Ви <strong>не зможете отримати оплату за лікарняним</strong>. ФСС відмовить у виплаті через 
                  недостатній страховий стаж. Тому важливо регулярно сплачувати ЄСВ.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Чи можна отримати лікарняні після закриття ФОП?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Ні, лікарняні оплачуються тільки якщо ви були ФОП <strong>на момент хвороби</strong>. 
                  Якщо ви закрили ФОП до хвороби — виплати не буде.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Скільки разів на рік можна брати лікарняний?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Необмежену кількість разів</strong>, якщо є медичні показання. Головне — щоб 
                  загальна сума виплат не перевищила максимальний ліміт на основі вашого ЄСВ.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>ФОП має право на оплату лікарняних</strong>, якщо регулярно сплачує ЄСВ мінімум 6 місяців. 
            Це важлива соціальна гарантія для підприємців, яка допомагає компенсувати втрату доходу під час хвороби.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Пам'ятайте: <strong>оплата починається тільки з 6-го дня хвороби</strong>, а розмір виплати залежить 
            від суми сплаченого ЄСВ та страхового стажу. Чим більше ЄСВ ви платите — тим більшу компенсацію отримаєте.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-pink-700 dark:from-red-700 dark:to-pink-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🧮 Розрахуйте свої виплати</h3>
            <p className="text-red-100 dark:text-red-200 mb-6 max-w-2xl mx-auto">
              Використайте наші калькулятори для розрахунку ЄСВ та лікарняних виплат
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
                <CardTitle>Декретні для ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/fop-maternity-leave-2026">
                    Допомога по вагітності
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Пенсія для ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/blog/fop-pensions">
                    Як формується пенсія
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
