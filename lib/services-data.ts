export interface ServiceData {
  slug: string;
  name: string;
  title: string;
  description: string;
  emoji: string;
  relatedUrl: string;
}

export const servicesData: ServiceData[] = [
  // ==================== КАЛЬКУЛЯТОРИ (10) ====================
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
    slug: 'salary',
    name: 'Зарплата',
    title: 'Калькулятор зарплати',
    description: 'Розрахунок ПДФО, військового збору, ЄСВ — чиста зарплата на руки для найманих працівників.',
    emoji: '�',
    relatedUrl: '/calculators/salary',
  },
  {
    slug: 'margin',
    name: 'Маржа',
    title: 'Калькулятор маржі',
    description: 'Розрахунок прибутку, маржі та наценки для бізнесу. Визначте оптимальну ціну товарів та послуг.',
    emoji: '�',
    relatedUrl: '/calculators/margin',
  },
  {
    slug: 'cash-flow',
    name: 'Cash Flow',
    title: 'Cash Flow калькулятор',
    description: 'Розрахунок грошового потоку та чистого прибутку бізнесу. Контролюйте фінанси підприємства.',
    emoji: '💸',
    relatedUrl: '/calculators/cash-flow',
  },
  {
    slug: 'roi',
    name: 'ROI',
    title: 'ROI калькулятор',
    description: 'Розрахунок повернення інвестицій (Return on Investment). Оцініть ефективність вкладень у бізнес.',
    emoji: '📊',
    relatedUrl: '/calculators/roi',
  },
  {
    slug: 'break-even',
    name: 'Break-Even',
    title: 'Break-Even калькулятор',
    description: 'Розрахунок точки беззбитковості бізнесу. Дізнайтеся коли ваш бізнес почне приносити прибуток.',
    emoji: '🎯',
    relatedUrl: '/calculators/break-even',
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
    slug: 'customs',
    name: 'Розмитнення авто',
    title: 'Калькулятор розмитнення авто',
    description: 'Розрахунок вартості розмитнення автомобіля в Україні. Мито, акциз, ПДВ — точний розрахунок.',
    emoji: '🚗',
    relatedUrl: '/calculators/customs',
  },
  // ==================== ДОКУМЕНТИ (14) ====================
  {
    slug: 'contract',
    name: 'Договір послуг',
    title: 'Договір надання послуг',
    description: 'Створіть договір надання послуг для ФОП за 2 хвилини. Безкоштовний конструктор договорів.',
    emoji: '�',
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
    name: 'Рахунок-фактура',
    title: 'Рахунок-фактура (Invoice)',
    description: 'Створіть двомовний рахунок для експорту послуг (UA/EN). Безкоштовний генератор рахунків.',
    emoji: '�',
    relatedUrl: '/documents/invoice',
  },
  {
    slug: 'rent',
    name: 'Договір оренди житла',
    title: 'Договір оренди житла',
    description: 'Створіть договір найму житлового приміщення онлайн. Безкоштовний конструктор документів.',
    emoji: '🏠',
    relatedUrl: '/documents/rent',
  },
  {
    slug: 'sale',
    name: 'Договір купівлі-продажу',
    title: 'Договір купівлі-продажу',
    description: 'Договір продажу товарів між ФОП та клієнтом. Безкоштовне створення документів для бізнесу.',
    emoji: '�',
    relatedUrl: '/documents/sale',
  },
  {
    slug: 'construction',
    name: 'Договір підряду',
    title: 'Договір підряду',
    description: 'Договір на будівельні та ремонтні роботи. Безкоштовний конструктор для підприємців.',
    emoji: '🔨',
    relatedUrl: '/documents/construction',
  },
  {
    slug: 'employment',
    name: 'Трудовий договір',
    title: 'Трудовий договір / ЦПД',
    description: 'Оформлення найму працівників для ФОП. Трудовий договір та цивільно-правовий договір онлайн.',
    emoji: '�',
    relatedUrl: '/documents/employment',
  },
  {
    slug: 'loan',
    name: 'Договір позики',
    title: 'Договір позики',
    description: 'Договір позики грошей між фізичними особами. Безкоштовний генератор документів.',
    emoji: '🤝',
    relatedUrl: '/documents/loan',
  },
  {
    slug: 'commission',
    name: 'Договір комісії',
    title: 'Договір комісії',
    description: 'Договір продажу через посередника (дропшиппінг). Безкоштовний конструктор для підприємців.',
    emoji: '🛍️',
    relatedUrl: '/documents/commission',
  },
  {
    slug: 'nda',
    name: 'Договір NDA',
    title: 'Договір NDA (нерозголошення)',
    description: 'Договір про нерозголошення конфіденційної інформації. Захистіть свій бізнес безкоштовно.',
    emoji: '�',
    relatedUrl: '/documents/nda',
  },
  {
    slug: 'commercial-rent',
    name: 'Оренда приміщення',
    title: 'Оренда нежитлового приміщення',
    description: 'Договір оренди офісу, магазину, складу. Безкоштовний конструктор документів для бізнесу.',
    emoji: '🏢',
    relatedUrl: '/documents/commercial-rent',
  },
  {
    slug: 'franchise',
    name: 'Договір франшизи',
    title: 'Договір франшизи',
    description: 'Договір передачі прав на бізнес-модель. Безкоштовний конструктор франчайзингових договорів.',
    emoji: '🏆',
    relatedUrl: '/documents/franchise',
  },
  {
    slug: 'transportation',
    name: 'Договір перевезення',
    title: 'Договір перевезення',
    description: 'Договір доставки вантажу. Безкоштовний конструктор транспортних договорів для підприємців.',
    emoji: '🚚',
    relatedUrl: '/documents/transportation',
  },
  {
    slug: 'storage',
    name: 'Договір зберігання',
    title: 'Договір зберігання',
    description: 'Договір складських послуг. Безкоштовний конструктор документів для зберігання товарів.',
    emoji: '�',
    relatedUrl: '/documents/storage',
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
