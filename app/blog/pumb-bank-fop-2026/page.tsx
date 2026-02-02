import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Zap, Gift, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ПУМБ для ФОП 2026: Умови, Тарифи, Акції | 0% Комісії на Рік",
  description: "Повний огляд ПУМБ для ФОП: акція 0% комісії на 12 місяців, безкоштовне відкриття рахунку, автоматична сплата податків. Як відкрити рахунок онлайн за 5 хвилин.",
  keywords: [
    "ПУМБ для ФОП",
    "рахунок ПУМБ ФОП",
    "тарифи ПУМБ для підприємців",
    "0% комісії ПУМБ",
    "відкрити рахунок ФОП ПУМБ",
    "ПУМБ банк ФОП 2026"
  ],
  openGraph: {
    title: "ПУМБ для ФОП 2026: 0% Комісії на Рік",
    description: "Найвигідніші умови для підприємців: безкоштовне відкриття, 0% комісії 12 місяців, автосплата податків",
    type: "article",
  },
};

export default function PUMBBankFOPPage() {
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

          <div className="flex items-center gap-2 mb-4 not-prose">
            <span className="text-4xl">🥇</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 m-0">
              ПУМБ для ФОП: №1 у Рейтингу 2026
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 2 лютого 2026</time>
            <span>•</span>
            <span>Читання: 9 хв</span>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-l-4 border-green-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Gift className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔥 Акція 2026: 0% Комісії на Рік!</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  ПУМБ пропонує найвигіднішу пропозицію для нових ФОП: <strong>0% комісії на всі операції протягом 12 місяців!</strong> 
                  Економте до 5000 грн на рік на банківському обслуговуванні.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому ПУМБ — №1 для ФОП у 2026?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  Швидкість
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Відкриття онлайн за 5 хвилин</p>
                <p>✅ Миттєві перекази 24/7</p>
                <p>✅ Швидка видача карток</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  Економія
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ 0% комісії 12 місяців</p>
                <p>✅ Безкоштовне відкриття</p>
                <p>✅ Безлімітні платіжки</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Зручність
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Автосплата податків</p>
                <p>✅ Інтеграція з Дія.Бізнес</p>
                <p>✅ Мобільний банкінг</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Акційні тарифи ПУМБ для ФОП 2026
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-green-100 dark:bg-green-900/30">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Послуга</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Перші 12 місяців</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Після акції</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Відкриття рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0 грн</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0 грн</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Обслуговування рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0 грн/міс</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">99 грн/міс</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Платіжні доручення</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0% комісії</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 3 грн</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0% комісії</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0.5% (мін 5 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0% комісії</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1% (мін 10 грн)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Корпоративна картка</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">Безкоштовно</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Безкоштовно</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💰 Економія: до 5000 грн на рік!</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Порівняно з іншими банками, акція ПУМБ дозволяє заощадити:<br/>
                  • Обслуговування: 99 грн × 12 = <strong>1188 грн</strong><br/>
                  • Платіжки (100 шт): 3 грн × 100 = <strong>300 грн</strong><br/>
                  • Перекази на картку (50 шт): 5 грн × 50 = <strong>250 грн</strong><br/>
                  <strong>Загальна економія: ~1738 грн за перший рік!</strong>
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як відкрити рахунок ФОП у ПУМБ онлайн?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Подайте заявку онлайн</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Перейдіть на сайт ПУМБ або завантажте мобільний додаток. Натисніть "Відкрити рахунок для бізнесу".
                  Процес займає 5-7 хвилин.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Пройдіть верифікацію</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Використайте BankID або Дія.Підпис для ідентифікації. Завантажте фото паспорта та 
                  витяг з ЄДР про реєстрацію ФОП (можна отримати в Дії).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте реквізити</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Після схвалення (зазвичай за 1-2 години) ви одразу отримаєте IBAN рахунку та доступ до онлайн-банкінгу.
                  Корпоративну картку можна замовити за потреби.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Унікальні можливості ПУМБ
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-400">🤖 Автоматична сплата податків</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>ПУМБ інтегрований з ДПС України:</p>
                <p>• Автоматичний розрахунок ЄСВ</p>
                <p>• Нагадування про терміни</p>
                <p>• Оплата в 1 клік</p>
                <p>• Звітність через Дія.Бізнес</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">📱 Зручний онлайн-банкінг</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>Сучасний мобільний додаток:</p>
                <p>• Миттєві перекази 24/7</p>
                <p>• Створення платіжок</p>
                <p>• Push-повідомлення</p>
                <p>• Аналітика витрат</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Переваги та недоліки
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Переваги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• 0% комісії на 12 місяців</p>
                <p>• Відкриття онлайн за 5 хвилин</p>
                <p>• Автоматична сплата податків</p>
                <p>• Безкоштовні платіжні доручення</p>
                <p>• Інтеграція з Дія.Бізнес</p>
                <p>• Зручний мобільний додаток</p>
                <p>• Підтримка 24/7</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-400">⚠️ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Акція діє лише перший рік</p>
                <p>• Після акції комісії стандартні</p>
                <p>• Обмежена мережа відділень порівняно з великими банками</p>
                <p>• Менше додаткових послуг для великого бізнесу</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить ПУМБ?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Нових ФОП:</strong> Ідеально для старту бізнесу без додаткових витрат</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Фрілансерів:</strong> Зручні перекази на картку, швидкі операції</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Малого бізнесу:</strong> Економія на комісіях, автосплата податків</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>IT-спеціалістів:</strong> Сучасний онлайн-банкінг, API для інтеграцій</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Тих, хто цінує економію:</strong> Мінімальні витрати на банківське обслуговування</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>ПУМБ — безумовний лідер серед банків для ФОП у 2026 році.</strong> Акція з 0% комісії на 12 місяців, 
            безкоштовне відкриття та автоматична сплата податків роблять його найвигіднішим вибором для 
            підприємців будь-якого масштабу.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Якщо ви тільки відкриваєте ФОП або хочете заощадити на банківському обслуговуванні — 
            ПУМБ буде ідеальним вибором. Відкрити рахунок можна за 5 хвилин, не виходячи з дому.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-700 dark:to-emerald-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🥇 Відкрийте рахунок у ПУМБ зараз</h3>
            <p className="text-green-100 dark:text-green-200 mb-6 max-w-2xl mx-auto">
              0% комісії на 12 місяців • Відкриття за 5 хвилин • Автосплата податків
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">
                Відкрити рахунок у ПУМБ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Порівняння банків</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/">
                    Рейтинг ТОП-3 банків
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
