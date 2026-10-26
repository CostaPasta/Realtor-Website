import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';
import { aboutDictionary } from '@/i18n/pages/about';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('en', '/about', aboutDictionary.en.meta);

export default function Page() {
  return <AboutContent locale="en" />;
}
