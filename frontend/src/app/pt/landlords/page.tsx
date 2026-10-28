import type { Metadata } from 'next';
import LandlordsContent from '@/components/pages/LandlordsContent';
import { landlordsDictionary } from '@/i18n/pages/landlords';
import { ownShareImage, translatedPageMetadata } from '@/i18n/metadata';
import { landlordOgAlt } from '@/lib/og';

export const metadata: Metadata = translatedPageMetadata('pt', '/landlords', landlordsDictionary.pt.meta, {
  image: ownShareImage('pt', '/landlords', landlordOgAlt('pt')),
});

export default function Page() {
  return <LandlordsContent locale="pt" />;
}
