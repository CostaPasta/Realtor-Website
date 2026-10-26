'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { type Locale, localeFromPath, localizedPath } from '@/i18n/locales';

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const EMAIL = 'USARealtor1@gmail.com';

const areas = [
  { label: 'Royal Palm Beach', href: '/neighborhoods/royal-palm-beach' },
  { label: 'The Acreage and Loxahatchee', href: '/neighborhoods/the-acreage' },
  { label: 'Wellington', href: '/neighborhoods/wellington' },
  { label: 'West Palm Beach', href: '/neighborhoods/west-palm-beach' },
  { label: 'Lake Worth Beach', href: '/neighborhoods/lake-worth-beach' },
  { label: 'Boynton Beach', href: '/neighborhoods/boynton-beach' },
];

const COPY: Record<
  Locale,
  {
    tagline: string;
    navigate: string;
    neighborhoods: string;
    contact: string;
    license: string;
    office: string;
    disclaimer: string;
    pages: { label: string; href: string; testimonials?: boolean }[];
  }
> = {
  en: {
    tagline:
      'Your Palm Beach County realtor, helping families rent, buy, and sell across western Palm Beach County and Broward County. Fluent in English, Português, and Español.',
    navigate: 'Navigate',
    neighborhoods: 'Neighborhoods',
    contact: 'Contact',
    license: 'FL License',
    office: 'Office License',
    disclaimer:
      'Equal Housing Opportunity. Jose Costa is a licensed real estate agent affiliated with Atlantic Florida Properties. All information herein is deemed reliable but not guaranteed.',
    pages: [
      { label: 'Rentals', href: '/rentals' },
      { label: 'Buy', href: '/buy' },
      { label: 'Sell', href: '/sell' },
      { label: 'Neighborhoods', href: '/neighborhoods' },
      { label: 'Market Updates', href: '/market-updates' },
      { label: 'About Jose', href: '/about' },
      { label: 'Testimonials', href: '/testimonials', testimonials: true },
      { label: 'Contact', href: '/contact' },
    ],
  },
  es: {
    tagline:
      'Su agente de bienes raíces en el condado de Palm Beach. Ayuda a familias a alquilar, comprar y vender en el oeste del condado de Palm Beach y en el condado de Broward. Habla español, inglés y portugués.',
    navigate: 'Navegación',
    neighborhoods: 'Vecindarios',
    contact: 'Contacto',
    license: 'Licencia de FL',
    office: 'Licencia de la oficina',
    disclaimer:
      'Igualdad de Oportunidades en la Vivienda. Jose Costa es un agente de bienes raíces con licencia, afiliado a Atlantic Florida Properties. La información de este sitio se considera confiable, pero no está garantizada.',
    pages: [
      { label: 'Alquileres', href: '/es/rentals' },
      { label: 'Comprar', href: '/es/buy' },
      { label: 'Vender', href: '/es/sell' },
      { label: 'Vecindarios', href: '/neighborhoods' },
      { label: 'Mercado', href: '/market-updates' },
      { label: 'Sobre Jose', href: '/es/about' },
      { label: 'Opiniones', href: '/testimonials', testimonials: true },
      { label: 'Contacto', href: '/es/contact' },
    ],
  },
  pt: {
    tagline:
      'Seu corretor de imóveis no condado de Palm Beach. Ajuda famílias a alugar, comprar e vender no oeste do condado de Palm Beach e no condado de Broward. Fala português, inglês e espanhol.',
    navigate: 'Navegação',
    neighborhoods: 'Bairros',
    contact: 'Contato',
    license: 'Licença FL',
    office: 'Licença do escritório',
    disclaimer:
      'Igualdade de Oportunidades na Habitação. Jose Costa é corretor de imóveis licenciado, afiliado à Atlantic Florida Properties. As informações deste site são consideradas confiáveis, mas não são garantidas.',
    pages: [
      { label: 'Aluguel', href: '/pt/rentals' },
      { label: 'Comprar', href: '/pt/buy' },
      { label: 'Vender', href: '/pt/sell' },
      { label: 'Bairros', href: '/neighborhoods' },
      { label: 'Mercado', href: '/market-updates' },
      { label: 'Sobre o Jose', href: '/pt/about' },
      { label: 'Depoimentos', href: '/testimonials', testimonials: true },
      { label: 'Contato', href: '/pt/contact' },
    ],
  },
};

export default function Footer() {
  const locale = localeFromPath(usePathname());
  const t = COPY[locale];
  const pages = t.pages.filter((p) => !p.testimonials || testimonials.length > 0);

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href={localizedPath(locale, '/')} className="flex flex-col leading-none mb-4">
              <span className="font-sans font-semibold text-white text-lg tracking-wide">
                JOSE COSTA
              </span>
              <span className="font-sans text-gold text-[10px] tracking-widest uppercase">
                Realtor®
              </span>
            </Link>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">{t.tagline}</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100090548027826"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jose Costa on Facebook"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/josecosta.realtor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jose Costa on Instagram"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              {t.navigate}
            </h3>
            <ul className="space-y-2">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              {t.neighborhoods}
            </h3>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="font-sans text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              {t.contact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19546141351"
                  className="font-sans text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Phone size={15} />
                  (954) 614-1351
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-sans text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2 break-all"
                >
                  <Mail size={15} className="shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="pt-2">
                <p className="font-sans text-xs text-white/50">Atlantic Florida Properties</p>
                <p className="font-sans text-xs text-white/50 mt-1">{t.license} #3132965</p>
                <p className="font-sans text-xs text-white/50 mt-0.5">{t.office} #1035228</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Jose Costa, Realtor® | Atlantic Florida Properties | FL Lic.
            #3132965
          </p>
          <p className="font-sans text-xs text-white/40 text-center">{t.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
