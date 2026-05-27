import Link from "next/link";
import { BookOpen, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог для Підприємців - Податки, ФОП, Юридичні Поради, Інструкції 2026",
  description: "★ Експертні статті для ФОП ★ Податки та звітність 2026 ★ Як відкрити ФОП через Дію ★ Робота з Upwork та Fiverr ★ Юридичні поради ★ Лайфхаки для бізнесу в Україні",
  keywords: "блог для ФОП, податки ФОП 2026, як відкрити ФОП, експорт послуг, фріланс Україна, бізнес поради",
  openGraph: {
    title: "Блог ФОП Помічник - База знань для підприємців",
    description: "Актуальні статті, інструкції та поради для успішного ведення бізнесу в Україні",
    url: "/blog",
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const articles = [
    {
      title: "Як ФОП вести облік доходів та витрат",
      description: "облік ФОП - детальний гайд для підприємців",
      slug: "yak-fop-vesty-oblik-dokhodiv-ta-vytrat",
      date: "2026-05-27",
      readTime: "3 хв",
      category: "Бухгалтерія",
      available: true,
    },
    {
      title: "Військовий Збір для ФОП 2026: Нові ставки 5%, розрахунок та терміни",
      description: "Повний гайд по ВЗ: нова ставка 5% для зарплат, 10% мінзарплати для 1-2 гр., 1% від доходу для 3 гр. Приклади розрахунків та штрафи",
      slug: "military-tax-fop-2026",
      date: "2026-04-30",
      readTime: "10 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "ФОП та Криптовалюта 2026: Оподаткування, ризики та правила",
      description: "Як ФОП працювати з крипто: податок 23% (ПДФО 18% + ВЗ 5%), ризики для єдиного податку, декларування доходів від криптовалюти",
      slug: "fop-crypto-2026",
      date: "2026-04-30",
      readTime: "8 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "📅 Календар Податків ФОП 2026: Всі дедлайни за рік",
      description: "Повний поквартальний розклад сплати ЄП, ЄСВ, ВЗ та подання декларацій. Не пропустіть жодного терміну!",
      slug: "fop-tax-calendar-2026",
      date: "2026-04-30",
      readTime: "7 хв",
      category: "Звітність",
      available: true,
    },
    {
      title: "Гранти для ФОП 2026: єРобота, Дія.Бізнес, держпрограми",
      description: "Як отримати грант до 250 000 грн: програма єРобота, мікрогранти, гранти для ветеранів та агро. Покрокова інструкція подачі заявки",
      slug: "fop-grants-2026",
      date: "2026-04-30",
      readTime: "9 хв",
      category: "Бізнес",
      available: true,
    },
    {
      title: "Чи потрібен касовий апарат для ФОП у 2026 році?",
      description: "Детальний гайд: коли ФОП потрібен РРО, хто звільнений, штрафи за роботу без каси, як зареєструвати касовий апарат онлайн",
      slug: "fop-cash-register-2026",
      date: "2026-02-06",
      readTime: "12 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Лікарняні для ФОП 2026: Як отримати оплату за лікарняним",
      description: "Умови отримання лікарняних виплат, розмір компенсації, як оформити через ФСС. Оплата з 6-го дня хвороби",
      slug: "fop-sick-leave-2026",
      date: "2026-02-06",
      readTime: "11 хв",
      category: "ЄСВ та пенсії",
      available: true,
    },
    {
      title: "Декретна відпустка для ФОП 2026: Допомога по вагітності та пологах",
      description: "Як отримати декретні виплати ФОП: умови, розміри, документи. Допомога по догляду за дитиною до 3 років",
      slug: "fop-maternity-leave-2026",
      date: "2026-02-06",
      readTime: "13 хв",
      category: "ЄСВ та пенсії",
      available: true,
    },
    {
      title: "ФОП на загальній системі оподаткування 2026: Податки та Ставки",
      description: "Повний гайд про загальну систему: ПДФО 18%, військовий збір, ЄСВ. Для кого підходить, як враховувати витрати",
      slug: "fop-general-tax-system-2026",
      date: "2026-02-06",
      readTime: "14 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Monobank для ФОП 2026: Умови, Тарифи, Відгуки",
      description: "Повний огляд Monobank для підприємців: безкоштовне обслуговування, 0% комісії, зручний додаток. Найпопулярніший мобільний банк",
      slug: "monobank-fop-2026",
      date: "2026-03-08",
      readTime: "10 хв",
      category: "Фінанси",
      available: true,
    },
    {
      title: "ПриватБанк для ФОП 2026: Тарифи, Умови, Відгуки",
      description: "Огляд ПриватБанку для підприємців: Приват24 Бізнес, автосплата податків, найбільша мережа відділень. Державний банк",
      slug: "privatbank-fop-2026",
      date: "2026-03-08",
      readTime: "11 хв",
      category: "Фінанси",
      available: true,
    },
    {
      title: "ПУМБ для ФОП 2026: Тарифи, Умови, Відгуки",
      description: "Огляд ПУМБ для підприємців: вигідні тарифи, бізнес-картки, онлайн-банкінг. Спеціальні умови для малого бізнесу",
      slug: "pumb-bank-fop-2026",
      date: "2026-03-08",
      readTime: "10 хв",
      category: "Фінанси",
      available: true,
    },
    {
      title: "Як відкрити ФОП у 2026 році: Покрокова інструкція",
      description: "Повний гайд з відкриття ФОП в Україні. Документи, вартість, групи оподаткування, онлайн реєстрація та відкриття рахунку",
      slug: "yak-vidkryty-fop-2026",
      date: "2026-02-02",
      readTime: "8 хв",
      category: "Інструкції",
      available: true,
    },
    {
      title: "Як вибрати групу ФОП: 1, 2 чи 3 група у 2026 році",
      description: "Докладний гайд по вибору групи ФОП. Порівняння 1, 2 та 3 групи: податки, ліміти, види діяльності",
      slug: "choose-fop-group",
      date: "2026-01-08",
      readTime: "10 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Звітність ФОП у 2026 році: терміни, декларації, штрафи",
      description: "Повний гайд по звітності ФОП: які декларації подавати, коли і куди. Терміни подання та штрафи",
      slug: "fop-reporting-2026",
      date: "2026-01-08",
      readTime: "8 хв",
      category: "Звітність",
      available: true,
    },
    {
      title: "Як закрити ФОП у 2026 році: покрокова інструкція",
      description: "Повний гайд по закриттю ФОП: документи, терміни, борги, штрафи. Як закрити через Дію",
      slug: "close-fop-2026",
      date: "2026-01-08",
      readTime: "9 хв",
      category: "Інструкції",
      available: true,
    },
    {
      title: "ФОП без діяльності: чи потрібно платити податки у 2026?",
      description: "Що робити якщо ФОП не працює: податки, ЄСВ, нульова звітність. Скільки коштує утримання неактивного ФОП",
      slug: "fop-without-activity",
      date: "2026-01-08",
      readTime: "7 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Кращі банки для ФОП у 2026: порівняння та вибір",
      description: "Огляд банків для ФОП: Monobank, ПриватБанк, ПУМБ. Тарифи, комісії, як відкрити рахунок онлайн",
      slug: "fop-bank-accounts",
      date: "2026-01-08",
      readTime: "12 хв",
      category: "Фінанси",
      available: true,
    },
    {
      title: "ФОП і найм на роботу одночасно: чи можна у 2026?",
      description: "Чи можна бути ФОП і працювати за трудовим договором? Податки, ЄСВ, звітність при поєднанні",
      slug: "fop-and-salary",
      date: "2026-01-08",
      readTime: "10 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Пенсія для ФОП у 2026: як формується та як збільшити",
      description: "Все про пенсію ФОП: як рахується стаж, від чого залежить розмір, як збільшити майбутні виплати",
      slug: "fop-pensions",
      date: "2026-01-08",
      readTime: "11 хв",
      category: "ЄСВ та пенсії",
      available: true,
    },
    {
      title: "7 легальних способів оптимізувати податки для ФОП",
      description: "Як легально зменшити податки ФОП: вибір групи, витрати, ЄСВ, договори. Законні способи оптимізації",
      slug: "fop-tax-optimization",
      date: "2026-01-08",
      readTime: "13 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Податки ФОП у 2026 році: повний гайд",
      description: "Детальний розбір всіх груп оподаткування, ставок та термінів сплати податків для ФОП",
      slug: "fop-taxes-2026",
      date: "2026-01-08",
      readTime: "8 хв",
      category: "Податки",
      available: true,
    },
    {
      title: "Як відкрити ФОП через Дію за 10 хвилин",
      description: "Покрокова інструкція з відкриття ФОП онлайн через додаток Дія",
      slug: "open-fop-diya",
      date: "2026-01-07",
      readTime: "5 хв",
      category: "Інструкції",
      available: true,
    },
    {
      title: "Як легально працювати з Upwork та Fiverr у 2026 році",
      description: "Правила оподаткування експорту послуг для українських фрілансерів",
      slug: "upwork-fiverr-2026",
      date: "2026-01-06",
      readTime: "10 хв",
      category: "Експорт послуг",
      available: true,
    },
    {
      title: "ТОП-5 помилок у договорі про надання послуг",
      description: "Аналіз найпоширеніших помилок та як їх уникнути",
      slug: "contract-mistakes",
      date: "2026-01-05",
      readTime: "7 хв",
      category: "Юридичні поради",
      available: true,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            База знань для підприємців
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Експертні статті, інструкції та лайфхаки для успішного ведення бізнесу в Україні
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className={`dark:bg-gray-900 border-2 transition-all ${article.available ? 'hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg' : 'opacity-60'}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                        {article.category}
                      </span>
                      {!article.available && (
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                          Незабаром
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {article.available ? (
                        <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {article.title}
                        </Link>
                      ) : (
                        article.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-base">{article.description}</CardDescription>
                  </div>
                  <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 flex-shrink-0 opacity-20" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} читання</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 dark:bg-gray-900 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Хочете бути в курсі?</CardTitle>
            <CardDescription>
              Підписуйтеся на наші оновлення та першими дізнавайтеся про зміни в законодавстві
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Слідкуйте за нами в соціальних мережах або додайте сайт до закладок, щоб не пропустити важливі оновлення.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
