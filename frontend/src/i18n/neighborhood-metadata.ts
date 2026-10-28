import type { Metadata } from 'next';
import { neighborhoods } from '@/data/neighborhoods';
import { isTranslatedNeighborhood, localizeNeighborhood } from '@/data/neighborhoods-i18n';
import { areaOgAlt } from '@/lib/og';
import type { Locale } from './locales';
import { ownShareImage, pageMetadata, translatedPageMetadata } from './metadata';
import { fill, neighborhoodUi } from './pages/neighborhood';

/** Title, description, canonical, and (for translated neighborhoods) hreflang links. */
export function neighborhoodMetadata(slug: string, locale: Locale): Metadata {
  const base = neighborhoods.find((n) => n.slug === slug);
  if (!base) return {};
  const n = localizeNeighborhood(base, locale);
  const t = neighborhoodUi[locale];
  const copy = {
    title: fill(t.metaTitle, { name: n.name }),
    description: fill(t.metaDescription, { name: n.name, county: n.county }),
  };
  const path = `/neighborhoods/${slug}`;
  const image = ownShareImage(locale, path, areaOgAlt(locale, n.name));
  if (isTranslatedNeighborhood(slug)) return translatedPageMetadata(locale, path, copy, { image });
  return pageMetadata(path, copy, { image });
}
