import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import MarketUpdatesSignup from '@/components/MarketUpdatesSignup';
import { visibleMarketUpdates } from '@/data/market-updates';
import { pageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = pageMetadata('/market-updates', {
  title: 'Market Updates: Western Palm Beach County Rents and Prices',
  description:
    'Short, sourced reports on rents and home prices in Royal Palm Beach, The Acreage and Loxahatchee, and Lake Worth Beach, built from MLS data.',
});

const COUNTY_COLORS: Record<string, string> = {
  'South Florida': 'bg-navy/10 text-navy',
  'Miami-Dade': 'bg-coral/10 text-coral',
  Broward: 'bg-gold/10 text-gold-dark',
  'Palm Beach': 'bg-green-50 text-green-700',
};

export default function MarketUpdatesPage() {
  const updates = visibleMarketUpdates();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Market Updates
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            Rents and home prices in the areas Jose works
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-2xl leading-relaxed">
            Short reports on Royal Palm Beach, The Acreage and Loxahatchee, and Lake Worth Beach,
            built from MLS data. Every number links back to its source.
          </p>
        </div>
      </section>

      {/* ─── Email Signup ─── */}
      <section className="py-10 bg-cream border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-xl font-bold text-navy mb-2 text-center">
              Get the next report by email
            </p>
            <p className="font-sans text-sm text-gray-600 mb-5 text-center">
              A short email when a new report is out. No spam.
            </p>
            <MarketUpdatesSignup />
          </div>
        </div>
      </section>

      {/* ─── Updates Grid ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Reports" title="Market Reports" align="left" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {updates.map((update) => {
              const date = new Date(update.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              });
              return (
                <Link
                  key={update.id}
                  href={`/market-updates/${update.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-gold hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-sans text-xs font-semibold px-3 py-1 rounded-full ${COUNTY_COLORS[update.county] ?? 'bg-gray-100 text-gray-600'}`}
                    >
                      {update.county}
                    </span>
                    <span className="font-sans text-xs text-gray-400">{date}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-navy leading-snug group-hover:text-gold transition-colors mb-3">
                    {update.title}
                  </h2>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed line-clamp-3">{update.summary}</p>
                  <p className="mt-4 font-sans text-xs font-semibold text-gold group-hover:text-gold-dark transition-colors">
                    Read more →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
