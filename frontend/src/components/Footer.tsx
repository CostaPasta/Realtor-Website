import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

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

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const areas = [
  { label: 'Coral Gables', href: '/neighborhoods/coral-gables' },
  { label: 'Aventura', href: '/neighborhoods/aventura' },
  { label: 'Boca Raton', href: '/neighborhoods/boca-raton' },
  { label: 'Doral', href: '/neighborhoods/doral' },
  { label: 'Fort Lauderdale', href: '/neighborhoods/fort-lauderdale' },
  { label: 'Hallandale Beach', href: '/neighborhoods/hallandale-beach' },
];

const pages = [
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: 'Market Updates', href: '/market-updates' },
  { label: 'About Jose', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-sans font-semibold text-white text-lg tracking-wide">
                JOSE COSTA
              </span>
              <span className="font-sans text-gold text-[10px] tracking-widest uppercase">
                Realtor®
              </span>
            </Link>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
              Your South Florida real estate expert. Serving buyers and sellers across Miami-Dade,
              Broward, and Palm Beach in English, Español, and Português.
            </p>
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
              <a
                href="#"
                aria-label="Jose Costa on LinkedIn"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gold mb-4">
              Navigate
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
              Neighborhoods
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
              Contact
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
                  href="mailto:USARealtor1@gmail.com"
                  className="font-sans text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <Mail size={15} />
                  Jose@USAREALTOR.com
                </a>
              </li>
              <li className="pt-2">
                <p className="font-sans text-xs text-white/50">
                  Atlantic Florida Properties
                </p>
                <p className="font-sans text-xs text-white/50 mt-1">
                  {/* TODO: Replace with real license number */}
                  FL License # [LICENSE_NUMBER]
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/50 text-center md:text-left">
            © 2025 Jose Costa, Realtor® | Atlantic Florida Properties |{' '}
            {/* TODO: Replace with real license number */}
            FL License # [LICENSE_NUMBER]
          </p>
          <p className="font-sans text-xs text-white/40 text-center">
            Equal Housing Opportunity. Jose Costa is a licensed real estate agent affiliated with
            Atlantic Florida Properties. All information herein is deemed reliable but not guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
