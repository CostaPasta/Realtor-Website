'use client';

import { useForm } from 'react-hook-form';
import { formsDictionary } from '@/i18n/forms';
import { useLeadSubmit } from '@/lib/useLeadSubmit';
import { HoneypotField, SubmitButton } from '@/components/FormParts';

interface SignupData {
  name: string;
  email: string;
  company: string;
}

const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold';

// Sends each signup to Jose's inbox through /api/lead; he keeps the list.
export default function MarketUpdatesSignup() {
  const { common } = formsDictionary.en;
  const { status, submit } = useLeadSubmit('subscribe');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>();

  if (status === 'sent') {
    return (
      <p role="status" className="font-sans text-navy font-semibold text-center py-4">
        You&apos;re on the list. Jose will send the next update when it&apos;s out.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => submit({ Name: data.name, Email: data.email }, data.company))}
      className="relative space-y-3"
      noValidate
    >
      <HoneypotField registration={register('company')} />
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="signup-name" className="sr-only">
            Your name
          </label>
          <input
            id="signup-name"
            autoComplete="name"
            {...register('name', { required: common.required })}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor="signup-email" className="sr-only">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            {...register('email', {
              required: common.required,
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: common.invalidEmail },
            })}
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>
      <SubmitButton status={status} label="Get Updates" common={common} />
    </form>
  );
}
