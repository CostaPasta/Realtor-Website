import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Calculator, PiggyBank, BadgeDollarSign, Languages } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ProcessTimeline from '@/components/ProcessTimeline';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { neighborhoods } from '@/data/neighborhoods';

export const metadata: Metadata = {
  title: 'Buy a Home in South Florida',
  description:
    'Looking to buy your first home in Palm Beach County? Jose Costa provides expert buyer representation in English, Spanish, and Portuguese across western Palm Beach County, Broward, and South Florida.',
};

const FIRST_TIME_BUYER_ITEMS = [
  {
    icon: Calculator,
    title: 'What can I actually afford?',
    body: "Before you search, Jose will walk you through a realistic picture of what your budget covers in today's Palm Beach County market — including HOA fees, property taxes, and insurance, not just the purchase price.",
  },
  {
    icon: PiggyBank,
    title: 'Down payment options',
    body: 'There are multiple first-time buyer programs in Florida, including FHA loans (3.5% down), conventional loans, and down payment assistance programs for qualifying buyers. Jose will connect you with the right lender.',
  },
  {
    icon: BadgeDollarSign,
    title: 'No cost to you as a buyer',
    body: "In Florida, the seller pays both agents' commissions. Jose's representation costs you nothing — and he negotiates on your behalf every step of the way.",
  },
  {
    icon: Languages,
    title: 'Available in your language',
    body: 'Every document, every phone call, every step of the process — in English, Spanish, or Portuguese. No confusion. No getting lost in the details.',
  },
];

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
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="The Process"
              title="How Jose guides buyers from search to keys"
              subtitle="A clear, step-by-step process with no surprises — and someone in your corner at every stage."
            />
          </AnimateOnScroll>
          <div className="mt-14">
            <ProcessTimeline steps={STEPS} />
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

      {/* ─── First-Time Buyers ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="First-Time Buyers"
              title="Buying your first home? Jose has done this hundreds of times."
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              Buying your first home is the most significant financial decision most people make
              — and it can feel overwhelming. Jose&apos;s job is to make that process feel
              manageable, not mysterious. He&apos;ll tell you honestly what your budget can get
              you, walk you through every document before you sign it, and be available in
              English, Spanish, or Portuguese throughout.
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FIRST_TIME_BUYER_ITEMS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-sans font-semibold text-navy text-base mb-2">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Areas We Serve ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Coverage"
            title="Areas Jose serves buyers"
            subtitle="Active across western Palm Beach County, Broward, the Treasure Coast, and beyond."
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
