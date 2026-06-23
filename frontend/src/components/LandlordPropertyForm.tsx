'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface LandlordFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  bedrooms: string;
  rentGoal: string;
  message: string;
}

export default function LandlordPropertyForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandlordFormData>();

  // TODO: Replace with API route that sends email via Resend or Nodemailer
  const onSubmit = (data: LandlordFormData) => {
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nProperty Address: ${data.address}\nBedrooms: ${data.bedrooms}\nMonthly Rent Goal: ${data.rentGoal}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:USARealtor1@gmail.com?subject=Landlord Property Inquiry&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-2xl text-navy font-bold">Thank you!</p>
        <p className="mt-3 font-sans text-gray-600">
          Your property details have been sent. Jose will be in touch soon to discuss your rental.
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
            Phone *
          </label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone is required' })}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="(954) 000-0000"
          />
          {errors.phone && <p className="mt-1 text-xs text-coral">{errors.phone.message}</p>}
        </div>
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
      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Property Address *
        </label>
        <input
          {...register('address', { required: 'Property address is required' })}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
          placeholder="123 Main St, Royal Palm Beach, FL 33411"
        />
        {errors.address && <p className="mt-1 text-xs text-coral">{errors.address.message}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Bedrooms
          </label>
          <input
            {...register('bedrooms')}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="3"
          />
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Monthly Rent Goal
          </label>
          <input
            {...register('rentGoal')}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
            placeholder="$2,200"
          />
        </div>
      </div>
      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Tell Jose about your property, timeline, or any questions..."
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
      >
        Contact Jose About Your Property
      </button>
    </form>
  );
}
