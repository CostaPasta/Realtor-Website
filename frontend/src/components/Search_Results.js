import React from "react";
import ListingResultsWidget from "./ListingResultsWidget";
import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";

const Search_Results = () => {
  let location = useLocation();
  const filterCriteria = location.state ? location.state.filterCriteria : "";
  // const {city} = useParams();
  // console.log(city);

  console.log(location);
  
  return (
    <div className="search_container">
        <div id="MBBv3_ListingResults"></div>
        <Footer/>
    </div>
  );
};

export default Search_Results;
