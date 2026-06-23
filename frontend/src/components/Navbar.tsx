'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Sell', href: '/sell' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Neighborhoods', href: '/neighborhoods' },
  { label: 'Market Updates', href: '/market-updates' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-sans font-semibold text-white text-base md:text-lg tracking-wide">
              JOSE COSTA
            </span>
            <span className="font-sans text-gold text-[10px] tracking-widest uppercase">
              Realtor®
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-1 py-2 font-sans text-sm font-medium transition-colors hover:text-gold ${
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
            <Link
              href="/contact"
              className="ml-2 font-sans text-sm font-semibold px-5 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-navy transition-all"
            >
              Contact Jose
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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
            href="/contact"
            className="mt-4 font-sans text-lg font-semibold px-8 py-3 rounded-full bg-gold text-navy hover:bg-gold-light transition-colors"
          >
            Contact Jose
          </Link>
        </div>
      )}
    </>
  );
}
