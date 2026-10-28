'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { formCard } from '@/lib/styles';
import { usePathname } from 'next/navigation';
import { localeFromPath, localizedPath } from '@/i18n/locales';
import { whatsappLinkForPath } from '@/lib/whatsapp';
import type { UseFormRegisterReturn } from 'react-hook-form';
import type { LeadStatus } from '@/lib/useLeadSubmit';
import { type FormsDictionary, formsDictionary } from '@/i18n/forms';

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
        <div role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 font-sans text-sm text-navy">
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
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm disabled:opacity-60 disabled:cursor-wait"
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

/** White card around a form, headed by a small photo of Jose, a title, and when he replies. */
export function FormCard({
  title = 'Jose Costa',
  note,
  children,
  className = '',
}: {
  title?: string;
  note?: string;
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const replyNote = formsDictionary[localeFromPath(pathname)].common.replyNote;
  return (
    <div className={`${formCard} ${className}`}>
      <div className="flex items-center gap-4 pb-5 mb-6 border-b border-cream-dark">
        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold shrink-0">
          <Image src="/images/jose-portrait.jpeg" alt="Jose Costa" fill sizes="56px" className="object-cover object-[50%_25%]" />
        </div>
        <div className="min-w-0">
          <p className="font-serif text-xl font-bold text-navy leading-snug">{title}</p>
          <p className="mt-0.5 font-sans text-sm text-gray-600">{note ?? replyNote}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
