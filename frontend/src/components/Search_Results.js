import React from "react";
import ListingResultsWidget from "./ListingResultsWidget";
import { useLocation } from "react-router-dom";

const Search_Results = () => {
  let location = useLocation();
  const filterCriteria = location.state ? location.state.filterCriteria : "";

  console.log(location)
   
  return (
    <div className="search_container">
        <ListingResultsWidget filterCriteria={filterCriteria} />
    </div>
  );
};

export default Search_Results;
