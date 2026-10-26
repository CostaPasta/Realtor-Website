'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import type { Locale } from '@/i18n/locales';

export type LeadType = 'contact' | 'rental' | 'landlord' | 'valuation' | 'subscribe';
export type LeadStatus = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Posts a form to /api/lead. `fields` keys become the line labels in the email Jose
 * receives, so keep them in English regardless of the page language.
 */
export function useLeadSubmit(type: LeadType, locale: Locale = 'en') {
  const [status, setStatus] = useState<LeadStatus>('idle');

  async function submit(fields: Record<string, string | undefined>, company?: string) {
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, locale, fields, company }),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) track('Lead', { form: type, language: locale, page: window.location.pathname });
    } catch {
      setStatus('error');
    }
  }

  return { status, submit };
}
