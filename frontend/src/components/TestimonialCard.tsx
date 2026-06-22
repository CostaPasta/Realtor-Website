interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  transactionType: 'Buyer' | 'Seller' | 'Buyer & Seller';
  year?: number;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  transactionType,
  year,
}: TestimonialCardProps) {
  const badgeColors: Record<string, string> = {
    Buyer: 'bg-navy/10 text-navy',
    Seller: 'bg-coral/10 text-coral',
    'Buyer & Seller': 'bg-gold/10 text-gold-dark',
  };

  return (
    <div className="bg-cream rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-sm">
      <span className="font-serif text-5xl text-gold leading-none select-none" aria-hidden="true">
        &ldquo;
      </span>
      <p className="font-sans text-gray-700 leading-relaxed text-base">{quote}</p>
      <div className="mt-auto pt-4 border-t border-cream-dark flex items-center justify-between gap-4">
        <div>
          <p className="font-sans font-semibold text-navy text-sm">{name}</p>
          <p className="font-sans text-xs text-gray-500">
            {location}{year ? `, ${year}` : ''}
          </p>
        </div>
        <span
          className={`text-xs font-sans font-semibold px-3 py-1 rounded-full shrink-0 ${badgeColors[transactionType] ?? 'bg-gray-100 text-gray-600'}`}
        >
          {transactionType}
        </span>
      </div>
    </div>
  );
}
