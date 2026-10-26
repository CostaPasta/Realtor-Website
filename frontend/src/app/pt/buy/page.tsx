import type { Metadata } from 'next';
import BuyContent from '@/components/pages/BuyContent';
import { buyDictionary } from '@/i18n/pages/buy';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('pt', '/buy', buyDictionary.pt.meta);

export default function Page() {
  return <BuyContent locale="pt" />;
}
