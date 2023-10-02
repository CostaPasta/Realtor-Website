import React from 'react';
import '../components-css/Areas.css'
import downTownWPBIMG from '../images/Areas/downtownwpb.jpeg'
import palmBeachGardensIMG from '../images/Areas/palmbeachgardens.jpeg'
import singerIslandIMG from '../images/Areas/singerisland.jpeg'
import jupiterIMG from '../images/Areas/jupiter.jpeg'
import palmBeachIMG from '../images/Areas/palmbeach.jpeg'
import bocaIMG from '../images/Areas/boca.jpeg'

const Areas = () => {
    const items = [
        {name: "DOWNTOWN WEST PALM BEACH", image: downTownWPBIMG}, 
        {name: "PALM BEACH GARDENS", image: palmBeachGardensIMG }, 
        {name: "SINGER ISLAND", image: singerIslandIMG},
        {name: "JUPITER", image: jupiterIMG},
        {name: "PALM BEACH", image: palmBeachIMG},
        {name: "BOCA RATON", image: bocaIMG}];

    return (
        <div className="flex-wrapper">
            <div className="header-container">
                <h1>AREAS IN PALM BEACH</h1>
                <button className="view-all-btn">VIEW ALL</button>
            </div>
            <div className="grid-container">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="grid-box"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
        
};

export default Areas;


