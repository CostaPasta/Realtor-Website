import type { Metadata } from 'next';
import RentalsContent from '@/components/pages/RentalsContent';
import { rentalsDictionary } from '@/i18n/pages/rentals';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('es', '/rentals', rentalsDictionary.es.meta);

export default function Page() {
  return <RentalsContent locale="es" />;
}
