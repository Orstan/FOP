import Link from "next/link";
import { FileText, ArrowLeft, Download, FileSignature, Receipt, Home, ShoppingCart, Hammer, Briefcase, HandCoins, ShoppingBag, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Безкоштовний Конструктор Документів для ФОП - Договори, Акти, Рахунки 2026",
  description: "★ Створюйте юридичні документи за 2 хвилини ★ Договір надання послуг ★ Акт виконаних робіт ★ Рахунок-фактура (Invoice) ★ Договір оренди ★ Безкоштовна генерація PDF для українських підприємців",
  keywords: "договір для ФОП, акт виконаних робіт зразок, рахунок-фактура, договір надання послуг, конструктор договорів, документи для бізнесу",
  openGraph: {
    title: "Конструктор Документів для ФОП - Договори та Акти онлайн",
    description: "Безкоштовне створення професійних документів для підприємців за 2 хвилини",
    url: "/documents",
  },
  alternates: {
    canonical: '/documents',
  },
};

export default function DocumentsPage() {
  const documents = [
    {
      title: "Договір надання послуг",
      description: "Універсальний договір для ФОП 3 групи на надання послуг",
      icon: FileSignature,
      href: "/documents/contract",
      color: "blue",
      available: true,
    },
    {
      title: "Акт виконаних робіт",
      description: "Акт приймання-передачі виконаних робіт або наданих послуг",
      icon: FileText,
      href: "/documents/act",
      color: "green",
      available: true,
    },
    {
      title: "Рахунок-фактура (Invoice)",
      description: "Двомовний рахунок для експорту послуг (UA/EN)",
      icon: Receipt,
      href: "/documents/invoice",
      color: "purple",
      available: true,
    },
    {
      title: "Договір оренди житла",
      description: "Договір найму житлового приміщення",
      icon: Home,
      href: "/documents/rent",
      color: "orange",
      available: true,
    },
    {
      title: "Договір купівлі-продажу",
      description: "Продаж товарів між ФОП та клієнтом",
      icon: ShoppingCart,
      href: "/documents/sale",
      color: "orange",
      available: true,
    },
    {
      title: "Договір підряду",
      description: "Будівельні та ремонтні роботи",
      icon: Hammer,
      href: "/documents/construction",
      color: "amber",
      available: true,
    },
    {
      title: "Трудовий договір / ЦПД",
      description: "Оформлення найму працівників",
      icon: Briefcase,
      href: "/documents/employment",
      color: "indigo",
      available: true,
    },
    {
      title: "Договір позики",
      description: "Позика грошей між фізособами",
      icon: HandCoins,
      href: "/documents/loan",
      color: "emerald",
      available: true,
    },
    {
      title: "Договір комісії",
      description: "Продаж через посередника (дропшиппінг)",
      icon: ShoppingBag,
      href: "/documents/commission",
      color: "purple",
      available: true,
    },
    {
      title: "Договір NDA",
      description: "Про нерозголошення конфіденційної інформації",
      icon: ShieldCheck,
      href: "/documents/nda",
      color: "red",
      available: true,
    },
    {
      title: "Оренда нежитлового приміщення",
      description: "Оренда офісу, магазину, складу",
      icon: Building2,
      href: "/documents/commercial-rent",
      color: "cyan",
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
            Конструктор документів
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Створіть професійний документ за 2 хвилини. Безкоштовно та без реєстрації
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <Card 
              key={index} 
              className={`dark:bg-gray-900 border-2 transition-all ${doc.available ? 'hover:shadow-lg hover:border-blue-600 dark:hover:border-blue-400' : 'opacity-60'}`}
            >
              <CardHeader>
                <div className={`w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4`}>
                  <doc.icon className={`h-6 w-6 text-blue-600 dark:text-blue-400`} />
                </div>
                <CardTitle className="flex items-center gap-2">
                  {doc.title}
                  {!doc.available && (
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      Незабаром
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {doc.available ? (
                  <Button asChild className="w-full">
                    <Link href={doc.href}>
                      <Download className="mr-2 h-4 w-4" />
                      Створити документ
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

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">Швидко</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Заповніть просту форму та отримайте готовий документ за 2 хвилини
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">Професійно</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Всі шаблони перевірені юристами та відповідають законодавству України
              </p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">Безкоштовно</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Створюйте необмежену кількість документів без плати та реєстрації
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
