'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileStickyBar() {
  const [pastHero, setPastHero] = useState(false);
  const [atCTA, setAtCTA] = useState(false);

  useEffect(() => {
    const heroSentinel = document.getElementById('hero-sentinel');
    const ctaSection = document.getElementById('cta-section');

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroSentinel) heroObserver.observe(heroSentinel);

    // One-way latch: once the CTA section has been reached, keep the bar
    // hidden for the rest of the page (including the footer below it)
    // rather than toggling back on as the CTA scrolls out of view.
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAtCTA(true);
      },
      { threshold: 0 }
    );
    if (ctaSection) ctaObserver.observe(ctaSection);

    return () => {
      heroObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !atCTA;

  // Avoid two overlapping WhatsApp CTAs on mobile: hide the global floating
  // WhatsApp button while this bar's own WhatsApp button is shown.
  useEffect(() => {
    const globalWhatsApp = document.querySelector('a[aria-label="Chat with Jose on WhatsApp"]');
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
    >
      <div className="grid grid-cols-2 h-14">
        <a
          href="tel:+19546141351"
          className="flex items-center justify-center gap-2 font-sans font-semibold text-navy text-sm border-r border-gray-200"
        >
          <Phone size={16} className="text-gold" />
          Call Jose
        </a>
        <a
          href="https://wa.me/19546141351"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 font-sans font-semibold text-white text-sm"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
