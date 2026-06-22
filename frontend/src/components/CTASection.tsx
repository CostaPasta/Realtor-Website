import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

export default function CTASection({
  title = 'Ready to make your move in South Florida?',
  subtitle =
    "Whether you're buying, selling, or just exploring your options — Jose is here to guide you every step of the way. Let's start with a free, no-pressure conversation.",
  primaryCTA = { label: 'Schedule a Free Call', href: '/contact' },
  secondaryCTA = { label: 'Browse Neighborhoods', href: '/neighborhoods' },
}: CTASectionProps) {
  return (
    <section className="bg-navy py-20 md:py-24">
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
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-sans font-semibold rounded-full hover:bg-gold-light transition-colors text-sm"
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-sans font-semibold rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
