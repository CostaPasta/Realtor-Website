'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  LANGUAGE_TAGS,
  type Locale,
  LOCALE_LABELS,
  locales,
  localeFromPath,
  localizedPath,
  switchLocalePath,
} from '@/i18n/locales';

// Rentals lead: they are most of Jose's business. Neighborhoods and Market Updates
// are English-only, so those links go to the English pages.
const NAV: Record<Locale, { links: { label: string; href: string }[]; contact: string }> = {
  en: {
    links: [
      { label: 'Rentals', href: '/rentals' },
      { label: 'Buy', href: '/buy' },
      { label: 'Sell', href: '/sell' },
      { label: 'Neighborhoods', href: '/neighborhoods' },
      { label: 'Market Updates', href: '/market-updates' },
      { label: 'About', href: '/about' },
    ],
    contact: 'Contact Jose',
  },
  es: {
    links: [
      { label: 'Alquileres', href: '/es/rentals' },
      { label: 'Comprar', href: '/es/buy' },
      { label: 'Vender', href: '/es/sell' },
      { label: 'Vecindarios', href: '/neighborhoods' },
      { label: 'Mercado', href: '/market-updates' },
      { label: 'Sobre Jose', href: '/es/about' },
    ],
    contact: 'Contactar a Jose',
  },
  pt: {
    links: [
      { label: 'Aluguel', href: '/pt/rentals' },
      { label: 'Comprar', href: '/pt/buy' },
      { label: 'Vender', href: '/pt/sell' },
      { label: 'Bairros', href: '/neighborhoods' },
      { label: 'Mercado', href: '/market-updates' },
      { label: 'Sobre o Jose', href: '/pt/about' },
    ],
    contact: 'Falar com o Jose',
  },
};

function LanguageSwitcher({ pathname, current, large = false }: { pathname: string; current: Locale; large?: boolean }) {
  return (
    <div role="group" aria-label="Language" className={`flex items-center ${large ? 'gap-3' : 'gap-1'}`}>
      {locales.map((l) => (
        <Link
          key={l}
          href={switchLocalePath(pathname, l)}
          hrefLang={LANGUAGE_TAGS[l]}
          lang={LANGUAGE_TAGS[l]}
          title={LOCALE_LABELS[l].native}
          aria-current={l === current ? 'true' : undefined}
          className={`font-sans font-semibold rounded-full transition-colors ${
            large ? 'text-base px-4 py-1.5' : 'text-xs px-2 py-1'
          } ${l === current ? 'bg-white/15 text-gold' : 'text-white/70 hover:text-gold'}`}
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}
        >
          {LOCALE_LABELS[l].short}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const locale = localeFromPath(pathname);
  const { links: navLinks, contact } = NAV[locale];

  // The root layout renders <html lang="en">; keep it in sync on /es and /pt pages.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close the menu on route change (state adjusted during render, not in an effect).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-navy shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={localizedPath(locale, '/')} className="flex flex-col leading-none">
            <span className="font-sans font-semibold text-white text-base md:text-lg tracking-wide" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              JOSE COSTA
            </span>
            <span className="font-sans text-gold text-[10px] tracking-widest uppercase" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
              Realtor®
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 font-sans text-sm font-medium whitespace-nowrap transition-colors hover:text-gold ${
                  pathname === link.href ? 'text-gold' : 'text-white/90'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <LanguageSwitcher pathname={pathname} current={locale} />
            <Link
              href={localizedPath(locale, '/contact')}
              className="font-sans text-sm font-semibold px-5 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-navy transition-all whitespace-nowrap"
            >
              {contact}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.6))' }} /> : <Menu size={24} style={{ filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.6))' }} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-navy flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-2xl font-semibold transition-colors ${
                pathname === link.href ? 'text-gold' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={localizedPath(locale, '/contact')}
            className="mt-4 font-sans text-lg font-semibold px-8 py-3 rounded-full bg-gold text-navy hover:bg-gold-light transition-colors"
          >
            {contact}
          </Link>
          <LanguageSwitcher pathname={pathname} current={locale} large />
        </div>
      )}
    </>
  );
}
