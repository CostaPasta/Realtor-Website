import { Phone, Mail, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import type { Locale } from '@/i18n/locales';
import { contactDictionary } from '@/i18n/pages/contact';
import { whatsappLink } from '@/lib/whatsapp';

const EMAIL = 'USARealtor1@gmail.com';

export default function ContactContent({ locale }: { locale: Locale }) {
  const t = contactDictionary[locale];

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-xl leading-relaxed">{t.hero.intro}</p>
        </div>
      </section>

      {/* ─── Contact Options ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Call */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Phone size={22} className="text-gold" />
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-2">{t.call.title}</h2>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed flex-1">{t.call.body}</p>
              <a
                href="tel:+19546141351"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-navy text-sm bg-gold hover:bg-gold-light transition-colors"
              >
                <Phone size={18} />
                (954) 614-1351
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={22} className="text-white" />
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-2">{t.whatsapp.title}</h2>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed flex-1">{t.whatsapp.body}</p>
              <a
                href={whatsappLink(locale, 'general')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={18} />
                {t.whatsapp.button}
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Mail size={22} className="text-gold" />
              </div>
              <h2 className="font-serif text-xl font-bold text-navy mb-2">{t.email.title}</h2>
              <p className="font-sans text-sm text-gray-600 mb-5 leading-relaxed flex-1">{t.email.body}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-sans font-semibold text-navy text-sm border border-navy/20 hover:border-gold hover:text-gold transition-colors break-all"
              >
                <Mail size={18} className="shrink-0" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact Form ─── */}
      <section id="form" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <SectionHeading eyebrow={t.form.eyebrow} title={t.form.title} subtitle={t.form.subtitle} />
            <div className="mt-10">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Brokerage ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy mb-4">Atlantic Florida Properties</h2>
          <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">{t.brokerage.body}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-sm text-gray-600">
            <p>{t.brokerage.serves}</p>
            <p>{t.brokerage.license} #3132965</p>
            <p>{t.brokerage.office} #1035228</p>
            <p>{t.brokerage.eho}</p>
          </div>
        </div>
      </section>
    </>
  );
}
