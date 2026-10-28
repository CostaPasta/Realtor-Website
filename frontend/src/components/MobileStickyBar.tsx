'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle } from 'lucide-react';
import { type Locale, localeFromPath } from '@/i18n/locales';
import { whatsappLinkForPath } from '@/lib/whatsapp';

const LABELS: Record<Locale, { call: string; whatsapp: string }> = {
  en: { call: 'Call Jose', whatsapp: 'WhatsApp' },
  es: { call: 'Llamar a Jose', whatsapp: 'WhatsApp' },
  pt: { call: 'Ligar para o Jose', whatsapp: 'WhatsApp' },
};

// Without a #hero-sentinel on the page, show the bar after this much scrolling.
const FALLBACK_SCROLL = 480;

// Mounted once in the root layout; keyed by path so each page starts hidden.
export default function MobileStickyBar() {
  const pathname = usePathname() ?? '/';
  return (
    <StickyBar
      key={pathname}
      locale={localeFromPath(pathname)}
      whatsappHref={whatsappLinkForPath(pathname)}
    />
  );
}

function StickyBar({ locale, whatsappHref }: { locale: Locale; whatsappHref: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [atCTA, setAtCTA] = useState(false);
  const label = LABELS[locale];

  useEffect(() => {
    const heroSentinel = document.getElementById('hero-sentinel');
    const ctaSection = document.getElementById('cta-section');
    const cleanups: (() => void)[] = [];

    if (heroSentinel) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => setPastHero(!entry.isIntersecting),
        { threshold: 0 }
      );
      heroObserver.observe(heroSentinel);
      cleanups.push(() => heroObserver.disconnect());
    } else {
      const onScroll = () => setPastHero(window.scrollY > FALLBACK_SCROLL);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // One-way latch: once the CTA section has been reached, keep the bar
    // hidden for the rest of the page (including the footer below it)
    // rather than toggling back on as the CTA scrolls out of view.
    if (ctaSection) {
      const ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setAtCTA(true);
        },
        { threshold: 0 }
      );
      ctaObserver.observe(ctaSection);
      cleanups.push(() => ctaObserver.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const visible = pastHero && !atCTA;

  // Avoid two overlapping WhatsApp CTAs on mobile: hide the global floating
  // WhatsApp button while this bar's own WhatsApp button is shown.
  useEffect(() => {
    const globalWhatsApp = document.querySelector('a[data-floating-whatsapp]');
    globalWhatsApp?.classList.toggle('suppress-for-sticky-bar', visible);
    return () => {
      globalWhatsApp?.classList.remove('suppress-for-sticky-bar');
    };
  }, [visible]);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={!visible}
    >
      <div className="grid grid-cols-2 h-14">
        <a
          href="tel:+19546141351"
          tabIndex={visible ? undefined : -1}
          className="flex items-center justify-center gap-2 font-sans font-semibold text-navy text-sm border-r border-gray-200"
        >
          <Phone size={16} className="text-gold" />
          {label.call}
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? undefined : -1}
          className="flex items-center justify-center gap-2 font-sans font-semibold text-whatsapp-ink text-sm bg-whatsapp"
        >
          <MessageCircle size={16} />
          {label.whatsapp}
        </a>
      </div>
    </div>
  );
}
