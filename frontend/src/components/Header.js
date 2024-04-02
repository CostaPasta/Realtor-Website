import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../components-css/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when screen width is greater than 768px
  const closeMenuOnResize = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
  };
  // Add an event listener for window resize
  window.addEventListener('resize', closeMenuOnResize);

  return (
    <header className={`header ${isOpen ? 'open' : ''}`}>
      <div className="logo">JOSE COSTA</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link to="searchComponent" smooth={true} duration={500} onClick={toggleMenu}>
          SEARCH
        </Link>
        <Link to="aboutMeComponent" smooth={true} duration={500} onClick={toggleMenu}>
          ABOUT ME
        </Link>
        <Link to="listingsComponent" smooth={true} duration={500} onClick={toggleMenu}>
          LISTINGS
        </Link>
        <a href="/contact" onClick={toggleMenu}>CONTACT</a>
      </nav>
      <button className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
      </button>
    </header>
  );
}

export default Header;
