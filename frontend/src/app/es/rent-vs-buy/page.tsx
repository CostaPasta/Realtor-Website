import type { Metadata } from 'next';
import RentVsBuyContent from '@/components/pages/RentVsBuyContent';
import { rentVsBuyDictionary } from '@/i18n/pages/rent-vs-buy';
import { ownShareImage, translatedPageMetadata } from '@/i18n/metadata';
import { calculatorOgAlt } from '@/lib/og';

export const metadata: Metadata = translatedPageMetadata('es', '/rent-vs-buy', rentVsBuyDictionary.es.meta, {
  image: ownShareImage('es', '/rent-vs-buy', calculatorOgAlt('es')),
});

export default function Page() {
  return <RentVsBuyContent locale="es" />;
}
