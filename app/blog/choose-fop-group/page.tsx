import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Як вибрати групу ФОП: 1, 2 чи 3 група у 2026 році | ФОП Помічник',
  description: 'Докладний гайд по вибору групи ФОП. Порівняння 1, 2 та 3 групи: податки, ліміти доходу, види діяльності. Калькулятор для розрахунку оптимальної групи.',
  keywords: 'група ФОП, 1 група ФОП, 2 група ФОП, 3 група ФОП, вибір групи, єдиний податок',
  openGraph: {
    title: 'Як вибрати групу ФОП: 1, 2 чи 3 група у 2026 році',
    description: 'Докладний гайд по вибору групи ФОП з порівняльною таблицею та калькулятором',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function ChooseFopGroupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад до блогу
        </Link>

        <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Як вибрати групу ФОП: 1, 2 чи 3 група у 2026 році
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 10 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Що таке групи ФОП?</h2>
            <p>
              Система оподаткування для ФОП в Україні поділяється на 3 групи єдиного податку. 
              Кожна група має свої особливості: різні ставки податку, ліміти доходу та дозволені види діяльності.
            </p>

            <h2>Порівняльна таблиця груп ФОП</h2>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Параметр</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">1 група</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">2 група</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">3 група</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Ліміт доходу</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">До 1 млн грн/рік</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">До 5 млн грн/рік</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">До 10 млн грн/рік</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Ставка податку</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">10% від мінімальної зарплати (~820 грн/міс)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">20% від мінімальної зарплати (~1,640 грн/міс)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">3-5% від доходу</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">ЄСВ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">~1,760 грн/міс (22%)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">~1,760 грн/міс (22%)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">~1,760 грн/міс (22%)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Види діяльності</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Роздрібна торгівля на ринках, побутові послуги</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Послуги, роздрібна торгівля, ресторани</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Будь-які не заборонені</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Найманці</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Не можна</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Не можна</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Можна до 10 осіб</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>1 група ФОП - для кого підходить?</h2>
            <h3>Переваги:</h3>
            <ul>
              <li>Найнижчий фіксований податок (~820 грн/міс)</li>
              <li>Не потрібно вести складний облік доходів</li>
              <li>Підходить для невеликих продажів на ринках</li>
            </ul>

            <h3>Недоліки:</h3>
            <ul>
              <li>Дуже обмежені види діяльності</li>
              <li>Низький ліміт доходу (1 млн грн/рік)</li>
              <li>Не підходить для IT, консалтингу, фрілансу</li>
            </ul>

            <h2>2 група ФОП - золота середина</h2>
            <h3>Переваги:</h3>
            <ul>
              <li>Фіксований податок (~1,640 грн/міс)</li>
              <li>Підходить для надання послуг</li>
              <li>Ліміт 5 млн грн/рік достатній для більшості</li>
              <li>Популярна серед IT-спеціалістів та фрілансерів</li>
            </ul>

            <h3>Недоліки:</h3>
            <ul>
              <li>Не можна наймати працівників</li>
              <li>Обмеження на деякі види діяльності</li>
            </ul>

            <h2>3 група ФОП - для бізнесу</h2>
            <h3>Переваги:</h3>
            <ul>
              <li>Найвищий ліміт доходу (10 млн грн/рік)</li>
              <li>Можна наймати до 10 працівників</li>
              <li>Всі види діяльності (крім заборонених)</li>
              <li>Оптимальна для масштабування бізнесу</li>
            </ul>

            <h3>Недоліки:</h3>
            <ul>
              <li>Податок залежить від доходу (3-5%)</li>
              <li>Потрібен точний облік доходів</li>
              <li>При великих доходах може бути дорожче за 2 групу</li>
            </ul>

            <h2>Як обрати групу для себе?</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold mb-4">Рекомендації:</h3>
              <ul className="space-y-3">
                <li>
                  <strong>1 група:</strong> Якщо ви продаєте товари на ринку або надаєте побутові послуги з невеликим доходом
                </li>
                <li>
                  <strong>2 група:</strong> Для IT-фахівців, дизайнерів, консультантів, фрілансерів з доходом до 5 млн грн/рік
                </li>
                <li>
                  <strong>3 група:</strong> Якщо плануєте масштабувати бізнес, наймати працівників або дохід понад 5 млн грн/рік
                </li>
              </ul>
            </div>

            <h2>Приклади розрахунків</h2>
            <h3>Приклад 1: Фріланс-дизайнер (2 група)</h3>
            <ul>
              <li>Дохід: 100,000 грн/міс (1.2 млн/рік)</li>
              <li>Єдиний податок: 1,640 грн/міс</li>
              <li>ЄСВ: 1,760 грн/міс</li>
              <li><strong>Всього податків: 3,400 грн/міс (3.4% від доходу)</strong></li>
            </ul>

            <h3>Приклад 2: Той самий дизайнер на 3 групі</h3>
            <ul>
              <li>Дохід: 100,000 грн/міс</li>
              <li>Єдиний податок (5%): 5,000 грн/міс</li>
              <li>ЄСВ: 1,760 грн/міс</li>
              <li><strong>Всього податків: 6,760 грн/міс (6.76% від доходу)</strong></li>
            </ul>

            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
              Висновок: 2 група вигідніша при стабільному доході до 300-400 тис грн/міс!
            </p>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl my-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Скористайтеся калькулятором!</h2>
              <p className="mb-6">
                Розрахуйте точні податки для кожної групи ФОП та оберіть найвигідніший варіант
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/calculators/fop-tax"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Calculator className="w-5 h-5" />
                  Калькулятор ФОП
                </Link>
                <Link
                  href="/documents/contract"
                  className="inline-flex items-center gap-2 bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Конструктор договору
                </Link>
              </div>
            </div>

            <h2>Часті питання</h2>
            <h3>Чи можна змінити групу ФОП?</h3>
            <p>
              Так, можна. Зміна групи відбувається з початку наступного кварталу після подання заяви до податкової.
            </p>

            <h3>Що буде якщо перевищити ліміт доходу?</h3>
            <p>
              При перевищенні ліміту доходу ви автоматично переходите на загальну систему оподаткування з наступного кварталу 
              або можете подати заяву на перехід до вищої групи.
            </p>

            <h3>Чи обов'язково платити ЄСВ для всіх груп?</h3>
            <p>
              Так, ЄСВ обов'язковий для всіх груп ФОП. Мінімальна ставка - 22% від мінімальної зарплати (близько 1,760 грн/міс у 2026 році).
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
