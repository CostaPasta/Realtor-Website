import type { Metadata } from 'next';
import RentVsBuyContent from '@/components/pages/RentVsBuyContent';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { ownShareImage, translatedPageMetadata } from '@/i18n/metadata';
import { calculatorOgAlt } from '@/lib/og';

export const metadata: Metadata = translatedPageMetadata('en', '/rent-vs-buy', rentVsBuyDictionary.en.meta, {
  image: ownShareImage('en', '/rent-vs-buy', calculatorOgAlt('en')),
});

export default function Page() {
  return <RentVsBuyContent locale="en" />;
}
