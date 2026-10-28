import Image from 'next/image';
import Link from 'next/link';
import { Search, Languages, ShieldCheck, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import RenterInquiryForm from '@/components/RenterInquiryForm';
import { FormCard } from '@/components/FormParts';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { availableRentals } from '@/data/rentals';
import { type Locale, localizedPath } from '@/i18n/locales';
import { rentalsDictionary } from '@/i18n/pages/rentals';
import { rentalListingMessage, whatsappHref, whatsappLink } from '@/lib/whatsapp';
import { buttonOnDark, buttonPrimary, buttonWhatsApp, card, eyebrow, eyebrowOnDark, iconTile } from '@/lib/styles';

const DATE_LOCALES: Record<Locale, string> = { en: 'en-US', es: 'es-US', pt: 'pt-BR' };

const RENTER_ICONS = [Search, Languages, ShieldCheck];
const RENTAL_AREAS = ['Royal Palm Beach', 'Wellington', 'Loxahatchee', 'West Palm Beach'];

const renterTestimonials = testimonials.filter((t) => t.transactionType === 'Renter');

export default function RentalsContent({ locale }: { locale: Locale }) {
  const t = rentalsDictionary[locale];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/neighborhoods/royal-palm-beach.jpg"
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
            {t.hero.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#renters" className={buttonPrimary}>
              {t.hero.renterCta}
            </a>
            <Link href={localizedPath(locale, '/landlords')} className={buttonOnDark}>
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
                  <p className={eyebrow}>
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
                          <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-wide text-gold-text">
                            {availability}
                          </p>
                          {home.petsConsidered && (
                            <p className="mt-1 font-sans text-xs text-gray-500">{t.available.pets}</p>
                          )}
                          <a
                            href={whatsappHref(rentalListingMessage(locale, home.beds, home.area, rent))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-auto ${buttonWhatsApp} w-full py-3`}
                          >
                            <MessageCircle size={16} />
                            {t.available.ask}
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
                  <div className={`${card} h-full`}>
                    <div className={`${iconTile} mb-5`}>
                      <Icon size={20} />
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
            <FormCard title={t.renters.formTitle} note={t.renters.formSubtitle} className="mt-14 max-w-2xl mx-auto">
              <RenterInquiryForm locale={locale} />
            </FormCard>
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
            href={localizedPath(locale, '/rent-vs-buy')}
            className={`shrink-0 ${buttonPrimary}`}
          >
            {t.ownBand.cta}
          </Link>
        </div>
      </section>

      {/* ─── For property owners: the landlord page has the details and the form ─── */}
      <section id="landlords" className="py-14 md:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <p className={eyebrow}>{t.owners.eyebrow}</p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-navy">{t.owners.title}</h2>
            <p className="mt-3 font-sans text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">{t.owners.body}</p>
          </div>
          <Link href={localizedPath(locale, '/landlords')} className={`shrink-0 ${buttonPrimary}`}>
            {t.owners.cta}
          </Link>
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
