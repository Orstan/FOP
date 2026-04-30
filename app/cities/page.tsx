import { Metadata } from 'next';
import Link from 'next/link';
import { citiesData } from '@/lib/cities-data';
import { MapPin, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ФОП у Містах України - Калькулятори та Документи для Підприємців | ФОП Помічник',
  description: 'Безкоштовні інструменти для підприємців у всіх містах України. Калькулятори податків, конструктор договорів, акти та рахунки. Оберіть своє місто для отримання локальної інформації про підприємництво.',
  keywords: [
    'ФОП Україна',
    'підприємництво в Україні',
    'відкрити ФОП',
    'податки ФОП міста',
    'калькулятор податків',
    'документи для бізнесу',
    'ЄСВ розрахунок',
    'міста України',
    'бізнес консультації',
  ],
  alternates: {
    canonical: '/cities',
  },
  openGraph: {
    title: 'ФОП у Містах України - Інструменти для Підприємців',
    description: 'Безкоштовні калькулятори податків та документи для ФОП у всіх містах України',
    type: 'website',
    locale: 'uk_UA',
    url: '/cities',
  },
};

export default function CitiesPage() {
  const sortedCities = [...citiesData].sort((a, b) => b.population - a.population);
  
  const regions = Array.from(new Set(citiesData.map(city => city.region))).sort();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ФОП у Містах України',
    description: 'Інформація для підприємців у всіх містах України',
    url: 'https://www.fop-help.com/cities',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Головна',
          item: 'https://www.fop-help.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Міста',
          item: 'https://www.fop-help.com/cities',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                <MapPin className="h-10 w-10" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ФОП у Містах України
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Безкоштовні інструменти та документи для підприємців у {citiesData.length}+ містах України. 
                Калькулятори податків, конструктор договорів та експертні поради для вашого бізнесу.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>{citiesData.length} міст</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{regions.length} регіонів</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Оберіть своє місто
                </h2>
                <p className="text-muted-foreground">
                  Натисніть на своє місто, щоб отримати інформацію про підприємництво, податки ФОП та доступні інструменти
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sortedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/cities/${city.slug}`}
                    className="group block bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {city.name}
                      </h3>
                      <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {city.region}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Населення: {city.population.toLocaleString('uk-UA')}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Міста за регіонами України
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region) => {
                  const regionCities = citiesData.filter(city => city.region === region);
                  return (
                    <div key={region} className="bg-card border rounded-lg p-5">
                      <h3 className="font-semibold text-lg mb-3 text-primary">
                        {region}
                      </h3>
                      <ul className="space-y-2">
                        {regionCities.slice(0, 5).map((city) => (
                          <li key={city.slug}>
                            <Link
                              href={`/cities/${city.slug}`}
                              className="text-sm hover:text-primary hover:underline transition-colors"
                            >
                              {city.name} ({city.population.toLocaleString('uk-UA', { notation: 'compact' })})
                            </Link>
                          </li>
                        ))}
                        {regionCities.length > 5 && (
                          <li className="text-sm text-muted-foreground">
                            + ще {regionCities.length - 5} міст
                          </li>
                        )}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Чому обирають ФОП Помічник?
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  ФОП Помічник — це безкоштовна платформа для підприємців України, яка надає:
                </p>

                <ul className="space-y-2 mb-6">
                  <li>✅ <strong>Калькулятори податків</strong> — автоматичний розрахунок єдиного податку, ЄСВ, пені та відпускних</li>
                  <li>✅ <strong>Конструктор документів</strong> — швидке створення договорів, актів виконаних робіт, рахунків</li>
                  <li>✅ <strong>Експертний блог</strong> — актуальні статті про зміни в законодавстві та податках</li>
                  <li>✅ <strong>Локальна інформація</strong> — інформація для підприємців у кожному місті України</li>
                  <li>✅ <strong>100% безкоштовно</strong> — без реєстрації та прихованих платежів</li>
                </ul>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                  <h3 className="text-xl font-semibold mb-3">💡 Корисна інформація</h3>
                  <p className="mb-0">
                    Незалежно від того, де ви живете — в Києві, Львові, Харкові чи будь-якому іншому місті України — 
                    наші інструменти допоможуть вам ефективно вести бізнес, правильно розраховувати податки та 
                    створювати юридичні документи за лічені хвилини.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Підприємництво у всіх регіонах України</h3>
                <p className="mb-4">
                  Ми підтримуємо підприємців з усіх куточків України — від великих міст до невеликих містечок. 
                  Наші інструменти розроблені з урахуванням потреб малого та середнього бізнесу по всій країні.
                </p>

                <p className="mb-4">
                  Оберіть своє місто зі списку вище, щоб отримати локальну інформацію про підприємництво, 
                  податкові ставки та можливості для розвитку бізнесу у вашому регіоні.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Готові почати?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оберіть своє місто та отримайте доступ до безкоштовних інструментів для підприємців
              </p>
              <Link href="/" className="inline-block">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  На головну сторінку
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
