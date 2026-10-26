import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { type Locale, localizedPath } from '@/i18n/locales';
import { aboutDictionary } from '@/i18n/pages/about';

const LANGUAGES = [
  { code: 'pt', name: 'Português', native: true, borderColor: '#009C3B' },
  { code: 'en', name: 'English', native: false, borderColor: '#002868' },
  { code: 'es', name: 'Español', native: false, borderColor: '#AA151B' },
] as const;

export default function AboutContent({ locale }: { locale: Locale }) {
  const t = aboutDictionary[locale];

  const stats = [
    { value: '15+', label: t.stats.years },
    { value: '60+', label: t.stats.homes },
    { value: '$10M+', label: t.stats.closed },
    { value: '400+', label: t.stats.clients },
  ];

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
              {t.hero.eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-5 font-sans text-lg text-white/75 leading-relaxed">{t.hero.intro}</p>
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
                href={localizedPath(locale, '/contact')}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
              >
                {t.hero.cta}
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
                  alt={t.story.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>

            <div>
              <AnimateOnScroll>
                <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} align="left" />
              </AnimateOnScroll>
              <div className="mt-8 space-y-5 font-sans text-gray-700 leading-relaxed">
                {t.story.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <StatBar stats={stats} />

      {/* ─── Languages ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow={t.languages.eyebrow}
              title={t.languages.title}
              subtitle={t.languages.subtitle}
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
                    <h3 className="font-serif text-2xl font-bold text-navy" lang={lang.code}>
                      {lang.name}
                    </h3>
                    <span className="font-sans text-xs font-semibold text-gray-400 uppercase tracking-widest">
                      {lang.native ? t.languages.native : t.languages.fluent}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {t.languages.blurbs[lang.code]}
                  </p>
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
            {t.brokerage.eyebrow}
          </p>
          <h2 className="font-serif text-2xl font-bold text-navy">{t.brokerage.title}</h2>
          <p className="mt-3 font-sans text-sm text-gray-600 max-w-md mx-auto">{t.brokerage.body}</p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <span className="font-sans text-xs text-gray-500">
              {t.brokerage.license} #3132965 | {t.brokerage.office} #1035228
            </span>
            <span className="text-gray-300">|</span>
            <span className="font-sans text-xs text-gray-500">{t.brokerage.eho}</span>
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.primary, href: localizedPath(locale, '/contact') }}
        secondaryCTA={{
          label: t.cta.secondary,
          href: locale === 'en' ? '/neighborhoods' : localizedPath(locale, '/rentals'),
        }}
      />
    </>
  );
}
