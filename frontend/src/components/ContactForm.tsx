'use client';

import { useForm } from 'react-hook-form';
import type { Locale } from '@/i18n/locales';
import { LOCALE_LABELS, locales } from '@/i18n/locales';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';
import { formInput, formLabel } from '@/lib/styles';

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
          <label htmlFor="contact-first" className={formLabel}>
            {t.firstName}
          </label>
          <input
            id="contact-first"
            autoComplete="given-name"
            {...register('firstName', { required: common.required })}
            className={formInput}
          />
          {errors.firstName && <p className="mt-1 text-xs text-red-700">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-last" className={formLabel}>
            {t.lastName}
          </label>
          <input
            id="contact-last"
            autoComplete="family-name"
            {...register('lastName', { required: common.required })}
            className={formInput}
          />
          {errors.lastName && <p className="mt-1 text-xs text-red-700">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={formLabel}>
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
            className={formInput}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-phone" className={formLabel}>
            {t.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={formInput}
            placeholder="(954) 000-0000"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-role" className={formLabel}>
            {t.role}
          </label>
          <select
            id="contact-role"
            {...register('role', { required: common.required })}
            className={formInput}
          >
            <option value="">{common.select}</option>
            {t.roleOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.role && <p className="mt-1 text-xs text-red-700">{errors.role.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-language" className={formLabel}>
            {t.language}
          </label>
          <select id="contact-language" {...register('language')} className={formInput}>
            {locales.map((l) => (
              <option key={l} value={LANGUAGE_VALUES[l]}>
                {LOCALE_LABELS[l].native}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={formLabel}>
          {t.message}
        </label>
        <textarea
          id="contact-message"
          {...register('message')}
          rows={4}
          className={`${formInput} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <SubmitButton status={status} label={t.submit} common={common} mailtoHref={mailtoHref} />
    </form>
  );
}
