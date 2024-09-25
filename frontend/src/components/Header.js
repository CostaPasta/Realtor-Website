import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import '../components-css/Header.css';
import { ScrollProvider } from './ScrollContext';
import useScrollDirection from './useScrollDirection';

import usaIcon from './locations/icons/usa.webp';
import spainIcon from './locations/icons/spain.webp';
import brazilIcon from './locations/icons/brazil.webp';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceHide, setForceHide] = useState(false);
  const [transparentHeader, setTransparentHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const scrollDirection = useScrollDirection();
  const [linkClicked, setLinkClicked] = useState(false);
  const [pluginLoaded, setPluginLoaded] = useState(true);

  
  useEffect(() => {
      // Wait for a reasonable time to let the plugin load (e.g., 5 seconds)
      const timeout = setTimeout(() => {
          const loginPanel = document.getElementById('MBBv3_LoginPanel');
          if (!loginPanel || loginPanel.innerHTML.trim() === "") {
              setPluginLoaded(false); // Mark as not loaded if content is empty
          }
      }, 5000); // 5 seconds

      return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  // Toggling menu
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


  // useEffect(() => {
  //   const loginPanel = document.querySelector('mbb-component-element.login-panel');
  //   if (loginPanel) {
  //     const loginPanelHeight = loginPanel.offsetHeight;
  //     document.documentElement.style.setProperty('--login-panel-height', `${loginPanelHeight}px`);
  //     console.log(loginPanelHeight);
  //   }
  // }, []);


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

          document.cookie = "googtrans=";
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
      <div className="entire-header">
        {pluginLoaded ? (
            <div id="MBBv3_LoginPanel" className="login-panel" height="38px" max-height="38px"></div>
        ) : (
            <div className="plugin-error-message">
                Plugin not loaded, reload page!
            </div>
        )}
        <header
          className={`header ${menuOpen ? 'open' : ''} ${forceHide || (scrollDirection === 'down' && lastScrollY.current > 350) ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}
        >
          <div className="logo notranslate">
            <Link to="SlideShowComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -250 : -200} onClick={conditionalToggleMenu} href='#SlideShowComponent'>
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
            <a href="#aboutMeComponent">
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -35 : -38} onClick={handleNavClick}>
                ABOUT ME
              </Link>
            </a>

            <a href="#areasComponent">
              <Link to="areasComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -35 : -38} onClick={handleNavClick}>
                AREAS
              </Link>
            </a>

            <a href="#searchComponent">
              <Link to="searchComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -35 : -38} onClick={handleNavClick}>
                SEARCH
              </Link>
            </a>

            <a href="#contactComponent">
              <Link to="contactComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -35 : -38} onClick={handleNavClick}>
                CONTACT
              </Link>
            </a>
          </nav>
          <button className="menu-icon" aria-label="Menu Icon" onClick={toggleMenu}>
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
