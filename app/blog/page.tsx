import Link from "next/link";
import { BookOpen, ArrowLeft, Calendar, Clock } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">ФОП Помічник</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

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
