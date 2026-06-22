'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { marketUpdates } from '@/data/market-updates';

const COUNTY_COLORS: Record<string, string> = {
  'South Florida': 'bg-navy/10 text-navy',
  'Miami-Dade': 'bg-coral/10 text-coral',
  'Broward': 'bg-gold/10 text-gold-dark',
  'Palm Beach': 'bg-green-50 text-green-700',
};

interface EmailForm {
  name: string;
  email: string;
}

function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>();

  // TODO: Connect to Mailchimp, ConvertKit, or Resend
  const onSubmit = (data: EmailForm) => {
    console.log('Email signup:', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="font-sans text-navy font-semibold text-center py-4">
        You&apos;re on the list! Jose will be in touch with the next update.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <input
          {...register('name', { required: true })}
          placeholder="Your name"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
        />
      </div>
      <div className="flex-1">
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="your@email.com"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-navy text-white font-sans font-semibold rounded-lg hover:bg-navy-light transition-colors text-sm whitespace-nowrap"
      >
        Get Updates
      </button>
    </form>
  );
}

export default function MarketUpdatesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Market Intelligence
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            South Florida Market Updates — Straight from the Field
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-2xl leading-relaxed">
            Jose shares his read on the South Florida real estate market regularly — no national
            statistics misapplied to local conditions, just ground-level insight from someone who
            is actually writing offers here.
          </p>
        </div>
      </section>

      {/* ─── Email Signup ─── */}
      <section className="py-10 bg-cream border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-xl font-bold text-navy mb-2 text-center">
              Get market updates in your inbox
            </p>
            <p className="font-sans text-sm text-gray-600 mb-5 text-center">
              No spam. Just Jose&apos;s honest read on the South Florida market when something
              worth knowing happens.
            </p>
            <EmailSignup />
          </div>
        </div>
      </section>

      {/* ─── Updates Grid ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Updates"
            title="Market Reports"
            align="left"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketUpdates.map((update) => {
              const date = new Date(update.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <Link
                  key={update.id}
                  href={`/market-updates/${update.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-gold hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-sans text-xs font-semibold px-3 py-1 rounded-full ${COUNTY_COLORS[update.county] ?? 'bg-gray-100 text-gray-600'}`}
                    >
                      {update.county}
                    </span>
                    <span className="font-sans text-xs text-gray-400">{date}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-navy leading-snug group-hover:text-gold transition-colors mb-3">
                    {update.title}
                  </h2>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {update.summary}
                  </p>
                  <p className="mt-4 font-sans text-xs font-semibold text-gold group-hover:text-gold-dark transition-colors">
                    Read more →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
