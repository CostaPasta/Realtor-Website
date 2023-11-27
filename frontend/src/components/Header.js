import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../components-css/Header.css';


function Header() {
  return (
    <header className="header">
      <div className="logo">JOSE COSTA</div>
      <nav className="nav">
        <Link to="searchComponent" smooth={true} duration={500}>
          SEARCH
        </Link>
        <Link to="aboutMeComponent" smooth={true} duration={500}>
          ABOUT ME
        </Link>
        <Link to="listingsComponent" smooth={true} duration={500}>
          LISTINGS
        </Link>
        <a href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
