import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор Розмитнення Авто 2026 - Мито, Акциз, ПДВ Онлайн",
  description: "★ Розрахунок вартості розмитнення автомобіля в Україні ★ Мито 10% ★ Акцизний збір ★ ПДВ 20% ★ Електро без акцизу ★ Безкоштовний онлайн калькулятор",
  keywords: "розмитнення авто Україна, калькулятор розмитнення, мито акциз ПДВ, вартість розмитнення 2026",
  openGraph: {
    title: "Калькулятор Розмитнення Авто 2026 - Розрахунок онлайн",
    description: "Безкоштовний калькулятор вартості розмитнення автомобіля в Україні",
    url: "/calculators/customs",
  },
  alternates: {
    canonical: '/calculators/customs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
