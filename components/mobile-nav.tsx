"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Calculator, Menu, BookOpen, Phone, MapPin, Heart, Info, X } from "lucide-react";

export function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Dropdown menu from hamburger */}
      {isMenuOpen && (
        <div className="fixed bottom-[68px] left-0 right-0 z-[999] lg:hidden animate-in slide-in-from-bottom-2 duration-200">
          <div className="mx-4 mb-2 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Меню</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>
            <nav className="px-2 pb-3">
              <Link
                href="/cities"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  isActive("/cities")
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Міста</span>
              </Link>
              <Link
                href="/sponsors"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  isActive("/sponsors")
                    ? "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Heart className="h-5 w-5" />
                <span className="font-medium">Меценати</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                  isActive("/about")
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Info className="h-5 w-5" />
                <span className="font-medium">Про нас</span>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Bottom navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] lg:hidden">
        <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 safe-area-bottom">
          <nav className="flex items-center justify-around px-1 py-1.5">
            {/* Документи */}
            <Link
              href="/documents"
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl min-w-[60px] transition-all ${
                isActive("/documents")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <FileText className={`h-5 w-5 ${isActive("/documents") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-tight">Документи</span>
            </Link>

            {/* Калькулятор */}
            <Link
              href="/calculators"
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl min-w-[60px] transition-all ${
                isActive("/calculators")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <Calculator className={`h-5 w-5 ${isActive("/calculators") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-tight">Калькулятор</span>
            </Link>

            {/* Меню (гамбургер) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl min-w-[60px] transition-all ${
                isMenuOpen
                  ? "text-blue-600 dark:text-blue-400"
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
              <span className="text-[10px] font-medium leading-tight">Меню</span>
            </button>

            {/* Блог */}
            <Link
              href="/blog"
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl min-w-[60px] transition-all ${
                isActive("/blog")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <BookOpen className={`h-5 w-5 ${isActive("/blog") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-tight">Блог</span>
            </Link>

            {/* Контакти */}
            <Link
              href="/contact"
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl min-w-[60px] transition-all ${
                isActive("/contact")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-500 dark:text-gray-400 active:text-blue-600"
              }`}
            >
              <Phone className={`h-5 w-5 ${isActive("/contact") ? "stroke-[2.5]" : ""}`} />
              <span className="text-[10px] font-medium leading-tight">Контакти</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
