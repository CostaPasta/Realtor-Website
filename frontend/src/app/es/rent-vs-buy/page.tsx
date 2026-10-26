import type { Metadata } from 'next';
import RentVsBuyContent from '@/components/pages/RentVsBuyContent';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('es', '/rent-vs-buy', rentVsBuyDictionary.es.meta);

export default function Page() {
  return <RentVsBuyContent locale="es" />;
}
