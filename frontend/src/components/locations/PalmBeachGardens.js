import React from "react";
import BackHeader from "../BackHeader";
import Footer from "../Footer";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import gardensbanner from '../../images/Areas/pbgardensHEADER.jpeg'

import BeachIcon from './icons/beach.png';
import CityIcon from './icons/building.png';
import OutdoorIcon from './icons/flag.png';
import ConservationIcon from './icons/earth.png';
import ArtIcon from './icons/theatre.png';
import EducationIcon from './icons/mortarboard.png';

const PalmBeachGardens = () => {
    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={gardensbanner} alt="Palm Beach Gardens" />
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.thepalmbeaches.com/"><h1 className="title">WELCOME TO PALM BEACH GARDENS</h1></a>
                        <p className="description">Discover the beauty and luxury of Palm Beach, a haven of serene beaches, exquisite dining, and vibrant culture.</p>
                    </div>
                </div>

                {/* Facts Grid */}
                <div className="facts-grid">
                    {/* Beach */}
                    <div className="fact-card">
                        <img src={BeachIcon} alt="Beach" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">PRISTINE BEACHES</h3>
                        <p className="fact-description">Over 47 miles of stunning coastline, making it a paradise for beach lovers.</p>
                    </div>

                    {/* City Facts */}
                    <div className="fact-card">
                        <img src={CityIcon} alt="City" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">VIBRANT CITY LIFE</h3>
                        <p className="fact-description">The largest county in Florida by area, offering diverse living environments.</p>
                    </div>

                    {/* Outdoor Activities */}
                    <div className="fact-card">
                        <img src={OutdoorIcon} alt="Outdoor" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">OUTDOOR PARADISE</h3>
                        <p className="fact-description">Home to more than 160 golf courses and extensive parks and natural areas.</p>
                    </div>

                    {/* Conservation */}
                    <div className="fact-card">
                        <img src={ConservationIcon} alt="Conservation" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">COMMITMENT TO CONSERVATION</h3>
                        <p className="fact-description">Over 31,000 acres of parks and natural areas, ideal for exploring Florida's wildlife.</p>
                    </div>

                    {/* Arts and Culture */}
                    <div className="fact-card">
                        <img src={ArtIcon} alt="Art" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">RICH CULTURAL SCENE</h3>
                        <p className="fact-description">Vibrant arts and entertainment districts with numerous museums, theaters, and galleries.</p>
                    </div>

                    {/* Education */}
                    <div className="fact-card">
                        <img src={EducationIcon} alt="Education" className="fact-icon" />
                        <div className="spacer"></div>
                        <h3 className="fact-heading">TOP-RATED EDUCATION</h3>
                        <p className="fact-description">Boasting some of the highest-rated public schools in the state.</p>
                    </div>
                </div>
                <div className="extra-facts">
                    <a href="https://discover.pbcgov.org/pages/pbc_facts.aspx"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
                </div>
            </div>
            
            <div className="search" ><a href="/listing-results/palm beach">SEARCH PALM BEACH GARDENS LISTINGS</a></div>
            <Footer />
        </div>
    );
};

export default PalmBeachGardens;

