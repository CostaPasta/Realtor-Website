'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface RenterInquiryData {
  name: string;
  email: string;
  phone: string;
  bedrooms: string;
  budget: string;
  timeline: string;
  area: string;
  message: string;
}

const selectClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold bg-white text-gray-800 appearance-none';
const inputClass =
  'w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold';

export default function RenterInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RenterInquiryData>();

  const onSubmit = (data: RenterInquiryData) => {
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nBedrooms: ${data.bedrooms}\nMonthly Budget: ${data.budget}\nMove-in Timeline: ${data.timeline}\nPreferred Area: ${data.area}\nMessage: ${data.message}`
    );
    window.location.href = `mailto:USARealtor1@gmail.com?subject=Rental Home Inquiry&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-2xl text-navy font-bold">Thank you!</p>
        <p className="mt-3 font-sans text-gray-600">
          Your inquiry has been sent. Jose will reach out within 24 hours.
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
            className={inputClass}
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
            className={inputClass}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-coral">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Phone (optional)
        </label>
        <input
          type="tel"
          {...register('phone')}
          className={inputClass}
          placeholder="(954) 000-0000"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Bedrooms *
          </label>
          <select
            {...register('bedrooms', { required: 'Please select bedrooms' })}
            className={selectClass}
          >
            <option value="">Select…</option>
            <option value="Studio">Studio</option>
            <option value="1 BR">1 Bedroom</option>
            <option value="2 BR">2 Bedrooms</option>
            <option value="3 BR">3 Bedrooms</option>
            <option value="4+ BR">4+ Bedrooms</option>
          </select>
          {errors.bedrooms && <p className="mt-1 text-xs text-coral">{errors.bedrooms.message}</p>}
        </div>
        <div>
          <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
            Monthly Budget *
          </label>
          <select
            {...register('budget', { required: 'Please select a budget' })}
            className={selectClass}
          >
            <option value="">Select…</option>
            <option value="Under $1,400">Under $1,400</option>
            <option value="$1,400–$1,800">$1,400 – $1,800</option>
            <option value="$1,800–$2,200">$1,800 – $2,200</option>
            <option value="$2,200–$2,800">$2,200 – $2,800</option>
            <option value="$2,800–$3,500">$2,800 – $3,500</option>
            <option value="$3,500+">$3,500+</option>
          </select>
          {errors.budget && <p className="mt-1 text-xs text-coral">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Move-in Timeline *
        </label>
        <select
          {...register('timeline', { required: 'Please select a timeline' })}
          className={selectClass}
        >
          <option value="">Select…</option>
          <option value="ASAP">As soon as possible</option>
          <option value="Within 30 days">Within 30 days</option>
          <option value="1–3 months">1–3 months</option>
          <option value="3+ months">3+ months</option>
          <option value="Flexible">Flexible</option>
        </select>
        {errors.timeline && <p className="mt-1 text-xs text-coral">{errors.timeline.message}</p>}
      </div>

      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Preferred area or neighborhood (optional)
        </label>
        <input
          {...register('area')}
          className={inputClass}
          placeholder="Royal Palm Beach, Wellington, Loxahatchee…"
        />
      </div>

      <div>
        <label className="font-sans text-xs font-semibold text-gray-600 mb-1.5 block">
          Anything else? (optional)
        </label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Pets, must-haves, questions…"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gold text-navy font-sans font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
      >
        Send My Rental Inquiry
      </button>
    </form>
  );
}
