import React from "react";
import Footer from "../Footer";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/palmbeachHEADER.jpeg'

import BeachIcon from './icons/beach.png';
import CityIcon from './icons/building.png';
import OutdoorIcon from './icons/flag.png';
import ConservationIcon from './icons/earth.png';
import ArtIcon from './icons/theatre.png';
import EducationIcon from './icons/mortarboard.png';

const PalmBeach = () => {
    return (
        <div className="palmBeachContainer">
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Palm Beach" />
            </div>

            {/* Introduction */}
            <div className="introduction">
                <a href="https://www.thepalmbeaches.com/"><h1 className="title">Welcome to Palm Beach</h1></a>
                <p>Discover the beauty and luxury of Palm Beach, a haven of serene beaches, exquisite dining, and vibrant culture.</p>
            </div>

            {/* Facts Grid */}
            <div className="facts-grid">
                {/* Beach */}
                <div className="fact-card">
                    <img src={BeachIcon} alt="Beach" className="fact-icon" />
                    <h3 className="fact-heading">Pristine Beaches</h3>
                    <p className="fact-description">Over 47 miles of stunning coastline, making it a paradise for beach lovers.</p>
                </div>

                {/* City Facts */}
                <div className="fact-card">
                    <img src={CityIcon} alt="City" className="fact-icon" />
                    <h3 className="fact-heading">Vibrant City Life</h3>
                    <p className="fact-description">The largest county in Florida by area, offering diverse living environments.</p>
                </div>

                {/* Outdoor Activities */}
                <div className="fact-card">
                    <img src={OutdoorIcon} alt="Outdoor" className="fact-icon" />
                    <h3 className="fact-heading">Outdoor Paradise</h3>
                    <p className="fact-description">Home to more than 160 golf courses and extensive parks and natural areas.</p>
                </div>

                {/* Conservation */}
                <div className="fact-card">
                    <img src={ConservationIcon} alt="Conservation" className="fact-icon" />
                    <h3 className="fact-heading">Commitment to Conservation</h3>
                    <p className="fact-description">Over 31,000 acres of parks and natural areas, ideal for exploring Florida's wildlife.</p>
                </div>

                {/* Arts and Culture */}
                <div className="fact-card">
                    <img src={ArtIcon} alt="Art" className="fact-icon" />
                    <h3 className="fact-heading">Rich Cultural Scene</h3>
                    <p className="fact-description">Vibrant arts and entertainment districts with numerous museums, theaters, and galleries.</p>
                </div>

                {/* Education */}
                <div className="fact-card">
                    <img src={EducationIcon} alt="Education" className="fact-icon" />
                    <h3 className="fact-heading">Top-Rated Education</h3>
                    <p className="fact-description">Boasting some of the highest-rated public schools in the state, making it an excellent choice for families.</p>
                </div>
            </div>
            <div className="extra-facts">
                <a href="https://discover.pbcgov.org/pages/pbc_facts.aspx"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
            </div>
            <div className="search" ><a href="/listing-results/palm beach">Search Palm Beach Listings</a></div>
            <Footer />
        </div>
    );
};

export default PalmBeach;

