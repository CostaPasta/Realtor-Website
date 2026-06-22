interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  transactionType: 'Buyer' | 'Seller' | 'Buyer & Seller';
  year?: number;
}

const BADGE: Record<string, string> = {
  Buyer: 'bg-navy/10 text-navy',
  Seller: 'bg-coral/10 text-coral',
  'Buyer & Seller': 'bg-gold/10 text-gold-dark',
};

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

// Warm avatar colors cycling through the palette
const AVATAR_COLORS = [
  { bg: '#0D2442', text: '#C4A35A' }, // navy/gold
  { bg: '#C4A35A', text: '#0D2442' }, // gold/navy
  { bg: '#D85A30', text: '#fff' },    // coral/white
  { bg: '#1A3A5C', text: '#D4BC84' }, // navy-light/gold-light
  { bg: '#A07C38', text: '#fff' },    // gold-dark/white
  { bg: '#E87B55', text: '#fff' },    // coral-light/white
];

export default function TestimonialCard({
  quote,
  name,
  location,
  transactionType,
  year,
}: TestimonialCardProps) {
  // Pick an avatar color based on name length (stable, not random)
  const colorIdx = name.length % AVATAR_COLORS.length;
  const avatarColor = AVATAR_COLORS[colorIdx];
  const initials = getInitials(name);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all duration-200">
      {/* Gold quote mark */}
      <span
        className="font-serif text-4xl text-gold leading-none select-none -mb-2"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="font-sans text-gray-700 leading-relaxed text-[15px] flex-1">{quote}</p>

      <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
        {/* Avatar with initials */}
        <div
          className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-sans font-bold text-sm"
          style={{ backgroundColor: avatarColor.bg, color: avatarColor.text }}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-sans font-semibold text-navy text-sm truncate">{name}</p>
          <p className="font-sans text-xs text-gray-400 truncate">
            {location}{year ? ` · ${year}` : ''}
          </p>
        </div>

        <span
          className={`text-xs font-sans font-semibold px-3 py-1 rounded-full shrink-0 ${BADGE[transactionType] ?? 'bg-gray-100 text-gray-600'}`}
        >
          {transactionType}
        </span>
      </div>
    </div>
  );
}
