import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/JUPITER-HEADER.webp'

import BeachPic from './cardimages/Jupiter/lifestyle.webp'
import CityPic from './cardimages/Jupiter/realestate.webp'
import OutdoorPic from './cardimages/Jupiter/neighborhood.webp'
import LocalAttractionsPic from './cardimages/Jupiter/localattraction.webp'
import EducationPic from './cardimages/Jupiter/education.webp'
import TransportationPic from './cardimages/Jupiter/transportation.webp'

//CONTENT IMAGES
import CommunityContent from './contentimages/Jupiter/community.webp'
import EducationContent from './contentimages/Jupiter/education.webp'
import NeighborhoodContent from './contentimages/Jupiter/neighborhood.webp'
import AttractionsContent from './contentimages/Jupiter/attractions.webp'
import TransportationContent from './contentimages/Jupiter/transportation.webp'
import RealEstateContent from './contentimages/Jupiter/realestate.webp'

const Jupiter = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Laid-back beach living with vibrant community amenities and a family-friendly atmosphere"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "High-quality education with top-rated schools and diverse programs, ideal for family-focused residents."
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Luxury golf communities, premier waterfront living, and family-friendly amenities"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Extensive public transit, close proximity to major airports, and excellent road networks"
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Rich in natural beauty and outdoor activities"
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "Thriving with rising home values, quick sales, and significant interest from out-of-state buyers"
        }
        // Add more fact cards following the same structure
    ];


    const sections = [
        { id: 1,
            title: factCards[0].heading, 
            titledescription: "Beach Access and Outdoor Activities:",
            description: "Jupiter is celebrated for its beautiful beaches and outdoor recreational opportunities. The community enjoys over three miles of coastline offering a range of activities from boating to beach volleyball, creating an ideal environment for those who love the outdoors​.", 
            
            titledescription2: "High Quality of Life:",
            description2: "Residents of Jupiter enjoy a high quality of life marked by low crime rates and a family-friendly atmosphere. The town provides a safe, suburban environment with excellent facilities and services, making it a great place to raise a family​.",
            
            titledescription3: "Dining and Entertainment:",
            description3: "Jupiter offers a vibrant dining and entertainment scene with a variety of restaurants, bars, and leisure activities. Whether you're looking for a casual eatery, a sophisticated dining experience, or live entertainment, Jupiter has something to cater to all tastes.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Jupiter's community combines easy access to natural beauty with a robust array of urban amenities, creating a lifestyle that's both relaxed and rich with opportunities. This makes it an appealing destination for families, retirees, and anyone looking for a high-quality coastal life.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "https://honestproscons.com/pros-and-cons-of-living-in-jupiter-fl/" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Top-Rated Public Schools",
            description: "Jupiter is home to several top-rated public schools according to GreatSchools ratings, providing quality education from elementary through high school.", 
            
            titledescription2: "Diverse Educational Offerings:",
            description2: "The School District of Palm Beach County, serving Jupiter, offers a wide variety of choice and career programs, enhancing the educational landscape for students. These programs range from STEM to the arts, catering to the diverse interests and talents of students.",
            
            titledescription3: "Community Involvement and Safety:",
            description3: "Education in Jupiter is community-focused with schools playing an integral role in the town's social fabric. The community prioritizes safety and a supportive atmosphere, which are pivotal in fostering an environment conducive to learning and development.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Jupiter’s commitment to high-quality education, diverse programs, and a safe, community-centric environment makes it an excellent choice for families seeking outstanding educational opportunities for their children.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Golf and Country Club Communities:",
            description: "Jupiter is known for its luxurious golf and country club communities, which offer stunning golf courses, fitness centers, and social clubs. These amenities cater to an upscale lifestyle, providing residents with recreational and social opportunities just steps from their homes.", 
            
            titledescription2: "Waterfront and Boating Facilities:",
            description2: "Many neighborhoods in Jupiter, such as Admirals Cove and the Jupiter Yacht Club, feature waterfront homes with access to private marinas and boat docks. This makes Jupiter an ideal location for boating enthusiasts and those who love waterfront living.",
            
            titledescription3: "Family-Friendly Atmosphere:",
            description3: "Neighborhoods like Abacoa are celebrated for their family-friendly environment, featuring A-rated schools, community parks, and a vibrant downtown area. These areas are designed to promote community engagement and are perfect for families looking for a supportive and active community.",
            
            titleconclusion: "conclusion",
            conclusion: "Jupiter’s neighborhoods offer a mix of luxury amenities, waterfront living, and a strong community spirit, making it a top choice for families and individuals looking for quality life in a beautiful, coastal setting.",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transit Services:",
            description: "Jupiter is well-connected through Palm Tran. This accessibility is further enhanced by the Tri-Rail system, which provides rail connections throughout South Florida, making regional travel convenient for residents and visitors alike.", 
            
            titledescription2: "Proximity to Major Airports:",
            description2: "The town is conveniently located near several major airports, with Palm Beach International Airport just 20 minutes away. This proximity makes Jupiter an accessible destination for both domestic and international travelers, facilitating easy travel plans.",
            
            titledescription3: "Road and Highway Access:",
            description3: "Jupiter benefits from excellent road infrastructure, with easy access to major highways such as I-95 and Florida’s Turnpike. This network allows for efficient commuting and travel to other major urban centers like Miami and Orlando, enhancing Jupiter’s appeal for commuters.",
            
            titleconclusion: "conclusion",
            conclusion: "Jupiter's robust transportation network, including well-maintained public transit options, proximity to major airports, and excellent road connectivity, makes it a highly accessible location for residents and businesses.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "" 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Historical and Cultural Sites:",
            description: "The iconic Jupiter Inlet Lighthouse, operational since 1860, offers visitors panoramic views and a dive into local history through museum exhibits and guided tours. This landmark, along with the Maltz Jupiter Theatre which provides high-quality theatrical productions, showcases Jupiter’s rich cultural heritage.", 
            
            titledescription2: "Outdoor Adventures:",
            description2: "Jupiter’s numerous parks and natural reserves, such as the Busch Wildlife Sanctuary and Riverbend Park, offer abundant opportunities for hiking, kayaking, and wildlife observation. These spots are perfect for those who appreciate the great outdoors and want to experience Florida’s native ecosystems.",
            
            titledescription3: "Water Activities and Beaches:",
            description3: "Home to some of Florida’s best beaches, Jupiter offers a variety of water-related activities including swimming, snorkeling at Dubois Park, and boating tours from Cruisin Tikis and Blue Bliss Charters. The town’s dog-friendly beaches also make it a perfect spot for pet owners to enjoy the sand and sea with their furry friends.",
            
            titleconclusion: "conclusion",
            conclusion: "Jupiter, Florida, is a haven for those seeking cultural depth, outdoor excitement, and water-based adventures, making it an ideal destination for both residents and tourists looking for diverse experiences in a scenic coastal setting.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "" 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Rising Home Values:",
            description: "Jupiter's real estate market has seen significant appreciation, with home prices increasing notably over the past year. This trend reflects Jupiter’s growing appeal and the sustained demand for homes in the area.", 
            
            titledescription2: "Market Dynamics:",
            description2: "Homes in Jupiter are selling faster than in previous years, indicating a competitive market with strong buyer interest. The average home now spends fewer days on the market, highlighting the area's desirability.",
            
            titledescription3: "Diverse Buyer Interest:",
            description3: "The influx of buyers from major metropolitan areas like New York and Washington, D.C., continues to drive the market. This migration is bolstering property values and contributing to the area's dynamic real estate scene.",
            
            titleconclusion: "conclusion",
            conclusion: "Jupiter’s real estate market is characterized by rising home values and a strong influx of out-of-state buyers, making it a robust and attractive market for both residents and investors.",
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
                <img src={palmbeachbanner} alt="Jupiter" />
                <div className="bannerContent">
                    <a href="https://www.jupiter.fl.us/"><h1 className="title">WELCOME TO JUPITER</h1></a>
                    <p className="description">Explore Jupiter, Florida, where stunning beaches meet a vibrant community life and robust real estate opportunities.</p>
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
                        <p className="closing">Jupiter offers an unmatched blend of outdoor beauty, community spirit, and dynamic growth, making it an ideal place to call home.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/jupiter">SEARCH JUPITER LISTINGS</a>
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
                <a href="https://www.jupiter.fl.us/"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/jupiter">SEARCH JUPITER LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Jupiter;

