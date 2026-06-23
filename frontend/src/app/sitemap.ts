import type { MetadataRoute } from 'next';
import { neighborhoods } from '@/data/neighborhoods';
import { marketUpdates } from '@/data/market-updates';

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
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
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
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoods.map((n) => ({
    url: `${BASE_URL}/neighborhoods/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const marketUpdatePages: MetadataRoute.Sitemap = marketUpdates.map((u) => ({
    url: `${BASE_URL}/market-updates/${u.slug}`,
    lastModified: new Date(u.date),
    changeFrequency: 'never' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...neighborhoodPages, ...marketUpdatePages];
}
