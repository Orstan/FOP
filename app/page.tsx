import Link from "next/link";
import { FileText, Calculator, BookOpen, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { OrganizationStructuredData, WebApplicationStructuredData } from "@/components/structured-data";
import { DonationWidget } from "@/components/donation-widget";
import { BankComparison } from "@/components/bank-comparison";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <OrganizationStructuredData />
      <WebApplicationStructuredData />

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              Все для ФОП:<br />
              <span className="text-blue-600 dark:text-blue-400">від калькулятора до договору</span><br />
              за 2 хвилини
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Безкоштовний конструктор документів, розумні калькулятори податків та експертні статті для українських підприємців
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/documents">
                  <Download className="mr-2 h-5 w-5" />
                  Створити документ
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link href="/calculators">
                  <Calculator className="mr-2 h-5 w-5" />
                  Розрахувати податки
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">Три інструменти для вашого бізнесу</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Конструктор документів</CardTitle>
                  <CardDescription>Заповніть форму — отримайте готовий PDF безкоштовно</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <li>• Договір надання послуг</li>
                    <li>• Акт виконаних робіт</li>
                    <li>• Рахунок-фактура (Invoice)</li>
                    <li>• Договір оренди</li>
                    <li>• Трудовий договір</li>
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/documents">
                      Обрати документ <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-green-600 dark:hover:border-green-400 transition-all hover:shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Розумні калькулятори</CardTitle>
                  <CardDescription>Точні розрахунки податків та платежів для ФОП</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <li>• Єдиний податок за групами</li>
                    <li>• ЄСВ (Єдиний соціальний внесок)</li>
                    <li>• Калькулятор зарплати</li>
                    <li>• Маржа та ROI</li>
                    <li>• Cash Flow та Break-Even</li>
                  </ul>
                  <Button asChild className="w-full" variant="default">
                    <Link href="/calculators">
                      Розрахувати <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-purple-600 dark:hover:border-purple-400 transition-all hover:shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle>База знань</CardTitle>
                  <CardDescription>Експертні статті та інструкції для підприємців</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <li>• Як відкрити ФОП у 2026 році</li>
                    <li>• Зміни в податковому законодавстві</li>
                    <li>• Робота з іноземними клієнтами</li>
                    <li>• Юридичні поради</li>
                    <li>• Лайфхаки для бізнесу</li>
                  </ul>
                  <Button asChild className="w-full" variant="default">
                    <Link href="/blog">
                      Читати блог <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <BankComparison />

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <DonationWidget />
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">Чому обирають ФОП Помічник?</h2>
            <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">Простота, швидкість і надійність для вашого бізнесу</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Безкоштовно назавжди</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2 хв</div>
                <div className="text-blue-100">Створення документа</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Доступ до всіх інструментів</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
