"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Sparkles } from "lucide-react";

interface BankCTAProps {
  context?: "tax" | "reporting" | "general";
}

const contextMessages = {
  tax: {
    title: "💰 Автоматична сплата податків",
    description: "Відкрийте рахунок у ПУМБ з акцією 0% комісії на 12 місяців. Налаштуйте автоматичну сплату податків та забудьте про черги і комісії.",
    buttonText: "Відкрити рахунок в ПУМБ"
  },
  reporting: {
    title: "📊 Спростіть звітність з банком",
    description: "ПУМБ автоматично інтегрується з ДПС та M.E.Doc. Відкрийте рахунок онлайн за 5 хвилин та отримайте 0% комісії на рік.",
    buttonText: "Відкрити рахунок онлайн"
  },
  general: {
    title: "🏦 Потрібен рахунок для ФОП?",
    description: "ПУМБ пропонує спеціальні умови: 0% комісії на всі операції протягом 12 місяців, безкоштовне обслуговування та миттєве відкриття онлайн.",
    buttonText: "Відкрити рахунок в ПУМБ"
  }
};

export function BankCTA({ context = "general" }: BankCTAProps) {
  const message = contextMessages[context];
  const affiliateLink = "https://salesdoubler.pro/placeholder-pumb"; // TODO: Замінити на реальне посилання

  const handleClick = () => {
    // Відстежування кліків для аналітики
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_inline_bank_cta', {
        'context': context,
        'link_url': affiliateLink
      });
    }
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="my-8 border-2 border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                {message.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {message.description}
            </p>
            <Button 
              onClick={handleClick}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {message.buttonText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
              Переходячи за посиланням, ви підтримуєте ФОП Помічник ❤️
            </p>
          </div>
          <div className="hidden md:block text-6xl">🏢</div>
        </div>
      </CardContent>
    </Card>
  );
}
