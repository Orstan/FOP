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
