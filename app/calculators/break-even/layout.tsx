import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Break-Even Калькулятор - Точка Беззбитковості Онлайн 2026",
  description: "★ Розрахунок точки беззбитковості бізнесу ★ Мінімальний обсяг продажів ★ Маржинальний дохід ★ Безкоштовний онлайн калькулятор для підприємців",
  keywords: "калькулятор беззбитковості, break-even point, точка беззбитковості, розрахунок окупності бізнесу",
  openGraph: {
    title: "Break-Even Калькулятор - Точка беззбитковості онлайн",
    description: "Безкоштовний калькулятор точки беззбитковості для планування бізнесу",
    url: "/calculators/break-even",
  },
  alternates: {
    canonical: '/calculators/break-even',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
