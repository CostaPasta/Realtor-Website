export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  transactionType: 'Buyer' | 'Seller' | 'Buyer & Seller' | 'Renter';
  language: 'English' | 'Spanish' | 'Portuguese';
  year: number;
}

// Only add reviews from real clients, with their permission. Sections that show
// testimonials (home, buy, sell, rentals, /testimonials) stay hidden while this is empty.
export const testimonials: Testimonial[] = [];
