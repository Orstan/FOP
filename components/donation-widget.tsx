"use client"

import { useState, useEffect } from "react";
import { Heart, TrendingUp, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function DonationWidget() {
  const [raised, setRaised] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const goal = 25000;
  const progress = raised ? (raised / goal) * 100 : 0;

  // Отримуємо баланс банки через власний API endpoint (обходить CORS)
  useEffect(() => {
    const fetchJarBalance = async () => {
      try {
        // Використовуємо власний API route, який проксіює запит до Monobank
        const response = await fetch('/api/jar-balance');
        
        if (response.ok) {
          const data = await response.json();
          setRaised(data.balance);
        } else {
          // Fallback
          setRaised(5000);
        }
      } catch (error) {
        console.error("Помилка отримання балансу банки:", error);
        // Fallback на дефолтне значення
        setRaised(5000);
      } finally {
        setLoading(false);
      }
    };

    fetchJarBalance();
    
    // Оновлюємо баланс кожні 65 секунд, щоб відповідати обмеженням API та кешуванню
    const interval = setInterval(fetchJarBalance, 65 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
          <Heart className="h-5 w-5" />
          Підтримати проект
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            <strong>Ціль:</strong> Залучення 10,000 нових користувачів (Реклама)
          </p>
          
          {/* Прогрес-бар */}
          <div className="relative">
            {loading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-6 w-6 animate-spin text-purple-600 dark:text-purple-400" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Завантаження балансу...</span>
              </div>
            ) : (
              <>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  >
                    {progress >= 15 && (
                      <span className="text-xs font-semibold text-white">{progress.toFixed(0)}%</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-between">
                  <span>Зібрано: <strong className="text-purple-600 dark:text-purple-400">{raised?.toLocaleString('uk-UA') || '0'} грн</strong></span>
                  <span>Ціль: <strong>{goal.toLocaleString('uk-UA')} грн</strong></span>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Кнопка донату */}
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          size="lg"
        >
          <a 
            href="https://send.monobank.ua/jar/9Ewef621zA" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Heart className="mr-2 h-5 w-5" />
            Підтримати розвиток 🚀
          </a>
        </Button>

        {/* QR код */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
            Або скануйте QR-код для швидкого донату
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-lg">
              <img 
                src="/mono-qr.png" 
                alt="QR код для донату" 
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Інформація */}
        <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
          <p>💜 Ваша підтримка допомагає проекту залишатися безкоштовним</p>
          <p>🚀 Збираємо на рекламу, щоб про сервіс дізналося більше підприємців</p>
          <p className="pt-2 border-t dark:border-gray-700">
            <strong>Донат від 100 грн</strong> - ваше ім'я/бренд у{' '}
            <a href="/sponsors" className="text-purple-600 dark:text-purple-400 hover:underline">
              Дошці пошани
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
