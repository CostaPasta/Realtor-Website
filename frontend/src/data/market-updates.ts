export interface MarketUpdate {
  id: string;
  title: string;
  date: string;
  county: 'Miami-Dade' | 'Broward' | 'Palm Beach' | 'South Florida';
  summary: string;
  slug: string;
  /** Paragraphs separated by a blank line. A paragraph starting with "## " renders as a subheading. */
  body: string;
  /** Where the numbers came from. Every figure in the body should trace to one of these. */
  sources?: { label: string; url?: string }[];
  /** Hidden posts stay in the file but are not listed, linked, or included in the sitemap. */
  hidden?: boolean;
}

/** Posts that are live on the site. */
export function visibleMarketUpdates(): MarketUpdate[] {
  return marketUpdates.filter((u) => !u.hidden);
}

export const marketUpdates: MarketUpdate[] = [
  {
    id: 'rpb-fall-2026',
    title: 'Royal Palm Beach Rents, Fall 2026: What a 3-Bedroom Costs Now',
    date: '2026-10-26',
    county: 'Palm Beach',
    summary:
      'In late October there were 82 homes and condos listed for rent in Royal Palm Beach, with three-bedrooms asking a median of $2,800 a month. Rents are still rising across the county, but slowly.',
    slug: 'royal-palm-beach-rents-fall-2026',
    body: `## Rents

As of October 26, 2026, there were 82 homes and condos listed for lease in Royal Palm Beach on Beaches MLS. The median asking rent across all of them was $2,400 a month. Two-bedroom rentals were listed at a median of $2,200, and three-bedrooms at $2,800.

These are asking rents, not signed leases, so the final number can land a little lower, especially on a listing that has been sitting. The typical rental had been on the market for 34 days.

Across Palm Beach County, rents are still going up, just slowly. MIAMI REALTORS reported apartment asking rents up 2.5% year over year in July 2026, and Zillow's rent index for ZIP code 33411 showed about a 2% increase through the end of July. That is a long way from the double-digit jumps of 2021 and 2022.

## What this means for renters

A 34-day median means good rentals don't sit for months, but you also don't need to sign the afternoon you tour. Have your ID, proof of income, and rental history ready so you can apply quickly when the right place comes up. A three-bedroom house asking well above $2,800 should have a reason: a pool, a newer roof, a bigger lot, or a sought-after school zone.

## What this means for landlords

Pricing near the median for your bedroom count is the fastest way to fill a vacancy. One extra empty month costs a full month of rent, which is usually more than the difference between asking $2,800 and $2,950.

## Home sales

The median sale price for a Royal Palm Beach house in September 2026 was $535,000, the same as in September 2025. From January through September, houses sold at a median of $566,000, up from $550,000 in the same months of 2025, and the number of house sales rose 11.7% to 287. Condos and townhouses sold at a median of $265,000 over the same period.

Buyers have more room than they did a few years ago. On October 26 there were 3.6 months of house inventory, and 52% of active house listings were priced below their original asking price, with a median cut of 4%. Houses that sold in September spent a median of 33 days on the market and closed at 99% of their final asking price. Well-priced homes still sell in about a month; most of the price cuts are on listings that started high.`,
    sources: [
      {
        label: 'Beaches MLS listing data for Royal Palm Beach as of October 26, 2026, compiled by PBP Real Estate',
        url: 'https://www.pbprealestate.com/royal-palm-beach-real-estate-statistics/',
      },
      {
        label: 'MIAMI REALTORS, "South Florida Apartment Rents Outpace U.S. Average, Led by Palm Beach County" (August 18, 2026)',
        url: 'https://www.miamirealtors.com/2026/08/18/south-florida-apartment-rents-outpace-u-s-average-led-by-palm-beach-county/',
      },
      {
        label: 'Zillow, 33411 housing market and rent data (through July 31, 2026)',
        url: 'https://www.zillow.com/home-values/72578/west-palm-beach-fl-33411/',
      },
    ],
  },
  {
    id: 'acreage-fall-2026',
    title: 'The Acreage and Loxahatchee, Fall 2026: Fewer Sales, More Room to Negotiate',
    date: '2026-10-26',
    county: 'Palm Beach',
    summary:
      'House prices in Loxahatchee held near $700,000 this year, but sales fell 22% and supply climbed to almost five months. Buyers have more leverage here than in Royal Palm Beach or Lake Worth Beach.',
    slug: 'acreage-loxahatchee-market-fall-2026',
    body: `## Prices

Most homes in The Acreage carry Loxahatchee mailing addresses, so these figures cover both. The median sale price for a Loxahatchee house was $700,000 over the 12 months ending September 2026, up 3.2% from $678,000 the year before. In September alone, 20 houses sold at a median of $690,000.

## Fewer sales, more supply

Prices held, but activity slowed. From January through September, 206 houses sold, down 22% from 264 in the same months of 2025. On October 26 there were 125 houses for sale and 30 under contract, about 4.9 months of inventory. That is more supply than Royal Palm Beach (3.6 months) or Lake Worth Beach (3.2 months).

More than half of the active listings, 52.8%, were priced below their original asking price.

## Priced right versus priced high

The clearest signal in this market is the gap between homes that sell and homes that sit. Houses that sold in September went under contract in a median of 28 days, at 98% of their final asking price. Houses still for sale on October 26 had been listed for a median of 76 days.

For sellers, that gap is the case for pricing to the market on day one. For buyers, a listing that has sat for two or three months is usually where there is room to negotiate.

## What buyers should check

Acreage lots are typically 1.25 acres and most have no HOA. The tradeoff is infrastructure that suburban buyers may not be used to: many homes rely on private wells and septic systems, and roads and drainage are handled by the Indian Trail Improvement District. Budget for well and septic inspections on top of the standard home inspection, and check the flood zone for the specific lot.

## Rents

Rental supply is thin and leans toward larger houses. This summer, listing sites showed three-bedroom rentals in the 33470 ZIP code asking roughly $3,600 to $3,950 a month, and four-bedrooms around $4,500.`,
    sources: [
      {
        label: 'Beaches MLS listing data for Loxahatchee as of October 26, 2026, compiled by PBP Real Estate',
        url: 'https://www.pbprealestate.com/loxahatchee-real-estate-statistics/',
      },
      {
        label: 'Trulia, Loxahatchee rent trends (August 2026)',
        url: 'https://www.trulia.com/average-rent-market-trends/loxahatchee-fl/',
      },
      {
        label: 'PadMapper, Loxahatchee rentals (August 2026 medians)',
        url: 'https://www.padmapper.com/apartments/loxahatchee-fl',
      },
    ],
  },
  {
    id: 'lwb-fall-2026',
    title: 'Lake Worth Beach, Fall 2026: Houses Up, Condos Down',
    date: '2026-10-26',
    county: 'Palm Beach',
    summary:
      'House prices in Lake Worth Beach rose 11% year over year in September while condo prices fell and condo supply piled up. Median asking rent is just under $2,000 a month.',
    slug: 'lake-worth-beach-market-fall-2026',
    body: `## Houses

The median sale price for a house in Lake Worth Beach was $582,950 in September 2026, up 11% from $525,000 in September 2025. From January through September, houses sold at a median of $560,000, and the number of sales rose 11.8% to 1,069.

Houses that sold in September spent a median of 29 days on the market and closed at 98% of their final asking price. With 3.2 months of inventory on October 26, houses here are the tightest of the three markets in this series.

## Condos and townhouses

Condos went the other way. The September median was $225,000, down from $335,000 a year earlier. A single month of condo sales can swing a lot depending on which buildings happen to close, so the January-through-September median of $207,500 is the steadier number.

Supply is heavy. There were 409 condos and townhouses for sale on October 26, about 6.1 months of inventory, and the median recorded price cut was 10.4%.

Part of the pressure on older buildings comes from Florida's condo safety law passed after the 2021 Surfside collapse. Buildings three stories and taller now need milestone structural inspections and structural reserve studies, and associations can no longer waive reserves for key structural items. Some are covering those costs with special assessments. Before buying a condo, ask for the building's milestone inspection report, its reserve study, and any assessments that are planned or under discussion.

## What this means

For first-time buyers, a Lake Worth Beach condo costs well under half the price of a house in the same city, and sellers are negotiating. The building matters as much as the unit. For house sellers, demand is solid: well-priced houses are going under contract in about a month.

## Rents

There were 151 rentals listed on October 26, with a median asking rent of $1,995 a month. One-bedrooms were listed at a median of $1,600, two-bedrooms at $2,100, and three-bedrooms at $3,000. The typical rental had been listed for 27 days.`,
    sources: [
      {
        label: 'Beaches MLS listing data for Lake Worth Beach as of October 26, 2026, compiled by PBP Real Estate',
        url: 'https://www.pbprealestate.com/lake-worth-beach-real-estate-statistics/',
      },
      {
        label: 'Florida Senate, SB 4-D (2022), condominium and cooperative safety',
        url: 'https://www.flsenate.gov/Session/Bill/2022D/4D',
      },
    ],
  },
  {
    id: '1',
    hidden: true, // 2025 post about areas Jose doesn't work in; replaced by the fall 2026 reports
    title: 'South Florida Q1 2025 Market Report: Inventory Rising, Prices Holding',
    date: '2025-04-01',
    county: 'South Florida',
    summary:
      "After three years of historically low inventory, South Florida is finally seeing listings return to the market. Here's what that means for buyers and sellers heading into the spring season.",
    slug: 'south-florida-q1-2025-market-report',
    body: `After three years of historically low inventory, South Florida is finally seeing listings return to the market, and the shift is meaningful. Active inventory across Miami-Dade, Broward, and Palm Beach Counties rose approximately 18% quarter-over-quarter, the largest single-quarter increase since early 2020.

What does that mean for buyers? More choices, slightly less urgency on offers, and the beginning of a more balanced negotiating environment. Buyers who were priced out or exhausted by bidding wars in 2022 and 2023 may find the spring 2025 market more navigable, particularly in the $500K–$800K range where new inventory has been most active.

For sellers, the message is nuanced. Prices are holding, median sale prices in South Florida are down just 2.3% year-over-year, a soft landing rather than a correction. But days-on-market are extending. Homes that would have sold in two weeks during peak 2022 are now taking four to six weeks. Pricing discipline matters more than it has in years.

The luxury segment (above $2M) continues to operate on its own logic. International demand, particularly from Brazilian, Venezuelan, and Argentinian buyers, has kept the high end relatively insulated. Aventura and Miami Beach are seeing no meaningful price softening above $2M.

My read: Spring 2025 is a healthy, transitional market. Neither buyers nor sellers have a dominant hand. If you're thinking about making a move, the conversation about timing and strategy is worth having now, before rates shift again or inventory moves in either direction.`,
  },
  {
    id: '2',
    hidden: true, // 2025 post about areas Jose doesn't work in; replaced by the fall 2026 reports
    title: 'Miami-Dade Luxury Market Update: International Buyers Remain Active',
    date: '2025-03-10',
    county: 'Miami-Dade',
    summary:
      "Brazilian and Latin American buyer demand continues to drive the Miami-Dade luxury segment, particularly in Aventura, Doral, and Brickell. What you need to know if you're considering listing above $1M.",
    slug: 'miami-dade-luxury-q1-2025',
    body: `The Miami-Dade luxury market, properties above $1M, continues to operate on dynamics that diverge significantly from national trends. While headlines talk about cooling real estate markets, Aventura and Brickell are still seeing consistent demand from international buyers, particularly from Brazil, Venezuela, Colombia, and Argentina.

Brazilian buyer activity in Aventura specifically has accelerated. The depreciation of the Brazilian real against the dollar has paradoxically increased buyer activity: wealthy Brazilians view Miami real estate as a dollar-denominated store of value and a hedge against currency risk at home. This dynamic is not new, but it has intensified in early 2025.

Doral is also worth watching. The Venezuelan and Colombian communities there have created a dense ecosystem of businesses, schools, and social connections that acts as a pull factor for new arrivals. Entry-level luxury in Doral ($800K–$1.2M) is moving well with multiple offers in some price bands.

For sellers considering listing above $1M: the international buyer pool responds differently to marketing than domestic buyers. Professional photography matters. Floor plans matter. International listing portals like Brazilian property platforms and Latin American real estate aggregators matter. A listing agent with multilingual capabilities and international network access will outperform a domestic-only agent in this segment.

If you're planning to list a luxury property in Miami-Dade this year, let's talk about strategy before you sign anything.`,
  },
  {
    id: '3',
    hidden: true, // 2025 post about areas Jose doesn't work in; replaced by the fall 2026 reports
    title: "Broward County: Why Fort Lauderdale Is 2025's Best Value Play",
    date: '2025-02-15',
    county: 'Broward',
    summary:
      "Fort Lauderdale's median sale price remains significantly below Miami's despite comparable lifestyle amenities and strong appreciation trajectory. Here's the data.",
    slug: 'broward-fort-lauderdale-value-2025',
    body: `Fort Lauderdale doesn't get the national press that Miami Beach or Brickell attracts. That's exactly why it's worth paying attention to right now.

The data is clear: Fort Lauderdale's median sale price sits approximately 35–40% below Miami's for comparable lifestyle amenities. You can buy a waterfront single-family home in Victoria Park or Rio Vista for what a two-bedroom condo costs in South Beach. The 165 miles of canals, the Las Olas dining scene, the beach, it's all there. The price tag is just materially lower.

Appreciation trajectory is the other part of the story. Fort Lauderdale's median has increased approximately 67% over the past five years, outpacing both the national average and many Miami submarkets. Inventory is still below pre-pandemic norms. And the city is attracting a new wave of tech company relocations and remote workers who are priced out of Miami proper.

The investor case is also strong. Fort Lauderdale has a robust vacation rental market, driven by proximity to Port Everglades (one of the country's busiest cruise ports) and the boating/water sports tourism economy. Short-term rental regulations are more permissive than many South Florida municipalities.

What to watch: Las Olas Isles and the Rio Vista neighborhood specifically. These waterfront single-family pockets have the fundamentals for continued appreciation and remain significantly underpriced relative to comparable Miami Beach properties. If you're considering Broward County in 2025, let's talk about what your budget can realistically get you here versus further south.`,
  },
];
