import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Контакти - ФОП Помічник',
  description: 'Зв\'яжіться з нами: питання, пропозиції, відгуки. Ми завжди раді допомогти українським підприємцям.',
  openGraph: {
    title: 'Контакти - ФОП Помічник',
    description: 'Зв\'яжіться з нами для питань та пропозицій',
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Контакти
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Ми завжди раді вашим питанням та пропозиціям
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Email</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">Пишіть нам листи</p>
              </div>
            </div>
            <a 
              href="mailto:support@fop-help.com" 
              className="text-lg text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              support@fop-help.com
            </a>
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              Відповідаємо протягом 24 годин у робочі дні
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Telegram</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">Швидкі відповіді</p>
              </div>
            </div>
            <a 
              href="https://t.me/fophelp" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              @fophelp
            </a>
            <p className="text-slate-600 dark:text-slate-400 mt-4">
              Найшвидший спосіб зв'язку для термінових питань
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Часті питання
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Чи зберігаються мої дані на сервері?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Ні! Всі розрахунки та генерація документів відбуваються виключно у вашому браузері. 
                Ми не зберігаємо та не передаємо ваші персональні дані.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Чи можу я використовувати документи юридично?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Так! Всі шаблони документів відповідають чинному законодавству України. Але ми рекомендуємо 
                перевіряти важливі договори у юриста перед підписанням.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Чи актуальні калькулятори податків?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Так! Ми постійно оновлюємо калькулятори відповідно до змін у податковому законодавстві. 
                Всі розрахунки актуальні на 2026 рік.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Як я можу запропонувати нову функцію?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Напишіть нам на email або в Telegram з описом бажаної функції. Ми розглядаємо всі пропозиції 
                та додаємо найпопулярніші у розробку.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Send className="w-10 h-10" />
            <div>
              <h2 className="text-3xl font-bold">Маєте пропозицію?</h2>
              <p className="text-blue-100">Ми завжди відкриті до покращень</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 mb-6">
            <p className="text-lg mb-4">
              Ми цінуємо кожен відгук та пропозицію. Якщо у вас є ідеї, як зробити ФОП Помічник 
              ще кориснішим - напишіть нам!
            </p>
            <ul className="space-y-2 text-blue-100">
              <li>✅ Нові калькулятори</li>
              <li>✅ Додаткові типи документів</li>
              <li>✅ Теми для блогу</li>
              <li>✅ Покращення дизайну</li>
              <li>✅ Виправлення помилок</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:support@fop-help.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Написати на Email
            </a>
            <a 
              href="https://t.me/fophelp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Telegram чат
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}
