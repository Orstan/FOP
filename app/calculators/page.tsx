import Link from "next/link";
import { Calculator, ArrowLeft, TrendingUp, AlertCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Безкоштовні Калькулятори для ФОП - Податки, ЄСВ, Пеня, Відпускні 2026",
  description: "★ Розумні калькулятори для українських підприємців ★ Розрахунок податків ФОП (групи 1-3) ★ ЄСВ калькулятор ★ Пеня та штрафи ★ Відпускні виплати ★ Точні розрахунки згідно з законодавством 2026",
  keywords: "калькулятор податків ФОП, розрахунок ЄСВ, калькулятор пені, єдиний податок, відпускні калькулятор, податки підприємця 2026",
  openGraph: {
    title: "Калькулятори для ФОП - Розрахунок податків онлайн",
    description: "Безкоштовні калькулятори податків, ЄСВ, пені та відпускних для українських підприємців",
    url: "/calculators",
  },
  alternates: {
    canonical: '/calculators',
  },
};

export default function CalculatorsPage() {
  const calculators = [
    {
      title: "Калькулятор податків ФОП",
      description: "Розрахунок Єдиного податку та ЄСВ для всіх груп ФОП",
      icon: Calculator,
      href: "/calculators/fop-tax",
      color: "green",
      available: true,
    },
    {
      title: "Калькулятор ЄСВ",
      description: "Окремий розрахунок Єдиного соціального внеску",
      icon: TrendingUp,
      href: "/calculators/esv",
      color: "blue",
      available: true,
    },
    {
      title: "Калькулятор пені та штрафів",
      description: "Розрахунок пені за прострочені платежі",
      icon: AlertCircle,
      href: "/calculators/penalty",
      color: "red",
      available: true,
    },
    {
      title: "Калькулятор відпускних",
      description: "Розрахунок відпускних для найманих працівників",
      icon: Calendar,
      href: "/calculators/vacation",
      color: "purple",
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

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Розумні калькулятори
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Точні розрахунки податків та платежів для українських підприємців
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {calculators.map((calc, index) => (
            <Card 
              key={index} 
              className={`dark:bg-gray-900 border-2 hover:border-${calc.color}-600 dark:hover:border-${calc.color}-400 transition-all ${calc.available ? 'hover:shadow-lg' : 'opacity-60'}`}
            >
              <CardHeader>
                <div className={`w-12 h-12 bg-${calc.color}-100 dark:bg-${calc.color}-900/30 rounded-lg flex items-center justify-center mb-4`}>
                  <calc.icon className={`h-6 w-6 text-${calc.color}-600 dark:text-${calc.color}-400`} />
                </div>
                <CardTitle className="flex items-center gap-2">
                  {calc.title}
                  {!calc.available && (
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      Незабаром
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {calc.available ? (
                  <Button asChild className="w-full">
                    <Link href={calc.href}>
                      Розрахувати
                    </Link>
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    В розробці
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 dark:bg-gray-900">
          <CardHeader>
            <CardTitle>Чому наші калькулятори?</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Безкоштовно та без реєстрації</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2026</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Актуальні дані та ставки</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Доступ у будь-який час</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
