'use client';

import { useEffect, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import type { Locale } from '@/i18n/locales';
import { readLeadSource } from '@/lib/leadSource';

export type LeadType = 'contact' | 'rental' | 'landlord' | 'valuation' | 'subscribe';
export type LeadStatus = 'idle' | 'sending' | 'sent' | 'error';

const LEAD_EMAIL = 'USARealtor1@gmail.com';

const MAILTO_SUBJECTS: Record<LeadType, string> = {
  contact: 'Website inquiry',
  rental: 'Rental home inquiry',
  landlord: 'Landlord property inquiry',
  valuation: 'Home valuation request',
  subscribe: 'Market update signup',
};

/** Pre-filled email with the same details, offered when the server can't send. */
function buildMailto(type: LeadType, fields: Record<string, string | undefined>): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  return `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECTS[type])}&body=${encodeURIComponent(body)}`;
}

/**
 * Posts a form to /api/lead. `fields` keys become the line labels in the email Jose
 * receives, so keep them in English regardless of the page language.
 */
export function useLeadSubmit(type: LeadType, locale: Locale = 'en') {
  const [status, setStatus] = useState<LeadStatus>('idle');
  const [lastFields, setLastFields] = useState<Record<string, string | undefined>>();
  // When the form appeared; the server treats near-instant submissions as bots.
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  async function submit(fields: Record<string, string | undefined>, company?: string) {
    setLastFields(fields);
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          locale,
          fields,
          company,
          elapsedMs: Date.now() - shownAt.current,
          source: { ...readLeadSource(), page: window.location.pathname },
        }),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) track('Lead', { form: type, language: locale, page: window.location.pathname });
    } catch {
      setStatus('error');
    }
  }

  const mailtoHref = status === 'error' && lastFields ? buildMailto(type, lastFields) : undefined;

  return { status, submit, mailtoHref };
}
