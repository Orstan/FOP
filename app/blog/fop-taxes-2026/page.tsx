import Link from "next/link";
import { Calculator, BookOpen, TrendingUp, AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArticleStructuredData, FAQStructuredData } from "@/components/structured-data";

export const metadata = {
  title: "Податки ФОП у 2026 році: повний гайд | ФОП Помічник",
  description: "Детальний розбір всіх груп оподаткування ФОП, ставок єдиного податку та ЄСВ, термінів сплати. Актуальна інформація на 2026 рік.",
  keywords: "податки ФОП 2026, єдиний податок, ЄСВ, групи ФОП, оподаткування підприємців",
};

export default function FOPTaxesArticle() {
  const faqQuestions = [
    {
      question: "Яка найкраща група ФОП для IT-фахівця?",
      answer: "Група 3 - найпопулярніша для IT-фахівців, фрілансерів та консультантів. Податок 5% від доходу + ЄСВ 1 760 грн/міс. Ліміт доходу до 7 000 000 грн/рік."
    },
    {
      question: "Скільки коштує ЄСВ для ФОП у 2026 році?",
      answer: "Мінімальний ЄСВ становить 1 760 грн на місяць (22% від мінімальної зарплати 8 000 грн). Це обов'язковий платіж для всіх груп ФОП."
    },
    {
      question: "До якого числа потрібно сплачувати податки ФОП?",
      answer: "Єдиний податок та ЄСВ потрібно сплатити до 20 числа наступного місяця. Квартальну декларацію подають до 10 числа місяця після кварталу."
    },
    {
      question: "Чи потрібно платити ПДВ ФОП 3 групи?",
      answer: "ПДВ не обов'язковий для ФОП 3 групи, якщо ви не є добровільним платником ПДВ. При експорті послуг ПДВ не сплачується взагалі."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <ArticleStructuredData 
        title="Податки ФОП у 2026 році: повний гайд"
        description="Детальний розбір всіх груп оподаткування ФОП, ставок єдиного податку та ЄСВ, термінів сплати"
        datePublished="2026-01-08"
      />
      <FAQStructuredData questions={faqQuestions} />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-medium">
              Податки
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">8 січня 2026</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">• 8 хв читання</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Податки ФОП у 2026 році: повний гайд
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Детальний розбір всіх груп оподаткування для фізичних осіб-підприємців в Україні. Ставки, терміни, пільги та важливі зміни у 2026 році.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">Три групи ФОП: основні відмінності</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            В Україні існує спрощена система оподаткування для підприємців, яка ділиться на три групи. 
            Кожна група має свої ліміти доходу, ставки податків та обмеження за видами діяльності.
          </p>

          <Card className="my-6 dark:bg-gray-900 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Група 1 ФОП
              </CardTitle>
              <CardDescription>Роздрібна торгівля на ринках</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ліміт доходу</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1 167 300 грн/рік</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Єдиний податок</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">0 грн</p>
                </div>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">ЄСВ (обов'язково):</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">1 760 грн/міс (22% від мінімалки 8 000 грн)</p>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Обмеження:</strong> Тільки роздрібна торгівля товарами на ринках. Заборонено надавати послуги.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="my-6 dark:bg-gray-900 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                Група 2 ФОП
              </CardTitle>
              <CardDescription>Надання послуг юридичним особам</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ліміт доходу</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5 836 800 грн/рік</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Єдиний податок</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">1 600 грн/міс</p>
                </div>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">ЄСВ (обов'язково):</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">1 760 грн/міс</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-1">Разом щомісяця:</p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">3 360 грн</p>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Обмеження:</strong> Можна надавати послуги тільки юридичним особам (ТОВ, ПП, інші ФОП). 
                  Заборонено працювати з фізичними особами напряму.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="my-6 dark:bg-gray-900 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Група 3 ФОП (найпопулярніша)
              </CardTitle>
              <CardDescription>Надання послуг будь-яким клієнтам</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ліміт доходу</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">7 000 000 грн/рік</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Єдиний податок</p>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">5% від доходу</p>
                </div>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">ЄСВ (обов'язково):</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">1 760 грн/міс (мінімум)</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-purple-900 dark:text-purple-200 mb-2">Приклад (дохід 50 000 грн/міс):</p>
                <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300">
                  <li>• Єдиний податок: 2 500 грн (5%)</li>
                  <li>• ЄСВ: 1 760 грн</li>
                  <li className="font-bold pt-1">• Разом: 4 260 грн</li>
                  <li className="text-green-700 dark:text-green-300 font-bold">• Чистий дохід: 45 740 грн</li>
                </ul>
              </div>
              <div className="pt-3 border-t dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Найкраще для:</strong> IT-фахівців, фрілансерів, консультантів, дизайнерів. 
                  Немає обмежень на клієнтів - можна працювати з усіма.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Терміни сплати податків у 2026 році</h2>
          
          <Card className="my-6 dark:bg-gray-900">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Єдиний податок</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">до 20 числа наступного місяця</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">ЄСВ (Єдиний соціальний внесок)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">до 20 числа наступного місяця</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Квартальна декларація</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">до 10 числа місяця, наступного за кварталом</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="my-6 dark:bg-gray-900 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-900 dark:text-yellow-200">
                <AlertCircle className="h-5 w-5" />
                Важливо пам'ятати!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
              <p>• Несвоєчасна сплата податків тягне за собою нарахування пені (120% облікової ставки НБУ)</p>
              <p>• ЄСВ є обов'язковим для всіх груп ФОП</p>
              <p>• Ставки актуальні на 2026 рік і можуть змінюватися щорічно</p>
              <p>• При перевищенні ліміту доходу необхідно перейти на загальну систему оподаткування</p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Пільги та особливості у 2026 році</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Пільги для прифронтових територій:</strong> ФОП, що працюють в прифронтових регіонах, 
              можуть отримати тимчасове звільнення від ЄСВ або зниження ставки єдиного податку. 
              Детальніше у вашій податковій інспекції.
            </p>
            
            <p>
              <strong>Експорт послуг:</strong> ФОП 3 групи, що надають послуги іноземним замовникам, 
              звільнені від ПДВ (якщо не є платниками ПДВ). Ставка 5% залишається незмінною.
            </p>

            <p>
              <strong>IT-пільги:</strong> ФОП в IT-сфері можуть розглянути реєстрацію в Дія.City для отримання 
              спеціальних податкових умов (5% при доході понад певну суму).
            </p>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Розрахуйте свої податки зараз</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Використовуйте наш безкоштовний калькулятор для точного розрахунку податків за вашою групою ФОП
            </p>
            <Button asChild size="lg">
              <Link href="/calculators/fop-tax">
                <Calculator className="mr-2 h-5 w-5" />
                Відкрити калькулятор
              </Link>
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Висновок</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Вибір групи ФОП залежить від вашого виду діяльності та очікуваного доходу. 
            Для більшості фрілансерів та IT-фахівців оптимальною є 3 група через відсутність обмежень на клієнтів 
            та простоту розрахунків (5% від доходу).
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Пам'ятайте про терміни сплати та веденої правильного обліку доходів. 
            У разі перевищення ліміту доходу вчасно зверніться до податкової для переходу на іншу систему оподаткування.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild variant="outline">
              <Link href="/documents/contract">
                <BookOpen className="mr-2 h-4 w-4" />
                Створити договір послуг
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Всі статті блогу
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
