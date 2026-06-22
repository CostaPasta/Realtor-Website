export interface Neighborhood {
  name: string;
  slug: string;
  county: 'Miami-Dade' | 'Broward' | 'Palm Beach';
  tagline: string;
  description: string;
  highlights: string[];
  medianHomePrice: string;
  avgDaysOnMarket: string;
  bestFor: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    name: 'Coral Gables',
    slug: 'coral-gables',
    county: 'Miami-Dade',
    tagline: 'The City Beautiful — upscale Mediterranean elegance.',
    description:
      "Coral Gables is one of Miami-Dade's most prestigious addresses, known for its Mediterranean Revival architecture, tree-lined boulevards, and proximity to the University of Miami. Buyers here are drawn to the walkable Miracle Mile, top-rated schools, and a sense of permanence that more transient Miami neighborhoods lack.",
    highlights: [
      'Top-rated public and private schools',
      'Walking distance to Miracle Mile shopping',
      'Strict architectural standards preserve home values',
      'Close to Brickell and downtown Miami',
    ],
    medianHomePrice: '$1.2M',
    avgDaysOnMarket: '45',
    bestFor: 'Families and professionals wanting prestige and walkability',
  },
  {
    name: 'Aventura',
    slug: 'aventura',
    county: 'Miami-Dade',
    tagline: 'Luxury high-rise living on the Intracoastal.',
    description:
      'Aventura sits at the northern tip of Miami-Dade County, offering a dense concentration of luxury condominiums along the Intracoastal Waterway. The Aventura Mall — one of the largest in the country — anchors a vibrant retail and dining scene. The international population, particularly from Brazil, Venezuela, and Israel, gives this city a cosmopolitan feel unlike anywhere else in South Florida.',
    highlights: [
      'Major Brazilian and Latin American community',
      'Luxury condo towers with marina access',
      'Aventura Mall and high-end dining',
      'Easy access to both Miami and Fort Lauderdale airports',
    ],
    medianHomePrice: '$650K',
    avgDaysOnMarket: '52',
    bestFor: 'International buyers, investors, and luxury condo seekers',
  },
  {
    name: 'Boca Raton',
    slug: 'boca-raton',
    county: 'Palm Beach',
    tagline: 'Master-planned luxury in Palm Beach County.',
    description:
      "Boca Raton has long been synonymous with planned luxury living — gated country club communities, manicured golf courses, and some of the best public schools in Florida. It attracts a slightly older, more established demographic than Miami, but the restaurant scene and beach access have made it increasingly popular with young families and remote workers.",
    highlights: [
      'Top-ranked Palm Beach County schools',
      'Multiple country club and golf communities',
      'Sugar Sand Park and South Beach access',
      'Strong appreciation history',
    ],
    medianHomePrice: '$750K',
    avgDaysOnMarket: '38',
    bestFor: 'Families, retirees, and remote professionals',
  },
  {
    name: 'Hallandale Beach',
    slug: 'hallandale-beach',
    county: 'Broward',
    tagline: 'Beachfront value between Miami and Fort Lauderdale.',
    description:
      'Hallandale Beach sits directly on the Broward-Miami-Dade border, offering ocean and Intracoastal access at prices that significantly undercut its neighbors. A popular choice for buyers who want the South Florida lifestyle without the South Florida price tag.',
    highlights: [
      'Ocean and Intracoastal access',
      'Lower price point than Aventura or Sunny Isles',
      'Close to Gulfstream Park racing and casino',
      'Growing restaurant and entertainment scene',
    ],
    medianHomePrice: '$450K',
    avgDaysOnMarket: '60',
    bestFor: 'Value-seekers, first-time buyers, investors',
  },
  {
    name: 'Doral',
    slug: 'doral',
    county: 'Miami-Dade',
    tagline: "Miami's fastest-growing suburban hub.",
    description:
      "Doral has transformed over the past decade from an industrial corridor into one of Miami-Dade's most sought-after family communities. A booming Venezuelan and Colombian population has created a thriving Latin American business ecosystem, and the city's highly rated schools draw families from across the metro area.",
    highlights: [
      'Highest-rated public schools in Miami-Dade',
      'Booming Venezuelan and Colombian community',
      'Downtown Doral — walkable mixed-use development',
      'Newer construction at competitive prices',
    ],
    medianHomePrice: '$620K',
    avgDaysOnMarket: '35',
    bestFor: 'Spanish-speaking families, young professionals',
  },
  {
    name: 'Fort Lauderdale',
    slug: 'fort-lauderdale',
    county: 'Broward',
    tagline: 'The Venice of America — waterways, yachts, and culture.',
    description:
      "Fort Lauderdale's 165 miles of canals and waterways create an unmatched boating lifestyle. The Las Olas corridor anchors one of South Florida's most walkable and culturally rich urban cores, while neighborhoods like Victoria Park and Rio Vista offer waterfront single-family homes at a significant discount to Miami Beach.",
    highlights: [
      '165 miles of navigable waterways',
      'Las Olas Blvd — dining, galleries, shopping',
      'Emerging tech and business hub',
      'Strong vacation rental market',
    ],
    medianHomePrice: '$550K',
    avgDaysOnMarket: '48',
    bestFor: 'Boaters, urban professionals, investors',
  },
];
