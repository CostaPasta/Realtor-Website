import type { Metadata } from 'next';
import PrivacyContent from '@/components/pages/PrivacyContent';
import { privacyDictionary } from '@/i18n/pages/privacy';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('pt', '/privacy', privacyDictionary.pt.meta);

export default function Page() {
  return <PrivacyContent locale="pt" />;
}
