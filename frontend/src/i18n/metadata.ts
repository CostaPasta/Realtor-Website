import type { Metadata } from 'next';
import { type Locale, localizedPath } from './locales';
import { ogAlt, ogSize } from '@/lib/og';

const OG_LOCALES: Record<Locale, string> = { en: 'en_US', es: 'es_US', pt: 'pt_BR' };

/** Canonical URL plus hreflang links for a page that exists in all three languages. */
export function translatedPageMetadata(
  locale: Locale,
  path: string,
  { title, description }: { title: string; description: string },
  { absoluteTitle = false } = {}
): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {
        en: path,
        es: localizedPath('es', path),
        pt: localizedPath('pt', path),
        'x-default': path,
      },
    },
    // Page-level openGraph replaces the layout's whole object, so repeat the shared fields.
    openGraph: {
      type: 'website',
      siteName: 'Jose Costa Realtor',
      title,
      description,
      url: localizedPath(locale, path),
      locale: OG_LOCALES[locale],
      // Setting openGraph here drops the image inherited from the parent segment.
      images: [{ url: localizedPath(locale, '/opengraph-image'), ...ogSize, alt: ogAlt(locale) }],
    },
  };
}
