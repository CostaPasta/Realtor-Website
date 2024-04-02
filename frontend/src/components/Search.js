import React from 'react';
import '../components-css/Search.css'

const Search = () => {

    return (
        <div className='search-wrapper'>
            {/* <div id="MBBv3_LoginPanel"></div> */}
            <h1 className='title-container'>SEARCH</h1>
            <div id="MBBv3_QuickSearch" filter="formType:simple1"></div>
        </div>
    );
}

export default Search;
