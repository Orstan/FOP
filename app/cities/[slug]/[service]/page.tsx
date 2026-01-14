import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityBySlug, getAllCitySlugs } from '@/lib/cities-data';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

interface CityServicePageProps {
  params: Promise<{ slug: string; service: string }>;
}

// Генеруємо тільки найпопулярніші комбінації під час build
export async function generateStaticParams() {
  const popularCities = ['kyiv', 'lviv', 'kharkiv', 'odesa', 'dnipro', 'zaporizhzhia', 'vinnytsia', 'poltava'];
  const serviceSlugs = getAllServiceSlugs();
  
  const params = [];
  for (const citySlug of popularCities) {
    for (const serviceSlug of serviceSlugs) {
      params.push({
        slug: citySlug,
        service: serviceSlug,
      });
    }
  }
  
  return params;
}

// Увімкнути ISR з revalidation кожні 30 днів
export const revalidate = 2592000;
// Дозволити динамічну генерацію для інших міст
export const dynamicParams = true;

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { slug, service } = await params;
  const city = getCityBySlug(slug);
  const serviceData = getServiceBySlug(service);

  if (!city || !serviceData) {
    return {
      title: 'Сторінка не знайдена',
    };
  }

  const title = `${serviceData.name} для ФОП у ${city.name} - Безкоштовно онлайн 2026 | ФОП Помічник`;
  const description = `${serviceData.title} для підприємців у місті ${city.name}, ${city.region}. ${serviceData.description} Безкоштовні інструменти для бізнесу.`;

  return {
    title,
    description,
    keywords: [
      `${serviceData.name} ${city.name}`,
      `ФОП ${city.name}`,
      `${serviceData.slug} ${city.name}`,
      `підприємець ${city.name}`,
      serviceData.name,
      `бізнес ${city.name}`,
      `${city.region}`,
      'безкоштовно онлайн',
      'калькулятор',
      'документи ФОП',
    ],
    alternates: {
      canonical: `/cities/${slug}/${service}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'uk_UA',
      url: `/cities/${slug}/${service}`,
      siteName: 'ФОП Помічник',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { slug, service } = await params;
  const city = getCityBySlug(slug);
  const serviceData = getServiceBySlug(service);

  if (!city || !serviceData) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceData.name} для ФОП у ${city.name}`,
    description: serviceData.description,
    provider: {
      '@type': 'Organization',
      name: 'ФОП Помічник',
      url: 'https://fop-help.com',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.region,
      addressCountry: 'UA',
    },
    url: `https://fop-help.com/cities/${slug}/${service}`,
    priceRange: 'Безкоштовно',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Головна</Link>
                <span>→</span>
                <Link href="/cities" className="hover:text-primary transition-colors">Міста</Link>
                <span>→</span>
                <Link href={`/cities/${slug}`} className="hover:text-primary transition-colors">{city.name}</Link>
                <span>→</span>
                <span className="text-foreground">{serviceData.name}</span>
              </nav>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl">{serviceData.emoji}</span>
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {serviceData.name} для ФОП у {city.name}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {serviceData.description}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{city.name}, {city.region}</span>
                  </div>
                  <div>•</div>
                  <span>Населення: {city.population.toLocaleString('uk-UA')}</span>
                  <div>•</div>
                  <span className="text-green-600 dark:text-green-400 font-medium">100% Безкоштовно</span>
                </div>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Скористайтеся інструментом зараз
                </h2>
                <p className="mb-4">
                  Наш безкоштовний інструмент доступний для всіх підприємців {city.name} та інших міст України.
                </p>
                <Link href={serviceData.relatedUrl}>
                  <Button size="lg" className="w-full md:w-auto">
                    {serviceData.emoji} Перейти до {serviceData.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {serviceData.title} у {city.name}
              </h2>
              
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Підприємці міста <strong>{city.name}</strong> ({city.region}) можуть безкоштовно використовувати 
                  наш інструмент для {serviceData.name.toLowerCase()}. Це зручний онлайн-сервіс, який допоможе 
                  вам швидко та точно виконати необхідні розрахунки або створити документи.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Чому підприємці {city.name} обирають наш сервіс?
                </h3>
                <ul className="space-y-2 mb-6">
                  <li>✅ <strong>100% безкоштовно</strong> — без реєстрації та прихованих платежів</li>
                  <li>✅ <strong>Швидко та зручно</strong> — отримайте результат за лічені хвилини</li>
                  <li>✅ <strong>Актуальні дані</strong> — інструмент оновлюється згідно з законодавством 2026 року</li>
                  <li>✅ <strong>Доступ 24/7</strong> — користуйтеся у зручний для вас час</li>
                  <li>✅ <strong>Експертна підтримка</strong> — поради та інструкції від фахівців</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Як користуватися інструментом у {city.name}?
                </h3>
                <ol className="space-y-2 mb-6 list-decimal list-inside">
                  <li>Перейдіть на сторінку інструменту за посиланням вище</li>
                  <li>Введіть необхідні дані у відповідні поля</li>
                  <li>Натисніть кнопку розрахунку або генерації</li>
                  <li>Отримайте готовий результат та збережіть його</li>
                </ol>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <h3 className="text-xl font-semibold mb-4">
                    💡 Корисна інформація для підприємців {city.name}
                  </h3>
                  <p className="mb-4">
                    {city.name} — {city.description} з населенням {city.population.toLocaleString('uk-UA')} осіб. 
                    Місто активно розвивається і пропонує сприятливі умови для малого та середнього бізнесу.
                  </p>
                  <p>
                    Для підприємців {city.name} доступні всі види оподаткування ФОП: 1, 2 та 3 група єдиного податку. 
                    Оберіть найвигідніший варіант для вашого бізнесу та користуйтеся нашими безкоштовними інструментами 
                    для розрахунків.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  Додаткові інструменти для ФОП у {city.name}
                </h3>
                <p className="mb-4">
                  Крім {serviceData.name.toLowerCase()}, підприємці {city.name} можуть скористатися іншими 
                  безкоштовними інструментами нашого сайту:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <Link href={`/cities/${slug}`} className="block">
                  <div className="bg-card border rounded-lg p-4 hover:shadow-lg hover:border-primary/50 transition-all h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Всі інструменти для {city.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Повний список калькуляторів та конструкторів документів
                    </p>
                  </div>
                </Link>

                <Link href={serviceData.relatedUrl} className="block">
                  <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 hover:shadow-lg hover:border-primary transition-all h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{serviceData.emoji}</span>
                      <h4 className="font-semibold text-primary">Основний інструмент</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {serviceData.title} для всіх міст України
                    </p>
                  </div>
                </Link>
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
                Скористайтеся нашим безкоштовним інструментом прямо зараз
              </p>
              <Link href={serviceData.relatedUrl}>
                <Button size="lg">
                  {serviceData.emoji} Перейти до {serviceData.name}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
