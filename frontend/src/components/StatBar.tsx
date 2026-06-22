'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  dark?: boolean;
}

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  return { prefix, number: parseInt(number, 10), suffix };
}

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const parsed = parseValue(value);
  const { count, ref } = useCountUp(parsed?.number ?? 0, 1400, delay);

  if (!parsed) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {parsed.prefix}
      {count}
      {parsed.suffix}
    </span>
  );
}

export default function StatBar({ stats, dark = false }: StatBarProps) {
  const bg = dark ? 'bg-navy' : 'bg-cream';
  const valueColor = dark ? 'text-gold' : 'text-navy';
  const labelColor = dark ? 'text-white/70' : 'text-gray-600';
  const dividerColor = dark ? 'border-white/10' : 'border-gray-200';

  return (
    <div className={`${bg} py-12 md:py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i > 0 ? `border-l ${dividerColor} pl-8` : ''
              }`}
            >
              <span className={`font-serif text-4xl md:text-5xl font-bold ${valueColor}`}>
                <AnimatedStat value={stat.value} delay={i * 100} />
              </span>
              <span className={`mt-2 text-sm font-sans font-medium uppercase tracking-wide ${labelColor}`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
