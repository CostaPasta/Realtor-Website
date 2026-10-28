import CTASection from '@/components/CTASection';
import RentVsBuyCalculator from '@/components/RentVsBuyCalculator';
import { type Locale, localizedPath } from '@/i18n/locales';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { calculatorAreas } from '@/lib/rent-vs-buy';
import { whatsappLink } from '@/lib/whatsapp';

export default function RentVsBuyContent({ locale }: { locale: Locale }) {
  const t = rentVsBuyDictionary[locale];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">{t.hero.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-6 font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">{t.hero.intro}</p>
        </div>
      </section>

      {/* ─── Calculator ─── */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RentVsBuyCalculator locale={locale} areas={calculatorAreas} />

          <div className="mt-14 max-w-3xl">
            <h2 className="font-serif text-xl font-bold text-navy mb-4">{t.notes.title}</h2>
            <ul className="space-y-2 font-sans text-sm text-gray-700 leading-relaxed list-disc pl-5 marker:text-gold">
              {t.notes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 font-sans text-xs text-gray-500 leading-relaxed">{t.notes.disclaimer}</p>
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        primaryCTA={{ label: t.cta.whatsapp, href: whatsappLink(locale, 'buy') }}
        secondaryCTA={{ label: t.cta.buy, href: localizedPath(locale, '/buy') }}
      />
    </>
  );
}
