import Link from "next/link";
import { ArrowLeft, Smartphone, FileCheck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArticleStructuredData, HowToStructuredData } from "@/components/structured-data";

export const metadata = {
  title: "Як відкрити ФОП через Дію за 10 хвилин | ФОП Помічник",
  description: "Покрокова інструкція з відкриття ФОП онлайн через додаток Дія. Швидко, безкоштовно і без черг в податковій.",
  keywords: "відкрити ФОП, Дія, електронні послуги, реєстрація підприємця, онлайн реєстрація ФОП",
};

export default function OpenFOPDiyaArticle() {
  const howToSteps = [
    { name: "Відкрийте додаток Дія", text: "Переконайтеся, що ваша особа підтверджена через BankID або ID-картку" },
    { name: "Знайдіть послугу 'Відкрити ФОП'", text: "У розділі Послуги або через пошук введіть 'ФОП'" },
    { name: "Заповніть дані", text: "Оберіть групу оподаткування (рекомендується 3 група), вкажіть КВЕД та підтвердіть адресу" },
    { name: "Підпишіть КЕП", text: "Підпишіть заяву кваліфікованим електронним підписом через Face ID або PIN-код" },
    { name: "Отримайте виписку", text: "Протягом 1-3 хвилин отримаєте виписку з ЄДР у розділі Документи" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <ArticleStructuredData 
        title="Як відкрити ФОП через Дію за 10 хвилин"
        description="Покрокова інструкція з відкриття ФОП онлайн через додаток Дія"
        datePublished="2026-01-07"
      />
      <HowToStructuredData 
        name="Як відкрити ФОП через Дію"
        description="Інструкція з реєстрації фізичної особи-підприємця онлайн за 10 хвилин"
        steps={howToSteps}
      />
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
            <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-medium">
              Інструкції
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">7 січня 2026</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">• 5 хв читання</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Як відкрити ФОП через Дію за 10 хвилин
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            У 2026 році відкрити ФОП можна за 10 хвилин без походів в податкову. Все онлайн через додаток Дія. Розповідаємо покроково.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <Card className="my-6 dark:bg-gray-900 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Що потрібно для реєстрації
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Смартфон з додатком Дія</li>
                <li>✅ Підтверджена особа в Дії (ID-картка або BankID)</li>
                <li>✅ 10 хвилин вільного часу</li>
                <li>✅ Знання, яку групу ФОП обрати</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 1: Відкрийте Дію</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Відкрийте додаток Дія на смартфоні. Переконайтеся, що ви авторизовані і ваша особа підтверджена.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-4 my-6">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Важливо:</strong> Якщо у вас ще немає підтвердженої особи в Дії, спочатку пройдіть ідентифікацію через BankID вашого банку або в центрі надання адміністративних послуг з ID-карткою.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 2: Знайдіть послугу</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>У розділі <strong>"Послуги"</strong> знайдіть <strong>"Відкрити ФОП"</strong>.</p>
            <p>Або скористайтеся пошуком: введіть "ФОП" і оберіть потрібну послугу.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 3: Заповніть дані</h2>
          
          <Card className="my-6 dark:bg-gray-900">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Оберіть групу оподаткування</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Найпопулярніша - 3 група (5% від доходу). Для IT, фрілансу, консалтингу.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Вкажіть види діяльності (КВЕД)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Можна обрати кілька. Найпопулярніші для IT: 62.01 (розробка ПЗ), 63.11 (обробка даних).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Підтвердіть адресу реєстрації</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Дія автоматично підтягне вашу адресу з реєстру. Перевірте і підтвердіть.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 4: Підпишіть КЕП</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Дія запропонує підписати заяву кваліфікованим електронним підписом (КЕП). 
            Це безкоштовно і робиться автоматично через Дію.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Просто натисніть <strong>"Підписати"</strong> і підтвердіть через Face ID / Touch ID / PIN-код.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Крок 5: Отримайте виписку</h2>
          
          <p className="text-gray-700 dark:text-gray-300">
            Протягом 1-3 хвилин ви отримаєте повідомлення про успішну реєстрацію.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Виписка з ЄДР (Єдиного державного реєстру) з'явиться у розділі <strong>"Документи"</strong> в Дії.
          </p>

          <Card className="my-6 dark:bg-gray-900 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-200">
                <FileCheck className="h-6 w-6" />
                Вітаємо! Ви - офіційний підприємець
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p>Тепер у вас є:</p>
              <ul className="space-y-1 mt-2">
                <li>• ЄДРПОУ (код підприємця)</li>
                <li>• Виписка з ЄДР</li>
                <li>• Можливість легально працювати та отримувати доходи</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">Що робити далі?</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p><strong>1. Відкрийте рахунок в банку</strong></p>
            <p className="pl-4">
              Це не обов'язково, але зручно для роботи. Monobank, Приват24 відкриють за 5 хвилин онлайн.
            </p>

            <p><strong>2. Почніть вести облік доходів</strong></p>
            <p className="pl-4">
              Заведіть Excel-табличку або використовуйте спеціальні сервіси (Taxer, Finkee).
            </p>

            <p><strong>3. Запам'ятайте дати сплати податків</strong></p>
            <p className="pl-4">
              Єдиний податок та ЄСВ - до 20 числа наступного місяця.<br />
              Квартальна декларація - до 10 числа наступного місяця після кварталу.
            </p>
          </div>

          <Card className="my-8 dark:bg-gray-900 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-900 dark:text-yellow-200">
                <AlertCircle className="h-6 w-6" />
                Важливі нюанси
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
              <p>• Реєстрація ФОП через Дію - <strong>безкоштовна</strong></p>
              <p>• Ви автоматично стаєте платником ЄСВ (мінімум 1 760 грн/міс)</p>
              <p>• Перший платіж - через місяць після реєстрації</p>
              <p>• Можна закрити ФОП також через Дію за 10 хвилин</p>
            </CardContent>
          </Card>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Розрахуйте ваші податки</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Тепер, коли ви ФОП, важливо розуміти скільки платити податків щомісяця
            </p>
            <Button asChild size="lg">
              <Link href="/calculators/fop-tax">
                Калькулятор податків ФОП
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
