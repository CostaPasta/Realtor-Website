import React from "react";
import Footer from "../Footer";
import './css/PalmBeachGardens.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/palmbeachHEADER.jpeg'

import BeachIcon from './icons/beach.png';
import CityIcon from './icons/building.png';
import OutdoorIcon from './icons/flag.png';
import ConservationIcon from './icons/earth.png';
import ArtIcon from './icons/theatre.png';
import EducationIcon from './icons/mortarboard.png';

const PalmBeach = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: palmbeachbanner,
            icon: BeachIcon,
            alt: "Beach",
            heading: "PRISTINE BEACHES",
            description: "Over 47 miles of stunning coastline, making it a paradise for beach lovers."
        },
        {
            icon: CityIcon,
            alt: "City",
            heading: "VIBRANT CITY LIFE",
            description: "The largest county in Florida by area, offering diverse living environments."
        },
        {
            icon: OutdoorIcon,
            alt: "Outdoors",
            heading: "OUTDOOR PARADISE",
            description: "Home to more than 160 golf courses and extensive parks and natural areas."
        },
        {
            icon: ConservationIcon,
            alt: "Conservation",
            heading: "COMMITMENT TO CONSERVATION",
            description: "Over 31,000 acres of parks and natural areas, ideal for exploring Florida's wildlife."
        },
        {
            icon: ArtIcon,
            alt: "Cultural Masks",
            heading: "RICH CULTURAL SCENE",
            description: "Vibrant arts and entertainment districts with numerous museums, theaters, and galleries."
        },
        {
            icon: EducationIcon,
            alt: "Education",
            heading: "TOP-RATED EDUCATION",
            description: "Boasting some of the highest-rated public schools in the state."
        }
        // Add more fact cards following the same structure
    ];

    return (
        <div className="palmBeachContainer">
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Palm Beach" />
            </div>

            <div className="flex-wrapper">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.thepalmbeaches.com/"><h1 className="title">WELCOME TO PALM BEACH</h1></a>
                        <p>Discover the beauty and luxury of Palm Beach, a haven of serene beaches, exquisite dining, and vibrant culture.</p>
                    </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-grid">
                    {factCards.map((card, index) => (
                        <div className="fact-card" key={index} >
                            <img src={card.icon} alt={card.alt} className="fact-icon" />
                            <div className="spacer"></div>
                            <h3 className="fact-heading">{card.heading}</h3>
                            <p className="fact-description">{card.description}</p>
                        </div>
                    ))}
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

