'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { type Locale, localizedPath } from '@/i18n/locales';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { whatsappHref } from '@/lib/whatsapp';

// Rent and price start empty so the page only ever shows the visitor's own numbers.
// The rest are editable assumptions most renters wouldn't know. The rate is roughly the
// 30-year fixed average in October 2026 (Freddie Mac); visitors are told to replace it.
const DEFAULTS = {
  rent: '',
  price: '',
  down: '5',
  rate: '7.4',
  tax: '1.8',
  insurance: '4500',
  hoa: '0',
};
const DOWN_PRESETS = ['3.5', '5', '10', '20'];
const MORTGAGE_INSURANCE_RATE = 0.005;
const CLOSING_COST_RATE = 0.03;
const TERM_MONTHS = 360;
const NUMBER_LOCALES: Record<Locale, string> = { en: 'en-US', es: 'es-US', pt: 'pt-BR' };

const inputClass =
  'w-full border border-gray-200 rounded-lg py-3 font-sans text-sm tabular-nums focus:outline-none focus:border-gold';
const labelClass = 'font-sans text-xs font-semibold text-gray-600 mb-1.5 block';

type Field = keyof typeof DEFAULTS;

function num(value: string): number {
  const n = Number(value.replace(/,/g, ''));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function RentVsBuyCalculator({ locale }: { locale: Locale }) {
  const t = rentVsBuyDictionary[locale];
  const [values, setValues] = useState(DEFAULTS);
  const set = (field: Field) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const money = new Intl.NumberFormat(NUMBER_LOCALES[locale], {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const rent = num(values.rent);
  const price = num(values.price);
  const downPct = Math.min(num(values.down), 100);
  const downPayment = price * (downPct / 100);
  const loan = price - downPayment;
  const r = num(values.rate) / 100 / 12;
  const principalInterest = r > 0 ? (loan * r) / (1 - Math.pow(1 + r, -TERM_MONTHS)) : loan / TERM_MONTHS;
  const tax = (price * (num(values.tax) / 100)) / 12;
  const insurance = num(values.insurance) / 12;
  const hoa = num(values.hoa);
  const mortgageInsurance = downPct < 20 ? (loan * MORTGAGE_INSURANCE_RATE) / 12 : 0;
  const ownTotal = principalInterest + tax + insurance + hoa + mortgageInsurance;
  const diff = ownTotal - rent;
  const closing = price * CLOSING_COST_RATE;
  const growth = Math.pow(1 + r, 12);
  const balanceAfterYear = r > 0 ? loan * growth - (principalInterest * (growth - 1)) / r : loan - principalInterest * 12;
  const firstYearPrincipal = loan - balanceAfterYear;

  const summary =
    Math.abs(diff) < 50
      ? t.results.same
      : (diff > 0 ? t.results.more : t.results.less).replace('{amount}', money.format(Math.abs(diff)));
  const barMax = Math.max(ownTotal, rent, 1);

  const breakdown = [
    { label: t.results.principalInterest, value: principalInterest },
    { label: t.results.tax, value: tax },
    { label: t.results.insurance, value: insurance },
    ...(hoa > 0 ? [{ label: t.results.hoa, value: hoa }] : []),
    ...(mortgageInsurance > 0 ? [{ label: t.results.mortgageInsurance, value: mortgageInsurance }] : []),
  ];

  const ready = rent > 0 && price > 0;
  const message = ready
    ? t.cta.message.replace('{rent}', money.format(rent)).replace('{price}', money.format(price))
    : t.cta.messageEmpty;

  const moneyInput = (field: Field, label: string, hint?: string) => (
    <div>
      <label htmlFor={`rvb-${field}`} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-sm text-gray-400">
          $
        </span>
        <input
          id={`rvb-${field}`}
          type="number"
          inputMode="numeric"
          min={0}
          step={field === 'price' ? 5000 : 50}
          value={values[field]}
          onChange={set(field)}
          aria-describedby={hint ? `rvb-${field}-hint` : undefined}
          className={`${inputClass} pl-8 pr-4`}
        />
      </div>
      {hint && (
        <p id={`rvb-${field}-hint`} className="mt-1.5 font-sans text-xs text-gray-500 leading-relaxed">
          {hint}
        </p>
      )}
    </div>
  );

  const percentInput = (field: Field, label: string, hint?: string) => (
    <div>
      <label htmlFor={`rvb-${field}`} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <input
          id={`rvb-${field}`}
          type="number"
          inputMode="decimal"
          min={0}
          max={100}
          step={field === 'rate' ? 0.125 : 0.1}
          value={values[field]}
          onChange={set(field)}
          aria-describedby={hint ? `rvb-${field}-hint` : undefined}
          className={`${inputClass} pl-4 pr-9`}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-sans text-sm text-gray-400">
          %
        </span>
      </div>
      {hint && (
        <p id={`rvb-${field}-hint`} className="mt-1.5 font-sans text-xs text-gray-500 leading-relaxed">
          {hint}
        </p>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
      {/* ─── Inputs ─── */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-dark shadow-sm">
        <h2 className="font-serif text-2xl font-bold text-navy mb-6">{t.inputs.title}</h2>
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {moneyInput('rent', t.inputs.rent)}
            {moneyInput('price', t.inputs.price)}
          </div>

          <fieldset>
            <legend className={labelClass}>{t.inputs.down}</legend>
            <div className="flex flex-wrap items-center gap-2">
              {DOWN_PRESETS.map((p) => {
                const active = num(values.down) === Number(p);
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setValues((v) => ({ ...v, down: p }))}
                    className={`px-4 py-2 rounded-full border font-sans text-sm font-semibold tabular-nums transition-colors ${
                      active ? 'bg-navy border-navy text-white' : 'border-gray-200 text-navy hover:border-gold'
                    }`}
                  >
                    {p.replace('.', locale === 'pt' ? ',' : '.')}%
                  </button>
                );
              })}
              <div className="relative w-28">
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  max={100}
                  step={0.5}
                  value={values.down}
                  onChange={set('down')}
                  aria-label={t.inputs.down}
                  className={`${inputClass} py-2 pl-4 pr-8`}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-sans text-sm text-gray-400">
                  %
                </span>
              </div>
            </div>
            <p className="mt-1.5 font-sans text-xs text-gray-500 tabular-nums">{money.format(downPayment)}</p>
          </fieldset>

          {percentInput('rate', t.inputs.rate, t.inputs.rateHint)}
          {percentInput('tax', t.inputs.tax, t.inputs.taxHint)}
          <div className="grid sm:grid-cols-2 gap-5 items-start">
            {moneyInput('insurance', t.inputs.insurance, t.inputs.insuranceHint)}
            {moneyInput('hoa', `${t.inputs.hoa} (${t.results.perMonth.replace('/', '')})`)}
          </div>
        </div>
      </div>

      {/* ─── Results ─── */}
      <div className="lg:sticky lg:top-24 space-y-6">
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white" aria-live="polite">
          <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            {t.results.title}
          </h3>

          {!ready && <p className="font-sans text-base text-white/80 leading-relaxed">{t.results.empty}</p>}
          {ready && (
            <>
              <div className="space-y-5">
                {[
                  { label: t.results.own, value: ownTotal, bar: 'bg-gold' },
                  { label: t.results.rent, value: rent, bar: 'bg-white/50' },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-sans text-sm text-white/80">{row.label}</span>
                      <span className="font-serif text-3xl font-bold tabular-nums">
                        {money.format(row.value)}
                        <span className="font-sans text-sm font-normal text-white/60">{t.results.perMonth}</span>
                      </span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.bar} transition-[width] duration-300 motion-reduce:transition-none`}
                        style={{ width: `${(row.value / barMax) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-sans text-base font-semibold text-gold">{summary}</p>

              <dl className="mt-6 pt-6 border-t border-white/10 space-y-2.5 font-sans text-sm">
                {breakdown.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4">
                    <dt className="text-white/70">{item.label}</dt>
                    <dd className="tabular-nums">{money.format(item.value)}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </div>

        {ready && (
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
                {t.results.cashTitle}
              </h3>
              <dl className="space-y-2 font-sans text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">{t.results.downPayment}</dt>
                  <dd className="tabular-nums text-gray-800">{money.format(downPayment)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">{t.results.closing}</dt>
                  <dd className="tabular-nums text-gray-800">{money.format(closing)}</dd>
                </div>
                <div className="flex justify-between gap-4 pt-2 border-t border-cream-dark font-semibold text-navy">
                  <dt>{t.results.cashTotal}</dt>
                  <dd className="tabular-nums">{money.format(downPayment + closing)}</dd>
                </div>
              </dl>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-cream-dark">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
                {t.results.equityTitle}
              </h3>
              <p className="font-serif text-3xl font-bold text-navy tabular-nums">{money.format(firstYearPrincipal)}</p>
              <p className="mt-2 font-sans text-xs text-gray-600 leading-relaxed">{t.results.equityBody}</p>
            </div>
          </div>

        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
          >
            <MessageCircle size={16} />
            {t.cta.whatsapp}
          </a>
          <Link
            href={localizedPath(locale, '/buy')}
            className="inline-flex flex-1 items-center justify-center px-6 py-4 border border-navy/20 text-navy font-sans font-semibold rounded-full hover:border-gold transition-colors text-sm"
          >
            {t.cta.buy}
          </Link>
        </div>
      </div>
    </div>
  );
}
