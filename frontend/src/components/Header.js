import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import Slideshow from './Slideshow'; // Assuming you have this component, adjust the path if necessary
import { ScrollProvider } from './ScrollContext'; // Adjust the path as necessary

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [navClicked, setNavClicked] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const navClickTimeout = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!navClicked) {
      setShowHeader(currentScrollY < lastScrollY.current);
    }

    lastScrollY.current = currentScrollY;
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      debouncedHandleScroll.cancel();
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [navClicked]); // Reacting to changes in navClicked

  const handleNavClick = () => {
    setNavClicked(true);
    setShowHeader(false);

    if (navClickTimeout.current) {
      clearTimeout(navClickTimeout.current); // Clear any existing timeout
    }

    navClickTimeout.current = setTimeout(() => {
      setNavClicked(false);
    }, 1000); // Adjust the timeout to match your scrolling duration
  };

  return (
    <ScrollProvider>
      <div className='entire-header'>
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header className={`header ${menuOpen ? 'open' : ''} ${showHeader ? '' : 'hidden'}`}>
          <div className="logo">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={'SlideShowComponent'} onClick={handleNavClick}>
              JOSE COSTA
            </Link>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>ABOUT ME</Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>AREAS</Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>SEARCH</Link>
            <Link to="contactComponent" smooth={true} duration={600} offset={-30} onClick={handleNavClick}>CONTACT</Link>
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
