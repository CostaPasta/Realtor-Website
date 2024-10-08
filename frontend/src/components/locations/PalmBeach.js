import React from "react";
import { Helmet } from "react-helmet";
import { Link as LinkScroll } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css';
import palmbeachbanner from '../../images/Areas/Headers/PALMBEACH-HEADER.webp';
import BeachPic from './cardimages/PalmBeach/Beach.webp';
import CityPic from './cardimages/PalmBeach/city.webp';
import OutdoorPic from './cardimages/PalmBeach/golf.webp';
import LocalAttractionsPic from './cardimages/PalmBeach/localattractions.webp';
import EducationPic from './cardimages/PalmBeach/education.webp';
import TransportationPic from './cardimages/PalmBeach/transportation.webp';
import CommunityContent from './contentimages/PalmBeach/community.webp';
import EducationContent from './contentimages/PalmBeach/education.webp';
import NeighborhoodContent from './contentimages/PalmBeach/neighborhood.webp';
import AttractionsContent from './contentimages/PalmBeach/attractions.webp';
import TransportationContent from './contentimages/PalmBeach/transportation.webp';
import RealEstateContent from './contentimages/PalmBeach/realestate.webp';

const PalmBeach = () => {
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Coastal paradise with warm year-round temperatures, attracting a diverse community of all ages."
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "92.8% graduation rate, a diverse student body, and 335 award-winning career academies."
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Luxurious beachfront resorts, and historical landmarks enrich everyday life for residents."
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Convenient travel with over 200 daily flights from PBI and local transportation options"
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Renowned for its stunning beaches, luxury shopping, and outdoor activities"
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "Offers options for every lifestyle and budget, ripe with opportunities for growth and investment."
        }
    ];

    const sections = [
        { 
            id: 1,
            title: factCards[0].heading, 
            titledescription: "Tropical Ambiance and Culture:",
            description: 'Renowned for its sunny, tropical ambiance with an average temperature of 74 degrees. The community has a wide variety of art and culture, including Broadway performances, outstanding dining, and world-class shopping.', 
            titledescription2: "Quality of Life:",
            description2: "The commitment to quality of life is evident, from gated to non-gated communities, award-winning parks and recreation departments, to world-class public art, making it a signature place to live​",
            titledescription3: "Outdoor and Leisure Activities:",
            description3: "A haven for outdoor and leisure activities, featuring nearly 30 tropical beaches along over 47 miles of the Atlantic Ocean, and more than 160 sunny golf courses.",
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Whether it's relaxing on the beach, fishing, paddleboarding, snorkeling in the crystal-clear ocean waters, or shopping for unique finds along Worth Avenue, the region caters to all interests, ages, and budgets, from the Atlantic coast to the northern edge of the Everglades National Park​.",
            imgSrc: CommunityContent, 
            order: 'normal' 
        },
        { 
            id: 2, 
            title: factCards[1].heading, 
            titledescription: "High Graduation Rate:",
            description: 'The School District of Palm Beach County boasts an impressive 94.1% graduation rate, showcasing its dedication to student success and academic excellence.', 
            titledescription2: "Diverse Educational Environment:",
            description2: "Home to students from 192 countries and speaking 150 languages, the district celebrates a rich tapestry of cultural diversity, enhancing the learning experience for all.​",
            titledescription3: "Exceptional Student Education (ESE):",
            description3: "The district offers comprehensive support for students with individual education plans (IEP) through its Exceptional Student Education program. It emphasizes the importance of parent involvement and collaborative education strategies to improve services and outcomes for students with disabilities.",
            titleconclusion: "Career Opportunities:",
            conclusion: "With a wide range of career opportunities available, the district is not just a place for learning but also for professional growth, offering various positions from teaching roles to administrative support.",
            imgSrc: EducationContent,
            order: 'reverse' 
        },
        { 
            id: 3, 
            title: factCards[2].heading, 
            titledescription: "Worth Avenue & Luxurious Living:",
            description: 'Palm Beach is celebrated for Worth Avenue, mirroring the luxury of Fifth Avenue and Rodeo Drive, complete with elite boutiques and quaint cafés set in a scenic locale.​', 
            titledescription2: "Historical Landmarks & Leisure:",
            description2: "The historical significance of landmarks such as The Breakers adds a layer of cultural depth to the area, making it not just a place to live but to explore and appreciate. These landmarks are woven into the fabric of everyday life, offering residents a blend of leisure and historical exploration.​",
            titledescription3: "Diverse Neighborhoods:",
            description3: "Neighborhoods such as Flamingo Park and El Cid offer a spectrum of living experiences, from waterfront homes to urban condos in City Place, each with unique amenities and lifestyles. These areas embody the blend of luxury, history, and community that characterizes Palm Beach​.",
            titleconclusion: "conclusion",
            conclusion: "Palm Beach stands out for its mix of high-end shopping, rich history, and diverse living areas, making it a great place for those looking to blend upscale living with a sense of community​.​",
            imgSrc: NeighborhoodContent, 
            order: 'normal' 
        },
        { 
            id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transportation:",
            description: 'Palm Tran, covers over 40 cities within the county, connecting you smoothly to other transit systems. For longer commutes, the Tri-Rail system offers commuter rail service stretching from West Palm Beach down to Miami, making stops in major cities along the way.​', 
            titledescription2: "Brightline:",
            description2: "Brightline is a private higher-speed intercity passenger rail service between Orlando, West Palm Beach and Miami, along the Florida East Coast (FEC) railway.​",
            titledescription3: "Private and Alternative Transport:",
            description3: "Palm Beach offers a range of private shuttle services, along with ample facilities for bicycling, including designated paths and lanes.",
            titleconclusion: "conclusion",
            conclusion: "Palm Beach caters to a wide array of commuting and travel preferences, ensuring that residents and visitors alike can find a convenient way to reach their destinations​.​",
            imgSrc: TransportationContent,
            order: 'reverse' 
        },
        { 
            id: 5, 
            title: factCards[4].heading, 
            titledescription: "Outdoor Adventures:",
            description: "For those who love the outdoors, Palm Beach doesn't disappoint. You can float on a giant inflatable flamingo, explore the area on a bicycle or e-scooter tour, or enjoy a catamaran party cruise.", 
            titledescription2: "Palm Beach Food & Wine Festival:",
            description2: "A winter highlight, bringing together world-renowned chefs and culinary personalities for a celebration of gourmet food and drink. The festival offers a range of events from wine tastings to chef showdowns, making it a perfect attraction for epicureans​.​",
            titledescription3: "Flagler Museum:",
            description3: "Experience the grandeur of the Gilded Age at the Flagler Museum. This national historic landmark offers a glimpse into the lavish lifestyle of the era and is a key cultural attraction, featuring guided tours, changing exhibitions, and special programs​.",
            titleconclusion: "conclusion",
            conclusion: "Palm Beach is filled with unique attractions, just giving you a taste of what this charming place has to offer. There's so much more to explore and make your own in this potential new home.​",
            imgSrc: AttractionsContent,
            order: 'normal' 
        },
        { 
            id: 6, 
            title: factCards[5].heading, 
            titledescription: "Market Dynamics:",
            description: "The Palm Beach real estate market is vibrant and expanding, with home sales witnessing a 5.2% increase. This upward trend underscores a promising opportunity for growth and investment in the region.", 
            titledescription2: "Pricing Trends:",
            description2: "Reflecting the market's robust nature, the median home price in Palm Beach County has surged by 11.9%. This significant uptick highlights the area's appeal and the potential for lucrative investment returns, making it an opportune time for buyers and sellers alike​.​",
            titledescription3: "Inventory Shifts:",
            description3: "There's been a noticeable shift towards a more balanced market, with inventory levels rising by 33.3%. This increase in available properties could hint at a slight shift towards a buyer's market, offering more options and potentially more negotiating power for buyers​.",
            titleconclusion: "conclusion",
            conclusion: "These trends illustrate a dynamic and growing real estate market in Palm Beach, marked by increasing sales, rising home prices, and an expanding inventory.​",
            imgSrc: RealEstateContent,
            order: 'reverse' 
        },
    ];

    return (
        <div className="palmBeachContainer">
            <Helmet>
                <script type="application/ld+json">
                  {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Place",
                      "name": "Palm Beach",
                      "description": "Palm Beach is a coastal paradise known for luxury living, pristine beaches, and vibrant culture.",
                      "image": "https://josecostarealtor.com/static/media/PALMBEACHGARDENS.eac6d6d18a3676bbfeca.webp",
                      "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "26.7056",
                        "longitude": "-80.0364"
                      },
                      "containedInPlace": {
                        "@type": "AdministrativeArea",
                        "name": "Palm Beach County"
                      },
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Palm Beach",
                        "addressRegion": "FL",
                        "addressCountry": "US"
                      },
                      "offers": {
                        "@type": "OfferCatalog",
                        "name": "Real Estate Listings",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Community & Lifestyle",
                              "description": "Coastal paradise with warm year-round temperatures, attracting a diverse community of all ages.",
                              "image": "https://josecostarealtor.com/static/media/education.7fc3c84d87b2337cd84b.webp"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Education",
                              "description": "Palm Beach offers excellent education with a 92.8% graduation rate and diverse career academies.",
                              "image": "https://josecostarealtor.com/images/cardimages/PalmBeach/education.webp"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Neighborhood Amenities",
                              "description": "Luxurious beachfront resorts, and historical landmarks enrich everyday life for residents.",
                              "image": "https://josecostarealtor.com/static/media/golf.be6fa976efef1ad3316a.webp"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Transportation",
                              "description": "Convenient travel with over 200 daily flights from PBI and local transportation options.",
                              "image": "https://josecostarealtor.com/static/media/transportation.ed4d97f671148a0ef2dd.webp"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Local Attractions",
                              "description": "Renowned for its stunning beaches, luxury shopping, and outdoor activities.",
                              "image": "https://josecostarealtor.com/static/media/localattractions.403027379260b334c878.webp"
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Product",
                              "name": "Real Estate Trends",
                              "description": "Offers options for every lifestyle and budget, ripe with opportunities for growth and investment.",
                              "image": "https://josecostarealtor.com/static/media/city.1c5a2cceb5fca29df6d1.webp"
                            }
                          }
                        ]
                      }
                    }
                  `}
                </script>
            </Helmet>
            <Helmet>
                <link rel="preload" href={palmbeachbanner} as="image" />
                <link rel="preload" href={BeachPic} as="image" />
                <link rel="preload" href={CityPic} as="image" />
                <link rel="preload" href={OutdoorPic} as="image" />
                <link rel="preload" href={LocalAttractionsPic} as="image" />
                <link rel="preload" href={EducationPic} as="image" />
                <link rel="preload" href={TransportationPic} as="image" />
                <link rel="preload" href={CommunityContent} as="image" />
                <link rel="preload" href={EducationContent} as="image" />
                <link rel="preload" href={NeighborhoodContent} as="image" />
                <link rel="preload" href={AttractionsContent} as="image" />
                <link rel="preload" href={TransportationContent} as="image" />
                <link rel="preload" href={RealEstateContent} as="image" />
            </Helmet>
            <BackHeader />
            <div className="bannerImage">
                <img
                    src={palmbeachbanner}
                    alt="Palm Beach"
                    loading="lazy"
                />
                <div className="bannerContent">
                    <h1 className="title">WELCOME TO PALM BEACH</h1>
                    <p className="description">Discover the beauty and luxury of Palm Beach, a haven of serene beaches, exquisite dining, and vibrant culture.</p>
                </div>
            </div>
            <div className="flex-wrapper-locations">
                <div className="facts-grid">
                    {factCards.map((card, index) => (
                        <LinkScroll
                            key={index}
                            to={card.heading.replace(/\s+/g, '-').toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="fact-card-link"
                        >
                            <div className="fact-card" key={index} style={{ backgroundImage: `url(${card.image})` }}>
                                <div className="spacer"></div>
                                <h3 className="fact-heading">{card.heading}</h3>
                                <p className="fact-description">{card.description}</p>
                            </div>
                        </LinkScroll>
                    ))}
                </div>
                <div className="conclusion">
                    <div className="closing-content">
                        <p data-translate className="closing">In Palm Beach, you're not just buying a home; you're embracing a lifestyle that blends relaxation, culture, and community. A place where life is always sunny, and every day brings a new adventure. Welcome home.</p>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/palm beach">SEARCH PALM BEACH LISTINGS</a>
                </div>
            </div>
            {sections.map(section => (
                <div
                    className="content-container"
                    id={section.title.replace(/\s+/g, '-').toLowerCase()}
                    key={section.id}
                >
                    <div className={`content-title ${section.order}`}>
                        <h1>{section.title}</h1>
                    </div>
                    <div className={`content-body ${section.order}`}>
                        <div className="content-description">
                            <h3 className="description-title">{section.titledescription}</h3>
                            <p className="description-tag">{section.description}</p>
                            <h3 className="description-title">{section.titledescription2}</h3>
                            <p className="description-tag">{section.description2}</p>
                            <h3 className="description-title">{section.titledescription3}</h3>
                            <p className="description-tag">{section.description3}</p>
                            <p className="description-tag">{section.conclusion}</p>
                        </div>
                        <div className="content-img">
                            <img src={section.imgSrc} alt="Content Image" loading="lazy" />
                        </div>
                    </div>
                </div>
            ))}
            <div className="extra-facts">
                <a href="https://discover.pbcgov.org/pages/pbc_facts.aspx"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
            </div>
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/palm beach">SEARCH PALM BEACH LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PalmBeach;
