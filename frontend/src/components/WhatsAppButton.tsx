'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
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
      href="https://wa.me/19546141351"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat with Jose on WhatsApp"
      className={`fixed bottom-6 right-4 z-50 flex items-center gap-2 rounded-full shadow-lg transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ backgroundColor: '#25D366', minWidth: 52, minHeight: 52 }}
    >
      <span className="flex items-center justify-center w-[52px] h-[52px] shrink-0">
        <MessageCircle size={26} color="white" strokeWidth={2} />
      </span>
      <span
        className={`font-sans font-semibold text-white text-sm pr-4 overflow-hidden whitespace-nowrap transition-all duration-300 ${
          hovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
