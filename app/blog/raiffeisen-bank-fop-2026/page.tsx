import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Star, TrendingUp, Shield, Briefcase, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Raiffeisen Bank для ФОП 2026: Умови, Тарифи, Відгуки | ФОП Помічник",
  description: "Докладний огляд Raiffeisen Bank Aval для ФОП: умови відкриття рахунку, тарифи, комісії, бонуси. Як відкрити рахунок онлайн, переваги та недоліки для підприємців.",
  keywords: [
    "Raiffeisen Bank для ФОП",
    "рахунок Райффайзен Банк Аваль",
    "тарифи Raiffeisen для ФОП",
    "відкрити рахунок ФОП Raiffeisen",
    "комісії Райффайзен для підприємців",
    "Raiffeisen Bank Aval ФОП 2026"
  ],
  openGraph: {
    title: "Raiffeisen Bank для ФОП 2026: Повний Огляд",
    description: "Все про Raiffeisen Bank Aval для підприємців: тарифи, умови, як відкрити рахунок онлайн",
    type: "article",
  },
};

export default function RaiffeisenBankFOPPage() {
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
            Raiffeisen Bank для ФОП у 2026: Повний Огляд
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 2 лютого 2026</time>
            <span>•</span>
            <span>Читання: 10 хв</span>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Про Raiffeisen Bank Aval</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Raiffeisen Bank Aval — один з найбільших банків України з австрійським капіталом. 
                  Понад 2.5 млн клієнтів обрали цей банк за надійність, стабільність та високий рівень сервісу. 
                  Банк пропонує професійні рішення для бізнесу будь-якого масштабу.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому обирають Raiffeisen Bank для ФОП?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Надійність та стабільність
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Частина міжнародної групи Raiffeisen</p>
                <p>✅ Понад 25 років на ринку України</p>
                <p>✅ Висока фінансова стійкість</p>
                <p>✅ Застраховані депозити</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-600" />
                  Міжнародні можливості
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Швидкі міжнародні перекази</p>
                <p>✅ Мультивалютні рахунки</p>
                <p>✅ SWIFT, SEPA переказ</p>
                <p>✅ Робота з іноземними клієнтами</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  Бізнес-сервіси
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Онлайн-банкінг R-Online</p>
                <p>✅ Бізнес-кредитування</p>
                <p>✅ Зарплатні проекти</p>
                <p>✅ Інкасація та еквайринг</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  Персональний сервіс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Персональний менеджер</p>
                <p>✅ Консультації з фінансів</p>
                <p>✅ Мережа відділень</p>
                <p>✅ Підтримка 24/7</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Тарифи для ФОП у 2026 році
          </h2>

          <div className="overflow-x-auto mb-8 not-prose">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Послуга</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Тариф</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Відкриття рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold text-green-600">Безкоштовно</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Обслуговування рахунку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 0 грн/міс (залежить від пакету)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Платіжні доручення</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 5 грн за операцію</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1% (мін 5 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1-2% (залежить від суми)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">SWIFT-переказ</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 200 грн + комісія банку-кореспондента</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Важливо знати про тарифи</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Raiffeisen Bank пропонує різні пакети обслуговування для ФОП. Базовий пакет може бути безкоштовним 
                  при виконанні певних умов (наприклад, мінімальний залишок на рахунку або кількість операцій). 
                  Для детальної інформації рекомендуємо проконсультуватись з менеджером банку.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як відкрити рахунок ФОП у Raiffeisen Bank?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Підготуйте документи</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Паспорт громадянина України, ідентифікаційний код, витяг з ЄДР про реєстрацію ФОП 
                  (можна отримати онлайн у Дії або на сайті ДПС).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Оберіть спосіб відкриття</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Онлайн:</strong> Подайте заявку на сайті банку або в мобільному додатку. 
                  Ідентифікація через BankID або Дія.Підпис.
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>У відділенні:</strong> Відвідайте відділення банку з документами. 
                  Процедура займає 20-30 хвилин.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Отримайте доступ до рахунку</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Після перевірки документів (1-2 робочі дні) вам надають реквізити рахунку, 
                  доступ до онлайн-банкінгу R-Online та корпоративну картку (опціонально).
                </p>
              </div>
            </div>
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
                <p>• Високий рівень надійності та стабільності</p>
                <p>• Міжнародні банківські послуги</p>
                <p>• Професійна підтримка бізнесу</p>
                <p>• Широка мережа відділень</p>
                <p>• Інвестиційні та кредитні продукти</p>
                <p>• Зручний онлайн-банкінг</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-400">⚠️ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Вищі комісії порівняно з необанками</p>
                <p>• Більш тривала процедура відкриття</p>
                <p>• Необхідність підтримки мінімального залишку для безкоштовного обслуговування</p>
                <p>• Менше акційних пропозицій для нових клієнтів</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить Raiffeisen Bank?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Експортерів послуг:</strong> Якщо ви працюєте з іноземними клієнтами та потребуєте швидких міжнародних переказів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Середній та великий бізнес:</strong> Потреба в кредитуванні, інвестиційних продуктах та персональному менеджері</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Консервативних підприємців:</strong> Для кого важлива надійність та стабільність банку</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Тих, хто потребує комплексного банківського обслуговування:</strong> Зарплатні проекти, еквайринг, інкасація</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Raiffeisen Bank Aval — чудовий вибір для ФОП, які цінують надійність, професійний сервіс 
            та міжнародні можливості. Хоча комісії можуть бути вищими за необанки, ви отримуєте 
            стабільність міжнародного банку з 25-річною історією в Україні.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Якщо ви працюєте з іноземними клієнтами, плануєте масштабувати бізнес або потребуєте 
            кредитування — Raiffeisen Bank буде оптимальним рішенням.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">Порівняйте банки для ФОП</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              Перегляньте порівняльну таблицю провідних банків України та оберіть найкращий варіант для вашого бізнесу
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">
                Порівняти банки
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Корисні калькулятори</CardTitle>
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

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Інші статті про банки</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/blog/fop-bank-accounts">
                    Порівняння банків для ФОП
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
