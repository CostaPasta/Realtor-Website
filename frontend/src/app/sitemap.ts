import type { MetadataRoute } from 'next';
import { neighborhoods } from '@/data/neighborhoods';
import { visibleMarketUpdates } from '@/data/market-updates';
import { testimonials } from '@/data/testimonials';
import { TRANSLATED_PATHS, localizedPath } from '@/i18n/locales';

const BASE_URL = 'https://www.josecostarealtor.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/buy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sell`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rentals`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/neighborhoods`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...(testimonials.length > 0
      ? [
          {
            url: `${BASE_URL}/testimonials`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          },
        ]
      : []),
    {
      url: `${BASE_URL}/market-updates`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const translatedPages: MetadataRoute.Sitemap = (['es', 'pt'] as const).flatMap((locale) =>
    TRANSLATED_PATHS.map((path) => ({
      url: `${BASE_URL}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 0.9 : 0.8,
    }))
  );

  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods
    .filter((n) => !n.hidden)
    .map((n) => ({
      url: `${BASE_URL}/neighborhoods/${n.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const marketUpdatePages: MetadataRoute.Sitemap = visibleMarketUpdates().map((u) => ({
    url: `${BASE_URL}/market-updates/${u.slug}`,
    lastModified: new Date(u.date),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...translatedPages, ...neighborhoodPages, ...marketUpdatePages];
}
