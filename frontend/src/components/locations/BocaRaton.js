import React from "react";
import { Link as LinkScroll } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct

import palmbeachbanner from '../../images/Areas/Headers/BOCA-HEADER.webp';

import BeachPic from './cardimages/BocaRaton/lifestyle.webp';
import CityPic from './cardimages/BocaRaton/realestate.webp';
import OutdoorPic from './cardimages/BocaRaton/neighborhood.webp';
import LocalAttractionsPic from './cardimages/BocaRaton/localattraction.webp';
import EducationPic from './cardimages/BocaRaton/education.webp';
import TransportationPic from './cardimages/BocaRaton/transportation.webp';

// CONTENT IMAGES
import CommunityContent from './contentimages/BocaRaton/community.webp';
import EducationContent from './contentimages/BocaRaton/education.webp';
import NeighborhoodContent from './contentimages/BocaRaton/neighborhood.webp';
import AttractionsContent from './contentimages/BocaRaton/attractions.webp';
import TransportationContent from './contentimages/BocaRaton/transportation.webp';
import RealEstateContent from './contentimages/BocaRaton/realestate.webp';

const BocaRaton = () => {
    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Luxurious lifestyle with beautiful beaches, upscale communities, and a vibrant cultural scene"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "Known for its excellent educational system featuring top-rated schools and diverse programs for all ages"
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Featuring high-end shopping, luxurious amenities, and abundant parks and recreational areas"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Efficient public transit, major highway access, and fast rail services"
        },
        {
            image: LocalAttractionsPic,
            alt: "Local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "Combining natural beauty with cultural richness, offering beaches, art venues, and outdoor activities"
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "Strong growth in property values and a diverse range of housing options"
        }
        // Add more fact cards following the same structure
    ];

    const sections = [
        {
            id: 1,
            title: factCards[0].heading,
            titledescription: "Upscale Residential Living:",
            description: "Boca Raton is known for its luxurious gated communities, which offer residents a variety of high-end amenities. These neighborhoods are designed for those seeking an upscale lifestyle with access to state-of-the-art amenities all within a secure environment.",
            titledescription2: "Beach and Waterfront Recreation:",
            description2: "The city offers easy access to some of Florida’s top beaches. With spots like South Beach Park and Red Reef Park, residents can enjoy pristine sandy beaches and a variety of outdoor activities year-round.",
            titledescription3: "Cultural and Social Life:",
            description3: "Boca Raton boasts a vibrant cultural scene with several museums, theaters, and art galleries. The Boca Raton Museum of Art and annual festivals like the Boca Raton Festival of the Arts highlight the city's commitment to fostering a dynamic social and cultural environment.",
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Boca Raton provides an exquisite blend of luxury living, beachfront leisure, and cultural richness, making it an ideal destination for those seeking a high-quality lifestyle in a picturesque Florida setting.",
            imgSrc: CommunityContent,
            order: 'normal',
            alt: ""
        },
        {
            id: 2,
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
        {
            id: 3,
            title: factCards[2].heading,
            titledescription: "Exclusive Gated Communities:",
            description: "Boca Raton is famous for its gated communities, offering residents luxury living with top-notch security and privacy. These communities boast amenities such as golf courses, tennis courts, and private marinas, enhancing the upscale lifestyle for their residents",
            titledescription2: "Shopping and Dining:",
            description2: "The Town Center at Boca Raton provides a premier shopping experience with a variety of high-end stores and boutiques. Nearby Mizner Park also offers a mix of upscale shops and restaurants, along with cultural facilities, making it a central hub for shopping and entertainment​",
            titledescription3: "Parks and Recreation:",
            description3: "Sugar Sand Park and Red Reef Park are highlights, offering everything from nature trails and picnic areas to beach access and playgrounds, perfect for family outings and active lifestyles​ ",
            titleconclusion: "Conclusion",
            conclusion: "With its blend of luxurious community amenities, abundant shopping and dining options, and expansive parks, Boca Raton provides an enriched living experience making it a sought-after destination for residents who value a high-quality lifestyle.",
            imgSrc: NeighborhoodContent,
            order: 'normal',
            alt: ""
        },
        {
            id: 4,
            title: factCards[3].heading,
            titledescription: "Public Transit Options:",
            description: "Boca Raton provides robust public transit services including Palm Tran and Tri-Rail. This connectivity ensures that residents and visitors can easily navigate the area without relying solely on personal vehicles.",
            titledescription2: "Brightline Train Service:",
            description2: "The Brightline train service enhances Boca Raton’s connectivity with major cities like Miami and West Palm Beach, offering high-speed rail options that are perfect for commuters or those looking for a quick getaway.",
            titledescription3: "Road and Highway Access:",
            description3: "Boca Raton’s access to major highways such as I-95 and Florida’s Turnpike makes it strategically positioned for easy travel to and from neighboring cities and states. This extensive road network supports both local commuting and longer road trips​.",
            titleconclusion: "Conclusion",
            conclusion: "Boca Raton's diverse transportation network, featuring extensive public transit options, high-speed train services, and major highway access, makes it an accessible and convenient.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: ""
        },
        {
            id: 5,
            title: factCards[4].heading,
            titledescription: "Beach and Marine Life:",
            description: "Boca Raton's beaches, such as Red Reef Park, are perfect for sunbathing, snorkeling, and enjoying the marine life.",
            titledescription2: "Cultural Venues:",
            description2: "The Boca Raton Museum of Art and the Mizner Park Amphitheater are central to the city's cultural scene, hosting a variety of events from art exhibitions to concerts and festivals.",
            titledescription3: "Outdoor and Recreational Activities:",
            description3: "Gumbo Limbo Nature Center and Sugar Sand Park provide extensive nature trails, boardwalks, and educational programs that cater to all ages. These attractions are great for families looking to explore local ecosystems or simply enjoy a day out in beautiful settings.",
            titleconclusion: "Conclusion",
            conclusion: "Boca Raton is a treasure trove of natural beauty, cultural richness, and outdoor fun, offering a wide range of activities that make it an ideal destination for residents and visitors seeking quality leisure time in a scenic Florida setting.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: ""
        },
        {
            id: 6,
            title: factCards[5].heading,
            titledescription: "Market Growth and Property Values:",
            description: "The real estate market in Boca Raton continues to show strong growth. As of early 2024, the median home price increased by 22.5%, reflecting a strong demand for homes in this desirable area.",
            titledescription2: "Sales Dynamics:",
            description2: "Homes in Boca Raton are selling faster than before, indicating a competitive market.",
            titledescription3: "Diverse Housing Options:",
            description3: "Boca Raton offers a range of housing options from luxury waterfront properties to affordable condos. The variety of properties helps maintain a dynamic market and attracts both full-time residents and second-home buyers.",
            titleconclusion: "Conclusion",
            conclusion: "Boca Raton's real estate market is characterized by rising home values and a competitive sales environment, making it an attractive destination for buyers looking for luxury and lifestyle in one of Florida’s most sought-after locations.",
            imgSrc: RealEstateContent,
            order: 'reverse',
            alt: ""
        },
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader />
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="Boca Raton" />
                <div className="bannerContent">
                    <a href="https://www.myboca.us/"><h1 className="title">WELCOME TO BOCA RATON</h1></a>
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
                    <a href="/listing-results/boca raton">SEARCH BOCA RATON LISTINGS</a>
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

                            <p className="description-tag">{section.conclusion}</p>
                        </div>
                        <div className="content-img">
                            <img src={section.imgSrc} alt="Descriptive Alt Text" />
                        </div>
                    </div>
                </div>
            ))}
            <div className="extra-facts">
                <a href="https://www.myboca.us/"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/boca raton">SEARCH BOCA RATON LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BocaRaton;
