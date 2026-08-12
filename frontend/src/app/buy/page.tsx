import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator, PiggyBank, BadgeDollarSign, Languages, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import WhyJoseBackground from '@/components/WhyJoseBackground';
import TestimonialCard from '@/components/TestimonialCard';
import { neighborhoods } from '@/data/neighborhoods';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Buy a Home in South Florida',
  description:
    'Looking to buy a home in Palm Beach County? Jose Costa provides expert buyer representation in English, Spanish, and Portuguese across Palm Beach County, Broward, and South Florida.',
};

const BUYER_ITEMS = [
  {
    icon: Calculator,
    title: 'What can I actually afford?',
    body: "Before you search, Jose walks you through what your budget actually covers in today's Palm Beach County market: the purchase price, but also HOA fees, property taxes, and insurance.",
  },
  {
    icon: PiggyBank,
    title: 'Down payment options',
    body: 'Most buyers have more financing options than they realize: FHA loans (3.5% down), conventional financing, VA loans, and down payment assistance programs for qualifying buyers. Jose connects you with a lender who fits your situation.',
  },
  {
    icon: BadgeDollarSign,
    title: 'No cost to you as a buyer',
    body: "In Florida, the seller pays both agents' commissions. Jose's representation costs you nothing, and he negotiates on your behalf every step of the way.",
  },
  {
    icon: Languages,
    title: 'Available in your language',
    body: 'Jose handles every part of the process in English, Spanish, or Portuguese. Applications, document review, walkthroughs, phone calls.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Get Pre-Approved',
    body: "Get your financing in order before you search. Jose connects you with trusted local lenders, or works alongside the bank you already have a relationship with. Pre-approval means you move fast when the right home appears.",
    numberColor: '#C4A35A',
    dark: false,
  },
  {
    number: '02',
    title: 'Buyer Consultation',
    body: "Jose sits down with you to understand your must-haves, your budget, and your timeline. He'll be honest about what you can realistically find and in which neighborhoods, so your search has direction from day one.",
    numberColor: '#1A7AAF',
    dark: false,
  },
  {
    number: '03',
    title: 'Smart Search',
    body: "Jose doesn't just send you MLS links. He curates properties based on your priorities, pre-screens for red flags, and uses his agent network to surface homes before competing offers appear.",
    numberColor: '#D85A30',
    dark: false,
  },
  {
    number: '04',
    title: 'Making the Offer',
    body: "Jose analyzes comparable sales, advises on offer strategy, and handles negotiations. In South Florida's competitive market, how you make an offer matters as much as the price.",
    numberColor: '#2D7A44',
    dark: false,
  },
  {
    number: '05',
    title: 'Inspection and Review',
    body: "Jose coordinates inspections, appraisals, and title searches, and explains every document before you sign it. He does this in English, Spanish, or Portuguese.",
    numberColor: '#2D5F8A',
    dark: false,
  },
  {
    number: '06',
    title: 'Closing Day and Beyond',
    body: "Jose attends closing with you and walks you through the closing statement line by line. After that he stays in touch, connects you with contractors he knows, and picks up the phone when questions come up.",
    numberColor: '#C4A35A',
    dark: true,
  },
];

const STATS = [
  { value: '400+', label: 'Clients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '3', label: 'Languages' },
];

export default function BuyPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-buying.jpg"
          alt="Buying a home in South Florida"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
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
          <p className="mt-3 font-sans text-xs text-white/50">
            Free buyer representation · No obligation · In your language
          </p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-navy border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="font-sans text-[11px] md:text-xs text-white/50 mt-1 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-20 md:py-24 bg-cream relative overflow-hidden">
        <WhyJoseBackground extended />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="The Process"
              title="From first call to closing day"
              subtitle="Six clear steps. One agent in your corner the whole way."
            />
          </AnimateOnScroll>
          <div className="mt-14 max-w-2xl mx-auto flex flex-col">
            {STEPS.map((step, i) => (
              <AnimateOnScroll key={step.number} delay={i * 0.07}>
                <div
                  className="relative rounded-2xl p-7 overflow-hidden"
                  style={{
                    backgroundColor: step.dark ? '#0D2442' : '#FFFFFF',
                    border: step.dark ? '1px solid rgba(56,192,106,0.55)' : '1px solid #EDE8DE',
                    boxShadow: step.dark
                      ? '0 6px 28px rgba(8,18,28,0.45), 0 0 0 1px rgba(56,192,106,0.12), 0 0 18px rgba(56,192,106,0.22), 0 0 52px rgba(56,192,106,0.08)'
                      : '0 2px 16px rgba(13,36,66,0.07), 0 1px 4px rgba(13,36,66,0.04)',
                  }}
                >
                  <div className="relative">
                    <span
                      className="inline-block font-sans text-xs font-black tracking-widest uppercase mb-3"
                      style={{ color: step.numberColor }}
                    >
                      Step {step.number}
                    </span>
                    <h3
                      className="font-serif font-bold text-xl mb-3"
                      style={{ color: step.dark ? '#ffffff' : '#0D2442' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: step.dark ? 'rgba(255,255,255,0.70)' : '#4B5563' }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-2" aria-hidden="true">
                    <ChevronDown size={24} className="text-gold/50" />
                  </div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Local Knowledge / Aerial Neighborhood ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image
          src="/images/beach-new.avif"
          alt=""
          fill
          className="object-cover object-center select-none"
          draggable={false}
          priority={false}
          sizes="100vw"
        />
        {/* Navy overlay for text legibility */}
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-5">
              Local Knowledge
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Fifteen years reading<br className="hidden md:block" /> the South Florida market.
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
              Jose has spent 15 years in this market. He knows which streets have appreciated,
              which school zones drive buyer demand, and where prices have not yet caught up to
              what a neighborhood is becoming.
            </p>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center mt-8 font-sans text-sm font-semibold text-gold hover:text-white transition-colors gap-1"
            >
              Explore the neighborhoods he knows best →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Buyer Testimonials ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="What Buyers Say"
              title="Real buyers. Real results."
            />
          </AnimateOnScroll>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {testimonials
              .filter((t) => t.transactionType === 'Buyer')
              .map((t, i) => (
                <AnimateOnScroll key={t.id} delay={i * 0.08}>
                  <TestimonialCard {...t} />
                </AnimateOnScroll>
              ))}
          </div>
        </div>
      </section>

      {/* ─── Why Buyer Representation Matters ─── */}
      <section className="pt-16 pb-20 md:pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Photo — fills full column height */}
            <AnimateOnScroll className="relative rounded-2xl overflow-hidden ring-2 ring-gold/30 min-h-[420px] md:min-h-0">
              <Image
                src="/images/jose-portrait.jpeg"
                alt="Jose Costa, South Florida Realtor"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-sans text-xs font-semibold text-gold uppercase tracking-widest">Jose Costa</p>
                <p className="font-sans text-xs text-white/70 mt-0.5">Palm Beach County Realtor · FL Lic. #3132965</p>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <AnimateOnScroll className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Know Your Rights"
                title="Buyer representation costs you nothing."
                align="left"
                light
              />
              <p className="mt-6 font-sans text-white/70 leading-relaxed">
                In Florida, sellers pay both the listing agent&apos;s and buyer&apos;s agent&apos;s
                commission. Working with Jose as your buyer&apos;s agent costs you nothing out of
                pocket and gives you professional representation throughout the transaction.
              </p>
              <p className="mt-4 font-sans text-white/70 leading-relaxed">
                Without a buyer&apos;s agent, you are negotiating against a professional whose job
                is to protect the seller&apos;s interests. Jose&apos;s job is to protect yours.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    title: 'Market Analysis',
                    desc: 'On every property you are seriously considering, before an offer goes in, including homes you have not toured yet.',
                  },
                  {
                    title: 'Zero Cost to You',
                    desc: 'The seller pays both commissions. Representation costs you nothing.',
                  },
                  {
                    title: 'Agent Network Access',
                    desc: 'Off-market listings and early access before properties hit Zillow.',
                  },
                  {
                    title: 'In Your Language',
                    desc: 'Every call, every document, in English, Spanish, or Portuguese.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif font-bold text-white text-base leading-tight">{item.title}</p>
                    <p className="font-sans text-xs text-white/55 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Common Questions ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Common Questions"
              title="Whether it's your first home or your fifth, Jose has done this hundreds of times."
            />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              Buying a home, whether for the first time or the tenth, can feel like a lot. Jose&apos;s
              job is to make the process clear and manageable. He&apos;ll give you an honest read on
              what your budget can get you, walk you through every document before you sign it, and
              be available in English, Portuguese, or Spanish throughout.
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUYER_ITEMS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-sans font-bold text-navy text-base mb-2">{title}</h3>
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
            subtitle="Active across Palm Beach County and Broward County."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods.filter((n) => !n.hidden).map((n) => (
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
