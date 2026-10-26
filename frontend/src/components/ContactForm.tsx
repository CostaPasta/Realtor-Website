'use client';

import { useForm } from 'react-hook-form';
import type { Locale } from '@/i18n/locales';
import { LOCALE_LABELS, locales } from '@/i18n/locales';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  language: string;
  message: string;
  company: string;
}

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold';
const selectClass = `${inputClass} bg-white`;
const labelClass = 'font-sans text-xs font-semibold text-gray-600 mb-1.5 block';

const LANGUAGE_VALUES: Record<Locale, string> = {
  en: 'English',
  es: 'Spanish',
  pt: 'Portuguese',
};

export default function ContactForm({ locale = 'en' }: { locale?: Locale }) {
  const { common, contact: t } = formsDictionary[locale];
  const { status, submit, mailtoHref } = useLeadSubmit('contact', locale);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({ defaultValues: { language: LANGUAGE_VALUES[locale] } });

  const onSubmit = (data: ContactFormData) =>
    submit(
      {
        Name: `${data.firstName} ${data.lastName}`,
        Email: data.email,
        Phone: data.phone,
        'I am': data.role,
        'Preferred language': data.language,
        Message: data.message,
      },
      data.company
    );

  if (status === 'sent') {
    return <SentMessage title={t.sentTitle} body={t.sentBody} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <HoneypotField registration={register('company')} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-first" className={labelClass}>
            {t.firstName}
          </label>
          <input
            id="contact-first"
            autoComplete="given-name"
            {...register('firstName', { required: common.required })}
            className={inputClass}
          />
          {errors.firstName && <p className="mt-1 text-xs text-coral">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-last" className={labelClass}>
            {t.lastName}
          </label>
          <input
            id="contact-last"
            autoComplete="family-name"
            {...register('lastName', { required: common.required })}
            className={inputClass}
          />
          {errors.lastName && <p className="mt-1 text-xs text-coral">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            {t.email}
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: common.required,
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: common.invalidEmail },
            })}
            className={inputClass}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            {t.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={inputClass}
            placeholder="(954) 000-0000"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-role" className={labelClass}>
            {t.role}
          </label>
          <select
            id="contact-role"
            {...register('role', { required: common.required })}
            className={selectClass}
          >
            <option value="">{common.select}</option>
            {t.roleOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.role && <p className="mt-1 text-xs text-coral">{errors.role.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-language" className={labelClass}>
            {t.language}
          </label>
          <select id="contact-language" {...register('language')} className={selectClass}>
            {locales.map((l) => (
              <option key={l} value={LANGUAGE_VALUES[l]}>
                {LOCALE_LABELS[l].native}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          {t.message}
        </label>
        <textarea
          id="contact-message"
          {...register('message')}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <SubmitButton status={status} label={t.submit} common={common} mailtoHref={mailtoHref} />
    </form>
  );
}
