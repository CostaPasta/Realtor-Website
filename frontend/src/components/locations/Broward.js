import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/BROWARD-HEADER.jpeg'

import BeachPic from './cardimages/Broward/lifestyle.jpeg'
import CityPic from './cardimages/Broward/realestate.jpeg'
import OutdoorPic from './cardimages/Broward/neighborhood.jpeg'
import LocalAttractionsPic from './cardimages/Broward/localattraction.jpeg'
import EducationPic from './cardimages/Broward/education.jpeg'
import TransportationPic from './cardimages/Broward/transportation.jpeg'

//CONTENT IMAGES
import CommunityContent from './contentimages/Broward/community.jpeg'
import EducationContent from './contentimages/Broward/education.jpeg'
import NeighborhoodContent from './contentimages/Broward/neighborhood.jpeg'
import AttractionsContent from './contentimages/Broward/attractions.jpeg'
import TransportationContent from './contentimages/Broward/transportation.jpeg'
import RealEstateContent from './contentimages/Broward/realestate.jpeg'

const Broward = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Offering a mix of urban and suburban living, with diverse cultural, recreational, and dining opportunities"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "Comprehensive educational system with numerous public, private, and charter schools"
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Well-equipped with amenities like parks, shopping centers, and community activities"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Extensive public transit systems, major highways, and international airports"
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Lush parks and beautiful beaches to museums and performance venues"
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
            titledescription: "Diverse and Vibrant Communities:",
            description: "Broward County hosts a variety of communities, each with unique characteristics. From the bustling urban environment of Fort Lauderdale to the tranquil suburban areas like Weston, there’s a place for every lifestyle.", 
            
            titledescription2: "Recreational and Outdoor Activities:",
            description2: "The county offers extensive parks and recreational facilities, including over 50 regional parks and nature centers like the Everglades Wildlife Management Area. These spaces provide opportunities for hiking, biking, fishing, and boating, making it perfect for outdoor enthusiasts.",
            
            titledescription3: "Cultural Richness:",
            description3: "Broward County is rich in cultural experiences, featuring numerous theaters, museums, and galleries. The Broward Center for the Performing Arts and the Museum of Discovery and Science are key venues.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Broward County provides a dynamic living environment with diverse communities, abundant outdoor activities, and a thriving cultural scene.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Diverse and Extensive School System:",
            description: "Broward County hosts one of the largest public school systems in the United States, serving a diverse student population with a wide array of educational programs across numerous schools.", 
            
            titledescription2: "Higher Education and Vocational Training:",
            description2: "In addition to its strong K-12 schools, Broward County is home to Broward College, which offers a range of associate and baccalaureate degree programs aimed at both academic and career-focused students.",
            
            titledescription3: "Commitment to Technology and Innovation in Education:",
            description3: "The county's public schools are focused on integrating technology and innovative teaching methods into the classroom, preparing students for a future in an increasingly digital world.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Broward County’s education system is characterized by its size, diversity, and commitment to providing comprehensive educational opportunities.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Family-Friendly Communities:",
            description: "Broward County is renowned for its family-oriented neighborhoods like Weston and Parkland, which are celebrated for their excellent schools, low crime rates, and abundance of parks and recreational spaces.", 
            
            titledescription2: "Recreational and Green Spaces:",
            description2: "The county boasts numerous parks and natural reserves like Markham Park in Weston, which provides diverse recreational facilities including bike trails, a model airplane field, and a shooting range.",
            
            titledescription3: "Cultural and Dining Hotspots:",
            description3: "Broward County's vibrant social scene is highlighted in areas like Pompano Beach, known for its beautiful beaches and cultural diversity.",
            
            titleconclusion: "conclusion",
            conclusion: "With its mix of serene suburban areas, active recreational parks, and vibrant cultural scenes, Broward County offers a dynamic and inviting community environment.",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transit Systems:",
            description: "Broward County offers a comprehensive public transit network through Broward County Transit (BCT), which provides extensive bus services covering a wide area.", 
            
            titledescription2: "Commuter and Express Rail Services:",
            description2: "For those needing to travel further or avoid road traffic, the Tri-Rail commuter rail system links Broward County with Miami and Palm Beach counties. Additionally, Brightline offers fast rail services connecting key cities like Fort Lauderdale, Miami, and West Palm Beach.",
            
            titledescription3: "Local and On-Demand Transit Options:",
            description3: "Residents and visitors can also utilize local shuttles and on-demand services designed to improve connectivity within communities.",
            
            titleconclusion: "conclusion",
            conclusion: "Broward County's transportation network is robust, featuring a variety of transit options that cater to a broad spectrum of needs, from local commuting to regional travel.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Beachfront Leisure:",
            description: "Broward County's beaches, such as Hollywood Beach and Fort Lauderdale Beach, offer scenic strolls and vibrant oceanfront activities.", 
            
            titledescription2: "Cultural Experiences:",
            description2: "The county is rich in cultural offerings, with institutions like the NSU Art Museum in Fort Lauderdale and the Art and Culture Center in Hollywood. These centers provide a range of exhibitions and educational programs that showcase both local and international art.",
            
            titledescription3: "Outdoor Adventures:",
            description3: "For those who love nature and adventure, the Everglades National Park offers thrilling airboat tours, and places like the Anne Kolb Nature Center present a serene environment for wildlife observation and quiet exploration of natural habitats.",
            
            titleconclusion: "conclusion",
            conclusion: "Broward County is a destination filled with diverse attractions, from its beautiful beaches and rich cultural venues to adventurous outdoor activities, providing endless entertainment.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "" 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Market Resilience and Growth:",
            description: "Broward County's real estate market has demonstrated resilience with a noticeable growth in home prices, seeing an increase of up to 12.8% year-over-year. This trend highlights the county's strong demand and the overall health of the housing market.", 
            
            titledescription2: "Sales and Market Dynamics:",
            description2: "Properties in Broward County are selling relatively quickly, with homes staying on the market for about 65 days on average. The quick turnover signifies a balanced market.",
            
            titledescription3: "Diverse Housing Options:",
            description3: "The county offers a wide range of housing options, from upscale waterfront properties to more affordable homes, catering to a variety of preferences and budgets.",
            
            titleconclusion: "conclusion",
            conclusion: "Broward County's real estate market is characterized by its growth, quick sales, and diverse offerings.",
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
                <img src={palmbeachbanner} alt="Broward" />
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.broward.org/Pages/Welcome.aspx"><h1 className="title">WELCOME TO BROWARD</h1></a>
                        <p className="description">Explore Broward County, a vibrant community known for its beautiful landscapes, cultural diversity, and thriving real estate market.</p>
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
                            </div>
                        </LinkScroll>
                    ))}
                </div>

                <div className="conclusion">
                    <div className="closing-content">
                        <p className="closing">Whether you're looking for a bustling city vibe or a quiet suburban retreat, Broward County offers a unique blend of lifestyle choices, making it the perfect place to call home.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/broward">SEARCH BROWARD LISTINGS</a>
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
                <a href="https://www.broward.org/Pages/Welcome.aspx"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/broward">SEARCH BROWARD LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Broward;

