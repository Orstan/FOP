import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/analytics";
import { GoogleAdSense } from "@/components/google-adsense";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ФОП Помічник - Безкоштовні Документи та Калькулятори для Підприємців України 2026",
    template: "%s | ФОП Помічник"
  },
  description: "★ Безкоштовний конструктор договорів, актів, рахунків для ФОП ★ Калькулятори податків, ЄСВ, пені ★ Експертний блог для підприємців ★ Все для бізнесу в Україні 2026",
  keywords: [
    "ФОП", "фізична особа підприємець", "договір для ФОП", "калькулятор податків ФОП",
    "єдиний податок 2026", "ЄСВ розрахунок", "акт виконаних робіт", "рахунок-фактура",
    "документи для бізнесу", "податки ФОП Україна", "як відкрити ФОП", "ФОП 3 група",
    "конструктор договорів", "калькулятор ЄСВ", "експорт послуг", "Upwork для ФОП",
    "договір надання послуг", "оподаткування підприємців", "бізнес в Україні"
  ],
  authors: [{ name: "ФОП Помічник" }],
  creator: "ФОП Помічник",
  publisher: "ФОП Помічник",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fop-help.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://fop-help.com",
    siteName: "ФОП Помічник",
    title: "ФОП Помічник - Все для підприємця України 2026",
    description: "Безкоштовні документи, калькулятори податків та експертні поради для ФОП. Створюйте договори за 2 хвилини. Розраховуйте податки онлайн.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ФОП Помічник - Документи та калькулятори для підприємців",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ФОП Помічник - Все для підприємця України",
    description: "Безкоштовні документи та калькулятори для ФОП",
    images: ["/og-image.png"],
    creator: "@fop_helper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '-3SuFo8zlyvnn6FJbSiIJ68_3BAM3a8p9q7BG0BTl1o',
  },
  other: {
    'google-adsense-account': 'ca-pub-7434166826056099',
    'verify-admitad': 'e1700be9e6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <GoogleAdSense />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="7fdd9d0a-1d7b-42d4-9fad-f1c66cf3b6f9"
          strategy="afterInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17836471073"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17836471073');
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17868549005"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17868549005');
          `}
        </Script>
        <GoogleAnalytics gaId="G-BZYJHJKSXR" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
