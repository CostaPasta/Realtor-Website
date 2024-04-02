// SearchComponent.js
import React, { useState } from 'react';
import '../components-css/Search.css';
import DropdownComponent from './DropdownComponent';
import {RiFilter3Fill} from 'react-icons/ri';
import {RiSearchLine} from 'react-icons/ri'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    // Define a state variable to track the active button. Default is 'listing-active'.
    const [activeButton, setActiveButton] = useState('listing-active');

    const handleSearch = () => {
        // Implement the search logic here (e.g., API call, filtering, etc.)
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <div className="search-title">
                    <h2>SEARCH PALM BEACH</h2>
                    <p>With Jose Costa</p>
                </div>
                <div className="listing-btn-container">
                    <button 
                        className={activeButton === 'listing-active' ? 'listing-active active' : 'listing-active'}
                        onClick={() => setActiveButton('listing-active')}
                    >
                        Active Listings</button>
                    <button 
                        className={activeButton === 'listing-sold' ? 'listing-sold active' : 'listing-sold'}
                        onClick={() => setActiveButton('listing-sold')}
                    >
                        Sold Listings</button>
                </div>
                <div className="search-box-container">
                    <DropdownComponent className='dropdown-button'/>
                    <input 
                        type="text" 
                        placeholder="City, Address, Zip" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button 
                        className="filter"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={isHovered ? { backgroundColor: '#555', color: 'white' } : { backgroundColor: 'white', color: '#333' }}
                        >
                        Filters 
                        <RiFilter3Fill style={isHovered ? { fill: 'white' } : { fill: '#333' }}/>
                    </button>
                    <button 
                        className='search-button' 
                        onClick={handleSearch}
                        >
                        <RiSearchLine style={{fill: 'white'}}/> 
                        Start Search 
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Search;
