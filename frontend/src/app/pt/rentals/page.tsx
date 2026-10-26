import type { Metadata } from 'next';
import RentalsContent from '@/components/pages/RentalsContent';
import { rentalsDictionary } from '@/i18n/pages/rentals';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('pt', '/rentals', rentalsDictionary.pt.meta);

export default function Page() {
  return <RentalsContent locale="pt" />;
}
