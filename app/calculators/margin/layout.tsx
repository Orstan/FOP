import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор Маржі та Наценки - Розрахунок Прибутку Онлайн 2026",
  description: "★ Розрахунок маржі, наценки та прибутку ★ Різниця між маржею та наценкою ★ Формули розрахунку ★ Безкоштовний онлайн калькулятор для бізнесу",
  keywords: "калькулятор маржі, наценка, прибуток, маржа від продажу, розрахунок маржинальності",
  openGraph: {
    title: "Калькулятор Маржі та Наценки - Розрахунок онлайн",
    description: "Безкоштовний калькулятор маржі, наценки та прибутку для бізнесу",
    url: "/calculators/margin",
  },
  alternates: {
    canonical: '/calculators/margin',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
