import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jose Costa — South Florida Realtor | English, Spanish & Portuguese',
    template: '%s | Jose Costa Realtor',
  },
  description:
    'Jose Costa is a South Florida realtor with Atlantic Florida Properties, serving buyers and sellers across Miami-Dade, Broward, and Palm Beach in English, Spanish, and Portuguese.',
  keywords: [
    'South Florida realtor',
    'Miami realtor',
    'realtor en español',
    'corretor de imóveis Florida',
    'Aventura real estate',
    'Coral Gables realtor',
    'trilingual realtor Florida',
    'Boca Raton real estate',
    'Fort Lauderdale realtor',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.josecostarealtor.com',
    siteName: 'Jose Costa Realtor',
    title: 'Jose Costa — South Florida Realtor',
    description:
      'Serving buyers and sellers across Miami-Dade, Broward, and Palm Beach in English, Spanish, and Portuguese.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Costa — South Florida Realtor',
    description:
      'Trilingual South Florida realtor serving Miami-Dade, Broward, and Palm Beach counties.',
  },
  alternates: {
    canonical: 'https://www.josecostarealtor.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
