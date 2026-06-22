import Link from 'next/link';
import { MapPin, TrendingUp, Clock } from 'lucide-react';

interface NeighborhoodCardProps {
  name: string;
  slug: string;
  county: string;
  tagline: string;
  medianHomePrice: string;
  avgDaysOnMarket: string;
  bestFor: string;
}

// Warm gradient "photo" per neighborhood — swap for real photos later
// TODO: Replace each gradient with <Image src="..." /> of the actual neighborhood
const GRADIENTS: Record<string, string> = {
  'coral-gables':       'linear-gradient(135deg, #7B3F20 0%, #C17B3C 55%, #E8B87A 100%)',
  'aventura':           'linear-gradient(135deg, #0D5E7A 0%, #1A94B0 55%, #64C8D8 100%)',
  'doral':              'linear-gradient(135deg, #4A3500 0%, #C47F00 55%, #F0B93A 100%)',
  'fort-lauderdale':    'linear-gradient(135deg, #0B4C6E 0%, #1878A8 55%, #5AB0D4 100%)',
  'hallandale-beach':   'linear-gradient(135deg, #5C4000 0%, #C88A1A 55%, #F2C96C 100%)',
  'broward':            'linear-gradient(135deg, #7A3010 0%, #C84A1A 55%, #E8906C 100%)',
  'palm-beach':         'linear-gradient(135deg, #0B3322 0%, #166644 55%, #4AAA7C 100%)',
  'palm-beach-gardens': 'linear-gradient(135deg, #1A4A1A 0%, #2E8028 55%, #72C060 100%)',
  'west-palm-beach':    'linear-gradient(135deg, #1A2F5A 0%, #2A5AAA 55%, #6A9AE0 100%)',
  'wellington':         'linear-gradient(135deg, #3A2800 0%, #7A5800 55%, #C49040 100%)',
  'jupiter':            'linear-gradient(135deg, #0B4A2A 0%, #1A8850 55%, #60C890 100%)',
  'boca-raton':         'linear-gradient(135deg, #104A20 0%, #207840 55%, #5AB870 100%)',
  'delray-beach':       'linear-gradient(135deg, #7A2A10 0%, #C84830 55%, #E89070 100%)',
  'boynton-beach':      'linear-gradient(135deg, #0B3A5A 0%, #1A6888 55%, #5AA8C8 100%)',
};

const COUNTY_FALLBACK: Record<string, string> = {
  'Miami-Dade': 'linear-gradient(135deg, #0D5E7A 0%, #1A94B0 60%, #64C8D8 100%)',
  'Broward':    'linear-gradient(135deg, #7A3010 0%, #C84A1A 60%, #E8906C 100%)',
  'Palm Beach': 'linear-gradient(135deg, #104A20 0%, #207840 60%, #5AB870 100%)',
};

export default function NeighborhoodCard({
  name,
  slug,
  county,
  tagline,
  medianHomePrice,
  avgDaysOnMarket,
  bestFor,
}: NeighborhoodCardProps) {
  const gradient = GRADIENTS[slug] ?? COUNTY_FALLBACK[county] ?? 'linear-gradient(135deg, #0D2442 0%, #1A3A5C 100%)';

  return (
    <Link
      href={`/neighborhoods/${slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-gold hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      {/* Gradient image placeholder — TODO: replace with <Image> of the neighborhood */}
      <div
        className="h-36 relative flex items-end"
        style={{ background: gradient }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="relative px-5 pb-4">
          <span className="inline-block font-sans text-[10px] font-semibold tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm rounded-full px-2 py-0.5 mb-1">
            {county} County
          </span>
          <h3 className="font-serif text-xl font-bold text-white drop-shadow-sm group-hover:text-gold transition-colors">
            {name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">{tagline}</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-cream rounded-lg p-3">
            <p className="text-[10px] font-sans text-gray-400 flex items-center gap-1 mb-0.5">
              <TrendingUp size={10} /> Median Price
            </p>
            <p className="font-sans font-bold text-navy text-sm">{medianHomePrice}</p>
          </div>
          <div className="bg-cream rounded-lg p-3">
            <p className="text-[10px] font-sans text-gray-400 flex items-center gap-1 mb-0.5">
              <Clock size={10} /> Avg Days
            </p>
            <p className="font-sans font-bold text-navy text-sm">{avgDaysOnMarket} days</p>
          </div>
        </div>
        <p className="text-xs font-sans text-gray-500 leading-snug">
          <span className="font-semibold text-coral">Best for:</span> {bestFor}
        </p>
      </div>
    </Link>
  );
}
