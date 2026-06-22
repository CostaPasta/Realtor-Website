import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { marketUpdates } from '@/data/market-updates';

export async function generateStaticParams() {
  return marketUpdates.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = marketUpdates.find((u) => u.slug === slug);
  if (!update) return {};
  return {
    title: update.title,
    description: update.summary,
  };
}

const COUNTY_COLORS: Record<string, string> = {
  'South Florida': 'bg-navy/10 text-navy',
  'Miami-Dade': 'bg-coral/10 text-coral',
  Broward: 'bg-gold/10 text-gold-dark',
  'Palm Beach': 'bg-green-50 text-green-700',
};

export default async function MarketUpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = marketUpdates.find((u) => u.slug === slug);
  if (!update) notFound();

  const date = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link
              href="/market-updates"
              className="font-sans text-xs text-white/60 hover:text-gold transition-colors"
            >
              Market Updates
            </Link>
            <span className="text-white/30">/</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className={`font-sans text-xs font-semibold px-3 py-1 rounded-full ${COUNTY_COLORS[update.county] ?? 'bg-gray-100 text-gray-600'}`}
            >
              {update.county}
            </span>
            <span className="font-sans text-xs text-white/50">{date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
            {update.title}
          </h1>
        </div>
      </section>

      {/* ─── Article Body ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-lg text-gray-600 leading-relaxed border-l-4 border-gold pl-5 mb-10">
            {update.summary}
          </p>
          <div className="prose prose-lg max-w-none">
            {update.body.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-gray-700 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author attribution */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
              <span className="font-sans font-bold text-gold text-lg">JC</span>
            </div>
            <div>
              <p className="font-sans font-semibold text-navy text-sm">Jose Costa</p>
              <p className="font-sans text-xs text-gray-500">
                South Florida Realtor — Atlantic Florida Properties
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/market-updates"
              className="font-sans text-sm font-semibold text-navy hover:text-gold transition-colors"
            >
              ← All Market Updates
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have questions about what this means for you?"
        subtitle="Every client's situation is different. Talk to Jose directly for a personalized read on how current market conditions affect your buying or selling timeline."
        primaryCTA={{ label: 'Schedule a Free Call', href: '/contact' }}
        secondaryCTA={{ label: 'Browse More Updates', href: '/market-updates' }}
      />
    </>
  );
}
