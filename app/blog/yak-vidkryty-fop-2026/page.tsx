import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, AlertCircle, FileText, CreditCard, Users, TrendingUp } from "lucide-react";
import { BankComparison } from "@/components/bank-comparison";

export const metadata: Metadata = {
  title: "Як відкрити ФОП у 2026 році: Покрокова інструкція | ФОП Помічник",
  description: "Повний гайд з відкриття ФОП в Україні у 2026 році. Документи, вартість, групи оподаткування, онлайн реєстрація та відкриття рахунку. Інструкція для початківців.",
  keywords: [
    "як відкрити ФОП 2026",
    "реєстрація ФОП онлайн",
    "документи для відкриття ФОП",
    "скільки коштує відкрити ФОП",
    "групи оподаткування ФОП",
    "рахунок для ФОП",
    "ФОП через Дію"
  ],
  openGraph: {
    title: "Як відкрити ФОП у 2026 році: Покрокова інструкція",
    description: "Повний гайд з відкриття ФОП в Україні. Документи, вартість, групи оподаткування та онлайн реєстрація.",
    type: "article",
  },
};

export default function HowToOpenFOPPage() {
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
            Як відкрити ФОП у 2026 році: Покрокова інструкція
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8 not-prose">
            <time>Оновлено: 2 лютого 2026</time>
            <span>•</span>
            <span>Читання: 8 хв</span>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 mb-8 not-prose rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Швидкий старт</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  У 2026 році відкриття ФОП стало ще простішим завдяки Дія.Бізнес. Весь процес займає 15-30 хвилин онлайн, 
                  а вартість — від 0 грн (безкоштовно через Дію) до 350 грн через нотаріуса.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Крок 1: Визначтеся з групою оподаткування
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Перед реєстрацією важливо обрати групу оподаткування. У 2026 році діють такі групи єдиного податку:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8 not-prose">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Група 1
                </CardTitle>
                <CardDescription>Роздрібна торгівля на ринках</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ліміт доходу:</strong> до 1 млн грн/рік</p>
                <p><strong>Ставка:</strong> до 10% мінімальної зарплати</p>
                <p><strong>ПДВ:</strong> Не платник</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Група 2
                </CardTitle>
                <CardDescription>Послуги населенню</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ліміт доходу:</strong> до 5 млн грн/рік</p>
                <p><strong>Ставка:</strong> до 20% мінімальної зарплати</p>
                <p><strong>ПДВ:</strong> Не платник</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 dark:border-blue-400 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Група 3 (Популярна)
                </CardTitle>
                <CardDescription>Для більшості ФОП</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ліміт доходу:</strong> до 7 млн грн/рік</p>
                <p><strong>Ставка:</strong> 5% (без ПДВ) або 3% (з ПДВ)</p>
                <p><strong>ПДВ:</strong> За бажанням</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-orange-600" />
                  Загальна система
                </CardTitle>
                <CardDescription>Без обмежень</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Ліміт доходу:</strong> Без обмежень</p>
                <p><strong>Ставка:</strong> 18% податок на прибуток</p>
                <p><strong>ПДВ:</strong> Обов'язково при обороті &gt;1 млн грн</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Рекомендація для новачків</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Група 3 (5%)</strong> — найпопулярніший вибір для фрілансерів, IT-спеціалістів, консультантів. 
                  Проста звітність (раз на рік), невеликий податок, можливість працювати з іноземними клієнтами.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Крок 2: Підготуйте документи
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Для реєстрації ФОП у 2026 році потрібен мінімальний пакет документів:
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Паспорт громадянина України</strong> або ID-картка
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>РНОКПП</strong> (ідентифікаційний код)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Кваліфікований електронний підпис (КЕП)</strong> — для онлайн реєстрації через Дію
              </span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Крок 3: Оберіть спосіб реєстрації
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
            <Card className="border-2 border-blue-500 dark:border-blue-400 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl">Через Дія.Бізнес (Рекомендуємо)</CardTitle>
                <CardDescription className="text-green-600 dark:text-green-400 font-semibold">
                  БЕЗКОШТОВНО
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Онлайн за 15-30 хвилин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Потрібен тільки КЕП</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Автоматична подача до ДПС та ПФУ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Сертифікат на email за 1 день</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <a href="https://diia.gov.ua" target="_blank" rel="noopener noreferrer">
                    Відкрити через Дію
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-xl">Через нотаріуса</CardTitle>
                <CardDescription className="text-orange-600 dark:text-orange-400 font-semibold">
                  від 350 грн
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Особистий візит до нотаріуса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>КЕП не потрібен</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Нотаріус оформлює все за вас</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Готово за 1-3 робочі дні</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
            Крок 4: Відкрийте банківський рахунок
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Після реєстрації ФОП вам потрібен банківський рахунок для роботи. У 2026 році більшість банків пропонують 
            відкриття рахунку онлайн за 5-10 хвилин через Дія.Підпис.
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8 not-prose">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Важливо знати</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Хоча рахунок не є обов'язковим для всіх ФОП, він необхідний якщо:
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Ви працюєте з юридичними особами (рахунки &gt;10 000 грн)</li>
                  <li>• Отримуєте оплату з-за кордону</li>
                  <li>• Хочете використовувати касовий апарат</li>
                  <li>• Потрібна автоматична сплата податків</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16">
          <BankComparison />
        </div>

        <div className="mt-16 not-prose">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Крок 5: Почніть працювати
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Після відкриття ФОП та рахунку ви можете одразу починати працювати. Не забудьте:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Документи для клієнтів
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Створюйте професійні договори та рахунки безкоштовно:
                </p>
                <Button className="w-full" asChild>
                  <Link href="/documents">
                    Створити документ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Калькулятори податків
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  Розраховуйте податки та ЄСВ онлайн:
                </p>
                <Button className="w-full" asChild>
                  <Link href="/calculators">
                    Розрахувати податки
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Потрібна допомога з відкриттям ФОП?</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              ФОП Помічник — ваш безкоштовний путівник у світі підприємництва. Документи, калькулятори, 
              експертні поради — все в одному місці.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/">
                На головну
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
