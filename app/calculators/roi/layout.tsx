import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI Калькулятор - Повернення Інвестицій Онлайн 2026",
  description: "★ Розрахунок ROI (Return on Investment) ★ Оцінка ефективності інвестицій ★ Чистий прибуток ★ Безкоштовний онлайн калькулятор для підприємців",
  keywords: "ROI калькулятор, повернення інвестицій, розрахунок ROI, ефективність інвестицій, прибутковість",
  openGraph: {
    title: "ROI Калькулятор - Повернення інвестицій онлайн",
    description: "Безкоштовний калькулятор ROI для оцінки ефективності інвестицій",
    url: "/calculators/roi",
  },
  alternates: {
    canonical: '/calculators/roi',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
