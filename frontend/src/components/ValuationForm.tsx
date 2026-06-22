'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ValuationFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
}

export default function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValuationFormData>();

  // TODO: Replace with API route that sends email via Resend or Nodemailer
  const onSubmit = (data: ValuationFormData) => {
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\nNotes: ${data.notes}`
    );
    window.location.href = `mailto:USARealtor1@gmail.com?subject=Home Valuation Request&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-2xl text-navy font-bold">Thank you!</p>
        <p className="mt-3 font-sans text-gray-600">
          Your valuation request has been sent. Jose will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Full Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-coral">{errors.name.message}</p>}
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Email *
          </label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Phone
        </label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
          placeholder="(954) 000-0000"
        />
      </div>
      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Property Address *
        </label>
        <input
          {...register('address', { required: 'Property address is required' })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
          placeholder="123 Main St, Boca Raton, FL 33432"
        />
        {errors.address && <p className="mt-1 text-xs text-coral">{errors.address.message}</p>}
      </div>
      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Anything else we should know?
        </label>
        <textarea
          {...register('notes')}
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Recent upgrades, target timeline, any questions..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
      >
        Request My Free Valuation
      </button>
    </form>
  );
}
