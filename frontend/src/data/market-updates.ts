export interface MarketUpdate {
  id: string;
  title: string;
  date: string;
  county: 'Miami-Dade' | 'Broward' | 'Palm Beach' | 'South Florida';
  summary: string;
  slug: string;
  body: string;
}

export const marketUpdates: MarketUpdate[] = [
  {
    id: '1',
    title: 'South Florida Q1 2025 Market Report: Inventory Rising, Prices Holding',
    date: '2025-04-01',
    county: 'South Florida',
    summary:
      "After three years of historically low inventory, South Florida is finally seeing listings return to the market. Here's what that means for buyers and sellers heading into the spring season.",
    slug: 'south-florida-q1-2025-market-report',
    body: `After three years of historically low inventory, South Florida is finally seeing listings return to the market — and the shift is meaningful. Active inventory across Miami-Dade, Broward, and Palm Beach Counties rose approximately 18% quarter-over-quarter, the largest single-quarter increase since early 2020.

What does that mean for buyers? More choices, slightly less urgency on offers, and the beginning of a more balanced negotiating environment. Buyers who were priced out or exhausted by bidding wars in 2022 and 2023 may find the spring 2025 market more navigable — particularly in the $500K–$800K range where new inventory has been most active.

For sellers, the message is nuanced. Prices are holding — median sale prices in South Florida are down just 2.3% year-over-year, a soft landing rather than a correction. But days-on-market are extending. Homes that would have sold in two weeks during peak 2022 are now taking four to six weeks. Pricing discipline matters more than it has in years.

The luxury segment (above $2M) continues to operate on its own logic. International demand — particularly from Brazilian, Venezuelan, and Argentinian buyers — has kept the high end relatively insulated. Aventura and Miami Beach are seeing no meaningful price softening above $2M.

My read: Spring 2025 is a healthy, transitional market. Neither buyers nor sellers have a dominant hand. If you're thinking about making a move, the conversation about timing and strategy is worth having now — before rates shift again or inventory moves in either direction.`,
  },
  {
    id: '2',
    title: 'Miami-Dade Luxury Market Update: International Buyers Remain Active',
    date: '2025-03-10',
    county: 'Miami-Dade',
    summary:
      "Brazilian and Latin American buyer demand continues to drive the Miami-Dade luxury segment, particularly in Aventura, Doral, and Brickell. What you need to know if you're considering listing above $1M.",
    slug: 'miami-dade-luxury-q1-2025',
    body: `The Miami-Dade luxury market — properties above $1M — continues to operate on dynamics that diverge significantly from national trends. While headlines talk about cooling real estate markets, Aventura and Brickell are still seeing consistent demand from international buyers, particularly from Brazil, Venezuela, Colombia, and Argentina.

Brazilian buyer activity in Aventura specifically has accelerated. The depreciation of the Brazilian real against the dollar has paradoxically increased buyer activity: wealthy Brazilians view Miami real estate as a dollar-denominated store of value and a hedge against currency risk at home. This dynamic is not new, but it has intensified in early 2025.

Doral is also worth watching. The Venezuelan and Colombian communities there have created a dense ecosystem of businesses, schools, and social connections that acts as a pull factor for new arrivals. Entry-level luxury in Doral ($800K–$1.2M) is moving well with multiple offers in some price bands.

For sellers considering listing above $1M: the international buyer pool responds differently to marketing than domestic buyers. Professional photography matters. Floor plans matter. International listing portals like Brazilian property platforms and Latin American real estate aggregators matter. A listing agent with multilingual capabilities and international network access will outperform a domestic-only agent in this segment.

If you're planning to list a luxury property in Miami-Dade this year, let's talk about strategy before you sign anything.`,
  },
  {
    id: '3',
    title: "Broward County: Why Fort Lauderdale Is 2025's Best Value Play",
    date: '2025-02-15',
    county: 'Broward',
    summary:
      "Fort Lauderdale's median sale price remains significantly below Miami's despite comparable lifestyle amenities and strong appreciation trajectory. Here's the data.",
    slug: 'broward-fort-lauderdale-value-2025',
    body: `Fort Lauderdale doesn't get the national press that Miami Beach or Brickell attracts. That's exactly why it's worth paying attention to right now.

The data is clear: Fort Lauderdale's median sale price sits approximately 35–40% below Miami's for comparable lifestyle amenities. You can buy a waterfront single-family home in Victoria Park or Rio Vista for what a two-bedroom condo costs in South Beach. The 165 miles of canals, the Las Olas dining scene, the beach — it's all there. The price tag is just materially lower.

Appreciation trajectory is the other part of the story. Fort Lauderdale's median has increased approximately 67% over the past five years, outpacing both the national average and many Miami submarkets. Inventory is still below pre-pandemic norms. And the city is attracting a new wave of tech company relocations and remote workers who are priced out of Miami proper.

The investor case is also strong. Fort Lauderdale has a robust vacation rental market, driven by proximity to Port Everglades (one of the country's busiest cruise ports) and the boating/water sports tourism economy. Short-term rental regulations are more permissive than many South Florida municipalities.

What to watch: Las Olas Isles and the Rio Vista neighborhood specifically. These waterfront single-family pockets have the fundamentals for continued appreciation and remain significantly underpriced relative to comparable Miami Beach properties. If you're considering Broward County in 2025, let's talk about what your budget can realistically get you here versus further south.`,
  },
];
