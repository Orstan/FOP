import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertTriangle, Calculator, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "ФОП на загальній системі оподаткування 2026: Податки, Ставки, Для кого підходить",
  description: "Повний гайд про загальну систему для ФОП: хто може обрати, які податки платити, переваги і недоліки ЗС порівняно з єдиним податком. Актуально 2026.",
  keywords: [
    "загальна система оподаткування ФОП",
    "ФОП на загальній системі",
    "податки на загальній системі 2026",
    "ПДФО для ФОП",
    "військовий збір ФОП",
    "загальна система vs єдиний податок"
  ],
  openGraph: {
    title: "ФОП на загальній системі оподаткування 2026",
    description: "Детальний розбір загальної системи: податки, ставки, для кого підходить, як перейти",
    type: "article",
  },
};

export default function FOPGeneralTaxSystemPage() {
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
            ФОП на загальній системі оподаткування у 2026 році
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 6 лютого 2026</time>
            <span>•</span>
            <span>Читання: 14 хв</span>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Calculator className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚡ Коротко про загальну систему</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Загальна система (ЗС)</strong> — це базовий режим оподаткування для ФОП, де ви платите ПДФО 18%, 
                  військовий збір 1.5% та ЄСВ 22%. Підходить для великих доходів та роботи з ПДВ.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Що таке загальна система оподаткування?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Загальна система (ЗС)</strong> — це стандартний режим оподаткування, який застосовується автоматично, 
            якщо ФОП не обрав спрощену систему (єдиний податок). На загальній системі податки розраховуються від чистого 
            доходу (дохід мінус витрати).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Які податки платить ФОП на загальній системі?
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-purple-100 dark:bg-purple-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Податок</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Ставка</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">База оподаткування</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ПДФО</strong> (податок на доходи фізичних осіб)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-purple-600">18%</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Дохід мінус витрати</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Військовий збір</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-purple-600">1.5%</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Дохід мінус витрати</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ЄСВ</strong> (єдиний соціальний внесок)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-purple-600">22%</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Мінімальна зарплата або більше (8000 грн у 2026)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ПДВ</strong> (необов'язково)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-purple-600">20%</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Якщо оборот &gt; 1 млн грн/рік</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Приклад розрахунку податків
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">📊 Приклад для IT-фрілансера</h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Дохід за місяць:</strong> 100 000 грн</p>
              <p><strong>Підтверджені витрати:</strong> 20 000 грн (оренда офісу, обладнання, підписки)</p>
              <p className="pt-2 border-t border-blue-200 dark:border-blue-700"><strong>Чистий дохід:</strong> 100 000 - 20 000 = 80 000 грн</p>
              
              <div className="pt-3 space-y-1">
                <p>• ПДФО 18%: 80 000 × 0.18 = <strong className="text-purple-600">14 400 грн</strong></p>
                <p>• Військовий збір 1.5%: 80 000 × 0.015 = <strong className="text-purple-600">1 200 грн</strong></p>
                <p>• ЄСВ 22%: 8 000 × 0.22 = <strong className="text-purple-600">1 760 грн</strong> (від мінімалки)</p>
              </div>
              
              <p className="pt-3 border-t border-blue-200 dark:border-blue-700 font-bold text-lg">
                Всього податків: 14 400 + 1 200 + 1 760 = <span className="text-purple-600">17 360 грн</span>
              </p>
              <p className="text-green-600 dark:text-green-400">
                Залишається на руки: 100 000 - 17 360 = <strong>82 640 грн</strong>
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 pt-2">
                Ефективна ставка: 17.36% (з урахуванням витрат)
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як враховувати витрати на загальній системі?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            На загальній системі ви можете <strong>зменшити оподатковуваний дохід на суму документально підтверджених витрат</strong>. 
            Це одна з головних переваг ЗС.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Витрати, які можна врахувати</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Оренда офісу/приміщення</p>
                <p>• Комунальні послуги</p>
                <p>• Закупівля товарів для перепродажу</p>
                <p>• Сировина та матеріали</p>
                <p>• Обладнання та інструменти</p>
                <p>• Транспортні витрати</p>
                <p>• Зарплата найманих працівників</p>
                <p>• Програмне забезпечення</p>
                <p>• Реклама та маркетинг</p>
                <p>• Канцелярські товари</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">❌ Що НЕ можна врахувати</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Особисті витрати (їжа, одяг)</p>
                <p>• Витрати без документів</p>
                <p>• Штрафи та пені</p>
                <p>• Витрати на розваги</p>
                <p>• Особистий транспорт (без ділової мети)</p>
                <p>• Особисті подорожі</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚠️ Важливо про витрати</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Всі витрати повинні бути <strong>документально підтверджені</strong>: чеки, накладні, акти, договори. 
                  Зберігайте документи мінімум 3 роки. ДПС може перевірити та вимагати підтвердження витрат.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить загальна система?
          </h2>

          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Високі витрати:</strong> Якщо витрати становлять 40-60% від доходу (торгівля, виробництво)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Великі обороти:</strong> Дохід перевищує ліміти єдиного податку (7 млн грн для групи 3)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Робота з ПДВ:</strong> Потрібно виставляти податкові накладні з ПДВ для контрагентів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Заборонені види діяльності:</strong> Діяльність, яка не підпадає під єдиний податок</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <span><strong>Найм працівників:</strong> Якщо у вас багато найманих працівників (>10 осіб)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Загальна система VS Єдиний податок
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Критерій</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Загальна система</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Єдиний податок (3 група)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Ставка</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">18% ПДФО + 1.5% ВЗ + 22% ЄСВ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">5% + 22% ЄСВ</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Витрати</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600">✅ Можна враховувати</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600">❌ Не враховуються</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Ліміт доходу</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600">✅ Без ліміту</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-orange-600">⚠️ До 7 млн грн/рік</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>ПДВ</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600">✅ Можна бути платником</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-orange-600">⚠️ Тільки якщо оборот &gt; 1 млн грн</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Звітність</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600">❌ Складніша (щокварталу)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600">✅ Простіша (щороку)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3"><strong>Кому вигідніше</strong></td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Великі витрати (&gt;40%), великий оборот, потрібен ПДВ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Низькі витрати (&lt;20%), послуги, фріланс</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як перейти на загальну систему?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">При реєстрації ФОП</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Якщо ви не подасте заяву про застосування єдиного податку, автоматично будете на загальній системі.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Перехід з єдиного податку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Подайте заяву про відмову від спрощеної системи до 15 січня. Перехід відбудеться з 1 січня наступного року.
                  Або автоматично, якщо перевищили ліміт доходів.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Переваги та недоліки загальної системи
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Переваги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Можна враховувати витрати</p>
                <p>• Без ліміту доходу</p>
                <p>• Можна бути платником ПДВ</p>
                <p>• Підходить для торгівлі з великими витратами</p>
                <p>• Більше найманих працівників</p>
                <p>• Вигідно при високих витратах (>40%)</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">❌ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Складніша звітність (щокварталу)</p>
                <p>• Потрібно підтверджувати витрати</p>
                <p>• Вищі податки при низьких витратах</p>
                <p>• Більше уваги від ДПС</p>
                <p>• Потрібен бухгалтер (рекомендовано)</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Загальна система оподаткування</strong> підходить не всім ФОП. Вона вигідна для тих, хто має високі 
            підтверджені витрати (торгівля, виробництво) або великий оборот понад 7 млн грн/рік. Для фрілансерів та 
            надавачів послуг з низькими витратами зазвичай вигідніший єдиний податок.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Перед вибором системи оподаткування порахуйте свої <strong>прогнозовані витрати</strong>. Якщо витрати становлять 
            більше 40% від доходу — загальна система може бути вигіднішою за єдиний податок.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-blue-700 dark:from-purple-700 dark:to-blue-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🧮 Порівняйте системи оподаткування</h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto">
              Використайте наші калькулятори, щоб обрати найвигіднішу систему для вашого бізнесу
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/calculators">
                Розрахувати податки
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Вибір групи ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/choose-fop-group">
                    Порівняння груп
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Відкрити ФОП</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/blog/yak-vidkryty-fop-2026">
                    Покрокова інструкція
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
