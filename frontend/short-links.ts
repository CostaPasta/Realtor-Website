// Short links for print and social posts, e.g. josecostarealtor.com/sign.
// Each one redirects to a page with campaign tags, and lib/leadSource.ts carries those
// tags into the lead email ("Came from: yard-sign (print)"). The full list, with QR
// codes and where each link is meant to be used, is in marketing/README.md.
//
// To add one: add a line here, run `npm run qr` in frontend/, and note it in the README.

export interface ShortLink {
  /** Path on the site, without the language prefix. */
  path: string;
  /** Page it opens, without the language prefix. */
  to: string;
  /** utm_source: the specific piece (yard-sign, business-card, ...). */
  source: string;
  /** utm_medium: the kind of channel (print, mail, social). */
  medium: 'print' | 'mail' | 'social';
  /** Also create /es/... and /pt/... versions that open the translated page. */
  translated?: boolean;
}

export const shortLinks: ShortLink[] = [
  { path: '/sign', to: '/rentals', source: 'yard-sign', medium: 'print' },
  { path: '/card', to: '/', source: 'business-card', medium: 'print' },
  { path: '/flyer', to: '/rentals', source: 'flyer', medium: 'print', translated: true },
  { path: '/owners', to: '/landlords', source: 'owner-letter', medium: 'mail', translated: true },
  { path: '/mp', to: '/rentals', source: 'facebook-marketplace', medium: 'social', translated: true },
  { path: '/rent', to: '/rentals', source: 'community-groups', medium: 'social', translated: true },
  { path: '/lease', to: '/landlords', source: 'community-groups', medium: 'social', translated: true },
  { path: '/compare', to: '/rent-vs-buy', source: 'community-groups', medium: 'social', translated: true },
];

const LOCALES = ['en', 'es', 'pt'] as const;

function prefixed(locale: (typeof LOCALES)[number], path: string): string {
  if (locale === 'en') return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/** Every short link with its language versions, plus the tagged page it opens. */
export function expandShortLinks(): { path: string; destination: string; medium: ShortLink['medium'] }[] {
  return shortLinks.flatMap((link) =>
    (link.translated ? LOCALES : (['en'] as const)).map((locale) => {
      const tags = new URLSearchParams({ utm_source: link.source, utm_medium: link.medium });
      if (locale !== 'en') tags.set('utm_campaign', locale);
      return {
        path: prefixed(locale, link.path),
        destination: `${prefixed(locale, link.to)}?${tags}`,
        medium: link.medium,
      };
    })
  );
}

export function shortLinkRedirects(): { source: string; destination: string; permanent: boolean }[] {
  // Temporary redirects, so a link can point somewhere else later without browsers caching it.
  return expandShortLinks().map(({ path, destination }) => ({ source: path, destination, permanent: false }));
}
