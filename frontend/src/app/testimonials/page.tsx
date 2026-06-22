'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import { testimonials } from '@/data/testimonials';

const LANGUAGES = ['All', 'English', 'Spanish', 'Portuguese'] as const;
type LangFilter = (typeof LANGUAGES)[number];

const LANG_LABELS: Record<string, string> = {
  All: 'All',
  English: 'English',
  Spanish: 'Español',
  Portuguese: 'Português',
};

export default function TestimonialsPage() {
  const [activeLang, setActiveLang] = useState<LangFilter>('All');

  const filtered =
    activeLang === 'All'
      ? testimonials
      : testimonials.filter((t) => t.language === activeLang);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Client Stories
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            What Jose&apos;s Clients Are Saying
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-xl">
            Real stories from buyers and sellers across South Florida — in English, Español, and
            Português.
          </p>
        </div>
      </section>

      {/* ─── Testimonials Grid ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Language filter */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`font-sans text-sm font-semibold px-5 py-2 rounded-full border transition-colors ${
                  activeLang === lang
                    ? 'bg-navy text-white border-navy'
                    : 'border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                }`}
              >
                {LANG_LABELS[lang]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                name={t.name}
                location={t.location}
                transactionType={t.transactionType}
                language={t.language}
                year={t.year}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pull quote ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl text-navy italic leading-relaxed">
            &ldquo;My job isn&apos;t done when you sign. It&apos;s done when you&apos;re settled
            and happy in your new home — and when you feel confident recommending me to someone you
            care about.&rdquo;
          </p>
          <p className="mt-6 font-sans text-sm font-semibold text-gold uppercase tracking-widest">
            — Jose Costa
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
