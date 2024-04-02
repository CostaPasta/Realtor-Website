import React from "react";
import { useLocation } from "react-router-dom";

const West_Palm_Beach = () => {
    let location = useLocation();

    console.log(location)
    return (
        <div className="properties-container">
            <h1>West Palm</h1>
            <div id="MBBv3_FeaturedList" filter="city:west palm beach"></div>
        {/* <ListingResultsWidget filterCriteria={filterCriteriaForWestPalmBeach} /> */}
        </div>
    );
};

export default West_Palm_Beach;
