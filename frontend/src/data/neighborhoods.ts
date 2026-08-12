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
  hidden?: boolean;
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
  // MARKET DATA, update manually each quarter from MLS or Zillow Research
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
  // SCHOOL DATA, verify ratings annually at greatschools.org
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
      "Royal Palm Beach was incorporated in 1959 on what was then swampland and Seminole hunting grounds, and has grown from a handful of original residents into a village of nearly 39,000. That growth hasn't come at the expense of green space: the village maintains over 325 acres of parks, including Commons Park's 19-acre lake and three miles of trails, Veteran's Park's splash pad and amphitheater, and the 773-acre Royal Palm Beach Pines Natural Area. It's been a designated Tree City USA since 1990, and the entire village is recognized as a bird sanctuary.\n\nFor renters, Royal Palm Beach offers some of the best value in western Palm Beach County, newer homes, family-friendly neighborhoods, and a rental market Jose knows better than almost anyone, since it's also where he has more client relationships than anywhere else in Palm Beach County. For buyers, it means more space and newer construction per dollar than the coastal cities, with strong elementary and middle schools and a community that has welcomed waves of Brazilian, Venezuelan, Colombian, and Caribbean families who now call it home. For sellers, that same demand, driven by renters moving toward ownership and families relocating from pricier parts of the county, has kept the market active and homes moving.",
    highlights: [
      '325+ acres of parks, including a 19-acre lake, 3 miles of trails, and a splash pad',
      'Tree City USA since 1990, the entire village is a designated bird sanctuary',
      'Strong elementary and middle schools, Western Academy Charter rates 10/10 on GreatSchools',
      "One of Palm Beach County's most diverse communities, large Brazilian, Venezuelan, Colombian, and Caribbean population",
      'Newer construction and more space per dollar than coastal Palm Beach County',
      "A deep, active rental market, often a family's first step before buying in the village",
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
      "Royal Palm Beach is where I've done more deals than anywhere else, and honestly, it's home turf. People hear the name and picture something fancy, it's not. It's working families: Brazilian, Venezuelan, Colombian, Haitian, longtime Floridians, all on the same streets, shopping at the same Publix. The elementary schools are genuinely good, the parks are excellent for the price point, and you get more house and more yard here than almost anywhere else in the county for the same money. The high school isn't where I'd brag, and I tell people that straight up. If you're renting before you buy, or you're a first-time buyer trying to make the numbers work in Palm Beach County, this is usually the first place I point people to.",
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
        label: 'Condos and Townhomes',
        description:
          "Mostly 2-bedroom condos and townhomes in communities like Village Walk, Greenway Village South, and Mezzano. HOA fees vary but are generally manageable. This is where most first-time buyers start in the village.",
      },
      {
        tier: '$350K – $550K',
        label: 'Single-Family Homes',
        description:
          "Three- to four-bedroom homes with fenced yards. Most buyers in the village end up somewhere in this range, close to the median. Good inventory in established neighborhoods that have been here 20–30 years.",
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
      "Royal Palm Beach's elementary options are genuinely strong, Cypress Trails and Western Academy Charter both rate 8/10 or higher, and Western Academy's 10/10 puts it among the top-rated schools in Florida. Royal Palm Beach High School is the clear weak point at 3/10, well below the elementary and middle schools that feed into it, and worth knowing about before you commit to a specific block.",
    pointsOfInterest: [
      {
        name: 'Commons Park',
        category: 'Park',
        description:
          '140+ acres with a splash pad, amphitheater, trails, sports fields, and a dog park. Spend a Saturday morning here and you\'ll understand the neighborhood.',
        url: 'https://www.royalpalmbeachfl.gov/554/Commons-Park-Sporting-Center',
        imageSrc: '/images/neighborhoods/poi/rpb-commons-park.jpg',
      },
      {
        name: "Veterans Park",
        category: 'Park',
        description:
          "A 6-acre park built in 2006 with its own splash pad, amphitheater, picnic pavilions, and a toddler playscape, smaller and quieter than Commons Park, with a memorial honoring local veterans.",
        url: 'https://www.royalpalmbeachfl.gov/552/Veterans-Park',
        imageSrc: '/images/neighborhoods/poi/rpb-veterans-park.jpg',
      },
      {
        name: 'Crossroads at Royal Palm Beach',
        category: 'Shopping',
        description:
          "Publix, pharmacy, deli, and bakery at the main shopping center on Royal Palm Beach Blvd. Groceries and daily errands, covered.",
        url: 'https://www.publix.com/locations/1851-crossroads-at-royal-palm-beach',
        imageSrc: '/images/neighborhoods/poi/rpb-crossroads.jpg',
      },
      {
        name: 'Mall at Wellington Green',
        category: 'Shopping',
        description:
          "Regional mall about 10 minutes south in Wellington. Macy's, Dillard's, Apple, and a full restaurant strip.",
        url: 'https://shopwellingtongreen.com/',
        imageSrc: '/images/neighborhoods/poi/rpb-wellington-mall.jpg',
      },
      {
        name: 'Southern Blvd Dining Corridor',
        category: 'Dining',
        description:
          'Venezuelan bakeries, Brazilian churrascarias, Latin American restaurants, and family diners along Southern Blvd. This is what the neighborhood actually eats.',
      },
      {
        name: 'Royal Palm Beach Public Library',
        category: 'Community',
        description:
          "County library branch with children's programming, quiet study rooms, and community meeting space.",
        url: 'https://www.pbclibrary.org/locations/royalpalm/',
        imageSrc: '/images/neighborhoods/poi/rpb-library.jpg',
      },
      {
        name: 'Royal Palm Beach Cultural Center',
        category: 'Community',
        description: 'Performances, classes, and community events throughout the year. The village\'s main arts space.',
        url: 'https://www.royalpalmbeachfl.gov/442/Cultural-Center-Cypress-Hall',
        imageSrc: '/images/neighborhoods/poi/rpb-cultural-center.jpg',
      },
      {
        name: 'Royal Palm Beach Recreation Center',
        category: 'Recreation',
        description:
          "Full gymnasium, fitness equipment, and programming for kids and adults throughout the year.",
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
    buyerNote: "Jose's home turf and most active market, he knows every block, every builder, and what a listing price actually means here.",
    sellerNote: "Over 82% of RPB residents own their homes. When a home lists here, Jose knows what buyers are actually willing to pay, free CMA, no obligation.",
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
    tagline: "The county seat: walkable downtown, Intracoastal waterfront, and the widest price range in Palm Beach County.",
    description:
      "West Palm Beach is the county seat and Jose's second most active market by listing volume. The city's real estate spans entry-level condos in established neighborhoods to Intracoastal waterfront properties, all at prices that significantly undercut equivalent Miami inventory. As remote work shifted demographics, the city has seen strong appreciation while still offering prices that work for first-time buyers.",
    highlights: [
      'Thriving downtown, Clematis Street and Rosemary Square',
      'Intracoastal waterfront properties at a fraction of Miami pricing',
      'Wide price range, starter condos to luxury waterfront estates',
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
      "West Palm Beach gives families something none of the western suburbs can: real walkability, a downtown they'll actually use, and homes in Palm Beach County that still fit a family budget. I've helped buyers find solid 3-bedroom homes here for less than what a condo costs in Boca. And with SunFest, the GreenMarket, the Zoo, and Dreyfoos all in the same city, it adds up to something the suburbs don't have.",
    lifestyleTags: [
      'Urban and Walkable',
      'Diverse Community',
      'Intracoastal Waterfront',
      'Arts and Culture Scene',
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
        label: 'Condos and Townhomes',
        description:
          "Primarily 2-bedroom condos and townhomes in complexes 40–60 years old, with HOA fees worth budgeting for. Deep inventory at this end of the market. A realistic starting point for first-time buyers in the county.",
      },
      {
        tier: '$300K – $500K',
        label: 'Single-Family Homes',
        description:
          "3-bedroom, 2-bath homes in established neighborhoods, typically 30–50 years old, some recently renovated. This bracket rewards patience and a willingness to look in less-trendy pockets.",
      },
      {
        tier: '$500K+',
        label: 'Updated and Historic Single-Family',
        description:
          'Updated or newer homes in neighborhoods like Flamingo Park, El Cid, SoSo, and Northwood Shores, increasingly overlapping with the historic market, where renovated 1920s–1940s homes command a premium.',
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
      "West Palm Beach's school quality varies significantly by zone, there's no single 'WPB schools are great' answer here. Bak Middle (10/10) and Dreyfoos High (8/10) are strong magnet schools, but both require a separate application and audition, not just living in the zone. Forest Hill, the primary comprehensive high school for much of western WPB, rates considerably lower at 3/10. Use the Palm Beach County school locator by address before assuming what you're zoned for.",
    pointsOfInterest: [
      {
        name: 'Clematis Street and Meyer Amphitheatre',
        category: 'Dining',
        description:
          "Restaurants, bars, and shops along the waterfront. Free 'Clematis by Night' concerts and events at the Meyer Amphitheatre.",
        url: 'https://clematisstreet.org/',
        imageSrc: '/images/neighborhoods/poi/wpb-clematis-street.jpg',
      },
      {
        name: 'WPB GreenMarket',
        category: 'Shopping',
        description:
          "Every Saturday morning along the waterfront, October through May. 150 vendors, 31 seasons in. More weekly ritual than tourist stop.",
        url: 'https://www.wpb.org/Residents/Community-Events/Events/WPB-GreenMarket',
        imageSrc: '/images/neighborhoods/poi/wpb-greenmarket.jpg',
      },
      {
        name: 'Grassy Waters Preserve',
        category: 'Park',
        description:
          "City-owned wetland with a cypress boardwalk, nature center, and kayak launches. Free to visit.",
        url: 'https://www.wpb.org/Departments/Grassy-Waters-Preserve',
        imageSrc: '/images/neighborhoods/poi/wpb-grassy-waters.jpg',
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description:
          '1,700-acre county park. Disc golf, BMX, a par-3 course, lake access, and cable wakeboarding at Shark Wake Park.',
        url: 'https://discover.pbc.gov/parks/Locations/Okeeheelee.aspx',
        imageSrc: '/images/neighborhoods/poi/wpb-okeeheelee.jpg',
      },
      {
        name: 'Palm Beach Zoo and Cox Science Center',
        category: 'Community',
        description:
          '23-acre zoo in Dreher Park. Tigers, jaguars, Florida panthers. Adjacent Cox Science Center has a planetarium and mini golf.',
        url: 'https://www.coxsciencecenter.org/',
        imageSrc: '/images/neighborhoods/poi/wpb-cox-science-center.jpg',
      },
      {
        name: 'Manatee Lagoon',
        category: 'Community',
        description:
          'Free FPL eco-center on the Intracoastal. Manatees gather at the warm-water outflow in winter. Observation deck and boardwalk.',
        url: 'https://visitmanateelagoon.com/',
        imageSrc: '/images/neighborhoods/poi/wpb-manatee-lagoon.jpg',
      },
      {
        name: 'Rosemary Square (CityPlace)',
        category: 'Shopping',
        description:
          'Open-air shopping and dining next to the Kravis Center. AMC theater, Restoration Hardware, Pottery Barn.',
        url: 'https://www.cityplace.com/',
        imageSrc: '/images/neighborhoods/poi/wpb-cityplace.jpg',
      },
      {
        name: 'Publix at Village Commons',
        category: 'Shopping',
        description:
          "Publix off Okeechobee Blvd. No Whole Foods or Trader Joe's inside city limits; closest are about 15 minutes north in Palm Beach Gardens.",
        url: 'https://www.publix.com/locations/1497-village-commons',
        imageSrc: '/images/neighborhoods/poi/wpb-publix.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$2,100',
      rangeMax: '$3,500',
      description:
        "West Palm Beach has an active rental market driven by the urban workforce. Proximity to downtown and the waterfront moves the price noticeably. Jose can walk you through current inventory and match you to the right pocket of the city.",
    },
    buyerNote: "WPB has 15+ distinct micro-neighborhoods with very different values. Jose will show you which fit what you're looking for, and help you avoid overpaying for a zip code.",
    sellerNote: "WPB values vary sharply by neighborhood and have moved meaningfully in recent years. Jose's free CMA shows exactly where your home sits in today's market.",
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
    tagline: "Home to the Winter Equestrian Festival and two of the top-rated elementary schools in Florida.",
    description:
      "Wellington is one of Jose's most consistent sales markets, with closed deals ranging from $420K to $560K across diverse property types. The village is internationally known for equestrian sport, hosting the Winter Equestrian Festival each year, but its real strength for everyday buyers is the combination of A-rated schools, newer construction on larger lots, and a family-oriented community culture that's rare at this price point in South Florida.\n\nJose has lived in Wellington since 2004. When you work with Jose in Wellington, you're working with your neighbor.",
    highlights: [
      'Hosts the Winter Equestrian Festival, an international draw',
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
      "I've lived in Wellington since 2004. I've watched it grow from a quiet equestrian community into one of the best places to raise a family in Palm Beach County. The schools are real, the parks are well-maintained, and you get a sense of neighborhood that just doesn't exist at this price point in most of South Florida. And you don't have to own a horse to love living here.",
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
        label: 'Condos, Villas and Townhomes',
        description:
          'Typically 2-bedroom units, often in gated communities or golf course developments, some with substantial HOA fees. The most accessible way to get a Wellington address and its school zoning without the single-family price tag.',
      },
      {
        tier: '$450K – $650K',
        label: 'Entry-Level Single-Family',
        description:
          '3-bedroom, 2-bath homes typically 30–40 years old on smaller lots. Some are well-maintained originals, others need updating, and this is the most competitive bracket, with homes often drawing multiple offers.',
      },
      {
        tier: '$650K+',
        label: 'Established Single-Family and Estates',
        description:
          '3–4 bedroom homes with updated kitchens, community amenities, and often private pools. Equestrian estates with acreage and barn access start here and run into the millions.',
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
      "Both Binks Forest and Equestrian Trails rate 10/10 on GreatSchools, and Wellington Landings Middle isn't far behind at 8/10, well above the district average in math and reading proficiency. Wellington High School rates more modestly at 6/10, though it offers a strong AP program with roughly 50% student participation, worth visiting in person to judge for your family.",
    pointsOfInterest: [
      {
        name: 'Wellington Village Park and Amphitheater',
        category: 'Park',
        description:
          "Amphitheater with free Thursday concerts, plus the Aquatics Center, tennis courts, fields, and Scott's Place playground.",
        url: 'https://www.wellingtonfl.gov/603/Amphitheater',
        imageSrc: '/images/neighborhoods/poi/wellington-village-park.jpg',
      },
      {
        name: 'Peaceful Waters Sanctuary',
        category: 'Park',
        description:
          '30-acre wetlands preserve inside Village Park. Boardwalk trails, herons, turtles, and the occasional alligator.',
        url: 'https://www.wellingtonfl.gov/facilities/facility/details/Peaceful-Waters-Sanctuary-56',
        imageSrc: '/images/neighborhoods/poi/wellington-peaceful-waters.jpg',
      },
      {
        name: 'Wellington International (Winter Equestrian Festival)',
        category: 'Recreation',
        description:
          '13 weeks each January through March, riders from 52 countries. One of the world\'s premier equestrian events. General admission is free.',
        url: 'https://www.wellingtoninternational.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-international.jpg',
      },
      {
        name: 'National Polo Center',
        category: 'Recreation',
        description:
          'Palm Beach Polo Season runs December through May, matches most weeks. $35 general admission. Sunday brunch matches are the event of the week.',
        url: 'https://www.nationalpolocenter.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-polo-center.jpg',
      },
      {
        name: 'Okeeheelee Park',
        category: 'Recreation',
        description:
          'County park on Wellington\'s eastern edge. BMX track, disc golf, a par-3 course, lake access, and a boat ramp.',
        url: 'https://discover.pbc.gov/parks/Locations/Okeeheelee.aspx',
        imageSrc: '/images/neighborhoods/poi/wellington-okeeheelee.jpg',
      },
      {
        name: 'Publix at Courtyard Shops',
        category: 'Shopping',
        description:
          'Flagship Publix opened late 2024. Wine and coffee bar, made-to-order burrito and pizza bars, upstairs seating. The nicest grocery store in the area.',
        url: 'https://www.publix.com/locations/1894-courtyard-shops-at-wellington',
        imageSrc: '/images/neighborhoods/poi/wellington-publix.jpg',
      },
      {
        name: 'Whole Foods Market',
        category: 'Shopping',
        description: 'Full-service Whole Foods on State Road 7. Prepared foods section and Prime member savings.',
        url: 'https://www.wholefoodsmarket.com/stores/wellington',
        imageSrc: '/images/neighborhoods/poi/wellington-whole-foods.jpg',
      },
      {
        name: 'The Mall at Wellington Green',
        category: 'Shopping',
        description: "Regional mall with Macy's, Dillard's, JCPenney, H&M, and a food court.",
        url: 'https://shopwellingtongreen.com/',
        imageSrc: '/images/neighborhoods/poi/wellington-mall.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$2,200',
      rangeMax: '$6,000',
      description:
        "Wellington rents higher than the western suburbs. Larger lots, equestrian properties, and horse-country estates carry a premium, especially during equestrian season. Jose tracks what's available and can match you to the right listing.",
    },
    buyerNote: "A-rated schools, international equestrian events, and a community that has been thoughtfully built over decades. Jose has worked every neighborhood here.",
    sellerNote: "Wellington's equestrian season brings a wave of international and out-of-state buyers each winter. Jose knows when to list, and who the likely buyers will be.",
    testimonial: {
      quote: "The school zoning in Wellington is more complicated than it looks from the outside. Jose had it memorized. He could tell us which streets fell in the Binks Forest zone and what that meant for our kids long-term. That knowledge alone was worth more than any listing sheet.",
      attribution: "Jennifer & Tom H., Wellington",
    },
  },
  {
    name: 'The Acreage and Loxahatchee',
    slug: 'the-acreage',
    imageSrc: '/images/neighborhoods/the-acreage.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: '1.25-acre lots, no HOA, and 15 minutes from Wellington.',
    description:
      'The Acreage and Loxahatchee are unincorporated western Palm Beach County communities governed by the Indian Trail Improvement District, not a city or HOA. Standard lots run 1.25 acres, homes run on private wells and septic, and the character is rural: horses, chickens, space. Jose has served buyers and renters here for years, including in Arden, a newer gated agrihood in Loxahatchee built around a working 5-acre farm, resort pool, and 20 miles of trails, for those who want the land with built-in amenities.',
    highlights: [
      'Lots starting at 1.25 acres, rare space this close to Palm Beach County amenities',
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
      "When buyers ask me where they can get a real piece of land in Palm Beach County without an HOA telling them what color to paint their fence, I always point them to The Acreage. You're 15 minutes from Wellington, 20 minutes from West Palm Beach, and you come home to over an acre that's yours. For a family that wants space to raise kids, keep animals, and park the boat with no monthly fees eating into their budget, this is usually the answer.",
    lifestyleTags: [
      'No HOA',
      '1+ Acre Lots',
      'Equestrian Culture',
      '92% Owner-Occupied',
      'Rural and Spacious',
      'Well and Septic',
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
        label: 'Land and Fixer-Uppers',
        description:
          'Raw 1.25-acre lots for buyers who want to build custom, or occasionally an older home needing significant work. Cash is preferred given the well/septic and property condition. Best for buyers with the land in mind and a longer timeline.',
      },
      {
        tier: '$450K – $650K',
        label: 'Working-Family Sweet Spot',
        description:
          '3-bedroom, 2-bath CBS construction, 1,500–2,200 sq ft, 20–40 years old, on a fully fenced 1.25-acre lot. Often with a pool and a shop or garage. Many have recently replaced roofs post-storm, which is a real positive at inspection.',
      },
      {
        tier: '$650K+',
        label: 'Updated and Equestrian Properties',
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
      "Both elementary schools rate well: Frontier 8/10, Acreage Pines 7/10. Osceola Creek Middle rates 6/10. Seminole Ridge High is 4/10 overall, though it offers AP, AICE, Cambridge International, and a Biotechnology Academy worth looking at if specialized programs matter to your family.",
    pointsOfInterest: [
      {
        name: 'Acreage Community Park',
        category: 'Park',
        description:
          "25-acre ITID-run park with sports fields, a skate park, outdoor gym, playgrounds, and a synthetic turf field. Connects to the 124-acre Acreage Pines Natural Area with a boardwalk trail.",
        url: 'https://www.indiantrail.com/Home/Components/FacilityDirectory/FacilityDirectory/2/97',
        imageSrc: '/images/neighborhoods/poi/acreage-community-park.jpg',
      },
      {
        name: 'Arthur R. Marshall Loxahatchee National Wildlife Refuge',
        category: 'Park',
        description:
          "145,000 acres of Everglades ecosystem on The Acreage's eastern edge. Hiking, canoeing, fishing, and a cypress boardwalk through habitat for 250+ bird species.",
        url: 'https://www.fws.gov/refuge/arthur-r-marshall-loxahatchee',
        imageSrc: '/images/neighborhoods/poi/acreage-marshall-wildlife.jpg',
      },
      {
        name: 'JW Corbett Wildlife Management Area',
        category: 'Recreation',
        description:
          "60,000 acres of state-managed wilderness bordering The Acreage to the west. Hiking, fishing, hunting, and primitive camping.",
        url: 'https://myfwc.com/recreation/lead/j-w-corbett/',
        imageSrc: '/images/neighborhoods/poi/acreage-corbett-wma.jpg',
      },
      {
        name: 'Lion Country Safari',
        category: 'Recreation',
        description:
          "600-acre drive-through safari park on Southern Blvd, Florida's original cageless zoo, open since 1967.",
        url: 'https://www.lioncountrysafari.com/',
        imageSrc: '/images/neighborhoods/poi/acreage-lion-country-safari.jpg',
      },
      {
        name: 'Fox Trail Equestrian Community',
        category: 'Community',
        description:
          'Private equestrian neighborhood with 212 lots averaging 5 acres each and 29 miles of bridle paths on paved private roads. Most homes have stables on-site.',
        imageSrc: '/images/neighborhoods/poi/acreage-fox-trail.jpg',
      },
      {
        name: 'Acreage Athletic League',
        category: 'Community',
        description:
          "Youth sports leagues for baseball, softball, and football. Where most Acreage kids spend their weekends.",
        imageSrc: '/images/neighborhoods/poi/acreage-athletic-league.jpg',
      },
      {
        name: 'Publix at The Acreage',
        category: 'Shopping',
        description:
          "Publix at Seminole Pratt Whitney Rd and Orange Blvd. The only major grocery store inside The Acreage.",
        url: 'https://www.publix.com/locations/851-publix-at-the-acreage',
        imageSrc: '/images/neighborhoods/poi/acreage-publix.jpg',
      },
      {
        name: 'Tractor Supply Co. at Loxahatchee',
        category: 'Shopping',
        description:
          "Feed, fencing, livestock supplies, and farm equipment. The practical hardware store for The Acreage's equestrian and homesteading residents.",
        url: 'https://www.tractorsupply.com/',
        imageSrc: '/images/neighborhoods/poi/acreage-tractor-supply.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$4,800',
      description:
        "Rental inventory is limited here. Most of what's available is single-family homes on acreage. Jose has helped renters find homes here, including in Arden, for those who want the lifestyle before committing to a purchase.",
    },
    buyerNote: "No HOA. More land per dollar than anywhere in Palm Beach County. Jose knows which pockets have the infrastructure and which to approach carefully.",
    sellerNote: "Acreage homes attract a buyer profile that doesn't shop Zillow the same way. Jose knows how to reach them and price for land value, not just square footage.",
    testimonial: {
      quote: "I told Jose I wanted an acre, no HOA, and room for my horses. He didn't try to talk me out of it or steer me somewhere more convenient. He just found it.",
      attribution: "Rick B., Loxahatchee",
    },
  },
  {
    name: 'Lake Worth Beach',
    slug: 'lake-worth-beach',
    imageSrc: '/images/neighborhoods/lake-worth-beach.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'A walkable historic downtown two miles from the Atlantic, with Tri-Rail access and no-HOA bungalows still in the $400s.',
    description:
      "Lake Worth Beach is a diverse coastal city with a walkable downtown of independent restaurants, galleries, and a historic theater. Renamed from \"Lake Worth\" in 2019, it sits two miles from the Atlantic with Tri-Rail in the city limits. The city has a significant Spanish-speaking community and has long been a natural fit for Jose's multilingual practice.",
    highlights: [
      'Walkable downtown with independent dining and arts',
      'Below-median prices among Palm Beach County coastal cities',
      'Strong multilingual community, significant Spanish-speaking population',
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
      "Lake Worth Beach is the kind of place where you can walk to the beach, grab breakfast at Benny's on the pier, and still have money left over for a down payment, because unlike the towns just across the bridge, it hasn't been priced out of reach for regular families. And with Tri-Rail right in the city, buyers who commute to Fort Lauderdale or Miami can actually make this work. I've helped Spanish-speaking families plant roots here for years.",
    lifestyleTags: [
      'Walkable and Arts-Forward',
      'Tri-Rail Access',
      'Majority Renter',
      'Diverse Community',
      'Historic Bungalows',
      'Beach and Pier',
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
        label: 'Condos and Co-ops',
        description:
          "Primarily condos and co-ops, older units needing work at the low end, updated or larger units in mid-century or 55+ buildings toward the top. This is the price range where a Palm Beach County coastal city becomes accessible for most first-time buyers.",
      },
      {
        tier: '$300K – $500K',
        label: 'Townhomes and Smaller Single-Family',
        description:
          'Updated condos, townhomes, or smaller 2-3 bedroom single-family homes (900–1,500 sq ft) in established, walkable neighborhoods. Mostly 1940s–1970s construction, some needing cosmetic work. This tier rewards buyers who want character and location over square footage.',
      },
      {
        tier: '$500K+',
        label: 'Updated and Historic Single-Family',
        description:
          'Single-family homes in the more desirable pockets, updated historic bungalows, canal-front homes, or larger 3-4 bedroom houses in better condition. Ocean-side or Intracoastal-adjacent properties at the top of this range and beyond.',
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
      "Lake Worth Beach city schools serve a high-need, diverse population and post lower ratings than Jose's western neighborhoods: North Grade and South Grade Elementary both rate 5/10, Lake Worth Community Middle 3/10, and Lake Worth High 2/10, though the high school offers AP and Cambridge International programs. Families here often use Palm Beach County's school choice options; use the district's address-based locator and visit before drawing conclusions.",
    pointsOfInterest: [
      {
        name: 'Lake Worth Beach Park and Municipal Pier',
        category: 'Park',
        description:
          "City beach with a guarded stretch of sand, a fishing pier, municipal pool, and the 1920s Casino Building. Benny's on the Beach is right at the pier.",
        url: 'https://lakeworthbeachfl.gov/casino-and-beach-complex/home',
        imageSrc: '/images/neighborhoods/poi/lwb-pier.jpg',
      },
      {
        name: 'Bryant Park',
        category: 'Park',
        description:
          'Waterfront park on the Intracoastal with a bandshell, boat ramp, fishing pier, and horseshoe pits. Free to use, with live music events year-round.',
        url: 'https://lakeworthbeachfl.gov/locations/bryant-park',
        imageSrc: '/images/neighborhoods/poi/lwb-bryant-park.jpg',
      },
      {
        name: 'Downtown Lake Avenue and Lucerne Avenue',
        category: 'Dining',
        description:
          'Independent restaurants, galleries, coffee shops, and boutiques across about ten walkable blocks, plus the Street Painting Festival every February.',
        imageSrc: '/images/neighborhoods/poi/lwb-downtown.jpg',
      },
      {
        name: 'Lake Worth Playhouse',
        category: 'Community',
        description:
          'Community theater on Lake Avenue in the oldest surviving Art Deco building in Palm Beach County, with plays, concerts, and film events.',
        url: 'https://lakeworthplayhouse.org/',
        imageSrc: '/images/neighborhoods/poi/lwb-playhouse.jpg',
      },
      {
        name: 'Snook Islands Natural Area',
        category: 'Park',
        description:
          '100+ acres of restored wetland on the Lake Worth Lagoon with a boardwalk, kayak launch, and fishing pier. Free to visit.',
        url: 'https://discover.pbc.gov/erm/NaturalAreas/Snook-Islands.aspx',
        imageSrc: '/images/neighborhoods/poi/lwb-snook-islands.jpg',
      },
      {
        name: 'John Prince Memorial Park',
        category: 'Recreation',
        description:
          '726-acre county park on Lake Osborne with a campground, 4.5-mile biking trail, boating, sports courts, splash park, and a five-section dog park.',
        url: 'https://johnprincepark.com/',
        imageSrc: '/images/neighborhoods/poi/lwb-john-prince-park.jpg',
      },
      {
        name: 'Publix at Lake Worth',
        category: 'Shopping',
        description:
          'Publix on N Dixie Hwy, walkable from most of the residential core, with a strong selection of Spanish-language foods.',
        url: 'https://www.publix.com/locations/1384-publix-at-lake-worth',
        imageSrc: '/images/neighborhoods/poi/lwb-publix.jpg',
      },
      {
        name: 'Cultural Council for Palm Beach County',
        category: 'Community',
        description:
          "The county's arts agency, headquartered in a restored 1920s building on Lake Avenue, with rotating gallery exhibitions and public art programs.",
        url: 'https://www.culturalcouncilpbc.org/',
        imageSrc: '/images/neighborhoods/poi/lwb-cultural-council.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '$1,800',
      rangeMax: '$3,400',
      description:
        "With 54% of residents renting, the rental market here defines the city as much as ownership does. Pricing varies by proximity to downtown and the waterfront. Reach out to Jose for current availability.",
    },
    buyerNote: "Walkable downtown, a historic beach casino, Tri-Rail access, and no-HOA bungalows still starting in the $400s. Not many coastal cities in South Florida offer that combination at this price. Jose has worked this market for years.",
    sellerNote: "With 54% of residents renting, Lake Worth Beach draws both owner-occupant buyers and investors. Jose knows how to position a listing for both audiences.",
    testimonial: {
      quote: "I rented in Lake Worth Beach for almost two years before I bought here. I liked the neighborhood enough that I didn't want to leave when my lease was up. Jose walked me through what buying actually looked like and the numbers worked out. Three years later, still here.",
      attribution: "Christine L., Lake Worth Beach",
    },
  },
  {
    name: 'Boynton Beach',
    slug: 'boynton-beach',
    imageSrc: '/images/neighborhoods/boynton-beach.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Lower median price than Delray Beach and Lake Worth Beach, with 55+ condos under $200K, single-family homes in the $400s, and a municipal beach.',
    description:
      "Boynton Beach sits between Delray Beach and Lake Worth Beach with a lower median price than both, a wide mix of housing types from 55+ condos to western gated communities, and a municipal beach residents can park at year-round for $65. The Federal Highway corridor is mid-redevelopment, with 500 Ocean already built and more retail and residential coming. The city has a significant Haitian and Spanish-speaking community, and Jose works in both.",
    highlights: [
      'Lower median price than Delray Beach and Lake Worth Beach',
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
    joseNote: "Boynton Beach has the widest range of options of any city I work in. A $150,000 condo in a 55+ building and a $750,000 home in a gated community on the west side are both Boynton Beach. I've helped Haitian families settle near Seacrest, Latin families near Congress, and families from up north who want the beach without the Delray price. The Federal Highway corridor has been changing fast and I've watched what that's done to values in the streets around it.",
    lifestyleTags: [
      'Family-Friendly',
      'Diverse Community',
      'Federal Highway Redevelopment',
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
        label: 'Condos and Townhomes',
        description:
          'Mostly 55+ age-restricted condos and co-ops in older communities, with HOA fees as low as $175/month in places like Leisureville. Expect age restrictions on most options in this range, not typically single-family.',
      },
      {
        tier: '$300K – $500K',
        label: 'Single-Family Homes',
        description:
          '3BR/2BA homes built 1980s–2000s in established neighborhoods, often with updated kitchens or roofs, right around the citywide median. This is where most family buyers land.',
      },
      {
        tier: '$500K+',
        label: 'Newer Construction and Gated Communities',
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
      "Boynton Beach's strongest anchor is Citrus Cove Elementary (7/10), which runs a Gifted & Talented magnet program. Congress Middle and Boynton Beach High both rate 3/10 on aggregate test scores, though both offer Cambridge International, AP, and Project Lead The Way magnet tracks, worth visiting in person rather than judging by the headline number alone. Actual school zoning varies significantly across the city's multiple zip codes; verify your specific address with the Palm Beach County school locator before drawing conclusions.",
    pointsOfInterest: [
      {
        name: 'Congress Avenue Barrier Free Park',
        category: 'Park',
        description:
          'Fully accessible 14-acre park on S. Congress Ave. with a splash pad, three themed play areas, and ADA trails. Named one of the top 10 public playgrounds in the US by USA Today.',
        url: 'https://www.boynton-beach.org/parks-recreation',
        imageSrc: '/images/neighborhoods/poi/bb-barrier-free-park.jpg',
      },
      {
        name: 'Ezell Hester Jr. Community Center and Park',
        category: 'Community',
        description:
          'Community center at N. Seacrest Blvd. serving the city\'s northeast neighborhoods, with a gym, weight room, basketball, tennis, racquetball, pickleball, and a sports field.',
        url: 'https://www.boynton-beach.org/parks-recreation/community-centers',
        imageSrc: '/images/neighborhoods/poi/bb-ezell-hester.jpg',
      },
      {
        name: 'Jaycee Park',
        category: 'Park',
        description:
          'Small park on the Intracoastal with walking paths and waterfront views. Free to use.',
        imageSrc: '/images/neighborhoods/poi/bb-jaycee-park.jpg',
      },
      {
        name: 'Caloosa Park',
        category: 'Recreation',
        description:
          '64-acre park near Woolbright and Congress with tennis, softball, a roller rink, basketball, pickleball, a fishing lake, and picnic pavilions.',
        imageSrc: '/images/neighborhoods/poi/bb-caloosa-park.jpg',
      },
      {
        name: 'Oceanfront Park',
        category: 'Park',
        description:
          'City-operated guarded beach at N. Ocean Blvd. with a boardwalk, grills, playground, and concessions. Parking is $3.50/hour or $65/year.',
        imageSrc: '/images/neighborhoods/poi/bb-oceanfront-park.jpg',
      },
      {
        name: 'Boynton Lakes Plaza Corridor',
        category: 'Shopping',
        description:
          'Congress Avenue corridor with Publix, Costco, Walmart, L.A. Fitness, CVS, and Walgreens, plus everyday retail and dining.',
        imageSrc: '/images/neighborhoods/poi/bb-plaza-corridor.jpg',
      },
    ],
    rentalMarket: {
      active: false,
      rangeMin: '',
      rangeMax: '',
      description: '',
    },
    buyerNote: "Lower median price than both Delray Beach and Lake Worth Beach, with a wider range of housing types than either, from 55+ condos in the $100s to newer gated homes in the $600s. Jose has worked this market long enough to know which streets have moved and which haven't.",
    sellerNote: "Boynton Beach prices run below Delray and Boca on comparable product. Positioning matters here. Jose knows how buyers shop across Boynton's zip codes and will price accordingly.",
    testimonial: {
      quote: "We weren't expecting to fall in love with Boynton Beach. Jose took us down to the marina area and through a few streets we never would have found on our own. We put in an offer within the week. We just closed on our second property here last spring.",
      attribution: "Kevin & Yolanda R., Boynton Beach",
    },
  },
  {
    name: 'Delray Beach',
    slug: 'delray-beach',
    imageSrc: '/images/neighborhoods/delray-beach.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Atlantic Avenue runs from I-95 to the ocean, putting restaurants, galleries, and a Blue Flag beach on one walkable street.',
    description:
      "Delray Beach has a walkable downtown where Atlantic Avenue runs east from I-95 to the ocean, with restaurants, galleries, and boutiques along the way. Housing ranges from 55+ condos in the $100s to Intracoastal estates over $2M. The city skews older, with a median age of 51, and has a significant Black community concentrated west of Swinton Avenue. The east-west divide shapes both pricing and neighborhood character.",
    highlights: [
      'Walkable Atlantic Avenue arts and dining district',
      'Blue Flag municipal beach with annual parking permits at $90',
      'Morikami Museum and Wakodahatchee Wetlands, both in western Delray',
      'Price range from 55+ condos under $200K to Intracoastal estates over $2M',
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
    joseNote: "Delray is one of the places where the reputation matches the walk. Atlantic Avenue actually works as a walkable street, which most South Florida corridors don't. What I tell buyers is that the east-west divide matters more than most listings let on. East of Swinton you're paying for proximity to the beach and the avenue. West of Swinton you're getting more house for the dollar.",
    lifestyleTags: [
      'Walkable and Arts-Forward',
      'Blue Flag Beach',
      'Historic Downtown',
      'Wide Price Range',
      'Lifestyle and Leisure',
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
          'Primarily age-restricted communities on the far west side, Kings Point and similar developments where one-bedroom units have listed near $90K and two-bedrooms near $150K. Not representative of the general family-buyer market; largely retirement-oriented with strict HOA age restrictions.',
      },
      {
        tier: '$300K – $550K',
        label: 'Condos, Townhomes and Entry SF',
        description:
          'Condos, townhomes, or smaller single-family homes generally west of I-95, in neighborhoods like Lake Ida. This bracket roughly tracks the citywide blended median sale price.',
      },
      {
        tier: '$550K – $1M',
        label: 'Single-Family West of I-95',
        description:
          'The core single-family market in most non-luxury Delray Beach neighborhoods, particularly west of I-95 in newer or well-maintained suburban pockets. Closer to downtown or east of Swinton, list prices push toward the top of this range and beyond.',
      },
      {
        tier: '$1M+',
        label: 'Waterfront, Downtown and Premium East Side',
        description:
          'Intracoastal, oceanfront, and premium downtown single-family homes in neighborhoods like Tropic Isle and The Oaks, where prices range from $2M to well over $3M.',
      },
    ],
    schools: [
      {
        name: 'Morikami Park Elementary School',
        level: 'Elementary',
        rating: '10/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/2366-Morikami-Park-Elementary-School/',
      },
      {
        name: 'S.D. Spady Elementary School',
        level: 'Elementary',
        rating: '7/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/2254-S.-D.-Spady-Elementary-School/',
      },
      {
        name: 'Carver Middle School',
        level: 'Middle',
        rating: '3/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/2329-Carver-Middle-School/',
      },
      {
        name: 'Atlantic High School',
        level: 'High',
        rating: '4/10',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/delray-beach/2252-Atlantic-High-School/',
      },
    ],
    schoolNote:
      "Delray schools split sharply by grade level: Morikami Park Elementary rates 10/10; Spady Elementary rates 7/10 with a Montessori magnet. Carver Middle rates 3/10 despite an IB World School designation; Atlantic High rates 4/10 overall but has run one of the county's IB programs since 1989. Zoning varies by address; use the district locator to confirm your zone.",
    pointsOfInterest: [
      {
        name: 'Atlantic Avenue and Old School Square',
        category: 'Dining',
        description:
          'Atlantic Avenue runs east from I-95 to the ocean, lined with restaurants, galleries, and boutiques, with the Cornell Museum at Old School Square on Atlantic and Swinton.',
        url: 'https://oldschoolsquare.org/',
        imageSrc: '/images/neighborhoods/poi/db-atlantic-avenue.jpg',
      },
      {
        name: 'Atlantic Dunes Park',
        category: 'Park',
        description:
          'Beach access at S. Ocean Blvd. with a dune boardwalk, pavilion, picnic tables, and lifeguards on duty.',
        url: 'https://www.delraybeachfl.gov/Home/Components/FacilityDirectory/FacilityDirectory/44/194',
        imageSrc: '/images/neighborhoods/poi/db-atlantic-dunes.jpg',
      },
      {
        name: 'Pompey Park',
        category: 'Recreation',
        description:
          '17.5-acre community park at NW 2nd St. with a gym, basketball, tennis, baseball fields, a pool, and an auditorium.',
        url: 'https://www.delraybeachfl.gov/Home/Components/FacilityDirectory/FacilityDirectory/102/194?npage=2',
        imageSrc: '/images/neighborhoods/poi/db-pompey-park.jpg',
      },
      {
        name: 'Leon M. Weekes Environmental Preserve',
        category: 'Park',
        description:
          'Scrubland preserve off Barwick Rd. with walking trails and birdwatching, a Florida-native habitat in the middle of a built-out coastal city.',
        url: 'https://www.delraybeachfl.gov/Home/Components/FacilityDirectory/FacilityDirectory/84/194?npage=2',
        imageSrc: '/images/neighborhoods/poi/db-leon-weekes.jpg',
      },
      {
        name: 'Banyan Creek Park',
        category: 'Park',
        description:
          'Neighborhood park off Germantown Rd. with picnic areas, playgrounds, walking trails, and shade from mature banyan trees.',
        url: 'https://banyancreekgc.com/',
        imageSrc: '/images/neighborhoods/poi/db-banyan-creek.jpg',
      },
      {
        name: 'Publix, Trader Joe\'s and Whole Foods Corridor',
        category: 'Shopping',
        description:
          'Multiple Publix locations on W Atlantic Ave., with a Trader Joe\'s at Linton Blvd. and a Whole Foods at Glades and Jog, covering most of the city without a long drive.',
        imageSrc: '/images/neighborhoods/poi/db-shopping-corridor.jpg',
      },
    ],
    rentalMarket: {
      active: false,
      rangeMin: '',
      rangeMax: '',
      description: '',
    },
    buyerNote: "Delray has a real east-west split in both price and character. Starter condos west of I-95 and oceanfront estates east of A1A are very different conversations. Jose has worked both sides and can help buyers understand where the value actually sits.",
    sellerNote: "Delray Beach prices run above most of its Palm Beach County neighbors, but values vary significantly by street. Jose's free CMA shows exactly where your home sits in today's market.",
    testimonial: {
      quote: "Delray had already decided for me before I ever thought about buying. Every visit made it harder to leave. When I finally called Jose to ask if I could actually afford it, it turned out I could. I've lived here two years now and haven't thought about renting since.",
      attribution: "Diane F., Delray Beach",
    },
  },
  {
    name: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens',
    imageSrc: '/images/neighborhoods/palm-beach-gardens.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Marsh Pointe and Timber Trace Elementary both rate 10/10. PGA National is in the backyard.',
    description:
      "Palm Beach Gardens is a planned city of 61,000 built around a championship golf identity that has grown into a full-service suburban community with a wide range of housing, from golf-community condos to newer single-family subdivisions. Marsh Pointe and Timber Trace Elementary are among the top-rated public elementary schools in Palm Beach County. The Gardens Mall, Legacy Place, and PGA Commons put retail and dining within the city without a highway drive.\n\nThe trade-offs are real. The median resident age of 51.8 skews toward active adults and retirees; the energy is quieter than Jupiter, and the beach is a 15-minute drive rather than a walk. A family budget under $550,000 now buys a condo or older townhome rather than a move-in-ready single-family home with a yard, and HOA fees in golf communities add meaningfully to monthly costs. The high school carries a 3/10 GreatSchools rating, a real concern for families with teenagers, even accounting for its Cambridge and AP magnet programs. Many families with high-school-aged children in PBG supplement with Benjamin School, Oxbridge Academy, or other private options. For K–8 families, few cities in Palm Beach County can match the public school options at this price point.",
    highlights: [
      'Marsh Pointe and Timber Trace Elementary each hold a 10/10 GreatSchools rating',
      'PGA National Resort, host of the annual Cognizant Classic PGA Tour event',
      'The Gardens Mall, Nordstrom, Bloomingdale\'s, and 160+ stores',
      'Legacy Place, open-air dining and shopping anchored by Whole Foods',
      'PGA National, BallenIsles, and Mirasol offer bundled golf, pools, and tennis within gated communities',
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
      "Palm Beach Gardens is where I send families relocating from the Northeast who want good elementary schools and don't want to deal with a long commute to retail. Marsh Pointe and Timber Trace are two of the highest-rated public elementary schools in Palm Beach County. The Gardens Mall and Legacy Place handle most errands without leaving the city. The conversation I have with buyers who have high-school-aged kids is straightforward: PBG High is a 3/10, and they should budget Benjamin School or Oxbridge Academy into their monthly costs before committing.",
    lifestyleTags: [
      'Top-Rated Elementary Schools',
      'Golf Communities',
      'Family Suburbs',
      'PGA National',
      'Shopping and Dining Hub',
      'Active Adult and Retiree Mix',
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
        label: 'Golf Community Condos and Townhomes',
        description:
          "Condos and townhomes in communities such as PGA National, The Club at Ibis, or BallenIsles, typically 1–3 bedrooms, 1,000–1,800 sq ft, with access to resort pools, fitness centers, and golf amenities. HOA fees in bundled golf communities can run $800–$1,200/month and meaningfully affect the true monthly cost, verify dues and included amenities before comparing to condo prices in other cities.",
      },
      {
        tier: '$550K – $850K',
        label: 'Single-Family Homes, Family Sweet Spot',
        description:
          'Single-family homes in Evergrene, Bent Tree, Mirasol\'s non-golf sections, or newer northern subdivisions. Buyers find 3–4 bedrooms and 1,800–2,800 sq ft, private yards, and proximity to the 10/10-rated elementary schools. This bracket draws the most family buyers and moves faster than the condo tier.',
      },
      {
        tier: '$850K – $2.5M+',
        label: 'Premium Golf and Gated Communities',
        description:
          'Larger homes in Mirasol, BallenIsles, Old Palm, and Alton\'s custom-home sections. Buyers find 4–6 bedrooms, 3,000+ sq ft, lake or golf course views, pools, and private club access. New construction at Alton covers the upper end; resale at Mirasol and BallenIsles offers more options across a wider price range within the tier.',
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
      "Marsh Pointe and Timber Trace Elementary both hold 10/10 GreatSchools ratings and offer gifted programming. Watson B. Duncan Middle is rated 8/10. Palm Beach Gardens High is rated 3/10, a metric weighted toward equity and proficiency across its full student population. The school does offer Cambridge International and AP tracks. Many families with high-school-aged children in PBG enroll at Benjamin School or Oxbridge Academy instead. Use the district's school locator to confirm attendance boundaries before making an offer.",
    pointsOfInterest: [
      {
        name: 'PGA National Resort',
        category: 'Recreation',
        description:
          'Five championship courses anchored by The Champion, host of the annual Cognizant Classic PGA Tour event, plus a full resort spa, racquet sports, and hotel amenities.',
        url: 'https://www.pgaresort.com/',
        imageSrc: '/images/neighborhoods/poi/pbg-pga-national.jpg',
      },
      {
        name: 'The Gardens Mall',
        category: 'Shopping',
        description:
          'Regional mall anchored by Nordstrom, Bloomingdale\'s, Saks Fifth Avenue, and Macy\'s, with 160+ specialty shops and restaurants.',
        url: 'https://thegardensmall.com/',
        imageSrc: '/images/neighborhoods/poi/pbg-gardens-mall.jpg',
      },
      {
        name: 'Legacy Place',
        category: 'Dining',
        description:
          'Open-air lifestyle center on PGA Blvd. anchored by Whole Foods, with 40+ shops and restaurants covering most everyday errands without leaving the neighborhood.',
        url: 'https://www.shoplegacyplace.com/',
        imageSrc: '/images/neighborhoods/poi/pbg-legacy-place.jpg',
      },
      {
        name: 'Loggerhead Marinelife Center',
        category: 'Community',
        description:
          'Sea turtle rescue and rehabilitation center in Juno Beach, free to visit, with viewing tanks, educational programs, and release events by reservation.',
        url: 'https://marinelife.org/',
        imageSrc: '/images/neighborhoods/poi/pbg-loggerhead.jpg',
      },
      {
        name: 'Gardens Park',
        category: 'Park',
        description:
          "Municipal park at Burns Rd. with baseball and softball fields, sand volleyball, playgrounds, and a paved loop trail.",
        url: 'https://www.pbgfl.gov/605/Parks',
        imageSrc: '/images/neighborhoods/poi/pbg-gardens-park.jpg',
      },
      {
        name: 'Riverbend Park',
        category: 'Park',
        description:
          '10+ miles of unpaved trails for hiking, biking, and kayaking along the Wild and Scenic Loxahatchee River, in neighboring Jupiter about 10 minutes from most PBG neighborhoods.',
        url: 'https://discover.pbcgov.org/parks/pages/riverbend.aspx',
        imageSrc: '/images/neighborhoods/poi/pbg-riverbend-park.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Golf communities attract seasonal renters, mostly snowbirds renting 3–6 months while evaluating a permanent purchase. Apartment complexes along I-95 serve young professionals working across the county. About 27% of housing units are renter-occupied, and demand runs year-round.",
    },
    buyerNote: "Marsh Pointe and Timber Trace at 10/10, PGA National out the back door, and The Gardens Mall and Legacy Place covering retail without a long drive. For families with elementary-age kids, the infrastructure case is strong. Buyers with teenagers need to do the high school math before committing.",
    sellerNote: "Palm Beach Gardens inventory has grown, giving sellers more competition than in 2022–2023. Jose's free CMA shows where your home sits and what pricing strategy moves it at full value.",
    testimonial: {
      quote: "We moved from Miami-Dade in 2022 and were skeptical. Everyone told us Palm Beach Gardens was for retirees. Then our kids started at Timber Trace and Marsh Pointe and we just stopped questioning it. The schools are something else.",
      attribution: "Homeowner in Palm Beach Gardens since 2022",
    },
  },
  {
    name: 'Jupiter',
    slug: 'jupiter',
    imageSrc: '/images/neighborhoods/jupiter.jpg',
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: 'Strong public schools K–12, the Loxahatchee River, and less density than anywhere south of here.',
    description:
      "Jupiter is a town of 62,000 wedged between the Atlantic, the Wild and Scenic Loxahatchee River, and Jonathan Dickinson State Park. The geography limits density and keeps the scale small for a city its size. Weekend life runs toward kayaking the river, fishing from the pier, hiking the park system, catching spring training games, and biking through Abacoa.\n\nThe public school system runs from Beacon Cove Intermediate at 10/10 through both middle schools at 8/10 to Jupiter High at 7/10, with Cambridge AICE and AP programming at the high school level. That K–12 arc is one of the few in Palm Beach County where families don't need to factor in private school costs at every stage.\n\nThe trade-offs are real. There is no luxury retail center; real shopping means a drive to Palm Beach Gardens or Boca. US-1 traffic through the core is slow at peak hours. The waterfront premium is steep: a home with Loxahatchee River access or ocean views runs $500,000–$1,000,000 more than an inland comparable. Sub-$500,000 buys a condo or townhome, not a single-family home.",
    highlights: [
      'Beacon Cove Intermediate 10/10, both middle schools 8/10, Jupiter High 7/10 with Cambridge AICE',
      'Loxahatchee River with Wild and Scenic federal designation for kayaking, fishing, and paddle tours',
      'Jonathan Dickinson State Park, 11,500 acres, largest state park in Southeast Florida',
      'Abacoa Town Center with a Saturday farmers market and walkable restaurants',
      'DuBois Park, 18-acre inlet park with a guarded snorkeling lagoon and kayak access',
      'No high-rise density; population of 62,000 spread across a low-rise town footprint',
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
      "Jupiter is the town I point families to when they want strong public schools all the way through high school, not just elementary. That K–12 arc from Beacon Cove's 10/10 through Jupiter High's 7/10 is real, not marketing. The outdoor access is also real: the river, Jonathan Dickinson, DuBois Park at the inlet, Guanabanas on the water. The market has gotten more expensive. Under $500K is condos, not single-family. Families that can get to $600K will find more options here than in most towns at that price point in the county.",
    lifestyleTags: [
      'Natural Florida',
      'Beach and River Access',
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
        label: 'Condos and Townhomes',
        description:
          'Condos and townhomes in communities like Abacoa or Jupiter Country Club\'s attached-home sections, 2–3 bedrooms in well-maintained communities with shared pools, fitness centers, and walkable neighborhoods. Inventory in this bracket is limited and typically draws multiple offers within the first week.',
      },
      {
        tier: '$550K – $825K',
        label: 'Single-Family Homes, Family Sweet Spot',
        description:
          'Single-family homes in Abacoa, Egret Landing, Shores at Jupiter, or established neighborhoods near the river. Buyers find 3–4 bedrooms, 1,800–2,600 sq ft, mature landscaping, and proximity to the rated schools. Inventory here moves faster than the condo tier and draws the most family buyers.',
      },
      {
        tier: '$825K+',
        label: 'Waterfront and Intracoastal',
        description:
          'Waterfront and Intracoastal-view homes along the Loxahatchee River or near the Jupiter Inlet, plus new construction in gated communities. Buyers find 4–6 bedrooms, often with a pool and private boat dock. True ocean-view estates approach $5M–$10M and above.',
      },
    ],
    schools: [
      {
        name: 'Jerry Thomas Elementary School',
        level: 'Elementary',
        rating: '7/10',
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
      "Beacon Cove Intermediate rates 10/10. Both middle schools rate 8/10. Jupiter High rates 7/10, runs a Cambridge AICE diploma program alongside AP, and has earned College Success Awards in multiple years with an 87% attendance rate. Jerry Thomas Elementary rates 7/10. Note that Jupiter's elementary system uses a K–2 and grades 3–5 split at some campuses; verify the feeder pattern for your specific address using the district's school locator. Both middle schools offer Gifted and Talented programs.",
    pointsOfInterest: [
      {
        name: 'Jonathan Dickinson State Park',
        category: 'Park',
        description:
          '11,500-acre state park with coastal scrub, cypress swamp, river floodplain, and Intracoastal shoreline; activities include boat tours, kayaking, hiking, and camping.',
        url: 'https://www.floridastateparks.org/parks-and-trails/jonathan-dickinson-state-park',
        imageSrc: '/images/neighborhoods/poi/jup-jonathan-dickinson.jpg',
      },
      {
        name: 'Riverbend Park',
        category: 'Park',
        description:
          'Ten-plus miles of unpaved trails through subtropical scrub and cypress along the Wild and Scenic Loxahatchee River, with guided paddle tours on weekends.',
        url: 'https://discover.pbcgov.org/parks/pages/riverbend.aspx',
        imageSrc: '/images/neighborhoods/poi/jup-riverbend.jpg',
      },
      {
        name: 'DuBois Park',
        category: 'Park',
        description:
          '18-acre park at the Jupiter Inlet where the Loxahatchee meets the Atlantic, with a guarded snorkeling lagoon, kayak and canoe access, a boat ramp, and views of the inlet lighthouse.',
        url: 'https://www.jupiter.fl.us/facilities/facility/details/Dubois-Park-64',
        imageSrc: '/images/neighborhoods/poi/jup-dubois-park.jpg',
      },
      {
        name: 'Abacoa Town Center',
        category: 'Community',
        description:
          'Walkable village center with independent restaurants, coffee shops, and a Saturday farmers market surrounding a town square and event lawn.',
        url: 'https://www.abacoa.com/',
        imageSrc: '/images/neighborhoods/poi/jup-abacoa.jpg',
      },
      {
        name: 'Jupiter Inlet Lighthouse and Museum',
        category: 'Community',
        description:
          'Working lighthouse built in 1860 with 105 steps to panoramic inlet views, plus a museum covering Florida maritime history and the Seminole people of the region.',
        url: 'https://www.jupiterlighthouse.org/',
        imageSrc: '/images/neighborhoods/poi/jup-inlet-lighthouse.jpg',
      },
      {
        name: 'Guanabanas',
        category: 'Dining',
        description:
          'Open-air waterfront restaurant on the Loxahatchee River with fresh fish, island-inspired dishes, and craft cocktails; open since 2004.',
        url: 'https://guanabanas.com/',
        imageSrc: '/images/neighborhoods/poi/jup-guanabanas.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "About 21.5% of housing units are renter-occupied, lower than most surrounding cities. Most rental households are families renting while searching for a home to buy. Single-family rentals and townhomes make up most of the inventory; purpose-built apartment buildings are limited.",
    },
    buyerNote: "Beacon Cove at 10/10 through Jupiter High at 7/10 with Cambridge AICE. That K–12 public arc is real and uncommon in Palm Beach County. The river, Jonathan Dickinson, and DuBois Park are all within the town footprint. Jose has worked every corner of this market and knows which streets carry a waterfront premium worth paying and which don't.",
    sellerNote: "School-driven demand keeps buyer activity consistent across price points in Jupiter, particularly in the $550K–$825K family bracket. Jose's free CMA shows exactly where your home sits in today's market.",
    testimonial: {
      quote: "I rented in Abacoa for a year just to test it. Then I saw the market move and called Jose. We closed on a townhouse the following spring. I bike to Harborside now and I still can't believe I actually live here.",
      attribution: "Resident of Jupiter since 2023",
    },
  },
  {
    name: 'Palm Beach',
    slug: 'palm-beach',
    hidden: true,
    county: 'Palm Beach',
    region: 'Palm Beach County',
    tagline: '4.2 square miles, bounded by water, 84% cash transactions, and a fixed supply that has not changed in a century.',
    description:
      "The Town of Palm Beach is not a neighborhood in any conventional sense. It is a 4.2-square-mile barrier island municipality that functions as one of the most exclusive residential enclaves in the United States, a community whose physical supply cannot be expanded, whose social architecture was established over a century, and whose wealth has become self-reinforcing in ways most American cities have never experienced. Approximately 58 billionaires maintain residences here. The year-round population of 9,400 expands to nearly 30,000 during the October-through-April social season, when the island's clubs, cultural institutions, charitable galas, and real estate market operate at full intensity.\n\nFor the buyer who qualifies, Palm Beach offers something without a direct American equivalent: a recognized American aristocratic address, Florida's zero state income tax, streets maintained under direct municipal control, and private club access that provides the island's real social infrastructure. Everglades Club, Bath and Tennis Club, and Mar-a-Lago anchor a social life that is entry-gated in ways the real estate itself only partially reflects. The built environment of Addison Mizner-designed Spanish-Moorish architecture cannot be replicated, and the Town's strict architectural controls are not a burden for buyers who understand them; they are the mechanism that has preserved the island's character and, therefore, its value.\n\nWhat this market is not: a family neighborhood. The median resident age of 70.4 is not a coincidence. There are no public middle or high schools in the town limits. The minimum 90-day rental rule and the prohibition on short-term rentals mean there is no Airbnb market and no transient investor profile. Approximately 84% of all transactions close in cash with no mortgage contingency. For the international high-net-worth buyer, relocating from New York, London, São Paulo, or Paris, Palm Beach represents a convergence of tax efficiency, physical beauty, and social structure that the American real estate market offers in very few other locations.",
    highlights: [
      'Worth Avenue, Chanel, Gucci, Hermès, Cartier, and galleries in Addison Mizner architecture',
      'Zero Florida state income tax, the primary driver for most high-net-worth relocators',
      '4.2 square miles, bounded by water, fixed footprint, permanent supply constraint',
      '84% of transactions close in cash, no mortgage contingency is standard',
      'October–April social season, clubs, galas, and philanthropy events',
      'The Breakers, Four Arts, and Flagler Museum anchoring a concentrated cultural calendar from October through April',
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
      "The Town of Palm Beach is where I serve South American buyers and international clients who want the security and prestige of the island without going in blind. The off-market dynamic here is real, most significant sales never hit MLS, and relationships matter more than Zillow searches. I can facilitate introductions to the right brokers and help clients understand what they're actually looking at before they commit. The minimum buy-in for a meaningful acquisition starts around $3M; under that, you're looking at condos in the south end or co-ops that require board approval. Everything above $8M requires patience and discretion.",
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
      lastUpdated: 'May 2026 (Redfin, note: small transaction count makes quarterly figures volatile)',
    },
    budgetGuide: [
      {
        tier: '$1.5M – $3M',
        label: 'Condos and Entry Single-Family',
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
        label: 'Trophy Estates and Oceanfront',
        description:
          'Estate Section Mizner-designed properties, oceanfront and ocean-to-lake parcels, North End compounds, and properties with direct beach access. Multiple transactions have exceeded $80M in recent years. The island\'s fixed footprint means supply is permanently constrained. Approximately 84% of transactions close in cash.',
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
      "The Town of Palm Beach has one public school within its boundaries, Palm Beach Public, a magnet PK–5 with Gifted and Talented programming and an 8/10 GreatSchools rating. There are no public middle or high schools in the town. In practice, families with school-age children use Palm Beach Day Academy (established 1921, PK–8, tuition in the $39,000–$41,000 range) or Oxbridge Academy in West Palm Beach for older students. The resident population's median age of 70.4 means school-age families are a small minority; most buyers in this market are not selecting it for school-district access.",
    pointsOfInterest: [
      {
        name: 'Worth Avenue',
        category: 'Shopping',
        description:
          'Four-block shopping corridor in Addison Mizner architecture with Chanel, Gucci, Louis Vuitton, Hermès, Cartier, and dozens of galleries and fine art dealers.',
        url: 'https://www.worth-avenue.com/',
      },
      {
        name: 'The Breakers',
        category: 'Recreation',
        description:
          'National Historic Landmark hotel founded in 1896 and rebuilt in Italian Renaissance form in 1926, with two championship golf courses, a half-mile of private beach, a spa, and 10 dining venues.',
        url: 'https://www.thebreakers.com/',
      },
      {
        name: 'Henry Morrison Flagler Museum',
        category: 'Community',
        description:
          "Henry Flagler's 1902 mansion, now a National Historic Landmark museum with 75 rooms of Gilded Age decorative arts, architecture, and Florida railroad history.",
        url: 'https://www.flaglermuseum.us/',
      },
      {
        name: 'The Society of the Four Arts',
        category: 'Community',
        description:
          'Nonprofit cultural institution founded in 1936 with a gallery series, concert hall, botanical garden, sculpture garden, and library, running its main programming November through April.',
        url: 'https://www.fourarts.org/',
      },
      {
        name: 'Palm Beach Bicycle Trail',
        category: 'Recreation',
        description:
          'Approximately 6-mile paved path along the Lake Worth (Intracoastal) side of the island, traffic-separated and shaded, passing through historic residential streets. Bicycle rental available near Worth Avenue.',
        url: 'https://www.townofpalmbeach.com/',
      },
      {
        name: 'Phipps Ocean Park',
        category: 'Park',
        description:
          "Public oceanfront park on the south end of the island with beach access, green space, and picnic areas; one of the few points of free public ocean access in town.",
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
    buyerNote: "The Town of Palm Beach is off-market and relationship-driven. Most significant sales never reach MLS. Jose works with South American buyers and international clients in this market and can facilitate introductions to the right brokers for your specific situation.",
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
    imageSrc: '/images/neighborhoods/davie.jpg',
    county: 'Broward',
    region: 'Broward County',
    tagline: "More house and more land than coastal Broward, with equestrian zoning and Nova Southeastern anchoring the west side.",
    description:
      "Davie occupies an unusual position in Broward County: a town of over 112,000 that has deliberately preserved its horse-country character even as it grew into a fully suburban city. Equestrian zoning protects riding trails along residential streets in designated sections, Bergeron Grounds hosts Wednesday jackpot rodeos and a handful of PRCA events each year, and ranch-style homes on larger lots remain available at prices impossible in coastal Broward. The Latino community, drawn heavily from Venezuela, Colombia, and Central America, gives Davie's commercial corridors, restaurants, and social fabric a South American cultural character that distinguishes it from whiter, more insular Broward suburbs.\n\nNova Southeastern University's campus provides a stable professional and academic anchor, employment base, and rental demand that protects the market against the seasonal volatility that affects beach cities. The South Florida Education Center corridor (Nova Southeastern, Broward College, and FAU's Davie campus in close proximity) reinforces this dynamic. Commutes to downtown Fort Lauderdale, Miami, and Boca Raton are all managed via I-595 and the Florida Turnpike.\n\nThe honest tradeoffs: Davie is not walkable, and almost nothing is accessible without a car. Traffic on University Drive and Davie Road can be heavy. The median home price has climbed above $500K, which means buyers under $420K will be looking at condos rather than the single-family homes that define the neighborhood's character. HOA fees in condo and gated communities can significantly affect true monthly cost. The eastern sections near the Broward College campus feel denser and more urban; the western sections near the Everglades edge are quieter and more rural, these micro-zones carry meaningfully different lifestyles, and buyers should tour both.",
    highlights: [
      'Equestrian zoning, horse trails protected by town ordinance in designated areas',
      'Nova Southeastern University, major employment anchor and year-round rental demand',
      'Larger lots at lower prices than coastal Broward cities',
      'Strong Latino community, Venezuelan, Colombian, and Central American cultural presence',
      'Flamingo Gardens, 60-acre botanical garden and Everglades wildlife sanctuary',
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
      "Davie is where my Venezuelan and Colombian clients feel most at home in Broward County. The community is there, the restaurants are there, and the space the beach cities can't offer at this price is there. The NSU campus means stable rental demand and a workforce that keeps values from swinging seasonally. I always make sure buyers understand the HOA situation in the gated communities before they commit; the dues can significantly change the real monthly cost.",
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
        label: 'Condos and Townhomes',
        description:
          'Most budget options at this tier are 2–3BR condos or townhomes near University Drive, Stirling Road, and I-595, often 1980s–90s construction with original finishes but solid building quality. HOA fees vary widely and should be verified early; some communities carry fees above $500/month.',
      },
      {
        tier: '$420K – $520K',
        label: 'Older Single-Family Ranch Homes',
        description:
          '3BR/2BA ranch-style homes of 1,400–1,800 sq ft, many built in the 1970s–80s on generous lots. Western sections near the Everglades edge occasionally include horse-zoned properties. Kitchens and baths often need updating, but structural quality is generally solid at this tier.',
      },
      {
        tier: '$520K – $600K',
        label: 'Updated Single-Family',
        description:
          'Updated 3–4BR single-family homes with renovated kitchens, newer roofs (important for Florida insurance costs), and sometimes pools. Move-in ready inventory at $550K–$600K is limited; buyers should expect to move quickly when a turnkey home hits this price.',
      },
    ],
    schools: [
      {
        name: 'Fox Trail Elementary School',
        level: 'Elementary',
        rating: '8/10',
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
      "Fox Trail Elementary rates 8/10. Flamingo Elementary rates 7/10. Nova Middle rates 8/10 and posts a 91% Algebra 1 EOC proficiency rate versus a 60% state average. Nova High rates 6/10 and offers Cambridge AICE and AP programs. School assignment in Broward County depends on your specific address; verify zoning using the district locator before assuming attendance at any particular school.",
    pointsOfInterest: [
      {
        name: 'Flamingo Gardens',
        category: 'Park',
        description:
          '60-acre botanical garden and wildlife sanctuary with over 3,000 plant species and native Florida wildlife including alligators, black bears, Florida panthers, bald eagles, and flamingos.',
        url: 'https://www.flamingogardens.org/',
        imageSrc: '/images/neighborhoods/poi/davie-flamingo-gardens.jpg',
      },
      {
        name: 'Tree Tops Park',
        category: 'Park',
        description:
          '243-acre Broward County park with boardwalks through freshwater marsh, equestrian trails, a canoe and paddleboat launch, a viewing tower, and a zip line.',
        url: 'https://www.broward.org/Parks/Pages/TreetopsDetail.aspx',
        imageSrc: '/images/neighborhoods/poi/davie-tree-tops.jpg',
      },
      {
        name: 'Bergeron Rodeo Grounds',
        category: 'Community',
        description:
          'Indoor/outdoor arena hosting Wednesday jackpot rodeos, PRCA events several times a year, plus horse shows, dog shows, car shows, and concerts.',
        url: 'https://www.davie-fl.gov/276/Bergeron-Rodeo-Grounds',
        imageSrc: '/images/neighborhoods/poi/davie-bergeron.jpg',
      },
      {
        name: 'Nova Southeastern University',
        category: 'Community',
        description:
          'Florida\'s largest private university with roughly 21,000 students, nationally ranked programs in health sciences, law, and business, and a campus on College Avenue that is one of Davie\'s largest employers.',
        url: 'https://www.nova.edu/',
        imageSrc: '/images/neighborhoods/poi/davie-nova.jpg',
      },
      {
        name: 'Oak Hill Park',
        category: 'Recreation',
        description:
          '10-acre equestrian park with riding rings, horse trails through mature oaks, picnic areas, and playgrounds.',
        url: 'https://www.davie-fl.gov/484/Oak-Hill-Park',
        imageSrc: '/images/neighborhoods/poi/davie-oak-hill.jpg',
      },
      {
        name: 'Davie Golf Club',
        category: 'Recreation',
        description:
          'Public 18-hole, par-70 course at 6,347 yards with five tee sets, a pro shop, rental clubs, on-site instruction, and a clubhouse.',
        url: 'https://www.daviegc.com/',
        imageSrc: '/images/neighborhoods/poi/davie-golf-club.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Davie's rental market is driven primarily by Nova Southeastern University's students, health sciences residents, and professional staff rather than seasonal tourism or coastal desirability, creating year-round, non-seasonal demand concentrated in the 1–2BR segment near University Drive and College Avenue. For investors, the NSU/Broward College pipeline provides a stable tenant base with predictable occupancy cycles.",
    },
    buyerNote: "More house and more land than coastal Broward at this price, with a strong Venezuelan and Colombian community presence. Jose knows which HOA communities carry surprise dues and which are priced fairly, a real differentiator in this market.",
    sellerNote: "Davie's value appeal draws a consistent buyer pool from price-pressured coastal Broward. Jose's free CMA shows exactly where your home sits, and how to price for the buyers who are actively looking here.",
    testimonial: {
      quote: "My parents live twenty minutes away in Doral. Davie gave me the space I needed without the Miami traffic every morning. NSU is right there for my kids, the schools are decent, and I can still find arepas on a Tuesday night.",
      attribution: "Homeowner in Davie since 2021",
    },
  },
  {
    name: 'Oakland Park',
    slug: 'oakland-park',
    imageSrc: '/images/neighborhoods/oakland-park.jpg',
    county: 'Broward',
    region: 'Broward County',
    tagline: "Single-family homes from the low $300Ks, immediately north of Fort Lauderdale, with a Culinary Arts District that most people don't expect.",
    description:
      "Oakland Park sits immediately north of Fort Lauderdale and is one of the few cities in Broward County where a $300K–$450K budget still reaches a detached single-family home with a yard. Access to I-95, Fort Lauderdale-Hollywood International Airport, and the Tri-Rail commuter line is straightforward from most of the city. The Culinary Arts District on NE 12th Avenue is a real neighborhood asset: independent restaurants, craft breweries, and a monthly Art Walk in a walkable block that most buyers at this price point wouldn't expect.\n\nThe community is diverse across racial, ethnic, and income lines, reflecting Oakland Park's working-class roots and ongoing change. The revitalization is real but uneven: the Culinary District looks and feels very different from residential blocks three streets away, and the city's character shifts meaningfully between its eastern sections (near Fort Lauderdale) and its western sections (less investment to date).\n\nThe honest tradeoffs: the high school has a 2/10 GreatSchools rating, a real concern for families with older children who can't access a magnet or charter alternative. Crime rates vary by address; buyers should use Broward County Sheriff's crime mapping for specific streets rather than relying on city-level averages.",
    highlights: [
      'Single-family detached homes from the low $300Ks, a price range that no longer reaches a house in most of Broward County',
      'Culinary Arts District, independent restaurants, Funky Buddha Brewery, monthly Art Walk',
      'Steps from Fort Lauderdale employment, I-95, and Tri-Rail',
      'Easterlin Park, 250-year-old cypress trees in an urban wilderness preserve',
      'Interior canals for kayaking and paddleboarding without a waterfront premium',
      'Diverse community, Hispanic, Haitian-American, and Caribbean cultural presence',
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
      "Oakland Park is where I send first-time buyers who want a detached single-family home in Broward County without paying Fort Lauderdale prices. At $320K–$400K that's still possible here in a way it isn't in most of the county. The Culinary Arts District is a real neighborhood asset, not just marketing language. I'm always upfront about the high school situation and the fact that the city is uneven block by block. Buyers need to do address-level homework here, not just rely on the zip code.",
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
          'Oakland Park is one of the only places in Broward County where the $300K–$380K budget reaches single-family detached homes, not just condos, typically 2–3BR homes of 900–1,300 sq ft, built in the 1950s–70s, on 6,000–7,000 sq ft lots. Kitchens, baths, and mechanical systems will need due-diligence scrutiny. But the lot values alone justify the purchase price relative to other Broward markets.',
      },
      {
        tier: '$380K – $450K',
        label: 'First-Time Buyer Sweet Spot',
        description:
          '3BR/2BA homes of 1,200–1,600 sq ft with varying levels of renovation. Some properties have updated kitchens, baths, and roofs. Eastern sections near the Fort Lauderdale border can be within walking distance of the Culinary Arts District at this price.',
      },
      {
        tier: '$450K – $600K',
        label: 'Renovated or Canal-Access Homes',
        description:
          'Updated 3–4BR homes with modern finishes, larger lots, or canal access on the eastern edges near Fort Lauderdale. At $550K+, Oakland Park pricing overlaps with Fort Lauderdale entry-level, which gives buyers who know both markets a useful comparison point.',
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
      "Oakland Park Elementary rates 7/10. Rickards Middle rates 5/10. Northeast High rates 2/10; the school does offer AP courses and Cambridge AICE, but the rating reflects well below-average academic outcomes by Florida standards. Families with school-age children should research Broward County's magnet school application process and charter school options before committing. Verify school assignment for any specific address using the district locator.",
    pointsOfInterest: [
      {
        name: 'Lakeside Sand Pine Preserve',
        category: 'Park',
        description:
          '5.6-acre native sand pine scrub preserve with an elevated boardwalk, educational shelter, and gopher tortoise habitat, purchased through Florida Communities Trust conservation funds.',
        url: 'https://www.oaklandparkfl.gov/facilities/facility/details/Lakesie-Sand-Pine-Preserve-27',
        imageSrc: '/images/neighborhoods/poi/op-sand-pine-preserve.jpg',
      },
      {
        name: 'Funky Buddha Brewery',
        category: 'Dining',
        description:
          'Florida craft brewery headquartered in Oakland Park and distributed across the Southeast, with 25+ drafts on tap, an in-house restaurant, and a shaded outdoor patio.',
        url: 'https://funkybuddhabrewery.com/',
        imageSrc: '/images/neighborhoods/poi/op-funky-buddha.jpg',
      },
      {
        name: 'Easterlin Park',
        category: 'Park',
        description:
          '46.6-acre Broward County wilderness park with cypress trees up to 250 years old, hiking trails, a 55-site campground, and disc golf.',
        url: 'https://www.broward.org/Parks/Pages/EasterlinDetail.aspx',
        imageSrc: '/images/neighborhoods/poi/op-easterlin.jpg',
      },
      {
        name: 'Oakland Park Art Walk',
        category: 'Community',
        description:
          'Monthly evening event along NE 12th Ave with local artists, live music, and food vendors in the Culinary Arts District.',
        url: 'https://www.oaklandparkfl.gov/776/Oakland-Park-Art-Walk-OPAW',
        imageSrc: '/images/neighborhoods/poi/op-art-walk.jpg',
      },
      {
        name: 'Interior Canal System',
        category: 'Recreation',
        description:
          "City-wide network of interior canals used for kayaking, paddleboarding, and wildlife-watching, connecting into the broader Broward County waterway system.",
        imageSrc: '/images/neighborhoods/poi/op-canal.jpg',
      },
      {
        name: 'Cypress Creek Tri-Rail Station',
        category: 'Transit',
        description:
          "Tri-Rail commuter station on the Fort Lauderdale/Oakland Park border, connecting south to Miami and north to West Palm Beach.",
        url: 'https://www.tri-rail.com/',
        imageSrc: '/images/neighborhoods/poi/op-tri-rail.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "About 43.6% of housing units are renter-occupied, driven by residents priced out of Fort Lauderdale, service workers, and diverse immigrant households. Demand is year-round. Purchase prices in the $320K–$420K range on small 3BR homes still pencil for investors in a way that most of Broward County no longer does.",
    },
    buyerNote: "One of the only places in Broward County where the $300K–$400K budget still reaches a detached single-family home with a yard. The Culinary Arts District is real and growing. Buyers need to do address-level homework, Jose knows which streets work and which to approach carefully.",
    sellerNote: "Oakland Park's value appeal draws a consistent first-time buyer pool from higher-priced Fort Lauderdale. Jose's free CMA shows exactly where your home sits in this evolving market.",
    testimonial: {
      quote: "I kept hearing you can't buy anything decent in Broward under 400K. I walked through three homes in Oakland Park in one afternoon. My agent called it right. The Culinary District changed what this neighborhood means.",
      attribution: "First-time buyer in Oakland Park",
    },
  },
  {
    name: 'Wilton Manors',
    slug: 'wilton-manors',
    imageSrc: '/images/neighborhoods/wilton-manors.jpg',
    county: 'Broward',
    region: 'Broward County',
    tagline: "A 2.5-square-mile island city bounded by canals, with Wilton Drive putting restaurants and retail within walking distance of most addresses.",
    description:
      "Wilton Manors is a 2.5-square-mile island city bounded by canals that functions as a walkable urban village in an otherwise car-dependent county. Wilton Drive puts independent dining, nightlife, retail, and community life within walking distance of most residential addresses. The city has an active civic identity: neighborhood associations are engaged, events are frequent, and residents tend to know each other in a way that's uncommon in larger Broward suburbs.\n\nWilton Manors has a well-established LGBTQ+ community reflected across its businesses, events, and civic culture. The median resident age of 55 reflects a community that skews toward established professionals and retirees rather than young families.\n\nThe honest tradeoffs: the overall median (all types) ran $613K–$685K in late 2025, and single-family homes averaged around $730K. Buyers at $400K–$550K are working in the condo segment or heavily dated single-family inventory. The city's small size keeps inventory consistently tight. There is no major grocery store in the city; Fort Lauderdale's infrastructure handles most daily needs. Flood insurance is a due-diligence priority given the canal-bounded topography.",
    highlights: [
      'Wilton Drive puts restaurants, bars, and retail within walking distance of most residential addresses',
      'Canal-bounded 2.5-square-mile footprint keeps supply permanently tight and turnover low',
      'Canal-bounded island setting, 2.5 square miles, tight supply, consistent demand',
      'Steps from Fort Lauderdale Las Olas, Flagler Village, and the beach',
      'Colohatchee Park, mangrove preserve, boardwalk, and kayak launch on the Middle River',
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
      "Wilton Manors is the only city in Broward County where you can walk to dinner and walk home without a car. That's not a marketing line; it's just what Wilton Drive makes possible. I'm upfront with buyers about price: single-family homes with any updates are above $650K, the inventory is small, and competition is real. The buyers who commit here tend to stay. Low turnover is part of why the supply stays tight.",
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
        label: 'Condos and Dated Single-Family',
        description:
          '1–2BR condos or smaller single-family homes needing significant renovation, older roofs, outdated kitchens, or structural work that accounts for the discount. Inventory here is limited; HOA fees in smaller condo buildings should be verified before comparing to other Broward options.',
      },
      {
        tier: '$550K – $650K',
        label: 'Small Single-Family with Work Required',
        description:
          '2–3BR homes of 1,000–1,500 sq ft on smaller lots, typically needing cosmetic updates. The city\'s dense residential platting means large lots are uncommon. Walkability to Wilton Drive and proximity to Fort Lauderdale are what drive this price relative to comparable square footage elsewhere in Broward.',
      },
      {
        tier: '$650K – $800K+',
        label: 'Updated Single-Family',
        description:
          'Move-in ready 3BR homes with renovated kitchens, updated baths, newer roofs, and outdoor spaces, some with small pools. This is where Wilton Manors\' turnkey single-family inventory actually lives. Proximity to Wilton Drive and the canal lifestyle are embedded in this pricing tier.',
      },
    ],
    schools: [
      {
        name: 'Wilton Manors Elementary School',
        level: 'Elementary',
        rating: '5/10',
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
      "Wilton Manors Elementary rates 5/10 and is an IB World School offering the Primary Years Programme. The feeder middle and high schools are both in Fort Lauderdale: Sunrise Middle rates 6/10, Fort Lauderdale High rates 6/10 and offers Cambridge AICE and a Pre-Law and Public Affairs magnet with graduation rates above 88%. The city's median age of 55 means school-age families are a smaller share of the community here than in most Broward cities. Verify school assignment using the Broward County district locator.",
    pointsOfInterest: [
      {
        name: 'Wilton Drive',
        category: 'Dining',
        description:
          "Wilton Manors' main street with independent restaurants, bars, retail, and service businesses within walking distance of most residential addresses in the city.",
        url: 'https://explorewiltonmanors.com/wilton-drive-guide/',
        imageSrc: '/images/neighborhoods/poi/wm-wilton-drive.jpg',
      },
      {
        name: 'Colohatchee Park',
        category: 'Park',
        description:
          '8.5-acre city park with 7 acres of mangrove preserve, an elevated boardwalk over the Middle River, kayak and boat ramp access, a dog park, and outdoor fitness equipment.',
        url: 'https://www.wiltonmanors.gov/157/Colohatchee-Park',
        imageSrc: '/images/neighborhoods/poi/wm-colohatchee.jpg',
      },
      {
        name: 'Richardson Historic Park and Nature Preserve',
        category: 'Park',
        description:
          '5.4-acre riverfront preserve with a mid-century manor house built in 1958, a boardwalk along the Middle River, observation pier, and nature trails.',
        url: 'https://www.wiltonmanors.gov/',
        imageSrc: '/images/neighborhoods/poi/wm-richardson.jpg',
      },
      {
        name: 'Island City Park Preserve',
        category: 'Park',
        description:
          '3.42-acre riverfront park on the Middle River with a boardwalk, fishing pier, canoe and kayak launch, fitness stations, basketball court, playground, and three shaded pavilions.',
        url: 'https://www.wiltonmanors.gov/458/Island-City-Park-Preserve',
        imageSrc: '/images/neighborhoods/poi/wm-island-city-park.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Wilton Manors' rental market is driven by the walkability and proximity to Fort Lauderdale rather than a seasonal or institutional anchor. New rental inventory is nearly nonexistent given the city's fixed land supply, and desirable units move quickly. About 38% of housing units are renter-occupied.",
    },
    buyerNote: "Turnkey single-family in Wilton Manors starts above $650K and inventory is tight year-round. Buyers who want the walkability need to be ready to move when something appears. Jose knows what's actually available and what's worth waiting for in this market.",
    sellerNote: "Wilton Manors' fixed land supply and consistent buyer demand mean well-priced homes move without sitting long. Jose's free CMA shows exactly where your home sits in this supply-constrained market.",
    testimonial: {
      quote: "We spent a year on Zoom calls with Jose from Chicago. Every question we had, he had a real answer for. When we finally visited, we walked Wilton Drive for twenty minutes and both knew. There was nothing to think about after that.",
      attribution: "Buyers relocated from Chicago, Wilton Manors",
    },
  },
  {
    name: 'Pompano Beach',
    slug: 'pompano-beach',
    imageSrc: '/images/neighborhoods/pompano-beach.jpg',
    county: 'Broward',
    region: 'Broward County',
    tagline: "Broward's coastal value play, Intracoastal access, active redevelopment, and a National Blue Ribbon high school.",
    description:
      "Pompano Beach is in the middle of a real transition, and buyers in 2025–2026 are entering at an interesting moment. Years of targeted investment, the Fishing Village renovation, The Amp, the downtown corridor upgrades, and now the massive Pomp project anchored by Topgolf and Live! entertainment, are changing the city's offer to residents in ways that won't fully materialize for several more years. For buyers who want coastal Broward County proximity without Fort Lauderdale or Deerfield Beach pricing, Pompano is one of few options still available. The Intracoastal runs the length of the city's eastern portion, and waterfront or water-adjacent homes in the $500K–$600K range exist here that simply don't exist in neighboring cities at those prices.\n\nThe city's market is internally split by property type in a way that requires explanation. The overall median (all types) runs $330K–$380K, largely influenced by a large inventory of older condos that declined about 11% year-over-year through 2025. Single-family homes performed very differently, with a median around $555K and 15.6% year-over-year appreciation through the same period. Buyers should understand which market they're actually in.\n\nThe foreign-born population (nearly 40%) is among the highest in Broward, reflected in a diverse cultural landscape with Caribbean, Central American, South American, and Haitian communities all meaningfully present. Pompano Beach High School is an all-magnet campus with Cambridge AICE curriculum and a Florida A state grade, worth knowing for families with high-school-age children.\n\nThe honest caution: Pompano Beach is a large city internally inconsistent in ways that require block-level research. The western sections along the Turnpike corridor have seen less investment than the eastern and central areas. Crime statistics vary significantly by area, city-level averages are not reliable for specific address decisions. The older condo inventory carries heightened insurance and special assessment exposure in the post-Ian environment.",
    highlights: [
      'Pompano Beach High is a National Blue Ribbon, all-magnet campus with Cambridge AICE and a Florida A state grade',
      'The Pomp, 223-acre redevelopment with Topgolf and Live! entertainment (now open)',
      'Intracoastal water-adjacent single-family from $500K, a price point that doesn\'t exist in neighboring cities',
      'The Amp, 7,000-capacity outdoor amphitheater hosting major national touring acts',
      'Fishing Village and renovated Fisher Family Pier, oceanfront dining and beach access',
      'Palm Aire Country Club, semi-private golf and country club within city limits',
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
      "Pompano Beach is where I tell buyers to pay attention to the property-type split before they get too excited about the overall median. The overall number includes a lot of older condos that have been declining, single-family homes have been going the other direction. The Pomp and the Fishing Village redevelopment are real, and the timeline on them matters for the investment case. Pompano Beach High is all-magnet with Cambridge AICE and an A state grade, worth knowing for family buyers with high-schoolers. I always recommend buyers research specific neighborhoods and streets carefully here, because the city is internally inconsistent in ways that the zip code doesn't capture.",
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
      lastUpdated: 'November 2025 (Redfin), note: median reflects all property types; SF and condo markets perform very differently',
    },
    budgetGuide: [
      {
        tier: '$300K – $400K',
        label: 'Condos, Townhomes and Older SF',
        description:
          'Condos and townhomes across the city, including older coastal condos near Sample Road and McNab Road, plus older single-family homes in western and northwestern neighborhoods. Condo buyers should research association fees and special assessments carefully, as many older buildings carry deferred maintenance liabilities under Florida\'s milestone inspection requirements.',
      },
      {
        tier: '$400K – $500K',
        label: 'Established Mid-City Single-Family',
        description:
          '3BR/2BA homes from 1,200–1,800 sq ft in established neighborhoods built between the 1960s and 1980s. Some properties in this range are within a short drive of the Intracoastal, with lifestyle access at prices that don\'t yet carry the water premium.',
      },
      {
        tier: '$500K – $600K',
        label: 'Updated or Water-Adjacent Single-Family',
        description:
          'Updated 3–4BR homes with modern kitchens, newer roofs, and sometimes pool decks or canal access. East of US-1, properties in this range may have Intracoastal proximity or direct water access, an unusual value relative to Fort Lauderdale pricing just to the south. Move-in ready condition is more common at this tier.',
      },
    ],
    schools: [
      {
        name: 'McNab Elementary School',
        level: 'Elementary',
        rating: '5/10',
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
        rating: 'A (State)',
        greatSchoolsUrl: 'https://www.greatschools.org/florida/pompano-beach/408-Pompano-Beach-High-School/',
      },
    ],
    schoolNote:
      "McNab Elementary rates 5/10 and Cresthaven Elementary 6/10 on GreatSchools; Pompano Beach Middle rates 5/10. Pompano Beach High School is the standout: an all-magnet campus with Cambridge AICE curriculum, a National Blue Ribbon designation, and a Florida A state grade. The gap between the elementary and middle experience and the high school is notable, families with middle-schoolers should research district magnet options. Attendance zones are address-specific; use the Broward County Public Schools district locator to confirm.",
    pointsOfInterest: [
      {
        name: 'The Amp (Pompano Beach Amphitheater)',
        category: 'Recreation',
        description:
          'An outdoor venue at 1801 NE 6th Street with roughly 3,000 covered seats and 7,000+ total capacity, hosting major national touring acts and a seasonal performing arts series.',
        url: 'https://www.pompanobeacharts.org/amp',
        imageSrc: '/images/neighborhoods/poi/pompano-amp.jpg',
      },
      {
        name: 'The Pomp',
        category: 'Community',
        description:
          'A 223-acre mixed-use redevelopment of the former Pompano Park racetrack by Caesars Entertainment and The Cordish Companies: Topgolf is open now, with Live! entertainment, two hotels, retail, and roughly 4,000 residential units in various stages of construction.',
        url: 'https://www.visitpompanobeach.com/the-pomp/',
        imageSrc: '/images/neighborhoods/poi/pompano-pomp.jpg',
      },
      {
        name: 'Pompano Fishing Village and Fisher Family Pier',
        category: 'Recreation',
        description:
          'Six-acre oceanfront complex at the renovated Fisher Family Pier, with restaurants, a palm-lined promenade, and beach access on the eastern end of Atlantic Blvd.',
        url: 'https://www.visitpompanobeach.com/',
        imageSrc: '/images/neighborhoods/poi/pompano-fisher-pier.jpg',
      },
      {
        name: 'Palm Aire Country Club',
        category: 'Recreation',
        description:
          'Semi-private golf and country club community off US-1 with multiple courses, tennis, and social programming; properties near Palm Aire are among the more stable addresses in the western interior.',
        url: 'https://www.palmaire.com/',
        imageSrc: '/images/neighborhoods/poi/pompano-palm-aire.jpg',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Pompano Beach has one of the larger renter populations among Broward's mid-sized cities (44.6% renter-occupied), with demand driven by the city's diverse immigrant workforce and households priced out of Fort Lauderdale. As The Pomp development activates and the downtown corridor matures, rents in the eastern and central neighborhoods are likely to rise. The large older condo inventory provides rental options at price points that don't exist in supply-constrained smaller Broward cities.",
    },
    buyerNote: "The Pomp redevelopment is real and underway. Pompano Beach High is a National Blue Ribbon, all-magnet campus with Cambridge AICE and a Florida A state grade, worth knowing for families with high-schoolers. And there are still water-adjacent single-family homes in the $500K–$600K range that don't exist at that price in Fort Lauderdale. Block-level research matters more here than in most Broward cities.",
    sellerNote: "Pompano Beach's redevelopment is driving values unevenly across the eastern and central sections. Jose's free CMA shows exactly where your property sits in today's market.",
    testimonial: {
      quote: "The Blue Ribbon high school was the thing I would not compromise on. Jose sent me listings in Pompano I would not have found myself. The house we got two blocks from Pompano Beach High was more than I expected at that price point.",
      attribution: "Single mother, Pompano Beach",
    },
  },

  // ── TREASURE COAST ─────────────────────────────────────────────────────────
  {
    name: 'Port St. Lucie',
    slug: 'port-st-lucie',
    hidden: true,
    county: 'St. Lucie',
    region: 'Treasure Coast',
    tagline: "Florida's sixth-largest city, growing faster than most, with new construction single-family from $340K.",
    description:
      "Port St. Lucie is Florida's sixth-largest city. In four decades it went from undeveloped scrubland to a community of over 232,000, and it is still adding residents, subdivisions, and commercial development faster than most large Florida cities. For middle-class families, that growth has translated into a tangible advantage: more housing supply, more new construction, and home prices that are meaningfully lower than anything comparable in Palm Beach County to the south. A 3-bedroom home with a 2-car garage in a clean neighborhood, the baseline family ask, costs $340,000–$420,000 here.\n\nThe Tradition community has an actual walkable town square, a pedestrian gathering place built around weekly farmers markets, outdoor dining, and a full community events calendar. Outdoor recreation is stronger than the suburban reputation suggests: Savannas Preserve State Park, the Botanical Gardens, and river access to the St. Lucie system all provide real natural escapes.\n\nThe honest tradeoffs need to be said. High school ratings in the St. Lucie County district run below the state average, and families should research charter school options. Commuting is the other friction point: Palm Beach County jobs and amenities are on the far side of Martin County, and the drive to Palm Beach Gardens runs 50–70 minutes in traffic. For remote workers or those who work locally, a dollar goes further in Port St. Lucie than in any coastal county south of it.",
    highlights: [
      'New construction single-family from $340K in planned communities with HOA amenities',
      'Tradition community, walkable town square with farmers market and outdoor dining',
      'Clover Park, New York Mets Spring Training stadium',
      'PGA Village, 54 holes of championship public golf',
      'Savannas Preserve State Park, roughly 6,800 acres of freshwater coastal savanna',
      'Over 232,000 residents in four decades of growth, with continued new development in the western expansion areas',
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
      "Port St. Lucie is where I send buyers who tell me they want real space and a real house but can't stretch to Palm Beach County prices, and I've helped multiple families close here in the past few years. The Tradition area delivers: a real town square, farmers market, good restaurants, events on the calendar. You're getting more house per dollar than you'll find in Broward or Palm Beach County. I want to be straight with clients about the schools, St. Lucie County isn't where I'd brag, and the commute to jobs in Palm Beach County is real. For remote workers or anyone whose work is local, a 3BR/2BA in a clean neighborhood for $380K tends to settle the argument.",
    lifestyleTags: [
      'New Construction',
      'Affordable South Florida Entry',
      'Golf and Recreation',
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
          'Older 3BR/2BA homes built in the 1980s and 1990s along Port St. Lucie Boulevard or north of Crosstown Parkway. These homes often need cosmetic updates, but a detached house with a yard at this price would run $500K+ in Broward or Palm Beach County.',
      },
      {
        tier: '$330K – $480K',
        label: 'New Construction Sweet Spot',
        description:
          '3–4 bedrooms, 2-car garage, often a pool, built 2005–2020s in planned communities like Tradition, St. Lucie West, or along the Gatlin Boulevard corridor. Many communities carry modest HOA fees covering pools, fitness centers, and walking paths. National builders like D.R. Horton, Mattamy Homes, and Maronda Homes are active at this price level.',
      },
      {
        tier: '$480K+',
        label: 'Golf and Waterfront Communities',
        description:
          'Larger homes in golf course communities like PGA Village, waterfront properties along the North Fork of the St. Lucie River, or new construction in the western Tradition expansion. Four-to-five bedroom plans with upgraded finishes; some waterfront executive inventory exceeds $700,000.',
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
      "Treasure Coast High rates 5/10 and Port St. Lucie High 3/10 on GreatSchools, both below the state average. The elementary picture is better: Windmill Point and Parkway Elementary both rate 6/10, and Southport Middle is the strongest traditional public option at 7/10. Families for whom school quality is a primary driver should research the charter school landscape: Manatee Academy K-8 (5/10) is frequently mentioned within the public system. Attendance zones are address-specific; verify with the St. Lucie County School District locator.",
    pointsOfInterest: [
      {
        name: 'Clover Park',
        category: 'Recreation',
        description:
          'Spring training home of the New York Mets and season home of the St. Lucie Mets Class A affiliate, with concerts, festivals, and tournaments filling the calendar the rest of the year.',
        url: 'https://www.mlb.com/mets/spring-training/clover-park',
      },
      {
        name: 'PGA Village',
        category: 'Recreation',
        description:
          'Fifty-four holes of public championship golf across the Wanamaker, Ryder, and Dye courses, plus a PGA Golf Club Museum on the western edge of the city.',
        url: 'https://www.pgavillage.com',
      },
      {
        name: 'Tradition Square',
        category: 'Community',
        description:
          'Walkable town square in the Tradition community with boutique shops, outdoor dining, and a weekly farmers market; Chow Down Food Truck Fridays runs on the 1st and 3rd Fridays.',
        url: 'https://traditionfl.com',
      },
      {
        name: 'Savannas Preserve State Park',
        category: 'Park',
        description:
          'A roughly 6,800-acre freshwater coastal savanna with hiking trails, kayaking, and wildlife observation connecting to the Indian River Lagoon system.',
        url: 'https://www.floridastateparks.org/parks-and-trails/savannas-preserve-state-park',
      },
      {
        name: 'Port St. Lucie Botanical Gardens',
        category: 'Park',
        description:
          'Volunteer-maintained public garden with a Bamboo Garden, Rose Garden, and Butterfly Garden; free to visit.',
        url: 'https://www.plsbotanicalgardens.com',
      },
      {
        name: 'Oxbow Eco-Center',
        category: 'Community',
        description:
          'County-operated nature center along the North Fork of the St. Lucie River, with environmental education programs, interactive exhibits, and nature trails.',
        url: 'https://www.stlucieco.gov/environment/oxbow-eco-center',
      },
    ],
    rentalMarket: {
      active: true,
      rangeMin: '',
      rangeMax: '',
      description:
        "Port St. Lucie's rental market is dominated by single-family homes, reflecting the city's suburban footprint. Renters have real negotiating power in the current environment, with vacancy up and lease incentives becoming more common across the city's multiple distinct areas.",
    },
    buyerNote: "New construction at prices Palm Beach County buyers have stopped expecting. A 3BR/2BA with a 2-car garage and community amenities for under $430K exists here and doesn't in most of Broward or Palm Beach County. The school district and the commute are both real factors; research both before committing.",
    sellerNote: "Port St. Lucie's inventory has grown, giving sellers real competition. Jose's free CMA shows exactly where your home sits in today's market and what pricing strategy matches current conditions.",
    testimonial: {
      quote: "We spent eighteen months looking in Broward. We kept getting outbid on houses we didn't even like that much. A friend in PSL told us to just come look. We put in an offer three weeks after our first visit.",
      attribution: "Buyers relocated from Broward to Port St. Lucie",
    },
  },
  {
    name: 'Stuart',
    slug: 'stuart',
    hidden: true,
    county: 'Martin',
    region: 'Treasure Coast',
    tagline: 'The Sailfish Capital of the World, great schools, real downtown, quieter pace.',
    description:
      "Stuart and Martin County occupy an unusual position in Florida real estate: a place that genuinely delivers on the small-town promise without sacrificing quality of life. The combination of a walkable historic downtown, some of Florida's best-ranked public schools, direct water access to the St. Lucie River and Intracoastal Waterway, and lower density than Palm Beach County makes it a natural choice for families who want to live well without paying Palm Beach prices.\n\nThe school story is real and worth leading with. Martin County's district ranks 11th of 67 Florida counties by state accountability. The elementary schools, Felix A. Williams, Crystal Lake, Bessey Creek, carry 8–9/10 GreatSchools ratings that are rare outside the most affluent Florida suburbs. Clark Advanced Learning Center, the public charter high school in Stuart, earns a 10/10 rating and sits in the top 5% of all Florida public schools nationally. For parents who want genuinely excellent public schools without paying private school tuition, Martin County is one of South Florida's best-kept open secrets.\n\nThe lifestyle centers on water and community. The St. Lucie River and Intracoastal are not backdrop, they are the point. The 'Sailfish Capital of the World' designation reflects a real fishing culture that's built into daily life here. The downtown is the kind of place Florida lost in most cities decades ago: human-scaled, locally owned, and animated by actual foot traffic. The honest tradeoffs: Stuart city is small, the commercial ecosystem is limited compared to Palm Beach County, and the commute to Palm Beach Gardens runs 40–55 minutes. Buyers who need maximum square footage for minimum cost will find Port St. Lucie a stronger value. Buyers prioritizing school quality, community character, and water access will find Stuart hard to beat.",
    highlights: [
      'Martin County schools rank 11th of 67 Florida counties, Clark Advanced Learning Center is 10/10',
      'Historic walkable downtown, independent dining, galleries, and weekly farmers market',
      'Sailfish Capital of the World, river and offshore fishing on the St. Lucie',
      'Lower prices than Palm Beach County for a comparable or better quality of life',
      'Small-city density, less traffic, more space, more character',
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
      "Stuart is where I point families who want great schools and don't want to stretch to Wellington prices. Martin County's school district is legitimately excellent, not just good by Florida standards, but good by any standard. Clark Advanced Learning Center is a 10/10 public charter school that rivals anything in Palm Beach County. The downtown is genuinely walkable and charming in a way you don't see much anymore. And you're on the water, real boating and fishing country. The trade is a longer drive south if your job is in Palm Beach County, and a smaller commercial footprint. But for families who work remotely or locally, Stuart is one of the best-value family communities in all of South Florida.",
    lifestyleTags: [
      'Top-Ranked Public Schools',
      'Historic Walkable Downtown',
      'Sailfish Capital of the World',
      'River and Intracoastal Lifestyle',
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
        label: 'Condos, Townhomes and Smaller Single-Family',
        description:
          'Condos and townhomes in and around Stuart city, along the US-1 corridor, or older 2–3 bedroom single-family homes close to downtown. This tier puts buyers within easy reach of downtown Stuart\'s walkable amenities and the river, a trade of square footage for location that many buyers find well worth it.',
      },
      {
        tier: '$400K – $575K',
        label: 'Family Single-Family Homes',
        description:
          'The heart of the Martin County family market, 3–4 bedroom single-family homes in established Palm City subdivisions, newer Hobe Sound developments, or well-maintained neighborhoods near Martin County High. Many homes have pools, 2-car garages, and larger lots than comparable Palm Beach County properties at this price.',
      },
      {
        tier: '$575K+',
        label: 'Waterfront and Golf Communities',
        description:
          'Waterfront access, Intracoastal frontage, and larger custom builds in communities like Mariner Sands Country Club, River Wilderness, or neighborhoods in Sewalls Point. Executive-caliber homes with private water access and mature landscaping, at prices that would buy a townhome in Jupiter or Wellington.',
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
      "Martin County's public school system is one of the most compelling arguments for choosing this area. The district ranks 11th of 67 Florida counties in state accountability, Felix A. Williams and Crystal Lake Elementary both rate 8/10, Bessey Creek Elementary in Palm City hits 9/10, and attendance rates at these schools run 10–20 points above the Florida average. The standout is Clark Advanced Learning Center, a public charter high school rated 10/10 nationally, placing it in the top 5% of all Florida public schools. Clark serves grades 10–12 in partnership with Indian River State College, so families should plan for 9th grade separately. Martin County High and Stuart Middle both rate 6/10, solid but not exceptional. Overall, this is one of the strongest public school districts in South Florida at this price point.",
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
          "A 4,700-acre natural area along the South Fork of the St. Lucie River with hiking, mountain biking, equestrian trails, and picnic areas, Martin County's premier natural space and a reliable destination for active families.",
        url: 'https://www.martin.fl.us/halpatiokee-regional-park',
      },
      {
        name: 'Shepard Park and the Riverwalk',
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
        name: 'St. Lucie River and Intracoastal Waterway',
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
        "Stuart's rental market is smaller and more concentrated than Port St. Lucie's, apartments and condos dominate in and around downtown, with single-family rentals available in surrounding Martin County communities. With 41% of Stuart city households renting, demand is consistent. Jose can help renters navigate what's available and connect them to listings before they hit the public market.",
    },
    buyerNote: "Martin County's public schools rank 11th in the state and Clark Advanced Learning Center is a 10/10 public charter. For families where school quality is the deciding factor, Stuart is one of the strongest value plays in all of South Florida.",
    sellerNote: "Martin County home values have held better than most Florida markets. Jose's free CMA shows exactly what your home is worth in a county where school-driven demand keeps competition real.",
    testimonial: {
      quote: "We did the research for three years before we pulled the trigger. Stuart kept coming back to the top of our list. The river, the downtown, the size. Jose walked us through the market before we ever flew down. We signed that spring.",
      attribution: "Retired couple relocated from Connecticut",
    },
  },

];
