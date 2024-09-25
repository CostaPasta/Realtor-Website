import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/PALMBEACHGARDENS.webp'

import BeachPic from './cardimages/PalmBeachGardens/lifestyle.webp'
import CityPic from './cardimages/PalmBeachGardens/realestate.webp'
import OutdoorPic from './cardimages/PalmBeachGardens/neighborhood.webp'
import LocalAttractionsPic from './cardimages/PalmBeachGardens/localattraction.webp'
import EducationPic from './cardimages/PalmBeach/education.webp'
import TransportationPic from './cardimages/PalmBeach/transportation.webp'

//CONTENT IMAGES
import CommunityContent from './contentimages/PalmBeachGardens/community.webp'
import EducationContent from './contentimages/PalmBeachGardens/education.webp'
import NeighborhoodContent from './contentimages/PalmBeachGardens/neighborhood.webp'
import AttractionsContent from './contentimages/PalmBeachGardens/attractions.webp'
import TransportationContent from './contentimages/PalmBeachGardens/transportation.webp'
import RealEstateContent from './contentimages/PalmBeachGardens/realestate.webp'

import { Helmet } from "react-helmet";

const PalmBeachGardens = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "A vibrant cultural scene and diverse living options, where tropical ambiance meets luxury"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "A network of public schools, committed to providing quality education from elementary to high school"
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Home to premier golf courses and luxurious shopping and dining"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Efficient transportation options connect Palm Beach Gardens residents to local and regional destinations with ease"
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Discover the prestigious PGA National Resort and lush shopping districts, a hub for golf and shopping enthusiasts."
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "A healthy balance of supply and demand, making this a desirable location for homebuyers & investors."
        }
        // Add more fact cards following the same structure
    ];


    const sections = [
        { id: 1,
            title: factCards[0].heading, 
            titledescription: "Warm Weather and Fun Culture:",
            description: "Enjoy the sunny weather year-round with an average temperature of 74 degrees in Palm Beach Gardens. The city is alive with arts and performances, making it a great place for those who love being part of a vibrant cultural scene.", 
            
            titledescription2: "Homes for Everyone:",
            description2: "Whether you're looking for a cozy villa or a spacious estate, Palm Beach Gardens has a variety of homes to choose from. This city offers everything from private gated communities to open neighborhoods, making it easy for everyone to find their perfect spot.​",
            
            titledescription3: "Active and Social:",
            description3: "There’s always something to do here, from golfing on world-class courses to participating in community events. The city is designed for an active lifestyle, with beautiful parks and committed local leadership that keeps the community top-notch.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Palm Beach Gardens offers a compelling mix of lifestyle, education, amenities, and accessibility. Whatever you are seeking, Palm Beach Gardens presents a wealth of opportunities to build a fulfilling life.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "https://www.pbgfl.com/31/Community" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Comprehensive Schooling Options:",
            description: "Home to a range of educational institutions, ensuring high-quality learning opportunities for students of all ages. From public schools to prestigious private and charter schools, the city caters to diverse educational needs and aspirations.", 
            
            titledescription2: "Focus on Excellence and Innovation",
            description2: "The schools are known for their commitment to excellence. They offer advanced academic programs and innovative learning environments that encourage students to excel.​",
            
            titledescription3: "Supportive Educational Community:",
            description3: "The community places a strong emphasis on education, with numerous programs that support learning both inside and outside the classroom. Initiatives include after-school programs, special education services, and adult education courses, making education accessible to all community members.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Palm Beach Gardens offers a thriving educational environment with diverse schooling options and a strong community focus on academic excellence and innovation, making it an ideal place for family-oriented living.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "https://www.pbgfl.com/438/Learn" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Golf and Recreation:",
            description: "This is a paradise for golf lovers, home to PGA National which offers extensive golf facilities and other sports amenities. This area is renowned for its world-class golf experiences and beautiful country club communities.", 
            
            titledescription2: "Shopping and Dining:",
            description2: "The city provides a rich array of shopping and dining options. Residents can enjoy luxury shopping at The Gardens Mall and vibrant dining along PGA Boulevard, offering everything from casual eats to fine dining experiences.​",
            
            titledescription3: "Community and Leisure:",
            description3: "Palm Beach Gardens features gated communities with resort-style amenities. These communities are designed for comfort and luxury, ensuring residents have access to everything they need within a serene and secure environment​.",
            
            titleconclusion: "conclusion",
            conclusion: "Palm Beach Gardens offers a wealth of amenities that cater to both the recreational and practical needs of its residents, creating a community that combines luxury with convenience and active living.​",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "https://www.compass.com/neighborhood-guides/miami/Palm-Beach-Gardens/ 2 |  https://www.palmmartin.com/blog/palm-beach-gardens-gated-communities-with-resort-style-amenities/" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Extensive Road Network:",
            description: "Palm Beach Gardens has a well-connected road network including major highways like Interstate 95 and Florida's Turnpike. These roads provide quick access to nearby cities and attractions, making commuting and traveling convenient for residents.", 
            
            titledescription2: "Public Transit Options:",
            description2: "The area is served by Palm Tran, the public bus service of Palm Beach County, which offers routes throughout the city and to surrounding areas. This service is essential for residents who prefer public transportation over driving.",
            
            titledescription3: "Bicycle-Friendly Community:",
            description3: "Palm Beach Gardens encourages biking. The city has been developing more bike lanes and trails, making it safer and more enjoyable for cyclists to navigate the area.",
            
            titleconclusion: "conclusion",
            conclusion: "Palm Beach Gardens has a extensive transportation infrastructure that supports a variety of commuting methods, from efficient roadways to public transit, ensuring easy travel within and outside the city. This makes it an appealing choice for individuals and families looking for accessible living in South Florida.​",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "https://www.compass.com/neighborhood-guides/miami/Palm-Beach-Gardens/ | https://www.palmtran.org/ | " 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Outdoor and Recreational Activities:",
            description: "The Frenchman’s Forest Natural Area offers a glimpse into Florida's natural ecosystems with trails through cypress swamps, oak hammocks, and more. The area is a sanctuary for both plant and animal species, providing a great spot for peaceful hikes and wildlife observation", 
            
            titledescription2: "Golf and Sports:",
            description2: "As home to the headquarters of the Professional Golfers’ Association of America, Palm Beach Gardens is a golfer's paradise. The city hosts the Honda Classic at the PGA National Resort, which is celebrated for its challenging courses and luxurious amenities​",
            
            titledescription3: "Cultural and Community Events:",
            description3: "The Gardens GreenMarket is a vibrant community hub held weekly at the City Hall Municipal Campus. It features a wide array of vendors selling everything from fresh produce to gourmet foods and crafts. This market is also known for its lively atmosphere with live music and regular community events.",
            
            titleconclusion: "conclusion",
            conclusion: "These attractions highlight just a few reasons why Palm Beach Gardens is a fantastic place to explore or settle down, offering both urban conveniences and natural beauty.​",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "https://www.thecrazytourist.com/15-best-things-to-do-in-palm-beach-gardens-fl/ 1-3| " 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Attractive Market Conditions:",
            description: "Home prices in Palm Beach Gardens have seen an 11.9% increase. While the market remains competitive, the 33.3% increase in inventory provides buyers with more choices and potentially better negotiating power, making it a great time to consider purchasing", 
            
            titledescription2: "Balanced Opportunities:",
            description2: "Although the market is leaning slightly towards sellers due to low months of inventory, the growing inventory suggests that buyers will increasingly find more opportunities.​",
            
            titledescription3: "Sustained Interest and Growth:",
            description3: "The influx of buyers from major metropolitan areas continues to sustain demand, ensuring that the investment in the area is sound.",
            
            titleconclusion: "conclusion",
            conclusion: "Whether you're seeking a family home or an investment property, this is an opportune time to explore what Palm Beach Gardens has to offer.​",
            imgSrc: RealEstateContent,
            order: 'reverse',
            alt: "https://flpalmbeach.com/market-reports/ 1-2| https://www.redfin.com/city/14007/FL/Palm-Beach-Gardens/housing-market " 
        },
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            <Helmet>
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Place",
                        "name": "Palm Beach Gardens",
                        "description": "Palm Beach Gardens is a vibrant community known for its luxurious living, world-class golf courses, and cultural activities.",
                        "image": "https://josecostarealtor.com/static/media/PALMBEACHGARDENS-HEADER.ff7dc9e2abfe99c9fb9e.webp",
                        "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "26.8234",
                        "longitude": "-80.1387"
                        },
                        "containedInPlace": {
                        "@type": "AdministrativeArea",
                        "name": "Palm Beach County"
                        },
                        "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Palm Beach Gardens",
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
                                "description": "A vibrant cultural scene and diverse living options, where tropical ambiance meets luxury.",
                                "image": "https://josecostarealtor.com/static/media/lifestyle.321ea8566ac9ccff7262.webp"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "Education",
                                "description": "Palm Beach Gardens offers a network of public schools committed to providing quality education from elementary to high school.",
                                "image": "https://josecostarealtor.com/static/media/education.7fc3c84d87b2337cd84b.webp"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "Neighborhood Amenities",
                                "description": "Home to premier golf courses, luxurious shopping, and dining.",
                                "image": "https://josecostarealtor.com/static/media/neighborhood.eaf178c1382e6c67a9d4.webp"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "Transportation",
                                "description": "Efficient transportation options connect Palm Beach Gardens residents to local and regional destinations with ease.",
                                "image": "https://josecostarealtor.com/static/media/transportation.ed4d97f671148a0ef2dd.webp"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "Local Attractions",
                                "description": "Discover the prestigious PGA National Resort and lush shopping districts, a hub for golf and shopping enthusiasts.",
                                "image": "https://josecostarealtor.com/static/media/localattraction.9886376c730c8277d524.webp"
                            }
                            },
                            {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Product",
                                "name": "Real Estate Trends",
                                "description": "A healthy balance of supply and demand, making this a desirable location for homebuyers and investors.",
                                "image": "https://josecostarealtor.com/static/media/realestate.403a6d0dadb1fef0d9b7.webp"
                            }
                            }
                        ]
                        }
                    }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Palm Beach" />
                <div className="bannerContent">
                    <a href="https://www.thepalmbeaches.com/explore-cities/palm-beach-gardens"><h1 className="title">WELCOME TO PALM BEACH GARDENS</h1></a>
                    <p className="description">In Palm Beach Gardens, life is not just lived; it's celebrated. Embrace a community where every day brings new opportunities for joy and discovery.</p>
                </div>
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">

                </div>

                {/* Facts Grid */}
                <div className="facts-grid">
                    {factCards.map((card, index) => (
                        <LinkScroll
                            key={index}
                            to={card.heading.replace(/\s+/g, '-').toLowerCase()} // Create a URL-friendly id
                            smooth={true}
                            duration={500}
                            offset={-90}
                            className="fact-card-link"
                        >
                            <div className="fact-card" key={index} style={{ backgroundImage: `url(${card.image})` }}>
                                {/* <img src={card.icon} alt={card.alt} className="fact-icon" /> */}
                                <div className="spacer"></div>
                                <h3 className="fact-heading">{card.heading}</h3>
                                <p className="fact-description">{card.description}</p>
                            </div>
                        </LinkScroll>
                    ))}
                </div>

                <div className="conclusion">
                    <div className="closing-content">
                        <p className="closing">Your dream home awaits in Palm Beach Gardens, where the best of Florida living comes to life.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/palm beach gardens">SEARCH PALM BEACH GARDENS LISTINGS</a>
                </div>
            </div>
            
            {sections.map(section => (
            <div
            className="content-container"
            id={section.title.replace(/\s+/g, '-').toLowerCase()} // Ensure this matches the `to` prop in LinkScroll
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
                    
                    {/* <h3 className="description-title">{section.titleconclusion}</h3> */}
                    <p className="description-tag">{section.conclusion}</p>
                </div>
                <div className="content-img">
                    <img src={section.imgSrc} alt="Content Image" />
                </div>
                </div>
            </div>
            ))}
            <div className="extra-facts">
                <a href="https://www.pbgfl.com/"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/palm beach gardens">SEARCH PALM BEACH GARDENS LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PalmBeachGardens;

