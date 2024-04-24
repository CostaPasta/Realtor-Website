import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/DELRAY-HEADER.jpeg'

import BeachPic from './cardimages/Delray/lifestyle.jpeg'
import CityPic from './cardimages/Delray/realestate.jpeg'
import OutdoorPic from './cardimages/Delray/neighborhood.jpeg'
import LocalAttractionsPic from './cardimages/Delray/localattraction.jpeg'
import EducationPic from './cardimages/Delray/education.jpeg'
import TransportationPic from './cardimages/Delray/transportation.jpeg'

//CONTENT IMAGES
import CommunityContent from './contentimages/Delray/community.jpeg'
import EducationContent from './contentimages/Delray/education.jpeg'
import NeighborhoodContent from './contentimages/Delray/neighborhood.jpeg'
import AttractionsContent from './contentimages/Delray/attractions.jpeg'
import TransportationContent from './contentimages/Delray/transportation.jpeg'
import RealEstateContent from './contentimages/Delray/realestate.jpeg'

const DelrayBeach = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Offering a lively blend of beachfront leisure and a vibrant social scene"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "Diverse educational opportunities with highly rated public schools and various private options"
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Featuring luxurious amenities, abundant recreational spaces, and a community-focused atmosphere"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Comprehensive transit options with efficient public transportation and strategic access to major highways and airports."
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Rich in cultural sites, natural beauty, and community activities"
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "Stable market growth, quick sales, and diverse housing"
        }
        // Add more fact cards following the same structure
    ];


    const sections = [
        { id: 1,
            title: factCards[0].heading, 
            titledescription: "Vibrant Social Scene:",
            description: "Delray Beach is celebrated for its lively social atmosphere, particularly in vibrant areas like Atlantic Avenue, which is lined with trendy restaurants, boutiques, and art galleries. The area is a hub for both daytime and nightlife activities.", 
            
            titledescription2: "Beachfront Living:",
            description2: "Delray Beach offers residents a stunning coastline with three miles of public beaches that are perfect for sunbathing, swimming, and water sports. The beachfront is complemented by amenities such as beach clubs and waterfront parks.",
            
            titledescription3: "Community-Focused Developments:",
            description3: "The city features several master-planned communities that provide a wide range of amenities including golf courses, tennis courts, and community centers. These developments are designed to foster a sense of community and offer residents everything they need within close proximity.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Delray Beach's community and lifestyle blend vibrant social opportunities with serene beachfront living and community-focused developments, making it a dynamic and desirable place to call home.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Highly Rated Public Schools:",
            description: "Delray Beach is served by the School District of Palm Beach County, known for its strong academic programs. Schools such as Morikami Park Elementary consistently receive high ratings for their excellence and innovation in education.", 
            
            titledescription2: "Private and Charter Schools:",
            description2: "Delray Beach has several well-regarded private and charter schools. These institutions, like the American Heritage School, are known for their rigorous curriculums and specialized programs.",
            
            titledescription3: "Community and Adult Education:",
            description3: "Delray Beach supports lifelong learning through adult education centers and community classes. The Delray Full Service Adult Education Center is a prime example of resources dedicated to adult learning and professional development.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Delray Beach offers a comprehensive education system with top-rated public schools, diverse private options, and strong support for community education.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Vibrant Downtown Area:",
            description: "Along Atlantic Avenue known as the heart of Delray, is bustling with activity, offering an array of shops, gourmet restaurants, and cultural venues like art galleries and live music spots.", 
            
            titledescription2: "Outdoor and Recreational Spaces:",
            description2: "Delray Beach boasts numerous parks and recreational areas such as the Wakodahatchee Wetlands and the Morikami Museum and Japanese Gardens. These sites offer residents and visitors a chance to enjoy South Florida's natural beauty.",
            
            titledescription3: "Community-Focused Living:",
            description3: "Delray Beach is a dynamic community with rich amenities that cater to a lifestyle of convenience and recreation, making it an appealing place for those who value a vibrant social atmosphere and access to natural beauty.",
            
            titleconclusion: "conclusion",
            conclusion: "Delray Beach is a dynamic community with rich amenities that cater to a lifestyle of convenience and recreation.",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transit Options:",
            description: "Delray Beach offers many public transportation options like Palm Tran and the Tri-Rail system. Palm Tran offers extensive bus services throughout Palm Beach County, while Tri-Rail provides convenient commuter rail service linking Delray Beach with Miami and other major cities in South Florida.", 
            
            titledescription2: "Downtown Shuttle and Freebee Services:",
            description2: "For more localized transportation, Delray Beach offers a downtown shuttle service and Freebee, a point-to-point service that operates within the city.",
            
            titledescription3: "Access to Major Airports:",
            description3: "Delray Beach is well-positioned with respect to major airports, being within easy driving distance of both Palm Beach International Airport and Fort Lauderdale-Hollywood International Airport.",
            
            titleconclusion: "conclusion",
            conclusion: "Delray Beach's transportation network efficiently supports both local commuting and broader regional travel, enhancing its appeal as a dynamic and connected community.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Beach and Nature Experiences:",
            description: "Delray Beach is well-known for its beautiful coastline and public beaches. The city also features natural attractions like the Wakodahatchee Wetlands, a perfect spot for wildlife enthusiasts to observe native Florida species in their natural habitat", 
            
            titledescription2: "Cultural and Historical Sites:",
            description2: "The Cornell Art Museum at Old School Square presents innovative contemporary art, serving as a cultural beacon in downtown Delray Beach. Additionally, the Morikami Museum and Japanese Gardens provide a deep dive into Japanese culture through its expansive gardens and exhibits.",
            
            titledescription3: "Recreational and Social Activities:",
            description3: "Delray Beach offers a vibrant social scene with its bustling Atlantic Avenue, where locals and tourists alike enjoy a plethora of dining options, boutiques, and entertainment venues. The city frequently hosts community events like art walks and music festivals.",
            
            titleconclusion: "conclusion",
            conclusion: "Delray Beach is a hub of activity and relaxation, offering a rich mix of cultural, recreational, and natural attractions that make it a compelling destination for residents and visitors seeking a dynamic yet laid-back lifestyle.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "" 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Market Stability and Growth:",
            description: "Delray Beach's real estate market has seen a stable growth pattern, with a recent modest increase in home prices. The median home price was around $360,000, reflecting steady demand and a healthy market environment.", 
            
            titledescription2: "Sales Dynamics:",
            description2: "Properties in Delray Beach continue to sell relatively quickly, often within a few months of listing. This indicates a sustained buyer interest and a dynamic market where homes are still moving at a good pace.",
            
            titledescription3: "Diverse Housing Options:",
            description3: "Delray Beach offers a variety of housing options, from waterfront properties to urban condos, catering to a broad range of preferences and budgets. This diversity helps attract a wide demographic of buyers, from retirees to young professionals.",
            
            titleconclusion: "conclusion",
            conclusion: "Delray Beach's real estate market is characterized by stability, consistent demand, and a diverse array of property types, making it an attractive location for buyers looking for both investment opportunities and a place to call home.",
            imgSrc: RealEstateContent,
            order: 'reverse',
            alt: "" 
        },
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Delray Beach" />
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.delraybeachfl.gov/"><h1 className="title">WELCOME TO DELRAY BEACH</h1></a>
                        <p className="description">Explore Delray Beach, a vibrant coastal city where community, culture, and comfort converge to create a truly unique lifestyle.</p>
                    </div>
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
                                <LinkScroll to=""></LinkScroll>
                            </div>
                        </LinkScroll>
                    ))}
                </div>

                <div className="conclusion">
                    <div className="closing-content">
                        <p className="closing">Delray Beach embodies the quintessential Florida lifestyle, offering sun, entertainment, and a welcoming community atmosphere perfect for any new resident.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/delray beach">SEARCH DELRAY LISTINGS</a>
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
                    <img src={section.imgSrc} alt="Descriptive Alt Text" />
                </div>
                </div>
            </div>
            ))}
            <div className="extra-facts">
                <a href="https://www.delraybeachfl.gov/"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/delray beach">SEARCH DELRAY LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DelrayBeach;

