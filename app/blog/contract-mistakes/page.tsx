import Link from "next/link";
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "ТОП-5 помилок у договорі про надання послуг | ФОП Помічник",
  description: "Аналіз найпоширеніших помилок у договорах ФОП та як їх уникнути. Практичні поради юриста для підприємців.",
  keywords: "договір ФОП, помилки в договорі, юридичні поради, договір надання послуг",
};

export default function ContractMistakesArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Блог</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1.5 rounded-full font-medium">
              Юридичні поради
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">5 січня 2026</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">• 7 хв читання</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            ТОП-5 помилок у договорі про надання послуг
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Через ці помилки ви можете втратити гроші або опинитися в суді. Розбираємо реальні кейси та показуємо як правильно.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <Card className="my-6 dark:bg-gray-900 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-200">
                <AlertTriangle className="h-6 w-6" />
                Чому це важливо?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>
                За статистикою, 70% судових спорів між ФОП та замовниками виникають через погано складені договори. 
                Більшість цих спорів можна було б уникнути.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Помилка #1: Нечіткий опис послуг
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="dark:bg-gray-900 border-red-300 dark:border-red-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400 text-lg">
                  <XCircle className="h-5 w-5" />
                  Неправильно
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="italic">
                  "Виконавець надає послуги з розробки сайту відповідно до побажань Замовника"
                </p>
                <p className="text-red-600 dark:text-red-400 mt-2 font-semibold">
                  Проблема: Що таке "побажання"? Скільки правок? Який функціонал?
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 border-green-300 dark:border-green-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg">
                  <CheckCircle2 className="h-5 w-5" />
                  Правильно
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="italic">
                  "Розробка лендингу з наступним функціоналом: форма зв'язку, галерея з 10 фото, адаптив під мобільні. 
                  Технологія: React. Термін: 14 календарних днів. Кількість правок: до 2 ітерацій"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 my-6">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Порада:</strong> Чим детальніше опис, тим менше спорів. Додайте технічне завдання як додаток до договору.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Помилка #2: Відсутність строків та етапів
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Багато ФОП пишуть просто "протягом розумного строку" або "після узгодження". 
            Це відкриває двері для безкінечних затримок та незадоволення клієнта.
          </p>

          <Card className="my-6 dark:bg-gray-900 bg-green-50 dark:bg-green-900/20">
            <CardHeader>
              <CardTitle>Як правильно вказувати строки:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>✅ <strong>Загальний термін:</strong> "30 календарних днів з дати підписання"</p>
              <p>✅ <strong>Етапи:</strong></p>
              <ul className="pl-6 space-y-1">
                <li>• Дизайн-макет: до 10 днів</li>
                <li>• Верстка: до 15 днів</li>
                <li>• Тестування: до 5 днів</li>
              </ul>
              <p>✅ <strong>Строк оплати:</strong> "5 банківських днів після підписання акту"</p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Помилка #3: Забули про передоплату або поетапну оплату
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Реальний кейс:</strong> Дизайнер відпрацював 2 тижні над проектом. Клієнт побачив результат і зник. 
            Оплата передбачалася після завершення всіх робіт. Дизайнер залишився без грошей.
          </p>

          <Card className="my-6 dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Варіанти оплати для захисту ваших інтересів:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">1. Передоплата 50%</p>
                <p className="text-sm">Найбезпечніший варіант. 50% до початку робіт, 50% після завершення.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">2. Поетапна оплата</p>
                <p className="text-sm">Після кожного етапу (дизайн 30%, верстка 40%, тестування 30%).</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">3. Передоплата 100% (для малих проектів)</p>
                <p className="text-sm">Якщо сума до 10 000 грн і термін до 5 днів - можна брати 100% передоплату.</p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 my-6">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Важливо:</strong> Якщо клієнт відмовляється від передоплати - це червоний прапорець. 
              Серйозний бізнес завжди готовий платити передоплату.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Помилка #4: Не прописали відповідальність за затримку оплати
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Без цього пункту клієнт може тягнути з оплатою місяцями, а ви нічого не зможете зробити.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <Card className="dark:bg-gray-900 border-red-300 dark:border-red-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400 text-lg">
                  <XCircle className="h-5 w-5" />
                  Слабко
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="italic">
                  "За несвоєчасну оплату Замовник несе відповідальність"
                </p>
                <p className="text-red-600 dark:text-red-400 mt-2 font-semibold">
                  Яку саме? Коли вона настає?
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 border-green-300 dark:border-green-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400 text-lg">
                  <CheckCircle2 className="h-5 w-5" />
                  Чітко
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                <p className="italic">
                  "За кожен день прострочення оплати Замовник сплачує пеню у розмірі 0,1% від суми заборгованості. 
                  При затримці понад 30 днів Виконавець має право розірвати договір в односторонньому порядку"
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Помилка #5: Не врахували авторські права
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Особливо важливо для дизайнерів, програмістів, копірайтерів. Якщо не прописати передачу прав, 
            технічно ви залишаєтесь власником результату роботи.
          </p>

          <Card className="my-6 dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Що має бути в договорі:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>
                ✅ "Після повної оплати всі майнові права інтелектуальної власності на результат роботи 
                переходять до Замовника"
              </p>
              <p>
                ✅ "Виконавець має право використовувати результат роботи в якості портфоліо, 
                якщо інше не обумовлено окремою угодою"
              </p>
              <p>
                ✅ Вказати, чи може Виконавець використовувати код/дизайн в інших проектах
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Бонусна порада: Завжди підписуйте Акт
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Навіть якщо все пройшло ідеально і клієнт задоволений - підписуйте Акт виконаних робіт. 
            Це документ, який підтверджує факт надання послуг і є підставою для оплати.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg p-4 my-6">
            <p className="text-sm text-green-900 dark:text-green-200">
              <strong>Життєва порада:</strong> Без підписаного Акту у вас немає юридичного підтвердження, 
              що роботу виконано. Це може стати проблемою в суді.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Висновок</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Хороший договір - це ваш захист. Не шкодуйте 15-20 хвилин на те, щоб прописати всі деталі. 
            Це врятує вас від багатьох проблем і нервів.
          </p>

          <Card className="my-8 dark:bg-gray-900 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle>Чек-лист ідеального договору ФОП:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>☐ Чіткий опис послуг з деталями</li>
                <li>☐ Конкретні строки виконання</li>
                <li>☐ Поетапна оплата або передоплата 50%</li>
                <li>☐ Пеня за прострочення оплати (0,1% за день)</li>
                <li>☐ Умови передачі авторських прав</li>
                <li>☐ Кількість правок/ітерацій</li>
                <li>☐ Підстави для розірвання договору</li>
                <li>☐ Реквізити обох сторін з підписами</li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Створіть правильний договір зараз</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Використовуйте наш конструктор для створення юридично грамотного договору за 5 хвилин
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/documents/contract">
                  Створити договір
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/documents/act">
                  Створити Акт робіт
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
