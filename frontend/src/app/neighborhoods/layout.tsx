import type { Metadata } from 'next';
import { pageMetadata } from '@/i18n/metadata';

// The neighborhoods index is a client component, so its metadata lives here.
// Each neighborhood page sets its own, which replaces this.
export const metadata: Metadata = pageMetadata('/neighborhoods', {
  title: 'Neighborhoods in Palm Beach and Broward County',
  description:
    'A closer look at the Palm Beach County and Broward communities Jose Costa knows best: home prices, schools, parks, and what renters and buyers should know.',
});

export default function NeighborhoodsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
