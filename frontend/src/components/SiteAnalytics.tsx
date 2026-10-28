'use client';

import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { track } from '@vercel/analytics';
import { localeFromPath } from '@/i18n/locales';
import { rememberLeadSource } from '@/lib/leadSource';

/**
 * Vercel Web Analytics: page views, plus "Call" and "WhatsApp" events for every
 * phone and WhatsApp link on the site (one listener instead of tagging each link).
 * Form submissions are tracked as "Lead" in useLeadSubmit. Also records how the visitor
 * arrived (see lib/leadSource.ts) so lead emails can name the source.
 *
 * Turn on Web Analytics in the Vercel project for data to show up.
 */
export default function SiteAnalytics() {
  useEffect(() => {
    rememberLeadSource();
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') ?? '';
      const page = window.location.pathname;
      const props = { page, language: localeFromPath(page) };
      if (href.startsWith('tel:')) track('Call', props);
      else if (href.includes('wa.me/')) track('WhatsApp', props);
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return <Analytics />;
}
