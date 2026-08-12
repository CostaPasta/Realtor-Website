import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About Jose Costa',
  description:
    'Meet Jose Costa, a Palm Beach County realtor with over 15 years of experience, fluent in English, Portuguese, and Spanish, serving western Palm Beach County, Broward, and South Florida.',
};

const STATS = [
  { value: '15+', label: 'Years in Real Estate' },
  { value: '60+', label: 'Homes Listed and Sold' },
  { value: '$10M+', label: 'In Closed Sales' },
  { value: '400+', label: 'Clients Served' },
];

const LANGUAGES = [
  {
    code: 'PT',
    name: 'Português',
    tag: 'Native',
    borderColor: '#009C3B',
    blurb:
      "Jose grew up speaking Portuguese in Brazil. For South Florida's Brazilian community, he is one of the few realtors who can handle the entire purchase or rental process in your native language.",
  },
  {
    code: 'EN',
    name: 'English',
    tag: 'Fluent',
    borderColor: '#002868',
    blurb:
      "Jose moved to the United States in the 1980s and has worked in English his entire career. He has lived in the US longer than he lived in Brazil, and is comfortable in every register, from a kitchen-table conversation to a contract review.",
  },
  {
    code: 'ES',
    name: 'Español',
    tag: 'Fluent',
    borderColor: '#AA151B',
    blurb:
      "Spanish came naturally, given its closeness to Portuguese and how widely it is spoken in South Florida. Jose has worked with Cuban, Venezuelan, Colombian, and Argentinian clients across Palm Beach and Broward Counties.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero: split layout ─── */}
      <section className="relative bg-navy overflow-hidden">
        {/* Portrait: right side, desktop only */}
        <div
          className="hidden md:block absolute top-0 right-0 h-full"
          style={{ width: '44%' }}
          aria-hidden="true"
        >
          <Image
            src="/images/jose-portrait.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="44vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgb(8,18,28) 0%, rgba(8,18,28,0.3) 35%, transparent 65%)',
            }}
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 md:pt-48 md:pb-28">
          <div className="md:max-w-lg">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Your South Florida Realtor
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Meet Jose Costa
            </h1>
            <p className="mt-5 font-sans text-lg text-white/75 leading-relaxed">
              A realtor who speaks your language. Literally. Born in Brazil, built in Florida,
              fluent in three languages and two decades of this market.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {LANGUAGES.map((l) => (
                <span
                  key={l.code}
                  className="font-sans text-xs font-semibold px-4 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/30"
                >
                  {l.name}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
              >
                Schedule a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <AnimateOnScroll className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-gold/60">
                <Image
                  src="/images/jose-portrait.jpeg"
                  alt="Jose Costa, South Florida Realtor"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>

            <div>
              <AnimateOnScroll>
                <SectionHeading
                  eyebrow="His Story"
                  title="Born in Brazil. Built in Florida."
                  align="left"
                />
              </AnimateOnScroll>
              <div className="mt-8 space-y-5 font-sans text-gray-700 leading-relaxed">
                <p>
                  Jose Costa grew up in Brazil and moved to the United States in the 1980s. He
                  settled in Fort Lauderdale first, then Wellington in 2004, where he has been
                  ever since. He has lived more of his life in South Florida than in Brazil.
                </p>
                <p>
                  He grows fruit in his backyard and gives it away to friends, neighbors, and
                  clients. He doesn&apos;t make a thing of it. The same honesty carries into how
                  he works: if a property is not right for you, he will say so, even when that
                  slows the deal. His aim is that you end up in the right home, not just a home.
                </p>
                <p>
                  Jose is also a real estate investor. He has bought multiple properties himself,
                  which changes how he reads a deal. He knows what it feels like to be on the
                  other side of the table.
                </p>
                <p>
                  Jose is licensed in Florida and affiliated with Atlantic Florida Properties. He
                  works across western Palm Beach County, Broward, and the Treasure Coast, with
                  most of his business in Royal Palm Beach, Wellington, and West Palm Beach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <StatBar stats={STATS} />

      {/* ─── Languages ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Communication"
              title="Three languages. One realtor."
              subtitle="South Florida is one of the most multilingual real estate markets in the country. Jose works in the language you actually think in."
            />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANGUAGES.map((lang, i) => (
              <AnimateOnScroll key={lang.code} delay={i * 0.08}>
                <div
                  className="bg-cream rounded-2xl p-8 h-full border-l-4"
                  style={{ borderLeftColor: lang.borderColor }}
                >
                  <div className="flex items-baseline gap-3 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-navy">{lang.name}</h3>
                    <span className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {lang.tag}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{lang.blurb}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Brokerage ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Brokerage
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy">
            Licensed with Atlantic Florida Properties
          </h2>
          <p className="mt-3 font-sans text-sm text-gray-600 max-w-md mx-auto">
            Atlantic Florida Properties is a full-service South Florida brokerage serving
            residential and investment clients across the tri-county area.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <span className="font-sans text-xs text-gray-500">
              FL License #3132965 | Office #1035228
            </span>
            <span className="text-gray-300">|</span>
            <span className="font-sans text-xs text-gray-500">Equal Housing Opportunity</span>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
