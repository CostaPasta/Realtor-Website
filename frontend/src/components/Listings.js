import React, { useEffect } from 'react';
import '../components-css/Listings.css'
// import downTownWPBIMG from '../images/Areas/downtownwpb.jpeg'
// import palmBeachGardensIMG from '../images/Areas/palmbeachgardens.jpeg'
// import singerIslandIMG from '../images/Areas/singerisland.jpeg'
// import jupiterIMG from '../images/Areas/jupiter.jpeg'
// import palmBeachIMG from '../images/Areas/palmbeach.jpeg'
// import bocaIMG from '../images/Areas/boca.jpeg'

function Listings() {
//   const items = [
//     {name: "DOWNTOWN WEST PALM BEACH", image: downTownWPBIMG}, 
//     {name: "PALM BEACH GARDENS", image: palmBeachGardensIMG }, 
//     {name: "SINGER ISLAND", image: singerIslandIMG},
//     {name: "JUPITER", image: jupiterIMG},
//     {name: "PALM BEACH", image: palmBeachIMG},
//     {name: "BOCA RATON", image: bocaIMG}];

    useEffect(() => {
        // This code will run after the component has mounted
        // You can add any initialization code for the Buying Buddy widget here
    }, []);
  
    return (
      <div className="listings-wrapper">
        <div className='listings-gallery' id="MBBv3_FeaturedGallery" filter="agent_id:276518619+listing_status:active"></div>
          {/* <div className="header-container">
              <h1>LISTINGS</h1>
              <button className="view-all-btn">VIEW ALL</button>
          </div>
          <div className="grid-container">
              {items.map((item, index) => (
                  <div key={index} className="listing-container">
                      <div 
                          className="grid-box"
                          style={{ backgroundImage: `url(${item.image})` }}
                      >
                          {item.name}
                      </div>
                      <div className="listing-details">
                          <p className="price">{item.price}$ Price</p>
                          <p className="address">{item.address}Address</p>
                          <p className="room-details">{item.bedrooms} beds, {item.bathrooms} baths, {item.sqft} sqft</p>
                      </div>
                  </div>
              ))}
          </div> */}
          
      </div>
  );
  
}

export default Listings;
