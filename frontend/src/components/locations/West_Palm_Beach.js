import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const West_Palm_Beach = () => {
    let location = useLocation();

    console.log(location)
    return (
        <div className="properties-container">
            <h1>West Palm</h1>
            <div id="MBBv3_ListingResults" filter="city: west palm beach+price_max:3100000"></div>
            {/* <div id="MBBv3_FeaturedList" filter="city:west palm beach"></div> */}
        {/* <ListingResultsWidget filterCriteria={filterCriteriaForWestPalmBeach} /> */}
        <Footer/>
        </div>
    );
};

export default West_Palm_Beach;
