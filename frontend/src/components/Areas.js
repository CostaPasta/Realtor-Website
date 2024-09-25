import React from 'react';
import '../components-css/Areas.css'
import downTownWPBIMG from '../images/Areas/downtownwpb.webp'
import palmBeachGardensIMG from '../images/Areas/palmbeachgardens.webp'
import jupiterIMG from '../images/Areas/jupiter.webp'
import palmBeachIMG from '../images/Areas/palmbeach.webp'
import bocaIMG from '../images/Areas/boca.webp'
import wellingtonIMG from '../images/Areas/wellingtonIMG.webp'
import delrayBeachIMG from '../images/Areas/delrayBeachIMG.webp'
import boyntonBeachIMG from '../images/Areas/boyntonBeachIMG.webp'
import lakeWorthIMG from '../images/Areas/lakeWorthIMG.webp'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';  // Import Helmet for structured data



const Areas = () => {

    const items = [
        { name: 'PALM BEACH', image: palmBeachIMG},
        { name: 'PALM BEACH GARDENS', image: palmBeachGardensIMG },
        { name: 'WEST PALM BEACH', image: downTownWPBIMG},
        { name: 'WELLINGTON', image: wellingtonIMG},
        { name: 'JUPITER', image: jupiterIMG},
        { name: 'BOCA RATON', image: bocaIMG},
        { name: 'DELRAY BEACH', image: delrayBeachIMG},
        { name: 'BOYNTON BEACH', image: boyntonBeachIMG},
        { name: 'BROWARD', image: lakeWorthIMG},
    ];

    // function refreshPage(){ 
    //     window.location.reload(); 
    // }

    // const handleGridBoxClick = () => {
    //     //window.location.href = '/listing-results'
    //     //navigate(location.href = "/list-results")
    //     navigate(location.href = '/listing-results', { state: { filterCriteria: 'city: west palm beach' } });
    //     refreshPage();
    // };

    // Define custom paths for specific areas
    const customPaths = {
        // Add more custom paths as needed
        'PALM BEACH': 'PalmBeach',
        'WEST PALM BEACH': 'WestPalmBeach',
        'PALM BEACH GARDENS': 'PalmBeachGardens',
        'JUPITER': 'Jupiter',
        'WELLINGTON': 'Wellington',
        'BOCA RATON': 'BocaRaton',
        'DELRAY BEACH': 'DelrayBeach',
        'BOYNTON BEACH': 'BoyntonBeach',
        'BROWARD': 'Broward',
    };
    
    return (
        <div id='areasComponent' className="flex-wrapper">
            <Helmet>
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Place",
                    "name": "Service Areas",
                    "description": "Service areas covered by Jose Costa, a realtor specializing in South Florida.",
                    "containedInPlace": {
                      "@type": "City",
                      "name": "Palm Beach",
                      "url": "https://josecostarealtor.com/PalmBeach"
                    },
                    "hasMap": "https://josecostarealtor.com/map.png",
                    "areaServed": [
                      {
                        "@type": "Place",
                        "name": "Palm Beach Gardens",
                        "url": "https://josecostarealtor.com/PalmBeachGardens"
                      },
                      {
                        "@type": "Place",
                        "name": "West Palm Beach",
                        "url": "https://josecostarealtor.com/WestPalmBeach"
                      },
                      {
                        "@type": "Place",
                        "name": "Boca Raton",
                        "url": "https://josecostarealtor.com/BocaRaton"
                      },
                      {
                        "@type": "Place",
                        "name": "Delray Beach",
                        "url": "https://josecostarealtor.com/DelrayBeach"
                      },
                      {
                        "@type": "Place",
                        "name": "Boynton Beach",
                        "url": "https://josecostarealtor.com/BoyntonBeach"
                      },
                      {
                        "@type": "Place",
                        "name": "Broward",
                        "url": "https://josecostarealtor.com/Broward"
                      }
                    ]
                  }
                `}
              </script>
            </Helmet>
            <div className="header-container">
                <h2 id='HomepageTitle'>AREAS IN <span className='notranslate'> PALM BEACH</span></h2>
                
                {/* <Link 
                    //reloadDocument 
                    to="/listing-results"
                    state={{filterCriteria: 'city: jupiter'}}
                    reloadDocument
                    >
                    <button>VIEW ALL</button>
                </Link> */}
            </div>
            <div className="grid-container">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        reloadDocument
                        to={`/${customPaths[item.name]}`}
                        className="grid-box"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <span className="item-name notranslate">{item.name}</span> {/* Wrap item.name in a span */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Areas;


