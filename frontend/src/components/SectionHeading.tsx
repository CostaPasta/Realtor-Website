interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-navy';
  const eyebrowColor = light ? 'text-gold-light' : 'text-gold';
  const subtitleColor = light ? 'text-white/80' : 'text-gray-600';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-sans font-semibold tracking-widest uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <div className={`relative ${align === 'center' ? 'flex flex-col items-center' : ''}`}>
        <h2 className={`font-serif text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}>
          {title}
        </h2>
        <span
          className="block mt-3 h-0.5 w-16 bg-gold"
          aria-hidden="true"
        />
      </div>
      {subtitle && (
        <p className={`mt-2 text-base md:text-lg leading-relaxed max-w-2xl ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
