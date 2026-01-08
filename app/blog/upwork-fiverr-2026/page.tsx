import Link from "next/link";
import { ArrowLeft, Globe, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Як легально працювати з Upwork та Fiverr у 2026 році | ФОП Помічник",
  description: "Повний гайд з оподаткування експорту послуг для українських фрілансерів. Upwork, Fiverr, Freelancer - правила роботи та сплати податків.",
  keywords: "Upwork податки, Fiverr ФОП, експорт послуг, фріланс Україна, оподаткування фрілансу",
};

export default function UpworkFiverrArticle() {
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
            <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full font-medium">
              Експорт послуг
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">6 січня 2026</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">• 10 хв читання</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Як легально працювати з Upwork та Fiverr у 2026 році
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Повний гайд для українських фрілансерів: від реєстрації ФОП до виведення грошей з міжнародних платформ. Податки, валютний рахунок, звітність.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <Card className="my-6 dark:bg-gray-900 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                Головне про роботу з Upwork/Fiverr
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Працювати можна легально як ФОП 3 групи</li>
                <li>✅ Податок: тільки 5% від доходу + ЄСВ (1 760 грн/міс)</li>
                <li>✅ ПДВ не сплачується (експорт послуг)</li>
                <li>✅ Гроші виводяться на валютний рахунок у банку</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 1: Відкрийте ФОП</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Для роботи з іноземними замовниками потрібен статус підприємця (ФОП). 
            Найкраща група - <strong>3 група спрощеної системи</strong>.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p><strong>Чому саме 3 група?</strong></p>
            <ul className="space-y-2 pl-6">
              <li>• Можна працювати з будь-якими клієнтами (фізособи, компанії, іноземці)</li>
              <li>• Ліміт доходу: до 7 000 000 грн/рік (понад $170 000)</li>
              <li>• Податок: 5% від доходу</li>
              <li>• Не потрібна каса (РРО)</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 my-6">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Порада:</strong> Відкрити ФОП можна за 10 хвилин через додаток Дія. Безкоштовно і без походів в податкову.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 2: Відкрийте валютний рахунок</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Для отримання оплати з Upwork або Fiverr вам потрібен валютний рахунок (USD або EUR).
          </p>

          <Card className="my-6 dark:bg-gray-900">
            <CardHeader>
              <CardTitle>Популярні банки для фрілансерів</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Monobank</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Безкоштовний валютний рахунок, зручний додаток, швидке відкриття онлайн.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">Приват24</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Старий і перевірений, великий досвід роботи з фрілансерами.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">ПУМБ</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Вигідний курс конвертації, швидкі міжнародні перекази.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 3: Налаштуйте виведення коштів</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">Для Upwork:</h3>
          
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>1. В налаштуваннях Upwork оберіть <strong>"Direct to Local Bank"</strong></p>
            <p>2. Вкажіть реквізити вашого банку (SWIFT, IBAN)</p>
            <p>3. Мінімальна сума виведення: $100</p>
            <p>4. Комісія Upwork: $0.99 за переказ</p>
            <p>5. Гроші приходять протягом 3-5 банківських днів</p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">Для Fiverr:</h3>
          
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>1. Використовуйте Payoneer (найзручніше) або банківський переказ</p>
            <p>2. Payoneer дає віртуальний рахунок в США (безкоштовно)</p>
            <p>3. З Payoneer можна вивести на український банк (2-3 дні)</p>
            <p>4. Комісія: 1-2% за конвертацію</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 4: Отримайте оплату та сплатіть податки</h2>
          
          <Card className="my-6 dark:bg-gray-900 bg-green-50 dark:bg-green-900/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                Приклад розрахунку податків
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Ви заробили на Upwork <strong>$3 000</strong> за місяць</p>
              <p>Курс НБУ: 1 USD = 41 грн</p>
              <p>Дохід у гривнях: <strong>123 000 грн</strong></p>
              <div className="border-t dark:border-gray-700 pt-3 mt-3">
                <p>Єдиний податок (5%): <strong>6 150 грн</strong></p>
                <p>ЄСВ (фіксовано): <strong>1 760 грн</strong></p>
                <p className="font-bold text-lg mt-2">Разом податків: 7 910 грн</p>
                <p className="text-green-600 dark:text-green-400 font-bold text-xl mt-2">
                  Чистий дохід: 115 090 грн (~$2 807)
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 5: Ведіть облік та звітність</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Як ФОП 3 групи ви зобов'язані:
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-6">
            <li>• Вести <strong>Книгу обліку доходів</strong> (Excel або спецсервіси)</li>
            <li>• Подавати <strong>квартальну декларацію</strong> до 10 числа після кварталу</li>
            <li>• Сплачувати податки <strong>до 20 числа</strong> кожного місяця</li>
            <li>• Зберігати підтвердження доходів (скріншоти з Upwork, банківські виписки)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Важливі нюанси 2026 року</h2>
          
          <Card className="my-6 dark:bg-gray-900 border-yellow-300 dark:border-yellow-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                Юридичні особливості
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>1. ПДВ не сплачується</strong></p>
              <p className="pl-4">
                Експорт послуг звільнений від ПДВ згідно ст. 208 Податкового кодексу України. 
                Не потрібно бути платником ПДВ.
              </p>
              
              <p><strong>2. Курс конвертації</strong></p>
              <p className="pl-4">
                Використовуйте офіційний курс НБУ на дату зарахування коштів на рахунок.
              </p>
              
              <p><strong>3. Договори з клієнтами</strong></p>
              <p className="pl-4">
                Upwork та Fiverr самі виступають посередниками. Окремі договори з кінцевими клієнтами не потрібні.
              </p>
              
              <p><strong>4. Валютний контроль</strong></p>
              <p className="pl-4">
                При надходженні валюти вказуйте призначення платежу: "Оплата за послуги згідно Invoice №___".
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Найпоширеніші помилки</h2>
          
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-red-900 dark:text-red-200">
              <li><strong>❌ Працювати без ФОП</strong> - це незаконно і може призвести до штрафів</li>
              <li><strong>❌ Не платити ЄСВ</strong> - ЄСВ обов'язковий, навіть якщо ви не заробляєте</li>
              <li><strong>❌ Не вести Книгу обліку</strong> - це обов'язковий документ для перевірки</li>
              <li><strong>❌ Використовувати "сірі" схеми виведення</strong> - ризик блокування рахунків</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Висновок</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Працювати з Upwork та Fiverr легально в Україні - просто. Головне:
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 pl-6">
            <li>✅ Відкрийте ФОП 3 групи</li>
            <li>✅ Заведіть валютний рахунок</li>
            <li>✅ Платіть 5% + ЄСВ вчасно</li>
            <li>✅ Ведіть облік доходів</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Так ви будете спати спокійно, матимете доступ до лікарняних та пенсії, 
            і зможете отримувати кредити та візи без проблем.
          </p>

          <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Розрахуйте ваші податки</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Використовуйте наш калькулятор, щоб дізнатись скільки саме ви будете платити
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/calculators/fop-tax">
                  Калькулятор податків
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/documents/invoice">
                  Створити Invoice
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
