import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingDown, Shield, Calculator, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Легальна оптимізація податків для ФОП 2026: 7 способів | ФОП Помічник',
  description: 'Як легально зменшити податки ФОП: вибір групи, витрати, ЄСВ, договори. Законні способи оптимізації податкового навантаження для підприємців.',
  keywords: 'оптимізація податків ФОП, як зменшити податки, податкова оптимізація, легальні способи',
  openGraph: {
    title: 'Як легально зменшити податки ФОП: 7 перевірених способів',
    description: 'Детальний гайд по легальній податковій оптимізації для підприємців',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function FopTaxOptimizationPage() {
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
              7 легальних способів оптимізувати податки для ФОП у 2026
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 13 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mt-0 mb-2">Важливо!</h3>
                  <p className="text-green-800 dark:text-green-200 mb-0">
                    Усі способи в цій статті - <strong>легальні</strong> і дозволені законодавством України. 
                    Ми не рекомендуємо жодних сірих схем або ухилення від податків!
                  </p>
                </div>
              </div>
            </div>

            <h2>Що таке податкова оптимізація?</h2>
            <p>
              Податкова оптимізація - це законне зменшення податкового навантаження через використання 
              наданих державою пільг, вибір оптимальної системи оподаткування та правильне ведення обліку.
            </p>

            <h3>Різниця між оптимізацією та ухиленням:</h3>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Легальна оптимізація ✅</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Незаконне ухилення ❌</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Вибір оптимальної групи ФОП</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Приховування реального доходу</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Облік витрат на 3 групі</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Фіктивні витрати</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Використання пільг і знижок</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Робота без реєстрації ФОП</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Правильне оформлення договорів</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Підробка документів</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Спосіб 1: Вибір оптимальної групи ФОП</h2>
            <p>
              Це найпростіший спосіб оптимізації - обрати ту групу, де податки будуть найнижчими для вашого рівня доходу.
            </p>

            <h3>Коли 2 група вигідніша за 3 групу:</h3>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <p className="font-bold mb-3">Приклад розрахунку при доході 100,000 грн/міс:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-blue-900 dark:text-blue-100">2 група (фіксований податок):</p>
                  <ul className="mb-0">
                    <li>Єдиний податок: 1,640 грн/міс</li>
                    <li>ЄСВ: 1,760 грн/міс</li>
                    <li><strong>Всього: 3,400 грн (3.4%)</strong></li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-bold text-orange-900 dark:text-orange-100">3 група (5% від доходу):</p>
                  <ul className="mb-0">
                    <li>Єдиний податок: 5,000 грн/міс</li>
                    <li>ЄСВ: 1,760 грн/міс</li>
                    <li><strong>Всього: 6,760 грн (6.76%)</strong></li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4 pt-4 border-t border-blue-300 dark:border-blue-700 font-bold text-green-600 dark:text-green-400 mb-0">
                Економія на 2 групі: 3,360 грн/міс або 40,320 грн/рік! 💰
              </p>
            </div>

            <h3>Правило вибору:</h3>
            <ul>
              <li>Дохід до 80,000 грн/міс → <strong>2 група вигідніша</strong></li>
              <li>Дохід 80,000-200,000 грн/міс → <strong>приблизно однаково</strong></li>
              <li>Дохід понад 200,000 грн/міс + є витрати → <strong>3 група вигідніша</strong></li>
            </ul>

            <h2>Спосіб 2: Облік витрат на 3 групі</h2>
            <p>
              ФОП на 3 групі може обрати ставку <strong>3% з обліком витрат</strong> замість 5% без обліку. 
              Це вигідно при великих витратах.
            </p>

            <h3>Які витрати можна враховувати:</h3>
            <ul>
              <li>💻 Придбання обладнання (ноутбук, монітор, телефон)</li>
              <li>📦 Витрати на матеріали та комплектуючі</li>
              <li>🏢 Оренда офісу або коворкінгу</li>
              <li>🌐 Інтернет, хостинг, домени</li>
              <li>📚 Навчання та курси</li>
              <li>💳 Банківські комісії</li>
              <li>📢 Реклама та маркетинг</li>
              <li>🚗 Паливо (якщо є авто на балансі)</li>
              <li>📱 Програмне забезпечення (Adobe, Office, тощо)</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mt-0 mb-2">Важливо!</h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-0">
                Всі витрати повинні бути документально підтверджені: чеки, накладні, акти, договори. 
                Зберігайте все мінімум 3 роки!
              </p>
            </div>

            <h3>Приклад економії:</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <ul>
                <li>Дохід: 500,000 грн/міс</li>
                <li>Витрати: 200,000 грн/міс (обладнання, реклама, оренда)</li>
                <li>База оподаткування: 300,000 грн</li>
              </ul>
              <p className="mt-4 pt-4 border-t border-slate-300 dark:border-slate-700">
                <strong>Варіант А (5% без витрат):</strong> 500,000 × 5% = 25,000 грн податок<br/>
                <strong>Варіант Б (3% з витратами):</strong> 300,000 × 3% = 9,000 грн податок
              </p>
              <p className="font-bold text-green-600 dark:text-green-400 mb-0">
                Економія: 16,000 грн/міс або 192,000 грн/рік!
              </p>
            </div>

            <h2>Спосіб 3: Оптимізація ЄСВ (обережно!)</h2>
            <p>
              ЄСВ обов'язковий мінімум - 1,760 грн/міс. Багато ФОП платять тільки мінімум, 
              але це впливає на майбутню пенсію.
            </p>

            <h3>Збалансований підхід:</h3>
            <ul>
              <li><strong>Якщо молодий (до 40):</strong> можна платити мінімум, решту інвестувати</li>
              <li><strong>Якщо 40-50 років:</strong> платіть 2-3× мінімум для нормальної пенсії</li>
              <li><strong>Якщо 50+:</strong> максимізуйте ЄСВ для вищої пенсії</li>
            </ul>

            <h2>Спосіб 4: Розділення бізнесу (для великих доходів)</h2>
            <p>
              Якщо дохід перевищує ліміт 2 групи (5 млн грн/рік), але є можливість розділити бізнес - 
              це легальний спосіб залишитись на вигіднішій групі.
            </p>

            <h3>Приклад:</h3>
            <p>
              Замість одного ФОП з доходом 8 млн грн/рік (3 група) можна:
            </p>
            <ul>
              <li>ФОП-1 (ви): 4 млн грн/рік - 2 група</li>
              <li>ФОП-2 (партнер/дружина): 4 млн грн/рік - 2 група</li>
            </ul>
            <p>
              <strong>Економія:</strong> замість ~480,000 грн податків платите ~80,000 грн на двох!
            </p>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mt-0 mb-2">Увага!</h3>
              <p className="text-red-800 dark:text-red-200 mb-0">
                Розділення має бути реальним: різні клієнти, різні договори, різні види послуг. 
                Якщо податкова доведе фіктивність - це вже незаконна схема з штрафами!
              </p>
            </div>

            <h2>Спосіб 5: Правильне оформлення міжнародних платежів</h2>
            <p>
              При роботі з іноземними клієнтами (Upwork, Fiverr, прямі контракти) є нюанси:
            </p>

            <h3>Законні способи мінімізації:</h3>
            <ul>
              <li>✅ Використовуйте валютні рахунки - конвертація за вигідним курсом</li>
              <li>✅ Оформляйте послуги як експорт - додаткові пільги</li>
              <li>✅ Враховуйте комісії платіжних систем як витрати (3 група)</li>
              <li>✅ Використовуйте Act of Acceptance замість рахунків для іноземців</li>
            </ul>

            <h2>Спосіб 6: Створення ТОВ замість ФОП</h2>
            <p>
              При дуже великих доходах (понад 10 млн грн/рік) може бути вигідніше відкрити ТОВ:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Параметр</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">ФОП 3 група</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">ТОВ загальна</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Податок на прибуток</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">3-5%</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">18%</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Дивіденди</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Немає</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Облік витрат</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Обмежений</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Повний</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Ліміт доходу</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">10 млн грн</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Без ліміту</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Загальна ставка</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">3-5%</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">~22-23%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Висновок:</strong> ФОП вигідніший до доходу ~20-30 млн грн/рік. 
              Після цього ТОВ може бути економнішим через облік великих витрат.
            </p>

            <h2>Спосіб 7: Податкові пільги під час війни</h2>
            <p>
              Під час воєнного стану діють спеціальні пільги для деяких категорій ФОП:
            </p>

            <h3>Хто має пільги:</h3>
            <ul>
              <li>🎖️ <strong>Ветерани війни:</strong> звільнення від ЄСВ на період лікування</li>
              <li>🏥 <strong>Медичні працівники:</strong> додаткові знижки на медобладнання</li>
              <li>🌾 <strong>Аграрії:</strong> спеціальні ставки для фермерів</li>
              <li>⚡ <strong>ІТ-сектор:</strong> пільги для Дія.City (5% єдиний податок)</li>
              <li>🏭 <strong>Виробництво:</strong> зниження ставки при виробництві критичної продукції</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0 text-white">Розрахуйте оптимальну схему</h2>
              </div>
              <p className="mb-6">
                Використайте наші калькулятори щоб порівняти різні варіанти оподаткування та обрати найвигідніший
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/calculators/fop-tax"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Калькулятор податків
                </Link>
                <Link
                  href="/blog/choose-fop-group"
                  className="bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Вибір групи ФОП
                </Link>
              </div>
            </div>

            <h2>Чого НЕ варто робити (незаконні схеми)</h2>
            <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">Заборонені методи:</h3>
              <ul className="text-red-800 dark:text-red-200 mb-0 space-y-2">
                <li>❌ Приховування реального доходу (не показувати весь дохід)</li>
                <li>❌ Фіктивні витрати (купівля чеків, підробка документів)</li>
                <li>❌ Дроблення бізнесу на фіктивні ФОП (родичі без реальної діяльності)</li>
                <li>❌ Робота без реєстрації ФОП</li>
                <li>❌ Конверти (отримання готівки без оформлення)</li>
                <li>❌ Підміна договорів (вказувати меншу суму ніж реально)</li>
                <li>❌ Використання рахунків інших ФОП</li>
              </ul>
            </div>

            <h3>Наслідки незаконних схем:</h3>
            <ul>
              <li>💸 Штрафи до 100% від неспл⁣аченої суми податків</li>
              <li>📈 Пеня 0.01% за кожен день затримки</li>
              <li>🔒 Блокування рахунків</li>
              <li>⚖️ Кримінальна відповідальність при великих сумах</li>
              <li>📛 Репутаційні ризики</li>
            </ul>

            <h2>Чеклист податкової оптимізації</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold mb-4">Що зробити прямо зараз:</h3>
              <ol className="space-y-3 mb-0">
                <li>
                  <strong>□ Розрахуйте податки</strong> для 2-ї і 3-ї групи при вашому доході
                </li>
                <li>
                  <strong>□ Якщо на 3 групі:</strong> почніть вести облік витрат
                </li>
                <li>
                  <strong>□ Перевірте всі пільги</strong> на які маєте право
                </li>
                <li>
                  <strong>□ Оптимізуйте ЄСВ</strong> з урахуванням майбутньої пенсії
                </li>
                <li>
                  <strong>□ Оформіть всі договори</strong> з клієнтами правильно
                </li>
                <li>
                  <strong>□ Зберігайте всі чеки</strong> та документи мінімум 3 роки
                </li>
                <li>
                  <strong>□ Розгляньте ТОВ</strong> якщо дохід понад 15-20 млн грн/рік
                </li>
              </ol>
            </div>

            <h2>Висновок</h2>
            <p>
              Легальна податкова оптимізація - це не ухилення, а розумне використання наданих законом можливостей. 
              Основні способи:
            </p>
            <ul>
              <li>✅ Правильний вибір групи ФОП</li>
              <li>✅ Облік витрат на 3 групі</li>
              <li>✅ Балансування ЄСВ</li>
              <li>✅ Використання пільг</li>
              <li>✅ Правильне оформлення документів</li>
            </ul>
            <p>
              При правильному підході можна зекономити 30-50% податків повністю легально. 
              Головне - все документувати і не переходити межу між оптимізацією та порушенням закону.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
