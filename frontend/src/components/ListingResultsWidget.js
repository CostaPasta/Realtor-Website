import React from "react";
import { useParams } from 'react-router-dom';
import BackHeader from "./BackHeader";
import Footer from "./Footer";


const ListingResultsWidget = () => {
    let {city} = useParams();
    console.log(city);
    const cityFilter = "city:" + city + "+price_max:3100000";

    return (
        <div className="properties-container">
            <BackHeader/>
            <div id="MBBv3_ListingResults" filter={cityFilter}></div>
            <Footer/>
        </div>
    );
}

export default ListingResultsWidget;
