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
    default: 'Jose Costa — Palm Beach County Realtor | Rentals, Sales & More',
    template: '%s | Jose Costa Realtor',
  },
  description:
    'Jose Costa is a Palm Beach County realtor helping families rent, buy, and sell homes across western Palm Beach County, Broward, and South Florida — in English, Spanish, and Portuguese. Specializing in affordable family homes and rental properties.',
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
    title: 'Jose Costa — Palm Beach County Realtor',
    description:
      'Helping families rent, buy, and sell homes across western Palm Beach County, Broward, and South Florida — in English, Spanish, and Portuguese.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Costa — Palm Beach County Realtor',
    description:
      'Trilingual Palm Beach County realtor specializing in rentals, first-time home purchases, and family home sales.',
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
    <html lang="en" data-scroll-behavior="smooth" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
