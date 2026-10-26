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
import { type Locale, localizedPath } from '@/i18n/locales';
import { buyDictionary } from '@/i18n/pages/buy';

const QUESTION_ICONS = [Calculator, PiggyBank, BadgeDollarSign, Languages];

const STEP_COLORS = ['#C4A35A', '#1A7AAF', '#D85A30', '#2D7A44', '#2D5F8A', '#C4A35A'];

const buyerTestimonials = testimonials.filter((t) => t.transactionType === 'Buyer');

export default function BuyContent({ locale }: { locale: Locale }) {
  const t = buyDictionary[locale];
  const contactHref = localizedPath(locale, '/contact');

  const stats = [
    { value: '400+', label: t.stats.clients },
    { value: '15+', label: t.stats.years },
    { value: '3', label: t.stats.languages },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-buying.jpg"
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
            background: 'linear-gradient(to bottom, rgba(8, 18, 28, 0.88) 0%, rgba(8, 18, 28, 0.82) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">{t.hero.title}</h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={contactHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              {t.hero.cta}
            </Link>
          </div>
          <p className="mt-3 font-sans text-xs text-white/50">{t.hero.fine}</p>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-navy border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="font-sans text-[11px] md:text-xs text-white/50 mt-1 uppercase tracking-widest">
                  {stat.label}
                </p>
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
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.subtitle} />
          </AnimateOnScroll>
          <div className="mt-14 max-w-2xl mx-auto flex flex-col">
            {t.process.steps.map((step, i) => {
              const number = String(i + 1).padStart(2, '0');
              const dark = i === t.process.steps.length - 1;
              return (
                <AnimateOnScroll key={number} delay={i * 0.07}>
                  <div
                    className="relative rounded-2xl p-7 overflow-hidden"
                    style={{
                      backgroundColor: dark ? '#0D2442' : '#FFFFFF',
                      border: dark ? '1px solid rgba(56,192,106,0.55)' : '1px solid #EDE8DE',
                      boxShadow: dark
                        ? '0 6px 28px rgba(8,18,28,0.45), 0 0 0 1px rgba(56,192,106,0.12), 0 0 18px rgba(56,192,106,0.22), 0 0 52px rgba(56,192,106,0.08)'
                        : '0 2px 16px rgba(13,36,66,0.07), 0 1px 4px rgba(13,36,66,0.04)',
                    }}
                  >
                    <div className="relative">
                      <span
                        className="inline-block font-sans text-xs font-black tracking-widest uppercase mb-3"
                        style={{ color: STEP_COLORS[i] }}
                      >
                        {t.process.stepLabel} {number}
                      </span>
                      <h3
                        className="font-serif font-bold text-xl mb-3"
                        style={{ color: dark ? '#ffffff' : '#0D2442' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: dark ? 'rgba(255,255,255,0.70)' : '#4B5563' }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </div>
                  {i < t.process.steps.length - 1 && (
                    <div className="flex justify-center py-2" aria-hidden="true">
                      <ChevronDown size={24} className="text-gold/50" />
                    </div>
                  )}
                </AnimateOnScroll>
              );
            })}
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
              {t.local.eyebrow}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              {t.local.titleLine1}
              <br className="hidden md:block" /> {t.local.titleLine2}
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
              {t.local.body}
            </p>
            <Link
              href="/neighborhoods"
              className="inline-flex items-center mt-8 font-sans text-sm font-semibold text-gold hover:text-white transition-colors gap-1"
            >
              {t.local.link}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Buyer Testimonials ─── */}
      {buyerTestimonials.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
            </AnimateOnScroll>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {buyerTestimonials.map((b, i) => (
                <AnimateOnScroll key={b.id} delay={i * 0.08}>
                  <TestimonialCard {...b} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Why Buyer Representation Matters ─── */}
      <section className="pt-16 pb-20 md:pb-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Photo, fills full column height */}
            <AnimateOnScroll className="relative rounded-2xl overflow-hidden ring-2 ring-gold/30 min-h-[420px] md:min-h-0">
              <Image
                src="/images/jose-portrait.jpeg"
                alt={t.rights.portraitAlt}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-sans text-xs font-semibold text-gold uppercase tracking-widest">Jose Costa</p>
                <p className="font-sans text-xs text-white/70 mt-0.5">{t.rights.portraitCaption}</p>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <AnimateOnScroll className="flex flex-col justify-center">
              <SectionHeading eyebrow={t.rights.eyebrow} title={t.rights.title} align="left" light />
              {t.rights.paragraphs.map((p, i) => (
                <p key={p} className={`${i === 0 ? 'mt-6' : 'mt-4'} font-sans text-white/70 leading-relaxed`}>
                  {p}
                </p>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {t.rights.items.map((item) => (
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
            <SectionHeading eyebrow={t.questions.eyebrow} title={t.questions.title} />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              {t.questions.intro}
            </p>
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.questions.items.map(({ title, body }, i) => {
              const Icon = QUESTION_ICONS[i];
              return (
                <AnimateOnScroll key={title} delay={i * 0.08}>
                  <div className="bg-cream rounded-2xl p-6 h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-sans font-bold text-navy text-base mb-2">{title}</h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Areas We Serve ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.areas.eyebrow} title={t.areas.title} subtitle={t.areas.subtitle} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {neighborhoods
              .filter((n) => !n.hidden)
              .map((n) => (
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
              {t.areas.all}
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.primary, href: contactHref }}
        secondaryCTA={{ label: t.cta.secondary, href: '/neighborhoods' }}
      />
    </>
  );
}
