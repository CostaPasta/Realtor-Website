'use client';

import { useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
}

// Tailwind only sees whole class names, so the column counts are spelled out.
const COLUMNS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-2 md:grid-cols-4',
};

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, value, 1400, delay);

  // Rendered as one text node so the count-up can rewrite it in place.
  return <span ref={ref}>{value}</span>;
}

/** The one number strip, used under the header on Home, Buy, Sell, and About. */
export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="bg-cream border-b border-cream-dark py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${COLUMNS[stats.length] ?? COLUMNS[4]} gap-y-8`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-3 ${i > 0 ? 'md:border-l md:border-cream-dark' : ''}`}
            >
              <span className="font-serif text-4xl md:text-5xl font-bold text-navy tabular-nums">
                <AnimatedStat value={stat.value} delay={i * 100} />
              </span>
              <span className="mt-2 font-sans text-xs font-semibold uppercase tracking-widest text-gray-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
