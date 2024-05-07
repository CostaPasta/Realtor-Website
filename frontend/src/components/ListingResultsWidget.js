import React from "react";
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import BackButtonIcon from './locations/icons/back-button.png'


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

    const handleBackButtonClick = () => {
        window.location.href = "/"; // Navigate to the home page and refresh it
    };
    

    return (
        <div className="properties-container">
            <div className="back-header-container">
                <button className="back-button" onClick={handleBackButtonClick}>
                    <img src={BackButtonIcon} alt="Back" />
                </button>
            </div>
            <div id="MBBv3_ListingResults" filter={cityFilter}></div>
            <Footer/>
        </div>
    );
}

export default ListingResultsWidget;
