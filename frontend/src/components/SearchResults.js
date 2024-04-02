import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import BackHeader from "./BackHeader";

const SearchResults = () => {
  let location = useLocation();
  //const filterCriteria = location.state ? location.state.filterCriteria : "";
  // const {city} = useParams();
  // console.log(city);

  console.log(location);
  
  return (
    <div className="search_container">
        <BackHeader></BackHeader>
        <div id="MBBv3_ListingResults"></div>
        <Footer/>
    </div>
  );
};

export default SearchResults;
