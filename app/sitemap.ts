import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/lib/cities-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fop-help.com'
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
    'penalty',
    'vacation',
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
    'fop-taxes-2026',
    'open-fop-diya',
    'upwork-fiverr-2026',
    'contract-mistakes',
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

  return [
    ...staticPages,
    ...calculators,
    ...documents,
    ...blogPosts,
    ...cities,
  ]
}
