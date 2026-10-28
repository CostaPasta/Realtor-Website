import { rentalStats } from '@/data/market-stats';
import { neighborhoods } from '@/data/neighborhoods';
import { type Locale, localizedPath } from '@/i18n/locales';

export interface CalculatorArea {
  name: string;
  /** Median asking rent for a 3-bedroom. */
  rent: number;
  /** Where single-family houses start. */
  price: number;
}

/**
 * Cities with a 3-bedroom rent and a starter house price in market-stats.ts.
 * The calculator opens with these numbers (and 3.5% down, the FHA minimum) at
 * /rent-vs-buy?area=<slug>, so the quarterly stats update carries through to every link.
 */
export const calculatorAreas: Record<string, CalculatorArea> = Object.fromEntries(
  rentalStats.flatMap((r) => {
    const name = neighborhoods.find((n) => n.slug === r.slug)?.name;
    return name ? [[r.slug, { name, rent: r.threeBedroom, price: r.starterHousePrice }]] : [];
  })
);

export function rentVsBuyHref(locale: Locale, area?: string): string {
  const path = localizedPath(locale, '/rent-vs-buy');
  return area ? `${path}?area=${area}` : path;
}
