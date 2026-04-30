import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор Зарплати 2026 - ПДФО, Військовий Збір 5%, ЄСВ Онлайн",
  description: "★ Розрахунок чистої зарплати на руки ★ ПДФО 18% + Військовий збір 5% ★ ЄСВ для роботодавця 22% ★ Актуальні ставки 2026 року ★ Безкоштовний онлайн калькулятор",
  keywords: "калькулятор зарплати, ПДФО 2026, військовий збір 5%, ЄСВ, чиста зарплата, розрахунок зарплати онлайн",
  openGraph: {
    title: "Калькулятор Зарплати 2026 - Розрахунок онлайн",
    description: "Безкоштовний калькулятор зарплати з ПДФО, військовим збором 5% та ЄСВ",
    url: "/calculators/salary",
  },
  alternates: {
    canonical: '/calculators/salary',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
