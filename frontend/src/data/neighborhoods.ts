export type County =
  | 'Palm Beach'
  | 'Martin'
  | 'St. Lucie'
  | 'Indian River'
  | 'Broward';

export type Region =
  | 'Palm Beach County'
  | 'Treasure Coast'
  | 'Broward County';

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
  buyerNote?: string;
  sellerNote?: string;
  testimonial?: {
    quote: string;
    attribution: string;
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
          "Mostly 2-bedroom condos and townhomes in communities like Village Walk, Greenway Village South, and Mezzano. Community pools and manageable HOA fees make this the most common entry point into ownership here.",
      },
      {
        tier: '$350K – $550K',
        label: 'Single-Family Homes',
        description:
          "The heart of the Royal Palm Beach market — three- to four-bedroom homes with fenced yards in established neighborhoods. This is where most buyers land, right around the citywide median.",
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
      {
        name: 'Royal Palm Beach Recreation Center',
        category: 'Recreation',
        description:
          "The village's community recreation hub with a full gymnasium, fitness equipment, multipurpose rooms, and year-round youth and adult programming.",
        url: 'https://www.royalpalmbeachfl.gov/435/Recreation-Center',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$4,800',
      description:
        "Royal Palm Beach is Jose's most active rental market in Palm Beach County. Jose has placed tenants in dozens of homes and condo units here and often knows about availability before it's publicly listed.",
    },
    buyerNote: "Jose's home turf and most active market — he knows every block, every builder, and what a listing price actually means here.",
    sellerNote: "Over 82% of RPB residents own their homes. When a home lists here, Jose knows what buyers are actually willing to pay — free CMA, no obligation.",
    testimonial: {
      quote: "We came to Jose with a budget that other realtors didn't take seriously. He showed us Royal Palm Beach on a Tuesday. We put in an offer that Friday. That was four years ago. Our kids grew up on that street.",
      attribution: "Ana & Rodrigo M., Royal Palm Beach",
    },
  },
  {
    name: 'West Palm Beach',
    slug: 'west-palm-beach',
    imageSrc: '/images/neighborhoods/west-palm-beach.jpg',
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
          "Primarily 2-bedroom condos and townhomes in complexes 40–60 years old, with HOA fees worth budgeting for. Deep inventory keeps this the most accessible real entry point into Palm Beach County property ownership.",
      },
      {
        tier: '$300K – $500K',
        label: 'Single-Family Homes',
        description:
          "The heart of WPB's single-family market for working families — 3-bedroom, 2-bath homes in established neighborhoods, typically 30–50 years old, some recently renovated. This bracket rewards patience and a willingness to look in less-trendy pockets.",
      },
      {
        tier: '$500K+',
        label: 'Updated & Historic Single-Family',
        description:
          'Updated or newer homes in neighborhoods like Flamingo Park, El Cid, SoSo, and Northwood Shores — increasingly overlapping with the historic market, where renovated 1920s–1940s homes command a premium.',
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
        imageSrc: '/images/neighborhoods/poi/wpb-clematis-street.jpg',
      },
      {
        name: 'WPB GreenMarket',
        category: 'Shopping',
        description:
          "Every Saturday morning along the waterfront, October through May — voted the #1 farmers market in America. Now in its 31st season with 150 vendors; a genuine weekly ritual, not a tourist stop.",
        url: 'https://www.wpb.org/Residents/Community-Events/Events/WPB-GreenMarket',
        imageSrc: '/images/neighborhoods/poi/wpb-greenmarket.jpg',
      },
      {
        name: 'Grassy Waters Preserve',
        category: 'Park',
        description:
          "A 20-square-mile wetland that's also the city's primary water supply and a historic Everglades headwater. Free to visit, with a cypress boardwalk, nature center, and kayak launches.",
        url: 'https://www.wpb.org/Departments/Grassy-Waters-Preserve',
        imageSrc: '/images/neighborhoods/poi/wpb-grassy-waters.jpg',
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description:
          'A massive 1,700-acre county park on the western edge with disc golf, BMX, a par-3 course, nature trails, a lake, and cable wakeboarding at Shark Wake Park.',
        url: 'https://discover.pbc.gov/parks/Locations/Okeeheelee.aspx',
        imageSrc: '/images/neighborhoods/poi/wpb-okeeheelee.jpg',
      },
      {
        name: 'Palm Beach Zoo & Cox Science Center',
        category: 'Community',
        description:
          'Side by side in Dreher Park — a 23-acre zoo with tigers, jaguars, and Florida panthers, plus a science center with a planetarium, hands-on exhibits, and mini golf.',
        url: 'https://www.coxsciencecenter.org/',
        imageSrc: '/images/neighborhoods/poi/wpb-cox-science-center.jpg',
      },
      {
        name: 'Manatee Lagoon',
        category: 'Community',
        description:
          'A free FPL-run eco-discovery center on the Intracoastal where manatees gather near the plant\'s warm-water outflow in winter — exhibits, an observation deck, and a boardwalk.',
        url: 'https://visitmanateelagoon.com/',
        imageSrc: '/images/neighborhoods/poi/wpb-manatee-lagoon.jpg',
      },
      {
        name: 'Rosemary Square (CityPlace)',
        category: 'Shopping',
        description:
          'An open-air shopping and dining center with an AMC theater, adjacent to the Kravis Center — restaurants, Restoration Hardware, Pottery Barn, and more.',
        url: 'https://www.cityplace.com/',
        imageSrc: '/images/neighborhoods/poi/wpb-cityplace.jpg',
      },
      {
        name: 'Publix at Village Commons',
        category: 'Shopping',
        description:
          "One of roughly six Publix locations spread across the city — this one off Okeechobee Blvd is convenient to the Village Commons area. There's no Whole Foods or Trader Joe's inside WPB city limits; the nearest are about 15 minutes north in Palm Beach Gardens.",
        url: 'https://www.publix.com/locations/1497-village-commons',
        imageSrc: '/images/neighborhoods/poi/wpb-publix.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$2,100',
      rangeMax: '$3,500',
      description:
        "West Palm Beach has a deep, active rental market driven by the urban workforce. Proximity to downtown and the waterfront makes a significant difference in what you'll find — Jose can walk you through current availability and match you to the right neighborhood.",
    },
    buyerNote: "WPB has 15+ distinct micro-neighborhoods with wildly different values. Jose will show you which match your life — and help you avoid overpaying for a zip code.",
    sellerNote: "Downtown WPB's growth is lifting values across all neighborhoods. Jose's free CMA shows exactly where your home sits in today's market.",
    testimonial: {
      quote: "I'd been looking in Miami for months before my sister-in-law gave me Jose's number. He pulled up three neighborhoods I'd never heard of, drove me through each one. Within a week I actually understood the city. Where to look, where to stay away from. Closed two months later.",
      attribution: "Marcus P., West Palm Beach",
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
        "Wellington's rental market skews higher than the western suburbs given the village's larger lot sizes and equestrian properties — and horse-country estates command a considerable premium, especially during the winter equestrian season. Jose can help renters navigate available inventory and connect with listings here.",
    },
    buyerNote: "A-rated schools, world-class equestrian facilities, and a sense of permanence no other western suburb can match. Jose has navigated buyers through every community here.",
    sellerNote: "Wellington's equestrian season brings a wave of international and out-of-state buyers each winter. Jose knows when to list — and who the likely buyers will be.",
    testimonial: {
      quote: "The school zoning in Wellington is more complicated than it looks from the outside. Jose had it memorized. He could tell us which streets fell in the Binks Forest zone and what that meant for our kids long-term. That knowledge alone was worth more than any listing sheet.",
      attribution: "Jennifer & Tom H., Wellington",
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
          'The heart of the market — a 3-bedroom, 2-bath CBS home, 1,500–2,200 sq ft, 20–40 years old, on a fully fenced 1.25-acre lot, often with a pool and a shop or garage. Many have recently replaced roofs from post-storm rebuilding, a genuinely positive buying signal.',
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
      {
        name: 'Tractor Supply Co. at Loxahatchee',
        category: 'Shopping',
        description:
          "A practical anchor for The Acreage's equestrian and homesteading community — feeds, fencing, livestock supplies, and farm equipment. One of the few retailers specifically serving the land-use lifestyle that defines this area.",
        url: 'https://www.tractorsupply.com/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$4,800',
      description:
        "Rental inventory is limited compared to denser parts of Palm Beach County, but it exists — single-family homes on acreage make up most of the market. Jose has helped renters find homes here, including in the newer gated Arden community, for those who want the land and lifestyle without buying right away.",
    },
    buyerNote: "Space, privacy, and no HOA — The Acreage offers more land per dollar than anywhere in Palm Beach County. Jose knows which pockets have the infrastructure and which to approach carefully.",
    sellerNote: "Acreage homes attract a buyer profile that doesn't shop Zillow the same way. Jose knows how to reach them and price for land value, not just square footage.",
    testimonial: {
      quote: "I told Jose I wanted an acre, no HOA, and room for my horses. He didn't try to talk me out of it or steer me somewhere more convenient. He just found it.",
      attribution: "Rick B., Loxahatchee",
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
          "Primarily the condo and co-op market — older units needing work at the low end, up to updated or larger ones in mid-century or 55+ buildings. A genuine entry point into Palm Beach County coastal living that doesn't exist elsewhere in Jose's territory.",
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
          'Single-family homes in the more desirable pockets — updated historic bungalows, canal-front homes, or larger 3-4 bedroom houses in better condition. Ocean-side or Intracoastal-adjacent properties at the top of this range and beyond.',
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
      {
        name: 'Cultural Council for Palm Beach County',
        category: 'Community',
        description:
          "The county's leading arts agency, headquartered in a restored 1920s commercial building at 601 Lake Avenue. Features rotating gallery exhibitions, public art resources, and serves as the curatorial anchor of the downtown arts district.",
        url: 'https://www.culturalcouncilpbc.org/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$3,400',
      description:
        "Lake Worth Beach has the most active rental market of Jose's coastal cities — with 54% of residents renting, it's a defining feature of the city, not a side market. Pricing varies significantly by proximity to downtown and the waterfront — reach out to Jose for current rental availability.",
    },
    buyerNote: "Walkable downtown, a historic beach casino, and prices still below the other coastal cities — Lake Worth Beach is one of the better value plays on the Palm Beach coast. Jose has watched this market transform.",
    sellerNote: "With 54% of residents renting, LWB draws both owner-occupant buyers and investors. Jose knows how to position a listing for both audiences to maximize your result.",
    testimonial: {
      quote: "I rented in Lake Worth Beach for almost two years before I bought here. I liked the neighborhood enough that I didn't want to leave when my lease was up. Jose walked me through what buying actually looked like and the numbers worked out. Three years later, still here.",
      attribution: "Christine L., Lake Worth Beach",
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
          'Largely condo and co-op territory — often older 55+ or garden-style communities with HOA age restrictions. A genuine entry point into Palm Beach County homeownership, though not typically single-family detached.',
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
    buyerNote: "More coastline and lower prices than Delray or Boca — Boynton Beach is southern Palm Beach County's value play. Jose can show you which areas are appreciating fastest.",
    sellerNote: "Boynton Beach prices run consistently below Delray and Boca but the gap is narrowing. A Jose CMA shows exactly where your home stands today.",
    testimonial: {
      quote: "We weren't expecting to fall in love with Boynton Beach. Jose took us down to the marina area and through a few streets we never would have found on our own. We put in an offer within the week. We just closed on our second property here last spring.",
      attribution: "Kevin & Yolanda R., Boynton Beach",
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
          'Intracoastal, oceanfront, and premium downtown single-family homes — a genuine luxury tier, with pockets like The Oaks and Tropic Isle posting prices in the $2M–$3M+ range. The single-family segment here skews well above the citywide blended median.',
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
    buyerNote: "Atlantic Avenue is one of Florida's great main streets, and the neighborhoods around it range from starter condos to oceanfront estates. Jose knows the full spectrum.",
    sellerNote: "Delray Beach commands a premium over its neighbors — one of the most sought-after addresses in Palm Beach County. Jose's free CMA shows exactly how much equity you've built.",
    testimonial: {
      quote: "Delray had already decided for me before I ever thought about buying. Every visit made it harder to leave. When I finally called Jose to ask if I could actually afford it, it turned out I could. I've lived here two years now and haven't thought about renting since.",
      attribution: "Diane F., Delray Beach",
    },
  },
  {
    name: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Top-rated elementary schools, championship golf, and a full-service suburban lifestyle.',
    description:
      "Palm Beach Gardens is the workhorse of Palm Beach County family real estate — a planned city of 61,000 with genuine infrastructure and polish that few South Florida communities can match. Built around a championship golf identity, the city has grown into a full-service community with excellent roads, reliable retail anchors, and a diverse housing stock from golf-community condos to newer single-family subdivisions. The elementary schools — particularly Marsh Pointe and Timber Trace — are among the best public schools in Palm Beach County, and families with children in K–8 will find a dense network of well-resourced options. The Gardens Mall, Legacy Place, and PGA Commons give the city a genuine commercial center that residents don't have to leave the zip code to use.\n\nThe trade-offs are real. The median resident age of 51.8 reflects a population substantially tilted toward active adults and retirees; the energy is quieter than Jupiter, and the beach is a 15-minute drive rather than a walk. A family budget under $550,000 now buys a condo or older townhome rather than a move-in-ready single-family home with a yard, and HOA fees in golf communities add meaningfully to monthly costs. The high school carries a 3/10 GreatSchools rating — a legitimate concern for families with teenagers, even accounting for its Cambridge and AP magnet programs. Many families with high-school-aged children in PBG supplement with Benjamin School, Oxbridge Academy, or other private alternatives. For families with elementary-age children, however, Palm Beach Gardens is one of the strongest public school markets in South Florida.",
    highlights: [
      'Top-rated public elementary schools — among the best in Palm Beach County',
      'PGA National Resort — host of the annual Cognizant Classic PGA Tour event',
      'The Gardens Mall — Nordstrom, Bloomingdale\'s, and 160+ stores',
      'Legacy Place — open-air dining and shopping anchored by Whole Foods',
      'Golf community amenities — pools, tennis, and resort-style living',
      '15 minutes to Jupiter Beach, Palm Beach, and the Intracoastal',
    ],
    medianHomePrice: '$790K',
    avgDaysOnMarket: '82',
    bestFor: 'Families with elementary-age children, golf enthusiasts, and professionals relocating from the Northeast',
    coordinates: { lat: 26.8237, lng: -80.1337 },
    resources: [
      { label: 'City of Palm Beach Gardens', url: 'https://www.pbgfl.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Gardens Chamber', url: 'https://www.pbgchamber.com', category: 'chamber' },
    ],
    joseNote:
      "Palm Beach Gardens is where I send families who want a polished, move-in-ready suburban experience and don't want to compromise on elementary school quality. Marsh Pointe and Timber Trace are legitimately two of the best public elementary schools in South Florida — not just marketing language. The Gardens Mall and Legacy Place mean you don't have to drive an hour south for anything. The honest conversation I have with buyers who have high-school-aged kids: PBG High's GreatSchools number is not good, and they should factor in Benjamin School or Oxbridge Academy as a realistic cost. But for K–8 families, this is one of the best addresses in the county.",
    lifestyleTags: [
      'Top-Rated Elementary Schools',
      'Golf Communities',
      'Family Suburbs',
      'PGA National',
      'Shopping & Dining Hub',
      'Active Adult & Retiree Mix',
    ],
    census: {
      population: '60,959',
      medianAge: '51.8',
      medianHouseholdIncome: '$106,947',
      perCapitaIncome: '$83,250',
      ownerOccupied: '73%',
      renterOccupied: '27%',
      foreignBorn: '14.2%',
      topLanguages: ['Spanish', 'Italian', 'Portuguese'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$790K',
      avgDaysOnMarket: '82',
      pricePerSqFt: '$380',
      lastUpdated: 'March 2026 (Houzeo/Redfin)',
    },
    budgetGuide: [
      {
        tier: '$350K – $550K',
        label: 'Golf Community Condos & Townhomes',
        description:
          "Condos and townhomes in communities such as PGA National, The Club at Ibis, or BallenIsles — typically 1–3 bedrooms, 1,000–1,800 sq ft, with access to resort pools, fitness centers, and golf amenities. HOA fees in bundled golf communities can run $800–$1,200/month and meaningfully affect the true monthly cost — verify dues and included amenities before comparing to condo prices in other cities.",
      },
      {
        tier: '$550K – $850K',
        label: 'Single-Family Homes — Family Sweet Spot',
        description:
          'The core family bracket — single-family homes in Evergrene, Bent Tree, Mirasol\'s non-golf sections, or newer northern subdivisions. Buyers find 3–4 bedrooms and 1,800–2,800 sq ft, private yards, modern finishes, and proximity to A-rated elementary schools. This is the most competitive bracket in the market and where most family buyers are competing.',
      },
      {
        tier: '$850K – $2.5M+',
        label: 'Premium Golf & Gated Communities',
        description:
          'Larger homes in Mirasol, BallenIsles, Old Palm, and Alton\'s custom-home sections — 4–6 bedrooms, 3,000+ sq ft, lake or golf course views, pools, and access to private club amenities. New construction at Alton targets the upper end of this tier. True luxury inventory in PBG is deep and competitive.',
      },
    ],
    schools: [
      {
        name: 'Marsh Pointe Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-beach-gardens/12663-Marsh-Pointe-Elementary-School/',
      },
      {
        name: 'Timber Trace Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-beach-gardens/2320-Timber-Trace-Elementary-School/',
      },
      {
        name: 'Watson B. Duncan Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-beach-gardens/2319-Watson-B.-Duncan-Middle-School/',
      },
      {
        name: 'Palm Beach Gardens High School',
        level: 'High',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-beach-gardens/2266-Palm-Beach-Gardens-High-School/',
      },
    ],
    schoolNote:
      "Palm Beach Gardens delivers some of the strongest elementary schools in the county — Marsh Pointe and Timber Trace both hold perfect 10/10 GreatSchools ratings with gifted programming and attendance rates among the highest in Florida. Watson B. Duncan Middle maintains a solid 8/10. The high school is the honest complication: Palm Beach Gardens High carries a 3/10 GreatSchools rating, driven by equity-weighted proficiency metrics across its diverse population. The school does offer Cambridge International and AP tracks and has received College Success Awards — motivated students have real options. However, many families with high-school-aged children supplement with Benjamin School or Oxbridge Academy. Buyers with elementary-age children will find PBG exceptionally well-served; families with teenagers should evaluate the high school situation directly before committing.",
    pointsOfInterest: [
      {
        name: 'PGA National Resort',
        category: 'Recreation',
        description:
          'Five championship golf courses including The Champion, host of the annual Cognizant Classic PGA TOUR event. The resort offers a 40,000-sq-ft spa, racquet sports complex, and full hotel amenities — also accessible to community members.',
        url: 'https://www.pgaresort.com/',
      },
      {
        name: 'The Gardens Mall',
        category: 'Shopping',
        description:
          'A 1.4-million-sq-ft regional mall anchored by Nordstrom, Bloomingdale\'s, and Macy\'s, with 160+ specialty shops and restaurants. One of the most complete indoor retail destinations in South Florida.',
        url: 'https://thegardensmall.com/',
      },
      {
        name: 'Legacy Place',
        category: 'Dining',
        description:
          'An open-air lifestyle center anchored by Whole Foods with 40+ shops and restaurants including local favorites and national chains — the most accessible dining hub for everyday PBG residents.',
        url: 'https://legacyplacepbg.com/',
      },
      {
        name: 'Loggerhead Marinelife Center',
        category: 'Community',
        description:
          'A nonprofit sea turtle research and rehabilitation center in nearby Juno Beach, open to the public at no cost. Families can view sea turtles in rehabilitation, participate in educational programs, and attend release events by reservation.',
        url: 'https://marinelife.org/',
      },
      {
        name: 'Gardens Park',
        category: 'Park',
        description:
          "The city's largest municipal park — baseball and softball fields, sand volleyball, playground structures, and a paved loop trail. Consistently busy on evenings and weekends with families.",
        url: 'https://www.pbgfl.gov/605/Parks',
      },
      {
        name: 'Riverbend Park',
        category: 'Park',
        description:
          'Just across the Jupiter town line, Riverbend Park offers 10+ miles of unpaved trails for hiking, biking, and kayaking along the Wild and Scenic Loxahatchee River. One of Palm Beach County\'s best natural escapes, minutes from Palm Beach Gardens.',
        url: 'https://discover.pbcgov.org/parks/pages/riverbend.aspx',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Palm Beach Gardens has an active, multi-layered rental market. Golf communities attract seasonal renters — snowbirds renting 3–6 months while evaluating a permanent purchase. Apartment complexes along I-95 serve young professionals working across the county. Roughly 27% of housing units are renter-occupied, and demand is year-round. Jose can connect renters to available inventory before it hits the open market.",
    },
    buyerNote: "Two 10/10-rated elementary schools, PGA National, and one of the most complete commercial corridors in the county. For families with young children, Palm Beach Gardens is one of the best-positioned communities in South Florida.",
    sellerNote: "Palm Beach Gardens inventory has grown, giving sellers more competition than in 2022–2023. Jose's free CMA shows where your home sits and what pricing strategy moves it at full value.",
    testimonial: {
      quote: "We moved from Miami-Dade in 2022 and were skeptical. Everyone told us Palm Beach Gardens was for retirees. Then our kids started at Timber Trace and Marsh Pointe and we just stopped questioning it. The schools are something else.",
      attribution: "Homeowner in Palm Beach Gardens since 2022",
    },
  },
  {
    name: 'Jupiter',
    slug: 'jupiter',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Natural Florida, K–12 public school excellence, and a genuine small-town feel.',
    description:
      "Jupiter occupies a rare position in Palm Beach County: it has preserved more of its natural Florida character than almost any of its neighbors while still delivering school quality, community infrastructure, and residential amenities that family buyers require. Wedged between the Atlantic, the Wild and Scenic Loxahatchee River, and Jonathan Dickinson State Park, the town's physical geography limits density and keeps the feel genuinely small even as its population approaches 62,000. Weekend life revolves around outdoor experiences — kayaking the river, fishing from the pier, hiking the park system, catching spring training games, and biking through Abacoa.\n\nEducationally, Jupiter is one of the most compelling communities in South Florida for families prioritizing K–12 public school outcomes. Beacon Cove Intermediate rates 10/10. Both middle schools hold 8/10 ratings. Jupiter High School's 7/10, Cambridge International programming, and demonstrated college-readiness record make it genuinely unusual at the public high school level in this region — one of the very few places in the county where the K–12 public arc is defensible without needing a private alternative.\n\nJupiter's honest trade-offs: there is no luxury retail center — real shopping means a drive to Palm Beach Gardens or Boca. US-1 traffic through the core is consistently slow at peak hours. The waterfront premium is real and steep; a home with Loxahatchee River access or ocean views runs $500,000–$1,000,000 more than an inland comparable. Sub-$500,000 buys a condominium or townhome, not a single-family home. For families who want the authentic Florida version of a thriving small town with great public schools and outdoor access, Jupiter is one of the strongest answers in the county.",
    highlights: [
      'Top-ranked public schools K–12 — one of the few places in South Florida with a strong arc all the way through',
      'Loxahatchee River — Wild and Scenic designation, world-class kayaking and fishing',
      'Jonathan Dickinson State Park — 11,500 acres, largest state park in Southeast Florida',
      'Abacoa Town Center — walkable village with farmers market and year-round dining',
      'Roger Dean Stadium — spring training for two MLB teams, minor league all summer',
      'Less density and traffic than anywhere south in Palm Beach County',
    ],
    medianHomePrice: '$670K',
    avgDaysOnMarket: '65',
    bestFor: 'Families prioritizing K–12 school quality, outdoor enthusiasts, and buyers who value natural Florida',
    coordinates: { lat: 26.9342, lng: -80.0942 },
    resources: [
      { label: 'Town of Jupiter', url: 'https://www.jupiter.fl.us', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Schools', url: 'https://www.palmbeachschools.org', category: 'schools' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Jupiter-Tequesta Chamber', url: 'https://www.jupiterinletchamber.com', category: 'chamber' },
    ],
    joseNote:
      "Jupiter is the town I point families to when they want genuinely good public schools all the way through high school — not just elementary. That K–12 arc from Beacon Cove's 10/10 through Jupiter High's 7/10 is real, not marketing. The outdoor lifestyle here is also legitimate: the river, the park, the beach, Roger Dean Stadium for spring training. The market has gotten more expensive, and buyers should go in with realistic expectations — under $500K is condos, not single-family. But for a family that can get to $600K, Jupiter is one of the best-value towns in the county relative to what you actually get.",
    lifestyleTags: [
      'Natural Florida',
      'Beach & River Access',
      'Top-Rated Schools K–12',
      'Spring Training Baseball',
      'Small-Town Community Feel',
      'Loxahatchee River',
    ],
    census: {
      population: '61,883',
      medianAge: '47.5',
      medianHouseholdIncome: '$110,240',
      perCapitaIncome: '$71,255',
      ownerOccupied: '78.5%',
      renterOccupied: '21.5%',
      foreignBorn: '17.5%',
      topLanguages: ['Spanish', 'Portuguese', 'French'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$670K',
      avgDaysOnMarket: '65',
      pricePerSqFt: '$450',
      lastUpdated: 'May 2026 (Redfin)',
    },
    budgetGuide: [
      {
        tier: '$350K – $525K',
        label: 'Condos & Townhomes',
        description:
          'Condos and townhomes in communities like Abacoa or Jupiter Country Club\'s attached-home sections — 2–3 bedrooms in well-maintained communities with shared pools, fitness centers, and walkable neighborhoods. Inventory in this bracket is limited and typically draws multiple offers within the first week.',
      },
      {
        tier: '$550K – $825K',
        label: 'Single-Family Homes — Family Sweet Spot',
        description:
          'Single-family homes in Abacoa, Egret Landing, Shores at Jupiter, or established Jupiter neighborhoods near the river — 3–4 bedrooms, 1,800–2,600 sq ft, mature landscaping, and proximity to parks and A-rated schools. This is the most competitive bracket and where most family buyers are focused.',
      },
      {
        tier: '$825K+',
        label: 'Waterfront & Intracoastal',
        description:
          'Waterfront and Intracoastal-view homes along the Loxahatchee River or near the Jupiter Inlet, plus new construction in gated communities. Buyers find 4–6 bedrooms, often with a pool and private boat dock. True ocean-view estates approach $5M–$10M and above.',
      },
    ],
    schools: [
      {
        name: 'Jerry Thomas Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/jupiter/2280-Jerry-Thomas-Elementary-School/',
      },
      {
        name: 'Beacon Cove Intermediate School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/jupiter/5031-Beacon-Cove-Intermediate-School/',
      },
      {
        name: 'Jupiter Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/jupiter/2286-Jupiter-Middle-School/',
      },
      {
        name: 'Independence Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/jupiter/5251-Independence-Middle-School/',
      },
      {
        name: 'Jupiter High School',
        level: 'High',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/jupiter/2212-Jupiter-High-School/',
      },
    ],
    schoolNote:
      "Jupiter's school system is one of the strongest in Palm Beach County across all grade levels — a distinction very few South Florida communities can genuinely claim. Beacon Cove Intermediate rates 10/10 with sustained performance, not just a single good year. Both middle schools hold 8/10 ratings. Jupiter High earns 7/10, a Cambridge International and AP curriculum, and a demonstrated college-success track record — the school has earned College Success Awards in multiple years and maintains an 87% attendance rate well above the state average. Note that Jupiter's elementary system uses a K-2/grades 3-5 split at some schools — verify the feeder pattern for your specific address. Both middle schools offer Gifted & Talented programs; school assignment depends on your street address in the Palm Beach County system.",
    pointsOfInterest: [
      {
        name: 'Jonathan Dickinson State Park',
        category: 'Park',
        description:
          'The largest state park in Southeast Florida at 11,500 acres — coastal scrub, cypress swamp, river floodplain, and Intracoastal shoreline with boat tours, kayaking, hiking, and camping. One of the best wildlife-watching destinations in South Florida and a defining part of Jupiter\'s outdoor identity.',
        url: 'https://www.floridastateparks.org/parks-and-trails/jonathan-dickinson-state-park',
      },
      {
        name: 'Riverbend Park',
        category: 'Park',
        description:
          'Ten-plus miles of unpaved trails along the Wild and Scenic Loxahatchee River through subtropical scrub, cypress dome, and river swamp. Guided paddle tours run on weekends — a half-day natural escape that sets Jupiter apart from most of Palm Beach County\'s suburban character.',
        url: 'https://discover.pbcgov.org/parks/pages/riverbend.aspx',
      },
      {
        name: 'Roger Dean Chevrolet Stadium',
        category: 'Recreation',
        description:
          'Spring training home of both the Miami Marlins and St. Louis Cardinals — one of the only two-team spring training stadiums in the US. The 6,000-seat intimate venue also hosts minor league games through the summer at affordable family prices.',
        url: 'https://www.rogerdeanstadium.com/',
      },
      {
        name: 'Abacoa Town Center',
        category: 'Community',
        description:
          'The walkable village center of the Abacoa planned community — independent restaurants, coffee shops, and retailers surrounding a town square and event lawn. Hosts outdoor concerts, a weekly farmers market, and community festivals.',
        url: 'https://www.abacoa.com/',
      },
      {
        name: 'Jupiter Inlet Lighthouse and Museum',
        category: 'Community',
        description:
          'A 19th-century working lighthouse with 105 steps to panoramic inlet views, accompanied by a museum covering Florida maritime history and the Seminole people of the region. A family-appropriate half-day destination and one of Jupiter\'s most recognizable landmarks.',
        url: 'https://www.jupiterlighthouse.org/',
      },
      {
        name: 'Guanabanas',
        category: 'Dining',
        description:
          "Jupiter's most beloved local restaurant, set along the Loxahatchee River in an open-air tropical garden with fresh fish, island-inspired dishes, and craft cocktails. A genuine local institution that has maintained quality for two decades.",
        url: 'https://guanabanas.com/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Jupiter's rental market is smaller and less investor-driven than its neighbors — approximately 21.5% of housing units are renter-occupied, and most rental households are families renting while searching for the right home to purchase. Single-family rental homes and townhomes are the primary inventory; purpose-built apartment buildings are limited. Jose can connect renters to available single-family inventory, including properties that may not be publicly listed.",
    },
    buyerNote: "Beacon Cove at 10/10 through Jupiter High at 7/10 — one of the only true K-12 public school arcs in Palm Beach County that holds up at every level. Combined with the Loxahatchee River and Jonathan Dickinson Park right outside the door. Jose has navigated buyers through every corner of this town.",
    sellerNote: "Jupiter holds its value better than most of Palm Beach County — the school-driven demand keeps competition real at every price point. Jose's free CMA shows exactly where your home sits in this market.",
    testimonial: {
      quote: "I rented in Abacoa for a year just to test it. Then I saw the market move and called Jose. We closed on a townhouse the following spring. I bike to Harborside now and I still can't believe I actually live here.",
      attribution: "Resident of Jupiter since 2023",
    },
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'One of the most exclusive addresses in the United States — Worth Avenue and beyond.',
    description:
      "The Town of Palm Beach is not a neighborhood in any conventional sense. It is a 4.2-square-mile barrier island municipality that functions as one of the most exclusive residential enclaves in the United States — a community whose physical supply cannot be expanded, whose social architecture was established over a century, and whose wealth has become self-reinforcing in ways most American cities have never experienced. Approximately 58 billionaires maintain residences here. The year-round population of 9,400 expands to nearly 30,000 during the October-through-April social season, when the island's clubs, cultural institutions, charitable galas, and real estate market operate at full intensity.\n\nFor the buyer who qualifies, Palm Beach offers something genuinely irreplaceable: a recognized American aristocratic address, Florida's zero state income tax, streets maintained under direct municipal control, and private club access that provides the island's real social infrastructure. Everglades Club, Bath and Tennis Club, and Mar-a-Lago anchor a social life that is entry-gated in ways the real estate itself only partially reflects. The built environment of Addison Mizner-designed Spanish-Moorish architecture cannot be replicated — and the Town's strict architectural controls are not a burden for buyers who understand them; they are the mechanism that has preserved the island's character and, therefore, its value.\n\nWhat this market is not: a family neighborhood. The median resident age of 70.4 is not a coincidence. There are no public middle or high schools in the town limits. The minimum 90-day rental rule and the prohibition on short-term rentals mean there is no Airbnb market and no transient investor profile. Approximately 84% of all transactions close in cash with no mortgage contingency. For the international high-net-worth buyer — relocating from New York, London, São Paulo, or Paris — Palm Beach represents a convergence of tax efficiency, physical beauty, and social structure that the American real estate market offers in very few other locations.",
    highlights: [
      'Worth Avenue — Chanel, Gucci, Hermès, Cartier, and galleries in Addison Mizner architecture',
      'Zero Florida state income tax — the primary driver for most high-net-worth relocators',
      '4.2 square miles, bounded by water — fixed footprint, permanent supply constraint',
      '84% of transactions close in cash — no mortgage contingency is standard',
      'October–April social season — clubs, galas, and philanthropy events',
      'The Breakers, Four Arts, Flagler Museum — island cultural infrastructure unlike anywhere in Florida',
    ],
    medianHomePrice: '$2.6M',
    avgDaysOnMarket: '114',
    bestFor: 'Ultra-luxury buyers, international investors, high-net-worth relocators, and second-home purchasers',
    coordinates: { lat: 26.7056, lng: -80.0364 },
    resources: [
      { label: 'Town of Palm Beach', url: 'https://www.townofpalmbeach.com', category: 'city' },
      { label: 'Palm Beach County', url: 'https://www.pbcgov.org', category: 'county' },
      { label: 'Palm Beach County Property Appraiser', url: 'https://www.pbcgov.org/papa', category: 'property-appraiser' },
      { label: 'Palm Beach Chamber of Commerce', url: 'https://www.palmbeachchamber.com', category: 'chamber' },
    ],
    joseNote:
      "The Town of Palm Beach is where I serve South American buyers and international clients who want the security and prestige of the island without navigating the market blind. The off-market dynamic here is real — most significant sales never hit MLS, and relationships matter more than Zillow searches. I can facilitate introductions to the right brokers for this market and help clients understand what they're actually looking at before they commit. The minimum buy-in for a meaningful acquisition starts around $3M; under that, you're looking at condos in the south end or co-ops that require board approval. Everything above $8M requires patience and discretion.",
    lifestyleTags: [
      'Ultra-Luxury',
      'Barrier Island',
      'Addison Mizner Architecture',
      'Historic Social Season',
      'Cash Buyer Market',
      'Zero State Income Tax',
    ],
    census: {
      population: '9,348',
      medianAge: '70.4',
      medianHouseholdIncome: '$168,403',
      perCapitaIncome: '$211,607',
      ownerOccupied: '83.7%',
      renterOccupied: '16.3%',
      foreignBorn: '17.5%',
      topLanguages: ['Spanish', 'French', 'Portuguese'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates (small-sample; estimates carry wider margins of error)',
    },
    marketSnapshot: {
      medianPrice: '$2.6M',
      avgDaysOnMarket: '114',
      pricePerSqFt: '$1,390',
      lastUpdated: 'May 2026 (Redfin — note: small transaction count makes quarterly figures volatile)',
    },
    budgetGuide: [
      {
        tier: '$1.5M – $3M',
        label: 'Condos & Entry Single-Family',
        description:
          'Condominium units in the South End and in-town midblock zones; smaller dry-lot single-family properties; cooperative apartments requiring board approval. This is the Palm Beach address and zero-income-tax domicile at the lowest entry point. Note: cooperative apartments require approval processes that can be more rigorous and slower than standard condo purchases.',
      },
      {
        tier: '$3M – $8M',
        label: 'Mid-Island Single-Family',
        description:
          'Mid-island single-family homes on dry lots, North End properties, and larger condominium units with Intracoastal or ocean views. Properties in this bracket frequently carry architectural and landmark significance; exterior modifications require Landmarks Preservation Commission review. Buyers typically find 4,000–8,000 sq ft, meaningful outdoor space, and entry into the island\'s private club ecosystem.',
      },
      {
        tier: '$8M+',
        label: 'Trophy Estates & Oceanfront',
        description:
          'Estate Section Mizner-designed properties, oceanfront and ocean-to-lake parcels, North End compounds, and properties with direct beach access. Nearly 70% of single-family transactions in 2025 closed above $10M. Multiple transactions have exceeded $80M in recent years. The island\'s fixed footprint means the supply constraint is permanent and structural. Approximately 84% of transactions close in cash.',
      },
    ],
    schools: [
      {
        name: 'Palm Beach Public School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-beach/2229-Palm-Beach-Public-School/',
      },
    ],
    schoolNote:
      "The Town of Palm Beach has one public school within its boundaries — Palm Beach Public, a magnet PK–5 with Gifted & Talented programming, small class sizes, and a solid 8/10 GreatSchools rating. There are no public middle or high schools in the town. In practice, families with school-age children primarily use Palm Beach Day Academy (established 1921, PK–9, ~$41,000/year tuition) or Oxbridge Academy in West Palm Beach for older students. The resident population's median age of 70.4 means school-age families are a small minority — most buyers in this market are not selecting it for its school-district access.",
    pointsOfInterest: [
      {
        name: 'Worth Avenue',
        category: 'Shopping',
        description:
          "Palm Beach's legendary luxury shopping corridor — a four-block stretch of Spanish-Moorish Addison Mizner architecture lined with Chanel, Gucci, Louis Vuitton, Hermès, Cartier, and dozens of galleries and fine art dealers. The island's commercial center and social anchor during the season.",
        url: 'https://www.worth-avenue.com/',
      },
      {
        name: 'The Breakers',
        category: 'Recreation',
        description:
          'A National Historic Landmark resort founded in 1896, rebuilt in its current Italian Renaissance form in 1926. Two championship golf courses, a half-mile of private beach, four oceanfront pools, a 20,000-sq-ft spa, and 10 dining venues — both a premier resort and a social institution whose events anchor the winter season calendar.',
        url: 'https://www.thebreakers.com/',
      },
      {
        name: 'Henry Morrison Flagler Museum',
        category: 'Community',
        description:
          "Henry Flagler's 1902 Gilded Age mansion — now a National Historic Landmark museum preserving 75 rooms of Gilded Age decorative arts, architecture, and Florida railroad history. One of the finest house museums in the United States.",
        url: 'https://www.flaglermuseum.us/',
      },
      {
        name: 'The Society of the Four Arts',
        category: 'Community',
        description:
          'A nonprofit cultural institution founded in 1936, offering a gallery series, concert hall, public botanical garden, sculpture garden, and library system. The center of the island\'s cultural calendar from November through April and a primary expression of Palm Beach civic life.',
        url: 'https://www.fourarts.org/',
      },
      {
        name: 'Palm Beach Bicycle Trail',
        category: 'Recreation',
        description:
          'A 14-mile paved path running the full length of the island on the Lake Worth (Intracoastal) side — a peaceful, traffic-separated morning ride through one of the most architecturally significant residential streetscapes in the United States. Bicycle rental is available near Worth Avenue.',
        url: 'https://www.townofpalmbeach.com/',
      },
      {
        name: 'Phipps Ocean Park',
        category: 'Park',
        description:
          "A public Town of Palm Beach oceanfront park on the island's south end with beach access, green space, and the Palm Beach Performing Arts Center — one of the few points of free public ocean access on this otherwise private island.",
        url: 'https://www.townofpalmbeach.com/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "The Palm Beach rental market is narrow and ultra-premium by design. Town ordinance restricts short-term rentals to no more than three occurrences per year of less than 90 days each, effectively prohibiting vacation rental operations. The seasonal market runs October–April: luxury rentals typically run $20,000–$80,000 per month for residences, serving ultra-wealthy snowbirds evaluating the island before committing to purchase. There is no workforce rental market and no traditional apartment inventory.",
    },
    buyerNote: "The Town of Palm Beach is off-market, relationship-driven, and structurally different from every other residential market in South Florida. Jose works with South American buyers and international clients who need a trusted guide navigating this market. Reach out — he can facilitate the right introductions.",
    sellerNote: "Significant Palm Beach sales are handled with discretion and often never hit MLS. Jose can connect you to the right representation for your specific property and timeline.",
    testimonial: {
      quote: "Jose understands how the Palm Beach market actually works. Introductions, timing, discretion. He connected us to the right people and the transaction went smoothly. That is what matters here.",
      attribution: "International buyer, Palm Beach",
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
    tagline: "Broward's equestrian and university heartland — more house, more land, more character.",
    description:
      "Davie occupies an unusual position in Broward County: a town of over 112,000 that has deliberately preserved its horse-country character even as it grew into a fully suburban city. Equestrian zoning protects riding trails along residential streets in designated sections, the weekly rodeo at Bergeron Grounds is genuinely attended, and ranch-style homes on larger lots remain available at prices impossible in coastal Broward. The Latino community — drawn heavily from Venezuela, Colombia, and Central America — gives Davie's commercial corridors, restaurants, and social fabric a South American cultural character that distinguishes it from whiter, more insular Broward suburbs.\n\nNova Southeastern University's campus provides a stable professional and academic anchor, employment base, and rental demand that protects the market against the seasonal volatility that affects beach cities. The South Florida Education Center corridor (Nova Southeastern, Broward College, and FAU's Davie campus in close proximity) reinforces this dynamic. Commutes to downtown Fort Lauderdale, Miami, and Boca Raton are all managed via I-595 and the Florida Turnpike.\n\nThe honest tradeoffs: Davie is not walkable, and almost nothing is accessible without a car. Traffic on University Drive and Davie Road can be heavy. The median home price has climbed above $500K, which means buyers under $420K will be looking at condos rather than the single-family homes that define the neighborhood's character. HOA fees in condo and gated communities can significantly affect true monthly cost. The eastern sections near the Broward College campus feel denser and more urban; the western sections near the Everglades edge are quieter and more rural — these micro-zones carry meaningfully different lifestyles, and buyers should tour both.",
    highlights: [
      'Equestrian zoning — horse trails protected by town ordinance in designated areas',
      'Nova Southeastern University — major employment anchor and year-round rental demand',
      'Larger lots at lower prices than coastal Broward cities',
      'Strong Latino community — Venezuelan, Colombian, and Central American cultural presence',
      'Flamingo Gardens — 60-acre botanical garden and Everglades wildlife sanctuary',
      'Accessible to I-595, Florida Turnpike, Fort Lauderdale, Miami, and Boca Raton',
    ],
    medianHomePrice: '$520K',
    avgDaysOnMarket: '77',
    bestFor: 'Families, investors, and Latino community members seeking space and Broward value',
    coordinates: { lat: 26.0765, lng: -80.2521 },
    resources: [
      { label: 'Town of Davie', url: 'https://www.davie-fl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
      { label: 'Davie/Cooper City Chamber', url: 'https://www.davie-coopercity.org', category: 'chamber' },
    ],
    joseNote:
      "Davie is where my Venezuelan and Colombian clients feel most at home in Broward County — the community is there, the food is there, and the space that the beach cities don't offer is there. The NSU campus means stable rental demand and a professional workforce that keeps values from swinging seasonally. I always make sure buyers understand the HOA situation in the gated golf communities before they commit — the dues can be significant and meaningfully change the real cost of ownership. For a family that wants more house and more land than coastal Broward will allow at this price, Davie is a strong option.",
    lifestyleTags: [
      'Equestrian-Friendly',
      'Latino Cultural Hub',
      'University Town',
      'Tree-Lined Suburbs',
      'NSU Stable Demand',
      'Family-Scaled',
    ],
    census: {
      population: '112,040',
      medianAge: '39',
      medianHouseholdIncome: '$86,560',
      perCapitaIncome: '$51,109',
      ownerOccupied: '67.1%',
      renterOccupied: '32.9%',
      foreignBorn: '32.2%',
      topLanguages: ['Spanish', 'Portuguese', 'French'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$520K',
      avgDaysOnMarket: '77',
      pricePerSqFt: '$328',
      lastUpdated: 'February 2026 (Redfin)',
    },
    budgetGuide: [
      {
        tier: '$300K – $420K',
        label: 'Condos & Townhomes',
        description:
          'Most budget options at this tier are 2–3BR condos or townhomes near University Drive, Stirling Road, and I-595 — often 1980s–90s construction with original finishes but solid building quality. HOA fees vary widely and should be verified early; some communities carry fees above $500/month.',
      },
      {
        tier: '$420K – $520K',
        label: 'Older Single-Family Ranch Homes',
        description:
          'The entry point for single-family detached homes in Davie — 3BR/2BA ranch-style homes of 1,400–1,800 sq ft, many built in the 1970s–80s, often on generous lots. Western sections near the Everglades edge occasionally include horse-zoned properties. Kitchens and baths often need updating, but structural bones are typically sound.',
      },
      {
        tier: '$520K – $600K',
        label: 'Updated Single-Family',
        description:
          'Updated 3–4BR single-family homes with renovated kitchens, newer roofs (important for Florida insurance costs), and sometimes pools. Move-in ready inventory at $550K–$600K is limited and competitive — buyers should expect to move quickly when a genuinely turnkey home appears at this price.',
      },
    ],
    schools: [
      {
        name: 'Fox Trail Elementary School',
        level: 'Elementary',
        rating: '9/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/davie/411-Fox-Trail-Elementary-School/',
      },
      {
        name: 'Flamingo Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/davie/341-Flamingo-Elementary-School/',
      },
      {
        name: 'Nova Middle School',
        level: 'Middle',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/davie/303-Nova-Middle-School/',
      },
      {
        name: 'Nova High School',
        level: 'High',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/davie/301-Nova-High-School/',
      },
    ],
    schoolNote:
      "Davie's elementary and middle options are among the strongest of Broward County's inland suburbs — Fox Trail Elementary rates 9/10 and Nova Middle posts a 91% Algebra 1 EOC proficiency rate well above state and county averages. The high school picture is more moderate: Nova High rates 6/10, average for Florida, though it offers Cambridge International and AP programs that exceed what the rating alone suggests. School assignment in the Broward County district depends on your specific address; buyers should verify zoning before assuming attendance at any particular school.",
    pointsOfInterest: [
      {
        name: 'Flamingo Gardens',
        category: 'Park',
        description:
          'A 60-acre botanical garden and Everglades Wildlife Sanctuary with over 3,000 rare plants, some of Florida\'s largest trees, and the state\'s largest collection of native wildlife including alligators, black bears, Florida panthers, bald eagles, and flamingos.',
        url: 'https://www.flamingogardens.org/',
      },
      {
        name: 'Tree Tops Park',
        category: 'Park',
        description:
          'A 340-acre Broward County park with boardwalks through freshwater marsh, equestrian trails, a canoe and paddleboat launch, a viewing tower at one of Broward\'s highest public elevations, and a zip line. One of the most complete nature parks in central Broward.',
        url: 'https://www.broward.org/Parks/Pages/TreetopsDetail.aspx',
      },
      {
        name: 'Bergeron Rodeo Grounds',
        category: 'Community',
        description:
          'For over 40 years, this indoor/outdoor arena has hosted PRCA rodeo events, horse shows, dog shows, car shows, and concerts. It anchors Davie\'s western heritage identity and remains genuinely active, drawing both locals and regional visitors year-round.',
        url: 'https://www.davie-fl.gov/276/Bergeron-Rodeo-Grounds',
      },
      {
        name: 'Nova Southeastern University',
        category: 'Community',
        description:
          'One of the largest private universities in the United States, with nationally ranked programs in health sciences, law, business, and psychology. NSU\'s campus on College Avenue is a major employment center and brings a professional and academic population that stabilizes the local economy and rental market.',
        url: 'https://www.nova.edu/',
      },
      {
        name: 'Oak Hill Park',
        category: 'Recreation',
        description:
          "A 10-acre equestrian park with riding rings, horse trails through mature oaks, picnic areas, and playgrounds — a tangible expression of Davie's legal commitment to preserving horse access in residential zones.",
        url: 'https://www.davie-fl.gov/484/Oak-Hill-Park',
      },
      {
        name: "Flanigan's Seafood Bar and Grill",
        category: 'Dining',
        description:
          "A South Florida institution since 1959 with a Davie location — known for baby back ribs, grouper sandwiches, and cold drinks in a casual neighborhood setting. One of the most consistent community dining anchors in Broward County.",
        url: 'https://www.flanigans.net/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Davie's rental market is driven primarily by Nova Southeastern University's students, health sciences residents, and professional staff rather than seasonal tourism or coastal desirability — creating year-round, non-seasonal demand concentrated in the 1–2BR segment near University Drive and College Avenue. For investors, the NSU/Broward College pipeline provides a stable tenant base with predictable occupancy cycles.",
    },
    buyerNote: "More house, more land, and a genuine Latino community feel that most of Broward can't offer. Jose has worked both sides of the market here — buyers and sellers, sales and rentals — and knows which communities carry HOA surprises and which don't.",
    sellerNote: "Davie's value appeal draws a consistent buyer pool from price-pressured coastal Broward. Jose's free CMA shows exactly where your home sits — and how to price for the buyers who are actively looking here.",
    testimonial: {
      quote: "My parents live twenty minutes away in Doral. Davie gave me the space I needed without the Miami traffic every morning. NSU is right there for my kids, the schools are decent, and I can still find arepas on a Tuesday night.",
      attribution: "Homeowner in Davie since 2021",
    },
  },
  {
    name: 'Oakland Park',
    slug: 'oakland-park',
    county: 'Broward',
    region: 'Broward County',
    tagline: "One of Broward's most accessible entry points — and the closest thing to a Fort Lauderdale neighborhood at a Fort Lauderdale-adjacent price.",
    description:
      "Oakland Park is the most accessible entry point among Broward's inland cities for first-time buyers with budgets in the $300K–$450K range who want to own a single-family home — not just a condo — in Broward County. The city sits immediately north of Fort Lauderdale, with straightforward access to I-95, Fort Lauderdale-Hollywood International Airport, the Tri-Rail commuter line, and Fort Lauderdale's employment and arts corridors. The downtown Culinary Arts District on NE 12th Avenue is a legitimate neighborhood asset — an unusual concentration of independent restaurants, craft breweries, and arts programming that most people don't expect to find in a suburban city at this price point.\n\nThe community is meaningfully diverse across racial, ethnic, and income lines, reflecting Oakland Park's working-class roots and its ongoing demographic evolution. The revitalization is genuine but uneven: the Culinary District looks and feels very different from residential blocks three streets away, and the city's character shifts significantly between its eastern (more desirable, near Fort Lauderdale) and western (less investment) sections.\n\nThe honest tradeoffs deserve a direct assessment. Oakland Park's high school serves students with below-average academic outcomes — a real constraint for families with older children who can't access a magnet or charter alternative. Crime statistics vary significantly by area; the city's overall rates are higher than Davie or Wilton Manors, and buyers should consult Broward County Sheriff's crime mapping data for specific addresses rather than relying on city-level averages. Entry pricing compensates for these tradeoffs for buyers who do their homework.",
    highlights: [
      'Single-family homes from $300K — the most accessible entry point in Broward County',
      'Culinary Arts District — independent restaurants, Funky Buddha Brewery, monthly Art Walk',
      'Steps from Fort Lauderdale employment, I-95, and Tri-Rail',
      'Easterlin Park — 250-year-old cypress trees in an urban wilderness preserve',
      'Interior canals for kayaking and paddleboarding without a waterfront premium',
      'Diverse community — Hispanic, Haitian-American, and Caribbean cultural presence',
    ],
    medianHomePrice: '$415K',
    avgDaysOnMarket: '84',
    bestFor: 'First-time buyers, investors, and buyers seeking Fort Lauderdale adjacency without Fort Lauderdale prices',
    coordinates: { lat: 26.1726, lng: -80.132 },
    resources: [
      { label: 'City of Oakland Park', url: 'https://www.oaklandparkfl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
    ],
    joseNote:
      "Oakland Park is where I send first-time buyers who want a detached single-family home in Broward County without paying Fort Lauderdale prices — and that's genuinely possible here at $320K–$400K in a way that isn't true almost anywhere else in the county. The Culinary Arts District is a real neighborhood asset, not just marketing language. I'm always upfront about the high school situation and the fact that the city is uneven block by block — some streets are great, some aren't. Buyers need to do address-level homework here, not just rely on the zip code. For the buyer who does that work, Oakland Park can be a strong first-home purchase.",
    lifestyleTags: [
      'Entry-Level Opportunity',
      'Culinary Arts Scene',
      'Fort Lauderdale Adjacent',
      'Diverse Community',
      'Revitalization Momentum',
      'Walkable Downtown Core',
    ],
    census: {
      population: '44,682',
      medianAge: '38.1',
      medianHouseholdIncome: '$72,708',
      perCapitaIncome: '$39,645',
      ownerOccupied: '56.4%',
      renterOccupied: '43.6%',
      foreignBorn: '35.1%',
      topLanguages: ['Spanish', 'Haitian Creole', 'French'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$415K',
      avgDaysOnMarket: '84',
      pricePerSqFt: '$315',
      lastUpdated: 'October 2025 (Redfin)',
    },
    budgetGuide: [
      {
        tier: '$300K – $380K',
        label: 'Single-Family Starter Homes',
        description:
          'Oakland Park is one of the only places in Broward County where the $300K–$380K budget reaches single-family detached homes, not just condos — typically 2–3BR homes of 900–1,300 sq ft, built in the 1950s–70s, on 6,000–7,000 sq ft lots. Kitchens, baths, and mechanical systems will need due-diligence scrutiny. But the lot values alone justify the purchase price relative to other Broward markets.',
      },
      {
        tier: '$380K – $450K',
        label: 'First-Time Buyer Sweet Spot',
        description:
          'The core of the Oakland Park residential market — 3BR/2BA homes of 1,200–1,600 sq ft with varying levels of renovation. Some properties in this range have been updated with new kitchens, baths, and roofs. Proximity to the Culinary Arts District on NE 12th Ave is possible at this price point, particularly in the eastern sections near the Fort Lauderdale border.',
      },
      {
        tier: '$450K – $600K',
        label: 'Renovated or Canal-Access Homes',
        description:
          'Updated 3–4BR homes with modern finishes, larger lots, or canal access on Oakland Park\'s eastern edges bordering Fort Lauderdale. At $550K+, Oakland Park is competing with entry-level Fort Lauderdale pricing — which creates genuine relative value for buyers who understand both markets.',
      },
    ],
    schools: [
      {
        name: 'Oakland Park Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/oakland-park/214-Oakland-Park-Elementary-School/',
      },
      {
        name: 'James S. Rickards Middle School',
        level: 'Middle',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/oakland-park/391-James-S.-Rickards-Middle-School/',
      },
      {
        name: 'Northeast High School',
        level: 'High',
        rating: '2/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/fort-lauderdale/298-Northeast-High-School/',
      },
    ],
    schoolNote:
      "Oakland Park's school profile is the most challenging of the Broward neighborhoods in this guide. Oakland Park Elementary is solid at 7/10 and performs above state averages. The middle school is average at 5/10. Northeast High School's 2/10 rating reflects significantly below-average test scores — the school does offer AP courses and Cambridge International curriculum, and a 2/10 doesn't mean the school is nonfunctional, but it signals well below-average academic outcomes by Florida standards. Families with school-age children should seriously research Broward County's magnet school application process (which can provide access to higher-performing schools district-wide) and charter school options before committing. School assignment for any specific address should be verified with Broward County Public Schools.",
    pointsOfInterest: [
      {
        name: 'Culinary Arts District',
        category: 'Dining',
        description:
          'A walkable corridor along NE 12th Avenue anchored by chef-driven restaurants, Funky Buddha Brewery, craft coffee shops, and boutiques, with regular art and music events. One of Broward County\'s most interesting neighborhood commercial strips and the primary reason Oakland Park has developed a regional dining reputation.',
        url: 'https://www.oaklandparkfl.gov/',
      },
      {
        name: 'Funky Buddha Brewery',
        category: 'Dining',
        description:
          'A nationally distributed Florida craft brewery headquartered in Oakland Park, featuring 25+ drafts, an in-house restaurant, and a shaded outdoor patio. Funky Buddha was instrumental in establishing Oakland Park\'s identity as a dining destination.',
        url: 'https://funkybuddhabrewery.com/',
      },
      {
        name: 'Easterlin Park',
        category: 'Park',
        description:
          'A 46.6-acre Broward County Urban Wilderness Area preserving stands of 250-year-old cypress trees — among the oldest accessible old-growth trees in South Florida — with hiking trails, a campground, and disc golf. The park has historically hosted the South Florida Folk Festival.',
        url: 'https://www.broward.org/Parks/Pages/EasterlinDetail.aspx',
      },
      {
        name: 'Oakland Park Art Walk',
        category: 'Community',
        description:
          'A monthly evening art walk along NE 12th Ave featuring local artists, live music, food vendors, and community gathering. The event that has built the Culinary District\'s identity as a destination and reflects the city\'s investment in its cultural character.',
        url: 'https://www.oaklandparkfl.gov/776/Oakland-Park-Art-Walk-OPAW',
      },
      {
        name: 'Interior Canal System',
        category: 'Recreation',
        description:
          "Oakland Park's network of interior canals provides kayaking, paddleboarding, and wildlife-watching access without the cost and maintenance of full waterfront ownership. The canals connect into the broader Broward County waterway system and offer quiet water access unusual for an inland suburb at this price point.",
      },
      {
        name: 'Cypress Creek Tri-Rail Station',
        category: 'Transit',
        description:
          "The nearest Tri-Rail commuter rail station to Oakland Park's central sections, connecting south to Miami and north to West Palm Beach. A practical commuting option for residents with jobs along the South Florida rail corridor.",
        url: 'https://www.tri-rail.com/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Oakland Park's substantial renter population (43.6%) is driven by residents priced out of Fort Lauderdale, service industry workers, and the city's diverse immigrant households. Demand is consistent and year-round. Oakland Park's housing stock of small 3BR homes at $320K–$420K purchase prices pencils for investor buyers in a way that much of Broward County no longer does. Jose can help renters and investors navigate what's currently available.",
    },
    buyerNote: "One of the only places in Broward County where the $300K–$400K budget still reaches a detached single-family home with a yard. The Culinary Arts District is real and growing. Buyers need to do address-level homework — Jose knows which streets work and which to approach carefully.",
    sellerNote: "Oakland Park's value appeal draws a consistent first-time buyer pool from higher-priced Fort Lauderdale. Jose's free CMA shows exactly where your home sits in this evolving market.",
    testimonial: {
      quote: "I kept hearing you can't buy anything decent in Broward under 400K. I walked through three homes in Oakland Park in one afternoon. My agent called it right. The Culinary District changed what this neighborhood means.",
      attribution: "First-time buyer in Oakland Park",
    },
  },
  {
    name: 'Wilton Manors',
    slug: 'wilton-manors',
    county: 'Broward',
    region: 'Broward County',
    tagline: "The Island City — walkable, community-driven, and steps from Fort Lauderdale.",
    description:
      "Wilton Manors is genuinely unusual in South Florida: a 2.5-square-mile island city (bounded by canals on all sides) that functions as a walkable urban village in an otherwise car-dependent region. Wilton Drive concentrates independent dining, nightlife, retail, and community life in a way that almost no other Broward municipality manages at this scale. Residents walk or bike to the Las Olas corridor, the beach, Flagler Village, and Fort Lauderdale's arts district. The city has a strong and active sense of collective identity — neighborhood associations are engaged, community events are frequent, and residents tend to know their neighbors in a way uncommon in larger Broward suburbs.\n\nThe city's LGBTQ+ identity is well-established and reflected across its businesses, events, and civic culture; Wilton Manors is consistently ranked among the most LGBTQ+-inclusive cities in the United States. The median age of 55 reflects a community that skews toward established professionals and retirees rather than young families.\n\nThe honest tradeoffs: Wilton Manors is substantially above the $600K ceiling for most single-family homes. The overall median (all types) ran $613K–$685K in late 2025; single-family homes averaged around $730K in early 2025. Buyers at $400K–$550K will be working in the condo segment or heavily dated single-family product. The city's small size means inventory is consistently tight. Wilton Manors has no major grocery store, no large parks, and limited commercial diversity beyond Wilton Drive's corridor — Fort Lauderdale's infrastructure is the effective backstop for most daily needs. Flood insurance should be a due-diligence priority given the city's canal-bounded topography.",
    highlights: [
      'Wilton Drive — walk to dinner, walk home. Rare in any South Florida city',
      'Nationally recognized LGBTQ+-welcoming community with strong civic identity',
      'Canal-bounded island setting — 2.5 square miles, tight supply, consistent demand',
      'Steps from Fort Lauderdale Las Olas, Flagler Village, and the beach',
      'Colohatchee Park — mangrove preserve, boardwalk, and kayak launch on the Middle River',
    ],
    medianHomePrice: '$650K',
    avgDaysOnMarket: '75',
    bestFor: 'LGBTQ+ buyers, walkability-focused buyers, established professionals, and buyers seeking walkable Broward living',
    coordinates: { lat: 26.162, lng: -80.1342 },
    resources: [
      { label: 'City of Wilton Manors', url: 'https://www.wiltonmanors.com', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
    ],
    joseNote:
      "Wilton Manors is the most walkable residential city in Broward County — that's not an exaggeration. You can genuinely walk to dinner, walk home, and have a full social life without a car, which is almost impossible anywhere else in this region. I want buyers going in with realistic expectations on price: single-family homes with any updates are above $650K, and the inventory is small and competitive. For buyers who understand the market and value the lifestyle — the community identity, the walkability, the five-minute drive to Fort Lauderdale Beach — this is a place people buy and stay in.",
    lifestyleTags: [
      'Walkable Island City',
      'LGBTQ+ Welcoming',
      'Strong Community Identity',
      'Waterfront Green Space',
      'Urban Village Feel',
      'Steps from Fort Lauderdale',
    ],
    census: {
      population: '11,511',
      medianAge: '55.1',
      medianHouseholdIncome: '$85,392',
      perCapitaIncome: '$77,234',
      ownerOccupied: '61.6%',
      renterOccupied: '38.4%',
      foreignBorn: '20.8%',
      topLanguages: ['Spanish', 'Portuguese', 'French'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$650K',
      avgDaysOnMarket: '75',
      pricePerSqFt: '$413',
      lastUpdated: 'November 2025 (Redfin)',
    },
    budgetGuide: [
      {
        tier: '$400K – $550K',
        label: 'Condos & Dated Single-Family',
        description:
          'At this level, buyers are typically looking at 1–2BR condos or the rare smaller single-family home in need of significant renovation — older roofs, outdated kitchens, or structural issues that create the discounted price point. Inventory at this tier is limited and moves quickly when priced correctly. HOA fees in the smaller condo buildings should be verified.',
      },
      {
        tier: '$550K – $650K',
        label: 'Small Single-Family with Work Required',
        description:
          'The entry point for single-family homes — 2–3BR homes of 1,000–1,500 sq ft on smaller lots. The city\'s 2.5-square-mile footprint and dense residential platting mean large lots are rare. Cosmetic updates are typically needed. The lifestyle payoff — walkability to Wilton Drive, proximity to Fort Lauderdale — is what justifies the price.',
      },
      {
        tier: '$650K – $800K+',
        label: 'Updated Single-Family',
        description:
          'Move-in ready 3BR homes with renovated kitchens, updated baths, newer roofs, and outdoor spaces — some with small pools. This is where Wilton Manors\' turnkey single-family inventory actually lives. Proximity to Wilton Drive and the canal lifestyle are embedded in this pricing tier.',
      },
    ],
    schools: [
      {
        name: 'Wilton Manors Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/wilton-manors/226-Wilton-Manors-Elementary-School/',
      },
      {
        name: 'Sunrise Middle School',
        level: 'Middle',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/fort-lauderdale/232-Sunrise-Middle-School/',
      },
      {
        name: 'Fort Lauderdale High School',
        level: 'High',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/fort-lauderdale/284-Fort-Lauderdale-High-School/',
      },
    ],
    schoolNote:
      "Wilton Manors Elementary's International Baccalaureate World School designation is a meaningful differentiator at the elementary level — IB programs emphasize critical thinking and international mindedness, and the 7/10 GreatSchools rating reflects above-average performance relative to Florida public schools. The feeder middle and high schools — both physically in Fort Lauderdale — rate at 6/10 each, average for Florida. Fort Lauderdale High offers AP coursework and a magnet program with graduation rates consistently above 88%. Note that Wilton Manors' population skews significantly older (median age 55), meaning school-age families are a smaller share of the community than in other Broward cities.",
    pointsOfInterest: [
      {
        name: 'Wilton Drive',
        category: 'Dining',
        description:
          "The walkable main corridor of the Island City — independent restaurants, bars, retail shops, and service businesses that make Wilton Manors one of the very few suburban South Florida municipalities where residents can genuinely walk to dinner and walk home. The street-level activity sustains a year-round social ecosystem unlike anywhere else in Broward.",
        url: 'https://explorewiltonmanors.com/wilton-drive-guide/',
      },
      {
        name: 'Colohatchee Park',
        category: 'Park',
        description:
          'An 8.5-acre city park with 7 acres of mangrove preserve, an elevated boardwalk over the Middle River, kayak and boat ramp access, a dog park, and outdoor fitness equipment. Named for Seminole heritage, this is the most-used outdoor gathering space in Wilton Manors.',
        url: 'https://www.wiltonmanors.gov/157/Colohatchee-Park',
      },
      {
        name: 'Richardson Historic Park & Nature Preserve',
        category: 'Park',
        description:
          "A 5.4-acre riverfront preserve with a 1930s-era historic manor house, a boardwalk along the Middle River, observation pier, and nature trails. The quietest and most historically layered of Wilton Manors' parks.",
        url: 'https://www.wiltonmanors.gov/',
      },
      {
        name: 'Stonewall Pride Celebration',
        category: 'Community',
        description:
          'An annual June celebration that draws tens of thousands of participants to Wilton Drive and surrounding streets — one of the largest Pride events in South Florida, reflecting the island city\'s nationally recognized LGBTQ+-welcoming character.',
        url: 'https://www.wiltonmanors.gov/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Wilton Manors' rental market is lifestyle-driven rather than anchored by an institution or seasonal tourism. The Wilton Drive corridor, walkability, and proximity to Fort Lauderdale attract renters willing to pay for access. The city's tight land supply means new rental inventory is nearly nonexistent, sustaining demand year-round. Jose can help renters navigate what's available in a market where desirable units rarely sit long.",
    },
    buyerNote: "The most walkable residential city in Broward County — and the community identity to match. Buyers need realistic price expectations: turnkey single-family starts above $650K. Jose knows this market and can help buyers understand what's actually available and what the lifestyle delivers.",
    sellerNote: "Wilton Manors' consistent buyer demand and lifestyle premium mean well-priced homes move. Jose's free CMA shows exactly where your home sits in this distinctive, supply-constrained market.",
    testimonial: {
      quote: "We spent a year on Zoom calls with Jose from Chicago. Every question we had, he had a real answer for. When we finally visited, we walked Wilton Drive for twenty minutes and both knew. There was nothing to think about after that.",
      attribution: "Buyers relocated from Chicago, Wilton Manors",
    },
  },
  {
    name: 'Pompano Beach',
    slug: 'pompano-beach',
    county: 'Broward',
    region: 'Broward County',
    tagline: "Broward's coastal value play — Intracoastal access, active redevelopment, and a 9/10 public high school.",
    description:
      "Pompano Beach is in the middle of a genuine transition, and buyers in 2025–2026 are entering at an interesting moment. Years of targeted investment — the Fishing Village renovation, The Amp, the downtown corridor upgrades, and now the massive Pomp project anchored by Topgolf and Live! entertainment — are changing the city's offer to residents in ways that won't fully materialize for several more years. For buyers who want coastal Broward County proximity without Fort Lauderdale or Deerfield Beach pricing, Pompano is one of the very few options remaining. The Intracoastal runs the length of the city's eastern portion, and waterfront or water-adjacent homes in the $500K–$600K range exist here that simply don't exist in neighboring cities at those prices.\n\nThe city's market is internally split by property type in a way that requires explanation. The overall median (all types) runs $330K–$380K — largely influenced by a large inventory of older condos that declined about 11% year-over-year through 2025. Single-family homes performed very differently, with a median around $555K and 15.6% year-over-year appreciation through the same period. Buyers should understand which market they're actually in.\n\nThe foreign-born population (nearly 40%) is among the highest in Broward, reflected in a genuinely diverse cultural landscape with Caribbean, Central American, South American, and Haitian communities all meaningfully present. Pompano Beach's high school stands out as one of the stronger public options in Broward County at 9/10 — a fact worth knowing for family buyers whose school-age children are high-school-aged.\n\nThe honest caution: Pompano Beach is a large city internally inconsistent in ways that require block-level research. The western sections along the Turnpike corridor have seen less investment than the eastern and central areas. Crime statistics vary significantly by area — city-level averages are not reliable for specific address decisions. The older condo inventory carries heightened insurance and special assessment exposure in the post-Ian environment.",
    highlights: [
      'One of the strongest public high schools in Broward County',
      'The Pomp — 223-acre redevelopment with Topgolf and Live! entertainment (now open)',
      'Intracoastal water-adjacent single-family from $500K — a price point that doesn\'t exist in neighboring cities',
      'The Amp — 7,000-capacity outdoor amphitheater hosting major national touring acts',
      'Fishing Village & renovated Fisher Family Pier — oceanfront dining and beach access',
      'Palm Aire Country Club — semi-private golf and country club within city limits',
    ],
    medianHomePrice: '$355K',
    avgDaysOnMarket: '95',
    bestFor: 'Value-oriented buyers, families with high-school-aged children, and investors watching the redevelopment trajectory',
    coordinates: { lat: 26.2379, lng: -80.1248 },
    resources: [
      { label: 'City of Pompano Beach', url: 'https://www.pompanobeachfl.gov', category: 'city' },
      { label: 'Broward County', url: 'https://www.broward.org', category: 'county' },
      { label: 'Broward County Schools', url: 'https://www.browardschools.com', category: 'schools' },
      { label: 'Broward County Property Appraiser', url: 'https://www.bcpa.net', category: 'property-appraiser' },
      { label: 'Pompano Beach Chamber', url: 'https://www.pompanobeachchamber.com', category: 'chamber' },
    ],
    joseNote:
      "Pompano Beach is where I tell buyers to pay attention to the property-type split before they get too excited about the overall median. The overall number includes a lot of older condos that have been declining — single-family homes have been going the other direction. The Pomp and the Fishing Village redevelopment are real, and the timeline on them matters for the investment case. The high school at 9/10 is also genuinely worth knowing about for family buyers — that's a strong public option in Broward. I always recommend buyers research specific neighborhoods and streets carefully here, because the city is internally inconsistent in ways that the zip code doesn't capture.",
    lifestyleTags: [
      'Coastal Value Play',
      'Active Redevelopment',
      'Intracoastal Access',
      'Diverse Waterfront',
      'Golf Community Legacy',
      'Caribbean Cultural Mix',
    ],
    census: {
      population: '118,110',
      medianAge: '41.9',
      medianHouseholdIncome: '$72,224',
      perCapitaIncome: '$38,538',
      ownerOccupied: '55.4%',
      renterOccupied: '44.6%',
      foreignBorn: '39.8%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'U.S. Census Bureau, ACS 2019–2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$355K (all types) / $555K (single-family)',
      avgDaysOnMarket: '95',
      pricePerSqFt: '$308',
      lastUpdated: 'November 2025 (Redfin) — note: median reflects all property types; SF and condo markets perform very differently',
    },
    budgetGuide: [
      {
        tier: '$300K – $400K',
        label: 'Condos, Townhomes & Older SF',
        description:
          'The widest variety in Pompano Beach — condos and townhomes throughout the city (including older coastal condos near Sample Road and McNab Road) and some older single-family homes in western and northwestern neighborhoods. Buyers should research association fees and special assessments carefully on condo purchases, as many older buildings carry deferred maintenance liabilities under Florida\'s new milestone inspection requirements.',
      },
      {
        tier: '$400K – $500K',
        label: 'Established Mid-City Single-Family',
        description:
          'The core single-family market for first-time buyers — 3BR/2BA homes ranging from 1,200–1,800 sq ft in established neighborhoods built between the 1960s and 1980s. Some properties in this range are within a short drive of the Intracoastal, creating lifestyle access without Intracoastal-premium pricing.',
      },
      {
        tier: '$500K – $600K',
        label: 'Updated or Water-Adjacent Single-Family',
        description:
          'Updated 3–4BR homes with modern kitchens, newer roofs, and sometimes pool decks or canal access. East of US-1, properties in this range may have Intracoastal proximity or direct water access — an unusual value relative to Fort Lauderdale pricing just to the south. Move-in ready condition is more common at this tier.',
      },
    ],
    schools: [
      {
        name: 'McNab Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/pompano-beach/273-Mcnab-Elementary-School/',
      },
      {
        name: 'Cresthaven Elementary School',
        level: 'Elementary',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/pompano-beach/279-Cresthaven-Elementary-School/',
      },
      {
        name: 'Pompano Beach Middle School',
        level: 'Middle',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/pompano-beach/213-Pompano-Beach-Middle-School/',
      },
      {
        name: 'Pompano Beach High School',
        level: 'High',
        rating: '9/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/pompano-beach/408-Pompano-Beach-High-School/',
      },
    ],
    schoolNote:
      "Pompano Beach's school performance is uneven across grade levels, and understanding the specific pattern matters. McNab Elementary outperforms state averages at 8/10 and is a strong elementary option. The middle school rates average at 5/10. Pompano Beach High School's 9/10 rating is one of the stronger public high school ratings in Broward County — it offers magnet programs and AP coursework with a consistent college success track record. The gap between the middle school experience and the high school outcome is notable; families with middle-schoolers should research magnet alternatives within the district. School attendance zones depend on specific address and should be verified with Broward County Public Schools.",
    pointsOfInterest: [
      {
        name: 'The Amp (Pompano Beach Amphitheater)',
        category: 'Recreation',
        description:
          'An outdoor venue at 1801 NE 6th Street with approximately 2,900 covered seats (7,000+ total capacity) hosting major national touring acts, seasonal performing arts series, and community events. One of the most active public entertainment venues in Broward County.',
        url: 'https://www.pompanobeacharts.org/amp',
      },
      {
        name: 'The Pomp',
        category: 'Community',
        description:
          'A transformative 223-acre mixed-use redevelopment of the former Pompano Park racetrack by Caesars Entertainment and The Cordish Companies. Topgolf is now open; Live! entertainment district, two hotels, retail, and approximately 4,000 new residential units are in various stages of development. The most significant single investment in the city\'s redevelopment trajectory.',
        url: 'https://www.visitpompanobeach.com/the-pomp/',
      },
      {
        name: 'Pompano Fishing Village & Fisher Family Pier',
        category: 'Recreation',
        description:
          'A six-acre oceanfront complex featuring the renovated Fisher Family Pier, oceanfront restaurants, and a palm-lined promenade. Pompano Beach\'s most photogenic public gathering space, representing the city\'s investment in a more welcoming beach experience for residents.',
        url: 'https://www.visitpompanobeach.com/',
      },
      {
        name: 'Palm Aire Country Club',
        category: 'Recreation',
        description:
          'A semi-private golf and country club community with multiple courses, tennis, and social programming. Palm Aire represents the city\'s long-established country club residential tradition, and properties within or adjacent to the community are among the more stable and sought-after in the interior market.',
        url: 'https://www.palmaire.com/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Pompano Beach has one of the larger renter populations among Broward's mid-sized cities (44.6% renter-occupied), with demand driven by the city's diverse immigrant workforce and households priced out of Fort Lauderdale. As The Pomp development activates and the downtown corridor matures, rents in the eastern and central neighborhoods are likely to rise. The large older condo inventory provides rental options at price points that don't exist in supply-constrained smaller Broward cities.",
    },
    buyerNote: "The Pomp redevelopment is real and underway. Pompano Beach High rates 9/10 — one of the best public highs in Broward. And there are still water-adjacent single-family homes in the $500K–$600K range that don't exist at that price in Fort Lauderdale. Jose can help buyers understand which parts of the city are worth the investment and which to approach carefully.",
    sellerNote: "Pompano Beach's redevelopment trajectory is actively driving values in the eastern and central sections. Jose's free CMA shows exactly where your property sits in a market that's moving unevenly — and how to price for maximum return.",
    testimonial: {
      quote: "The 9/10 high school rating was the thing I would not compromise on. Jose sent me listings in Pompano I would not have found myself. The house we got two blocks from Pompano Beach High was more than I expected at that price point.",
      attribution: "Single mother, Pompano Beach",
    },
  },

  // ── TREASURE COAST ─────────────────────────────────────────────────────────
  {
    name: 'Port St. Lucie',
    slug: 'port-st-lucie',
    county: 'St. Lucie',
    region: 'Treasure Coast',
    tagline: "One of Florida's fastest-growing cities — and its most affordable family entry point.",
    description:
      "Port St. Lucie is Florida's sixth-largest city and one of the state's great growth stories. In four decades it went from undeveloped scrubland to a community of over 232,000, and it is still adding residents, subdivisions, and commercial development at a pace that outstrips almost any other large Florida city. For middle-class families, that growth has translated into a tangible advantage: more housing supply, more new construction, and home prices that are meaningfully lower than anything comparable in Palm Beach County to the south. A 3-bedroom home with a 2-car garage in a clean neighborhood — the baseline family ask — costs $340,000–$420,000 here.\n\nThe Tradition community offers the closest thing to a walkable, town-square experience, and it is genuinely well-done — a pedestrian gathering place built around weekly farmers markets, outdoor dining, and a full community events calendar. Outdoor recreation is stronger than the suburban reputation suggests: Savannas Preserve State Park, the Botanical Gardens, and river access to the St. Lucie system all provide real natural escapes.\n\nThe honest tradeoffs need to be said. School quality in the St. Lucie County district is the most frequently cited concern among families, and the data supports it — high school ratings are below state averages, and families should research charter school options carefully. Commuting is the other friction point: Palm Beach County jobs and amenities are on the far side of Martin County, and the drive to Palm Beach Gardens runs 50–70 minutes in traffic. For remote workers or those who work locally, Port St. Lucie's price-to-space equation is hard to beat in South Florida.",
    highlights: [
      'New construction single-family from $340K — the best home-for-dollar in South Florida',
      'Tradition community — walkable town square with farmers market and outdoor dining',
      'Clover Park — New York Mets Spring Training stadium',
      'PGA Village — 54 holes of championship public golf',
      'Savannas Preserve State Park — 5,500 acres of coastal savanna',
      'One of Florida\'s fastest-growing cities — infrastructure keeps pace',
    ],
    medianHomePrice: '$397K',
    avgDaysOnMarket: '88',
    bestFor: 'First-time buyers, families relocating from Palm Beach County, and remote workers seeking space',
    coordinates: { lat: 27.293, lng: -80.3501 },
    resources: [
      { label: 'City of Port St. Lucie', url: 'https://www.cityofpsl.com', category: 'city' },
      { label: 'St. Lucie County', url: 'https://www.stlucieco.gov', category: 'county' },
      { label: 'St. Lucie County Schools', url: 'https://www.stlucie.k12.fl.us', category: 'schools' },
      { label: 'St. Lucie County Property Appraiser', url: 'https://www.paslc.gov', category: 'property-appraiser' },
      { label: 'St. Lucie Chamber of Commerce', url: 'https://www.slchamber.com', category: 'chamber' },
    ],
    joseNote:
      "Port St. Lucie is where I send buyers who tell me they want real space and a real house but can't stretch to Palm Beach County prices — and I've helped multiple families close here in the past few years. The Tradition area is genuinely impressive for a suburb: a real town square, farmers market, good restaurants, community events. You're getting more house per dollar than almost anywhere in South Florida. I want to be straight with clients about the schools — St. Lucie County isn't where I'd brag — and the commute to jobs in Palm Beach County is real. But for a remote-working family or anyone whose work is local, the value here is hard to argue with.",
    lifestyleTags: [
      'New Construction',
      'Affordable South Florida Entry',
      'Golf & Recreation',
      'Spring Training Baseball',
      'Fast-Growing Suburb',
      'Room to Grow',
    ],
    census: {
      population: '232,491',
      medianAge: '43.9',
      medianHouseholdIncome: '$80,648',
      perCapitaIncome: '$37,990',
      ownerOccupied: '84%',
      renterOccupied: '16%',
      foreignBorn: '19.7%',
      topLanguages: ['Spanish', 'Haitian Creole', 'Portuguese'],
      source: 'U.S. Census Bureau, ACS 2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$397K',
      avgDaysOnMarket: '88',
      pricePerSqFt: '$223',
      lastUpdated: 'June 2025 (Redfin)',
    },
    budgetGuide: [
      {
        tier: 'Under $330K',
        label: 'Established Single-Family',
        description:
          'Older 3-bedroom, 2-bath homes built in the 1980s and 1990s in established neighborhoods along Port St. Lucie Boulevard or north of Crosstown Parkway. These homes often need cosmetic updates but deliver more square footage per dollar than anywhere else in South Florida — a detached home with a yard that would cost $500,000+ in Broward or Palm Beach County.',
      },
      {
        tier: '$330K – $480K',
        label: 'New Construction Sweet Spot',
        description:
          'The heart of the Port St. Lucie family market — 3–4 bedrooms, 2-car garage, often a pool, built 2005–2020s in planned communities like Tradition, St. Lucie West, or along the Gatlin Boulevard corridor. Many communities carry modest HOA fees covering pools, fitness centers, and walking paths. National builders like D.R. Horton, Mattamy Homes, and Maronda Homes are active at this price level.',
      },
      {
        tier: '$480K+',
        label: 'Golf & Waterfront Communities',
        description:
          'Larger homes in golf course communities like PGA Village, waterfront properties along the North Fork of the St. Lucie River, or new construction in the western expansion areas of Tradition. Four-to-five bedroom plans with upgraded finishes and resort-style amenities characterize this tier, with some executive inventory on the water exceeding $700,000.',
      },
    ],
    schools: [
      {
        name: 'Windmill Point Elementary School',
        level: 'Elementary',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/port-st.-lucie/2923-Windmill-Point-Elementary-School/',
      },
      {
        name: 'Parkway Elementary School',
        level: 'Elementary',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/port-st.-lucie/2928-Parkway-Elementary-School/',
      },
      {
        name: 'Southport Middle School',
        level: 'Middle',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/port-st.-lucie/2930-Southport-Middle-School/',
      },
      {
        name: 'Treasure Coast High School',
        level: 'High',
        rating: '5/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/port-st.-lucie/7844-Treasure-Coast-High-School/',
      },
      {
        name: 'Port St. Lucie High School',
        level: 'High',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/port-st.-lucie/2927-Port-St.-Lucie-High-School/',
      },
    ],
    schoolNote:
      "The St. Lucie County School District performs below the state average by most measures, and this is the most honest tradeoff in Port St. Lucie. High schools carry low ratings — Treasure Coast High earns 5/10 and Port St. Lucie High just 3/10. The elementary picture is better, with most neighborhood schools in the 5–6/10 range; Southport Middle is the strongest traditional public middle option at 7/10. Families for whom school quality is a primary driver may want to research the charter school landscape carefully — Manatee Academy K-8 is one frequently mentioned option within the public system — or weigh private school costs against the housing savings Port St. Lucie delivers.",
    pointsOfInterest: [
      {
        name: 'Clover Park',
        category: 'Recreation',
        description:
          'The spring training home of the New York Mets and summer home of the St. Lucie Mets Class A affiliate. Beyond baseball, the park hosts concerts, festivals, and tournaments year-round — one of the city\'s most recognizable landmarks.',
        url: 'https://www.mlb.com/mets/spring-training/clover-park',
      },
      {
        name: 'PGA Village',
        category: 'Recreation',
        description:
          'Fifty-four holes of championship golf across the Wanamaker, Ryder, and Dye courses, plus a PGA Golf Club Museum and learning center. One of Florida\'s premier public golf destinations, it defines the western edge of the city\'s leisure identity.',
        url: 'https://www.pgavillage.com',
      },
      {
        name: 'Tradition Square',
        category: 'Community',
        description:
          'The most curated neighborhood in Port St. Lucie, built around a walkable town square with boutique shops, outdoor dining, Food Truck Fridays, and a weekly farmers market. The Landing at Tradition adds a full shopping corridor adjacent to the community.',
        url: 'https://traditionfl.com',
      },
      {
        name: 'Savannas Preserve State Park',
        category: 'Park',
        description:
          'A 5,500-acre freshwater coastal savanna — one of Florida\'s rarest natural communities — with hiking trails, kayaking, and wildlife observation connecting to the Indian River Lagoon system. A quality outdoor escape unusual for a city of this scale.',
        url: 'https://www.floridastateparks.org/parks-and-trails/savannas-preserve-state-park',
      },
      {
        name: 'Port St. Lucie Botanical Gardens',
        category: 'Park',
        description:
          'A volunteer-maintained public garden with themed areas including a Bamboo Garden, Rose Garden, and Butterfly Garden. Free to visit and one of the city\'s most peaceful public spaces.',
        url: 'https://www.plsbotanicalgardens.com',
      },
      {
        name: 'Oxbow Eco-Center',
        category: 'Community',
        description:
          'A county-operated nature center along the North Fork of the St. Lucie River with environmental education programs, interactive exhibits, and nature trails. Frequently used by local schools and popular with families with young children.',
        url: 'https://www.stlucieco.gov/environment/oxbow-eco-center',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Port St. Lucie's rental market is dominated by single-family homes, reflecting the city's suburban footprint — a rarity in Florida. Renters have real negotiating power in the current environment, with vacancy up and lease incentives becoming more common. Jose can help tenants navigate current availability across the city's multiple distinct areas.",
    },
    buyerNote: "More house per dollar than anywhere in South Florida — new construction at prices that Palm Beach County buyers often can't believe. Jose has closed multiple deals here and knows which communities are worth the commute.",
    sellerNote: "Port St. Lucie's inventory has grown, giving sellers real competition. Jose's free CMA shows exactly where your home sits and what pricing strategy will move it without leaving money on the table.",
    testimonial: {
      quote: "We spent eighteen months looking in Broward. We kept getting outbid on houses we didn't even like that much. A friend in PSL told us to just come look. We put in an offer three weeks after our first visit.",
      attribution: "Buyers relocated from Broward to Port St. Lucie",
    },
  },
  {
    name: 'Stuart',
    slug: 'stuart',
    county: 'Martin',
    region: 'Treasure Coast',
    tagline: 'The Sailfish Capital of the World — great schools, real downtown, quieter pace.',
    description:
      "Stuart and Martin County occupy an unusual position in Florida real estate: a place that genuinely delivers on the small-town promise without sacrificing quality of life. The combination of a walkable historic downtown, some of Florida's best-ranked public schools, direct water access to the St. Lucie River and Intracoastal Waterway, and lower density than Palm Beach County makes it a natural choice for families who want to live well without paying Palm Beach prices.\n\nThe school story is real and worth leading with. Martin County's district ranks 11th of 67 Florida counties by state accountability. The elementary schools — Felix A. Williams, Crystal Lake, Bessey Creek — carry 8–9/10 GreatSchools ratings that are rare outside the most affluent Florida suburbs. Clark Advanced Learning Center, the public charter high school in Stuart, earns a 10/10 rating and sits in the top 5% of all Florida public schools nationally. For parents who want genuinely excellent public schools without paying private school tuition, Martin County is one of South Florida's best-kept open secrets.\n\nThe lifestyle centers on water and community. The St. Lucie River and Intracoastal are not backdrop — they are the point. The 'Sailfish Capital of the World' designation reflects a real fishing culture that's built into daily life here. The downtown is the kind of place Florida lost in most cities decades ago: human-scaled, locally owned, and animated by actual foot traffic. The honest tradeoffs: Stuart city is small, the commercial ecosystem is limited compared to Palm Beach County, and the commute to Palm Beach Gardens runs 40–55 minutes. Buyers who need maximum square footage for minimum cost will find Port St. Lucie a stronger value. Buyers prioritizing school quality, community character, and water access will find Stuart hard to beat.",
    highlights: [
      'Martin County schools rank 11th of 67 Florida counties — Clark Advanced Learning Center is 10/10',
      'Historic walkable downtown — independent dining, galleries, and weekly farmers market',
      'Sailfish Capital of the World — river and offshore fishing on the St. Lucie',
      'Lower prices than Palm Beach County for a comparable or better quality of life',
      'Small-city density — less traffic, more space, more character',
      'Intracoastal and St. Lucie River access throughout the community',
    ],
    medianHomePrice: '$405K',
    avgDaysOnMarket: '85',
    bestFor: 'Families prioritizing top-ranked public schools, boaters, and buyers seeking a quieter community pace',
    coordinates: { lat: 27.1975, lng: -80.2528 },
    resources: [
      { label: 'City of Stuart', url: 'https://www.ci.stuart.fl.us', category: 'city' },
      { label: 'Martin County', url: 'https://www.martin.fl.us', category: 'county' },
      { label: 'Martin County Schools', url: 'https://www.martinschools.org', category: 'schools' },
      { label: 'Martin County Property Appraiser', url: 'https://www.pa.martin.fl.us', category: 'property-appraiser' },
      { label: 'Stuart/Martin County Chamber', url: 'https://www.stuartmartinchamber.org', category: 'chamber' },
    ],
    joseNote:
      "Stuart is where I point families who want great schools and don't want to stretch to Wellington prices. Martin County's school district is legitimately excellent — not just good by Florida standards, but good by any standard. Clark Advanced Learning Center is a 10/10 public charter school that rivals anything in Palm Beach County. The downtown is genuinely walkable and charming in a way you don't see much anymore. And you're on the water — real boating and fishing country. The trade is a longer drive south if your job is in Palm Beach County, and a smaller commercial footprint. But for families who work remotely or locally, Stuart is one of the best-value family communities in all of South Florida.",
    lifestyleTags: [
      'Top-Ranked Public Schools',
      'Historic Walkable Downtown',
      'Sailfish Capital of the World',
      'River & Intracoastal Lifestyle',
      'Low-Density Small City',
      'Treasure Coast',
    ],
    census: {
      population: '18,520',
      medianAge: '48.6',
      medianHouseholdIncome: '$60,225',
      perCapitaIncome: '$40,500',
      ownerOccupied: '58.9%',
      renterOccupied: '41.1%',
      foreignBorn: '13.5%',
      topLanguages: ['Spanish', 'Haitian Creole', 'English'],
      source: 'U.S. Census Bureau, ACS 2023 5-Year Estimates',
    },
    marketSnapshot: {
      medianPrice: '$405K',
      avgDaysOnMarket: '85',
      pricePerSqFt: '$241',
      lastUpdated: 'June 2025 (Redfin/Houzeo)',
    },
    budgetGuide: [
      {
        tier: 'Under $400K',
        label: 'Condos, Townhomes & Smaller Single-Family',
        description:
          'Condos and townhomes in and around Stuart city, along the US-1 corridor, or older 2–3 bedroom single-family homes close to downtown. This tier puts buyers within easy reach of downtown Stuart\'s walkable amenities and the river — a trade of square footage for location that many buyers find well worth it.',
      },
      {
        tier: '$400K – $575K',
        label: 'Family Single-Family Homes',
        description:
          'The heart of the Martin County family market — 3–4 bedroom single-family homes in established Palm City subdivisions, newer Hobe Sound developments, or well-maintained neighborhoods near Martin County High. Many homes have pools, 2-car garages, and larger lots than comparable Palm Beach County properties at this price.',
      },
      {
        tier: '$575K+',
        label: 'Waterfront & Golf Communities',
        description:
          'Waterfront access, Intracoastal frontage, and larger custom builds in communities like Mariner Sands Country Club, River Wilderness, or neighborhoods in Sewalls Point. Executive-caliber homes with private water access and mature landscaping — at prices that would buy a townhome in Jupiter or Wellington.',
      },
    ],
    schools: [
      {
        name: 'Felix A. Williams Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/stuart/1899-Felix-A-Williams-Elementary-School/',
      },
      {
        name: 'Crystal Lake Elementary School',
        level: 'Elementary',
        rating: '8/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/stuart/1896-Crystal-Lake-Elementary-School/',
      },
      {
        name: 'Bessey Creek Elementary School',
        level: 'Elementary',
        rating: '9/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/palm-city/1903-Bessey-Creek-Elementary-School/',
      },
      {
        name: 'Stuart Middle School',
        level: 'Middle',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/stuart/1882-Stuart-Middle-School/',
      },
      {
        name: 'Martin County High School',
        level: 'High',
        rating: '6/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/stuart/1883-Martin-County-High-School/',
      },
      {
        name: 'Clark Advanced Learning Center',
        level: 'Charter',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/stuart/6579-Clark-Advanced-Learning-Center/',
      },
    ],
    schoolNote:
      "Martin County's public school system is one of the most compelling arguments for choosing this area. The district ranks 11th of 67 Florida counties in state accountability — Felix A. Williams and Crystal Lake Elementary both rate 8/10, Bessey Creek Elementary in Palm City hits 9/10, and attendance rates at these schools run 10–20 points above the Florida average. The standout is Clark Advanced Learning Center, a public charter high school rated 10/10 nationally, placing it in the top 5% of all Florida public schools. Clark serves grades 10–12 in partnership with Indian River State College, so families should plan for 9th grade separately. Martin County High and Stuart Middle both rate 6/10 — solid but not exceptional. Overall, this is one of the strongest public school districts in South Florida at this price point.",
    pointsOfInterest: [
      {
        name: 'Historic Downtown Stuart',
        category: 'Dining',
        description:
          'A genuinely walkable downtown with award-winning restaurants, boutique shops, public murals, and a weekly Sunday farmers market at Flagler Park. Stuart\'s downtown has preserved the feel of a small Florida city from a previous era while keeping its restaurants and retail current.',
        url: 'https://www.downtownstuart.com',
      },
      {
        name: 'Lyric Theatre',
        category: 'Community',
        description:
          'A restored 1926 historic theater hosting live music, theater, film, and community events year-round. One of the oldest operating theaters in Florida and the anchor of Stuart\'s arts identity.',
        url: 'https://www.lyrictheatre.com',
      },
      {
        name: 'Halpatiokee Regional Park',
        category: 'Park',
        description:
          "A 4,700-acre natural area along the South Fork of the St. Lucie River with hiking, mountain biking, equestrian trails, and picnic areas — Martin County's premier natural space and a reliable destination for active families.",
        url: 'https://www.martin.fl.us/halpatiokee-regional-park',
      },
      {
        name: 'Shepard Park & the Riverwalk',
        category: 'Park',
        description:
          'A waterfront park at the edge of downtown with river views, a playground, a boat ramp, and the Riverwalk boardwalk connecting to adjacent parks. Saturday mornings here, with the farmers market running nearby, define the rhythm of the community.',
        url: 'https://www.stuart.fl.us/parks',
      },
      {
        name: 'Sailfish Splash Waterpark',
        category: 'Recreation',
        description:
          "Martin County's full-service waterpark with slides, a lazy river, a lap pool, and splash zones for small children. Open during the warm months and a staple summer destination for local families.",
      },
      {
        name: 'St. Lucie River & Intracoastal Waterway',
        category: 'Recreation',
        description:
          "Stuart's position at the confluence of the St. Lucie River, the Indian River Lagoon, and the Okeechobee Waterway makes it one of Florida's premier hubs for boating, sportfishing, sailing, and kayaking. The 'Sailfish Capital' designation reflects a real, year-round fishing culture.",
      },
      {
        name: 'Children\'s Museum of the Treasure Coast',
        category: 'Community',
        description:
          'Located in nearby Jensen Beach, this interactive museum features hands-on exhibits, STEM-focused programs, and dedicated play spaces for children up to age 12. A popular local institution for families with young children.',
        url: 'https://cmtc.us',
      },
      {
        name: 'Florida Oceanographic Coastal Center',
        category: 'Community',
        description:
          "A nonprofit environmental education center on Hutchinson Island with a 750,000-gallon stingray lagoon, native saltwater tanks, nature trails, and kayak eco-tours through the Indian River Lagoon system. A standout family destination and environmental advocate for the St. Lucie waterway.",
        url: 'https://www.floridaocean.org/',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Stuart's rental market is smaller and more concentrated than Port St. Lucie's — apartments and condos dominate in and around downtown, with single-family rentals available in surrounding Martin County communities. With 41% of Stuart city households renting, demand is consistent. Jose can help renters navigate what's available and connect them to listings before they hit the public market.",
    },
    buyerNote: "Martin County's public schools rank 11th in the state and Clark Advanced Learning Center is a 10/10 public charter. For families where school quality is the deciding factor, Stuart is one of the strongest value plays in all of South Florida.",
    sellerNote: "Martin County home values have held better than most Florida markets. Jose's free CMA shows exactly what your home is worth in a county where school-driven demand keeps competition real.",
    testimonial: {
      quote: "We did the research for three years before we pulled the trigger. Stuart kept coming back to the top of our list. The river, the downtown, the size. Jose walked us through the market before we ever flew down. We signed that spring.",
      attribution: "Retired couple relocated from Connecticut",
    },
  },

];
