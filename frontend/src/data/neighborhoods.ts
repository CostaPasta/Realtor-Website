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
      },
      {
        name: 'Crossroads at Royal Palm Beach',
        category: 'Shopping',
        description:
          "The village's main Publix-anchored shopping center on Royal Palm Beach Blvd — full-service grocery, pharmacy, and a deli/bakery. Two more Publix locations (Southern Blvd and State Road 7) cover the rest of the village.",
      },
      {
        name: 'Mall at Wellington Green',
        category: 'Shopping',
        description:
          "One of South Florida's premier regional malls about 10 minutes south — Macy's, Dillard's, Apple, and a strong restaurant corridor.",
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
      },
      {
        name: 'Royal Palm Beach Cultural Center',
        category: 'Community',
        description: 'A local arts and events venue with performances, classes, and community gatherings throughout the year.',
      },
      {
        name: 'Seminole Trail',
        category: 'Recreation',
        description: 'A paved multi-use trail running through the heart of the village — cyclists, joggers, and stroller families use it daily.',
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
    medianHomePrice: '$425K',
    avgDaysOnMarket: '87',
    bestFor: 'Urban professionals, first-time buyers, and investors',
    coordinates: { lat: 26.7153, lng: -80.0534 },
    population: '122,290',
    resources: [
      { label: 'City of West Palm Beach', url: 'https://www.wpb.org', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Chamber of Commerce', url: 'https://www.palmbeachchamber.com', category: 'chamber' },
    ],
    // TODO: Have Jose review and adjust in his own words
    joseNote:
      "West Palm Beach is my second-busiest market after Royal Palm Beach, and it's a completely different animal — this is a real city, not a village. You've got everything from condos in the $90,000s in 55+ communities out west to multi-million dollar places on the water, sometimes a few miles apart. What I tell people is: don't think of West Palm Beach as one neighborhood, because it isn't — Flamingo Park, El Cid, Northwood, and downtown all feel different. It's the most diverse market I work in, and it's still noticeably cheaper than doing the same search in Miami. If you want walkable, urban, and close to the water without the Miami price tag, this is where I send people.",
    lifestyleTags: [
      'Urban & Walkable',
      'Diverse Community',
      'Intracoastal Waterfront',
      'Arts & Culture Scene',
      'Active Rental Market',
      'More Affordable Than Miami',
    ],
    census: {
      population: '122,290',
      medianAge: '41.1',
      medianHouseholdIncome: '$73,446',
      perCapitaIncome: '$47,465',
      ownerOccupied: '50.5%',
      renterOccupied: '49.5%',
      foreignBorn: '27.1%',
      topLanguages: ['Spanish', 'Haitian Creole'],
      source: 'U.S. Census Bureau, ACS 2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$425K',
      avgDaysOnMarket: '87',
      pricePerSqFt: '$306',
      lastUpdated: 'Q2 2026 (Redfin)',
    },
    budgetGuide: [
      {
        tier: 'Under $300K',
        label: 'Older Condos',
        description:
          "Mostly older condos outside the downtown core — 55+ communities like Century Village have units in the $90K–$155K range. Inside downtown itself, almost nothing trades below $300K anymore.",
      },
      {
        tier: '$300K – $500K',
        label: 'Condos & Townhomes',
        description:
          'This is the heart of the market, right around the $425K citywide median. Expect a 1-bedroom downtown condo (median around $375K) or a small single-family home or townhome in neighborhoods like Flamingo Park or Northwood.',
      },
      {
        tier: '$500K – $800K+',
        label: 'Historic & Waterfront',
        description:
          'Two-bedroom downtown condos (median near $699K), historic bungalows in the El Cid and Flamingo Park historic districts, and homes with Intracoastal proximity live in this range.',
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
        name: 'G-Star School of the Arts',
        level: 'Charter',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/west-palm-beach/5375-G-Star-School-Of-The-Arts/',
      },
    ],
    schoolNote:
      "West Palm Beach is a big city with dozens of zoned schools, and district-wide performance runs below the Florida average. But the city is also home to some of the most competitive magnet options in the county — Bak Middle and Dreyfoos High are audition-based arts schools that draw applicants from across Palm Beach County and significantly outperform the district average. Worth knowing the difference between your zoned neighborhood school and these choice programs before you assume either way.",
    pointsOfInterest: [
      {
        name: 'Clematis Street',
        category: 'Dining',
        description:
          "Downtown's main entertainment strip — restaurants, bars, and live music, plus the free 'Clematis by Night' concert every Thursday and a Saturday Green Market (October–April).",
      },
      {
        name: 'Rosemary Square (CityPlace)',
        category: 'Shopping',
        description:
          'An open-air shopping and dining center with an AMC theater — and home to the only full-size grocery store in downtown, a Publix at 375 S Rosemary Ave.',
      },
      {
        name: 'Flagler Drive Waterfront',
        category: 'Recreation',
        description:
          'The Intracoastal promenade running along downtown — popular for jogging, biking, and watching the sunset over Palm Beach across the water.',
      },
      {
        name: 'Grassy Waters Preserve',
        category: 'Park',
        description: "24 square miles of wetlands with boardwalk trails — one of the city's best spots for birdwatching and a quiet nature break.",
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description: 'A large county park with hiking and biking trails, a lake, sports fields, and a water ski area — a short drive west of downtown.',
      },
      {
        name: 'Norton Museum of Art',
        category: 'Community',
        description: 'A major art museum with American, European, and Chinese collections — free or discounted admission for local residents on select days.',
      },
      {
        name: 'Mandel Public Library of West Palm Beach',
        category: 'Community',
        description: "The city's main library branch downtown, with children's programming, study space, and community meeting rooms.",
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
    medianHomePrice: '$490K',
    avgDaysOnMarket: '42',
    bestFor: 'Families, equestrian enthusiasts, and buyers wanting space and strong schools',
    coordinates: { lat: 26.6595, lng: -80.2686 },
    resources: [
      { label: 'Village of Wellington', url: 'https://www.wellingtonfl.gov', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
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
    medianHomePrice: '$520K',
    avgDaysOnMarket: '50',
    bestFor: 'Buyers wanting space, equestrian families, investors, and those looking for rural Florida character',
    coordinates: { lat: 26.7, lng: -80.335 },
    resources: [
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Acreage-Loxahatchee Chamber', url: 'https://www.acreageloxahatcheechamber.com', category: 'chamber' },
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
    medianHomePrice: '$330K',
    avgDaysOnMarket: '45',
    bestFor: 'First-time buyers, investors, and buyers who value walkability and community character',
    coordinates: { lat: 26.6167, lng: -80.0584 },
    resources: [
      { label: 'City of Lake Worth Beach', url: 'https://www.lakeworthbeachfl.gov', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
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
    medianHomePrice: '$370K',
    avgDaysOnMarket: '48',
    bestFor: 'First-time buyers, value-seekers, and investors spotting early-stage appreciation',
    coordinates: { lat: 26.5317, lng: -80.0906 },
    resources: [
      { label: 'City of Boynton Beach', url: 'https://www.boynton-beach.org', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Greater Boynton Beach Chamber', url: 'https://www.boyntonbeachchamber.org', category: 'chamber' },
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
    medianHomePrice: '$490K',
    avgDaysOnMarket: '41',
    bestFor: 'Active buyers of all ages, lifestyle-driven families, and investors',
    coordinates: { lat: 26.4615, lng: -80.0728 },
    resources: [
      { label: 'City of Delray Beach', url: 'https://www.mydelraybeach.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
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
