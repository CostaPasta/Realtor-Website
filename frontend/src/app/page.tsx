import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Home, Handshake, KeyRound } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { neighborhoods } from '@/data/neighborhoods';
import { testimonials } from '@/data/testimonials';

const STATS = [
  { value: '15+', label: 'Years of Experience' },
  { value: '44+', label: 'Families Helped' },
  { value: '3', label: 'Languages Spoken' },
  { value: '$10M+', label: 'In Closed Sales' },
];

const FEATURES = [
  {
    icon: MessageSquare,
    title: 'Three Languages, One Realtor',
    body: "Jose communicates natively in English, Spanish, and Portuguese — a critical advantage in South Florida's diverse international buyer market.",
    iconBg: '#0D2442',
    iconColor: '#C4A35A',
  },
  {
    icon: Home,
    title: 'Deep Local Expertise',
    body: 'With over 11 years in the South Florida market, Jose knows which neighborhoods are undervalued, which streets to avoid, and where the best schools are.',
    iconBg: '#C4A35A',
    iconColor: '#0D2442',
  },
  {
    icon: Handshake,
    title: 'You Have Representation',
    body: 'Zillow shows you houses. Jose negotiates, protects your interests, navigates inspections, and advocates for you through closing.',
    iconBg: '#D85A30',
    iconColor: '#fff',
  },
  {
    icon: KeyRound,
    title: 'From Rental to Ownership — Jose Knows the Journey',
    body: "Many of Jose's clients start by renting through him and return years later to buy their first home. He understands both sides of the South Florida housing market and is genuinely invested in your long-term story, not just a single transaction.",
    iconBg: '#1A3A5C',
    iconColor: '#D4BC84',
  },
];

const FEATURED_SLUGS = ['royal-palm-beach', 'wellington', 'west-palm-beach'];
const featuredNeighborhoods = FEATURED_SLUGS.map(
  (slug) => neighborhoods.find((n) => n.slug === slug)!
);

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Person', 'RealEstateAgent'],
            name: 'Jose Costa',
            jobTitle: 'Realtor',
            description:
              'Trilingual Palm Beach County realtor specializing in rentals, first-time home purchases, and family home sales across western Palm Beach County, Broward County, and South Florida.',
            worksFor: {
              '@type': 'RealEstateAgent',
              name: 'Atlantic Florida Properties',
            },
            telephone: '+19546141351',
            email: 'USARealtor1@gmail.com',
            url: 'https://www.josecostarealtor.com',
            areaServed: [
              'Royal Palm Beach, Florida',
              'Wellington, Florida',
              'West Palm Beach, Florida',
              'Palm Beach County, Florida',
              'Broward County, Florida',
              'St. Lucie County, Florida',
            ],
            knowsLanguage: ['en', 'es', 'pt'],
            sameAs: [
              'https://www.instagram.com/josecosta.realtor/',
              'https://www.facebook.com/profile.php?id=100090548027826',
            ],
          }),
        }}
      />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="South Florida waterfront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(105deg, rgba(8, 18, 28, 0.90) 0%, rgba(8, 18, 28, 0.72) 55%, rgba(8, 18, 28, 0.45) 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                South Florida Real Estate Expert
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your home, in the{' '}
                <em className="italic" style={{ color: '#D4BC84' }}>
                  language you trust
                </em>
                .
              </h1>
              <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed">
                Jose Costa has spent over a decade helping South Florida families rent, buy, and
                sell homes — in English, Spanish, and Portuguese. Based in Palm Beach County,
                serving working families across western Palm Beach County, Broward, the Treasure
                Coast, and beyond.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['English', 'Español', 'Português'].map((lang) => (
                  <span
                    key={lang}
                    className="font-sans text-xs font-semibold px-4 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
                >
                  Schedule a Free Call
                </Link>
                <Link
                  href="/buy"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  How I Can Help
                </Link>
              </div>
              <div className="mt-10 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="font-sans text-xs text-white/70">
                  Licensed with Atlantic Florida Properties
                </span>
              </div>
            </div>

            <AnimateOnScroll delay={0.1} className="flex justify-center md:justify-end">
              <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-3xl overflow-hidden relative ring-2 ring-gold/40">
                <Image
                  src="/images/jose-portrait.jpeg"
                  alt="Jose Costa, South Florida Realtor"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 flex flex-col justify-end z-10 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-sans font-semibold text-white text-sm">Jose Costa</p>
                  <p className="font-sans text-xs text-white/70">Atlantic Florida Properties</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
          <div
            className="w-[18px] h-[28px] rounded-[10px] flex justify-center pt-1.5"
            style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
          >
            <span className="w-[3px] h-[6px] rounded-[2px] bg-white animate-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <StatBar stats={STATS} />

      {/* ─── South Florida Lifestyle Band ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Find a Rental Home',
                sub: 'Royal Palm Beach · West Palm Beach · Loxahatchee',
                gradient: 'linear-gradient(160deg, #0B4C6E 0%, #1A7FA8 50%, #5AB8D4 100%)',
              },
              {
                label: 'Buy Your First Home',
                sub: 'Wellington · Lake Worth · Boynton Beach',
                gradient: 'linear-gradient(160deg, #6B4E08 0%, #B8902C 50%, #E0C66A 100%)',
              },
              {
                label: 'Sell or Lease Your Property',
                sub: 'Port St. Lucie · Davie · Palm Beach Gardens',
                gradient: 'linear-gradient(160deg, #1A4A1A 0%, #2E8028 50%, #72C060 100%)',
              },
            ].map((scene, i) => (
              <AnimateOnScroll key={scene.label} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden relative aspect-video md:aspect-[4/3] border border-transparent hover:border-gold/60 hover:scale-[1.02] transition-all duration-200"
                  style={{ background: scene.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(8, 18, 28, 0.85) 0%, rgba(8, 18, 28, 0.2) 60%, transparent 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-serif text-lg font-bold text-white leading-tight">{scene.label}</p>
                    <p className="font-sans text-xs text-white/70 mt-0.5">{scene.sub}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Jose? ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Why Jose?"
              title="What makes working with Jose different?"
              subtitle="In one of the country's most competitive real estate markets, experience and language matter."
            />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map(({ icon: Icon, title, body, iconBg, iconColor }, i) => (
              <AnimateOnScroll key={title} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon size={24} style={{ color: iconColor }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Buyer / Seller Split ─── */}
      <section className="grid md:grid-cols-2">
        <AnimateOnScroll className="relative overflow-hidden py-16 md:py-20 px-8 md:px-12 flex flex-col justify-center">
          <Image
            src="/images/buy-bg.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" aria-hidden="true" />
          <div className="relative z-10">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              For Buyers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              Buying in South Florida
            </h2>
            <p className="mt-4 font-sans text-white/80 text-base leading-relaxed">
              Get expert guidance from search to keys. Jose curates properties, negotiates on your
              behalf, and guides you through every step — in your language.
            </p>
            <Link
              href="/buy"
              className="mt-8 inline-block font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors"
            >
              Start Your Search →
            </Link>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          delay={0.08}
          className="relative overflow-hidden py-16 md:py-20 px-8 md:px-12 flex flex-col justify-center"
        >
          <Image
            src="/images/sell-bg.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(160, 124, 56, 0.82)' }} aria-hidden="true" />
          <div className="relative z-10">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-navy/60 mb-4">
              For Sellers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight">
              Selling Your Home
            </h2>
            <p className="mt-4 font-sans text-navy/80 text-base leading-relaxed">
              Most sellers leave money on the table. Jose&apos;s pricing strategy, targeted marketing,
              and negotiation experience consistently delivers above-asking results.
            </p>
            <Link
              href="/sell"
              className="mt-8 inline-block font-sans text-sm font-semibold text-navy hover:text-navy-light transition-colors"
            >
              Get a Home Valuation →
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── Featured Neighborhoods ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Local Expertise"
              title="South Florida Areas Jose Knows Best"
              subtitle="Deep knowledge of the communities Jose's clients call home — from western Palm Beach County to Broward and beyond."
            />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNeighborhoods.map((n, i) => (
              <AnimateOnScroll key={n.slug} delay={i * 0.08}>
                <NeighborhoodCard {...n} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/neighborhoods"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              View All Neighborhoods →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Preview ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Client Stories"
              title="What Jose's clients are saying"
              subtitle="English, Spanish, Portuguese — Jose builds trust in every language."
            />
          </AnimateOnScroll>
          <div className="mt-14">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              Read More Stories →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
