export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  description: string;
  emoji: string;
  relatedUrl: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: 'fop-tax',
    name: 'Податки ФОП',
    title: 'Розрахунок податків для ФОП',
    description: 'Калькулятор єдиного податку для підприємців. Розрахуйте податки для 1, 2 та 3 групи ФОП онлайн.',
    emoji: '💰',
    relatedUrl: '/calculators/fop-tax',
  },
  {
    slug: 'esv',
    name: 'ЄСВ',
    title: 'Розрахунок ЄСВ',
    description: 'Калькулятор єдиного соціального внеску. Автоматичний розрахунок ЄСВ для підприємців.',
    emoji: '🏥',
    relatedUrl: '/calculators/esv',
  },
  {
    slug: 'contract',
    name: 'Договір',
    title: 'Договір надання послуг',
    description: 'Створіть договір надання послуг для ФОП за 2 хвилини. Безкоштовний конструктор договорів.',
    emoji: '📄',
    relatedUrl: '/documents/contract',
  },
  {
    slug: 'act',
    name: 'Акт робіт',
    title: 'Акт виконаних робіт',
    description: 'Генератор актів виконаних робіт для ФОП. Створіть акт приймання-передачі послуг онлайн.',
    emoji: '📋',
    relatedUrl: '/documents/act',
  },
  {
    slug: 'invoice',
    name: 'Рахунок',
    title: 'Рахунок на оплату',
    description: 'Створіть рахунок-фактуру для клієнтів. Безкоштовний генератор рахунків для підприємців.',
    emoji: '💳',
    relatedUrl: '/documents/invoice',
  },
  {
    slug: 'penalty',
    name: 'Пеня',
    title: 'Розрахунок пені та штрафів',
    description: 'Калькулятор пені за несвоєчасну сплату податків. Розрахунок штрафів для ФОП онлайн.',
    emoji: '⚠️',
    relatedUrl: '/calculators/penalty',
  },
  {
    slug: 'vacation',
    name: 'Відпускні',
    title: 'Розрахунок відпускних',
    description: 'Калькулятор відпускних для найманих працівників. Автоматичний розрахунок виплат за відпустку.',
    emoji: '🏖️',
    relatedUrl: '/calculators/vacation',
  },
  {
    slug: 'open-fop',
    name: 'Відкрити ФОП',
    title: 'Як відкрити ФОП',
    description: 'Покрокова інструкція відкриття ФОП через Дію. Документи, терміни, вартість реєстрації підприємця.',
    emoji: '🚀',
    relatedUrl: '/blog/open-fop-diya',
  },
  {
    slug: 'taxes-2026',
    name: 'Податки 2026',
    title: 'Податки для ФОП у 2026 році',
    description: 'Актуальна інформація про податки для підприємців у 2026 році. Ставки, групи, зміни в законодавстві.',
    emoji: '📊',
    relatedUrl: '/blog/fop-taxes-2026',
  },
  {
    slug: 'upwork',
    name: 'Upwork/Fiverr',
    title: 'ФОП для Upwork та Fiverr',
    description: 'Як працювати на Upwork та Fiverr через ФОП. Оподаткування фрілансерів, експорт послуг у 2026.',
    emoji: '💻',
    relatedUrl: '/blog/upwork-fiverr-2026',
  },
  {
    slug: 'accounting',
    name: 'Бухгалтерія',
    title: 'Бухгалтерський облік для ФОП',
    description: 'Як вести бухгалтерію підприємця. Звітність ФОП, декларації, книга обліку доходів та витрат.',
    emoji: '📚',
    relatedUrl: '/blog',
  },
  {
    slug: 'bank-account',
    name: 'Рахунок у банку',
    title: 'Відкриття рахунку для ФОП',
    description: 'Як відкрити банківський рахунок для ФОП. Порівняння банків, тарифи, документи для підприємців.',
    emoji: '🏦',
    relatedUrl: '/blog',
  },
  {
    slug: 'insurance',
    name: 'Страхування',
    title: 'Страхування для підприємців',
    description: 'Добровільне страхування ФОП. Медичне страхування, страхування бізнесу, відповідальності підприємця.',
    emoji: '🛡️',
    relatedUrl: '/blog',
  },
  {
    slug: 'close-fop',
    name: 'Закрити ФОП',
    title: 'Як закрити ФОП',
    description: 'Покрокова інструкція закриття ФОП. Документи, борги, процедура припинення підприємницької діяльності.',
    emoji: '🔚',
    relatedUrl: '/blog',
  },
  {
    slug: 'patents',
    name: 'Патент',
    title: 'Патент для підприємців',
    description: 'Патентна система оподаткування для ФОП. Вартість патенту, види діяльності, переваги та недоліки.',
    emoji: '📜',
    relatedUrl: '/blog',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
