"use client"

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  const breadcrumbLabels: Record<string, string> = {
    'calculators': 'Калькулятори',
    'fop-tax': 'Калькулятор податків ФОП',
    'esv': 'Калькулятор ЄСВ',
    'penalty': 'Калькулятор пені',
    'vacation': 'Калькулятор відпускних',
    'documents': 'Документи',
    'contract': 'Договір надання послуг',
    'act': 'Акт виконаних робіт',
    'invoice': 'Рахунок-фактура',
    'rent': 'Договір оренди',
    'blog': 'Блог',
    'fop-taxes-2026': 'Податки ФОП у 2026 році',
    'open-fop-diya': 'Як відкрити ФОП через Дію',
    'upwork-fiverr-2026': 'Робота з Upwork та Fiverr',
    'contract-mistakes': 'Помилки у договорі',
  };

  if (pathSegments.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center">
        <Home className="h-4 w-4" />
      </Link>
      
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;
        const label = breadcrumbLabels[segment] || segment;

        return (
          <div key={path} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-gray-900 dark:text-gray-100 font-medium">{label}</span>
            ) : (
              <Link href={path} className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
