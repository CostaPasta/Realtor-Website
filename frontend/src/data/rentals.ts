// Rentals Jose currently has available. The "Available now" section on the
// Rentals pages (all three languages) only appears when this list has entries.
//
// Add a home when it's listed and delete it the day it's rented: an outdated
// listing costs more trust than an empty section. Example entry:
//
//   {
//     id: 'rpb-3br-crestwood',
//     area: 'Royal Palm Beach',
//     rent: 2650,
//     beds: 3,
//     baths: 2,
//     sqft: 1450,
//     availableFrom: '2026-12-01',
//     imageSrc: '/images/rentals/rpb-3br-crestwood.jpg',
//     petsConsidered: true,
//   },

export interface AvailableRental {
  id: string;
  /** City or neighborhood shown on the card. Jose shares the street address by WhatsApp. */
  area: string;
  /** Monthly rent in US dollars. */
  rent: number;
  beds: number;
  baths: number;
  sqft?: number;
  /** ISO date (YYYY-MM-DD). Leave out if it's ready now. */
  availableFrom?: string;
  /** A real photo of this home, saved under public/images/rentals/. */
  imageSrc?: string;
  petsConsidered?: boolean;
}

export const availableRentals: AvailableRental[] = [];
