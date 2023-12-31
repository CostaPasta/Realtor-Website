import React from 'react';
import '../components-css/Areas.css'
import downTownWPBIMG from '../images/Areas/downtownwpb.jpeg'
import palmBeachGardensIMG from '../images/Areas/palmbeachgardens.jpeg'
import jupiterIMG from '../images/Areas/jupiter.jpeg'
import palmBeachIMG from '../images/Areas/palmbeach.jpeg'
import bocaIMG from '../images/Areas/boca.jpeg'
import wellingtonIMG from '../images/Areas/wellingtonIMG.jpeg'
import delrayBeachIMG from '../images/Areas/delrayBeachIMG.jpeg'
import boyntonBeachIMG from '../images/Areas/boyntonBeachIMG.jpeg'
import lakeWorthIMG from '../images/Areas/lakeWorthIMG.jpeg'
import { Link } from 'react-router-dom';



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
        { name: 'LAKE WORTH BEACH', image: lakeWorthIMG},
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
        'PALM BEACH': 'Palm Beach',
        'WEST PALM BEACH': 'West Palm Beach',
        'PALM BEACH GARDENS': 'Palm Beach Gardens',
        'JUPITER': 'Jupiter',
        'WELLINGTON': 'Wellington',
        'BOCA RATON': 'Boca Raton',
        'DELRAY BEACH': 'Delray Beach',
        'BOYNTON BEACH': 'Boynton Beach',
        'LAKE WORTH': 'Lake Worth',
    };
    
    return (
        <div className="flex-wrapper">
            <div className="header-container">
                <h1>AREAS IN PALM BEACH</h1>
                
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
                        to={`/listing-results/${customPaths[item.name]}`}
                        className="grid-box"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Areas;


