import { Metadata } from 'next'
import Link from 'next/link'
import { XCircle, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Як закрити ФОП у 2026 році: покрокова інструкція | ФОП Помічник',
  description: 'Повний гайд по закриттю ФОП: необхідні документи, терміни, борги, штрафи. Як закрити ФОП через Дію та податкову. Скільки коштує закриття ФОП.',
  keywords: 'закрити ФОП, ліквідація ФОП, закриття підприємця, як закрити ФОП через Дію, документи для закриття ФОП',
  openGraph: {
    title: 'Як закрити ФОП у 2026 році: покрокова інструкція',
    description: 'Все про закриття ФОП: документи, терміни, борги та способи закриття',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function CloseFopPage() {
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
              Як закрити ФОП у 2026 році: покрокова інструкція
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 9 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              Закриття ФОП - процедура добровільної ліквідації статусу фізичної особи-підприємця. 
              У 2026 році процес максимально спрощений та може бути виконаний онлайн через Дію за 1 день.
            </p>

            <h2>Чому закривають ФОП?</h2>
            <ul>
              <li>Перехід на найману роботу</li>
              <li>Відкриття ТОВ замість ФОП</li>
              <li>Зміна виду діяльності (що не підходить для ФОП)</li>
              <li>Переїзд за кордон</li>
              <li>Низька рентабельність бізнесу</li>
              <li>Бажання уникнути зайвих податків при відсутності доходу</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mt-0 mb-2">Важливо знати!</h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-0">
                    Закриття ФОП можливе тільки при відсутності боргів перед бюджетом та працівниками. 
                    Спочатку погасіть всі заборгованості, потім подавайте заяву на закриття.
                  </p>
                </div>
              </div>
            </div>

            <h2>Спосіб 1: Закрити ФОП через Дію (найпростіше)</h2>
            <h3>Покрокова інструкція:</h3>
            <ol>
              <li>
                <strong>Відкрийте додаток Дія</strong> або зайдіть на diia.gov.ua
              </li>
              <li>
                <strong>Оберіть розділ "Підприємцям"</strong> → "Закрити ФОП"
              </li>
              <li>
                <strong>Перевірте статус боргів</strong> - система автоматично покаже заборгованості
              </li>
              <li>
                <strong>Погасіть борги</strong> (якщо є) через систему онлайн-платежів
              </li>
              <li>
                <strong>Заповніть заяву</strong> про державну реєстрацію припинення підприємницької діяльності
              </li>
              <li>
                <strong>Підпишіть електронним підписом</strong> (Дія.Підпис або КЕП)
              </li>
              <li>
                <strong>Отримайте витяг</strong> про закриття ФОП (зазвичай протягом 1-2 робочих днів)
              </li>
            </ol>

            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg my-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold m-0">Переваги закриття через Дію:</h3>
              </div>
              <ul className="mb-0">
                <li>✅ Безкоштовно</li>
                <li>✅ Без черг та візитів до податкової</li>
                <li>✅ Швидко (1-2 дні)</li>
                <li>✅ Автоматична перевірка боргів</li>
                <li>✅ Електронний витяг одразу в Дії</li>
              </ul>
            </div>

            <h2>Спосіб 2: Закриття через податкову (особисто)</h2>
            <h3>Необхідні документи:</h3>
            <ul>
              <li>Паспорт громадянина України</li>
              <li>Ідентифікаційний код (ІПН)</li>
              <li>Заява про державну реєстрацію припинення підприємницької діяльності (форма № Р0007)</li>
              <li>Довідка про відсутність боргів з ЄСВ (отримується в Пенсійному фонді)</li>
            </ul>

            <h3>Алгоритм дій:</h3>
            <ol>
              <li>
                <strong>Подайте останню декларацію</strong> з єдиного податку
              </li>
              <li>
                <strong>Сплатіть всі податки та ЄСВ</strong>
              </li>
              <li>
                <strong>Отримайте довідку</strong> про відсутність боргів з ЄСВ у Пенсійному фонді
              </li>
              <li>
                <strong>Заповніть заяву</strong> форми № Р0007
              </li>
              <li>
                <strong>Подайте документи</strong> до податкової інспекції за місцем реєстрації
              </li>
              <li>
                <strong>Отримайте витяг</strong> про припинення підприємницької діяльності (протягом 2-3 днів)
              </li>
            </ol>

            <h2>Що робити з боргами перед закриттям?</h2>
            <h3>Види заборгованостей:</h3>
            
            <h4>1. Борги по єдиному податку</h4>
            <ul>
              <li>Перевірте через кабінет платника на cabinet.tax.gov.ua</li>
              <li>Сплатіть всю суму з пенею</li>
              <li>Зачекайте 2-3 дні поки інформація оновиться в системі</li>
            </ul>

            <h4>2. Борги по ЄСВ</h4>
            <ul>
              <li>Перевірте на portal.pfu.gov.ua</li>
              <li>Сплатіть заборгованість + пеню (0.01% за кожен день затримки)</li>
              <li>Отримайте довідку про відсутність боргу</li>
            </ul>

            <h4>3. Борги перед працівниками</h4>
            <ul>
              <li>Виплатіть всю заборгованість по зарплаті</li>
              <li>Розрахуйте компенсацію за невикористану відпустку</li>
              <li>Подайте звільнювальні документи</li>
            </ul>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mt-0">Що буде якщо не погасити борги?</h3>
              <ul className="text-red-800 dark:text-red-200 mb-0">
                <li>❌ Податкова відмовить у закритті ФОП</li>
                <li>❌ Борги продовжать нараховуватись з пенею</li>
                <li>❌ Можливе стягнення через суд</li>
                <li>❌ Обмеження на виїзд за кордон (при великих боргах)</li>
                <li>❌ Арешт майна</li>
              </ul>
            </div>

            <h2>Терміни закриття ФОП у 2026 році</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Спосіб закриття</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Термін</th>
                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left">Вартість</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Через Дію (онлайн)</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">1-2 робочих дні</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Безкоштовно</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Особисто в податковій</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">2-3 робочих дні</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Безкоштовно</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">Через нотаріуса</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">1 робочий день</td>
                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-3">500-1000 грн</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Чи потрібна фінальна декларація?</h2>
            <p>
              <strong>Так!</strong> Перед закриттям ФОП обов'язково потрібно подати останню декларацію з єдиного податку:
            </p>
            <ul>
              <li><strong>1-2 група:</strong> річна декларація за весь період роботи у поточному році</li>
              <li><strong>3 група:</strong> квартальна декларація за останній завершений квартал</li>
            </ul>
            <p>
              У декларації вкажіть весь дохід, який отримали до дня подачі заяви на закриття.
            </p>

            <h2>Що станеться після закриття ФОП?</h2>
            <h3>Позитивні моменти:</h3>
            <ul>
              <li>✅ Не потрібно платити єдиний податок та ЄСВ</li>
              <li>✅ Не потрібно подавати звітність</li>
              <li>✅ Знімається відповідальність як підприємця</li>
              <li>✅ Можна відкрити ФОП знову будь-коли</li>
            </ul>

            <h3>Що потрібно врахувати:</h3>
            <ul>
              <li>⚠️ Всі договори з контрагентами стають недійсними</li>
              <li>⚠️ Втрачається можливість працювати як ФОП (потрібна нова реєстрація)</li>
              <li>⚠️ При роботі з іноземними платформами потрібен інший спосіб виведення коштів</li>
              <li>⚠️ Закрийте або переоформіть бізнес-рахунки в банку</li>
            </ul>

            <h2>Чи можна закрити ФОП під час мобілізації?</h2>
            <p>
              Так, можна. Закон не забороняє закриття ФОП під час воєнного стану. 
              Процедура залишається стандартною - через Дію або податкову після погашення боргів.
            </p>

            <h2>Альтернатива закриттю - призупинення діяльності</h2>
            <p>
              Якщо ви плануєте відновити бізнес через деякий час, можна не закривати ФОП, а просто:
            </p>
            <ul>
              <li>Не вести діяльність (не отримувати дохід)</li>
              <li>Подавати "нульові" декларації</li>
              <li>Сплачувати мінімальний ЄСВ (~1,760 грн/міс)</li>
            </ul>
            <p>
              <strong>Коли це вигідно:</strong> якщо ви плануєте повернутись до підприємництва протягом 6-12 місяців.
            </p>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0 text-white">Перед закриттям - розрахуйте борги</h2>
              </div>
              <p className="mb-6">
                Використайте наші калькулятори для точного розрахунку всіх платежів перед закриттям ФОП
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/calculators/fop-tax"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                >
                  Калькулятор податків
                </Link>
                <Link
                  href="/calculators/penalty"
                  className="bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Розрахунок пені
                </Link>
              </div>
            </div>

            <h2>Чеклист перед закриттям ФОП</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <ul className="space-y-2 mb-0">
                <li>□ Завершити всі активні проекти та отримати розрахунки</li>
                <li>□ Повідомити клієнтів про закриття ФОП</li>
                <li>□ Подати останню декларацію з єдиного податку</li>
                <li>□ Сплатити всі податки та ЄСВ</li>
                <li>□ Звільнити працівників (якщо є) та виплатити зарплату</li>
                <li>□ Отримати довідку про відсутність боргів з ЄСВ</li>
                <li>□ Перевірити статус боргів через Дію або cabinet.tax.gov.ua</li>
                <li>□ Подати заяву про закриття через Дію або податкову</li>
                <li>□ Отримати витяг про припинення підприємницької діяльності</li>
                <li>□ Закрити або переоформити бізнес-рахунок у банку</li>
              </ul>
            </div>

            <h2>Висновок</h2>
            <p>
              Закриття ФОП у 2026 році - проста та швидка процедура, особливо через Дію. 
              Головне - погасити всі борги перед бюджетом та працівниками. Весь процес займає 
              1-3 робочих дні і є безкоштовним. Якщо плануєте повернутись - можна просто призупинити 
              діяльність замість повного закриття.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
