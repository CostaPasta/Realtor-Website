'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import { type Locale, localeFromPath, localizedPath } from '@/i18n/locales';
import { whatsappLink } from '@/lib/whatsapp';

const COPY: Record<
  Locale,
  { eyebrow: string; title: string; body: string; home: string; rentals: string; call: string; whatsapp: string }
> = {
  en: {
    eyebrow: 'Page not found',
    title: "This page isn't here anymore.",
    body: 'The link may be old or mistyped. You can head back home, see rentals, or reach Jose directly.',
    home: 'Go to the homepage',
    rentals: 'Find a rental',
    call: 'Call (954) 614-1351',
    whatsapp: 'WhatsApp Jose',
  },
  es: {
    eyebrow: 'Página no encontrada',
    title: 'Esta página ya no existe.',
    body: 'Es posible que el enlace sea antiguo o tenga un error. Puede volver al inicio, ver casas en alquiler o comunicarse con Jose directamente.',
    home: 'Ir al inicio',
    rentals: 'Buscar casa para alquilar',
    call: 'Llamar al (954) 614-1351',
    whatsapp: 'Escribir por WhatsApp',
  },
  pt: {
    eyebrow: 'Página não encontrada',
    title: 'Esta página não existe mais.',
    body: 'O link pode estar antigo ou com erro. Você pode voltar ao início, ver casas para alugar ou falar direto com o Jose.',
    home: 'Ir para o início',
    rentals: 'Encontrar casa para alugar',
    call: 'Ligar para (954) 614-1351',
    whatsapp: 'Chamar no WhatsApp',
  },
};

export default function NotFound() {
  const locale = localeFromPath(usePathname());
  const t = COPY[locale];

  return (
    <section className="bg-navy min-h-[70vh] flex items-center pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
          {t.eyebrow}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
          {t.title}
        </h1>
        <p className="mt-5 font-sans text-white/80 leading-relaxed max-w-xl mx-auto">{t.body}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={localizedPath(locale, '/')}
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
          >
            {t.home}
          </Link>
          <Link
            href={localizedPath(locale, '/rentals')}
            className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            {t.rentals}
          </Link>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-x-8 gap-y-3 justify-center font-sans text-sm">
          <a href="tel:+19546141351" className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-gold">
            <Phone size={16} className="text-gold" />
            {t.call}
          </a>
          <a
            href={whatsappLink(locale, 'general')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-gold"
          >
            <MessageCircle size={16} className="text-[#25D366]" />
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
