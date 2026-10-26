import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';
import { contactDictionary } from '@/i18n/pages/contact';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('en', '/contact', contactDictionary.en.meta);

export default function ContactPage() {
  return <ContactContent locale="en" />;
}
