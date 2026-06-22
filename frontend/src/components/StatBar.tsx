interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  dark?: boolean;
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
                {stat.value}
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
