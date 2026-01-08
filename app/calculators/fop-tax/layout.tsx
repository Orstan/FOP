import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор Податків ФОП 2026 - Розрахунок Єдиного Податку та ЄСВ Онлайн",
  description: "★ Точний розрахунок податків для ФОП всіх груп (1, 2, 3) ★ Єдиний податок + ЄСВ ★ Актуальні ставки 2026 року ★ Терміни сплати ★ Безкоштовний онлайн калькулятор для українських підприємців",
  keywords: "калькулятор податків ФОП, розрахунок єдиного податку, ЄСВ 2026, податки ФОП 3 група, скільки платити податків ФОП, оподаткування підприємців",
  openGraph: {
    title: "Калькулятор Податків ФОП - Розрахунок онлайн",
    description: "Безкоштовний калькулятор для розрахунку Єдиного податку та ЄСВ для всіх груп ФОП",
    url: "/calculators/fop-tax",
  },
  alternates: {
    canonical: '/calculators/fop-tax',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
