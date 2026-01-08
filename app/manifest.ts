import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ФОП Помічник - Документи та Калькулятори',
    short_name: 'ФОП Помічник',
    description: 'Безкоштовні документи, калькулятори податків та поради для українських підприємців',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'uk',
    dir: 'ltr',
    scope: '/',
    screenshots: [
      {
        src: '/screenshot-mobile.png',
        sizes: '540x720',
        type: 'image/png',
        form_factor: 'narrow'
      },
      {
        src: '/screenshot-desktop.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide'
      }
    ]
  }
}
