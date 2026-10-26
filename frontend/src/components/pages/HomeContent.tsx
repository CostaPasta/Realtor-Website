import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Home, Handshake, KeyRound } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import StatBar from '@/components/StatBar';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import WhyJoseBackground from '@/components/WhyJoseBackground';
import { neighborhoods } from '@/data/neighborhoods';
import { testimonials } from '@/data/testimonials';
import { type Locale, localizedPath } from '@/i18n/locales';
import { homeDictionary } from '@/i18n/pages/home';

const FEATURE_STYLES = [
  { icon: MessageSquare, iconBg: '#0D2442', iconColor: '#C4A35A' },
  { icon: Home, iconBg: '#C4A35A', iconColor: '#0D2442' },
  { icon: Handshake, iconBg: '#D85A30', iconColor: '#fff' },
  { icon: KeyRound, iconBg: '#1A3A5C', iconColor: '#D4BC84' },
];

// Where most of Jose's rental and first-time-buyer work happens.
const FEATURED_SLUGS = ['royal-palm-beach', 'the-acreage', 'lake-worth-beach'];

// Hero language pills double as the language switcher.
const LANGUAGE_PILLS: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'English' },
  { locale: 'pt', label: 'Português' },
  { locale: 'es', label: 'Español' },
];

export default function HomeContent({ locale }: { locale: Locale }) {
  const t = homeDictionary[locale];

  const stats = [
    { value: '15+', label: t.stats.years },
    { value: '400+', label: t.stats.clients },
    { value: '3', label: t.stats.languages },
    { value: '$10M+', label: t.stats.closed },
  ];

  const scenes = [
    { ...t.scenes.rent, image: '/images/category-rental.jpg', href: localizedPath(locale, '/rentals') },
    { ...t.scenes.buy, image: '/images/category-buying.jpg', href: '/buy' },
    { ...t.scenes.sell, image: '/images/category-selling.jpg', href: '/sell' },
  ];

  const featuredNeighborhoods = FEATURED_SLUGS.map((slug) => {
    const n = neighborhoods.find((x) => x.slug === slug)!;
    return { ...n, ...t.featured?.[slug] };
  });

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen bg-navy flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt={t.hero.imageAlt}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              {/* On phones the large portrait is hidden, so his face still shows up first. */}
              <div className="md:hidden flex items-center gap-3 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-gold/60 shrink-0">
                  <Image
                    src="/images/jose-portrait.jpeg"
                    alt={t.hero.portraitAlt}
                    fill
                    priority
                    sizes="64px"
                    className="object-cover object-[50%_25%]"
                  />
                </div>
                <div>
                  <p className="font-sans font-semibold text-white">Jose Costa</p>
                  <p className="font-sans text-xs text-white/70">Atlantic Florida Properties</p>
                </div>
              </div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-6">
                {t.hero.eyebrow}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t.hero.titleStart}
                <em className="italic" style={{ color: '#D4BC84' }}>
                  {t.hero.titleEmphasis}
                </em>
                {t.hero.titleEnd}
              </h1>
              <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed">
                {t.hero.intro}
              </p>
              <nav aria-label="Language" className="mt-6 flex flex-wrap gap-2">
                {LANGUAGE_PILLS.map((pill) => {
                  const active = pill.locale === locale;
                  return (
                    <Link
                      key={pill.locale}
                      href={localizedPath(pill.locale, '/')}
                      hrefLang={pill.locale}
                      aria-current={active ? 'page' : undefined}
                      className={`font-sans text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                        active
                          ? 'bg-gold text-navy border-gold'
                          : 'bg-gold/20 text-gold border-gold/30 hover:bg-gold/30'
                      }`}
                    >
                      {pill.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href={localizedPath(locale, '/rentals')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
                >
                  {t.hero.primaryCta}
                </Link>
                <Link
                  href={localizedPath(locale, '/contact')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  {t.hero.secondaryCta}
                </Link>
              </div>
              <div className="mt-10 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="font-sans text-xs text-white/70">{t.hero.licensed}</span>
              </div>
            </div>

            <AnimateOnScroll delay={0.1} className="hidden md:flex justify-end">
              <div className="w-72 h-96 md:w-80 md:h-[480px] rounded-3xl overflow-hidden relative ring-2 ring-gold/40">
                <Image
                  src="/images/jose-portrait.jpeg"
                  alt={t.hero.portraitAlt}
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
      <StatBar stats={stats} />

      {/* ─── South Florida Lifestyle Band ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenes.map((scene, i) => (
              <AnimateOnScroll key={scene.href} delay={i * 0.08}>
                <Link
                  href={scene.href}
                  className="group block rounded-2xl overflow-hidden relative aspect-video md:aspect-[4/3] bg-navy border border-transparent hover:border-gold/60 transition-colors duration-300"
                >
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(8, 18, 28, 0.92) 0%, rgba(8, 18, 28, 0.65) 45%, rgba(8, 18, 28, 0.3) 100%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                      {scene.title}
                    </p>
                    <p className="font-sans text-sm text-white/75 mt-1.5">{scene.body}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Jose? ─── */}
      <section className="py-20 md:py-24 bg-cream relative overflow-hidden">
        <WhyJoseBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} subtitle={t.why.subtitle} />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.why.features.map(({ title, body }, i) => {
              const { icon: Icon, iconBg, iconColor } = FEATURE_STYLES[i];
              return (
                <AnimateOnScroll key={title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 border-t-2 border-gold shadow-sm hover:shadow-md transition-shadow">
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
              );
            })}
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
              {t.buyer.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
              {t.buyer.title}
            </h2>
            <p className="mt-4 font-sans text-white/80 text-base leading-relaxed">{t.buyer.body}</p>
            <Link
              href="/buy"
              className="mt-8 inline-block font-sans text-sm font-semibold text-gold hover:text-gold-light transition-colors"
            >
              {t.buyer.link}
            </Link>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          delay={0.08}
          className="relative overflow-hidden py-16 md:py-20 px-8 md:px-12 flex flex-col justify-center bg-gold"
        >
          <div className="relative z-10">
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-navy/70 mb-4">
              {t.seller.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy leading-tight">
              {t.seller.title}
            </h2>
            <p className="mt-4 font-sans text-navy/80 text-base leading-relaxed">{t.seller.body}</p>
            <Link
              href="/sell"
              className="mt-8 inline-block font-sans text-sm font-semibold text-navy hover:text-navy-light transition-colors"
            >
              {t.seller.link}
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* ─── Featured Neighborhoods ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.areas.eyebrow} title={t.areas.title} subtitle={t.areas.subtitle} />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredNeighborhoods.map((n, i) => (
              <AnimateOnScroll key={n.slug} delay={i * 0.08}>
                <NeighborhoodCard {...n} labels={t.cardLabels} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/neighborhoods"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              {t.areas.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Preview ─── */}
      {testimonials.length > 0 && (
        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <SectionHeading
                eyebrow={t.testimonials.eyebrow}
                title={t.testimonials.title}
                subtitle={t.testimonials.subtitle}
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
                {t.testimonials.more}
              </Link>
            </div>
          </div>
        </section>
      )}

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
