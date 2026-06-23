'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import SectionHeading from '@/components/SectionHeading';
import NeighborhoodCard from '@/components/NeighborhoodCard';
import CTASection from '@/components/CTASection';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { neighborhoods } from '@/data/neighborhoods';

const NeighborhoodsMap = dynamic(() => import('@/components/NeighborhoodsMap'), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-xl border border-gold/20 flex items-center justify-center h-[360px] md:h-[520px]"
      style={{ background: '#f8f4ec' }}
    >
      <p className="text-center text-gray-400 text-sm">Loading map…</p>
    </div>
  ),
});

const REGIONS = [
  'All',
  'Palm Beach County',
  'Broward County',
  'Treasure Coast',
  'Miami-Dade County',
  'Space Coast',
] as const;
type RegionFilter = (typeof REGIONS)[number];

export default function NeighborhoodsPage() {
  const [activeRegion, setActiveRegion] = useState<RegionFilter>('All');

  const filtered =
    activeRegion === 'All'
      ? neighborhoods
      : neighborhoods.filter((n) => n.region === activeRegion);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            Local Expertise
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            South Florida Neighborhoods — Jose&apos;s Backyard
          </h1>
          <p className="mt-4 font-sans text-white/80 max-w-xl leading-relaxed">
            Jose is based in western Palm Beach County and has spent over a decade helping
            families rent, buy, and sell homes across Palm Beach County, Broward, the Treasure
            Coast, Miami-Dade, and beyond. Here&apos;s a deep look at the communities where he
            helps clients every week.
          </p>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <NeighborhoodsMap />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── Grid with Filter ─── */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`font-sans text-sm font-semibold px-5 py-2 rounded-full border transition-colors ${
                  activeRegion === region
                    ? 'bg-navy text-white border-navy'
                    : 'border-gray-200 text-gray-600 hover:border-navy hover:text-navy'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((n, i) => (
              <AnimateOnScroll key={n.slug} delay={(i % 3) * 0.08}>
                <NeighborhoodCard {...n} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking to buy or sell in South Florida?"
        subtitle="Tell Jose which neighborhoods interest you — he'll give you a candid read on what your budget can get and what the market looks like right now."
        primaryCTA={{ label: 'Schedule a Free Call', href: '/contact' }}
        secondaryCTA={{ label: 'Read Market Updates', href: '/market-updates' }}
      />
    </>
  );
}
