import { Metadata } from 'next'
import Link from 'next/link'
import { Target, Heart, Users, Zap, Shield, TrendingUp } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'Про нас - ФОП Помічник',
  description: 'ФОП Помічник - безкоштовний онлайн-сервіс для українських підприємців. Створюйте документи, розраховуйте податки, читайте експертні статті.',
  openGraph: {
    title: 'Про ФОП Помічник - місія та цінності',
    description: 'Наша мета - зробити ведення бізнесу в Україні простим та доступним для кожного',
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Про ФОП Помічник
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Ваш надійний партнер у веденні бізнесу
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Наша місія
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>ФОП Помічник</strong> створений для того, щоб зробити ведення бізнесу в Україні 
              простим, доступним та зрозумілим для кожного підприємця. Ми віримо, що кожен має право 
              на легкий старт у бізнесі без зайвої бюрократії та складнощів.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 dark:text-blue-200 font-semibold mb-2">
                💡 Чому ми це робимо?
              </p>
              <p className="text-blue-800 dark:text-blue-300 mb-0">
                Ми самі пройшли шлях підприємця і знаємо, як важко розібратися з податками, 
                документами та звітністю. Тому створили інструменти, які допомагають 
                заощадити час та уникнути помилок.
              </p>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 mt-12">
              <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              Що ми пропонуємо
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                  📄 Конструктор документів
                </h3>
                <p className="text-blue-800 dark:text-blue-300">
                  Створюйте договори, акти, рахунки за 2 хвилини. Без юриста, без шаблонів - просто заповніть форму.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
                  🧮 Розумні калькулятори
                </h3>
                <p className="text-green-800 dark:text-green-300">
                  Розраховуйте податки, ЄСВ, пеню за секунди. Точні розрахунки відповідно до законодавства 2026 року.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                  📚 Експертний блог
                </h3>
                <p className="text-purple-800 dark:text-purple-300">
                  Актуальні статті про податки, звітність, банки, пенсії. Все, що потрібно знати ФОП.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-3">
                  🔒 Безпека даних
                </h3>
                <p className="text-orange-800 dark:text-orange-300">
                  Ваші дані не зберігаються на наших серверах. Все відбувається у вашому браузері.
                </p>
              </div>
            </div>

            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 mt-12">
              <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
              Наші цінності
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Безкоштовність
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Всі основні функції завжди залишаться безкоштовними. Ми не вимагаємо реєстрації, 
                    підписок чи прихованих платежів.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Доступність
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Зрозумілий інтерфейс українською мовою. Працює на будь-яких пристроях - 
                    комп'ютері, планшеті, телефоні.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Актуальність
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Ми постійно оновлюємо калькулятори та статті відповідно до змін у законодавстві. 
                    Ви завжди отримуєте актуальну інформацію.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              🎯 Для кого ми?
            </h2>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <span><strong>Фрілансери</strong> - програмісти, дизайнери, копірайтери, які працюють з Upwork, Fiverr</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🛍️</span>
                <span><strong>Інтернет-підприємці</strong> - власники онлайн-магазинів, дропшипери</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">👨‍⚕️</span>
                <span><strong>Приватні спеціалісти</strong> - лікарі, юристи, бухгалтери, викладачі</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏪</span>
                <span><strong>Малий бізнес</strong> - кафе, салони краси, ремонтні майстерні</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <span><strong>Стартапи</strong> - засновники на етапі MVP та перших продажів</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl my-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Долучайтеся до спільноти!
              </h2>
              <p className="text-lg mb-6 text-indigo-100">
                Кожного місяця нашими інструментами користуються тисячі українських підприємців. 
                Станьте частиною спільноти, яка допомагає одне одному рости та розвиватися.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Спробувати безкоштовно
                </Link>
                <Link 
                  href="/blog"
                  className="bg-white/10 backdrop-blur text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Читати блог
                </Link>
              </div>
            </div>

            <div className="text-center text-slate-600 dark:text-slate-400 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-lg">
                Зроблено з ❤️ для українських підприємців
              </p>
              <p className="text-sm mt-2">
                Маєте питання чи пропозиції? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Напишіть нам</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
