import Link from 'next/link';
import { MapPin, TrendingUp, Clock } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
}

interface NeighborhoodCardProps {
  name: string;
  slug: string;
  county: string;
  tagline: string;
  medianHomePrice: string;
  avgDaysOnMarket: string;
  bestFor: string;
}

export default function NeighborhoodCard({
  name,
  slug,
  county,
  tagline,
  medianHomePrice,
  avgDaysOnMarket,
  bestFor,
}: NeighborhoodCardProps) {
  return (
    <Link
      href={`/neighborhoods/${slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-gold hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="font-serif text-xl font-bold text-navy group-hover:text-gold transition-colors">
            {name}
          </h3>
          <p className="text-xs font-sans text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={12} />
            {county} County
          </p>
        </div>
      </div>
      <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">{tagline}</p>
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-cream rounded-lg p-3">
          <p className="text-xs font-sans text-gray-500 flex items-center gap-1 mb-1">
            <TrendingUp size={11} />
            Median Price
          </p>
          <p className="font-sans font-bold text-navy text-sm">{medianHomePrice}</p>
        </div>
        <div className="bg-cream rounded-lg p-3">
          <p className="text-xs font-sans text-gray-500 flex items-center gap-1 mb-1">
            <Clock size={11} />
            Avg Days on Market
          </p>
          <p className="font-sans font-bold text-navy text-sm">{avgDaysOnMarket} days</p>
        </div>
      </div>
      <p className="text-xs font-sans text-gray-500">
        <span className="font-semibold text-coral">Best for:</span> {bestFor}
      </p>
    </Link>
  );
}
