import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Договір Надання Послуг для ФОП - Безкоштовний Конструктор 2026",
  description: "★ Створіть професійний договір надання послуг за 5 хвилин ★ Юридично перевірений шаблон ★ Попередній перегляд ★ Генерація PDF ★ Для ФОП 3 групи ★ Актуальний зразок 2026 року",
  keywords: "договір надання послуг зразок, договір для ФОП, шаблон договору, конструктор договорів онлайн, договір підряду",
  openGraph: {
    title: "Договір надання послуг - Конструктор для ФОП",
    description: "Безкоштовне створення професійного договору за 5 хвилин з попереднім переглядом",
    url: "/documents/contract",
  },
  alternates: {
    canonical: '/documents/contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
