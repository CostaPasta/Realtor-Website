import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import { ScrollProvider } from './ScrollContext';
import useScrollDirection from './useScrollDirection';

import usaIcon from './locations/icons/usa.png';
import spainIcon from './locations/icons/spain.png';
import brazilIcon from './locations/icons/brazil.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceHide, setForceHide] = useState(false);  // State to control forced hiding of the header
  const [transparentHeader, setTransparentHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);  // Ref to keep track of last scroll position
  const scrollDirection = useScrollDirection();  // Custom hook to determine scroll direction
  const [linkClicked, setLinkClicked] = useState(false); // State to track if a link was clicked


  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);  // Toggle menu visibility
    }
  };


  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      toggleMenu(); // Toggle menu specifically for mobile views
    }

    // Force hide the header on navigation click
    setForceHide(true);
    setLinkClicked(true);  // Indicate that a link was clicked

    // Set a timeout to reset link clicked state after scrolling finishes
    setTimeout(() => {
      setLinkClicked(false);
    }, 1000);  // Adjust this duration based on expected scroll time to the target
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 350;

      // Update transparency based on being within the threshold
      setTransparentHeader(currentScrollY <= threshold);

      // Only manage header visibility based on scroll direction if no link was recently clicked
      if (!linkClicked && (scrollDirection === 'up' || currentScrollY <= threshold)) {
        setForceHide(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [scrollDirection, linkClicked]); 


  // Function to simulate language change
  const changeLanguage = (langCode) => {
    const select = document.querySelector(`select.goog-te-combo`);
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };


  // Conditionally call toggleMenu only if the menu is open
  const conditionalToggleMenu = () => {
    if (menuOpen) {
      toggleMenu(); // Close the menu only if it's currently open
    }
  };


  return (
    <ScrollProvider>
      
      <div className='entire-header'>
        <div id="google_translate_element"></div>
        {/* BB Login Panel */}
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        {/* Main Header with Logo, Flags, and Nav Links */}
        <header className={`header ${menuOpen ? 'open' : ''} ${forceHide || (scrollDirection === 'down' && lastScrollY.current > 350) ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}>
          <div className="logo">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -250 : -200} onClick={conditionalToggleMenu}>
              JOSE COSTA
            </Link>
          </div>
          {/* Language Buttons */}
          <nav className={`nav ${menuOpen ? 'open' : ''} ${transparentHeader ? 'transparent' : ''}`}>
            <div className="language-icons">
              <div onClick={() => changeLanguage('en')} style={{ cursor: 'pointer' }}>
                <img src={usaIcon} alt="English" />
              </div>
              <div onClick={() => changeLanguage('es')} style={{ cursor: 'pointer' }}>
                <img src={spainIcon} alt="Spanish" />
              </div>
              <div onClick={() => changeLanguage('pt')} style={{ cursor: 'pointer' }}>
                <img src={brazilIcon} alt="Portuguese" />
              </div>
            </div>
            {/* Navigation Buttons */}
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>ABOUT ME</Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -30} onClick={handleNavClick}>AREAS</Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>SEARCH</Link>
            <a href="/contact">CONTACT</a>
          </nav>
          {/* Mobile Menu */}
          <button className="menu-icon" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </button>
        </header>
      </div>
    </ScrollProvider>
  );
}

export default Header;
