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

  // Function to inject custom styles into the Shadow DOM
  const injectCustomStyles = (shadowRoot) => {
    const style = document.createElement('style');
    style.textContent = `
      .btn-toolbar .bfg-row-2 {
        display: none !important;
        flex: 1 0 auto;
        order: 2;
      }
      
      [id^=MBBv3]:not(#mbbV1) .elq-572 mbb-login-panel .btn-toolbar .bfg-row-2, [id^=MBBv3]:not(#mbbV1).elq-572 mbb-login-panel .btn-toolbar .bfg-row-2 {
        display: none !important;
      }
    
      [id^=MBBv3]:not(#mbbV1) mbb-login-panel .btn-toolbar .bfg-row-2 {
        display: none !important;
        flex: 1 0 auto;
        order: 2;
      }
    `;
    shadowRoot.appendChild(style);
    console.log("Custom styles injected into the Shadow DOM.");
  };

  // Function to check the login panel and apply styles
  const checkLoginPanelAndApplyStyles = (attempts = 0, maxAttempts = 10) => {
    const loginPanel = document.querySelector('mbb-component-element.login-panel');
    if (loginPanel && loginPanel.shadowRoot) {
      injectCustomStyles(loginPanel.shadowRoot);
    } else if (attempts < maxAttempts) {
      console.log(`Login panel or shadow root not found, checking again in 1 second (attempt ${attempts + 1})...`);
      setTimeout(() => checkLoginPanelAndApplyStyles(attempts + 1, maxAttempts), 1000);
    } else {
      console.log("Max attempts reached, stopping further checks.");
    }
  };

  // Check if a specific stylesheet is loaded
  const isStylesheetLoaded = (href) => {
    const stylesheets = document.styleSheets;
    for (let i = 0; i < stylesheets.length; i++) {
      if (stylesheets[i].href && stylesheets[i].href.includes(href)) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const stylesheetUrl = 'https://s3.amazonaws.com/lac.html/widget-themes/fd7fe829f1f25b355acd8130503da79a-5.css.gz';

    const checkStylesheetAndApplyStyles = () => {
      if (isStylesheetLoaded(stylesheetUrl)) {
        console.log("Stylesheet loaded.");
        checkLoginPanelAndApplyStyles();
      } else {
        console.log("Stylesheet not loaded yet, checking again in 1 second...");
        setTimeout(checkStylesheetAndApplyStyles, 1000);
      }
    };

    checkStylesheetAndApplyStyles();
  }, []);

  // Toggling the menu to hide when clicking on logo when viewed on mobile
  const conditionalToggleMenu = () => {
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <ScrollProvider>
      <div className="entire-header">
        <div id="MBBv3_LoginPanel" className="login-panel"></div>
        <header
          className={`header ${menuOpen ? 'open' : ''} ${forceHide || (scrollDirection === 'down' && lastScrollY.current > 350) ? 'hidden' : 'show'} ${transparentHeader ? 'transparent' : ''}`}
        >
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
            <Link to="aboutMeComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>
              ABOUT ME
            </Link>
            <Link to="areasComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -30} onClick={handleNavClick}>
              AREAS
            </Link>
            <Link to="searchComponent" smooth={true} duration={600} offset={window.innerWidth <= 768 ? -70 : -40} onClick={handleNavClick}>
              SEARCH
            </Link>
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
