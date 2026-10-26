import type { Locale } from '@/i18n/locales';
import { privacyDictionary } from '@/i18n/pages/privacy';

export default function PrivacyContent({ locale }: { locale: Locale }) {
  const t = privacyDictionary[locale];

  return (
    <>
      <section className="bg-navy pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">{t.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">{t.title}</h1>
          <p className="mt-4 font-sans text-sm text-white/60">{t.updated}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-lg text-gray-700 leading-relaxed">{t.intro}</p>
          {t.sections.map((section) => (
            <div key={section.title} className="mt-10">
              <h2 className="font-serif text-2xl font-bold text-navy mb-3">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="font-sans text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
