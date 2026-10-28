import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  Languages,
  ShieldCheck,
  Users,
  TrendingUp,
  ClipboardCheck,
  MessageCircle,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import LandlordPropertyForm from '@/components/LandlordPropertyForm';
import RenterInquiryForm from '@/components/RenterInquiryForm';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { availableRentals } from '@/data/rentals';
import { type Locale, localizedPath } from '@/i18n/locales';
import { rentalsDictionary } from '@/i18n/pages/rentals';
import { rentVsBuyHref } from '@/lib/rent-vs-buy';
import { rentalListingMessage, whatsappHref, whatsappLink } from '@/lib/whatsapp';

const DATE_LOCALES: Record<Locale, string> = { en: 'en-US', es: 'es-US', pt: 'pt-BR' };

const RENTER_ICONS = [Search, Languages, ShieldCheck];
const LANDLORD_ICONS = [Users, ShieldCheck, TrendingUp, ClipboardCheck];
const RENTAL_AREAS = ['Royal Palm Beach', 'Wellington', 'Loxahatchee', 'West Palm Beach'];

const renterTestimonials = testimonials.filter((t) => t.transactionType === 'Renter');

export default function RentalsContent({ locale }: { locale: Locale }) {
  const t = rentalsDictionary[locale];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-rental.jpg"
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#renters"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              {t.hero.renterCta}
            </a>
            <Link
              href={localizedPath(locale, '/landlords')}
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              {t.hero.landlordCta}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── For Renters ─── */}
      <section id="renters" className="py-20 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.renters.eyebrow} title={t.renters.title} />
          </AnimateOnScroll>

          {/* ── Pricing callout ── */}
          <AnimateOnScroll>
            <div className="mt-8 max-w-2xl mx-auto text-center">
              <p className="font-serif text-4xl md:text-5xl font-bold text-navy">
                $1,400 <span className="text-gold">–</span> $3,000
                <span className="font-sans text-lg font-normal text-gray-500 ml-2">
                  {t.renters.perMonth}
                </span>
              </p>
              <p className="mt-2 font-sans text-sm text-gray-500">{t.renters.rangeNote}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {RENTAL_AREAS.map((area) => (
                  <span
                    key={area}
                    className="inline-block px-3 py-1 bg-white border border-cream-dark rounded-full font-sans text-xs text-navy"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Available now (only when Jose has listings in data/rentals.ts) ── */}
          {availableRentals.length > 0 && (
            <div className="mt-14">
              <AnimateOnScroll>
                <div className="text-center">
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold">
                    {t.available.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-navy">
                    {t.available.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-gray-600 max-w-xl mx-auto">
                    {t.available.subtitle}
                  </p>
                </div>
              </AnimateOnScroll>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableRentals.map((home, i) => {
                  const rent = `$${home.rent.toLocaleString('en-US')}`;
                  const availability = home.availableFrom
                    ? t.available.from.replace(
                        '{date}',
                        new Intl.DateTimeFormat(DATE_LOCALES[locale], {
                          month: 'long',
                          day: 'numeric',
                          timeZone: 'UTC',
                        }).format(new Date(home.availableFrom))
                      )
                    : t.available.now;
                  return (
                    <AnimateOnScroll key={home.id} delay={i * 0.08}>
                      <div className="bg-white rounded-2xl border border-cream-dark shadow-sm overflow-hidden h-full flex flex-col">
                        {home.imageSrc && (
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={home.imageSrc}
                              alt={`${home.beds} ${t.available.beds}, ${home.area}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6 flex flex-col flex-1">
                          <p className="font-serif text-2xl font-bold text-navy">
                            {rent}
                            <span className="font-sans text-sm font-normal text-gray-500 ml-1">
                              {t.renters.perMonth}
                            </span>
                          </p>
                          <p className="mt-1 font-sans text-sm text-gray-700 tabular-nums">
                            {home.beds} {t.available.beds} · {home.baths} {t.available.baths}
                            {home.sqft ? ` · ${home.sqft.toLocaleString('en-US')} ${t.available.sqft}` : ''}
                          </p>
                          <p className="mt-1 font-sans text-sm text-gray-500">{home.area}</p>
                          <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-wide text-gold">
                            {availability}
                          </p>
                          {home.petsConsidered && (
                            <p className="mt-1 font-sans text-xs text-gray-500">{t.available.pets}</p>
                          )}
                          <a
                            href={whatsappHref(rentalListingMessage(locale, home.beds, home.area, rent))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto pt-5"
                          >
                            <span
                              className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                              style={{ backgroundColor: '#25D366' }}
                            >
                              <MessageCircle size={16} />
                              {t.available.ask}
                            </span>
                          </a>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Feature cards ── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.renters.cards.map(({ title, body }, i) => {
              const Icon = RENTER_ICONS[i];
              return (
                <AnimateOnScroll key={title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-8 h-full border border-cream-dark shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-navy mb-3">{title}</h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* ── Renter testimonials ── */}
          {renterTestimonials.length > 0 && (
            <div className="mt-14 pt-10 border-t border-cream-dark grid md:grid-cols-2 gap-6">
              {renterTestimonials.map((r, i) => (
                <AnimateOnScroll key={r.id} delay={i * 0.1}>
                  <TestimonialCard {...r} />
                </AnimateOnScroll>
              ))}
            </div>
          )}

          {/* ── Renter inquiry form ── */}
          <AnimateOnScroll>
            <div className="mt-14 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl border border-cream-dark shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-[2fr_3fr]">
                  {/* Left: Jose photo + copy */}
                  <div className="relative hidden md:block min-h-[480px]">
                    <Image
                      src="/images/jose-portrait.jpeg"
                      alt={t.renters.portraitAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 0px, 40vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(8,18,28,0.80) 0%, rgba(8,18,28,0.20) 55%, transparent 100%)',
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="font-serif text-lg font-bold text-white leading-snug">
                        {t.renters.asideTitle}
                      </p>
                      <p className="mt-2 font-sans text-sm text-white/70 leading-relaxed">
                        {t.renters.asideBody}
                      </p>
                    </div>
                  </div>

                  {/* Right: form */}
                  <div className="p-8 md:p-10">
                    <h3 className="font-serif text-xl font-bold text-navy mb-1">{t.renters.formTitle}</h3>
                    <p className="font-sans text-sm text-gray-500 mb-7">{t.renters.formSubtitle}</p>
                    <RenterInquiryForm locale={locale} />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Rent vs. buy ─── */}
      <section className="bg-navy py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">{t.ownBand.title}</h2>
            <p className="mt-3 font-sans text-sm md:text-base text-white/75 leading-relaxed max-w-2xl">{t.ownBand.body}</p>
          </div>
          <Link
            href={rentVsBuyHref(locale)}
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
          >
            {t.ownBand.cta}
          </Link>
        </div>
      </section>

      {/* ─── For Property Owners ─── */}
      <section id="landlords" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.landlords.eyebrow} title={t.landlords.title} />
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="mt-6 max-w-3xl mx-auto text-center font-sans text-gray-700 leading-relaxed">
              {t.landlords.intro}
            </p>
            <p className="mt-4 text-center">
              <Link
                href={localizedPath(locale, '/landlords')}
                className="font-sans text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold transition-colors"
              >
                {t.landlords.pageLink}
              </Link>
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.landlords.cards.map(({ title, body }, i) => {
              const Icon = LANDLORD_ICONS[i];
              return (
                <AnimateOnScroll key={title} delay={i * 0.08}>
                  <div className="bg-cream rounded-2xl p-6 h-full border border-cream-dark">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy mb-2">{title}</h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <AnimateOnScroll>
            <div className="mt-14 max-w-2xl mx-auto bg-cream rounded-2xl p-8 border border-cream-dark">
              <h3 className="font-serif text-xl font-bold text-navy mb-2 text-center">
                {t.landlords.formTitle}
              </h3>
              <p className="font-sans text-sm text-gray-600 mb-8 text-center">{t.landlords.formSubtitle}</p>
              <LandlordPropertyForm locale={locale} />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.whatsapp, href: whatsappLink(locale, 'rent') }}
        secondaryCTA={{ label: t.cta.call, href: 'tel:+19546141351' }}
      />
    </>
  );
}
