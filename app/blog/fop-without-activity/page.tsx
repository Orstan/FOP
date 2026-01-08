import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, PauseCircle, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ФОП без діяльності: чи потрібно платити податки у 2026 році | ФОП Помічник',
  description: 'Що робити якщо ФОП не працює: чи потрібно платити єдиний податок та ЄСВ, як подавати нульову звітність. Скільки коштує утримання неактивного ФОП.',
  keywords: 'ФОП без діяльності, нульова звітність ФОП, ФОП не працює, податки при відсутності доходу',
  openGraph: {
    title: 'ФОП без діяльності: податки та звітність у 2026 році',
    description: 'Детальний гайд про утримання неактивного ФОП та обов\'язкові платежі',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function FopWithoutActivityPage() {
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
              ФОП без діяльності: чи потрібно платити податки у 2026?
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 7 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Багато ФОП стикаються з ситуацією, коли діяльність тимчасово призупинена: немає замовлень, 
              відпустка, зміна напрямку роботи. Розберемось чи потрібно платити податки при відсутності доходу 
              та як правильно вести облік.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mt-0 mb-2">Коротка відповідь</h3>
              <p className="text-yellow-800 dark:text-yellow-200 mb-0">
                <strong>Єдиний податок платити НЕ потрібно</strong> (якщо немає доходу), 
                але <strong>ЄСВ обов'язковий</strong> - мінімум 1,760 грн/міс. 
                Також потрібно подавати "нульову" звітність.
              </p>
            </div>

            <h2>Що таке ФОП без діяльності?</h2>
            <p>
              ФОП без діяльності - це зареєстрований підприємець, який:
            </p>
            <ul>
              <li>Не має доходу від підприємницької діяльності</li>
              <li>Не укладає договори з клієнтами</li>
              <li>Не надає послуги та не продає товари</li>
              <li>НЕ отримує кошти на рахунок (або отримує але не від бізнесу)</li>
            </ul>

            <h2>Які податки потрібно платити без доходу?</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Податок / Платіж</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Чи обов'язковий?</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Сума</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Єдиний податок (1-2 група)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-green-600 dark:text-green-400">❌ НІ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">0 грн</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Єдиний податок (3 група)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-green-600 dark:text-green-400">❌ НІ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">0 грн</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">ЄСВ (обов'язковий)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-red-600 dark:text-red-400">✅ ТАК</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">~1,760 грн/міс</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 font-medium">Військовий збір</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-green-600 dark:text-green-400">❌ НІ</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">0 грн</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Чому ЄСВ обов'язковий навіть без доходу?</h2>
            <p>
              Єдиний соціальний внесок (ЄСВ) - це не податок, а внесок до системи соціального страхування. 
              Він забезпечує:
            </p>
            <ul>
              <li>📊 Формування пенсійного стажу</li>
              <li>🏥 Право на безкоштовну медицину</li>
              <li>👶 Декретні виплати (для жінок)</li>
              <li>🤕 Лікарняні виплати</li>
              <li>💰 Допомогу по безробіттю (після закриття ФОП)</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold mb-4">Розмір ЄСВ у 2026 році</h3>
              <p className="mb-2">
                <strong>Мінімальна база:</strong> 1 мінімальна зарплата = 8,000 грн (приблизно)<br/>
                <strong>Ставка ЄСВ:</strong> 22%<br/>
                <strong>Мінімальний платіж:</strong> 8,000 × 22% = <strong>1,760 грн/міс</strong>
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-0">
                * Можна платити більше для збільшення майбутньої пенсії
              </p>
            </div>

            <h2>Нульова звітність - що це і як подавати?</h2>
            <p>
              Нульова звітність - декларація, де вказується відсутність доходу за звітний період.
            </p>

            <h3>Для 1-2 групи ФОП (1 раз на рік):</h3>
            <ol>
              <li>Заповніть декларацію єдиного податку до 10 лютого наступного року</li>
              <li>У полі "Дохід" вкажіть 0 або залиште порожнім</li>
              <li>Поставте відмітку "без діяльності" (якщо є така опція)</li>
              <li>Підпишіть та подайте через Дію або електронний кабінет</li>
            </ol>

            <h3>Для 3 групи ФОП (щокварталу):</h3>
            <ol>
              <li>Подавайте нульову декларацію протягом 40 днів після закінчення кварталу</li>
              <li>Вкажіть дохід = 0, витрати = 0</li>
              <li>База оподаткування = 0</li>
              <li>Податок до сплати = 0</li>
            </ol>

            <h3>Звіт з ЄСВ (щомісяця для всіх груп):</h3>
            <ol>
              <li>Подавайте до 20 числа наступного місяця</li>
              <li>Вкажіть базу нарахування (мінімум 1 мінзарплата)</li>
              <li>ЄСВ до сплати = база × 22%</li>
              <li>Обов'язково платіть цю суму навіть при нульовому доході!</li>
            </ol>

            <h2>Скільки коштує утримання неактивного ФОП?</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-6">
              <h3 className="text-xl font-bold mb-4">Річні витрати:</h3>
              <ul className="space-y-2">
                <li>
                  <strong>ЄСВ:</strong> 1,760 грн/міс × 12 = <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">21,120 грн/рік</span>
                </li>
                <li>
                  <strong>Єдиний податок:</strong> 0 грн (при відсутності доходу)
                </li>
                <li>
                  <strong>Обслуговування рахунку:</strong> 0-600 грн/рік (залежить від банку)
                </li>
              </ul>
              <p className="text-lg font-bold mt-4 pt-4 border-t border-slate-300 dark:border-slate-700 mb-0">
                ВСЬОГО: близько <span className="text-2xl text-blue-600 dark:text-blue-400">21,000-22,000 грн/рік</span>
              </p>
            </div>

            <h2>Що буде якщо не платити ЄСВ?</h2>
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mt-0 mb-3">Наслідки несплати ЄСВ:</h3>
              <ul className="text-red-800 dark:text-red-200 mb-0 space-y-2">
                <li>📉 Не зараховується пенсійний стаж</li>
                <li>🚫 Втрата права на лікарняні та декретні</li>
                <li>💸 Нарахування пені (0.01% за кожен день затримки)</li>
                <li>⚠️ Штрафи від Пенсійного фонду</li>
                <li>🔒 Можливе блокування рахунків при великій заборгованості</li>
                <li>❌ Проблеми при закритті ФОП (не дадуть закрити з боргами)</li>
              </ul>
            </div>

            <h2>Альтернативи утриманню неактивного ФОП</h2>
            
            <h3>Варіант 1: Закрити ФОП</h3>
            <p><strong>Плюси:</strong></p>
            <ul>
              <li>✅ Не потрібно платити ЄСВ</li>
              <li>✅ Не потрібно подавати звітність</li>
              <li>✅ Закриття безкоштовне через Дію</li>
            </ul>
            <p><strong>Мінуси:</strong></p>
            <ul>
              <li>❌ При поновленні - повторна реєстрація</li>
              <li>❌ Втрата діючих договорів</li>
            </ul>

            <h3>Варіант 2: Залишити ФОП відкритим</h3>
            <p><strong>Плюси:</strong></p>
            <ul>
              <li>✅ Можна в будь-який момент повернутись до роботи</li>
              <li>✅ Зберігаються договори з клієнтами</li>
              <li>✅ Йде пенсійний стаж</li>
            </ul>
            <p><strong>Мінуси:</strong></p>
            <ul>
              <li>❌ Витрати ~21,000 грн/рік на ЄСВ</li>
              <li>❌ Потрібно подавати нульову звітність</li>
            </ul>

            <h3>Варіант 3: Мінімальна діяльність</h3>
            <p>
              Можна періодично отримувати невеликий дохід (наприклад, 10-20 тис грн/рік), 
              щоб покрити витрати на ЄСВ та зберегти активність ФОП.
            </p>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <PauseCircle className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0 text-white">Калькулятор витрат</h2>
              </div>
              <p className="mb-6">
                Розрахуйте точні витрати на утримання ФОП без діяльності та порівняйте з вашою ситуацією
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/calculators/esv"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Калькулятор ЄСВ
                </Link>
                <Link
                  href="/blog/close-fop-2026"
                  className="bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Як закрити ФОП
                </Link>
              </div>
            </div>

            <h2>Коли вигідно зберігати ФОП без діяльності?</h2>
            <ul>
              <li>✅ Плануєте повернутись до роботи протягом 3-6 місяців</li>
              <li>✅ Є постійні клієнти, які можуть повернутись</li>
              <li>✅ Важливий пенсійний стаж</li>
              <li>✅ Маєте діючі довгострокові договори</li>
              <li>✅ Витрати 21,000 грн/рік для вас прийнятні</li>
            </ul>

            <h2>Коли краще закрити ФОП?</h2>
            <ul>
              <li>✅ Не плануєте повертатись до підприємництва найближчий рік</li>
              <li>✅ Перейшли на найману роботу</li>
              <li>✅ Відкрили ТОВ</li>
              <li>✅ Переїхали за кордон</li>
              <li>✅ Витрати 21,000 грн/рік важкі для бюджету</li>
            </ul>

            <h2>Часті питання</h2>
            <h3>Чи можна не платити ЄСВ взагалі?</h3>
            <p>
              Ні. ЄСВ обов'язковий для всіх зареєстрованих ФОП, незалежно від наявності доходу. 
              Це закон, за порушення якого передбачені штрафи та пеня.
            </p>

            <h3>Що якщо я забув подати нульову декларацію?</h3>
            <p>
              Передбачений штраф 170 грн за перше порушення, 1,020 грн за повторне протягом року. 
              Подайте декларацію якнайшвидше щоб уникнути більших штрафів.
            </p>

            <h3>Скільки місяців можна не платити ЄСВ?</h3>
            <p>
              Жодного. ЄСВ нараховується щомісяця з моменту реєстрації ФОП і до закриття. 
              Навіть якщо не платити, борг накопичується з пенею.
            </p>

            <h2>Висновок</h2>
            <p>
              Утримання ФОП без діяльності коштує близько 21,000 грн/рік тільки на ЄСВ. 
              Якщо плануєте повернутись до роботи найближчі місяці - залишайте відкритим. 
              Якщо перерва буде довгою (рік і більше) - краще закрити через Дію безкоштовно 
              та зареєструвати знову коли знадобиться.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
