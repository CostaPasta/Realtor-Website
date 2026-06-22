import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'About Jose Costa',
  description:
    'Meet Jose Costa — a South Florida realtor with 11+ years of experience, fluent in English, Spanish, and Portuguese, serving Miami-Dade, Broward, and Palm Beach counties.',
};

// TODO: Replace all stat values with Jose's real numbers
const STATS = [
  { value: '11+', label: 'Years of Experience' },
  { value: '300+', label: 'Families Helped' },
  { value: '3', label: 'Languages Spoken' },
  { value: '$120M+', label: 'In Closed Sales' },
];

const LANGUAGES = [
  {
    code: 'EN',
    name: 'English',
    color: '#002868',
    blurb: "Jose's primary working language, used across all South Florida markets.",
  },
  {
    code: 'ES',
    name: 'Español',
    color: '#AA151B',
    blurb:
      'South Florida is home to over 2.5 million Spanish speakers across Cuban, Venezuelan, Colombian, and Argentinian communities.',
  },
  {
    code: 'PT',
    name: 'Português',
    color: '#009C3B',
    blurb:
      'Florida has one of the largest Brazilian communities in the United States, concentrated in Broward and Palm Beach Counties. Jose is one of a small number of Portuguese-speaking realtors in the region.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Your South Florida Realtor
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Meet Jose Costa
          </h1>
          <p className="mt-4 font-sans text-xl text-white/80 max-w-xl">
            A South Florida realtor who speaks your language — literally.
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
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <AnimateOnScroll className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden ring-2 ring-gold/40">
                <Image
                  src="/images/jose-portrait.jpeg"
                  alt="Jose Costa, South Florida Realtor"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>

            {/* Bio */}
            <div>
              <AnimateOnScroll>
                <SectionHeading
                  eyebrow="His Story"
                  title="30 Years in South Florida"
                  align="left"
                />
              </AnimateOnScroll>
              {/* TODO: Replace bracketed values with Jose's real personal details */}
              <div className="mt-8 space-y-5 font-sans text-gray-700 leading-relaxed">
                <p>
                  Jose Costa has been helping South Florida families navigate one of the
                  country&apos;s most dynamic real estate markets for over 11 years. A 30-year
                  South Florida resident, Jose brings a personal understanding of what it means to
                  put down roots in this region.
                </p>
                <p>
                  What sets Jose apart from the moment you meet him is simple: he listens. In a
                  region as culturally diverse as South Florida, that means more than just speaking
                  the language — though Jose speaks three of them. It means understanding how
                  different families make decisions, what matters to them in a home, and how they
                  want to be treated throughout what is often the biggest financial transaction of
                  their lives.
                </p>
                <p>
                  Jose is affiliated with Atlantic Florida Properties and holds an active Florida
                  real estate license. His coverage spans Miami-Dade, Broward, and Palm Beach
                  Counties, with particular depth in Aventura, Coral Gables, Boca Raton, and Doral.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-sans font-bold text-navy text-2xl">30+</p>
                  <p className="font-sans text-xs text-gray-500 mt-1">Years in South Florida</p>
                </div>
                <div className="bg-cream rounded-xl p-4">
                  <p className="font-sans font-bold text-navy text-2xl">11+</p>
                  <p className="font-sans text-xs text-gray-500 mt-1">Years in Real Estate</p>
                </div>
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
              subtitle="South Florida's multilingual population deserves a realtor who can communicate in the language you think, negotiate, and feel confident in."
            />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {LANGUAGES.map((lang, i) => (
              <AnimateOnScroll key={lang.code} delay={i * 0.08}>
              <div
                className="border border-gray-100 rounded-2xl overflow-hidden flex flex-col"
              >
                <div
                  className="py-6 flex items-center justify-center"
                  style={{ backgroundColor: lang.color }}
                >
                  <h3 className="font-serif text-2xl font-bold text-white">{lang.name}</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{lang.blurb}</p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Brokerage ─── */}
      <section className="py-14 bg-cream">
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
              {/* TODO: Replace with real license number */}
              FL License # [LICENSE_NUMBER]
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
