import React from 'react';
import '../components-css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Your Logo Here</div>
      <nav className="nav">
        <a href="/search">Search</a>
        <a href="/listings">Listings</a>
        <a href="/property-details">PropertyDetails</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
