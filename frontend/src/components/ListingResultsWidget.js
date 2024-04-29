import React from "react";
import { useParams } from 'react-router-dom';
import BackHeader from "./BackHeader";
import Footer from "./Footer";


const ListingResultsWidget = () => {
    let {city} = useParams();
    let cityFilter = "";
    console.log(city);
    if (city === "broward") {
        cityFilter = "county:" + city + "+price_max:910000";
    }
    else {
        cityFilter = "city:" + city + "+price_max:910000";
    }

    

    return (
        <div className="properties-container">
            <BackHeader/>
            <div id="MBBv3_ListingResults" filter={cityFilter}></div>
            <Footer/>
        </div>
    );
}

export default ListingResultsWidget;
