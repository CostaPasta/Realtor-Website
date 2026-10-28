'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { type Locale, localeFromPath } from '@/i18n/locales';
import { whatsappLinkForPath } from '@/lib/whatsapp';

const LABELS: Record<Locale, { aria: string; text: string }> = {
  en: { aria: 'Chat with Jose on WhatsApp', text: 'Chat on WhatsApp' },
  es: { aria: 'Escribirle a Jose por WhatsApp', text: 'Escribir por WhatsApp' },
  pt: { aria: 'Chamar o Jose no WhatsApp', text: 'Chamar no WhatsApp' },
};

export default function WhatsAppButton() {
  const pathname = usePathname();
  const label = LABELS[localeFromPath(pathname)];
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <a
      href={whatsappLinkForPath(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label.aria}
      data-floating-whatsapp
      className={`fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full shadow-lg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ backgroundColor: '#25D366', minWidth: 52, minHeight: 52 }}
    >
      <span className="relative flex items-center justify-center w-[52px] h-[52px] shrink-0">
        <span className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-whatsapp-pulse" aria-hidden="true" />
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-whatsapp-pulse"
          style={{ animationDelay: '0.6s' }}
          aria-hidden="true"
        />
        <MessageCircle size={26} color="white" strokeWidth={2} className="relative z-10" />
      </span>
      <span
        className={`font-sans font-semibold text-white text-sm pr-4 overflow-hidden whitespace-nowrap transition-all duration-300 ${
          hovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        {label.text}
      </span>
    </a>
  );
}
