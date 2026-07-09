export type County =
  | 'Palm Beach'
  | 'Martin'
  | 'St. Lucie'
  | 'Indian River'
  | 'Broward'
  | 'Miami-Dade'
  | 'Brevard';

export type Region =
  | 'Palm Beach County'
  | 'Treasure Coast'
  | 'Broward County'
  | 'Miami-Dade County'
  | 'Space Coast';

export interface Neighborhood {
  name: string;
  slug: string;
  county: County;
  region: Region;
  tagline: string;
  description: string;
  highlights: string[];
  medianHomePrice: string;
  avgDaysOnMarket: string;
  bestFor: string;
  coordinates: { lat: number; lng: number };
  imageSrc?: string;
  population?: string;
  resources: {
    label: string;
    url: string;
    category: 'city' | 'county' | 'schools' | 'property-appraiser' | 'chamber' | 'visitor';
  }[];
  joseNote?: string;
  lifestyleTags?: string[];
  census?: {
    population: string;
    medianAge: string;
    medianHouseholdIncome: string;
    perCapitaIncome: string;
    ownerOccupied: string;
    renterOccupied: string;
    foreignBorn: string;
    topLanguages: string[];
    source: string;
  };
  // MARKET DATA — update manually each quarter from MLS or Zillow Research
  marketSnapshot?: {
    medianPrice: string;
    avgDaysOnMarket: string;
    pricePerSqFt?: string;
    lastUpdated: string;
  };
  budgetGuide?: {
    tier: string;
    label: string;
    description: string;
  }[];
  // SCHOOL DATA — verify ratings annually at greatschools.org
  schools?: {
    name: string;
    level: 'Elementary' | 'Middle' | 'High' | 'Charter' | 'K-8';
    rating: string;
    greatSchoolsUrl: string;
  }[];
  schoolNote?: string;
  pointsOfInterest?: {
    name: string;
    category: 'Park' | 'Shopping' | 'Dining' | 'Community' | 'Recreation' | 'Transit';
    description: string;
    url?: string;
    imageSrc?: string;
  }[];
  rentalMarket?: {
    active: boolean;
    rangeMin: string;
    rangeMax: string;
    description: string;
  };
}

export const neighborhoods: Neighborhood[] = [
  // ── PALM BEACH COUNTY ─────────────────────────────────────────────────────
  {
    name: 'Royal Palm Beach',
    slug: 'royal-palm-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: "Western Palm Beach County's welcoming family village.",
    description:
      "Royal Palm Beach was incorporated in 1959 on what was then swampland and Seminole hunting grounds — and has grown from a handful of original residents into a thriving village of nearly 39,000. That growth hasn't come at the expense of green space: the village maintains over 325 acres of parks, including Commons Park's 19-acre lake and three miles of trails, Veteran's Park's splash pad and amphitheater, and the 773-acre Royal Palm Beach Pines Natural Area. It's been a designated Tree City USA since 1990, and the entire village is recognized as a bird sanctuary.\n\nFor renters, Royal Palm Beach offers some of the best value in western Palm Beach County — newer homes, family-friendly neighborhoods, and a rental market Jose knows better than almost anyone, since it's also where he's built many of his deepest, longest client relationships. For buyers, it means more space and newer construction per dollar than the coastal cities, with strong elementary and middle schools and a community that has welcomed waves of Brazilian, Venezuelan, Colombian, and Caribbean families who now call it home. For sellers, that same demand — driven by renters moving toward ownership and families relocating from pricier parts of the county — has kept the market active and homes moving.",
    highlights: [
      '325+ acres of parks, including a 19-acre lake, 3 miles of trails, and a splash pad',
      'Tree City USA since 1990 — the entire village is a designated bird sanctuary',
      'Strong elementary and middle schools — Western Academy Charter rates 10/10 on GreatSchools',
      "One of Palm Beach County's most diverse communities — large Brazilian, Venezuelan, Colombian, and Caribbean population",
      'Newer construction and more space per dollar than coastal Palm Beach County',
      "A deep, active rental market — often a family's first step before buying in the village",
    ],
    medianHomePrice: '$508K',
    avgDaysOnMarket: '93',
    bestFor: 'Families, first-time buyers, renters, and landlords seeking reliable tenants',
    coordinates: { lat: 26.7082, lng: -80.2262 },
    imageSrc: '/images/neighborhoods/royal-palm-beach.jpg',
    population: '39,089',
    resources: [
      { label: 'Village of Royal Palm Beach', url: 'https://www.royalpalmbeachfl.gov/', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Things to Do in Royal Palm Beach', url: 'https://www.thepalmbeaches.com/explore-cities/royal-palm-beach', category: 'visitor' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "Royal Palm Beach is where I've done more deals than anywhere else, and honestly, it's home turf. People hear the name and picture something fancy — it's not. It's working families: Brazilian, Venezuelan, Colombian, Haitian, longtime Floridians, all on the same streets, shopping at the same Publix. The elementary schools are genuinely good, the parks are excellent for the price point, and you get more house and more yard here than almost anywhere else in the county for the same money. The high school isn't where I'd brag, and I tell people that straight up. If you're renting before you buy, or you're a first-time buyer trying to make the numbers work in Palm Beach County, this is usually the first place I point people to.",
    lifestyleTags: [
      'Family-Friendly',
      'Affordable Entry Point',
      'Diverse Community',
      'Active Rental Market',
      'Strong Elementary Schools',
      'Western Palm Beach County',
    ],
    census: {
      population: '39,089',
      medianAge: '41.5',
      medianHouseholdIncome: '$92,382',
      perCapitaIncome: '$40,918',
      ownerOccupied: '82.3%',
      renterOccupied: '17.7%',
      foreignBorn: '28.9%',
      topLanguages: ['Spanish', 'Portuguese', 'Haitian Creole'],
      source: 'U.S. Census Bureau, ACS 2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$508K',
      avgDaysOnMarket: '93',
      pricePerSqFt: '$263',
      lastUpdated: 'February 2026 (Redfin)',
    },
    budgetGuide: [
      {
        tier: 'Under $350K',
        label: 'Condos & Townhomes',
        description:
          "Mostly 2-bedroom condos and townhomes in communities like Village Walk, Greenway Village South, and Mezzano — many in the $139K–$290K range as of early 2026. Community pools and manageable HOA fees make this the most common entry point into ownership here.",
      },
      {
        tier: '$350K – $550K',
        label: 'Single-Family Homes',
        description:
          "The heart of the Royal Palm Beach market, and right around the current median sale price of $508K. Three- to four-bedroom homes with fenced yards in established neighborhoods — this is where most buyers land.",
      },
      {
        tier: '$550K – $750K+',
        label: 'Newer Construction',
        description:
          'Newer single-family builds with more square footage, impact windows, and open floor plans, plus larger homes in gated communities. Fewer of these trade hands, so expect more competition when one comes up.',
      },
    ],
    schools: [
      {
        name: 'Royal Palm Beach Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/royal-palm-beach/5254-Royal-Palm-Beach-Elementary-School/',
      },
      {
        name: 'H.L. Johnson Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/royal-palm-beach/2285-H.-L.-Johnson-Elementary-School/',
      },
      {
        name: 'Cypress Trails Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/royal-palm-beach/2310-Cypress-Trails-Elementary-School/',
      },
      {
        name: 'Western Academy Charter School',
        level: 'K-8',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/royal-palm-beach/5346-Western-Academy-Charter-School/',
      },
      {
        name: 'Western Pines Community Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/2343-Western-Pines-Community-Middle-School/',
      },
      {
        name: 'Royal Palm Beach High School',
        level: 'High',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/2341-Royal-Palm-Beach-High-School/',
      },
    ],
    schoolNote:
      "Royal Palm Beach's elementary options are genuinely strong — Cypress Trails and Western Academy Charter both rate 8/10 or higher, and Western Academy's 10/10 puts it among the top-rated schools in Florida. Royal Palm Beach High School is the clear weak point at 3/10, well below the elementary and middle schools that feed into it, and worth knowing about before you commit to a specific block.",
    pointsOfInterest: [
      {
        name: 'Commons Park',
        category: 'Park',
        description:
          'The heart of the community — 140+ acres with a splash pad, amphitheater, nature trails, sports fields, and a dog park. If you want to understand Royal Palm Beach, spend a Saturday morning here.',
        url: 'https://www.royalpalmbeachfl.gov/554/Commons-Park-Sporting-Center',
        imageSrc: '/images/neighborhoods/poi/rpb-commons-park.jpg',
      },
      {
        name: "Veterans Park",
        category: 'Park',
        description:
          "A 6-acre park built in 2006 with its own splash pad, amphitheater, picnic pavilions, and a toddler playscape — smaller and quieter than Commons Park, with a memorial honoring local veterans.",
        url: 'https://www.royalpalmbeachfl.gov/552/Veterans-Park',
        imageSrc: '/images/neighborhoods/poi/rpb-veterans-park.jpg',
      },
      {
        name: 'Crossroads at Royal Palm Beach',
        category: 'Shopping',
        description:
          "The village's main Publix-anchored shopping center on Royal Palm Beach Blvd — full-service grocery, pharmacy, and a deli/bakery. Two more Publix locations (Southern Blvd and State Road 7) cover the rest of the village.",
        url: 'https://www.publix.com/locations/1851-crossroads-at-royal-palm-beach',
        imageSrc: '/images/neighborhoods/poi/rpb-crossroads.jpg',
      },
      {
        name: 'Mall at Wellington Green',
        category: 'Shopping',
        description:
          "One of South Florida's premier regional malls about 10 minutes south — Macy's, Dillard's, Apple, and a strong restaurant corridor.",
        url: 'https://shopwellingtongreen.com/',
        imageSrc: '/images/neighborhoods/poi/rpb-wellington-mall.jpg',
      },
      {
        name: 'Southern Blvd Dining Corridor',
        category: 'Dining',
        description:
          'A stretch of Latin American restaurants, Venezuelan bakeries, Brazilian churrascarias, and family diners along Southern Blvd — one of the most authentic dining corridors in western Palm Beach County.',
      },
      {
        name: 'Royal Palm Beach Public Library',
        category: 'Community',
        description:
          "A well-resourced Palm Beach County library branch with children's programming, quiet study space, and community meeting rooms.",
        url: 'https://www.pbclibrary.org/locations/royalpalm/',
        imageSrc: '/images/neighborhoods/poi/rpb-library.jpg',
      },
      {
        name: 'Royal Palm Beach Cultural Center',
        category: 'Community',
        description: 'A local arts and events venue with performances, classes, and community gatherings throughout the year.',
        url: 'https://www.royalpalmbeachfl.gov/442/Cultural-Center-Cypress-Hall',
        imageSrc: '/images/neighborhoods/poi/rpb-cultural-center.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$4,800',
      description:
        "Royal Palm Beach is Jose's most active rental market in Palm Beach County. Houses here currently rent from about $1,800 up to $4,800 a month, with most 3-bedroom homes averaging around $3,100. Jose has placed tenants in dozens of homes and condo units here and often knows about availability before it's publicly listed.",
    },
  },
  {
    name: 'West Palm Beach',
    slug: 'west-palm-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: "Palm Beach County's urban heartbeat.",
    description:
      "West Palm Beach is the county seat and Jose's second most active market by listing volume. The city's real estate spans entry-level condos in established neighborhoods to Intracoastal waterfront properties — all at prices that significantly undercut equivalent Miami inventory. As remote work shifted demographics, West Palm Beach has become one of Florida's fastest-appreciating markets while still offering accessible entry points for first-time buyers.",
    highlights: [
      'Thriving downtown — Clematis Street and Rosemary Square',
      'Intracoastal waterfront properties at a fraction of Miami pricing',
      'Wide price range — starter condos to luxury waterfront estates',
      'Major arts institutions: Norton Museum, Kravis Center',
      'Strong rental demand driven by urban workforce growth',
    ],
    medianHomePrice: '$609K',
    avgDaysOnMarket: '65',
    bestFor: 'Urban professionals, first-time buyers, and investors',
    coordinates: { lat: 26.7153, lng: -80.0534 },
    population: '120,000',
    resources: [
      { label: 'City of West Palm Beach', url: 'https://www.wpb.org', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Chamber of Commerce', url: 'https://www.palmbeachchamber.com', category: 'chamber' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "West Palm Beach gives families something none of the western suburbs can — real walkability, a downtown they'll actually use, and entry points into Palm Beach County that still make sense on a family budget. I've helped buyers find solid 3-bedroom homes here for less than what a condo costs in Boca. And with SunFest, the GreenMarket, the Zoo, and Dreyfoos all in the same city, there's a quality of life here that's easy to underestimate.",
    lifestyleTags: [
      'Urban & Walkable',
      'Diverse Community',
      'Intracoastal Waterfront',
      'Arts & Culture Scene',
      'Active Rental Market',
      'More Affordable Than Miami',
    ],
    census: {
      population: '120,000',
      medianAge: '40',
      medianHouseholdIncome: '$69,261',
      perCapitaIncome: '$44,508',
      ownerOccupied: '50%',
      renterOccupied: '50%',
      foreignBorn: '27.1%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2025',
    },
    marketSnapshot: {
      medianPrice: '$609K',
      avgDaysOnMarket: '65',
      pricePerSqFt: '$306',
      lastUpdated: 'May 2026 (BeachesMLS + RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $300K',
        label: 'Condos & Townhomes',
        description:
          "Primarily 2-bedroom condos and townhomes in complexes 40–60 years old, with HOA fees worth budgeting for. This is currently a deep buyer's market — the condo median has dropped to $255K with nearly 9 months of supply — making it the most affordable real entry point into Palm Beach County.",
      },
      {
        tier: '$300K – $500K',
        label: 'Single-Family Homes',
        description:
          "The heart of WPB's single-family market for working families — 3-bedroom, 2-bath homes in established neighborhoods, typically 30–50 years old, some recently renovated. Good inventory exists, but the citywide single-family median has climbed past $600K, so this bracket takes some patience or a willingness to look in less-trendy pockets.",
      },
      {
        tier: '$500K+',
        label: 'Updated & Historic Single-Family',
        description:
          'Updated or newer homes in neighborhoods like Flamingo Park, El Cid, SoSo, and Northwood Shores — increasingly overlapping with the historic market, where renovated 1920s–1940s homes command a premium. The May single-family median of $608,750 sits right at the bottom of this range.',
      },
    ],
    schools: [
      {
        name: 'Everglades Elementary School',
        level: 'Elementary',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/13010-Everglades-Elementary-School/',
      },
      {
        name: 'Bak Middle School of the Arts',
        level: 'Middle',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/2344-Bak-Middle-School-Of-The-Arts/',
      },
      {
        name: 'Alexander W. Dreyfoos Jr. School of the Arts',
        level: 'High',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/2315-Alexander-W-Dreyfoos-Junior-School-Of-The-Arts/',
      },
      {
        name: 'Forest Hill Community High School',
        level: 'High',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/2235-Forest-Hill-Community-High-School/',
      },
    ],
    schoolNote:
      "West Palm Beach's school quality varies significantly by zone — there's no single 'WPB schools are great' answer here. Bak Middle (10/10) and Dreyfoos High (8/10) are exceptional magnet schools, but both require a separate application and audition, not just living in the zone. Forest Hill, the primary comprehensive high school for much of western WPB, rates considerably lower at 3/10. Use the Palm Beach County school locator by address before assuming what you're zoned for.",
    pointsOfInterest: [
      {
        name: 'Clematis Street & Meyer Amphitheatre',
        category: 'Dining',
        description:
          "The beating heart of downtown — a walkable strip of restaurants, bars, and shops along the waterfront, plus the free 'Clematis by Night' concert series and year-round events at the Meyer Amphitheatre.",
        url: 'https://clematisstreet.org/',
      },
      {
        name: 'WPB GreenMarket',
        category: 'Shopping',
        description:
          "Every Saturday morning along the waterfront, October through May — voted the #1 farmers market in America. Now in its 31st season with 150 vendors; a genuine weekly ritual, not a tourist stop.",
        url: 'https://www.wpb.org/Residents/Community-Events/Events/WPB-GreenMarket',
      },
      {
        name: 'Grassy Waters Preserve',
        category: 'Park',
        description:
          "A 20-square-mile wetland that's also the city's primary water supply and a historic Everglades headwater. Free to visit, with a cypress boardwalk, nature center, and kayak launches.",
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description:
          'A massive 1,700-acre county park on the western edge with disc golf, BMX, a par-3 course, nature trails, a lake, and cable wakeboarding at Shark Wake Park.',
        url: 'https://discover.pbc.gov/parks/Locations/Okeeheelee.aspx',
      },
      {
        name: 'Palm Beach Zoo & Cox Science Center',
        category: 'Community',
        description:
          'Side by side in Dreher Park — a 23-acre zoo with tigers, jaguars, and Florida panthers, plus a science center with a planetarium, hands-on exhibits, and mini golf.',
        url: 'https://www.coxsciencecenter.org/',
      },
      {
        name: 'Manatee Lagoon',
        category: 'Community',
        description:
          'A free FPL-run eco-discovery center on the Intracoastal where manatees gather near the plant\'s warm-water outflow in winter — exhibits, an observation deck, and a boardwalk.',
        url: 'https://visitmanateelagoon.com/',
      },
      {
        name: 'Rosemary Square (CityPlace)',
        category: 'Shopping',
        description:
          'An open-air shopping and dining center with an AMC theater, adjacent to the Kravis Center — restaurants, Restoration Hardware, Pottery Barn, and more.',
      },
      {
        name: 'Publix at Village Commons',
        category: 'Shopping',
        description:
          "One of roughly six Publix locations spread across the city — this one off Okeechobee Blvd is convenient to the Village Commons area. There's no Whole Foods or Trader Joe's inside WPB city limits; the nearest are about 15 minutes north in Palm Beach Gardens.",
        url: 'https://www.publix.com/locations/1497-village-commons',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$2,100',
      rangeMax: '$3,500',
      description:
        'West Palm Beach has a deep, active rental market driven by the urban workforce — 2-bedroom units typically rent in the $2,100–$2,800 range and 3-bedrooms from about $2,900–$3,500, depending on the neighborhood and how close you are to downtown or the water.',
    },
  },
  {
    name: 'Wellington',
    slug: 'wellington',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: "The equestrian capital of the world — and one of PBC's best family villages.",
    description:
      "Wellington is one of Jose's most consistent sales markets, with closed deals ranging from $420K to $560K across diverse property types. The village is internationally known for equestrian sport — hosting the Winter Equestrian Festival each year — but its real strength for everyday buyers is the combination of A-rated schools, newer construction on larger lots, and a family-oriented community culture that's genuinely hard to find at this price point anywhere in South Florida.\n\nJose has lived in Wellington since 2004 — over two decades as a resident before he ever listed a property here. When you work with Jose in Wellington, you're working with your neighbor.",
    highlights: [
      'Hosts the Winter Equestrian Festival — an international draw',
      'A-rated Palm Beach County public schools',
      'Newer construction with larger lots than coastal communities',
      'Low-density, family-focused planned community',
      'Active sports and recreation scene year-round',
    ],
    medianHomePrice: '$750K',
    avgDaysOnMarket: '73',
    bestFor: 'Families, equestrian enthusiasts, and buyers wanting space and strong schools',
    coordinates: { lat: 26.6595, lng: -80.2686 },
    imageSrc: '/images/neighborhoods/wellington.jpg',
    resources: [
      { label: 'Village of Wellington', url: 'https://www.wellingtonfl.gov', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "I've lived in Wellington since 2004 — I've watched this village grow from a quiet equestrian community into one of the most sought-after addresses in Palm Beach County. What I tell buyers is this: the schools, the parks, and the sense of neighborhood here are genuinely hard to find anywhere else in South Florida at this price point. And you don't have to own a horse to love living here.",
    lifestyleTags: [
      'Equestrian Culture',
      'Family-Friendly',
      'Top-Rated Schools',
      'Master-Planned Community',
      'Award-Winning Parks',
      'Western Palm Beach County',
    ],
    census: {
      population: '61,497',
      medianAge: '42',
      medianHouseholdIncome: '$110,294',
      perCapitaIncome: '$53,964',
      ownerOccupied: '74%',
      renterOccupied: '26%',
      foreignBorn: '24.2%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2025',
    },
    marketSnapshot: {
      medianPrice: '$750K',
      avgDaysOnMarket: '73',
      pricePerSqFt: '$334',
      lastUpdated: 'May 2026 (BeachesMLS + RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $450K',
        label: 'Condos, Villas & Townhomes',
        description:
          'Typically 2-bedroom units, often in gated communities or golf course developments — some with substantial HOA fees. The most accessible way to get a Wellington address and its school zoning without the single-family price tag.',
      },
      {
        tier: '$450K – $650K',
        label: 'Entry-Level Single-Family',
        description:
          '3-bedroom, 2-bath homes typically 30–40 years old on smaller lots. Some are well-maintained originals, others need updating — and this is the most competitive bracket, with homes often drawing multiple offers.',
      },
      {
        tier: '$650K+',
        label: 'Established Single-Family & Estates',
        description:
          'The heart of the Wellington single-family market — 3-4 bedroom homes with updated kitchens, community amenities, and often private pools. Equestrian estates with acreage and barn access begin here and extend into the millions.',
      },
    ],
    schools: [
      {
        name: 'Binks Forest Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/wellington/4685-Binks-Forest-Elementary-School/',
      },
      {
        name: 'Equestrian Trails Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/wellington/5369-Equestrian-Trails-Elementary-School/',
      },
      {
        name: 'Wellington Landings Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/wellington/2296-Wellington-Landings-Middle-School/',
      },
      {
        name: 'Wellington High School',
        level: 'High',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/wellington/2305-Wellington-High-School/',
      },
    ],
    schoolNote:
      "Wellington's elementary schools are exceptional — both Binks Forest and Equestrian Trails rate a perfect 10/10 on GreatSchools, and Wellington Landings Middle isn't far behind at 8/10, well above the district average in math and reading proficiency. Wellington High School rates more modestly at 6/10, though it offers a strong AP program with roughly 50% student participation — worth visiting in person to judge for your family.",
    pointsOfInterest: [
      {
        name: 'Wellington Village Park & Amphitheater',
        category: 'Park',
        description:
          "The social heart of the village — a free outdoor amphitheater hosting 'Thursday Nights in Wellington' summer concerts, plus the new Aquatics Center, tennis courts, athletic fields, and the barrier-free Scott's Place playground.",
        url: 'https://www.wellingtonfl.gov/603/Amphitheater',
        imageSrc: '/images/neighborhoods/poi/wellington-village-park.jpg',
      },
      {
        name: 'Peaceful Waters Sanctuary',
        category: 'Park',
        description:
          'A 30-acre wetlands preserve inside Village Park with 1,500 feet of boardwalk and a mile of trails — herons, turtles, and the occasional alligator. Wellington\'s nature escape without leaving town.',
        url: 'https://www.wellingtonfl.gov/facilities/facility/details/Peaceful-Waters-Sanctuary-56',
        imageSrc: '/images/neighborhoods/poi/wellington-peaceful-waters.jpg',
      },
      {
        name: 'Wellington International (Winter Equestrian Festival)',
        category: 'Recreation',
        description:
          'The world\'s largest and longest-running equestrian event — 13 weeks each January through March drawing riders from 52 countries. General admission is free; families can walk the grounds and watch world-class show jumping at no cost.',
        url: 'https://www.wellingtoninternational.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-international.jpg',
      },
      {
        name: 'National Polo Center',
        category: 'Recreation',
        description:
          'Home to the Palm Beach Polo Season, late December through May, with matches most weeks. General admission is $35, and Sunday brunch matches are the social highlight of the season.',
        url: 'https://www.nationalpolocenter.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-polo-center.jpg',
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description:
          'A massive county park on Wellington\'s eastern edge with a BMX track, disc golf, a par-3 course, and lake access with a boat ramp — draws families from across western Palm Beach County.',
        url: 'https://discover.pbc.gov/parks/Locations/Okeeheelee.aspx',
        imageSrc: '/images/neighborhoods/poi/wellington-okeeheelee.jpg',
      },
      {
        name: 'Publix at Courtyard Shops',
        category: 'Shopping',
        description:
          'A 58,834 sq ft flagship Publix that opened in late 2024, with a wine and coffee bar, made-to-order burrito and pizza bars, and upstairs seating — now one of the most-visited Publix locations in the county.',
        url: 'https://www.publix.com/locations/1894-courtyard-shops-at-wellington',
        imageSrc: '/images/neighborhoods/poi/wellington-publix.jpg',
      },
      {
        name: 'Whole Foods Market',
        category: 'Shopping',
        description: 'Full-service Whole Foods on State Road 7, with a strong prepared foods selection and Prime member savings.',
        url: 'https://www.wholefoodsmarket.com/stores/wellington',
        imageSrc: '/images/neighborhoods/poi/wellington-whole-foods.jpg',
      },
      {
        name: 'The Mall at Wellington Green',
        category: 'Shopping',
        description: "A two-story regional mall with Macy's, Dillard's, JCPenney, H&M, and a food court — Wellington's main indoor retail destination.",
        url: 'https://shopwellingtongreen.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-mall.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$2,200',
      rangeMax: '$6,000',
      description:
        "Wellington's rental market skews higher than the western suburbs given the village's larger lot sizes and equestrian properties — typical 2-4 bedroom homes and townhomes run from about $2,200 to $6,000 a month, with larger properties and horse-country estates commanding considerably more, especially during the winter equestrian season. Jose can help renters navigate available inventory and connect with listings here.",
    },
  },
  {
    name: 'The Acreage & Loxahatchee',
    slug: 'the-acreage',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Wide open spaces — rural character just minutes from everything.',
    description:
      'The Acreage and Loxahatchee are unincorporated western Palm Beach County communities where families come to get space — real space. Lot sizes typically start at 1.25 acres, and horse-friendly zoning, agricultural flexibility, and no mandatory HOA in many areas make this one of the most unique markets in Palm Beach County. Jose has served buyers and renters here for years, including within the newer gated Arden community in Loxahatchee, which offers resort-style amenities and newer construction for those who want the land without sacrificing comfort.',
    highlights: [
      'Lots starting at 1.25 acres — rare space this close to Palm Beach County amenities',
      'Horse-friendly zoning in most areas',
      'No HOA required in many neighborhoods',
      'Newer gated communities like Arden alongside established rural properties',
      'More land per dollar than anywhere else in Palm Beach County',
    ],
    medianHomePrice: '$691K',
    avgDaysOnMarket: '76',
    bestFor: 'Buyers wanting space, equestrian families, investors, and those looking for rural Florida character',
    coordinates: { lat: 26.7, lng: -80.335 },
    resources: [
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Acreage-Loxahatchee Chamber', url: 'https://www.acreageloxahatcheechamber.com', category: 'chamber' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "When buyers ask me where they can get a real piece of land in Palm Beach County without an HOA telling them what color to paint their fence, I always point them to The Acreage. I've worked this market for years — you're 15 minutes from Wellington, 20 minutes from West Palm Beach, and you come home to over an acre that's yours. For a family that wants space to raise kids, keep animals, park the boat, and build equity without monthly fees eating into their budget, it's hard to beat.",
    lifestyleTags: [
      'No HOA',
      '1+ Acre Lots',
      'Equestrian Culture',
      '92% Owner-Occupied',
      'Rural & Spacious',
      'Well & Septic',
    ],
    census: {
      population: '40,000',
      medianAge: '43',
      medianHouseholdIncome: '$105,405',
      perCapitaIncome: '$40,975',
      ownerOccupied: '92%',
      renterOccupied: '8%',
      foreignBorn: '19.8%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2025',
    },
    marketSnapshot: {
      medianPrice: '$691K',
      avgDaysOnMarket: '76',
      pricePerSqFt: '$323',
      lastUpdated: 'May 2026 (BeachesMLS + RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $450K',
        label: 'Land & Fixer-Uppers',
        description:
          'Raw 1.25-acre lots for buyers who want to build custom, or occasionally an older home needing significant work. Cash is often preferred at this end given well/septic systems and property condition — this is the entry point for those with the address and the land in mind but a longer timeline.',
      },
      {
        tier: '$450K – $650K',
        label: 'Working-Family Sweet Spot',
        description:
          'The heart of the market — a 3-bedroom, 2-bath CBS home, 1,500–2,200 sq ft, 20–40 years old, on a fully fenced 1.25-acre lot, often with a pool and a shop or garage. Many have 2024–2025 roofs from post-storm rebuilding, a genuinely positive buying signal.',
      },
      {
        tier: '$650K+',
        label: 'Updated & Equestrian Properties',
        description:
          'Updated or newer-construction 4–5 bedroom homes on 1.25–2+ acres, often move-in ready with modern systems and pools. Equestrian properties with barns, paddocks, and arena access start here, with some new construction reaching $800K+ on acre-plus lots.',
      },
    ],
    schools: [
      {
        name: 'Frontier Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/loxahatchee/5032-Frontier-Elementary-School/',
      },
      {
        name: 'Acreage Pines Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/loxahatchee/2323-Acreage-Pines-Elementary-School/',
      },
      {
        name: 'Osceola Creek Middle School',
        level: 'Middle',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/loxahatchee/6369-Osceola-Creek-Middle-School/',
      },
      {
        name: 'Seminole Ridge Community High School',
        level: 'High',
        rating: '4/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/loxahatchee/7584-Seminole-Ridge-Community-High-School/',
      },
    ],
    schoolNote:
      "Loxahatchee-area schools average an 8/10 district ranking overall — solidly above the Florida average. Both elementary options are strong (Frontier 8/10, Acreage Pines 7/10), and Osceola Creek Middle (6/10) posts particularly strong math scores, with over 90% of students proficient in Algebra 1 and Geometry. Seminole Ridge High rates lower at 4/10 on aggregate test scores, but it offers AP, AICE, Cambridge International, and a Biotechnology Academy — worth a closer look at the specialized programs rather than just the headline number.",
    pointsOfInterest: [
      {
        name: 'Acreage Community Park',
        category: 'Park',
        description:
          "The community's primary gathering place — a 25-acre park run by the Indian Trail Improvement District with sports fields, pavilions, playgrounds, and a new synthetic turf field built to the same spec used at the University of Miami and Miami Dolphins training facilities.",
        url: 'https://www.indiantrail.com/Home/Components/FacilityDirectory/FacilityDirectory/2/97',
      },
      {
        name: 'Arthur R. Marshall Loxahatchee National Wildlife Refuge',
        category: 'Park',
        description:
          "One of the largest urban wildlife refuges in the country at over 145,000 acres, right on The Acreage's eastern edge — hiking, canoeing, fishing, and a cypress boardwalk trail through habitat for 250+ bird species.",
        url: 'https://www.fws.gov/refuge/arthur-r-marshall-loxahatchee',
      },
      {
        name: 'JW Corbett Wildlife Management Area',
        category: 'Recreation',
        description:
          "A 60,000-acre state-managed natural area bordering The Acreage to the west, with hiking, fishing, hunting, and primitive camping — a true backyard wilderness extension for residents.",
        url: 'https://myfwc.com/recreation/lead/j-w-corbett/',
      },
      {
        name: 'Lion Country Safari',
        category: 'Recreation',
        description:
          "A drive-through safari park on 600+ acres, founded in 1967 as the country's first cageless zoo. Under new ownership since late 2024, some attractions have been phased out, but the core drive-through safari experience remains open.",
        url: 'https://www.lioncountrysafari.com/',
      },
      {
        name: 'Fox Trail Equestrian Community',
        category: 'Community',
        description:
          'A private equestrian neighborhood within The Acreage with 29 miles of dedicated horse trails on paved private roads — its presence reinforces the equestrian culture that runs through the broader community, even for non-residents.',
      },
      {
        name: 'Acreage Athletic League',
        category: 'Community',
        description:
          "The community's youth sports organization, running leagues for baseball, softball, football, and more — one of the primary social anchors for families with school-age kids.",
      },
      {
        name: 'Publix at The Acreage',
        category: 'Shopping',
        description:
          "The primary grocery anchor for the entire community, at Seminole Pratt Whitney Rd and Orange Blvd — there's no competing major grocery store within The Acreage itself.",
        url: 'https://www.publix.com/locations/851-publix-at-the-acreage',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$4,800',
      description:
        "Rental inventory is limited compared to denser parts of Palm Beach County, but it exists — single-family homes on acreage typically rent from about $1,800 up to $4,800 a month, with 3-4 bedroom homes making up most of the market. Jose has helped renters find homes here, including in the newer gated Arden community, for those who want the land and lifestyle without buying right away.",
    },
  },
  {
    name: 'Lake Worth Beach',
    slug: 'lake-worth-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Eclectic, walkable, and genuinely undervalued.',
    description:
      "Lake Worth Beach is one of Palm Beach County's most authentic and culturally diverse cities — a walkable downtown lined with independent restaurants, galleries, and a historic theater, surrounded by residential neighborhoods that are appreciating faster than most buyers expect. The city has a significant Spanish-speaking community and has long been a natural fit for Jose's multilingual practice.",
    highlights: [
      'Walkable downtown with independent dining and arts',
      'Below-average price point for Palm Beach County coastal proximity',
      'Strong multilingual community — significant Spanish-speaking population',
      'Historic Lake Worth Casino Beach and Pier',
    ],
    medianHomePrice: '$615K',
    avgDaysOnMarket: '62',
    bestFor: 'First-time buyers, investors, and buyers who value walkability and community character',
    coordinates: { lat: 26.6167, lng: -80.0584 },
    resources: [
      { label: 'City of Lake Worth Beach', url: 'https://www.lakeworthbeachfl.gov', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "Lake Worth Beach is the kind of place where you can walk to the beach, grab breakfast at Benny's on the pier, and still have money left over for a down payment — because unlike the towns just across the bridge, it hasn't been priced out of reach for regular families. And with Tri-Rail right in the city, buyers who commute to Fort Lauderdale or Miami can actually make this work. I've helped Spanish-speaking families plant roots here for years — this community feels like home from the first day.",
    lifestyleTags: [
      'Walkable & Arts-Forward',
      'Tri-Rail Access',
      'Majority Renter',
      'Diverse Community',
      'Historic Bungalows',
      'Beach & Pier',
    ],
    census: {
      population: '43,000',
      medianAge: '37',
      medianHouseholdIncome: '$60,978',
      perCapitaIncome: '$29,711',
      ownerOccupied: '46%',
      renterOccupied: '54%',
      foreignBorn: '35%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2025',
    },
    marketSnapshot: {
      medianPrice: '$615K',
      avgDaysOnMarket: '62',
      pricePerSqFt: '$316',
      lastUpdated: 'May 2026 (BeachesMLS + RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $300K',
        label: 'Condos & Co-ops',
        description:
          "Primarily the condo and co-op market — median list price runs about $161K–$165K, ranging from older units needing work near $100K up to $275K for updated or larger ones, many in mid-century or 55+ buildings. A genuine entry point into Palm Beach County coastal living that doesn't exist elsewhere in Jose's territory.",
      },
      {
        tier: '$300K – $500K',
        label: 'Townhomes & Smaller Single-Family',
        description:
          'The working-family sweet spot — updated condos at the top of this range, townhomes, or smaller 2-3 bedroom single-family homes (900–1,500 sq ft) in established, walkable neighborhoods. Expect 1940s–1970s construction, some needing cosmetic work — this tier rewards buyers who want character and location over square footage.',
      },
      {
        tier: '$500K+',
        label: 'Updated & Historic Single-Family',
        description:
          'Single-family homes in the more desirable pockets — updated historic bungalows, canal-front homes, or larger 3-4 bedroom houses in better condition. The single-family median list price was around $595K in April 2026, and ocean-side or Intracoastal-adjacent properties at the top of this range can exceed $1M.',
      },
    ],
    schools: [
      {
        name: 'North Grade Elementary School',
        level: 'Elementary',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/lake-worth/2243-North-Grade-Elementary-School/',
      },
      {
        name: 'South Grade Elementary School',
        level: 'Elementary',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/lake-worth/5029-South-Grade-Elementary-School/',
      },
      {
        name: 'Lake Worth Community Middle School',
        level: 'Middle',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/lake-worth/2322-Lake-Worth-Community-Middle-School/',
      },
      {
        name: 'Lake Worth High School',
        level: 'High',
        rating: '2/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/lake-worth/2244-Lake-Worth-High-School/',
      },
    ],
    schoolNote:
      "Lake Worth Beach city schools serve a high-need, diverse student population and post lower aggregate test scores than schools in Jose's western Palm Beach County neighborhoods — North Grade and South Grade Elementary both rate 5/10, Lake Worth Community Middle 3/10, and Lake Worth High 2/10. This is common in urban coastal cities with this demographic mix, and it doesn't tell the whole story for every family — use the Palm Beach County school locator by address, and visit in person before drawing conclusions.",
    pointsOfInterest: [
      {
        name: 'Lake Worth Beach Park & Municipal Pier',
        category: 'Park',
        description:
          'A guarded white-sand beach, the William O. Lockhart Municipal Pier for fishing and walks, a municipal pool, and the historic 1920s Casino Building with restaurants and shops — including Benny\'s On The Beach, perched right at the pier.',
        url: 'https://lakeworthbeachfl.gov/casino-and-beach-complex/home',
      },
      {
        name: 'Bryant Park',
        category: 'Park',
        description:
          'A waterfront park on the Lake Worth Lagoon with a bandshell, fishing pier, boat ramp, horseshoe pits, and a one-mile fitness trail — catches the afternoon light beautifully and hosts regular music festivals.',
        url: 'https://lakeworthbeachfl.gov/locations/bryant-park',
      },
      {
        name: 'Downtown Lake Avenue & Lucerne Avenue',
        category: 'Dining',
        description:
          "The city's bohemian, art-filled downtown — galleries, boutiques, coffee houses, and mom-and-pop restaurants, plus the Cultural Council for Palm Beach County's rotating exhibits.",
      },
      {
        name: 'Lake Worth Playhouse',
        category: 'Community',
        description:
          'A historic community theater on Lake Avenue — the oldest surviving Art Deco building in Palm Beach County — hosting plays, concerts, and film events year-round.',
        url: 'https://lakeworthplayhouse.org/',
      },
      {
        name: 'Snook Islands Natural Area',
        category: 'Park',
        description:
          'A 100+ acre wetland restoration in the Lake Worth Lagoon with a boardwalk, fishing pier, and kayak launch — free to visit, with dolphins and manatees regularly spotted.',
        url: 'https://discover.pbc.gov/erm/NaturalAreas/Snook-Islands.aspx',
      },
      {
        name: 'John Prince Memorial Park',
        category: 'Recreation',
        description:
          'A 726-acre county park on Lake Osborne with a campground, 4.5-mile biking path, boating, sports courts, a splash park, and the popular five-section Lake Woof Dog Park.',
        url: 'https://johnprincepark.com/',
      },
      {
        name: 'Publix at Lake Worth',
        category: 'Shopping',
        description:
          'The primary downtown-area grocery anchor on N Dixie Hwy, with a strong selection of Spanish foods — within walking distance of much of the city\'s residential core.',
        url: 'https://www.publix.com/locations/1384-publix-at-lake-worth',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$3,400',
      description:
        "Lake Worth Beach has the most active rental market of Jose's coastal cities — with 54% of residents renting, it's a defining feature of the city, not a side market. Typical 2-bedroom units run $1,800–$2,700 and 3-bedroom single-family homes from about $2,800–$3,400, depending on proximity to downtown or the water.",
    },
  },
  {
    name: 'Boynton Beach',
    slug: 'boynton-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Coastal affordability in the heart of Palm Beach County.',
    description:
      "Boynton Beach sits between Delray Beach and Lake Worth and offers some of the most accessible price points in the county with genuine coastal proximity. The Boynton Harbor Marina area has been a redevelopment focal point, and the city's diverse population makes it a natural fit for Jose's multilingual practice.",
    highlights: [
      'Most affordable coastal entry points in Palm Beach County',
      'Boynton Harbor Marina redevelopment underway',
      'Diverse, multilingual community',
      "Easy access to I-95 and Florida's Turnpike",
    ],
    medianHomePrice: '$410,000',
    avgDaysOnMarket: '49',
    bestFor: 'First-time buyers, value-seekers, and investors spotting early-stage appreciation',
    coordinates: { lat: 26.5317, lng: -80.0906 },
    resources: [
      { label: 'City of Boynton Beach', url: 'https://www.boynton-beach.org', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Greater Boynton Beach Chamber', url: 'https://www.boyntonbeachchamber.org', category: 'chamber' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: [
      'Family-Friendly',
      'Diverse Community',
      'Accessible Entry Point',
      'Congress Avenue Corridor',
      'Active Adult Communities',
      'Central Palm Beach County',
    ],
    census: {
      population: '81,000',
      medianAge: '43',
      medianHouseholdIncome: '$71,378',
      perCapitaIncome: '$39,198',
      ownerOccupied: '64%',
      renterOccupied: '36%',
      foreignBorn: '',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2026',
    },
    marketSnapshot: {
      medianPrice: '$410,000',
      avgDaysOnMarket: '49',
      lastUpdated: 'June 2026 (RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $300K',
        label: 'Condos & Townhomes',
        description:
          'Largely condo and co-op territory — the condo/TH median sold price was $266K in May 2026, often older 55+ or garden-style communities with HOA age restrictions. A genuine entry point into Palm Beach County homeownership, though not typically single-family detached.',
      },
      {
        tier: '$300K – $500K',
        label: 'Single-Family Homes',
        description:
          'The core of the Boynton Beach single-family market — 3-bed/2-bath homes built in the 1980s–2000s, often with updated kitchens or roofs, in established neighborhoods. This is where most working and middle-class family buyers land, right around the citywide median.',
      },
      {
        tier: '$500K+',
        label: 'Newer Construction & Gated Communities',
        description:
          'Newer construction or larger homes in gated communities further west (33472/33473 zip codes), typically with more updated systems, bigger lots, and community amenities like pools and clubhouses.',
      },
    ],
    schools: [
      {
        name: 'Citrus Cove Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/boynton-beach/2314-Citrus-Cove-Elementary-School/',
      },
      {
        name: 'Congress Community Middle School',
        level: 'Middle',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/boynton-beach/2277-Congress-Community-Middle-School/',
      },
      {
        name: 'Boynton Beach Community High School',
        level: 'High',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/boynton-beach/5028-Boynton-Beach-Community-High-School/',
      },
    ],
    schoolNote:
      "Boynton Beach's strongest anchor is Citrus Cove Elementary (7/10), which runs a Gifted & Talented magnet program. Congress Middle and Boynton Beach High both rate 3/10 on aggregate test scores, though both offer Cambridge International, AP, and Project Lead The Way magnet tracks — worth visiting in person rather than judging by the headline number alone. Actual school zoning varies significantly across the city's multiple zip codes; verify your specific address with the Palm Beach County school locator before drawing conclusions.",
    pointsOfInterest: [
      {
        name: 'Congress Avenue Barrier Free Park',
        category: 'Park',
        description:
          'A fully accessible park at 3111 S. Congress Ave. with a splash pad, accessible playground, open play fields, and a walking path — a standout for families with kids of all abilities and one of the city\'s best-equipped parks.',
        url: 'https://www.boynton-beach.org/parks-recreation',
      },
      {
        name: 'Ezell Hester Jr. Community Center & Park',
        category: 'Community',
        description:
          "One of the city's main community hubs at 1901 N. Seacrest Blvd — a large multi-use facility with a gym, weight room, nature preserve, picnic shelters, and courts for basketball, tennis, racquetball, and baseball.",
        url: 'https://www.boynton-beach.org/parks-recreation/community-centers',
      },
      {
        name: 'Jaycee Park',
        category: 'Park',
        description:
          'A community gathering spot on the Intracoastal Waterway with waterfront views and walking paths — a local favorite for evening strolls and sunset watching.',
      },
      {
        name: 'Caloosa Park',
        category: 'Recreation',
        description:
          "A large multi-sport park with tennis courts, sports fields, playgrounds, and picnic areas — popular with families across the city's western neighborhoods.",
      },
      {
        name: 'Oceanfront Park',
        category: 'Park',
        description:
          'The closest beachfront access point for Boynton Beach residents at 6415 N. Ocean Blvd — a guarded beach with a boardwalk, concessions, grills, picnic shelters, and a playground.',
      },
      {
        name: 'Boynton Lakes Plaza Corridor',
        category: 'Shopping',
        description:
          'The practical daily-life spine of west-central Boynton Beach along Congress Avenue — Publix at 4770 N. Congress Ave., plus Costco, Walmart, L.A. Fitness, CVS, Walgreens, and a wide corridor of quick-service restaurants and everyday retail.',
      },
    ],
    rentalMarket: {
      active: false,
      rangeMin: '',
      rangeMax: '',
      description: '',
    },
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'The Most Fun Small City in America.',
    description:
      "Delray Beach punches well above its weight. The walkable Atlantic Avenue corridor is lined with restaurants, galleries, and boutiques that rival anything in Miami. The beach is uncrowded and accessible. The housing stock ranges from entry-level condos to oceanfront estates, making it one of the most genuinely diverse markets in Palm Beach County by both price and buyer demographic.",
    highlights: [
      'Walkable Atlantic Avenue arts and dining district',
      "One of Palm Beach County's best beach access points",
      'Active arts and cultural scene year-round',
      'Wide price range — entry-level condos to oceanfront estates',
    ],
    medianHomePrice: '$438,695',
    avgDaysOnMarket: '61',
    bestFor: 'Active buyers of all ages, lifestyle-driven families, and investors',
    coordinates: { lat: 26.4615, lng: -80.0728 },
    resources: [
      { label: 'City of Delray Beach', url: 'https://www.mydelraybeach.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: [
      'Walkable & Arts-Forward',
      'Blue Flag Beach',
      'Historic Downtown',
      'Wide Price Range',
      'Lifestyle & Leisure',
      'Eastern Palm Beach County',
    ],
    census: {
      population: '67,000',
      medianAge: '52',
      medianHouseholdIncome: '$79,393',
      perCapitaIncome: '$56,068',
      ownerOccupied: '65%',
      renterOccupied: '35%',
      foreignBorn: '',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'RPR/BeachesMLS + U.S. Census via Esri, 2026',
    },
    marketSnapshot: {
      medianPrice: '$438,695',
      avgDaysOnMarket: '61',
      lastUpdated: 'June 2026 (RPR)',
    },
    budgetGuide: [
      {
        tier: 'Under $200K',
        label: '55+ Community Condos',
        description:
          'Primarily age-restricted communities on the far west side — Kings Point and similar developments where one-bedroom units have listed near $90K and two-bedrooms near $150K. Not representative of the general family-buyer market; largely retirement-oriented with strict HOA age restrictions.',
      },
      {
        tier: '$300K – $550K',
        label: 'Condos, Townhomes & Entry SF',
        description:
          'The realistic entry point for non-age-restricted buyers — condos, townhomes, or smaller single-family homes generally located west of I-95 in established neighborhoods like the Lake Ida area. This bracket roughly aligns with the citywide blended median sale price.',
      },
      {
        tier: '$550K – $1M',
        label: 'Single-Family West of I-95',
        description:
          'The core single-family market in most non-luxury Delray Beach neighborhoods, particularly west of I-95 in newer or well-maintained suburban pockets. Closer to downtown or east of Swinton, list prices push toward the top of this range and beyond.',
      },
      {
        tier: '$1M+',
        label: 'Waterfront, Downtown & Premium East Side',
        description:
          'Intracoastal, oceanfront, and premium downtown single-family homes — a genuine luxury tier, with pockets like The Oaks and Tropic Isle posting median SF prices in the $2M–$3M+ range. The single-family-only median sits near $912K, driven significantly by this segment.',
      },
    ],
    schools: [
      {
        name: 'Morikami Park Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/',
      },
      {
        name: 'S.D. Spady Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/',
      },
      {
        name: 'Carver Middle School',
        level: 'Middle',
        rating: '2/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/',
      },
      {
        name: 'Atlantic High School',
        level: 'High',
        rating: '4/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/',
      },
    ],
    schoolNote:
      "Delray Beach schools are highly uneven — Morikami Park Elementary is a genuine standout at 10/10, and Spady Elementary offers a strong Montessori magnet at 7/10. Carver Middle rates 2/10 on aggregate test scores despite being an IB World School; Atlantic High offers one of Palm Beach County's six IB programs but rates 4/10 overall. As with all Palm Beach County schools, zoning varies significantly by address — use the district locator to confirm your zone. Note: individual GreatSchools links need verification before publishing; current links point to the Delray Beach school directory.",
    pointsOfInterest: [
      {
        name: 'Atlantic Avenue & Old School Square',
        category: 'Dining',
        description:
          'The city\'s defining corridor — a walkable stretch of galleries, boutiques, and restaurants anchored by Old School Square\'s fine arts museum, art school, and outdoor concert stage. Named Best Beach Town in Florida multiple years running.',
        url: 'https://oldschoolsquare.org/',
      },
      {
        name: 'Atlantic Dunes Park',
        category: 'Park',
        description:
          'One of the few shaded oceanfront parks in the area — picnic tables, pavilion rentals, and a boardwalk leading to a guarded Blue Flag beach. Calmer and less crowded than many South Florida beach parks.',
      },
      {
        name: 'Pompey Park',
        category: 'Recreation',
        description:
          'A 17.5-acre community hub at 1101 NW 2nd St. with a gym, indoor/outdoor basketball and tennis courts, baseball fields, a pool, and a full auditorium — hosts youth sports leagues and community events year-round.',
        url: 'https://www.delraybeachfl.gov/residents/parks-recreation',
      },
      {
        name: 'Leon M. Weekes Environmental Preserve',
        category: 'Park',
        description:
          'A quiet scrubland nature preserve offering walking trails and birdwatching — a rare green respite in a coastal city, and a distinct alternative to the beach for residents who want undisturbed natural Florida.',
      },
      {
        name: 'Banyan Creek Park',
        category: 'Park',
        description:
          'A family-oriented park with picnic areas, playgrounds, walking trails, and shade from mature banyan trees, plus a small wildlife pond — a quieter option away from the downtown energy.',
      },
      {
        name: 'Publix, Trader Joe\'s & Whole Foods Corridor',
        category: 'Shopping',
        description:
          'Multiple Publix locations anchor the west side (including 4771 W Atlantic Ave and 7375 W Atlantic Ave), with Trader Joe\'s and Whole Foods also in the city — unusually well-served for a market of this size.',
      },
    ],
    rentalMarket: {
      active: false,
      rangeMin: '',
      rangeMax: '',
      description: '',
    },
  },
  {
    name: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Golf, gardens, and top-rated schools.',
    description:
      'Palm Beach Gardens is one of the most consistently popular destinations for families relocating to Palm Beach County. Planned around golf courses and green space, the city offers a polished suburban lifestyle with outstanding public schools, the Gardens Mall, and proximity to PGA National Resort.',
    highlights: [
      'Highest-rated public schools in northern Palm Beach County',
      'Home to PGA National Resort',
      'The Gardens Mall and excellent retail corridor',
      'Well-maintained planned communities',
    ],
    medianHomePrice: '$580K',
    avgDaysOnMarket: '40',
    bestFor: 'Families, golf enthusiasts, and professionals relocating to Palm Beach County',
    coordinates: { lat: 26.8237, lng: -80.1337 },
    resources: [
      { label: 'City of Palm Beach Gardens', url: 'https://www.pbgfl.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Gardens Chamber', url: 'https://www.pbgchamber.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Jupiter',
    slug: 'jupiter',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Beach town charm meets natural Florida.',
    description:
      "Jupiter is where Palm Beach County's lifestyle peaks for buyers who want natural Florida alongside a well-resourced community. The Jupiter Inlet, Loxahatchee River, and miles of natural beach attract outdoor enthusiasts, and the town's scale — smaller and less dense than other PBC cities — creates a genuine community feel.",
    highlights: [
      'Jupiter Inlet and Loxahatchee River — world-class boating and fishing',
      "Jupiter Lighthouse — one of Florida's most photographed landmarks",
      'Less density than southern Palm Beach County',
      'Strong appreciation history',
    ],
    medianHomePrice: '$580K',
    avgDaysOnMarket: '44',
    bestFor: 'Families, water sports enthusiasts, and buyers who value natural Florida',
    coordinates: { lat: 26.9342, lng: -80.0942 },
    resources: [
      { label: 'Town of Jupiter', url: 'https://www.jupiter.fl.us', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Jupiter-Tequesta Chamber', url: 'https://www.jupiterinletchamber.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'The pinnacle of Florida luxury — Worth Avenue and beyond.',
    description:
      "The Town of Palm Beach is a world apart — a barrier island of 10,000 residents and some of the most valuable residential real estate east of Beverly Hills. Worth Avenue rivals Fifth Avenue for luxury retail. Jose serves this market on an extended-reach basis, primarily assisting South American buyers and international clients who are drawn to the island's prestige, permanence, and proximity to Palm Beach County's broader amenities.",
    highlights: [
      'Worth Avenue — one of the top luxury retail streets in the US',
      'Strict architectural guidelines preserve island character',
      'Year-round social season with major philanthropy events',
      'Strong international buyer interest — particularly from South America and Europe',
    ],
    medianHomePrice: '$3.5M',
    avgDaysOnMarket: '90',
    bestFor: 'Ultra-luxury buyers, international investors, and second-home purchasers',
    coordinates: { lat: 26.7056, lng: -80.0364 },
    resources: [
      { label: 'Town of Palm Beach', url: 'https://www.townofpalmbeach.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Chamber of Commerce', url: 'https://www.palmbeachchamber.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },

  // ── BROWARD COUNTY ─────────────────────────────────────────────────────────
  // NOTE: Cities below reflect Jose's actual BeachesMLS listing history.
  // Davie, Oakland Park, Wilton Manors, and Pompano Beach are where he has
  // documented deal experience. Fort Lauderdale, Hollywood, and Hallandale
  // Beach are NOT in his MLS history and have been removed.
  {
    name: 'Davie',
    slug: 'davie',
    county: 'Broward',
    region: 'Broward County',
    tagline: "Broward's equestrian and university heartland.",
    description:
      "Davie is one of Broward County's most interesting suburban markets — a large town with a genuine dual identity. Home to Nova Southeastern University and a significant equestrian community, Davie offers newer construction family neighborhoods at prices that trail the coastal Broward cities meaningfully. The town's diverse population includes a strong Venezuelan and Colombian community, and Jose has worked here across both sales and rentals.",
    highlights: [
      'Home to Nova Southeastern University — stable rental demand',
      'Equestrian community with horse trails and properties',
      'Diverse population with strong Venezuelan and Colombian presence',
      'More affordable than coastal Broward cities',
    ],
    medianHomePrice: '$450K',
    avgDaysOnMarket: '48',
    bestFor: 'Families, first-time buyers, and investors seeking Broward value',
    coordinates: { lat: 26.0765, lng: -80.2521 },
    resources: [
      { label: 'Town of Davie', url: 'https://www.davie-fl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
      { label: 'Davie/Cooper City Chamber', url: 'https://www.davie-coopercity.org', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Oakland Park',
    slug: 'oakland-park',
    county: 'Broward',
    region: 'Broward County',
    tagline: 'Broward value with genuine character — a community on the rise.',
    description:
      "Oakland Park sits north of Fort Lauderdale and has been going through a real revitalization. The city's diverse population, accessible entry-level prices, and proximity to Fort Lauderdale amenities make it one of Broward's most interesting markets for first-time buyers and investors looking for Broward County exposure without Fort Lauderdale price tags.",
    highlights: [
      'Active downtown revitalization adding dining and culture',
      'Accessible entry-level prices for first-time Broward buyers',
      'Proximity to Fort Lauderdale amenities and employment',
      'Diverse community with strong neighborhood identity',
    ],
    medianHomePrice: '$360K',
    avgDaysOnMarket: '52',
    bestFor: 'First-time buyers, investors, and those seeking Broward value',
    coordinates: { lat: 26.1726, lng: -80.132 },
    resources: [
      { label: 'City of Oakland Park', url: 'https://www.oaklandparkfl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Wilton Manors',
    slug: 'wilton-manors',
    county: 'Broward',
    region: 'Broward County',
    tagline: 'Tight-knit, walkable, and welcoming.',
    description:
      'Wilton Manors is a small walkable island city adjacent to Fort Lauderdale with one of the strongest community identities in Broward County. The real estate market here features single-family homes and small multi-family properties with a loyal, owner-occupied neighborhood feel. Jose has served buyers and sellers here and knows the community well.',
    highlights: [
      'Walkable Wilton Drive corridor — dining, entertainment, community',
      'Strong owner-occupancy and community investment',
      'Single-family homes at accessible Broward price points',
      'Steps from Fort Lauderdale amenities',
    ],
    medianHomePrice: '$420K',
    avgDaysOnMarket: '46',
    bestFor: 'First-time buyers, investors in small multi-family, and those seeking walkable Broward living',
    coordinates: { lat: 26.162, lng: -80.1342 },
    resources: [
      { label: 'City of Wilton Manors', url: 'https://www.wiltonmanors.com', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Pompano Beach',
    slug: 'pompano-beach',
    county: 'Broward',
    region: 'Broward County',
    tagline: "Broward's underrated gem — Intracoastal value on the rise.",
    description:
      'Pompano Beach sits between Fort Lauderdale and Deerfield Beach and has quietly become one of Broward County\'s most interesting markets. Active downtown redevelopment, the Pompano Beach Amphitheater, and growing restaurant scene have brought renewed buyer interest, while prices still trail the more recognized Fort Lauderdale Beach corridor.',
    highlights: [
      'Active downtown redevelopment with new dining and entertainment',
      'Intracoastal access at lower prices than Fort Lauderdale Beach',
      'Pompano Beach Amphitheater — major live music and events venue',
      'Natural bridge between Palm Beach and Broward markets',
    ],
    medianHomePrice: '$400K',
    avgDaysOnMarket: '52',
    bestFor: 'Value-oriented buyers, investors, and first-time Broward buyers',
    coordinates: { lat: 26.2379, lng: -80.1248 },
    resources: [
      { label: 'City of Pompano Beach', url: 'https://www.pompanobeachfl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
      { label: 'Pompano Beach Chamber', url: 'https://www.pompanobeachchamber.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },

  // ── TREASURE COAST ─────────────────────────────────────────────────────────
  {
    name: 'Port St. Lucie',
    slug: 'port-st-lucie',
    county: 'St. Lucie',
    region: 'Treasure Coast',
    tagline: "One of Florida's fastest-growing cities.",
    description:
      "Port St. Lucie has been one of the most talked-about relocation destinations in Florida for the past five years — and for good reason. Jose has closed multiple sales here as the city's momentum has grown. New construction is abundant, prices remain significantly below Palm Beach County, and the infrastructure has kept pace with growth. The Mets spring training facility, Clover Park, anchors a sports and recreation scene that draws families and young professionals.",
    highlights: [
      'Among the fastest-growing cities in Florida by population',
      'New construction at significantly lower prices than Palm Beach County',
      'Clover Park — New York Mets Spring Training facility',
      'PGA Village golf community',
    ],
    medianHomePrice: '$380K',
    avgDaysOnMarket: '50',
    bestFor: 'First-time buyers, families relocating, and investors seeking growth markets',
    coordinates: { lat: 27.293, lng: -80.3501 },
    resources: [
      { label: 'City of Port St. Lucie', url: 'https://www.cityofpsl.com', category: 'city' },
      { label: 'St. Lucie County', url: 'https://www.stlucieco.gov', category: 'county' },
      { label: 'St. Lucie County Schools', url: 'https://www.stlucie.k12.fl.us', category: 'schools' },
      { label: 'St. Lucie County Property Appraiser', url: 'https://www.paslc.gov', category: 'property-appraiser' },
      { label: 'St. Lucie Chamber of Commerce', url: 'https://www.slchamber.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Stuart',
    slug: 'stuart',
    county: 'Martin',
    region: 'Treasure Coast',
    tagline: 'The Sailfish Capital of the World — understated and exceptional.',
    description:
      "Stuart is Martin County's charming downtown hub, consistently rated one of Florida's most livable small cities. Sitting at the confluence of the St. Lucie River and the Intracoastal Waterway, Stuart offers world-class fishing, a walkable historic downtown, and a quality of life that outpaces its price point. It's the natural northward extension of Jose's Palm Beach County market.",
    highlights: [
      "Top-rated Martin County public schools — consistently among Florida's best",
      'Historic downtown Stuart with independent dining and shops',
      'World-class fishing — Sailfish Capital of the World',
      'Lower density and traffic than Palm Beach County',
    ],
    medianHomePrice: '$470K',
    avgDaysOnMarket: '55',
    bestFor: 'Families, boaters, retirees, and buyers seeking a quieter pace',
    coordinates: { lat: 27.1975, lng: -80.2528 },
    resources: [
      { label: 'City of Stuart', url: 'https://www.ci.stuart.fl.us', category: 'city' },
      { label: 'Martin County', url: 'https://www.martin.fl.us', category: 'county' },
      { label: 'Martin County Schools', url: 'https://www.martinschools.org', category: 'schools' },
      { label: 'Martin County Property Appraiser', url: 'https://www.pa.martin.fl.us', category: 'property-appraiser' },
      { label: 'Stuart/Martin County Chamber', url: 'https://www.stuartmartinchamber.org', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },

  // ── MIAMI-DADE COUNTY ──────────────────────────────────────────────────────
  {
    name: 'Hialeah',
    slug: 'hialeah',
    county: 'Miami-Dade',
    region: 'Miami-Dade County',
    tagline: "Miami-Dade's most vibrant Latin American community.",
    description:
      "Hialeah is one of the most heavily Latin American cities in the United States — predominantly Cuban-American but with strong Venezuelan, Colombian, and broader Latin American communities that make it one of the most culturally rich cities in Florida. For Jose's Spanish-speaking practice, Hialeah represents genuine deep community connection. The housing market spans affordable condos to solid single-family homes, making it one of Miami-Dade's most accessible markets.",
    highlights: [
      'One of the most vibrant Latin American communities in the US',
      'More accessible price points than Miami Beach or Aventura',
      'Rich Cuban and Latin American cultural heritage',
      'Strong community identity and neighborhood stability',
    ],
    medianHomePrice: '$480K',
    avgDaysOnMarket: '55',
    bestFor: 'Spanish-speaking families, first-time buyers, and investors',
    coordinates: { lat: 25.8576, lng: -80.2781 },
    resources: [
      { label: 'City of Hialeah', url: 'https://www.hialeahfl.gov', category: 'city' },
      { label: 'Miami-Dade County', url: 'https://www.miamidade.gov', category: 'county' },
      { label: 'Miami-Dade County Schools', url: 'https://www.dadeschools.net', category: 'schools' },
      { label: 'Miami-Dade Property Appraiser', url: 'https://www.pa.miamidade.gov', category: 'property-appraiser' },
      { label: 'Hialeah Chamber of Commerce', url: 'https://www.hialeahchamber.org', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
  {
    name: 'Aventura',
    slug: 'aventura',
    county: 'Miami-Dade',
    region: 'Miami-Dade County',
    tagline: 'Luxury Intracoastal living with a global Brazilian and Latin community.',
    description:
      "Aventura hosts one of the largest Brazilian and South American communities in Florida. The concentration of luxury condominiums along the Intracoastal, the Aventura Mall, and the city's international character make it particularly relevant for Jose's Portuguese-speaking clients — many of whom are purchasing investment properties or second homes from Brazil. Jose serves Aventura on an extended-reach basis.",
    highlights: [
      "One of Florida's largest Brazilian and Latin American communities",
      'Luxury Intracoastal condo towers',
      'Aventura Mall — one of the largest in the US',
      'Easy access to both Miami and Fort Lauderdale airports',
    ],
    medianHomePrice: '$560K',
    avgDaysOnMarket: '60',
    bestFor: 'Brazilian investors, international buyers, and luxury condo seekers',
    coordinates: { lat: 25.9565, lng: -80.1393 },
    resources: [
      { label: 'City of Aventura', url: 'https://www.cityofaventura.com', category: 'city' },
      { label: 'Miami-Dade County', url: 'https://www.miamidade.gov', category: 'county' },
      { label: 'Miami-Dade County Schools', url: 'https://www.dadeschools.net', category: 'schools' },
      { label: 'Miami-Dade Property Appraiser', url: 'https://www.pa.miamidade.gov', category: 'property-appraiser' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },

  // ── SPACE COAST ────────────────────────────────────────────────────────────
  {
    name: 'Cocoa Beach & Brevard County',
    slug: 'cocoa-beach',
    county: 'Brevard',
    region: 'Space Coast',
    tagline: 'Space Coast living — beachfront value and launch-pad energy.',
    description:
      "Cocoa Beach and the broader Brevard County market represent Jose's northernmost extended coverage area. Jose has personal investment experience in this market and serves buyers and sellers here on a case-by-case basis. The Space Coast offers some of Florida's most compelling value propositions: beachfront property at a fraction of Palm Beach and Broward pricing, a growing aerospace and tech workforce thanks to Kennedy Space Center proximity, and a laid-back lifestyle increasingly attractive to remote workers and investors.",
    highlights: [
      'Beachfront prices significantly below Palm Beach and Broward',
      'Kennedy Space Center proximity — growing aerospace workforce',
      'Ron Jon Surf Shop, Cocoa Beach Pier — authentic beach town character',
      'Strong short-term rental market driven by space launch tourism',
    ],
    medianHomePrice: '$390K',
    avgDaysOnMarket: '55',
    bestFor: 'Investors, remote workers, aerospace professionals, and buyers seeking beachfront value',
    coordinates: { lat: 28.32, lng: -80.6076 },
    resources: [
      { label: 'City of Cocoa Beach', url: 'https://www.cocoabeachfl.gov', category: 'city' },
      { label: 'Brevard County', url: 'https://www.brevardfl.gov', category: 'county' },
      { label: 'Brevard County Schools', url: 'https://www.brevardschools.org', category: 'schools' },
      { label: 'Brevard County Property Appraiser', url: 'https://www.bcpao.us', category: 'property-appraiser' },
      { label: 'Cocoa Beach Chamber of Commerce', url: 'https://www.cocoa-beach.com', category: 'chamber' },
    ],
    joseNote: '[PLACEHOLDER — Jose\'s personal note about this neighborhood goes here.]',
    lifestyleTags: ['[Tag 1]', '[Tag 2]', '[Tag 3]', '[Tag 4]'],
    census: {
      population: '[PLACEHOLDER]',
      medianAge: '[PLACEHOLDER]',
      medianHouseholdIncome: '[PLACEHOLDER]',
      perCapitaIncome: '[PLACEHOLDER]',
      ownerOccupied: '[PLACEHOLDER]',
      renterOccupied: '[PLACEHOLDER]',
      foreignBorn: '[PLACEHOLDER]',
      topLanguages: ['[Language 1]', '[Language 2]', '[Language 3]'],
      source: '[PLACEHOLDER — census source and year]',
    },
    marketSnapshot: {
      medianPrice: '[PLACEHOLDER]',
      avgDaysOnMarket: '[PLACEHOLDER]',
      pricePerSqFt: '[PLACEHOLDER]',
      lastUpdated: '[PLACEHOLDER — e.g. Q1 2025]',
    },
    budgetGuide: [
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
      { tier: '[Price Range]', label: '[Property Type]', description: '[PLACEHOLDER — 2-sentence honest description of what this budget gets you.]' },
    ],
    schools: [
      { name: '[Elementary School Name]', level: 'Elementary', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[Middle School Name]', level: 'Middle', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
      { name: '[High School Name]', level: 'High', rating: '[X/10]', greatSchoolsUrl: 'https://www.greatschools.org/' },
    ],
    schoolNote: '[PLACEHOLDER — plain-English nuance about the school situation, if needed.]',
    pointsOfInterest: [
      { name: '[Park Name]', category: 'Park', description: '[Placeholder description — 1-2 sentences about this park and why it matters to families.]' },
      { name: '[Shopping Center]', category: 'Shopping', description: '[Placeholder description.]' },
      { name: '[Dining Area]', category: 'Dining', description: '[Placeholder description.]' },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '[$X,XXX]',
      rangeMax: '[$X,XXX]',
      description: '[PLACEHOLDER — rental market description goes here.]',
    },
  },
];
