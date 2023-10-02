import React from 'react';
import '../components-css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">JOSE COSTA</div>
      <nav className="nav">
        <a href="/#">SEARCH</a>
        <a href="/#">LISTINGS</a>
        <a href="/#">ABOUT ME</a>
        <a href="/#">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;
