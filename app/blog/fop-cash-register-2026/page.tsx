import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertCircle, DollarSign, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Чи потрібен касовий апарат для ФОП у 2026 році? | Коли обов'язковий РРО",
  description: "Детальний гайд: коли ФОП потрібен касовий апарат (РРО), хто звільнений від РРО, штрафи за роботу без каси, як зареєструвати РРО онлайн. Актуально на 2026 рік.",
  keywords: [
    "касовий апарат для ФОП",
    "РРО для ФОП 2026",
    "чи потрібна каса ФОП",
    "звільнення від РРО",
    "штрафи за роботу без каси",
    "реєстрація РРО онлайн"
  ],
  openGraph: {
    title: "Касовий апарат для ФОП 2026: Коли обов'язковий РРО",
    description: "Повний гайд: хто має встановлювати РРО, хто звільнений, штрафи та як зареєструвати касу онлайн",
    type: "article",
  },
};

export default function FOPCashRegisterPage() {
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
            Чи потрібен касовий апарат для ФОП у 2026 році?
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 6 лютого 2026</time>
            <span>•</span>
            <span>Читання: 12 хв</span>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚡ Коротка відповідь</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Не всім ФОП потрібен касовий апарат.</strong> Якщо ви надаєте послуги або працюєте тільки з 
                  безготівковими розрахунками — РРО не обов'язковий. Але є винятки та нюанси, про які розповімо детально.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Що таке РРО і навіщо він потрібен?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>РРО (реєстратор розрахункових операцій)</strong> — це касовий апарат, який фіксує всі продажі 
            та автоматично передає дані до ДПС України. Це дозволяє державі контролювати обіг готівки та 
            запобігати ухиленню від сплати податків.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Хто ОБОВ'ЯЗКОВО має встановлювати РРО?
          </h2>

          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">❌ РРО обов'язковий для ФОП, якщо ви:</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Продаєте товари за готівку або картку</strong> (роздрібна торгівля)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Працюєте в сфері громадського харчування</strong> (кафе, ресторани, їдальні, кіоски)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Надаєте побутові послуги за готівку</strong> (перукарня, СТО, ремонт техніки, хімчистка)</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Приймаєте готівку або платіжні картки</strong> від фізичних осіб</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Хто ЗВІЛЬНЕНИЙ від використання РРО?
          </h2>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">✅ РРО НЕ потрібен для ФОП, якщо ви:</h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Надаєте послуги виключно безготівково</strong> (перекази на рахунок)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Працюєте тільки з юридичними особами</strong> (B2B, виписуєте акти та рахунки)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>IT-фрілансер</strong> (надання послуг програмування, дизайну, маркетингу онлайн)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Працюєте на єдиному податку 2-3 група</strong> та надаєте тільки послуги (не торгівля)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Продаєте товари через інтернет</strong> з доставкою накладним платежем (без готівки)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Працюєте на ринку</strong> (при оплаті торгового патенту)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Особливі випадки та винятки
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">💼 Консультант / Коуч</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Без РРО:</strong></p>
                <p>✅ Якщо приймаєте оплату тільки на картку/рахунок</p>
                <p className="mb-2 mt-3"><strong>З РРО:</strong></p>
                <p>❌ Якщо клієнти платять готівкою</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-500 dark:border-purple-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-400">🏪 Інтернет-магазин</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Без РРО:</strong></p>
                <p>✅ Оплата онлайн або накладним платежем</p>
                <p className="mb-2 mt-3"><strong>З РРО:</strong></p>
                <p>❌ Якщо є офлайн-точка з готівковими продажами</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-400">💇 Перукар / Масажист</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Без РРО:</strong></p>
                <p>✅ Тільки переказ на картку або рахунок</p>
                <p className="mb-2 mt-3"><strong>З РРО:</strong></p>
                <p>❌ Приймаєте готівку або термінал</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">🎨 Майстер хендмейд</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Без РРО:</strong></p>
                <p>✅ Продаж через Instagram з передоплатою на картку</p>
                <p className="mb-2 mt-3"><strong>З РРО:</strong></p>
                <p>❌ Продаж на ярмарках/виставках за готівку</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Штрафи за роботу без РРО у 2026 році
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-red-100 dark:bg-red-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Порушення</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Штраф</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Торгівля без РРО (перший раз)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">10 неоподатковуваних мінімумів (170 грн × 10 = <strong>1700 грн</strong>)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Повторне порушення (протягом року)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">30 неоподатковуваних мінімумів (<strong>5100 грн</strong>)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Невидача чека клієнту</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">10-15 неоподатковуваних мінімумів (<strong>1700-2550 грн</strong>)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Використання незареєстрованого РРО</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-red-600">50% вартості РРО (але не менше <strong>1700 грн</strong>)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як зареєструвати РРО онлайн?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Купіть РРО або програмний РРО</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Фізичний РРО:</strong> Від 3000 грн (Datecs, Екселліо, IKC)<br/>
                  <strong>Програмний РРО (ПРРО):</strong> Від 0 грн (Checkbox, POSTER, vchasno)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Зареєструйте РРО в Кабінеті платника податків</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Зайдіть в ЕКП → РРО та розрахункові книжки → Реєстрація РРО.<br/>
                  Заповніть форму: модель, заводський номер, адреса точки продажу.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте фіскальний номер</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Після схвалення заяви ДПС надішле фіскальний номер касового апарата.
                  Введіть його в налаштуваннях РРО.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Почніть роботу</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  РРО готовий до використання. Всі чеки автоматично передаються до ДПС.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Програмний РРО: дешева альтернатива
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            З 2021 року ФОП можуть використовувати <strong>програмний РРО (ПРРО)</strong> замість фізичного касового апарата.
            Це додаток на телефоні або планшеті, який виконує функції каси.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">Checkbox</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Безкоштовно</strong></p>
                <p>✅ Для новачків</p>
                <p>✅ Прості налаштування</p>
                <p>✅ iOS та Android</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">POSTER</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Від 200 грн/міс</strong></p>
                <p>✅ Для кафе та ресторанів</p>
                <p>✅ Склад та аналітика</p>
                <p>✅ Інтеграції</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-lg">vchasno</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-2"><strong>Від 150 грн/міс</strong></p>
                <p>✅ Для магазинів</p>
                <p>✅ Товарний облік</p>
                <p>✅ Онлайн підтримка</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Касовий апарат потрібен не всім ФОП.</strong> Якщо ви надаєте послуги безготівково або працюєте 
            виключно з юридичними особами — РРО не обов'язковий. Але якщо ви приймаєте готівку від фізичних осіб 
            або продаєте товари в роздріб — встановлення РРО обов'язкове.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            У 2026 році найпростіший та найдешевший варіант — використовувати <strong>програмний РРО</strong> 
            (ПРРО) на телефоні або планшеті. Багато сервісів надають базовий функціонал безкоштовно.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">📊 Розрахуйте свої податки</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              Скористайтеся нашими безкоштовними калькуляторами для розрахунку ЄСВ та податків
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators">
                Перейти до калькуляторів
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Відкрити ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/yak-vidkryty-fop-2026">
                    Покрокова інструкція
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Банки для ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/">
                    ТОП-3 банки 2026
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
