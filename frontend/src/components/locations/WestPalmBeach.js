import React from "react";
import { Link as LinkScroll, } from "react-scroll";
import Footer from "../Footer";
import BackHeader from "../BackHeader";
import './css/PalmBeach.css'; // Make sure the CSS file path is correct
import palmbeachbanner from '../../images/Areas/Headers/WESTPALMBEACH-HEADER.jpeg'

import BeachPic from './cardimages/WestPalmBeach/lifestyle.jpeg'
import CityPic from './cardimages/WestPalmBeach/realestate.jpeg'
import OutdoorPic from './cardimages/WestPalmBeach/neighborhood.jpeg'
import LocalAttractionsPic from './cardimages/WestPalmBeach/localattraction.jpeg'
import EducationPic from './cardimages/PalmBeach/education.jpeg'
import TransportationPic from './cardimages/WestPalmBeach/transportation.jpeg'

//CONTENT IMAGES
import CommunityContent from './contentimages/WestPalmBeach/community.jpeg'
import EducationContent from './contentimages/WestPalmBeach/education.jpeg'
import NeighborhoodContent from './contentimages/WestPalmBeach/neighborhood.jpeg'
import AttractionsContent from './contentimages/WestPalmBeach/attractions.jpeg'
import TransportationContent from './contentimages/WestPalmBeach/transportation.jpeg'
import RealEstateContent from './contentimages/WestPalmBeach/realestate.jpeg'

const WestPalmBeach = () => {

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
            titledescription: "Cultural Hub:",
            description: "West Palm Beach is a cultural epicenter with venues like the Kravis Center for the Performing Arts and the Norton Museum of Art, offering world-class performances and exhibitions. The city’s rich cultural offerings make it an appealing destination for arts and culture enthusiasts.​", 
            
            titledescription2: "Historical Charm:",
            description2: "The city boasts several historical neighborhoods such as Flamingo Park and El Cid, where old-world charm meets modern-day amenities. These areas highlight West Palm Beach’s commitment to preserving its architectural heritage while fostering a vibrant community life​​.",
            
            titledescription3: "Dynamic Downtown:",
            description3: "Downtown West Palm Beach is the heart of the city, featuring Clematis Street and City Place, bustling with shops, restaurants, and nightlife. This area provides a lively urban experience with something always happening, from street festivals to market days​.",
            
            titleconclusion: "Diverse Activities for Everyone:",
            conclusion: "West Palm Beach combines its historical roots and cultural depth with a lively modern lifestyle, making it an attractive location for residents who value both tradition and contemporary urban conveniences.",
            imgSrc: CommunityContent, 
            order: 'normal',
            alt: "https://www.floridatravellife.com/articles/what-its-live-west-palm-beach/" 

        },
        { id: 2, 
            title: factCards[1].heading, 
            titledescription: "Broad Educational Offerings:",
            description: "West Palm Beach is served by the School District of Palm Beach County, which is among the largest in the U.S. It offers a vast array of educational options, including specialized magnet programs and academies that focus on science, technology, arts, and more​.", 
            
            titledescription2: "Specialized Schools and Programs:",
            description2: "The district includes schools like the Alexander W. Dreyfoos Jr. School of the Arts, which provides specialized curricula aimed at fostering talents in the arts. This commitment extends to multiple high schools offering rigorous academics and professional pathways​.​",
            
            titledescription3: "Focus on Equity and Inclusion:",
            description3: "West Palm Beach schools prioritize inclusivity, with targeted programs to support diverse student needs, including gifted students and those with disabilities. The district has initiatives aimed at reducing educational disparities and ensuring equitable opportunities for all students.",
            
            titleconclusion: "Career Opportunities:",
            conclusion: "West Palm Beach’s dedication to a diverse and inclusive educational system, which offers a range of specialized programs designed to meet the needs of all students.",
            imgSrc: EducationContent,
            order: 'reverse',
            alt: "https://www.palmbeachschools.org/ 1 | https://en.wikipedia.org/wiki/School_District_of_Palm_Beach_County" 
        },
        { id: 3, 
            title: factCards[2].heading, 
            titledescription: "Urban and Cultural Hotspots:",
            description: "CityPlace, is a vibrant urban center in the heart of downtown West Palm Beach, featuring a wide array of restaurants, bars, and shops. This neighborhood is particularly notable for its lively nightlife and cultural offerings, including the Kravis Center for the Performing Arts, which hosts a variety of performances and educational programs", 
            
            titledescription2: "Historic and Luxurious Living:",
            description2: "El Cid is a neighborhood that combines waterfront luxury with historical charm. Known for its large, custom-designed estates and proximity to cultural sites like the Ann Norton Sculpture Gardens, El Cid offers affluent living with breathtaking views of the Intracoastal Waterway.​",
            
            titledescription3: "Recreational Spaces and Community Living:",
            description3: "Grandview Heights maintains a quaint atmosphere with easy access to outdoor and recreational amenities, including Howard Park which features tennis centers, walking trails, and a dog park. The neighborhood is also close to art studios and local markets, enriching the community feel​.",
            
            titleconclusion: "conclusion",
            conclusion: "West Palm Beach's neighborhoods offer a blend of urban excitement, luxurious waterfront living, and vibrant community spaces, making it an attractive location for various lifestyles and preferences.​",
            imgSrc: NeighborhoodContent, 
            order: 'normal',
            alt: "https://www.lauriereader.com/blog/best-neighborhoods-west-palm-beach/" 
        },
        { id: 4, 
            title: factCards[3].heading, 
            titledescription: "Public Transit Systems:",
            description: "West Palm Beach is served by Palm Tran, providing comprehensive bus services throughout the city with connections to major destinations. The city also benefits from the Brightline train service, offering fast connections between West Palm Beach, Miami, and Fort Lauderdale, which is ideal for commuters and visitors alike.", 
            
            titledescription2: "Road and Highway Access:",
            description2: "The city’s road network includes easy access to major highways such as Interstate 95 and U.S. Route 1, facilitating straightforward travel to and from the city. This extensive network makes commuting by car a convenient option for residents​.",
            
            titledescription3: "Alternative Transportation and Walkability:",
            description3: "West Palm Beach supports alternative transportation options like biking and walking, particularly in downtown areas such as CityPlace. The city's infrastructure includes bike lanes and pedestrian-friendly streets, enhancing the ease of getting around without a vehicle​",
            
            titleconclusion: "conclusion",
            conclusion: "West Palm Beach offers a robust transportation network that includes excellent public transit services, major highway access, and pedestrian-friendly areas, making it an accessible and convenient choice for residents and visitors.​",
            imgSrc: TransportationContent,
            order: 'reverse',
            alt: "https://www.lauriereader.com/blog/best-neighborhoods-west-palm-beach/ 2-3 " 
        },
        { id: 5, 
            title: factCards[4].heading, 
            titledescription: "Cultural Institutions:",
            description: "Home to the Norton Museum of Art, one of Florida’s major cultural institutions, offering an extensive collection of American, European, and Chinese art.", 
            
            titledescription2: "Outdoor Adventures:",
            description2: "For those who prefer spending time outdoors, the Lion Country Safari offers a unique drive-through safari experience where visitors can observe animals roaming freely in a simulated natural habitat. Nearby, the McCarthy’s Wildlife Sanctuary provides guided tours​.​",
            
            titledescription3: "Family and Educational Fun:",
            description3: "The South Florida Science Center and Aquarium is perfect for families, featuring over 50 hands-on exhibits, a large freshwater and saltwater aquarium, a planetarium, and interactive science displays. It’s an educational and fun destination that appeals to children and adults alike​.",
            
            titleconclusion: "conclusion",
            conclusion: "West Palm Beach offers a diverse range of attractions that blend cultural depth with outdoor excitement and family-friendly activities, making it an appealing destination for visitors and residents looking for varied experiences.​",
            imgSrc: AttractionsContent,
            order: 'normal',
            alt: "https://www.westpalmbeach.com/attractions/ " 
        },
        { id: 6, 
            title: factCards[5].heading, 
            titledescription: "Rising Home Prices:",
            description: "The real estate market in West Palm Beach has been experiencing a steady rise in home prices. As of early 2024, the average home price has increased by 12.6% compared to the previous year, reflecting a robust demand for homes in the area.", 
            
            titledescription2: "Market Dynamics:",
            description2: "Homes in West Palm Beach are spending more time on the market compared to last year, with the average home selling after 81 days. This longer duration on the market could indicate a shift towards a more balanced market, providing potential buyers with more negotiation leverage​.​",
            
            titledescription3: "Diverse Buyer Interest:",
            description3: "West Palm Beach continues to attract a diverse range of buyers, including significant inflows from major cities like New York and Washington, D.C. This ongoing interest from out-of-state buyers helps sustain the market's vitality and underpins the city's appeal as a desirable place to live​.",
            
            titleconclusion: "conclusion",
            conclusion: "West Palm Beach's real estate market is characterized by rising prices and a broadening appeal, making it a promising area for both residential and investment purposes.",
            imgSrc: RealEstateContent,
            order: 'reverse',
            alt: "https://www.redfin.com/city/19373/FL/West-Palm-Beach/housing-market" 
        },
    ];

    return (
        <div className="palmBeachContainer">
            <BackHeader></BackHeader>
            {/* Hero Section */}
            <div className="bannerImage">
                <img src={palmbeachbanner} alt="West Palm Beach" />
                <div className="bannerContent">
                    <a href="https://www.thepalmbeaches.com/explore-cities/palm-beach-gardens"><h1 className="title">WELCOME TO WEST PALM BEACH</h1></a>
                    <p className="description">Explore the charm and potential of West Palm Beach—a city that perfectly combines seaside serenity with a bustling urban lifestyle.</p>
                </div>
            </div>

            <div className="flex-wrapper-locations">
                {/* Introduction */}
                <div className="introduction">

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
                        <p className="closing">West Palm Beach offers an enticing blend of lifestyle, culture, and growth, making it an ideal destination for anyone looking to call it home.</p>
                    </div>
                </div>
            </div>
            
            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/west palm beach">SEARCH WEST PALM BEACH LISTINGS</a>
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
                <a href="https://www.wpb.org/"><h3 className="facts-link">Click Here for Additional Facts</h3></a>
            </div>

            <div className="search-container">
                <div className="search">
                    <a href="/listing-results/west palm beach">SEARCH WEST PALM BEACH LISTINGS</a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WestPalmBeach;

