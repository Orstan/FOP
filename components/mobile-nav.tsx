"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Calculator, Menu, BookOpen, Phone, MapPin, Heart, Info, X, Sparkles } from "lucide-react";
import { useAIAssistantStore } from "@/lib/ai-assistant-store";

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openAssistant } = useAIAssistantStore();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* Затемнення при відкритому меню */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-[998] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Випадаюче меню (гамбургер) */}
      {isMenuOpen && (
        <div className="fixed bottom-[72px] left-0 right-0 z-[999] lg:hidden animate-in slide-in-from-bottom-2 duration-200">
          <div className="mx-4 mb-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Розділи сайту
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Закрити меню"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <nav className="px-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openAssistant();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 text-blue-600 dark:text-blue-400 font-semibold text-sm transition-all"
              >
                <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" />
                <span>AI-Помічник ФОП 2026</span>
                <span className="ml-auto text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white">
                  ШІ
                </span>
              </button>
              <Link
                href="/cities"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/cities")
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>Міста України</span>
              </Link>
              <Link
                href="/sponsors"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/sponsors")
                    ? "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                }`}
              >
                <Heart className="h-4 w-4" />
                <span>Меценати</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/contact")
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>Контакти</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                  isActive("/about")
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
                }`}
              >
                <Info className="h-4 w-4" />
                <span>Про нас</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Нижня панель навігації для смартфонів */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] lg:hidden">
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-[env(safe-area-inset-bottom)]">
          <nav className="grid grid-cols-5 w-full items-end px-1 py-1.5 min-h-[58px] relative">
            {/* Документи */}
            <Link
              href="/documents"
              className={`flex flex-col items-center justify-center gap-1 py-1 w-full transition-all ${
                isActive("/documents")
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <FileText className={`h-5 w-5 ${isActive("/documents") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-none whitespace-nowrap tracking-tight">Документи</span>
            </Link>

            {/* Блог */}
            <Link
              href="/blog"
              className={`flex flex-col items-center justify-center gap-1 py-1 w-full transition-all ${
                isActive("/blog")
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <BookOpen className={`h-5 w-5 ${isActive("/blog") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-none whitespace-nowrap tracking-tight">Блог</span>
            </Link>

            {/* Центральна виділена кнопка AI-Помічника (Рівно 50% по центру екрана) */}
            <div className="flex flex-col items-center justify-center w-full relative">
              <button
                onClick={() => openAssistant()}
                className="relative -top-2.5 flex flex-col items-center justify-center group cursor-pointer"
                aria-label="AI-Помічник"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/35 border-[2.5px] border-white dark:border-gray-950 group-active:scale-95 transition-transform">
                  <Sparkles className="h-5 w-5 text-amber-300 animate-pulse" />
                </div>
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-0.5 whitespace-nowrap tracking-tight">
                  AI-Помічник
                </span>
              </button>
            </div>

            {/* Калькулятори */}
            <Link
              href="/calculators"
              className={`flex flex-col items-center justify-center gap-1 py-1 w-full transition-all ${
                isActive("/calculators")
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <Calculator className={`h-5 w-5 ${isActive("/calculators") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-none whitespace-nowrap tracking-tight">Калькулятори</span>
            </Link>

            {/* Меню (гамбургер) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col items-center justify-center gap-1 py-1 w-full transition-all cursor-pointer ${
                isMenuOpen
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <div className="relative h-5 w-5 flex items-center justify-center">
                {isMenuOpen ? (
                  <X className="h-5 w-5 stroke-[2.5]" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </div>
              <span className="text-[10px] font-medium leading-none whitespace-nowrap tracking-tight">Меню</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
