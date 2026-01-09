"use client"

import Link from "next/link";
import { Heart, Trophy, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SponsorsPage() {
  const sponsors = [
    { name: "ФОП Іваненко", amount: 500, tier: "gold" },
    { name: "Studio WebVy", amount: 1000, tier: "platinum", link: "https://webvy.online" },
    { name: "ТОВ Технології", amount: 300, tier: "silver" },
    { name: "Приватний підприємець", amount: 150, tier: "bronze" },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum": return "text-purple-600 dark:text-purple-400";
      case "gold": return "text-yellow-600 dark:text-yellow-400";
      case "silver": return "text-gray-500 dark:text-gray-400";
      default: return "text-orange-600 dark:text-orange-400";
    }
  };

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case "platinum": return <Star className="h-5 w-5 fill-current" />;
      case "gold": return <Trophy className="h-5 w-5 fill-current" />;
      case "silver": return <Star className="h-4 w-4 fill-current" />;
      default: return <Heart className="h-4 w-4 fill-current" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Дошка пошани
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Дякуємо меценатам, які підтримують розвиток проекту ❤️
          </p>
        </div>

        {/* Категорії донатерів */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="dark:bg-gray-900 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Star className="h-5 w-5 fill-current" />
                Платинові меценати
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Внесок від 1000 грн</p>
              <ul className="space-y-2">
                {sponsors.filter(s => s.tier === "platinum").map((sponsor, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {getTierIcon(sponsor.tier)}
                    {sponsor.link ? (
                      <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className={`font-semibold hover:underline ${getTierColor(sponsor.tier)}`}>
                        {sponsor.name}
                      </a>
                    ) : (
                      <span className={`font-semibold ${getTierColor(sponsor.tier)}`}>{sponsor.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 border-2 border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <Trophy className="h-5 w-5 fill-current" />
                Золоті меценати
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Внесок від 500 грн</p>
              <ul className="space-y-2">
                {sponsors.filter(s => s.tier === "gold").map((sponsor, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {getTierIcon(sponsor.tier)}
                    <span className={`font-semibold ${getTierColor(sponsor.tier)}`}>{sponsor.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Star className="h-5 w-5 fill-current" />
                Срібні меценати
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Внесок від 200 грн</p>
              <ul className="space-y-2">
                {sponsors.filter(s => s.tier === "silver").map((sponsor, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {getTierIcon(sponsor.tier)}
                    <span className={`font-semibold ${getTierColor(sponsor.tier)}`}>{sponsor.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900 border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Heart className="h-5 w-5 fill-current" />
                Бронзові меценати
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Внесок від 100 грн</p>
              <ul className="space-y-2">
                {sponsors.filter(s => s.tier === "bronze").map((sponsor, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {getTierIcon(sponsor.tier)}
                    <span className={`font-semibold ${getTierColor(sponsor.tier)}`}>{sponsor.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Як стати меценатом */}
        <Card className="dark:bg-gray-900 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="text-center">Стати меценатом</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              Підтримайте проект та отримайте безкоштовну згадку вашого імені або бренду на головній сторінці
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-bold text-2xl text-purple-600 dark:text-purple-400">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Бронза</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-gray-600 dark:text-gray-400">200+</div>
                <div className="text-gray-600 dark:text-gray-400">Срібло</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-yellow-600 dark:text-yellow-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Золото</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-purple-600 dark:text-purple-400">1000+</div>
                <div className="text-gray-600 dark:text-gray-400">Платина</div>
              </div>
            </div>
            <Button 
              asChild 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              size="lg"
            >
              <a href="https://send.monobank.ua/jar/9Ewef621zA" target="_blank" rel="noopener noreferrer">
                <Heart className="mr-2 h-5 w-5" />
                Підтримати проект
              </a>
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Після донату напишіть нам на пошту з деталями для розміщення
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
