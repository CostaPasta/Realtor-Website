import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { buttonOnDark, buttonPrimary, buttonWhatsApp } from '@/lib/styles';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({
  title = 'Ready to make your move in South Florida?',
  subtitle =
    "Whether you're renting, buying, selling, or just exploring your options, the first conversation with Jose is free and comes with no pressure.",
  primaryCTA = { label: 'Contact Jose', href: '/contact' },
  secondaryCTA = { label: 'Browse Neighborhoods', href: '/neighborhoods' },
}: CTASectionProps) {
  return (
    // The id lets the mobile Call / WhatsApp bar step aside once this section is reached.
    <section id="cta-section" className="bg-navy py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
            {title}
            <span className="block mt-2 h-0.5 w-16 bg-gold mx-auto" aria-hidden="true" />
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/80 font-sans leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTALink {...primaryCTA} className={buttonPrimary} />
            {secondaryCTA && <CTALink {...secondaryCTA} className={buttonOnDark} />}
          </div>
        </div>
      </div>
    </section>
  );
}

// WhatsApp links always get the green WhatsApp button, whichever slot they are in.
function CTALink({ label, href, className }: { label: string; href: string; className: string }) {
  if (href.startsWith('https://wa.me/')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonWhatsApp}>
        <MessageCircle size={16} />
        {label}
      </a>
    );
  }
  if (href.startsWith('tel:')) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
