import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/BOYNTON-HEADER.webp'

import BeachPic from './cardimages/BoyntonBeach/lifestyle.webp'
import CityPic from './cardimages/Delray/realestate.jpeg'
import OutdoorPic from './cardimages/BoyntonBeach/neighborhood.webp'
import LocalAttractionsPic from './cardimages/BoyntonBeach/localattraction.webp'
import EducationPic from './cardimages/BoyntonBeach/education.webp'
import TransportationPic from './cardimages/BoyntonBeach/transportation.webp'

//CONTENT IMAGES
import CommunityContent from './contentimages/BoyntonBeach/community.webp'
import EducationContent from './contentimages/BoyntonBeach/education.webp'
import NeighborhoodContent from './contentimages/BoyntonBeach/neighborhood.webp'
import AttractionsContent from './contentimages/BoyntonBeach/attractions.webp'
import TransportationContent from './contentimages/BoyntonBeach/transportation.webp'
import RealEstateContent from './contentimages/BoyntonBeach/realestate.webp'

const BoyntonBeach = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Offering a vibrant lifestyle, extensive recreational activities, and a strong sense of community"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "High-performing public schools and a variety of private and charter school options"
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Featuring a variety of amenities, including luxurious gated communities, abundant shopping and dining, and family-friendly parks"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Comprehensive transit options with efficient public transportation and quick access to major highways and airports."
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "home to beautiful beaches, cultural venues, and recreational parks"
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
            description: "Boynton Beach boasts a dynamic local atmosphere with numerous community events and a lively downtown area. This vibrant scene is supported by various eateries and breweries.", 
            
            titledescription2: "Outdoor and Recreational Opportunities:",
            description2: "With its location close to the Atlantic Ocean, Boynton Beach provides plentiful outdoor activities ranging from beach-related recreation at Oceanfront Park Beach to extensive park facilities.",
            
            titledescription3: "Cultural Engagement:",
            description3: "The city is committed to fostering a rich cultural environment through public arts initiatives and facilities like the Arts & Cultural Center.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Boynton Beach offers a rich, active lifestyle with its mix of community events, outdoor activities, and cultural opportunities, making it an appealing choice for those seeking a vibrant community on Florida’s east coast.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Public School Excellence:",
            description: "Boynton Beach is home to highly rated public schools that provide quality education. Sunset Palms Elementary and Christa McAuliffe Middle School are standout examples.", 
            
            titledescription2: "Private and Charter Schools:",
            description2: "The city also supports a variety of charter and private schools, giving families alternative educational choices.",
            
            titledescription3: "Continuing and Adult Education:",
            description3: "Boynton Beach values lifelong learning, offering adult education programs through local high schools and community centers.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Boynton Beach’s educational system, with its strong public schools, diverse private and charter options, and comprehensive adult education, provides excellent opportunities for students of all ages.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Recreational Facilities:",
            description: "Boynton Beach is equipped with numerous parks and recreational centers, such as the Barrier Free Park, which offer sports facilities, walking trails, and playgrounds.", 
            
            titledescription2: "Shopping and Dining:",
            description2: "The city provides a vibrant shopping and dining scene, especially around Boynton Beach Mall and Renaissance Commons. These areas feature a variety of shops and restaurants that cater to all tastes and budgets.",
            
            titledescription3: "Active Adult and Family-Friendly Communities:",
            description3: "Boynton Beach is home to several active adult communities, like Valencia Bay, which offer resort-style amenities tailored to older adults seeking an active lifestyle. Additionally, family-friendly neighborhoods offer amenities like pools, clubhouses, and community events.",
            
            titleconclusion: "conclusion",
            conclusion: "Boynton Beach’s neighborhood amenities cater to a diverse population, featuring extensive recreational facilities, a thriving shopping and dining culture, and a range of community-oriented living options.",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Comprehensive Public Transit:",
            description: "Boynton Beach is served by Palm Tran, providing bus routes that connect the city to larger hubs like West Palm Beach. Tri-Rail also offers commuter train services, facilitating easy access to cities along the southeast coast of Florida.", 
            
            titledescription2: "Road Infrastructure and Accessibility:",
            description2: "The city is well-connected by major highways, including Interstate 95 and the Florida Turnpike, making it easy to drive to and from neighboring cities.",
            
            titledescription3: "Local and On-Demand Transportation Services:",
            description3: "For more localized travel, residents can utilize services like Uber and Lyft. The city also supports biking and walking, with several dedicated lanes and trails that promote a healthy, active lifestyle.",
            
            titleconclusion: "conclusion",
            conclusion: "Boynton Beach's transportation system provides comprehensive services and excellent infrastructure, ensuring easy access both within the city and to the broader South Florida area.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Beaches and Waterfront Activities:",
            description: "Boynton Beach Oceanfront Park is renowned for its well-maintained beach and family-friendly amenities. The Boynton Harbor Marina offers boating and fishing opportunities, providing direct access to the beautiful coral and artificial reefs of the Palm Beaches.", 
            
            titledescription2: "Nature and Wildlife Areas:",
            description2: "The Green Cay Nature Center and the Arthur R. Marshall Loxahatchee National Wildlife Refuge offer extensive opportunities for wildlife observation and nature walks. These areas are crucial for environmental education and provide serene settings.",
            
            titledescription3: "Cultural and Recreational Venues:",
            description3: "Boynton Beach's cultural scene is highlighted by the Schoolhouse Children's Museum & Learning Center and regular community events like art festivals and music performances.",
            
            titleconclusion: "conclusion",
            conclusion: "Boynton Beach is a hub of diverse attractions, from its vibrant waterfront activities and serene natural preserves to its rich cultural venues.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "" 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Market Appreciation:",
            description: "Boynton Beach has experienced significant growth in home values, with an average median home price increase of about 11.8% over the past year.", 
            
            titledescription2: "Sales Dynamics:",
            description2: "Homes in Boynton Beach tend to sell relatively quickly, averaging around 71 days on the market. This rapid turnover indicates a strong demand and a competitive housing market.",
            
            titledescription3: "Buyer Attraction:",
            description3: "The area continues to attract a diverse range of buyers, including significant inflows from major cities, which supports the dynamic nature of the real estate market and suggests continued interest and investment in the area.",
            
            titleconclusion: "conclusion",
            conclusion: "Boynton Beach's real estate market is robust, marked by strong growth, quick sales, and broad buyer interest, making it a promising area for real estate investment and residential living.",
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
                <div className="bannerContent">
                    <a href="https://www.boynton-beach.org/"><h1 className="title">WELCOME TO BOYNTON BEACH</h1></a>
                    <p className="description">Discover Boynton Beach, a flourishing Florida city known for its welcoming community, scenic beauty, and vibrant lifestyle.</p>
                </div>
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}

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
                        <p className="closing">Boynton Beach is the perfect blend of suburban tranquility and urban excitement, making it an ideal destination for those seeking the best of both worlds.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/boynton beach">SEARCH BOYNTON BEACH LISTINGS</a>
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
                <a href="https://www.boynton-beach.org/"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/boynton beach">SEARCH BOYNTON BEACH LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BoyntonBeach;

