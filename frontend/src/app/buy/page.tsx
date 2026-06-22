import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { neighborhoods } from '@/data/neighborhoods';

export const metadata: Metadata = {
  title: 'Buy a Home in South Florida',
  description:
    'Looking to buy a home in South Florida? Jose Costa provides expert buyer representation in English, Spanish, and Portuguese across Miami-Dade, Broward, and Palm Beach counties.',
};

const STEPS = [
  {
    number: '01',
    title: 'Free Consultation',
    body: "We start with a no-pressure call to understand your must-haves, budget, and timeline. Jose will be honest about what you can realistically find in your target range.",
  },
  {
    number: '02',
    title: 'Smart Search',
    body: "Jose doesn't just send you MLS links. He curates properties based on your priorities, pre-screens for issues, and gets you in to see homes before competing offers appear.",
  },
  {
    number: '03',
    title: 'Making the Offer',
    body: "Jose analyzes comparable sales, advises on offer strategy, and handles negotiations. In South Florida's competitive market, how you make an offer matters as much as the price.",
  },
  {
    number: '04',
    title: 'Due Diligence',
    body: 'Inspections, appraisals, title searches — Jose coordinates the entire process and explains every document in plain language (in your preferred language).',
  },
  {
    number: '05',
    title: 'Closing Day',
    body: 'Jose walks you through the closing statement, attends the closing with you, and hands you the keys.',
  },
];

export default function BuyPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            For Buyers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Find your South Florida home with an expert by your side.
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            You can browse listings on Zillow. What you can&apos;t get from Zillow is someone who
            negotiates on your behalf, spots red flags before you&apos;re locked in, and has
            relationships with listing agents before properties hit the market.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              Book a Buyer Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Buyer Journey ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="How Jose guides buyers from search to keys"
            subtitle="A clear, step-by-step process with no surprises — and someone in your corner at every stage."
          />
          <div className="mt-14 flex flex-col md:flex-row gap-0 md:gap-6">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex md:flex-col gap-6 md:gap-4 flex-1">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-cream-dark"
                    style={{ left: '50%' }}
                    aria-hidden="true"
                  />
                )}
                {/* Mobile left border */}
                <div className="md:hidden w-px bg-cream-dark self-stretch ml-6 mt-12" aria-hidden="true" />

                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 pb-8 md:pb-0">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                    <span className="font-sans text-xs font-bold text-gold">{step.number}</span>
                  </div>
                  <div className="md:text-center">
                    <h3 className="font-sans font-semibold text-navy text-base">{step.title}</h3>
                    <p className="mt-2 font-sans text-sm text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Buyer Representation Matters ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Know Your Rights"
                title="Buyer representation costs you nothing."
                align="left"
              />
              <p className="mt-6 font-sans text-gray-700 leading-relaxed">
                In Florida, sellers pay both the listing agent&apos;s and buyer&apos;s agent&apos;s
                commission. Working with Jose as your buyer&apos;s agent costs you nothing out of
                pocket — and gives you professional representation throughout the transaction.
              </p>
              <p className="mt-4 font-sans text-gray-700 leading-relaxed">
                Without a buyer&apos;s agent, you are negotiating against a professional whose job
                is to protect the seller&apos;s interests. That is not a fair fight. Jose levels
                the playing field.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-navy mb-6">
                What Jose does for buyers
              </h3>
              <ul className="space-y-4">
                {[
                  'Comparative market analysis on every home you consider',
                  'Pre-screening for red flags before you tour',
                  'Negotiation strategy and offer management',
                  'Coordination of inspections, appraisals, and title',
                  'Plain-language explanation of every document',
                  'Guidance in English, Spanish, or Portuguese',
                  'Present at closing to walk you through every line item',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Areas We Serve ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title="Areas Jose serves buyers"
            subtitle="Active in all major South Florida markets across three counties."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="font-sans text-sm font-medium px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:border-gold hover:text-navy transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/neighborhoods"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              Explore All Neighborhoods →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your search?"
        subtitle="Book a free, no-pressure consultation with Jose. He'll tell you honestly what your budget can get you in today's market."
        primaryCTA={{ label: 'Book a Buyer Consultation', href: '/contact' }}
        secondaryCTA={{ label: 'Browse Neighborhoods', href: '/neighborhoods' }}
      />
    </>
  );
}
