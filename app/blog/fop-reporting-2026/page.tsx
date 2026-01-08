import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, FileCheck, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Звітність ФОП у 2026 році: терміни, декларації, штрафи | ФОП Помічник',
  description: 'Повний гайд по звітності ФОП у 2026: які декларації подавати, коли і куди. Терміни подання, штрафи за порушення, особливості для кожної групи.',
  keywords: 'звітність ФОП, декларація ФОП, терміни подання, податкова звітність, єдиний податок звіт',
  openGraph: {
    title: 'Звітність ФОП у 2026 році: повний гайд',
    description: 'Все про податкову звітність для ФОП: терміни, декларації, штрафи',
    type: 'article',
    publishedTime: '2026-01-08',
  }
}

export default function FopReportingPage() {
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
              Звітність ФОП у 2026 році: що, коли і як подавати
            </h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 text-sm">
              <time dateTime="2026-01-08">8 січня 2026</time>
              <span>•</span>
              <span>Читання: 8 хв</span>
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mt-0 mb-2">Важливо!</h3>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-0">
                    Несвоєчасна подача звітності загрожує штрафами від 170 до 1,020 грн за кожен документ. 
                    Повторні порушення можуть призвести до блокування рахунків!
                  </p>
                </div>
              </div>
            </div>

            <h2>Які декларації подає ФОП у 2026 році?</h2>
            <p>
              Звітність ФОП залежить від обраної групи єдиного податку. Основні види звітності:
            </p>

            <h3>1-2 група ФОП</h3>
            <ul>
              <li><strong>Декларація єдиного податку</strong> - 1 раз на рік (до 10 лютого)</li>
              <li><strong>Звіт з ЄСВ</strong> - щомісяця (до 20 числа наступного місяця)</li>
            </ul>

            <h3>3 група ФОП</h3>
            <ul>
              <li><strong>Декларація єдиного податку</strong> - щоквартально (протягом 40 днів після закінчення кварталу)</li>
              <li><strong>Звіт з ЄСВ</strong> - щомісяця (до 20 числа)</li>
              <li><strong>Звіт з ПДФО</strong> (якщо є наймані працівники) - щоквартально</li>
            </ul>

            <h2>Календар звітності ФОП на 2026 рік</h2>
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold m-0">Основні терміни 2026</h3>
              </div>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-bold mb-1">До 10 лютого</p>
                  <p className="mb-0">Декларація єдиного податку за 2025 рік (1-2 група)</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-bold mb-1">Щомісяця до 20 числа</p>
                  <p className="mb-0">Звіт з ЄСВ за попередній місяць</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-bold mb-1">Щоквартально (3 група)</p>
                  <p className="mb-0">
                    • До 10 травня (за I квартал)<br/>
                    • До 9 серпня (за II квартал)<br/>
                    • До 9 листопада (за III квартал)<br/>
                    • До 9 лютого 2027 (за IV квартал)
                  </p>
                </div>
              </div>
            </div>

            <h2>Як подати декларацію ФОП?</h2>
            <h3>Спосіб 1: Електронно через Дію (рекомендовано)</h3>
            <ol>
              <li>Зайдіть в додаток Дія або на портал diia.gov.ua</li>
              <li>Оберіть розділ "Податки"</li>
              <li>Натисніть "Подати декларацію"</li>
              <li>Заповніть дані (дохід, витрати, ставка податку)</li>
              <li>Підпишіть електронним підписом</li>
              <li>Отримайте підтвердження</li>
            </ol>

            <h3>Спосіб 2: Особисто в податковій</h3>
            <ul>
              <li>Роздрукуйте заповнену декларацію (форма доступна на сайті ДПС)</li>
              <li>Візьміть паспорт та ІПН</li>
              <li>Подайте документи в податкову інспекцію за місцем реєстрації</li>
              <li>Отримайте відмітку про прийняття</li>
            </ul>

            <h3>Спосіб 3: Через кабінет платника податків</h3>
            <ul>
              <li>Зайдіть на cabinet.tax.gov.ua</li>
              <li>Авторизуйтесь через ЕЦП або BankID</li>
              <li>Оберіть "Створити звіт"</li>
              <li>Заповніть та надішліть</li>
            </ul>

            <h2>Що потрібно вказувати в декларації?</h2>
            <h3>Для 1-2 групи (річна декларація)</h3>
            <ul>
              <li>Загальний дохід за рік</li>
              <li>Обрана ставка єдиного податку</li>
              <li>Сума сплаченого податку</li>
              <li>КВЕД (код виду діяльності)</li>
            </ul>

            <h3>Для 3 групи (квартальна декларація)</h3>
            <ul>
              <li>Дохід за квартал</li>
              <li>Витрати (якщо є)</li>
              <li>База оподаткування</li>
              <li>Сума податку до сплати</li>
              <li>Авансовий внесок (якщо потрібно)</li>
            </ul>

            <h2>Звіт з ЄСВ - щомісячний обов'язок</h2>
            <p>
              ФОП зобов'язані щомісяця подавати звіт до Пенсійного фонду про сплату ЄСВ, 
              навіть якщо не було доходу або діяльності.
            </p>

            <h3>Як подати звіт з ЄСВ:</h3>
            <ol>
              <li>Зайдіть на сайт tax.gov.ua або portal.pfu.gov.ua</li>
              <li>Оберіть форму Д5 (для ФОП без найманих) або Д4 (з найманими)</li>
              <li>Вкажіть базу нарахування (мінімум 1 мінімальна зарплата)</li>
              <li>Вкажіть суму нарахованого ЄСВ (22%)</li>
              <li>Підпишіть та надішліть</li>
            </ol>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mt-0">Штрафи за несвоєчасну звітність</h3>
              <ul className="text-red-800 dark:text-red-200 mb-0">
                <li>Перше порушення: 170 грн за кожен документ</li>
                <li>Повторне (протягом року): 1,020 грн</li>
                <li>Затримка більше 30 днів: можливе блокування рахунків</li>
                <li>Систематичні порушення: штраф до 5,100 грн</li>
              </ul>
            </div>

            <h2>Нульова звітність - коли і навіщо</h2>
            <p>
              Якщо протягом звітного періоду у вас не було доходу або ви не вели діяльність, 
              все одно потрібно подавати "нульову" декларацію з відміткою про відсутність доходу.
            </p>

            <h3>Для чого потрібна нульова звітність?</h3>
            <ul>
              <li>Підтвердити відсутність діяльності перед податковою</li>
              <li>Уникнути штрафів за неподання звітності</li>
              <li>Зберегти статус ФОП без закриття</li>
            </ul>

            <h2>Особливості звітності для IT-фрілансерів</h2>
            <p>
              ФОП на 2-3 групі, які працюють з іноземними замовниками, повинні додатково:
            </p>
            <ul>
              <li>Вести облік валютних надходжень</li>
              <li>Зберігати копії договорів та актів</li>
              <li>Вказувати джерело доходу (країна клієнта)</li>
              <li>При доході понад 400 тис грн/рік - декларувати активи</li>
            </ul>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-xl my-8">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-8 h-8" />
                <h2 className="text-2xl font-bold m-0 text-white">Корисні інструменти</h2>
              </div>
              <p className="mb-6">
                Скористайтесь нашими калькуляторами для точного розрахунку податків та генерації документів
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/calculators/fop-tax"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Розрахувати податки
                </Link>
                <Link
                  href="/calculators/penalty"
                  className="bg-white/10 text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Калькулятор штрафів
                </Link>
              </div>
            </div>

            <h2>Чеклист звітності на 2026 рік</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Що зробити обов'язково:</h3>
              <ul className="space-y-2 mb-0">
                <li>✅ Визначити свою групу ФОП</li>
                <li>✅ Встановити нагадування про терміни звітності</li>
                <li>✅ Отримати електронний підпис або BankID</li>
                <li>✅ Вести облік доходів (табличка Excel або додаток)</li>
                <li>✅ Зберігати всі договори та акти мінімум 3 роки</li>
                <li>✅ Сплачувати податки вчасно</li>
                <li>✅ Подавати звітність навіть при нульовому доході</li>
              </ul>
            </div>

            <h2>Часті помилки при поданні звітності</h2>
            <ul>
              <li><strong>Помилка в КВЕДах</strong> - перевірте відповідність вашого виду діяльності</li>
              <li><strong>Неправильна сума доходу</strong> - враховуйте ВСІ надходження на рахунок</li>
              <li><strong>Пропущені терміни</strong> - користуйтесь календарем-нагадувачем</li>
              <li><strong>Відсутність підтверджувальних документів</strong> - зберігайте все</li>
            </ul>

            <h2>Висновок</h2>
            <p>
              Своєчасна та правильна звітність - запорука спокою та відсутності проблем з податковою. 
              Використовуйте сучасні інструменти (Дія, електронний кабінет), ведіть облік доходів 
              та не забувайте про терміни. При великих обсягах доходу або складній діяльності - 
              краще звернутись до бухгалтера.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
