import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';
import { homeDictionary } from '@/i18n/pages/home';
import { translatedPageMetadata } from '@/i18n/metadata';

export const metadata: Metadata = translatedPageMetadata('en', '/', homeDictionary.en.meta, {
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Person', 'RealEstateAgent'],
            name: 'Jose Costa',
            jobTitle: 'Realtor',
            description:
              'Trilingual Palm Beach County realtor specializing in rentals, first-time home purchases, and home sales across western Palm Beach County, Broward County, and South Florida.',
            worksFor: {
              '@type': 'RealEstateAgent',
              name: 'Atlantic Florida Properties',
            },
            telephone: '+19546141351',
            email: 'USARealtor1@gmail.com',
            url: 'https://www.josecostarealtor.com',
            areaServed: [
              'Royal Palm Beach, Florida',
              'Loxahatchee, Florida',
              'Wellington, Florida',
              'West Palm Beach, Florida',
              'Palm Beach County, Florida',
              'Broward County, Florida',
            ],
            knowsLanguage: ['en', 'es', 'pt'],
            sameAs: [
              'https://www.instagram.com/josecosta.realtor/',
              'https://www.facebook.com/profile.php?id=100090548027826',
            ],
          }),
        }}
      />
      <HomeContent locale="en" />
    </>
  );
}
