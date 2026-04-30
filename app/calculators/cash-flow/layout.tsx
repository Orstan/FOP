import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Flow Калькулятор - Грошовий Потік Бізнесу Онлайн 2026",
  description: "★ Розрахунок грошового потоку бізнесу ★ Доходи мінус витрати ★ Рентабельність ★ Типові витрати ФОП ★ Безкоштовний онлайн калькулятор",
  keywords: "калькулятор cash flow, грошовий потік, рентабельність бізнесу, доходи витрати ФОП",
  openGraph: {
    title: "Cash Flow Калькулятор - Грошовий потік онлайн",
    description: "Безкоштовний калькулятор грошового потоку та рентабельності бізнесу",
    url: "/calculators/cash-flow",
  },
  alternates: {
    canonical: '/calculators/cash-flow',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
