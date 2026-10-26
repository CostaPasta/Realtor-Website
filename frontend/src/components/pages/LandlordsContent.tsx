import Image from 'next/image';
import Link from 'next/link';
import { Users, ShieldCheck, TrendingUp, ClipboardCheck, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import LandlordPropertyForm from '@/components/LandlordPropertyForm';
import { neighborhoods } from '@/data/neighborhoods';
import { RENTAL_STATS_DATE, rentalStats } from '@/data/market-stats';
import { type Locale, TRANSLATED_NEIGHBORHOODS, localizedPath } from '@/i18n/locales';
import { landlordsDictionary } from '@/i18n/pages/landlords';
import { whatsappLink } from '@/lib/whatsapp';

const SERVICE_ICONS = [Users, ShieldCheck, TrendingUp, ClipboardCheck];
const NUMBER_LOCALES: Record<Locale, string> = { en: 'en-US', es: 'es-US', pt: 'pt-BR' };

export default function LandlordsContent({ locale }: { locale: Locale }) {
  const t = landlordsDictionary[locale];
  const numberLocale = NUMBER_LOCALES[locale];
  const money = new Intl.NumberFormat(numberLocale, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const statsDate = new Date(RENTAL_STATS_DATE);
  const date = new Intl.DateTimeFormat(numberLocale, { dateStyle: 'long', timeZone: 'UTC' }).format(statsDate);
  const month = new Intl.DateTimeFormat(numberLocale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(statsDate);
  const days = rentalStats.map((r) => r.daysListed);
  const fillStats = (text: string) =>
    text
      .replace('{date}', date)
      .replace('{month}', month)
      .replace('{min}', String(Math.min(...days)))
      .replace('{max}', String(Math.max(...days)));

  const rows = rentalStats.map((r) => {
    const name = neighborhoods.find((n) => n.slug === r.slug)?.name ?? r.slug;
    const translated = (TRANSLATED_NEIGHBORHOODS as readonly string[]).includes(r.slug);
    const href = translated || locale === 'en' ? localizedPath(locale, `/neighborhoods/${r.slug}`) : `/neighborhoods/${r.slug}`;
    return { ...r, name, href };
  });

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <Image
          src="/images/category-rental.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, rgba(8, 18, 28, 0.9) 0%, rgba(8, 18, 28, 0.84) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">{t.hero.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">{t.hero.intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#owner-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              {t.hero.primary}
            </a>
            <a
              href={whatsappLink(locale, 'landlord')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              <MessageCircle size={16} />
              {t.hero.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ─── Current rents ─── */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.rents.eyebrow} title={t.rents.title} subtitle={fillStats(t.rents.subtitle)} />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-cream-dark bg-white shadow-sm">
              <table className="w-full font-sans text-[13px] sm:text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500 border-b border-cream-dark">
                    <th scope="col" className="px-3 sm:px-5 py-4 font-semibold">{t.rents.city}</th>
                    <th scope="col" className="px-3 sm:px-5 py-4 font-semibold text-right">{t.rents.twoBed}</th>
                    <th scope="col" className="px-3 sm:px-5 py-4 font-semibold text-right">{t.rents.threeBed}</th>
                    <th scope="col" className="px-3 sm:px-5 py-4 font-semibold text-right">{t.rents.days}</th>
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  {rows.map((r) => (
                    <tr key={r.slug} className="border-b border-cream-dark last:border-0">
                      <th scope="row" className="px-3 sm:px-5 py-4 text-left font-semibold text-navy">
                        <Link href={r.href} className="hover:text-gold transition-colors">
                          {r.name}
                        </Link>
                      </th>
                      <td className="px-3 sm:px-5 py-4 text-right text-gray-700 whitespace-nowrap">{money.format(r.twoBedroom)}</td>
                      <td className="px-3 sm:px-5 py-4 text-right text-gray-700 whitespace-nowrap">{money.format(r.threeBedroom)}</td>
                      <td className="px-3 sm:px-5 py-4 text-right text-gray-700 whitespace-nowrap">
                        {r.daysListed} {t.rents.daysUnit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 font-sans text-xs text-gray-500 leading-relaxed">{t.rents.note}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── What Jose does ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.cards.map(({ title, body }, i) => {
              const Icon = SERVICE_ICONS[i];
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
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} light />
          </AnimateOnScroll>
          <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.process.steps.map((step, i) => (
              <AnimateOnScroll key={step.title} delay={i * 0.08}>
                <li className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                  <span className="shrink-0 w-9 h-9 rounded-full border border-gold/50 flex items-center justify-center font-sans text-sm font-bold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="font-sans text-sm text-white/70 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
          </AnimateOnScroll>
          <div className="mt-10 divide-y divide-cream-dark border-y border-cream-dark">
            {t.faq.items.map((item) => (
              <details key={item.title} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-bold text-navy">
                  {item.title}
                  <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-sans text-sm text-gray-600 leading-relaxed">{fillStats(item.body)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Form ─── */}
      <section id="owner-form" className="py-20 md:py-24 bg-cream scroll-mt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <SectionHeading eyebrow={t.form.eyebrow} title={t.form.title} subtitle={t.form.subtitle} />
          </AnimateOnScroll>
          <div className="mt-10 bg-white rounded-2xl p-8 border border-cream-dark shadow-sm">
            <LandlordPropertyForm locale={locale} />
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.whatsapp, href: whatsappLink(locale, 'landlord') }}
        secondaryCTA={{ label: t.cta.call, href: 'tel:+19546141351' }}
      />
    </>
  );
}
