import React, { useState, useEffect, useRef, useCallback } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import { ScrollProvider } from './ScrollContext'; // Adjust the path as necessary
import useScrollDirection from './useScrollDirection';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [navClicked, setNavClicked] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true); 
  const lastScrollY = useRef(window.scrollY);
  const navClickTimeout = useRef(null);
  const scrollDirection = useScrollDirection();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const threshold = 450; // Define your threshold value here

    // Handle transparency of the header
    setTransparentHeader(currentScrollY <= threshold);  // Make header transparent within threshold

    // Prevent header from hiding if within the threshold (change made here)
    if (currentScrollY <= threshold || scrollDirection === 'up') {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }

    lastScrollY.current = currentScrollY;
  }, [navClicked]);

  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures this only runs on mount and unmount

  // useEffect(() => {
  //   window.addEventListener('scroll', debouncedHandleScroll);

  //   return () => {
  //     debouncedHandleScroll.cancel();
  //     window.removeEventListener('scroll', debouncedHandleScroll);
  //   };
  // }, [navClicked, handleScroll]); // Reacting to changes in navClicked

  const handleNavClick = () => {
    setNavClicked(true);
    setShowHeader(false);

    if (window.innerWidth <= 768) {
      toggleMenu(); // Also toggle the menu if in mobile view
    }
    
    

    if (navClickTimeout.current) {
      clearTimeout(navClickTimeout.current); // Clear any existing timeout
    }

    navClickTimeout.current = setTimeout(() => {
      setNavClicked(false);
    }, 1000); // Adjust the timeout to match your scrolling duration

  };

  const handleSpecialNavClick = () => {
    setShowHeader(true); // Force the header to reappear
  };
  


  

  return (
    <ScrollProvider>
      <div className='entire-header'>
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header className={`header ${menuOpen ? 'open' : ''} ${scrollDirection === 'down' && lastScrollY.current > 450 ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}>
          <div className="logo">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={-200} onClick={handleSpecialNavClick}>
              JOSE COSTA
            </Link>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''} ${transparentHeader ? 'transparent' : ''}`}>
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>ABOUT ME</Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>AREAS</Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>SEARCH</Link>
            <a href="/contact" >CONTACT</a>
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
