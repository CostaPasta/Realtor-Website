import Link from 'next/link';
import Image from 'next/image';
import { Home, KeyRound, ShieldCheck, Clock, Lock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValuationForm from '@/components/ValuationForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { type Locale, localizedPath } from '@/i18n/locales';
import { sellDictionary } from '@/i18n/pages/sell';

const TRUST_ICONS = [ShieldCheck, Clock, Lock];

const sellerTestimonials = testimonials.filter((t) => t.transactionType === 'Seller');

export default function SellContent({ locale }: { locale: Locale }) {
  const t = sellDictionary[locale];

  const stats = [
    { value: '$10M+', label: t.stats.closed },
    { value: '60+', label: t.stats.homes },
  ];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-selling.jpg"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl">{t.hero.intro}</p>
          <div className="mt-8">
            <a
              href="#valuation"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-navy-dark py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/10 max-w-lg mx-auto w-full">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center px-4 py-2">
                <p className="font-serif text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seller Process ─── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
                {t.process.eyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                {t.process.title}
              </h2>
              <div className="w-10 h-0.5 bg-gold mx-auto mt-5" />
              <p className="mt-5 font-sans text-base text-white/55 max-w-lg mx-auto leading-relaxed">
                {t.process.intro}
              </p>
            </div>
          </AnimateOnScroll>

          <div>
            {t.process.steps.map((step, i) => {
              const number = String(i + 1).padStart(2, '0');
              return (
                <AnimateOnScroll key={number} delay={i * 0.08}>
                  <div
                    className={`relative flex items-start gap-6 md:gap-10 ${
                      i < t.process.steps.length - 1 ? 'pb-8 mb-8 border-b border-white/[0.08]' : ''
                    }`}
                  >
                    {/* Giant ghost number, decorative texture */}
                    <span
                      className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold select-none pointer-events-none hidden md:block"
                      style={{ fontSize: '8rem', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}
                      aria-hidden="true"
                    >
                      {number}
                    </span>

                    {/* Step indicator */}
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center mt-0.5">
                      <span className="font-sans text-xs font-bold text-gold">{number}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2.5">{step.title}</h3>
                      <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      {sellerTestimonials.length > 0 && (
        <section className="py-20 md:py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <SectionHeading
                eyebrow={t.testimonials.eyebrow}
                title={t.testimonials.title}
                subtitle={t.testimonials.subtitle}
              />
            </AnimateOnScroll>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {sellerTestimonials.map((s, i) => (
                <AnimateOnScroll key={s.id} delay={i * 0.1}>
                  <TestimonialCard {...s} />
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Free Valuation Form ─── */}
      <section id="valuation" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <AnimateOnScroll>
              <SectionHeading
                eyebrow={t.valuation.eyebrow}
                title={t.valuation.title}
                subtitle={t.valuation.subtitle}
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="mt-10 bg-white rounded-2xl p-8 border border-cream-dark shadow-sm">
                <ValuationForm locale={locale} />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {t.valuation.trust.map((label, i) => {
                  const Icon = TRUST_ICONS[i];
                  return (
                    <div key={label} className="flex items-center gap-2">
                      <Icon size={13} className="text-gold shrink-0" />
                      <span className="font-sans text-xs text-gray-400">{label}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Sell or Lease ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.options.eyebrow} title={t.options.title} subtitle={t.options.subtitle} />
          </AnimateOnScroll>
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { ...t.options.sell, Icon: Home },
              { ...t.options.lease, Icon: KeyRound },
            ].map(({ title, body, Icon }, i) => (
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
          <div className="mt-10 text-center">
            <Link
              href={`${localizedPath(locale, '/rentals')}#landlords`}
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              {t.options.link}
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.primary, href: '#valuation' }}
        secondaryCTA={{ label: t.cta.secondary, href: '/market-updates' }}
      />
    </>
  );
}
