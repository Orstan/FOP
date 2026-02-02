import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Zap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Unex Bank для ФОП 2026: Кредитування та Послуги для Бізнесу",
  description: "Повний огляд Unex Bank для ФОП: бізнес-кредити до 5 млн грн, овердрафт, факторинг. Умови кредитування, тарифи, як отримати кредит для ФОП швидко.",
  keywords: [
    "Unex Bank для ФОП",
    "кредит для ФОП Unex",
    "овердрафт ФОП",
    "бізнес-кредитування",
    "Unex Bank тарифи ФОП",
    "факторинг для ФОП 2026"
  ],
  openGraph: {
    title: "Unex Bank для ФОП: Кредитування для Бізнесу 2026",
    description: "Швидке схвалення кредитів, овердрафт, факторинг. Спеціалізований банк для розвитку бізнесу",
    type: "article",
  },
};

export default function UnexBankFOPPage() {
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
            <span className="text-4xl">🥉</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 m-0">
              Unex Bank для ФОП: Кредитування для Бізнесу
            </h1>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 2 лютого 2026</time>
            <span>•</span>
            <span>Читання: 10 хв</span>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <DollarSign className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Спеціалізація на бізнес-кредитуванні</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Unex Bank — експерт у фінансуванні малого та середнього бізнесу. Кредити до 5 млн грн, 
                  овердрафт, факторинг та лізинг. Схвалення за 1-2 робочі дні.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Чому Unex Bank для розвитку бізнесу?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Швидке схвалення
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Розгляд заявки за 1-2 дні</p>
                <p>✅ Мінімум документів</p>
                <p>✅ Онлайн-подача заявки</p>
                <p>✅ Гнучкі умови кредитування</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Великі суми
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Кредити до 5 млн грн</p>
                <p>✅ Овердрафт до 1 млн грн</p>
                <p>✅ Факторинг без обмежень</p>
                <p>✅ Лізинг обладнання</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Комплексні рішення
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Поповнення обігових коштів</p>
                <p>✅ Купівля обладнання</p>
                <p>✅ Розширення бізнесу</p>
                <p>✅ Рефінансування боргів</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Гнучкі умови
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>✅ Індивідуальні ставки</p>
                <p>✅ Пільговий період до 6 міс</p>
                <p>✅ Без прихованих комісій</p>
                <p>✅ Дострокове погашення</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Кредитні продукти для ФОП
          </h2>

          <div className="space-y-6 mb-8 not-prose">
            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl">💰 Бізнес-кредит</CardTitle>
                <CardDescription>Для поповнення обігових коштів та розвитку</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Сума:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Від 50 000 до 5 000 000 грн</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Термін:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">До 36 місяців</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Ставка:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Від 18% річних</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Забезпечення:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Залежить від суми</p>
                  </div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/30 p-4 rounded-lg">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>Призначення:</strong> купівля товару, сировини, обладнання, розширення асортименту, 
                    виплата зарплат, оренда приміщень
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 dark:border-blue-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl">🔄 Овердрафт</CardTitle>
                <CardDescription>Кредитна лінія для оперативних потреб</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Ліміт:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">До 1 000 000 грн</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Термін:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">12 місяців (пролонгація)</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Ставка:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Від 20% річних</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Оплата:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Тільки за використані кошти</p>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>Переваги:</strong> гнучке використання, оплата лише за користування, 
                    не потрібно щоразу оформлювати новий кредит
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-500 dark:border-green-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl">📊 Факторинг</CardTitle>
                <CardDescription>Фінансування під дебіторську заборгованість</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Фінансування:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">До 90% від суми накладних</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Відстрочка:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">До 120 днів</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Комісія:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Від 1.5% на місяць</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Мінімум:</p>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Від 100 000 грн оборот</p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    <strong>Для кого:</strong> постачальники з відстрочкою платежу, оптовики, 
                    виробники з тривалим циклом виробництва
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Тарифи на розрахунково-касове обслуговування
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
                  <td className="border border-gray-300 dark:border-gray-700 p-3">99 грн/міс (Базовий), 299 грн/міс (Бізнес)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Платіжні доручення</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Від 5 грн за операцію</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Переказ на картку</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">0.7% (мін 7 грн)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Зняття готівки</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">1.5% (мін 15 грн)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="border border-gray-300 dark:border-gray-700 p-3">Корпоративна картка</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-3">50 грн/міс обслуговування</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Як отримати кредит у Unex Bank?
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Онлайн-заявка</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Заповніть заявку на сайті Unex Bank або зателефонуйте до колл-центру. 
                  Вкажіть бажану суму, термін та призначення кредиту.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Підготовка документів</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Для розгляду заявки потрібні:
                </p>
                <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                  <li>Паспорт та ІПН</li>
                  <li>Витяг з ЄДР про реєстрацію ФОП</li>
                  <li>Виписка з банку за останні 3-6 місяців</li>
                  <li>Податкові декларації (за запитом)</li>
                  <li>Документи на заставу (якщо потрібно)</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg not-prose">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Розгляд та схвалення</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Кредитний комітет розглядає заявку протягом 1-2 робочих днів. 
                  Після схвалення підписується кредитний договір, і кошти надходять на рахунок.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">💡 Поради для схвалення кредиту</h3>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✅ Підтримуйте стабільні обороти на рахунку</li>
                  <li>✅ Вчасно подавайте податкову звітність</li>
                  <li>✅ Майте позитивну кредитну історію</li>
                  <li>✅ Будьте готові надати бізнес-план</li>
                  <li>✅ Розгляньте можливість застави для кращих умов</li>
                </ul>
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
                <p>• Спеціалізація на бізнес-кредитуванні</p>
                <p>• Швидке схвалення за 1-2 дні</p>
                <p>• Кредити до 5 млн грн</p>
                <p>• Гнучкі умови та індивідуальний підхід</p>
                <p>• Овердрафт та факторинг</p>
                <p>• Можливість пільгового періоду</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 dark:border-orange-600 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-orange-700 dark:text-orange-400">⚠️ Недоліки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Вищі ставки порівняно з необанками</p>
                <p>• Комісія за обслуговування рахунку</p>
                <p>• Потрібні документи для кредиту</p>
                <p>• Менша мережа відділень</p>
                <p>• Для великих сум може знадобитися застава</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Для кого підходить Unex Bank?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8 not-prose">
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>ФОП, які потребують фінансування:</strong> Кредити для розвитку, купівлі обладнання, поповнення обігових коштів</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Постачальники з відстрочкою:</strong> Факторинг для оптимізації cash flow</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Бізнес з сезонністю:</strong> Овердрафт для покриття короткострокових потреб</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <span><strong>Торгівля та виробництво:</strong> Фінансування товару, сировини, обладнання</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Висновок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Unex Bank — це спеціалізований банк для бізнесу, який фокусується на кредитуванні та 
            фінансових послугах для ФОП та малих підприємств. Якщо вам потрібні кошти для розвитку, 
            Unex Bank може стати вашим надійним партнером.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Хоча тарифи на РКО можуть бути вищими за необанки, спеціалізація на кредитуванні, 
            швидке схвалення та гнучкі умови роблять Unex Bank привабливим вибором для тих, 
            хто планує розширювати бізнес.
          </p>

          <div className="bg-gradient-to-r from-orange-600 to-red-700 dark:from-orange-700 dark:to-red-800 rounded-xl p-8 text-white text-center not-prose mb-8">
            <h3 className="text-2xl font-bold mb-4">🥉 Отримайте кредит у Unex Bank</h3>
            <p className="text-orange-100 dark:text-orange-200 mb-6 max-w-2xl mx-auto">
              Бізнес-кредити до 5 млн грн • Схвалення за 1-2 дні • Овердрафт та факторинг
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">
                Порівняти з іншими банками
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Рейтинг банків</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/">
                    ТОП-3 банки для ФОП
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle>Інші банки</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/blog/pumb-bank-fop-2026">
                    ПУМБ: 0% комісії
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
