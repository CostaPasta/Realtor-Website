// DropdownComponent.js
import React, { useState } from 'react';
import '../components-css/DropdownComponent.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const DropdownComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Buy');
    const [isHovered, setIsHovered] = useState(false);


    const options = ['Buy', 'Sell'];

    return (
        <div className="dropdown-container">
            <div className="selected-option" 
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
    );
}

export default DropdownComponent;
