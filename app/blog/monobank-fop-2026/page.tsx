import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink, Smartphone, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Monobank для ФОП 2026: Умови, Тарифи, Відгуки | Кращий мобільний банк",
  description: "Повний огляд Monobank для підприємців: безкоштовне обслуговування, 0% комісії на переказ, зручний мобільний додаток. Як відкрити рахунок ФОП онлайн.",
  keywords: [
    "monobank для ФОП",
    "monobank бізнес рахунок",
    "відкрити рахунок monobank ФОП",
    "тарифи monobank для підприємців",
    "monobank комісії ФОП 2026"
  ],
  openGraph: {
    title: "Monobank для ФОП 2026: Умови та Тарифи",
    description: "Детальний огляд Monobank для підприємців: переваги, тарифи, як відкрити рахунок",
    type: "article",
  },
};

export default function MonobankFOPPage() {
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
            Monobank для ФОП у 2026 році
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 8 березня 2026</time>
            <span>•</span>
            <span>Читання: 10 хв</span>
          </div>

          <div className="bg-black dark:bg-gray-900 border-l-4 border-black p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Smartphone className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-2">🏆 Monobank — найпопулярніший мобільний банк України</h3>
                <p className="text-sm text-gray-300">
                  Перший повністю мобільний банк в Україні. Безкоштовне обслуговування, 0% комісії на перекази, 
                  зручний додаток та швидке відкриття рахунку онлайн за 10 хвилин.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому ФОП обирають Monobank?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-black dark:border-gray-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Безкоштовне обслуговування
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• 0 грн за відкриття рахунку</p>
                <p>• 0 грн за щомісячне обслуговування</p>
                <p>• Безкоштовна бізнес-картка</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black dark:border-gray-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  0% комісії на перекази
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Переказ на картки інших банків — 0%</p>
                <p>• Поповнення рахунку — 0%</p>
                <p>• Зняття готівки до 100 000 грн/міс — 0%</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black dark:border-gray-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  Зручний мобільний додаток
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Все в телефоні — без відвідування відділення</p>
                <p>• Миттєві push-повідомлення про операції</p>
                <p>• Зручна історія транзакцій</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-black dark:border-gray-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  Кешбек та бонуси
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• До 20% кешбеку від партнерів</p>
                <p>• Програма лояльності</p>
                <p>• Спеціальні пропозиції для бізнесу</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Тарифи Monobank для ФОП (2026)
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Послуга</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Тариф</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Відкриття рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0 грн</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Щомісячне обслуговування</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0 грн</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картки інших банків</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Поповнення рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки (до 100 000 грн/міс)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки (понад 100 000 грн/міс)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1% від суми</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Бізнес-картка</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">Безкоштовно</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як відкрити рахунок ФОП в Monobank?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Завантажте додаток Monobank</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Скачайте додаток з App Store або Google Play. Це повністю мобільний банк — відділень немає.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Оберіть "Бізнес-рахунок"</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  У додатку виберіть опцію відкриття рахунку для ФОП. Вам потрібен паспорт та ІПН.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Пройдіть ідентифікацію</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Зробіть селфі з паспортом та підтвердіть свої дані. Процес займає 5-10 хвилин.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте картку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Безкоштовна бізнес-картка буде доставлена кур'єром протягом 1-3 днів. Рахунок активний одразу після відкриття.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Переваги та недоліки Monobank для ФОП
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Переваги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Повністю безкоштовне обслуговування</p>
                <p>• 0% комісії на перекази</p>
                <p>• Зручний мобільний додаток</p>
                <p>• Швидке відкриття онлайн (10 хвилин)</p>
                <p>• Кешбек та бонуси</p>
                <p>• Миттєві push-повідомлення</p>
                <p>• Підтримка 24/7 в чаті</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">❌ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Немає фізичних відділень</p>
                <p>• Комісія 1% при знятті понад 100 000 грн/міс</p>
                <p>• Обмежені можливості для великого бізнесу</p>
                <p>• Потрібен смартфон для всіх операцій</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Monobank</strong> — ідеальний вибір для ФОП, які цінують зручність, швидкість та економію. 
            Повністю безкоштовне обслуговування, 0% комісії на перекази та зручний мобільний додаток роблять 
            його одним з найпопулярніших банків серед підприємців.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Особливо підходить для <strong>фрілансерів, IT-спеціалістів та малого бізнесу</strong>, 
            які працюють онлайн та не потребують частих візитів до відділення.
          </p>

          <div className="bg-gradient-to-r from-black to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🚀 Відкрийте рахунок в Monobank</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Безкоштовне відкриття за 10 хвилин, 0% комісії, зручний додаток
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.monobank.ua/business" target="_blank" rel="noopener noreferrer">
                Перейти на сайт Monobank
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Порівняння банків</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/fop-bank-accounts">
                    Огляд всіх банків
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
