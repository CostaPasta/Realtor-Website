import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import SiteAnalytics from '@/components/SiteAnalytics';
import MotionProvider from '@/components/MotionProvider';

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
  metadataBase: new URL('https://www.josecostarealtor.com'),
  title: {
    default: 'Jose Costa | Palm Beach County Realtor | Rentals, Sales & More',
    template: '%s | Jose Costa Realtor',
  },
  description:
    'Jose Costa is a Palm Beach County realtor helping people rent, buy, and sell homes across western Palm Beach County, Broward, and South Florida, in English, Spanish, and Portuguese. Specializing in rentals and affordable homes.',
  keywords: [
    'Palm Beach County realtor',
    'Royal Palm Beach realtor',
    'rental homes Palm Beach County',
    'first time home buyer Palm Beach',
    'trilingual realtor Florida',
    'realtor en español Palm Beach',
    'corretor de imóveis Palm Beach',
    'realtor que fala português Florida',
    'homes for rent Royal Palm Beach',
    'Wellington FL realtor',
    'West Palm Beach homes for sale',
    'Broward County realtor',
    'Davie FL realtor',
    'South Florida affordable homes',
    'agente imobiliário Florida',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.josecostarealtor.com',
    siteName: 'Jose Costa Realtor',
    title: 'Jose Costa | Palm Beach County Realtor',
    description:
      'Helping people rent, buy, and sell homes across western Palm Beach County, Broward, and South Florida, in English, Spanish, and Portuguese.',
  },
  // Title and description come from each page's openGraph, so they match the page being shared.
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <MotionProvider>{children}</MotionProvider>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <SiteAnalytics />
      </body>
    </html>
  );
}
