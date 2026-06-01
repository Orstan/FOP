import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/lib/cities-data'
import { getAllServiceSlugs } from '@/lib/services-data'
import { getAllBlogTopicSlugs } from '@/lib/blog-topics-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fop-help.com'
  const currentDate = new Date()

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ]

  const calculators = [
    'fop-tax',
    'esv',
    'salary',
    'margin',
    'cash-flow',
    'roi',
    'break-even',
    'penalty',
    'vacation',
    'customs',
  ].map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  calculators.unshift({
    url: `${baseUrl}/calculators`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  })

  const documents = [
    'contract',
    'act',
    'invoice',
    'rent',
    'sale',
    'construction',
    'employment',
    'loan',
    'commission',
    'nda',
    'commercial-rent',
    'franchise',
    'transportation',
    'storage',
  ].map((slug) => ({
    url: `${baseUrl}/documents/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  documents.unshift({
    url: `${baseUrl}/documents`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  })

  const blogPosts = [
    'strakhuvannya-dlya-fop-vydy-ta-neobkhidnist-u-2026',
    'yak-fop-pratsyuvaty-z-inozemnymy-kliyentamy-u-2026',
    'yak-fop-vesty-oblik-dokhodiv-ta-vytrat',
    'fop-cash-register-2026',
    'fop-sick-leave-2026',
    'fop-maternity-leave-2026',
    'fop-general-tax-system-2026',
    'monobank-fop-2026',
    'privatbank-fop-2026',
    'pumb-bank-fop-2026',
    'yak-vidkryty-fop-2026',
    'choose-fop-group',
    'fop-reporting-2026',
    'close-fop-2026',
    'fop-without-activity',
    'fop-bank-accounts',
    'fop-and-salary',
    'fop-pensions',
    'fop-tax-optimization',
    'fop-taxes-2026',
    'open-fop-diya',
    'upwork-fiverr-2026',
    'contract-mistakes',
    'military-tax-fop-2026',
    'fop-crypto-2026',
    'fop-tax-calendar-2026',
    'fop-grants-2026',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  blogPosts.unshift({
    url: `${baseUrl}/blog`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })

  const citySlugs = getAllCitySlugs()
  const cities = citySlugs.map((slug) => ({
    url: `${baseUrl}/cities/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  cities.unshift({
    url: `${baseUrl}/cities`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })

  // Генерація комбінацій місто + послуга (2250+ URLs)
  const serviceSlugs = getAllServiceSlugs()
  const cityServices: MetadataRoute.Sitemap = []
  
  for (const citySlug of citySlugs) {
    for (const serviceSlug of serviceSlugs) {
      cityServices.push({
        url: `${baseUrl}/cities/${citySlug}/${serviceSlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  // Генерація блог-комбінацій тема-місто (4500+ URLs)
  const topicSlugs = getAllBlogTopicSlugs()
  const blogCityPosts: MetadataRoute.Sitemap = []
  
  for (const topicSlug of topicSlugs) {
    for (const citySlug of citySlugs) {
      blogCityPosts.push({
        url: `${baseUrl}/blog/${topicSlug}-${citySlug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })
    }
  }

  return [
    ...staticPages,
    ...calculators,
    ...documents,
    ...blogPosts,
    ...cities,
    ...cityServices,
    ...blogCityPosts,
  ]
}
