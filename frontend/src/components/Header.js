import React, { useState, useEffect } from 'react';
import {debounce} from 'lodash';
import { Link } from 'react-scroll';
import '../components-css/Header.css';

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

  
  


  useEffect(() => {
    const handleScroll = debounce(() => {
      const position = window.pageYOffset;
      setIsScrolled(position > 75);
  
      console.log("ITS WORKING!!!")
    }, 10);

    
    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleNavLinkClick = (targetId) => {
    if (window.innerWidth <= 768 && menuOpen) {
      toggleMenu();
    }
    

    setTimeout(() => {
      const headerHeight = document.querySelector('.header').offsetHeight;
      //const headerHeightShrink = document.querySelector('.header.shrink').offsetHeight;
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, menuOpen ? 300 : 0);

  };

  return (
    <div className='entire-header'>
      <div id="MBBv3_LoginPanel" className="login-panel"></div>
      <header className={`header ${menuOpen ? 'open' : ''} ${isScrolled ? 'shrink' : ''}`}>
        {/* This is the div that visually appears on top of the header */}
       
        <div className="logo">
          <Link to="SlideShowComponent" smooth={true} duration={500} onClick={handleNavLinkClick}>
            JOSE COSTA
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="aboutMeComponent" smooth={true} duration={500} onClick={handleNavLinkClick}>
            ABOUT ME
          </Link>
          <Link to="searchComponent" smooth={true} duration={500} onClick={handleNavLinkClick}>
            SEARCH
          </Link>
          <Link to="listingsComponent" smooth={true} duration={500} onClick={handleNavLinkClick}>
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
