import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Home, KeyRound, ShieldCheck, Clock, Lock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValuationForm from '@/components/ValuationForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Sell Your South Florida Home',
  description:
    "Selling your home in South Florida? Jose Costa provides expert seller representation with proven pricing strategy, targeted marketing, and negotiation experience in English, Spanish, and Portuguese.",
};

const STATS = [
  { value: '$10M+', label: 'In closed sales volume' },
  { value: '60+', label: 'Homes listed and sold' },
];

const STEPS = [
  {
    number: '01',
    title: 'Free Home Valuation',
    body: "Jose runs a comparative market analysis on your home. That means real sales data from comparable properties, not an algorithm estimate.",
  },
  {
    number: '02',
    title: 'Pre-Listing Prep',
    body: "Small investments in staging, repairs, and professional photography can yield thousands in return. Jose advises on what's worth spending and what isn't.",
  },
  {
    number: '03',
    title: 'Marketing Your Home',
    body: "Jose's listings receive professional photography, targeted social media promotion, and placement on MLS, Zillow, Realtor.com, and international platforms that reach the Brazilian and Latin American buyer pool.",
  },
  {
    number: '04',
    title: 'Showings and Offers',
    body: "Jose handles showing logistics and screens buyers for qualification. When offers come in, he walks you through each one with full analysis.",
  },
  {
    number: '05',
    title: 'Negotiation and Closing',
    body: "The best offer is not always the highest number on the first page. Jose advises on terms, contingencies, and timing so you close at the best number available.",
  },
];

const sellerTestimonials = testimonials.filter((t) => t.transactionType === 'Seller');

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'No obligation. Just honest market data.' },
  { icon: Clock, label: 'Jose responds within 24 hours' },
  { icon: Lock, label: 'Completely confidential' },
];

export default function SellPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-selling.jpg"
          alt="Selling a home in South Florida"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: 'linear-gradient(to bottom, rgba(8, 18, 28, 0.88) 0%, rgba(8, 18, 28, 0.82) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            For Sellers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Sell your South Florida home for what it&apos;s worth.
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
            Most sellers walk away with less than their home was worth. Usually it comes down to
            pricing, marketing reach, or a mishandled negotiation. Jose has spent 15+ years
            getting all three right.
          </p>
          <div className="mt-8">
            <a
              href="#valuation"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              Request a Free Valuation
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-navy-dark py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/10 max-w-lg mx-auto w-full">
            {STATS.map((stat) => (
              <div key={stat.value} className="text-center px-4 py-2">
                <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seller Process ─── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                Jose&apos;s Seller Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                From valuation to closing day
              </h2>
              <div className="w-10 h-0.5 bg-gold mx-auto mt-5" />
              <p className="mt-5 font-sans text-base text-white/55 max-w-lg mx-auto leading-relaxed">
                Jose has listed and closed 60+ homes across South Florida. The process is the same every time.
              </p>
            </div>
          </AnimateOnScroll>

          <div>
            {STEPS.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.08}>
                <div className={`relative flex items-start gap-6 md:gap-10 ${i < STEPS.length - 1 ? 'pb-8 mb-8 border-b border-white/[0.08]' : ''}`}>
                  {/* Giant ghost number — decorative texture */}
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none hidden md:block"
                    style={{ fontSize: '8rem', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Step indicator */}
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
                    <span className="font-sans text-xs font-bold text-gold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="What Sellers Say"
              title="Real results from real sellers"
              subtitle="Every seller is different. Every neighborhood is different. The commitment stays the same."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {sellerTestimonials.map((t, i) => (
              <AnimateOnScroll key={t.id} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Free Valuation Form ─── */}
      <section id="valuation" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <SectionHeading
                eyebrow="Get Started"
                title="What's your home worth?"
                subtitle="Get a free, no-obligation home valuation from Jose. A real analysis, not an algorithm estimate."
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="mt-10 bg-white rounded-2xl p-8 border border-cream-dark shadow-sm">
                <ValuationForm />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon size={13} className="text-gold shrink-0" />
                    <span className="font-sans text-xs text-gray-400">{label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Sell or Lease ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Your Options"
              title="Sell — or consider leasing."
              subtitle="Not ready to commit? Jose can model both paths for you: what you'd net from a sale today versus what you'd earn holding the property as a rental."
            />
          </AnimateOnScroll>
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateOnScroll>
              <div className="bg-white rounded-2xl p-8 h-full border border-cream-dark shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <Home size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Sell and move on with your equity.
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Jose prices, markets, and negotiates your sale to get you the most from it. You
                  take your equity and move on.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <div className="bg-white rounded-2xl p-8 h-full border border-cream-dark shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <KeyRound size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Lease and build long-term wealth.
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Jose finds and screens tenants and manages the leasing process. Your property
                  generates income while you hold on to it.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/rentals"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              Learn More About Leasing Your Property →
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Thinking about selling?"
        subtitle="The right time to talk to Jose is before you've made any decisions. Get a free valuation and a candid read on today's market."
        primaryCTA={{ label: 'Request a Free Valuation', href: '#valuation' }}
        secondaryCTA={{ label: 'See Market Updates', href: '/market-updates' }}
      />
    </>
  );
}
