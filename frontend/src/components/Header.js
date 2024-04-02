import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../components-css/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  // Function to close the menu when screen width is greater than 768px
  const closeMenuOnResize = () => {
    if (window.innerWidth > 768 && menuOpen) {
      setMenuOpen(false);
    }
  };
  // Add an event listener for window resize
  window.addEventListener('resize', closeMenuOnResize);

  return (
    <div className='entire-header'>
      <div id="MBBv3_LoginPanel" className="login-panel"></div>
      <header className={`header ${menuOpen ? 'open' : ''}`}>
        {/* This is the div that visually appears on top of the header */}
       
        <div className="logo">
          <Link to="SlideShowComponent" smooth={true} duration={500} onClick={toggleMenu}>
            JOSE COSTA
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="aboutMeComponent" smooth={true} duration={500} onClick={toggleMenu}>
            ABOUT ME
          </Link>
          <Link to="searchComponent" smooth={true} duration={500} onClick={toggleMenu}>
            SEARCH
          </Link>
          <Link to="listingsComponent" smooth={true} duration={500} onClick={toggleMenu}>
            LISTINGS
          </Link>
          <a href="/contact" onClick={toggleMenu}>CONTACT</a>
        </nav>
        <button className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </button>
      </header>
    </div>
    
  );
}


export default Header;
