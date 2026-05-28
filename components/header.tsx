"use client"

import Link from "next/link";
import { Sparkles, Download, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center relative">
        {/* Логотип: по центру на мобільному, зліва на десктопі */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-1">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">ФОП Помічник</span>
          </Link>
        </div>

        <nav className="hidden lg:flex gap-4 items-center flex-1 justify-center">
          <Link 
            href="/documents" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            Документи
          </Link>
          <Link 
            href="/calculators" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            Калькулятори
          </Link>
          <Link 
            href="/cities" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            Міста
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            Блог
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            Контакти
          </Link>
          <Link 
            href="/sponsors" 
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium whitespace-nowrap"
          >
            💎 Меценати
          </Link>
        </nav>

        <div className="flex-1 flex justify-end lg:flex-1">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
