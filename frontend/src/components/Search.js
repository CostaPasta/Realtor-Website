import React from 'react';
import '../components-css/Search.css'

const Search = () => {

    return (
        <div className='search-wrapper' id='searchC'>
            <h2 className='title-container'>SEARCH</h2>
            <div className="search-component">
                <div id="MBBv3_QuickSearch" filter="formType:simple1"></div>
            </div>
        </div>
    );
}

export default Search;
