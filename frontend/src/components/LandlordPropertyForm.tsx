'use client';

import { useForm } from 'react-hook-form';
import type { Locale } from '@/i18n/locales';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';
import { formInput, formLabel } from '@/lib/styles';

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


export default function LandlordPropertyForm({ locale = 'en' }: { locale?: Locale }) {
  const { common, landlord: t } = formsDictionary[locale];
  const { status, submit, mailtoHref } = useLeadSubmit('landlord', locale);
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
          <label htmlFor="landlord-name" className={formLabel}>
            {t.name}
          </label>
          <input
            id="landlord-name"
            autoComplete="name"
            {...register('name', { required: common.required })}
            className={formInput}
            placeholder={t.namePlaceholder}
          />
          {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="landlord-phone" className={formLabel}>
            {t.phone}
          </label>
          <input
            id="landlord-phone"
            type="tel"
            autoComplete="tel"
            {...register('phone', { required: common.required })}
            className={formInput}
            placeholder="(954) 000-0000"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="landlord-email" className={formLabel}>
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
          className={formInput}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="landlord-address" className={formLabel}>
          {t.address}
        </label>
        <input
          id="landlord-address"
          autoComplete="street-address"
          {...register('address', { required: common.required })}
          className={formInput}
          placeholder="123 Main St, Royal Palm Beach, FL 33411"
        />
        {errors.address && <p className="mt-1 text-xs text-red-700">{errors.address.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="landlord-bedrooms" className={formLabel}>
            {t.bedrooms}
          </label>
          <input
            id="landlord-bedrooms"
            {...register('bedrooms')}
            className={formInput}
            placeholder="3"
          />
        </div>
        <div>
          <label htmlFor="landlord-rent" className={formLabel}>
            {t.rentGoal}
          </label>
          <input
            id="landlord-rent"
            {...register('rentGoal')}
            className={formInput}
            placeholder="$2,200"
          />
        </div>
      </div>
      <div>
        <label htmlFor="landlord-message" className={formLabel}>
          {t.message}
        </label>
        <textarea
          id="landlord-message"
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
