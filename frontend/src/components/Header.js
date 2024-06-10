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
  const [forceHide, setForceHide] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useScrollDirection();
  const [linkClicked, setLinkClicked] = useState(false);


  //Toggling menu
  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };


  // Handling navigation clicks to hide header
  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      toggleMenu();
    }
    setForceHide(true);
    setLinkClicked(true);
    setTimeout(() => {
      setLinkClicked(false);
    }, 1000);
  };


  // Handles scrolling feature when clicking on nav links
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 350;
      setTransparentHeader(currentScrollY <= threshold);
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


  // Function to dynamically apply custom styles for mobile viewports
  const addMobileStyles = () => {
    if (window.innerWidth <= 768) {
      const style = document.createElement('style');
      style.innerHTML = `
        #MBBv3_LoginPanel .bfg-row-2 btn-group ml-0 {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
      console.log("Custom styles applied for mobile viewports.");
    }
  };

  // Use window load event to ensure all stylesheets are loaded
  useEffect(() => {
    const handleLoad = () => {
      addMobileStyles();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  useEffect(() => {
    const loginPanel = document.querySelector('mbb-component-element.login-panel');
    if (loginPanel) {
      const loginPanelHeight = loginPanel.offsetHeight;
      document.documentElement.style.setProperty('--login-panel-height', `${loginPanelHeight}px`);
      console.log(loginPanelHeight);
    }
  }, []);


  // Function to change language through Header banner using Google Translate
  const changeLanguage = (langCode) => {
    const tryChangeLanguage = (retryCount = 0) => {
      const select = document.querySelector('select.goog-te-combo');
      console.log('changeLanguage called', langCode, select);
      
      if (select) {
        if (langCode === 'en') {
          var restored = false;
          Object.keys(window.googleTranslator).forEach((k) => {
              if (restored) {
                  return;
              }
              if (typeof window.googleTranslator[k]?.restore === 'function') {
                  window.googleTranslator[k].restore();
                  restored = true;
              }    
          });

          // Also, flush the cookie that preserves the lang change across reloads
          document.cookie="googtrans="
        }
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      } else if (retryCount < 5) {
        console.error("Google Translate select element not found, retrying...");
        setTimeout(() => tryChangeLanguage(retryCount + 1), 1000);
      } else {
        console.error("Google Translate select element not found after multiple attempts");
      }
    };

    tryChangeLanguage();
  };


  // Toggling the menu to hide when clicking on logo when viewed on mobile 
  const conditionalToggleMenu = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <ScrollProvider>
      <div className='entire-header'>
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header className={`header ${menuOpen ? 'open' : ''} ${forceHide || (scrollDirection === 'down' && lastScrollY.current > 350) ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}>
          <div className="logo notranslate">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -250 : -200} onClick={conditionalToggleMenu}>
              JOSE COSTA
            </Link>
          </div>
          <nav className={`nav ${menuOpen ? 'open' : ''} ${transparentHeader ? 'transparent' : ''}`}>
            <div className="language-icons">
              <div onClick={() => changeLanguage('en')}>
                <img src={usaIcon} alt="English" />
              </div>
              <div onClick={() => changeLanguage('es')}>
                <img src={spainIcon} alt="Spanish" />
              </div>
              <div onClick={() => changeLanguage('pt')}>
                <img src={brazilIcon} alt="Portuguese" />
              </div>
            </div>
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>ABOUT ME</Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -30} onClick={handleNavClick}>AREAS</Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>SEARCH</Link>
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
