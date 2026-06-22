import Link from 'next/link';
import { User, MessageSquare, Home, Handshake } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import TestimonialCard from '@/components/TestimonialCard';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import CTASection from '@/components/CTASection';
import { neighborhoods } from '@/data/neighborhoods';
import { testimonials } from '@/data/testimonials';

// TODO: Replace all stat values with Jose's real numbers
const STATS = [
  { value: '11+', label: 'Years of Experience' },
  { value: '300+', label: 'Families Helped' },
  { value: '3', label: 'Languages Spoken' },
  { value: '$120M+', label: 'In Closed Sales' },
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
];

const featuredNeighborhoods = neighborhoods.slice(0, 3);
const featuredTestimonials = testimonials.slice(0, 3);

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
            worksFor: {
              '@type': 'RealEstateAgent',
              name: 'Atlantic Florida Properties',
            },
            telephone: '+19546141351',
            email: 'USARealtor1@gmail.com',
            url: 'https://www.josecostarealtor.com',
            areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
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
        {/* Warm ambient glow — replaces cold geometric grid */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #C4A35A 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-[0.05]"
            style={{ background: 'radial-gradient(circle at bottom left, #D85A30 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                South Florida Real Estate Expert
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Your home, in the language you trust.
              </h1>
              <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed">
                Jose Costa helps South Florida families buy and sell homes with expert local
                knowledge and fluency in three languages. Serving Miami-Dade, Broward &amp; Palm
                Beach Counties.
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

            {/* Photo placeholder — TODO: Replace with real headshot */}
            <div className="flex justify-center md:justify-end">
              <div
                className="w-72 h-96 md:w-80 md:h-[480px] rounded-3xl overflow-hidden relative flex flex-col items-end justify-end"
                style={{ background: 'linear-gradient(160deg, #1A3A5C 0%, #2A6080 40%, #C4A35A44 80%, #D85A3022 100%)' }}
              >
                {/* TODO: Replace the div above with <Image src="[HEADSHOT_URL]" alt="Jose Costa" fill className="object-cover" /> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <User size={64} className="text-white/20" />
                  <p className="font-sans text-xs text-white/25 text-center px-6">
                    Professional photo of Jose Costa
                  </p>
                </div>
                {/* Warm bottom label */}
                <div className="relative z-10 p-5 w-full bg-gradient-to-t from-black/50 to-transparent">
                  <p className="font-sans font-semibold text-white text-sm">Jose Costa</p>
                  <p className="font-sans text-xs text-white/70">Atlantic Florida Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Bar ─── */}
      <StatBar stats={STATS} />

      {/* ─── South Florida Lifestyle Band ─── */}
      {/* TODO: Replace gradient divs with real neighborhood photos using <Image> */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Waterfront Living',
                sub: 'Aventura · Fort Lauderdale · Jupiter',
                gradient: 'linear-gradient(160deg, #0B4C6E 0%, #1A7FA8 50%, #5AB8D4 100%)',
              },
              {
                label: 'Luxury Estates',
                sub: 'Coral Gables · Palm Beach · Boca Raton',
                gradient: 'linear-gradient(160deg, #6B2E08 0%, #B85020 50%, #E0906A 100%)',
              },
              {
                label: 'Family Communities',
                sub: 'Doral · Palm Beach Gardens · Wellington',
                gradient: 'linear-gradient(160deg, #1A4A1A 0%, #2E8028 50%, #72C060 100%)',
              },
            ].map((scene) => (
              <div
                key={scene.label}
                className="rounded-2xl overflow-hidden relative aspect-video md:aspect-[4/3]"
                style={{ background: scene.gradient }}
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-serif text-lg font-bold text-white leading-tight">{scene.label}</p>
                  <p className="font-sans text-xs text-white/70 mt-0.5">{scene.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Jose? ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Jose?"
            title="What makes working with Jose different?"
            subtitle="In one of the country's most competitive real estate markets, experience and language matter."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, body, iconBg, iconColor }) => (
              <div key={title} className="bg-cream rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon size={24} style={{ color: iconColor }} />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Buyer / Seller Split ─── */}
      <section className="grid md:grid-cols-2">
        <div className="bg-navy py-16 md:py-20 px-8 md:px-12 flex flex-col justify-center">
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
            className="mt-8 self-start font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            Start Your Search →
          </Link>
        </div>
        <div className="bg-gold py-16 md:py-20 px-8 md:px-12 flex flex-col justify-center">
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
            className="mt-8 self-start font-sans text-sm font-semibold text-navy hover:text-navy-light transition-colors"
          >
            Get a Home Valuation →
          </Link>
        </div>
      </section>

      {/* ─── Featured Neighborhoods ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local Expertise"
            title="South Florida Areas Jose Knows Best"
            subtitle="Deep knowledge of the neighborhoods buyers and sellers care about most across Miami-Dade, Broward, and Palm Beach."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNeighborhoods.map((n) => (
              <NeighborhoodCard key={n.slug} {...n} />
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
          <SectionHeading
            eyebrow="Client Stories"
            title="What Jose's clients are saying"
            subtitle="English, Spanish, Portuguese — Jose builds trust in every language."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                name={t.name}
                location={t.location}
                transactionType={t.transactionType}
                year={t.year}
              />
            ))}
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
