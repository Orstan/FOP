import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Пенсія для ФОП у 2026: як формується та як збільшити | ФОП Помічник',
  description: 'Все про пенсію ФОП: як рахується стаж, від чого залежить розмір пенсії, як збільшити майбутні виплати. Калькулятор пенсії для підприємців.',
  keywords: 'пенсія ФОП, пенсійний стаж ФОП, ЄСВ пенсія, розмір пенсії підприємця',
  openGraph: {
    title: 'Пенсія для ФОП: як формується та збільшити',
    description: 'Детальний гайд про пенсійні виплати для підприємців в Україні',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function FopPensionsPage() {
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
              Пенсія для ФОП: як формується та як збільшити у 2026 році
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 11 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Багато ФОП не замислюються про майбутню пенсію, фокусуючись на поточних податках. 
              Але пенсійні виплати напряму залежать від того, скільки ви платили ЄСВ. Розберемось детально.
            </p>

            <h2>Як формується пенсія для ФОП?</h2>
            <p>
              Пенсія в Україні складається з трьох рівнів:
            </p>
            <ul>
              <li><strong>1 рівень:</strong> Солідарна система (державна пенсія з ЄСВ)</li>
              <li><strong>2 рівень:</strong> Накопичувальна система (поки не запрацювала повністю)</li>
              <li><strong>3 рівень:</strong> Недержавні пенсійні фонди (добровільно)</li>
            </ul>
            <p>
              ФОП, як і найманий працівник, отримує пенсію з 1-го рівня, яка формується з ЄСВ.
            </p>

            <h2>Що таке ЄСВ і навіщо його платити?</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <p className="mb-3">
                <strong>Єдиний соціальний внесок (ЄСВ)</strong> - обов'язковий платіж, який забезпечує:
              </p>
              <ul className="mb-0">
                <li>📊 Формування пенсійного стажу</li>
                <li>💰 Розмір майбутньої пенсії</li>
                <li>🏥 Безкоштовну медицину</li>
                <li>🤕 Лікарняні виплати</li>
                <li>👶 Декретні виплати</li>
                <li>💼 Допомогу по безробіттю</li>
              </ul>
            </div>

            <h3>Мінімальний ЄСВ для ФОП у 2026:</h3>
            <ul>
              <li><strong>Ставка:</strong> 22% від мінімальної зарплати</li>
              <li><strong>Мінзарплата 2026:</strong> ~8,000 грн</li>
              <li><strong>Мінімальний ЄСВ:</strong> 8,000 × 22% = 1,760 грн/міс</li>
              <li><strong>За рік:</strong> 1,760 × 12 = 21,120 грн</li>
            </ul>

            <h2>Як рахується пенсійний стаж ФОП?</h2>
            <p>
              Пенсійний стаж зараховується за кожен місяць, коли ви сплатили ЄСВ:
            </p>
            <ul>
              <li>✅ Сплатили мінімальний ЄСВ (1,760 грн) = 1 місяць стажу</li>
              <li>✅ Сплатили більше = 1 місяць стажу (розмір впливає на суму пенсії, а не на стаж)</li>
              <li>❌ Не сплатили = місяць не зараховується</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mt-0 mb-2">Важливо!</h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-0">
                Для виходу на пенсію за віком у 2026 році потрібно мати <strong>мінімум 27 років стажу</strong> 
                (з 2028 року буде 35 років). Якщо стажу недостатньо - отримаєте тільки соціальну пенсію 
                (мінімальну виплату від держави).
              </p>
            </div>

            <h2>Від чого залежить розмір пенсії ФОП?</h2>
            <h3>Формула розрахунку пенсії:</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <p className="text-center text-xl font-mono font-bold mb-4">
                Пенсія = (Зарплата за останні 36 міс / 36) × Коефіцієнт стажу × Корегування
              </p>
              <p className="text-sm text-center text-slate-600 dark:text-slate-400 mb-0">
                * Замість зарплати для ФОП береться сума, з якої сплачувався ЄСВ
              </p>
            </div>

            <h3>Ключові фактори:</h3>
            <ol>
              <li>
                <strong>Розмір ЄСВ за останні 3 роки</strong>
                <p>Чим більше платили ЄСВ, тим вища пенсія</p>
              </li>
              <li>
                <strong>Загальний стаж</strong>
                <p>Мінімум 27 років для повної пенсії (у 2026)</p>
              </li>
              <li>
                <strong>Вік виходу на пенсію</strong>
                <p>60 років для жінок, 60 років для чоловіків (у 2026)</p>
              </li>
            </ol>

            <h2>Приклади розрахунку пенсії</h2>
            <h3>Приклад 1: Мінімальний ЄСВ весь час</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <ul>
                <li><strong>ЄСВ:</strong> 1,760 грн/міс (мінімальний)</li>
                <li><strong>База ЄСВ:</strong> 8,000 грн/міс</li>
                <li><strong>Стаж:</strong> 30 років</li>
                <li><strong>Очікувана пенсія:</strong> ~4,500-5,000 грн/міс</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
                Це приблизно прожитковий мінімум для пенсіонерів
              </p>
            </div>

            <h3>Приклад 2: ФОП з високим доходом</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <ul>
                <li><strong>ЄСВ:</strong> 10,000 грн/міс (добровільно більше)</li>
                <li><strong>База ЄСВ:</strong> 45,000 грн/міс</li>
                <li><strong>Стаж:</strong> 30 років</li>
                <li><strong>Очікувана пенсія:</strong> ~12,000-15,000 грн/міс</li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
                Значно вище через вищу базу нарахування ЄСВ
              </p>
            </div>

            <h3>Приклад 3: ФОП + найм на роботу одночасно</h3>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <ul>
                <li><strong>ЄСВ від роботодавця:</strong> 13,200 грн/міс (з зарплати 60,000 грн)</li>
                <li><strong>ЄСВ як ФОП:</strong> 1,760 грн/міс</li>
                <li><strong>Загальна база:</strong> 68,000 грн/міс</li>
                <li><strong>Стаж:</strong> 30 років</li>
                <li><strong>Очікувана пенсія:</strong> ~18,000-20,000 грн/міс</li>
              </ul>
              <p className="text-sm text-green-600 dark:text-green-400 mb-0">
                Найкращий варіант - два джерела ЄСВ дають найвищу пенсію!
              </p>
            </div>

            <h2>Як збільшити майбутню пенсію?</h2>
            <h3>Стратегія 1: Платити більше ЄСВ</h3>
            <p>
              ФОП може добровільно платити ЄСВ більше мінімуму:
            </p>
            <ul>
              <li>Мінімум: 22% від 1 мінзарплати (1,760 грн/міс)</li>
              <li>Максимум: 22% від 15 мінзарплат (26,400 грн/міс)</li>
            </ul>
            <p>
              <strong>Наприклад:</strong> якщо платити ЄСВ з бази 20,000 грн/міс замість 8,000 грн, 
              пенсія буде в 2.5 рази вища (але й ЄСВ коштуватиме 4,400 грн/міс замість 1,760 грн).
            </p>

            <h3>Стратегія 2: Поєднувати ФОП з найманою роботою</h3>
            <p>
              ЄСВ з обох джерел сумується для розрахунку пенсії. Це дає найвищі виплати.
            </p>

            <h3>Стратегія 3: Максимізувати стаж</h3>
            <p>
              Навіть якщо нема доходу - краще платити мінімальний ЄСВ, ніж пропускати місяці. 
              Кожен місяць без ЄСВ - втрата стажу та зниження майбутньої пенсії.
            </p>

            <h3>Стратегія 4: Недержавні пенсійні фонди (НПФ)</h3>
            <p>
              Додатково до державної пенсії можна відкладати в НПФ:
            </p>
            <ul>
              <li>Добровільні внески (від 100 грн/міс)</li>
              <li>Податкова знижка (20% від внесків)</li>
              <li>Накопичувальна система</li>
              <li>Виплати після досягнення пенсійного віку</li>
            </ul>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0 text-white">Порада від експертів</h2>
              </div>
              <p className="mb-4">
                <strong>Оптимальна стратегія:</strong> платити ЄСВ з бази 15,000-20,000 грн/міс 
                (ЄСВ 3,300-4,400 грн/міс). Це забезпечить комфортну пенсію 8,000-12,000 грн/міс 
                при 30 роках стажу.
              </p>
              <Link
                href="/calculators/esv"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Розрахувати ЄСВ
              </Link>
            </div>

            <h2>Пенсія для ФОП vs найманого працівника</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Параметр</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">ФОП</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Найм. працівник</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Хто платить ЄСВ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Ви самі</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Роботодавець</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Мінімум ЄСВ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">1,760 грн/міс</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Залежить від зарплати</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Контроль розміру</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Повний (можна збільшити)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Залежить від роботодавця</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Соціальні гарантії</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Базові (лікарняні, пенсія)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Повні (відпустка, лікарняні, пенсія)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Очікувана пенсія</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">4,500-15,000 грн</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">6,000-20,000 грн</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Що буде якщо не платити ЄСВ?</h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mt-0 mb-3">Наслідки:</h3>
              <ul className="text-red-800 dark:text-red-200 mb-0">
                <li>❌ Місяці без ЄСВ не зараховуються в стаж</li>
                <li>❌ Знижується розмір майбутньої пенсії</li>
                <li>❌ Немає права на лікарняні та декретні</li>
                <li>❌ При недостатньому стажі - тільки мінімальна соціальна пенсія (3,000-4,000 грн)</li>
                <li>❌ Накопичується борг з пенею</li>
              </ul>
            </div>

            <h2>Часті питання</h2>
            <h3>Чи можна "докупити" пенсійний стаж?</h3>
            <p>
              Ні, напряму купити стаж неможливо. Але можна добровільно сплатити ЄСВ за попередні періоди, 
              коли ви не були ФОП (наприклад, якщо навчались або не працювали). Це дозволить збільшити стаж.
            </p>

            <h3>Як дізнатись свій поточний стаж?</h3>
            <p>
              Зайдіть на портал Пенсійного фонду (portal.pfu.gov.ua) або в додаток Дія → Пенсійний фонд. 
              Там відображається ваш стаж і суми сплаченого ЄСВ.
            </p>

            <h3>Чи можна отримувати пенсію і продовжувати бути ФОП?</h3>
            <p>
              Так! Можна одночасно отримувати пенсію за віком і продовжувати працювати як ФОП. 
              Пенсія при цьому не зменшується (за винятком окремих випадків дострокової пенсії).
            </p>

            <h3>Чи враховуються періоди навчання, армії, декрету?</h3>
            <p>
              Так, деякі періоди зараховуються до стажу навіть без сплати ЄСВ:
            </p>
            <ul>
              <li>Навчання у ВНЗ (до 2004 року)</li>
              <li>Служба в армії</li>
              <li>Догляд за дитиною до 3 років (якщо був ЄСВ до декрету)</li>
              <li>Догляд за інвалідом I групи</li>
            </ul>

            <h2>Висновок та рекомендації</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold mb-4">Що робити вже зараз:</h3>
              <ol className="mb-0 space-y-2">
                <li>
                  <strong>Перевірте свій стаж</strong> через Дію або portal.pfu.gov.ua
                </li>
                <li>
                  <strong>Розрахуйте оптимальний ЄСВ</strong> для комфортної пенсії (калькулятор нижче)
                </li>
                <li>
                  <strong>Не пропускайте місяці</strong> - платіть хоча б мінімальний ЄСВ
                </li>
                <li>
                  <strong>Розгляньте НПФ</strong> як додаткову пенсійну подушку
                </li>
                <li>
                  <strong>Якщо можливо</strong> - поєднуйте ФОП з найманою роботою для максимальної пенсії
                </li>
              </ol>
            </div>

            <p>
              Пам'ятайте: пенсія - це не далеке майбутнє, а те, що формується прямо зараз з кожної сплати ЄСВ. 
              Не економте на собі в майбутньому!
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
