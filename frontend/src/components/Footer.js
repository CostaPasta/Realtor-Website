import React from 'react';
import '../components-css/Footer.css';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, } from "react-scroll";
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'

const Footer = () => {
    const customPaths = {
        // Add more custom paths as needed
        'PALM BEACH': 'Palm Beach',
        'WEST PALM BEACH': 'West Palm Beach',
        'PALM BEACH GARDENS': 'Palm Beach Gardens',
        'JUPITER': 'Jupiter',
        'WELLINGTON': 'Wellington',
        'BOCA RATON': 'Boca Raton',
        'DELRAY BEACH': 'Delray Beach',
        'BOYNTON BEACH': 'Boynton Beach',
        'LAKE WORTH': 'Lake Worth',
    };

    return (
        <div className="site-footer">
            <footer className="footer-container">
                <div className="footer-top">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h4>Areas</h4>
                        <ul>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["PALM BEACH"]}`}>PALM BEACH</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["WEST PALM BEACH"]}`}>WEST PALM BEACH</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["PALM BEACH GARDENS"]}`}>PALM BEACH GARDENS</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["JUPITER"]}`}>JUPITER</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["WELLINGTON"]}`}>WELLINGTON</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h4>MORE AREAS</h4>
                        <ul>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["BOCA RATON"]}`}>BOCA RATON</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["DELRAY BEACH"]}`}>DELRAY BEACH</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["BOYNTON BEACH"]}`}>BOYNTON BEACH</Link>
                            </li>
                            <li>
                                <Link reloadDocument to={`/listing-results/${customPaths["LAKE WORTH"]}`}>LAKE WORTH</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h4>MORE LINKS</h4>
                        <ul>
                            <li>
                                <LinkScroll to="searchComponent" smooth={true} duration={500}>
                                    SEARCH
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll to="aboutMeComponent" smooth={true} duration={500}>
                                    ABOUT ME
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll to="listingsComponent" smooth={true} duration={500}>
                                    LISTINGS
                                </LinkScroll>
                            </li>
                            <li><a href="/contact">CONTACT</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-column">
                        <h4>MY COMPANY</h4>
                        <ul>
                            <li><a>(954) 614-1351</a></li>
                            <li><a>USARealtor1@gmail.com</a></li>
                            <li><a>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 by Nicholas Costa</p>
                    {/* Hidden SVG to define the gradient */}
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                        <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#feda75" }} />
                            <stop offset="25%" style={{ stopColor: "#fa7e1e" }} />
                            <stop offset="50%" style={{ stopColor: "#d62976" }} />
                            <stop offset="75%" style={{ stopColor: "#962fbf" }} />
                            <stop offset="100%" style={{ stopColor: "#4f5bd5" }} />
                        </linearGradient>
                    </svg>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/josecosta.realtor/"><FaFacebook style={{fill: "#4267B2"}} size={35}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100090548027826"><FaInstagram style={{ fill: "url(#instagram-gradient)" }} size={35}/></a>
                        {/* Add other icons as needed */}
                    </div>
                </div>
            </footer>
        </div>
        
    );
}

export default Footer;
