'use client';

import { useForm } from 'react-hook-form';
import type { Locale } from '@/i18n/locales';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';
import { formInput, formLabel } from '@/lib/styles';

interface RenterInquiryData {
  name: string;
  email: string;
  phone: string;
  bedrooms: string;
  budget: string;
  timeline: string;
  area: string;
  message: string;
  company: string;
}


export default function RenterInquiryForm({ locale = 'en' }: { locale?: Locale }) {
  const { common, renter: t } = formsDictionary[locale];
  const { status, submit, mailtoHref } = useLeadSubmit('rental', locale);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RenterInquiryData>();

  const onSubmit = (data: RenterInquiryData) =>
    submit(
      {
        Name: data.name,
        Email: data.email,
        Phone: data.phone,
        Bedrooms: data.bedrooms,
        'Monthly Budget': data.budget,
        'Move-in Timeline': data.timeline,
        'Preferred Area': data.area,
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
          <label htmlFor="renter-name" className={formLabel}>
            {t.name}
          </label>
          <input
            id="renter-name"
            autoComplete="name"
            {...register('name', { required: common.required })}
            className={formInput}
            placeholder={t.namePlaceholder}
          />
          {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="renter-email" className={formLabel}>
            {t.email}
          </label>
          <input
            id="renter-email"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: common.required,
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: common.invalidEmail },
            })}
            className={formInput}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="renter-phone" className={formLabel}>
          {t.phone}
        </label>
        <input
          id="renter-phone"
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          className={formInput}
          placeholder="(954) 000-0000"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="renter-bedrooms" className={formLabel}>
            {t.bedrooms}
          </label>
          <select
            id="renter-bedrooms"
            {...register('bedrooms', { required: common.required })}
            className={formInput}
          >
            <option value="">{common.select}</option>
            {t.bedroomOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.bedrooms && <p className="mt-1 text-xs text-red-700">{errors.bedrooms.message}</p>}
        </div>
        <div>
          <label htmlFor="renter-budget" className={formLabel}>
            {t.budget}
          </label>
          <select
            id="renter-budget"
            {...register('budget', { required: common.required })}
            className={formInput}
          >
            <option value="">{common.select}</option>
            {t.budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.budget && <p className="mt-1 text-xs text-red-700">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="renter-timeline" className={formLabel}>
          {t.timeline}
        </label>
        <select
          id="renter-timeline"
          {...register('timeline', { required: common.required })}
          className={formInput}
        >
          <option value="">{common.select}</option>
          {t.timelineOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {errors.timeline && <p className="mt-1 text-xs text-red-700">{errors.timeline.message}</p>}
      </div>

      <div>
        <label htmlFor="renter-area" className={formLabel}>
          {t.area}
        </label>
        <input
          id="renter-area"
          {...register('area')}
          className={formInput}
          placeholder="Royal Palm Beach, Wellington, Loxahatchee…"
        />
      </div>

      <div>
        <label htmlFor="renter-message" className={formLabel}>
          {t.message}
        </label>
        <textarea
          id="renter-message"
          {...register('message')}
          rows={3}
          className={`${formInput} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <SubmitButton status={status} label={t.submit} common={common} mailtoHref={mailtoHref} />
    </form>
  );
}
