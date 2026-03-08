import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink, Zap, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "ПУМБ для ФОП 2026: Тарифи, Умови, Відгуки | Банк для підприємців",
  description: "Повний огляд ПУМБ для підприємців: вигідні тарифи, бізнес-картки, онлайн-банкінг. Спеціальні умови для ФОП та малого бізнесу.",
  keywords: [
    "ПУМБ для ФОП",
    "ПУМБ бізнес рахунок",
    "відкрити рахунок ПУМБ ФОП",
    "тарифи ПУМБ для підприємців",
    "ПУМБ комісії ФОП 2026"
  ],
  openGraph: {
    title: "ПУМБ для ФОП 2026: Тарифи та Умови",
    description: "Детальний огляд ПУМБ для підприємців: переваги, тарифи, як відкрити рахунок",
    type: "article",
  },
};

export default function PUMBFOPPage() {
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
            ПУМБ для ФОП у 2026 році
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 8 березня 2026</time>
            <span>•</span>
            <span>Читання: 10 хв</span>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">⚡ ПУМБ — банк для підприємців</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Один з найстаріших приватних банків України. Спеціальні умови для малого та середнього бізнесу, 
                  вигідні тарифи, широка мережа відділень.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому ФОП обирають ПУМБ?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-yellow-600 dark:border-yellow-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Вигідні тарифи для бізнесу
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Низькі комісії на перекази</p>
                <p>• Спеціальні пакети для ФОП</p>
                <p>• Безкоштовне відкриття рахунку</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 dark:border-yellow-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Зручний онлайн-банкінг
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• ПУМБ Онлайн для бізнесу</p>
                <p>• Мобільний додаток</p>
                <p>• Інтеграція з 1С та іншими системами</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 dark:border-yellow-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-blue-600" />
                  Бізнес-картки
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Безкоштовна бізнес-картка Visa/Mastercard</p>
                <p>• Кешбек на бізнес-витрати</p>
                <p>• Безконтактна оплата</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 dark:border-yellow-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  Додаткові послуги
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Бізнес-кредитування</p>
                <p>• Еквайринг для прийому оплат</p>
                <p>• Зарплатні проекти</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Тарифи ПУМБ для ФОП (2026)
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-yellow-600 text-white">
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
                  <td className="border border-gray-300 dark:border-gray-700 p-3">від 49 грн/міс</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картки ПУМБ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картки інших банків</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0.3% (мін 3 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Поповнення рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки в банкоматах ПУМБ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0.5% (мін 5 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Бізнес-картка</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">Безкоштовно</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як відкрити рахунок ФОП в ПУМБ?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Онлайн через сайт</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Залиште заявку на офіційному сайті ПУМБ в розділі "Бізнес". Менеджер зв'яжеться з вами протягом дня.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">У відділенні банку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Візьміть паспорт та ІПН, відвідайте найближче відділення ПУМБ. Оформлення займає 20-30 хвилин.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте картку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Безкоштовна бізнес-картка буде готова протягом 3-5 робочих днів. Рахунок активний одразу.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Переваги та недоліки ПУМБ для ФОП
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Переваги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Вигідні тарифи для малого бізнесу</p>
                <p>• Низькі комісії на перекази (0.3%)</p>
                <p>• Зручний онлайн-банкінг</p>
                <p>• Безкоштовна бізнес-картка</p>
                <p>• Широка мережа відділень</p>
                <p>• Бізнес-кредитування</p>
                <p>• Підтримка малого бізнесу</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">❌ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Платне обслуговування (від 49 грн/міс)</p>
                <p>• Комісія за зняття готівки (0.5%)</p>
                <p>• Менша мережа ніж у ПриватБанку</p>
                <p>• Мобільний додаток менш зручний ніж у Monobank</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить ПУМБ?
          </h2>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <span><strong>Малий та середній бізнес:</strong> Спеціальні умови та підтримка</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <span><strong>Потреба в кредитуванні:</strong> Вигідні умови бізнес-кредитів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <span><strong>Регіональний бізнес:</strong> Відділення у багатьох містах України</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <span><strong>Баланс ціни та якості:</strong> Вигідніше за ПриватБанк, надійніше за невеликі банки</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>ПУМБ</strong> — відмінний вибір для малого та середнього бізнесу, який шукає баланс між 
            вигідними тарифами, якістю обслуговування та надійністю. Банк має багаторічний досвід роботи 
            з підприємцями та розуміє потреби бізнесу.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Особливо підходить для <strong>ФОП, які планують розвивати бізнес</strong> та можуть потребувати 
            кредитування, еквайрингу чи інших додаткових послуг у майбутньому.
          </p>

          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-700 dark:to-orange-700 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">⚡ Відкрийте рахунок в ПУМБ</h3>
            <p className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Вигідні тарифи для бізнесу, зручний онлайн-банкінг, підтримка підприємців
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://www.pumb.ua" target="_blank" rel="noopener noreferrer">
                Перейти на сайт ПУМБ
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
