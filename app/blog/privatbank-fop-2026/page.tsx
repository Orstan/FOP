import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink, Building2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "ПриватБанк для ФОП 2026: Тарифи, Умови, Відгуки | Найбільший банк України",
  description: "Повний огляд ПриватБанку для підприємців: тарифи Приват24 Бізнес, автосплата податків, інтернет-еквайринг. Як відкрити рахунок ФОП.",
  keywords: [
    "приватбанк для ФОП",
    "приват24 бізнес",
    "відкрити рахунок приватбанк ФОП",
    "тарифи приватбанк для підприємців",
    "приватбанк комісії ФОП 2026"
  ],
  openGraph: {
    title: "ПриватБанк для ФОП 2026: Тарифи та Умови",
    description: "Детальний огляд ПриватБанку для підприємців: переваги, тарифи, як відкрити рахунок",
    type: "article",
  },
};

export default function PrivatBankFOPPage() {
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
            ПриватБанк для ФОП у 2026 році
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 8 березня 2026</time>
            <span>•</span>
            <span>Читання: 11 хв</span>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">🏦 ПриватБанк — найбільший банк України</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Найбільша мережа відділень та банкоматів, Приват24 Бізнес, автосплата податків, 
                  інтернет-еквайринг. Надійний вибір для бізнесу будь-якого розміру.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому ФОП обирають ПриватБанк?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-600 dark:border-green-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Найбільша мережа в Україні
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Понад 2000 відділень по всій країні</p>
                <p>• Найбільша мережа банкоматів</p>
                <p>• Доступність у будь-якому місті</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 dark:border-green-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  Приват24 Бізнес
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Зручний онлайн-банкінг</p>
                <p>• Автосплата податків та ЄСВ</p>
                <p>• Інтеграція з бухгалтерією</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 dark:border-green-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Надійність та безпека
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Державний банк (100% держава)</p>
                <p>• Гарантія вкладів до 600 000 грн</p>
                <p>• Багаторічний досвід роботи</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 dark:border-green-700 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600" />
                  Еквайринг та термінали
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p>• Інтернет-еквайринг для сайтів</p>
                <p>• POS-термінали для магазинів</p>
                <p>• Прийом оплати картками</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Тарифи ПриватБанку для ФОП (2026)
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-green-600 text-white">
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
                  <td className="border border-gray-300 dark:border-gray-700 p-3">від 0 грн (залежить від тарифу)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картки ПриватБанку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картки інших банків</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0.5% (мін 5 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Поповнення рахунку готівкою</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">0%</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки в банкоматах ПриватБанку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1% (мін 10 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Приват24 Бізнес (онлайн-банкінг)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">Безкоштовно</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">💡 Тарифні пакети для ФОП</h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold">1. "Старт" — 0 грн/міс</p>
                <p className="text-xs">Базовий пакет для початківців. Обмежена кількість операцій.</p>
              </div>
              <div>
                <p className="font-semibold">2. "Оптима" — 99 грн/міс</p>
                <p className="text-xs">Найпопулярніший пакет. Необмежені перекази, автосплата податків.</p>
              </div>
              <div>
                <p className="font-semibold">3. "Максимум" — 299 грн/міс</p>
                <p className="text-xs">Для активного бізнесу. Еквайринг, пріоритетна підтримка.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як відкрити рахунок ФОП в ПриватБанку?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Онлайн через Приват24</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Якщо ви вже клієнт ПриватБанку — відкрийте рахунок через додаток Приват24. 
                  Виберіть "Відкрити рахунок" → "Для бізнесу".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">У відділенні банку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Візьміть з собою паспорт та ІПН. Менеджер допоможе обрати тарифний пакет та оформити рахунок за 15-20 хвилин.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Через сайт ПриватБанку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Залиште заявку на сайті privatbank.ua, і менеджер зв'яжеться з вами для оформлення.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Переваги та недоліки ПриватБанку для ФОП
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-400">✅ Переваги</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Найбільша мережа відділень та банкоматів</p>
                <p>• Державний банк — максимальна надійність</p>
                <p>• Зручний Приват24 Бізнес</p>
                <p>• Автосплата податків та ЄСВ</p>
                <p>• Інтернет-еквайринг та POS-термінали</p>
                <p>• Безкоштовні перекази на картки ПриватБанку</p>
                <p>• Підтримка 24/7</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 dark:border-red-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-400">❌ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Комісія 0.5% на перекази в інші банки</p>
                <p>• Комісія 1% за зняття готівки</p>
                <p>• Платне обслуговування (від 99 грн/міс для активних)</p>
                <p>• Іноді довгі черги у відділеннях</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить ПриватБанк?
          </h2>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Торгівля та роздріб:</strong> Потрібні POS-термінали та еквайринг</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Регіональний бізнес:</strong> Потрібен доступ до відділень у різних містах</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Робота з готівкою:</strong> Часто потрібно вносити/знімати готівку</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong>Консервативний підхід:</strong> Цінуєте надійність державного банку</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>ПриватБанк</strong> — найбільший та найнадійніший банк України, ідеальний вибір для бізнесу, 
            який потребує широкої мережі відділень, еквайрингу та максимальної надійності. Державна власність 
            гарантує стабільність навіть у складні часи.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Особливо підходить для <strong>торгівлі, роздрібного бізнесу та регіональних підприємців</strong>, 
            які працюють з готівкою та потребують фізичної присутності банку.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🏦 Відкрийте рахунок в ПриватБанку</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Найбільша мережа в Україні, Приват24 Бізнес, автосплата податків
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="https://privatbank.ua/business" target="_blank" rel="noopener noreferrer">
                Перейти на сайт ПриватБанку
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
