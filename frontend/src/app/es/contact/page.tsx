import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';
import { contactDictionary } from '@/i18n/pages/contact';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('es', '/contact', contactDictionary.es.meta);

export default function Page() {
  return <ContactContent locale="es" />;
}
