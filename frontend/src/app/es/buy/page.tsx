import type { Metadata } from 'next';
import BuyContent from '@/components/pages/BuyContent';
import { buyDictionary } from '@/i18n/pages/buy';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('es', '/buy', buyDictionary.es.meta);

export default function Page() {
  return <BuyContent locale="es" />;
}
