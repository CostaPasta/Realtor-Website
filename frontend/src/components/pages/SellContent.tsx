import Link from 'next/link';
import Image from 'next/image';
import { Home, KeyRound, ShieldCheck, Clock, Lock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import ValuationForm from '@/components/ValuationForm';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import ProcessTimeline from '@/components/ProcessTimeline';
import StatBar from '@/components/StatBar';
import { FormCard } from '@/components/FormParts';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { type Locale, localizedPath } from '@/i18n/locales';
import { sellDictionary } from '@/i18n/pages/sell';
import { buttonPrimary, cardOnWhite, eyebrowOnDark, iconTile } from '@/lib/styles';

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
          src="/images/neighborhoods/wilton-manors.jpg"
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
            background: 'linear-gradient(100deg, rgba(8, 24, 41, 0.92) 0%, rgba(13, 36, 66, 0.82) 50%, rgba(13, 36, 66, 0.45) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`${eyebrowOnDark} mb-4`}>
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl">{t.hero.intro}</p>
          <div className="mt-8">
            <a href="#valuation" className={buttonPrimary}>
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      <StatBar stats={stats} />

      {/* ─── Seller Process ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} subtitle={t.process.intro} />
          </AnimateOnScroll>
          <div className="mt-14">
            <ProcessTimeline steps={t.process.steps} />
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
      <section id="valuation" className="py-20 md:py-24 bg-cream">
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
              <FormCard className="mt-10">
                <ValuationForm locale={locale} />
              </FormCard>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {t.valuation.trust.map((label, i) => {
                  const Icon = TRUST_ICONS[i];
                  return (
                    <div key={label} className="flex items-center gap-2">
                      <Icon size={13} className="text-gold-text shrink-0" />
                      <span className="font-sans text-xs text-gray-500">{label}</span>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── Sell or Lease ─── */}
      <section className="py-20 md:py-24 bg-white">
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
                <div className={`${cardOnWhite} h-full`}>
                  <div className={`${iconTile} mb-5`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={localizedPath(locale, '/landlords')}
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
