import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, KeyRound } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValuationForm from '@/components/ValuationForm';
import ProcessTimeline from '@/components/ProcessTimeline';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Sell Your South Florida Home',
  description:
    "Selling your home in South Florida? Jose Costa provides expert seller representation with proven pricing strategy, targeted marketing, and negotiation experience in English, Spanish, and Portuguese.",
};

const STEPS = [
  {
    number: '01',
    title: 'Free Home Valuation',
    body: "Jose provides a detailed comparative market analysis — not a Zestimate, but a real analysis of what your specific home is worth in the current market.",
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
    title: 'Showings & Offers',
    body: "Jose manages all showing logistics, screens buyers for qualification, and presents offers with full analysis so you make informed decisions.",
  },
  {
    number: '05',
    title: 'Negotiation & Closing',
    body: "The best price isn't always the highest number on the first offer. Jose advises on terms, contingencies, and timing to maximize your net proceeds.",
  },
];

export default function SellPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            For Sellers
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Sell your South Florida home for what it&apos;s worth.
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Most homeowners leave money on the table when they sell — not because of bad luck, but
            because of poor pricing strategy, weak marketing, and inexperienced negotiation. Jose
            fixes all three.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              Request a Free Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Seller Process ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Jose's Seller Process"
              title="From valuation to closing — here's how it works"
              subtitle="A proven process that consistently delivers above-asking results in the South Florida market."
            />
          </AnimateOnScroll>
          <div className="mt-14">
            <ProcessTimeline steps={STEPS} />
          </div>
        </div>
      </section>

      {/* ─── Free Valuation Form ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              eyebrow="Get Started"
              title="What's your home worth?"
              subtitle="Get a free, no-obligation home valuation from Jose — a real analysis, not an algorithm estimate."
            />
            <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm">
              <ValuationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sell or Lease ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              title="Not ready to sell? Consider leasing your property."
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              Jose doesn&apos;t only help sellers — he also helps property owners find quality
              tenants and lease their homes at market rate. If you&apos;re considering your
              options before committing to a sale, Jose can give you an honest comparison of what
              you&apos;d net from a sale versus what you&apos;d earn as a landlord in today&apos;s
              rental market.
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateOnScroll>
              <div className="bg-cream rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <Home size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Sell — and move on with your equity.
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Jose prices, markets, and negotiates your sale to maximize your net proceeds, so
                  you can take your equity and move on to what&apos;s next.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.08}>
              <div className="bg-cream rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <KeyRound size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  Lease — and build long-term wealth.
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Jose finds and screens reliable tenants and manages the leasing process, so your
                  property generates income while you build equity over time.
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
        primaryCTA={{ label: 'Request a Free Valuation', href: '/contact' }}
        secondaryCTA={{ label: 'See Market Updates', href: '/market-updates' }}
      />
    </>
  );
}
