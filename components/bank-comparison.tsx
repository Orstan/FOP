"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Sparkles } from "lucide-react";

interface Bank {
  name: string;
  logo: string;
  position: number;
  medal: string;
  subtitle: string;
  bonus: string;
  monthlyFee: string;
  features: string[];
  affiliateLink: string;
  commission: string;
  reward?: string;
}

const banks: Bank[] = [
  {
    position: 1,
    medal: "🥇",
    name: "ПУМБ",
    logo: "🏢",
    subtitle: "Найвигідніший",
    bonus: "0 грн відкриття рахунку",
    monthlyFee: "0 грн акційний період",
    commission: "0% на переказах 12 міс",
    features: [
      "Акція: 0% комісії рік",
      "Автоматична сплата податків",
      "Онлайн відкриття за 5 хвилин",
      "Безкоштовні платіжки",
      "Інтеграція з ДПС"
    ],
    affiliateLink: "https://salesdoubler.pro/placeholder-pumb",
    reward: "Винагорода: 1600 грн"
  },
  {
    position: 2,
    medal: "🥈",
    name: "Raiffeisen Bank",
    logo: "🏦",
    subtitle: "Найнадійніший європейський банк",
    bonus: "Стабільність та міжнародний рівень",
    monthlyFee: "Від 0 грн",
    commission: "Професійні тарифи",
    features: [
      "Частина міжнародної групи",
      "Понад 25 років в Україні",
      "Швидкі міжнародні перекази",
      "Бізнес-кредитування",
      "Персональний менеджер"
    ],
    affiliateLink: "https://salesdoubler.pro/placeholder-raiffeisen",
    reward: "Винагорода: 360 грн"
  },
  {
    position: 3,
    medal: "🥉",
    name: "Unex Bank",
    logo: "🏦",
    subtitle: "Кредитування для бізнесу",
    bonus: "Швидке схвалення кредитів",
    monthlyFee: "Від 99 грн/міс",
    commission: "Конкурентні ставки",
    features: [
      "Бізнес-кредити до 5 млн грн",
      "Схвалення за 1-2 дні",
      "Овердрафт для ФОП",
      "Факторинг та лізинг",
      "Онлайн-банкінг 24/7"
    ],
    affiliateLink: "https://admitad.com/placeholder-unex",
    reward: "Партнер Admitad"
  }
];

export function BankComparison() {
  const handleBankClick = (bank: Bank) => {
    // Відстежування кліків для аналітики
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_affiliate_link', {
        'bank_name': bank.name,
        'link_url': bank.affiliateLink
      });
    }
    window.open(bank.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">ТОП-3 банки для ФОП 2026 🔥</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Рейтинг банків для відкриття рахунку ФОП
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Оберіть найкращий банк для вашого бізнесу з нашого перевіреного рейтингу
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto mb-8">
          {banks.map((bank) => (
            <Card 
              key={bank.name} 
              className={`relative transition-all hover:shadow-xl ${
                bank.position === 1
                  ? 'border-2 border-yellow-500 dark:border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20' 
                  : 'border-2 hover:border-blue-300 dark:hover:border-blue-700'
              } dark:bg-gray-900`}
            >
              <div className="absolute -top-4 -left-4 text-6xl">
                {bank.medal}
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl mt-2">{bank.logo}</div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold mb-2">{bank.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base font-semibold text-gray-600 dark:text-gray-400">
                        {bank.position} місце
                      </span>
                    </div>
                    <CardDescription className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {bank.subtitle}
                    </CardDescription>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {bank.bonus}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Обслуговування:</span>
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{bank.monthlyFee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Комісії:</span>
                      <span className="font-semibold text-gray-900 dark:text-gray-100">{bank.commission}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-end">
                    <Button 
                      onClick={() => handleBankClick(bank)}
                      className={`${
                        bank.position === 1
                          ? 'bg-yellow-600 hover:bg-yellow-700' 
                          : bank.position === 2
                          ? 'bg-gray-600 hover:bg-gray-700'
                          : 'bg-orange-600 hover:bg-orange-700'
                      }`}
                      size="lg"
                    >
                      Відкрити рахунок
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-2">
                  {bank.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {bank.reward && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 text-center italic">
                    {bank.reward} • Підтримайте ФОП Помічник
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Як обрати банк для ФОП?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>ПУМБ</strong> — лідер рейтингу з 0% комісії на 12 місяців. 
                <strong>Raiffeisen Bank</strong> — надійність європейського банку. 
                <strong>Unex Bank</strong> — спеціалізується на кредитуванні бізнесу.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ Порівняйте комісії та умови обслуговування</li>
                <li>✅ Оберіть банк з онлайн-відкриттям рахунку</li>
                <li>✅ Перевірте наявність інтеграції з Дія.Бізнес</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
