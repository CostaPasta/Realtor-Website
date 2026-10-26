import type { Metadata } from 'next';
import SellContent from '@/components/pages/SellContent';
import { sellDictionary } from '@/i18n/pages/sell';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('es', '/sell', sellDictionary.es.meta);

export default function Page() {
  return <SellContent locale="es" />;
}
