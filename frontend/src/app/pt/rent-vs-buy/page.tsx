import type { Metadata } from 'next';
import RentVsBuyContent from '@/components/pages/RentVsBuyContent';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { ownShareImage, translatedPageMetadata } from '@/i18n/metadata';
import { calculatorOgAlt } from '@/lib/og';

export const metadata: Metadata = translatedPageMetadata('pt', '/rent-vs-buy', rentVsBuyDictionary.pt.meta, {
  image: ownShareImage('pt', '/rent-vs-buy', calculatorOgAlt('pt')),
});

export default function Page() {
  return <RentVsBuyContent locale="pt" />;
}
