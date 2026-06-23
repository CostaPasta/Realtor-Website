import type { Metadata } from 'next';
import { Search, Languages, ShieldCheck, Users, TrendingUp, ClipboardCheck, MessageCircle, Phone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import LandlordPropertyForm from '@/components/LandlordPropertyForm';

export const metadata: Metadata = {
  title: 'Rental Homes in Palm Beach County',
  description:
    'Looking to rent a home in Royal Palm Beach, West Palm Beach, Wellington, or surrounding Palm Beach County? Jose Costa helps renters find quality homes and helps landlords find reliable tenants — in English, Spanish, and Portuguese.',
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
    body: 'Jose handles every part of the rental process in English, Spanish, or Portuguese — applications, lease review, move-in walkthroughs.',
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
    body: "Jose's English, Spanish, and Portuguese fluency opens the door to qualified tenants across South Florida's multilingual communities.",
  },
  {
    icon: ShieldCheck,
    title: 'Tenant screening',
    body: 'Every applicant goes through a full screening process: income verification, rental history, references. Jose presents only qualified candidates.',
  },
  {
    icon: TrendingUp,
    title: 'Market-rate pricing',
    body: "Jose knows what comparable properties rent for in every neighborhood he works in. He'll price your property to attract quality tenants quickly without leaving money on the table.",
  },
  {
    icon: ClipboardCheck,
    title: 'Full-process management',
    body: "From listing and showings through lease signing and move-in, Jose manages the entire process so you don't have to.",
  },
];

export default function RentalsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Rentals &amp; Property Management
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Find your next home to rent in Palm Beach County.
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            Jose Costa has helped hundreds of families find quality rental homes across western
            Palm Beach County — in English, Spanish, and Portuguese. Whether you&apos;re looking
            for your next rental or you&apos;re a property owner seeking reliable tenants, Jose
            knows this market.
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
      <section id="renters" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="For Renters"
              title="Find the right home for your family."
            />
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {RENTER_CARDS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-10 max-w-3xl bg-gold/10 border border-gold/30 rounded-2xl p-6">
              <p className="font-sans text-sm text-navy leading-relaxed">
                Jose&apos;s rental listings in Palm Beach County typically range from{' '}
                <span className="font-bold">$1,400 to $3,000 per month</span> for 2–4 bedroom
                homes. Contact him to discuss current availability.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="mt-10 bg-navy rounded-2xl p-8 md:p-10 text-center">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3">
                Ready to find a rental?
              </h3>
              <p className="font-sans text-sm text-white/70 mb-6 max-w-md mx-auto">
                Contact Jose on WhatsApp or call (954) 614-1351.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/19546141351"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+19546141351"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  <Phone size={18} />
                  (954) 614-1351
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── For Property Owners ─── */}
      <section id="landlords" className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="For Property Owners"
              title="Find reliable tenants. Manage it right."
            />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              Jose has placed tenants in rental properties across Royal Palm Beach, Loxahatchee,
              West Palm Beach, and beyond. His multilingual network gives property owners access
              to a larger, more qualified tenant pool — and his deep roots in the community mean
              he knows the difference between a reliable long-term tenant and someone who isn&apos;t
              the right fit.
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDLORD_CARDS.map(({ icon: Icon, title, body }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100">
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
            <div className="mt-14 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
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
