import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import { ScrollProvider } from './ScrollContext';
import useScrollDirection from './useScrollDirection';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceHide, setForceHide] = useState(false);  // State to control forced hiding of the header
  const [transparentHeader, setTransparentHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);  // Ref to keep track of last scroll position
  const scrollDirection = useScrollDirection();  // Custom hook to determine scroll direction


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle menu visibility
  };


  const handleNavClick = () => {
    // Force the header to hide when any nav link is clicked
    setForceHide(true);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 350;  // Threshold for header transparency and auto-hide

      // Update transparency based on being within the threshold
      setTransparentHeader(currentScrollY <= threshold);

      // Reset forceHide if scrolling up or above the threshold
      if (scrollDirection === 'up' || currentScrollY <= threshold) {
        setForceHide(false);
      }

      lastScrollY.current = currentScrollY;  // Update the last known scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);  // Dependency on scrollDirection to re-run effect when it changes

  
  return (
    <ScrollProvider>
      <div className='entire-header'>
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header className={`header ${menuOpen ? 'open' : ''} ${forceHide || (scrollDirection === 'down' && lastScrollY.current > 350) ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}>
          <div className="logo">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={-200}>
              JOSE COSTA
            </Link>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''} ${transparentHeader ? 'transparent' : ''}`}>
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>ABOUT ME</Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>AREAS</Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>SEARCH</Link>
            <a href="/contact">CONTACT</a>
          </nav>
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
