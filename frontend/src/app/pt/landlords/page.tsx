import type { Metadata } from 'next';
import LandlordsContent from '@/components/pages/LandlordsContent';
import { landlordsDictionary } from '@/i18n/pages/landlords';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('pt', '/landlords', landlordsDictionary.pt.meta);

export default function Page() {
  return <LandlordsContent locale="pt" />;
}
