import type { Metadata } from 'next';
import RentalsContent from '@/components/pages/RentalsContent';
import { rentalsDictionary } from '@/i18n/pages/rentals';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = {
  ...translatedPageMetadata('en', '/rentals', rentalsDictionary.en.meta),
  keywords: [
    'homes for rent Royal Palm Beach',
    'rental homes Palm Beach County',
    'casas de alquiler Palm Beach',
    'casas para alugar Palm Beach',
    'rentals western Palm Beach County',
    'property management Palm Beach County',
    'trilingual property rental Florida',
  ],
};

export default function RentalsPage() {
  return <RentalsContent locale="en" />;
}
