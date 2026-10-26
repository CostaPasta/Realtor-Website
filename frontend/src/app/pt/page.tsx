import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';
import { homeDictionary } from '@/i18n/pages/home';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('pt', '/', homeDictionary.pt.meta, {
  absoluteTitle: true,
});

export default function Page() {
  return <HomeContent locale="pt" />;
}
