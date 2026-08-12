import type { Metadata } from 'next';
import Image from 'next/image';
import { Search, Languages, ShieldCheck, Users, TrendingUp, ClipboardCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import LandlordPropertyForm from '@/components/LandlordPropertyForm';
import RenterInquiryForm from '@/components/RenterInquiryForm';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Rental Homes in Palm Beach County',
  description:
    'Looking to rent a home in Royal Palm Beach, West Palm Beach, Wellington, or surrounding Palm Beach County? Jose Costa helps renters find quality homes and helps landlords find reliable tenants, in English, Spanish, and Portuguese.',
  keywords: [
    'homes for rent Royal Palm Beach',
    'rental homes Palm Beach County',
    'casas de alquiler Palm Beach',
    'casas para alugar Palm Beach',
    'rentals western Palm Beach County',
    'property management Palm Beach County',
    'trilingual property rental Florida',
  ],
};

const RENTER_CARDS = [
  {
    icon: Search,
    title: 'Tell Jose what you need',
    body: "Bedrooms, budget, neighborhood preference, move-in timeline. He'll match you with available properties before they're widely listed.",
  },
  {
    icon: Languages,
    title: 'In your language',
    body: 'Jose handles every part of the rental process in English, Spanish, or Portuguese: applications, lease review, and move-in walkthroughs.',
  },
  {
    icon: ShieldCheck,
    title: 'No surprises',
    body: "Jose explains every line of the lease, what's included, what's not, and what your rights are as a tenant in Florida.",
  },
];

const LANDLORD_CARDS = [
  {
    icon: Users,
    title: 'Wider tenant pool',
    body: "Jose works in English, Spanish, and Portuguese. That reaches qualified tenants in communities that most single-language agents never get in front of.",
  },
  {
    icon: ShieldCheck,
    title: 'Tenant screening',
    body: 'Every applicant goes through a full screening process: income verification, rental history, references. Jose presents only qualified candidates.',
  },
  {
    icon: TrendingUp,
    title: 'Market-rate pricing',
    body: "Jose knows what comparable properties rent for in every neighborhood he works in. He'll price yours to fill quickly at a rate that holds.",
  },
  {
    icon: ClipboardCheck,
    title: 'Full-process management',
    body: "Jose handles listing, showings, lease signing, and move-in coordination. You hand it off; he takes it from there.",
  },
];

const renterTestimonials = testimonials.filter((t) => t.transactionType === 'Renter');

export default function RentalsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-rental.jpg"
          alt="Rental homes in Palm Beach County"
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
            Rentals &amp; Property Management
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Find your next home to rent in Palm Beach County.
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Jose Costa has placed hundreds of families in rental homes across western Palm Beach
            County, working in English, Spanish, and Portuguese. He works with renters and
            landlords both, and he knows this market well.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#renters"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              Find a Rental Home
            </a>
            <a
              href="#landlords"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              I&apos;m a Landlord
            </a>
          </div>
        </div>
      </section>

      {/* ─── For Renters ─── */}
      <section id="renters" className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="For Renters"
              title="Find the right home for your family."
            />
          </AnimateOnScroll>

          {/* ── Pricing callout ── */}
          <AnimateOnScroll>
            <div className="mt-8 max-w-2xl mx-auto text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-navy">
                $1,400 <span className="text-gold">–</span> $3,000
                <span className="font-sans text-lg font-normal text-gray-500 ml-2">/ mo</span>
              </p>
              <p className="mt-2 font-sans text-sm text-gray-500">
                Typical range for 2–4 bedroom homes across western Palm Beach County
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['Royal Palm Beach', 'Wellington', 'Loxahatchee', 'West Palm Beach'].map((area) => (
                  <span
                    key={area}
                    className="inline-block px-3 py-1 bg-white border border-cream-dark rounded-full font-sans text-xs text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Feature cards ── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {RENTER_CARDS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 h-full border border-cream-dark shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* ── Renter testimonials ── */}
          <div className="mt-14 pt-10 border-t border-cream-dark grid md:grid-cols-2 gap-6">
            {renterTestimonials.map((t, i) => (
              <AnimateOnScroll key={t.id} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>

          {/* ── Renter inquiry form ── */}
          <AnimateOnScroll>
            <div className="mt-14 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl border border-cream-dark shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-[2fr_3fr]">
                  {/* Left: Jose photo + copy */}
                  <div className="relative hidden md:block min-h-[480px]">
                    <Image
                      src="/images/jose-portrait.jpeg"
                      alt="Jose Costa, Realtor"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 0px, 40vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(8,18,28,0.80) 0%, rgba(8,18,28,0.20) 55%, transparent 100%)',
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-serif text-lg font-bold text-white leading-snug">
                        Tell Jose what you&apos;re looking for.
                      </p>
                      <p className="mt-2 font-sans text-sm text-white/70 leading-relaxed">
                        He&apos;ll reach out within 24 hours with available properties that match, often before they hit the open market.
                      </p>
                    </div>
                  </div>

                  {/* Right: form */}
                  <div className="p-8 md:p-10">
                    <h3 className="font-serif text-xl font-bold text-navy mb-1">
                      Submit your rental criteria
                    </h3>
                    <p className="font-sans text-sm text-gray-500 mb-7">
                      No commitment. Jose will be in touch within 24 hours.
                    </p>
                    <RenterInquiryForm />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── For Property Owners ─── */}
      <section id="landlords" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="For Property Owners"
              title="Find reliable tenants. Manage it right."
            />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              Jose has placed tenants across Royal Palm Beach, Loxahatchee, West Palm Beach, and
              surrounding areas. Working in three languages, he draws from a wider applicant pool
              than most agents. He has lived in this community for over two decades, which means
              he knows what a reliable long-term tenant actually looks like.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDLORD_CARDS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-6 h-full border border-cream-dark">
                  <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-14 max-w-2xl mx-auto bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-serif text-xl font-bold text-navy mb-2 text-center">
                Contact Jose about your property
              </h3>
              <p className="font-sans text-sm text-gray-600 mb-8 text-center">
                Tell Jose about your rental and he&apos;ll follow up with next steps.
              </p>
              <LandlordPropertyForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Questions about renting or leasing in Palm Beach County?"
        subtitle="Whether you're a renter looking for your next home or a property owner looking for help, Jose is available in English, Spanish, and Portuguese."
        primaryCTA={{ label: 'Chat on WhatsApp', href: 'https://wa.me/19546141351' }}
        secondaryCTA={{ label: 'Call (954) 614-1351', href: 'tel:+19546141351' }}
      />
    </>
  );
}
