// Market stats shown on the neighborhood cards and the map ("Median House Price"
// and "Days on Market"). Update every three months from the MLS; the steps are in
// docs/needs-from-jose.md under "Every three months: update market stats".
//
// Keep every city on the same period and source so the cards compare fairly.
// The period and source below appear in neighborhoods.ts as each page's marketSnapshot.

/** Which sales the numbers cover. */
export const MARKET_STATS_PERIOD = 'Houses sold January–September 2026';
/** Where the numbers came from. */
export const MARKET_STATS_SOURCE = 'Beaches MLS via PBP Real Estate';
/** The day the numbers were pulled (YYYY-MM-DD). */
export const MARKET_STATS_UPDATED = '2026-10-26';

export interface CityStats {
  /** MLS city name to search, when it differs from the page name. */
  mlsCity?: string;
  /** Median sale price of houses (single-family) sold in the period, in dollars. */
  medianHousePrice: number;
  /** Median days on market for those same sales. */
  daysOnMarket: number;
  /** Anything that differs from the standard period or source. */
  note?: string;
}

/** Keyed by neighborhood slug. Neighborhoods missing here keep the values in neighborhoods.ts. */
export const marketStats: Record<string, CityStats> = {
  'royal-palm-beach': { medianHousePrice: 566_000, daysOnMarket: 35 },
  'west-palm-beach': { medianHousePrice: 575_000, daysOnMarket: 41 },
  wellington: { medianHousePrice: 755_000, daysOnMarket: 34 },
  'the-acreage': {
    mlsCity: 'Loxahatchee',
    medianHousePrice: 699_900,
    daysOnMarket: 46,
    note: 'Days on market covers October 2025 through September 2026',
  },
  'lake-worth-beach': { medianHousePrice: 560_000, daysOnMarket: 35 },
  'boynton-beach': { medianHousePrice: 525_000, daysOnMarket: 35 },
  'delray-beach': { medianHousePrice: 872_500, daysOnMarket: 36 },
  'palm-beach-gardens': { medianHousePrice: 1_100_000, daysOnMarket: 52 },
  jupiter: { medianHousePrice: 1_067_000, daysOnMarket: 29 },
  davie: { medianHousePrice: 810_000, daysOnMarket: 31 },
  'oakland-park': { medianHousePrice: 540_000, daysOnMarket: 34 },
  'wilton-manors': { medianHousePrice: 850_000, daysOnMarket: 57 },
  'pompano-beach': { medianHousePrice: 530_000, daysOnMarket: 47 },
};

/** 566000 -> "$566K", 1100000 -> "$1.1M", 1067000 -> "$1.07M". */
export function formatPrice(dollars: number): string {
  if (dollars >= 1_000_000) {
    return `$${(dollars / 1_000_000).toFixed(2).replace(/\.?0+$/, '')}M`;
  }
  return `$${Math.round(dollars / 1_000)}K`;
}

// Median asking rents for homes and condos listed on the MLS, shown on the landlord page.
// Update with the quarterly stats (same steps, "for lease" listings instead of sales).

/** The day the rental listings were pulled (YYYY-MM-DD). */
export const RENTAL_STATS_DATE = '2026-10-26';

export interface CityRentStats {
  slug: string;
  twoBedroom: number;
  threeBedroom: number;
  /** Median days the rental listings had been on the market. */
  daysListed: number;
  /**
   * Where single-family houses start (the low end of the "Single-Family" range in the
   * neighborhood's budget guide). The rent vs. buy calculator uses it as a first-time
   * buyer's example, so keep it in step with that guide.
   */
  starterHousePrice: number;
}

export const rentalStats: CityRentStats[] = [
  { slug: 'royal-palm-beach', twoBedroom: 2_200, threeBedroom: 2_800, daysListed: 34, starterHousePrice: 350_000 },
  { slug: 'west-palm-beach', twoBedroom: 2_185, threeBedroom: 3_000, daysListed: 33, starterHousePrice: 300_000 },
  { slug: 'lake-worth-beach', twoBedroom: 2_100, threeBedroom: 3_000, daysListed: 27, starterHousePrice: 300_000 },
  { slug: 'boynton-beach', twoBedroom: 2_350, threeBedroom: 3_400, daysListed: 31, starterHousePrice: 300_000 },
  { slug: 'wellington', twoBedroom: 2_950, threeBedroom: 4_200, daysListed: 42, starterHousePrice: 450_000 },
];
