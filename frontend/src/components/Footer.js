import React from 'react';
import '../components-css/Footer.css';
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className="site-footer">
            <footer className="footer-container">
                <div className="footer-top">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h4>Areas</h4>
                        <ul>
                            <li><a href="#">DOWNTOWN WEST PALM BEACH</a></li>
                            <li><a href="#">SINGER ISLAND</a></li>
                            <li><a href="#">PALM BEACH</a></li>
                            <li><a href="#">JUPITER</a></li>
                            <li><a href="#">PALM BEACH GARDENS</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h4>MORE AREAS</h4>
                        <ul>
                            <li><a href="#">BOCA RATON</a></li>
                            <li><a href="#">DELRAY BEACH</a></li>
                            <li><a href="#">WEST PALM BEACH</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h4>MORE LINKS</h4>
                        <ul>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">SEARCH LISTINGS</a></li>
                            <li><a href="#">FEATURED LISTINGS</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="footer-column">
                        <h4>MY COMPANY</h4>
                        <ul>
                            <li><a href="#">(954) 614-1351</a></li>
                            <li><a href="#">USARealtor1@gmail.com</a></li>
                            <li><a href="#">Terms of Service</a></li>
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
                        <a href="#"><FaFacebook style={{fill: "#4267B2"}} size={35}/></a>
                        <a href="#"><FaInstagram style={{ fill: "url(#instagram-gradient)" }} size={35}/></a>
                        {/* Add other icons as needed */}
                    </div>
                </div>
            </footer>
        </div>
        
    );
}

export default Footer;
