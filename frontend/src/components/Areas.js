import React from 'react';
import '../components-css/Areas.css'
import downTownWPBIMG from '../images/Areas/downtownwpb.jpeg'
import palmBeachGardensIMG from '../images/Areas/palmbeachgardens.jpeg'
import singerIslandIMG from '../images/Areas/singerisland.jpeg'
import jupiterIMG from '../images/Areas/jupiter.jpeg'
import palmBeachIMG from '../images/Areas/palmbeach.jpeg'
import bocaIMG from '../images/Areas/boca.jpeg'
import { Link } from 'react-router-dom';



const Areas = () => {

    const items = [
        { name: 'DOWNTOWN WEST PALM BEACH', image: downTownWPBIMG },
        { name: 'PALM BEACH GARDENS', image: palmBeachGardensIMG },
        { name: 'SINGER ISLAND', image: singerIslandIMG },
        { name: 'JUPITER', image: jupiterIMG },
        { name: 'PALM BEACH', image: palmBeachIMG },
        { name: 'BOCA RATON', image: bocaIMG },
    ];

    // function refreshPage(){ 
    //     window.location.reload(); 
    // }

    // const handleGridBoxClick = () => {
        
    //     // navigate("/west-palm-beach")
    //     //navigate('/listing-results', { state: { filterCriteria: 'city: west palm beach' } });
    //     // refreshPage();
    // };

    return (
        <div className="flex-wrapper">
            <div className="header-container">
                <h1>AREAS IN PALM BEACH</h1>
                <Link reloadDocument to="/listing-results"><button>VIEW ALL</button></Link>
            </div>
            <div className="grid-container">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        reloadDocument
                        to={{pathname: '/west-palm-beach'}}
                        state={{filterCriteria: 'city: west palm beach'}}
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


