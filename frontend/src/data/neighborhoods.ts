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
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const neighborhoods: Neighborhood[] = [
  // ─── Miami-Dade ───
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
    coordinates: { lat: 25.7215, lng: -80.2684 },
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
    coordinates: { lat: 25.9565, lng: -80.1393 },
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
    coordinates: { lat: 25.8195, lng: -80.3555 },
  },

  // ─── Broward ───
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
    coordinates: { lat: 26.1224, lng: -80.1373 },
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
    coordinates: { lat: 25.9812, lng: -80.1484 },
  },
  {
    name: 'Broward County',
    slug: 'broward',
    county: 'Broward',
    tagline: "South Florida's most diverse county — value meets lifestyle.",
    description:
      'Broward County stretches from the Atlantic coast to the Everglades, offering an extraordinary range of communities to suit every lifestyle and budget. From the boating canals of Fort Lauderdale to the beachfront towers of Hollywood and Hallandale, Broward gives buyers remarkable variety — and typically at price points well below comparable Miami-Dade properties. Jose works across the entire county and knows which pockets are poised for appreciation.',
    highlights: [
      'More than 20 distinct cities and communities',
      'Atlantic Ocean and Intracoastal Waterway access',
      'Strong rental market for investors',
      'Better value per square foot than Miami-Dade',
    ],
    medianHomePrice: '$520K',
    avgDaysOnMarket: '50',
    bestFor: 'Value-oriented buyers, investors, and those relocating from the Northeast',
    coordinates: { lat: 26.1224, lng: -80.1373 },
  },

  // ─── Palm Beach ───
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    county: 'Palm Beach',
    tagline: 'The pinnacle of Florida luxury — Worth Avenue and beyond.',
    description:
      'Palm Beach Island is one of the most prestigious real estate addresses in the entire country. Separated from the mainland by Lake Worth Lagoon, the island is known for the landmark Worth Avenue shopping district, sprawling oceanfront estates, and a seasonal social calendar that draws residents from around the world. Properties here are long-held and rarely come to market — when they do, they move.',
    highlights: [
      'Worth Avenue — luxury retail and fine dining',
      'Oceanfront and Intracoastal estates',
      'Exclusive seasonal community with global profile',
      'Strong appreciation and limited inventory',
    ],
    medianHomePrice: '$3.5M',
    avgDaysOnMarket: '75',
    bestFor: 'Ultra-luxury buyers, second-home purchasers, and long-term investors',
    coordinates: { lat: 26.7056, lng: -80.0364 },
  },
  {
    name: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens',
    county: 'Palm Beach',
    tagline: 'Golf, gardens, and top-rated schools.',
    description:
      'Palm Beach Gardens is one of the most livable cities in all of South Florida — a master-planned community built around exceptional schools, championship golf, and a strong sense of community. PGA National Resort anchors the city\'s identity, but it\'s the quality of life details — the parks, the walkable Legacy Avenue, the A-rated schools — that keep families here for decades.',
    highlights: [
      'PGA National Resort and Championship golf',
      'Top A-rated public schools',
      'Legacy Avenue — dining, shopping, and entertainment',
      'Family-friendly parks and green spaces',
    ],
    medianHomePrice: '$680K',
    avgDaysOnMarket: '40',
    bestFor: 'Families, golf enthusiasts, and retirees seeking an active lifestyle',
    coordinates: { lat: 26.8237, lng: -80.1337 },
  },
  {
    name: 'West Palm Beach',
    slug: 'west-palm-beach',
    county: 'Palm Beach',
    tagline: "Palm Beach County's urban heartbeat.",
    description:
      'West Palm Beach has quietly emerged as one of Florida\'s most vibrant mid-size cities, with a booming downtown, a world-class arts and culture scene, and waterfront neighborhoods that compete favorably with anything across the bridge on the island. The revitalized downtown core — anchored by Clematis Street and the Norton Museum of Art — has drawn professionals, remote workers, and investors who see the value gap relative to Miami.',
    highlights: [
      'Downtown waterfront and Clematis Street entertainment',
      'Norton Museum of Art and Cultural District',
      'More affordable than Palm Beach island',
      'Strong rental demand from professionals',
    ],
    medianHomePrice: '$430K',
    avgDaysOnMarket: '45',
    bestFor: 'Urban professionals, investors, and buyers seeking city living at Palm Beach prices',
    coordinates: { lat: 26.7153, lng: -80.0534 },
  },
  {
    name: 'Wellington',
    slug: 'wellington',
    county: 'Palm Beach',
    tagline: 'The equestrian capital of the world.',
    description:
      'Wellington is unlike any other community in South Florida — a sprawling village where horses outnumber high-rises and the Palm Beach International Equestrian Center draws competitors and spectators from across the globe each winter. Beyond the equestrian world, Wellington offers excellent schools, large lots, and a quiet suburban feel that\'s increasingly rare this close to the coast.',
    highlights: [
      'Home to the Winter Equestrian Festival',
      'Large lots and acreage properties',
      'A-rated schools',
      'Quiet suburban lifestyle, 20 minutes from the beach',
    ],
    medianHomePrice: '$560K',
    avgDaysOnMarket: '42',
    bestFor: 'Equestrian families, buyers wanting land and space, and those seeking a quieter lifestyle',
    coordinates: { lat: 26.6595, lng: -80.2686 },
  },
  {
    name: 'Jupiter',
    slug: 'jupiter',
    county: 'Palm Beach',
    tagline: 'Beach town charm meets natural Florida.',
    description:
      'Jupiter is where South Florida\'s tropical beauty feels most natural — the Loxahatchee River, the Jupiter Inlet, and miles of pristine beaches all contribute to a lifestyle that feels closer to Old Florida than the condo towers to the south. The town attracts a mix of young families drawn to the schools and outdoor lifestyle, and retirees who want beach access without the congestion of Boca or Delray.',
    highlights: [
      'Loxahatchee River and Jupiter Inlet access',
      'Abacoa and other planned family communities',
      'Excellent waterfront dining scene',
      'Lower density than other coastal cities',
    ],
    medianHomePrice: '$620K',
    avgDaysOnMarket: '44',
    bestFor: 'Families, water sports enthusiasts, and buyers who value natural Florida over urban density',
    coordinates: { lat: 26.9342, lng: -80.0942 },
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
    coordinates: { lat: 26.3683, lng: -80.1289 },
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    county: 'Palm Beach',
    tagline: 'The Most Fun Small City in America.',
    description:
      "Delray Beach punches well above its weight. Atlantic Avenue — running from downtown to the ocean — has become one of the most vibrant restaurant and nightlife corridors in all of Florida, earning the city its signature designation. The beach is outstanding, the architecture eclectic, and the community genuinely welcoming. Delray attracts a mix of young professionals, snowbirds, and retirees who all manage to coexist happily.",
    highlights: [
      'Atlantic Avenue — dining, galleries, nightlife',
      'Pristine Blue Flag beach',
      'Active adult communities nearby',
      'Growing arts and cultural scene',
    ],
    medianHomePrice: '$530K',
    avgDaysOnMarket: '41',
    bestFor: 'Active buyers of all ages who want lifestyle at the center of their home purchase',
    coordinates: { lat: 26.4615, lng: -80.0728 },
  },
  {
    name: 'Boynton Beach',
    slug: 'boynton-beach',
    county: 'Palm Beach',
    tagline: 'Coastal affordability in the heart of Palm Beach County.',
    description:
      "Boynton Beach is Palm Beach County's best-kept secret for value-conscious buyers. Positioned between Delray Beach and Lake Worth, it offers ocean access, a revitalized downtown Ocean Avenue corridor, and home prices that are meaningfully lower than its neighbors to the north and south. The city is actively investing in downtown development, and buyers who get in early are well-positioned for appreciation.",
    highlights: [
      'More affordable than Boca or Delray Beach',
      'Revitalizing downtown Ocean Avenue district',
      'Ocean access and Intracoastal boating',
      'Strong sense of local community',
    ],
    medianHomePrice: '$395K',
    avgDaysOnMarket: '48',
    bestFor: 'First-time buyers, value-seekers, and investors spotting early-stage appreciation',
    coordinates: { lat: 26.5317, lng: -80.0906 },
  },
];
