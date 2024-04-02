import React from "react";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeachGardens.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/PALMBEACH-HEADER.jpeg'

import BeachPic from './cardimages/PalmBeach/Beach.jpeg'
import CityPic from './cardimages/PalmBeach/city.jpeg'
import OutdoorPic from './cardimages/PalmBeach/golf.jpeg'
import LocalAttractionsPic from './cardimages/PalmBeach/localattractions.jpeg'
import ArtPic from './cardimages/PalmBeach/arts.jpeg'
import EducationPic from './cardimages/PalmBeach/education.jpeg'
import TransportationPic from './cardimages/PalmBeach/transportation.jpeg'

const PalmBeach = () => {

    // Define your fact cards data
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
            heading: "TRANSPORTATION & COMMUTING",
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
        // Add more fact cards following the same structure
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Palm Beach" />
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.thepalmbeaches.com/explore-cities/palm-beach"><h1 className="title">WELCOME TO PALM BEACH</h1></a>
                        <p className="description">Discover the beauty and luxury of Palm Beach, a haven of serene beaches, exquisite dining, and vibrant culture.</p>
                    </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-grid">
                    {factCards.map((card, index) => (
                        <div className="fact-card" key={index} style={{ backgroundImage: `url(${card.image})` }}>
                            {/* <img src={card.icon} alt={card.alt} className="fact-icon" /> */}
                            <div className="spacer"></div>
                            <h3 className="fact-heading">{card.heading}</h3>
                            <p className="fact-description">{card.description}</p>
                        </div>
                    ))}
                </div>

                <div className="conclusion">
                    <div className="closing-content">
                        <p className="closing">In Palm Beach, you're not just buying a home; you're embracing a lifestyle that blends relaxation, culture, and community. A place where life is always sunny, and every day brings a new adventure. Welcome home.</p>
                    </div>
                </div>
                
                <div className="extra-facts">
                    <a href="https://discover.pbcgov.org/pages/pbc_facts.aspx"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
                </div>
            </div>
            
            <div className="search" ><a href="/listing-results/palm beach">SEARCH PALM BEACH LISTINGS</a></div>
            <Footer />
        </div>
    );
};

export default PalmBeach;

