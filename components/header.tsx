"use client"

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAIAssistantStore } from "@/lib/ai-assistant-store";

export function Header() {
  const { openAssistant } = useAIAssistantStore();

  return (
    <header className="border-b bg-white/85 dark:bg-gray-950/85 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Логотип */}
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:opacity-85 transition-opacity shrink-0 py-0.5"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-xs text-white">
            <Sparkles className="h-4 w-4 text-amber-300" />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap tracking-tight">
            ФОП Помічник
          </span>
        </Link>

        {/* Навігація для десктопу */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          <Link 
            href="/documents" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Документи
          </Link>
          <Link 
            href="/calculators" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Калькулятори
          </Link>
          <Link 
            href="/cities" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Міста
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Блог
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Контакти
          </Link>
          <Link 
            href="/sponsors" 
            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap"
          >
            💎 Меценати
          </Link>
        </nav>

        {/* Праві елементи: Кнопка AI + ThemeToggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => openAssistant()}
            className="group relative inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.03] active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0"
            aria-label="Відкрити AI-Помічник"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse shrink-0" />
            <span className="font-semibold tracking-tight">AI-Помічник</span>
            <span className="hidden xl:inline-block text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold">
              2026
            </span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
