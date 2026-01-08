import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-8 md:py-12 px-4 border-t dark:border-gray-800 mt-auto">
      <div className="container mx-auto max-w-6xl">
        {/* Брендинг по центру завжди */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-blue-400 dark:text-blue-500" />
            <span className="text-white dark:text-gray-200 font-bold">ФОП Помічник</span>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">Ваш надійний партнер у веденні бізнесу</p>
        </div>

        {/* Колонки - центровані на десктопі, рівномірно розподілені на мобільних */}
        <div className="flex flex-col items-center md:items-center">
          {/* Документи і Калькулятори в 2 колонки на мобільних */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full max-w-md md:max-w-none md:grid-cols-3 md:gap-8 md:justify-items-center">
            <div className="text-left">
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3 text-sm md:text-base">Документи</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><Link href="/documents/contract" className="hover:text-white dark:hover:text-gray-200 transition-colors">Договір послуг</Link></li>
                <li><Link href="/documents/act" className="hover:text-white dark:hover:text-gray-200 transition-colors">Акт робіт</Link></li>
                <li><Link href="/documents/invoice" className="hover:text-white dark:hover:text-gray-200 transition-colors">Рахунок-фактура</Link></li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3 text-sm md:text-base">Калькулятори</h3>
              <ul className="space-y-2 text-xs md:text-sm">
                <li><Link href="/calculators/fop-tax" className="hover:text-white dark:hover:text-gray-200 transition-colors">Податки ФОП</Link></li>
                <li><Link href="/calculators/esv" className="hover:text-white dark:hover:text-gray-200 transition-colors">ЄСВ</Link></li>
                <li><Link href="/calculators/penalty" className="hover:text-white dark:hover:text-gray-200 transition-colors">Пеня та штрафи</Link></li>
              </ul>
            </div>
            
            {/* Інформація по центру на мобільних (col-span-2), третя колонка на десктопі */}
            <div className="col-span-2 md:col-span-1 text-center md:text-left mt-2 md:mt-0">
              <h3 className="text-white dark:text-gray-200 font-semibold mb-3 text-sm md:text-base">Інформація</h3>
              <ul className="space-y-2 text-xs md:text-sm inline-block text-left">
                <li><Link href="/blog" className="hover:text-white dark:hover:text-gray-200 transition-colors">Блог</Link></li>
                <li><Link href="/about" className="hover:text-white dark:hover:text-gray-200 transition-colors">Про нас</Link></li>
                <li><Link href="/contact" className="hover:text-white dark:hover:text-gray-200 transition-colors">Контакти</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-900 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>&copy; 2026 ФОП Помічник. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
