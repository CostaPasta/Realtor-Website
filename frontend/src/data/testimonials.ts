export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  transactionType: 'Buyer' | 'Seller' | 'Buyer & Seller';
  language: 'English' | 'Spanish' | 'Portuguese';
  year: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Jose made our move from São Paulo to Aventura seamless. We had never purchased property in the United States before, and Jose walked us through every step in Portuguese. We never felt like we were navigating alone.',
    name: 'Rafael & Camila M.',
    location: 'Aventura',
    transactionType: 'Buyer',
    language: 'Portuguese',
    year: 2023,
  },
  {
    id: '2',
    quote:
      'We listed our home in Coral Gables after 12 years. Jose advised us to hold off on listing for six weeks and make a few targeted improvements. We ended up selling for $47,000 over our initial asking price. His market knowledge is unmatched.',
    name: 'The Whitfield Family',
    location: 'Coral Gables',
    transactionType: 'Seller',
    language: 'English',
    year: 2024,
  },
  {
    id: '3',
    quote:
      'Llegamos a Miami sin conocer a nadie y Jose fue nuestra primera persona de confianza en Florida. Nos encontró una casa en Doral perfecta para nuestra familia en menos de 60 días.',
    name: 'Andrés & Patricia V.',
    location: 'Doral',
    transactionType: 'Buyer',
    language: 'Spanish',
    year: 2023,
  },
  {
    id: '4',
    quote:
      'Jose sold our Boca Raton property in 22 days — well under the market average. He handled everything professionally and was always available when we had questions. We\'ve already referred three neighbors to him.',
    name: 'Robert & Sandra K.',
    location: 'Boca Raton',
    transactionType: 'Seller',
    language: 'English',
    year: 2024,
  },
  {
    id: '5',
    quote:
      'Como investidor imobiliário, já trabalhei com muitos corretores. Jose é diferente — ele entende o mercado de forma analítica e sempre apresenta dados reais, não apenas otimismo.',
    name: 'Gustavo A.',
    location: 'Hallandale Beach',
    transactionType: 'Buyer',
    language: 'Portuguese',
    year: 2022,
  },
  {
    id: '6',
    quote:
      'Jose found us an off-market property in Fort Lauderdale that never hit Zillow. That\'s the kind of access and network you simply cannot replicate by searching on your own.',
    name: 'Michael T.',
    location: 'Fort Lauderdale',
    transactionType: 'Buyer',
    language: 'English',
    year: 2024,
  },
];
