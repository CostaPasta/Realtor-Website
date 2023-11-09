// Search.js
import React, { useState, useEffect } from 'react';
import '../components-css/Search.css';
import { RiFilter3Fill, RiSearchLine, RiArrowDropDownLine } from 'react-icons/ri';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [activeButton, setActiveButton] = useState('listing-active');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [listingType, setListingType] = useState('Active Listings');

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Buy');
    const options = ['Buy', 'Sell'];

    const ListingTypeDropdown = () => (
        <select 
            value={listingType} 
            onChange={(e) => setListingType(e.target.value)}
            className="listing-dropdown"
        >
            <option value="Active Listings">Active Listings</option>
            <option value="Sold Listings">Sold Listings</option>
        </select>
    );

    const ListingTypeButtons = () => (
        <>
            <button 
                className={activeButton === 'listing-active' ? 'listing-active active' : 'listing-active'}
                onClick={() => setActiveButton('listing-active')}
            >
                Active Listings
            </button>
            <button 
                className={activeButton === 'listing-sold' ? 'listing-sold active' : 'listing-sold'}
                onClick={() => setActiveButton('listing-sold')}
            >
                Sold Listings
            </button>
        </>
    );

    return (
        <div className="search-wrapper">
            <div className="search-container">
                <div className="search-title">
                    <h2>SEARCH PALM BEACH</h2>
                    <p>With Jose Costa</p>
                </div>
                <div className="listing-btn-container">
                    {windowWidth <= 768 ? <ListingTypeDropdown /> : <ListingTypeButtons />}
                </div>
                <div className="search-box-container">
                    <div className="dropdown-container">
                        <div 
                            className="selected-option" 
                            onClick={() => setIsOpen(!isOpen)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {selectedOption} 
                            <RiArrowDropDownLine className='dropdown-icon' style={isHovered ? { fill: 'white' } : { fill: '#333' }} />
                        </div>
                        {isOpen && (
                            <div className="options-container">
                                {options.map((option, index) => (
                                    <div 
                                        key={index} 
                                        className="option"
                                        onClick={() => {
                                            setSelectedOption(option);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
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
