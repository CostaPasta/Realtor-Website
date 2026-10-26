export const locales = ['en', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const LOCALE_LABELS: Record<Locale, { short: string; native: string }> = {
  en: { short: 'EN', native: 'English' },
  es: { short: 'ES', native: 'Español' },
  pt: { short: 'PT', native: 'Português' },
};

// Pages that have Spanish and Portuguese versions at /es/... and /pt/...
export const TRANSLATED_PATHS = ['/', '/rentals', '/buy', '/sell', '/about', '/contact', '/privacy', '/landlords', '/rent-vs-buy'] as const;

// Neighborhood pages with Spanish and Portuguese versions at /es/neighborhoods/... and
// /pt/neighborhoods/... (their text lives in data/neighborhoods-i18n.ts).
export const TRANSLATED_NEIGHBORHOODS = [
  'royal-palm-beach',
  'the-acreage',
  'west-palm-beach',
  'lake-worth-beach',
] as const;

function isTranslatedPath(path: string): boolean {
  if ((TRANSLATED_PATHS as readonly string[]).includes(path)) return true;
  const slug = path.match(/^\/neighborhoods\/([^/]+)$/)?.[1];
  return !!slug && (TRANSLATED_NEIGHBORHOODS as readonly string[]).includes(slug);
}

export function localeFromPath(pathname: string | null): Locale {
  const segment = pathname?.split('/')[1];
  return segment === 'es' || segment === 'pt' ? segment : 'en';
}

function stripLocale(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (locale === 'en') return pathname;
  const rest = pathname.slice(locale.length + 1);
  return rest === '' ? '/' : rest;
}

/** Path of a translated page in the given locale, e.g. ('es', '/rentals') -> '/es/rentals'. */
export function localizedPath(locale: Locale, path: string): string {
  if (locale === 'en') return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Where the language switcher should send someone on `pathname` who picks `target`. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const base = stripLocale(pathname);
  const translated = isTranslatedPath(base);
  if (target === 'en') return base;
  return localizedPath(target, translated ? base : '/');
}
