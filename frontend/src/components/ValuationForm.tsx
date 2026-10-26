'use client';

import { useForm } from 'react-hook-form';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SentMessage, SubmitButton } from '@/components/FormParts';

interface ValuationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  company: string;
}

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold';
const labelClass = 'font-sans text-xs font-semibold text-gray-600 mb-1.5 block';

export default function ValuationForm() {
  const { common } = formsDictionary.en;
  const { status, submit } = useLeadSubmit('valuation');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValuationFormData>();

  const onSubmit = (data: ValuationFormData) =>
    submit(
      {
        Name: data.name,
        Email: data.email,
        Phone: data.phone,
        'Property Address': data.address,
        Notes: data.notes,
      },
      data.company
    );

  if (status === 'sent') {
    return (
      <SentMessage
        title="Thank you!"
        body="Your valuation request has been sent. Jose will be in touch within 24 hours."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-5" noValidate>
      <HoneypotField registration={register('company')} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="valuation-name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="valuation-name"
            autoComplete="name"
            {...register('name', { required: 'Name is required' })}
            className={inputClass}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="valuation-email" className={labelClass}>
            Email *
          </label>
          <input
            id="valuation-email"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: common.invalidEmail },
            })}
            className={inputClass}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="valuation-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="valuation-phone"
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          className={inputClass}
          placeholder="(954) 000-0000"
        />
      </div>
      <div>
        <label htmlFor="valuation-address" className={labelClass}>
          Property Address *
        </label>
        <input
          id="valuation-address"
          autoComplete="street-address"
          {...register('address', { required: 'Property address is required' })}
          className={inputClass}
          placeholder="123 Main St, Royal Palm Beach, FL 33411"
        />
        {errors.address && <p className="mt-1 text-xs text-coral">{errors.address.message}</p>}
      </div>
      <div>
        <label htmlFor="valuation-notes" className={labelClass}>
          Anything else we should know?
        </label>
        <textarea
          id="valuation-notes"
          {...register('notes')}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder="Recent upgrades, target timeline, any questions..."
        />
      </div>
      <SubmitButton status={status} label="Request My Free Valuation" common={common} />
    </form>
  );
}
