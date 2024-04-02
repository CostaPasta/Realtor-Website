import React, { useState, useEffect } from 'react';
import {debounce} from 'lodash';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import Slideshow from './Slideshow';
import { ScrollProvider } from './ScrollContext'; // Adjust path as necessary


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


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

  
  const handleScroll = debounce(() => {
    const position = window.pageYOffset;
    setIsScrolled(position > 75);

    console.log("ITS WORKING!!!")
  }, 100);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  const componentAdditionalHeights = {
    aboutMeComponent: 0, // Extra 50 pixels due to padding or styling
    
  };


  const calculateTotalOffsetHeight = (componentKey) => {
    handleScroll();
    const headerHeight = document.querySelector('.entire-header') ? document.querySelector('.entire-header').offsetHeight : 0;
    const isMobile = window.innerWidth <= 768;
  
    const visualAdjustment = isScrolled ? (headerHeight * 0.7) : headerHeight;
    

    const componentSpecificHeight = componentAdditionalHeights[componentKey] || 0;

    return visualAdjustment +  componentSpecificHeight;
  }

  

  return (
    <ScrollProvider>
      <div className='entire-header'>
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header className={`header ${menuOpen ? 'open' : ''} ${isScrolled ? 'shrink' : ''}`}>
          {/* This is the div that visually appears on top of the header */}
        
          <div className="logo">
            <Link 
              to="SlideShowComponent" 
              smooth={true} 
              duration={600} 
              offset={'SlideShowComponent'} 
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setTimeout((500));
                }
              }}>
              JOSE COSTA
            </Link>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link 
              to="aboutMeComponent" 
              smooth={true} 
              duration={600} 
              offset={-calculateTotalOffsetHeight('aboutMeComponent')} 
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setTimeout(() => toggleMenu(), 500);
                }
              }}>
              ABOUT ME
            </Link>
            <Link 
              to="areasComponent" 
              smooth={true} 
              duration={600} 
              offset={-calculateTotalOffsetHeight('areasComponent')} 
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setTimeout(() => toggleMenu(), 500);
                }
              }}>
              AREAS
            </Link>
            <Link 
              to="searchComponent" 
              smooth={true} 
              duration={600} 
              offset={-calculateTotalOffsetHeight('searchComponent')} 
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setTimeout(() => toggleMenu(), 500);
                }
              }}>
              SEARCH
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
    </ScrollProvider>
  );
}


export default Header;
