import React from "react";
import Footer from "./Footer";
import BackButtonIcon from './locations/icons/back-button.png'

const SearchResults = () => {
  
  const handleBackButtonClick = () => {
      window.location.href = "/"; // Navigate to the home page and refresh it
  };

  return (
    <div className="search_container">
        <div className="back-header-container">
            <button className="back-button" onClick={handleBackButtonClick}>
                <img src={BackButtonIcon} alt="Back" />
            </button>
        </div>
        <div id="MBBv3_ListingResults"></div>
        <Footer/>
    </div>
  );
};

export default SearchResults;
