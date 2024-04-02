import React from "react";
import { useParams } from 'react-router-dom';
import Footer from "./Footer";


const ListingResultsWidget = () => {
    let {city} = useParams();
    console.log(city);
    const cityFilter = "city:" + city + "+price_max:3100000";

    return (
        <div className="properties-container">
            <h1>{city}</h1>
            <div id="MBBv3_LoginPanel"></div>
            <div id="MBBv3_ListingResults" filter={cityFilter}></div>
            <Footer/>
        </div>
    );
}

export default ListingResultsWidget;
