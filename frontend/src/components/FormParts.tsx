'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeFromPath, localizedPath } from '@/i18n/locales';
import { whatsappLinkForPath } from '@/lib/whatsapp';
import type { UseFormRegisterReturn } from 'react-hook-form';
import type { LeadStatus } from '@/lib/useLeadSubmit';
import type { FormsDictionary } from '@/i18n/forms';

/** Hidden field bots fill in and people never see. */
export function HoneypotField({ registration }: { registration: UseFormRegisterReturn }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label>
        Company
        <input type="text" tabIndex={-1} autoComplete="off" {...registration} />
      </label>
    </div>
  );
}

export function SubmitButton({
  status,
  label,
  common,
  mailtoHref,
}: {
  status: LeadStatus;
  label: string;
  common: FormsDictionary['common'];
  /** Pre-filled email with the visitor's details, shown when sending fails. */
  mailtoHref?: string;
}) {
  const pathname = usePathname();
  return (
    <>
      {status === 'error' && (
        <div role="alert" className="rounded-lg bg-coral/10 border border-coral/30 px-4 py-3 font-sans text-sm text-navy">
          <p className="font-semibold">{common.error}</p>
          <p className="mt-1">
            {mailtoHref && (
              <>
                <a href={mailtoHref} className="underline hover:text-gold">
                  {common.errorEmail}
                </a>
                {' · '}
              </>
            )}
            <a href="tel:+19546141351" className="underline hover:text-gold">
              {common.errorCall}
            </a>
            {' · '}
            <a
              href={whatsappLinkForPath(pathname)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gold"
            >
              {common.errorWhatsApp}
            </a>
          </p>
        </div>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm disabled:opacity-60 disabled:cursor-wait"
      >
        {status === 'sending' ? common.sending : label}
      </button>
      <p className="font-sans text-xs text-gray-500 leading-relaxed">
        {common.consentBefore}
        <Link
          href={localizedPath(localeFromPath(pathname), '/privacy')}
          className="underline hover:text-navy"
        >
          {common.consentLink}
        </Link>
        {common.consentAfter}
      </p>
    </>
  );
}

export function SentMessage({ title, body }: { title: string; body: string }) {
  // The form it replaces is much taller, so bring the confirmation back into view.
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, []);

  return (
    <div ref={ref} className="text-center py-12" role="status">
      <p className="font-serif text-2xl text-navy font-bold">{title}</p>
      <p className="mt-3 font-sans text-gray-600">{body}</p>
    </div>
  );
}
