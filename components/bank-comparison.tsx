"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Sparkles } from "lucide-react";

interface Bank {
  name: string;
  logo: string;
  bonus: string;
  monthlyFee: string;
  features: string[];
  isPopular?: boolean;
  affiliateLink: string;
  commission: string;
}

const banks: Bank[] = [
  {
    name: "ПУМБ",
    logo: "🏢",
    bonus: "0% комісії на 12 місяців",
    monthlyFee: "0 грн акційний період",
    commission: "0% на переказах 12 міс",
    features: [
      "Акція: 0% комісії рік",
      "Автоматична сплата податків",
      "Онлайн відкриття за 5 хвилин",
      "Безкоштовні платіжки",
      "Інтеграція з ДПС"
    ],
    isPopular: true,
    affiliateLink: "https://salesdoubler.pro/placeholder-pumb" // TODO: Замінити на реальне посилання
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
            <span className="text-sm font-medium">Акційна пропозиція 2026 🔥</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Відкрийте рахунок ФОП у ПУМБ за 5 хвилин
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Спеціальна пропозиція: 0% комісії на всі операції протягом 12 місяців для нових клієнтів
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          {banks.map((bank) => (
            <Card 
              key={bank.name} 
              className={`relative transition-all hover:shadow-xl ${
                bank.isPopular 
                  ? 'border-2 border-blue-500 dark:border-blue-400' 
                  : 'border hover:border-blue-300 dark:hover:border-blue-700'
              } dark:bg-gray-900`}
            >
              {bank.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    Популярний вибір
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-3">{bank.logo}</div>
                <CardTitle className="text-2xl">{bank.name}</CardTitle>
                <CardDescription className="text-base font-semibold text-green-600 dark:text-green-400">
                  {bank.bonus}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-2 border-b pb-4 dark:border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Обслуговування:</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{bank.monthlyFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Комісії:</span>
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{bank.commission}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {bank.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleBankClick(bank)}
                  className={`w-full ${
                    bank.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : ''
                  }`}
                  size="lg"
                >
                  Відкрити рахунок
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                  Переходячи за посиланням, ви підтримуєте ФОП Помічник
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Чому ПУМБ — ідеальний вибір для ФОП?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                ПУМБ пропонує найвигідніші умови для підприємців у 2026 році: 0% комісії на всі операції протягом 12 місяців, 
                автоматична сплата податків та безкоштовне обслуговування. Це дозволить заощадити до 3000 грн на рік!
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ Відкриття рахунку за 5 хвилин онлайн</li>
                <li>✅ Інтеграція з Дія.Бізнес для автоматичної звітності</li>
                <li>✅ Безкоштовні платіжні доручення без обмежень</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
