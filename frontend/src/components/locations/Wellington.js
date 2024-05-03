import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/WELLINGTON-HEADER.jpeg'

import BeachPic from './cardimages/Wellington/lifestyle.jpeg'
import CityPic from './cardimages/Wellington/realestate.jpeg'
import OutdoorPic from './cardimages/Wellington/neighborhood.jpeg'
import LocalAttractionsPic from './cardimages/Wellington/localattraction.jpeg'
import EducationPic from './cardimages/Wellington/education.jpeg'
import TransportationPic from './cardimages/Wellington/transportation.jpeg'

//CONTENT IMAGES
import CommunityContent from './contentimages/Wellington/community.jpeg'
import EducationContent from './contentimages/Wellington/education.jpeg'
import NeighborhoodContent from './contentimages/Wellington/neighborhood.jpeg'
import AttractionsContent from './contentimages/Wellington/attractions.jpeg'
import TransportationContent from './contentimages/Wellington/transportation.jpeg'
import RealEstateContent from './contentimages/Wellington/realestate.jpeg'

const Wellington = () => {

    // Define your fact cards data
    const factCards = [
        {
            image: BeachPic,
            alt: "Community & Lifestyle",
            heading: "COMMUNITY & LIFESTYLE",
            description: "Dynamic blend of cultural richness and diverse living in a sun-kissed, luxurious setting"
        },
        {
            image: EducationPic,
            alt: "Education",
            heading: "EDUCATION",
            description: "Excellent educational offerings from top-rated schools and diverse learning programs."
        },
        {
            image: OutdoorPic,
            alt: "Neighborhood Amenities",
            heading: "NEIGHBORHOOD AMENITIES",
            description: "Luxury and convenience with premier golf, shopping, and community-focused living"
        },
        {
            image: TransportationPic,
            alt: "Transportation",
            heading: "TRANSPORTATION",
            description: "Efficient and diverse transit options connecting residents to urban and suburban areas"
        },
        {
            image: LocalAttractionsPic,
            alt: "local Attractions",
            heading: "LOCAL ATTRACTIONS",
            description: "A rich tapestry of cultural venues, outdoor adventures, and family-friendly activities"
        },
        {
            image: CityPic,
            alt: "Real Estate",
            heading: "REAL ESTATE TRENDS",
            description: "A rising market with strong buyer interest and promising investment opportunities"
        }
        // Add more fact cards following the same structure
    ];


    const sections = [
        { id: 1,
            title: factCards[0].heading, 
            titledescription: "Equestrian and Luxury Living:",
            description: "Wellington is renowned as an equestrian capital, with top-tier facilities like the Wellington International equestrian showgrounds. The area is planning significant expansions to enhance its already prestigious sporting reputation, ensuring it remains a world-class destination​.​", 
            
            titledescription2: "Resort-Style Amenities:",
            description2: "The planned development, The Wellington, aims to introduce a blend of luxury residential options and resort-like amenities, including a Pete Dye-designed golf course, multiple pools, and a state-of-the-art racquet center.",
            
            titledescription3: "Community-Focused Developments:",
            description3: "Wellington's new developments are designed with community interaction in mind, featuring walkable commercial centers with shops, restaurants, and parks.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "Wellington offers a unique lifestyle that caters to both luxury and sport, making it an attractive community for those who appreciate high-end living with a strong focus on equestrian and golf activities.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "https://floridayimby.com/2023/04/mark-bellissimo-and-nexus-luxury-collection-partner-to-develop-600-acre-residential-club-community-in-wellington-florida.html 1, 3| https://www.nexusluxco.com/collection/thewellington/ 2 | " 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "High-Performing Public Schools:",
            description: "Wellington boasts some of the top-ranked public schools in Florida. Schools consistently achieve high marks in both math and reading proficiency.", 
            
            titledescription2: "Diverse Educational Programs:",
            description2: "The schools in Wellington offer a variety of programs tailored to enhance student learning. Magnet and charter schools in the area focus on different specializations, enriching the educational landscape and providing students with tailored educational paths.​",
            
            titledescription3: "Community and School Engagement:",
            description3: "Wellington's schools are deeply integrated with the community. This close-knit relationship between schools and the community fosters a supportive environment that contributes to the overall development of its students​.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "Wellington's commitment to providing high-quality education through well-rounded programs and strong community engagement makes it an ideal place for families seeking excellent educational opportunities for their children.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "https://www.publicschoolreview.com/florida/wellington " 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Resort-Style Communities:",
            description: "Wellington features upscale, master-planned communities like Olympia and VillageWalk, offering extensive amenities including pools, parks, and fitness centers. These communities are designed for luxurious, active lifestyles.", 
            
            titledescription2: "Equestrian Facilities:",
            description2: "Reflecting its status as an equestrian hub, Wellington offers numerous amenities for horse enthusiasts, including world-class polo grounds and equestrian centers that host international competitions.",
            
            titledescription3: "Recreational Opportunities:",
            description3: "The area boasts a variety of recreational facilities, such as golf courses, tennis courts, and aquatic centers, catering to sports enthusiasts of all ages and skill levels.",
            
            titleconclusion: "conclusion",
            conclusion: "Wellington’s amenities promote a high-quality, active lifestyle with a focus on community and recreation, making it a premier destination for families and sports enthusiasts alike.",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "https://www.lauriereader.com/blog/best-neighborhoods-west-palm-beach/" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transit Accessibility:",
            description: "Wellington is served by Palm Tran, the regional bus service that facilitates easy travel within Palm Beach County. This makes it straightforward for residents to connect to wider areas around and beyond Wellington.", 
            
            titledescription2: "Senior-Focused Transportation Services:",
            description2: "The Freebee service offers free, on-demand, door-to-door transportation specifically for seniors within Wellington.",
            
            titledescription3: "Connectivity to Major Cities:",
            description3: "Wellington's proximity to major highways facilitates convenient access to surrounding major cities like Miami and Fort Lauderdale.",
            
            titleconclusion: "conclusion",
            conclusion: "Wellington provides a well-rounded transportation network that supports easy local and regional travel, highlighted by specialized services for seniors, ensuring it's a practical place to live for both daily commuting and leisure access.",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "https://www.thepalmbeaches.com/explore-cities/wellington 1 | https://www.wellingtonfl.gov/2140/Rides-Program 2 | https://www.thepalmbeaches.com/explore-cities/wellington" 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Equestrian Events:",
            description: "Wellington is globally recognized for its equestrian community, hosting the Winter Equestrian Festival and the Palm Beach International Polo Season, which attract top riders and offer a variety of events from show jumping to dressage and polo matches.", 
            
            titledescription2: "Nature and Conservation Areas:",
            description2: "Wellington offers many environmental preserves and sanctuaries to give residents and visitors a chance to engage with Florida’s natural landscape. Providing trails, observation towers, and interactive exhibits ideal for bird watching, educational outings, and serene walks.",
            
            titledescription3: "Cultural and Recreational Activities:",
            description3: "Wellington provides a variety of recreational options like the Wellington Aquatics Complex and the Palm Beach Museum of Natural History. From swimming and water sports to educational programs about natural history, catering to both family outings and individual explorations.",
            
            titleconclusion: "conclusion",
            conclusion: "Wellington's attractions are deeply tied to its equestrian heritage, complemented by rich natural preserves and engaging cultural activities, making it a diverse and vibrant place to visit or reside.",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "https://www.westpalmbeach.com/attractions/ " 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Market Overview:",
            description: "Wellington's real estate market shows a steady demand with homes typically staying on the market for around 37 days. This relatively quick turnover rate underscores a healthy market where properties continue to attract buyers efficiently.", 
            
            titledescription2: "Pricing Dynamics:",
            description2: "The median sale price for homes in Wellington has seen a stable increase​.​",
            
            titledescription3: "Buyer Demographics:",
            description3: "Wellington is experiencing a diverse influx of buyers, including a notable number from high-demand areas like New York and Washington, D.C.",
            
            titleconclusion: "conclusion",
            conclusion: "Wellington’s real estate market is characterized by quick sales, steady price growth, and a diverse buyer pool, making it an appealing option for both residents and investors looking for a dynamic and robust market.",
            imgSrc: RealEstateContent,
            order: 'reverse',
            alt: "https://wellingtonhometeam.com/market-reports/wellington-fl/ 2 | https://www.redfin.com/city/19199/FL/Wellington/housing-market 3" 
        },
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="West Palm Beach" />
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">
                    <div className="intro-content">
                        <a href="https://www.wellingtonfl.gov/"><h1 className="title">WELCOME TO WELLINGTON</h1></a>
                        <p className="description">Discover Wellington, a charming and vibrant community celebrated for its equestrian heritage, lush landscapes, and dynamic real estate market.</p>
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
                        <p className="closing">Explore the possibilities in Wellington, where upscale living, excellent education, and engaging local attractions create a perfect backdrop for an enriching lifestyle.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/wellington">SEARCH WELLINGTON LISTINGS</a>
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
                <a href="https://www.wellingtonfl.gov/"><h3 className="facts-link">Click Here for Official Website</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/wellington">SEARCH WELLINGTON LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wellington;

