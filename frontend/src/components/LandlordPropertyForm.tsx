'use client';

import { useForm } from 'react-hook-form';
import type { Locale } from '@/i18n/locales';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';

interface LandlordFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  bedrooms: string;
  rentGoal: string;
  message: string;
  company: string;
}

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold';
const labelClass = 'font-sans text-xs font-semibold text-gray-600 mb-1.5 block';

export default function LandlordPropertyForm({ locale = 'en' }: { locale?: Locale }) {
  const { common, landlord: t } = formsDictionary[locale];
  const { status, submit } = useLeadSubmit('landlord', locale);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandlordFormData>();

  const onSubmit = (data: LandlordFormData) =>
    submit(
      {
        Name: data.name,
        Phone: data.phone,
        Email: data.email,
        'Property Address': data.address,
        Bedrooms: data.bedrooms,
        'Monthly Rent Goal': data.rentGoal,
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
          <label htmlFor="landlord-name" className={labelClass}>
            {t.name}
          </label>
          <input
            id="landlord-name"
            autoComplete="name"
            {...register('name', { required: common.required })}
            className={inputClass}
            placeholder={t.namePlaceholder}
          />
          {errors.name && <p className="mt-1 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="landlord-phone" className={labelClass}>
            {t.phone}
          </label>
          <input
            id="landlord-phone"
            type="tel"
            autoComplete="tel"
            {...register('phone', { required: common.required })}
            className={inputClass}
            placeholder="(954) 000-0000"
          />
          {errors.phone && <p className="mt-1 text-xs text-coral">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="landlord-email" className={labelClass}>
          {t.email}
        </label>
        <input
          id="landlord-email"
          type="email"
          autoComplete="email"
          {...register('email', {
            required: common.required,
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: common.invalidEmail },
          })}
          className={inputClass}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="landlord-address" className={labelClass}>
          {t.address}
        </label>
        <input
          id="landlord-address"
          autoComplete="street-address"
          {...register('address', { required: common.required })}
          className={inputClass}
          placeholder="123 Main St, Royal Palm Beach, FL 33411"
        />
        {errors.address && <p className="mt-1 text-xs text-coral">{errors.address.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="landlord-bedrooms" className={labelClass}>
            {t.bedrooms}
          </label>
          <input
            id="landlord-bedrooms"
            {...register('bedrooms')}
            className={inputClass}
            placeholder="3"
          />
        </div>
        <div>
          <label htmlFor="landlord-rent" className={labelClass}>
            {t.rentGoal}
          </label>
          <input
            id="landlord-rent"
            {...register('rentGoal')}
            className={inputClass}
            placeholder="$2,200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="landlord-message" className={labelClass}>
          {t.message}
        </label>
        <textarea
          id="landlord-message"
          {...register('message')}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder={t.messagePlaceholder}
        />
      </div>
      <SubmitButton status={status} label={t.submit} common={common} />
    </form>
  );
}
