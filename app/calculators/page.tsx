import Link from "next/link";
import { Calculator, ArrowLeft, TrendingUp, AlertCircle, Calendar, Wallet, PieChart, DollarSign, Target, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Безкоштовні Калькулятори для ФОП - Податки, ЄСВ, Зарплата, ROI, Маржа 2026",
  description: "★ 9 розумних калькуляторів для українських підприємців ★ Розрахунок податків ФОП ★ Зарплата ★ Маржа ★ Cash Flow ★ ROI ★ Break-Even ★ Точні розрахунки згідно з законодавством 2026",
  keywords: "калькулятор податків ФОП, розрахунок ЄСВ, калькулятор зарплати, маржа, ROI, break-even, cash flow, податки підприємця 2026",
  openGraph: {
    title: "9 Калькуляторів для ФОП - Розрахунок податків та фінансів онлайн",
    description: "Безкоштовні калькулятори податків, зарплати, маржі, ROI, cash flow для українських підприємців",
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
      title: "Калькулятор зарплати",
      description: "ПДФО, військовий збір, ЄСВ - чиста зарплата на руки",
      icon: Wallet,
      href: "/calculators/salary",
      color: "indigo",
      available: true,
    },
    {
      title: "Калькулятор маржі",
      description: "Розрахунок прибутку, маржі та наценки",
      icon: PieChart,
      href: "/calculators/margin",
      color: "purple",
      available: true,
    },
    {
      title: "Cash Flow калькулятор",
      description: "Грошовий потік та чистий прибуток бізнесу",
      icon: DollarSign,
      href: "/calculators/cash-flow",
      color: "emerald",
      available: true,
    },
    {
      title: "ROI калькулятор",
      description: "Повернення інвестицій (Return on Investment)",
      icon: TrendingUp,
      href: "/calculators/roi",
      color: "cyan",
      available: true,
    },
    {
      title: "Break-Even калькулятор",
      description: "Точка беззбитковості вашого бізнесу",
      icon: Target,
      href: "/calculators/break-even",
      color: "orange",
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
      color: "pink",
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
