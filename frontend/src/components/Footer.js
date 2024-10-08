import React from 'react';
import '../components-css/Footer.css';
import { Link } from 'react-router-dom';
import { Link as LinkScroll, } from "react-scroll";
import {FaFacebook} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa6'
import { ScrollProvider } from './ScrollContext'; // Adjust the path as necessary

const Footer = () => {

    // const customPaths = {
    //     // Add more custom paths as needed
    //     'PALM BEACH': 'Palm Beach',
    //     'WEST PALM BEACH': 'West Palm Beach',
    //     'PALM BEACH GARDENS': 'Palm Beach Gardens',
    //     'JUPITER': 'Jupiter',
    //     'WELLINGTON': 'Wellington',
    //     'BOCA RATON': 'Boca Raton',
    //     'DELRAY BEACH': 'Delray Beach',
    //     'BOYNTON BEACH': 'Boynton Beach',
    //     'LAKE WORTH': 'Lake Worth',
    // };

    const email = "Jose@USAREALTOR.com";
    const obfuscateEmail = () => {
        const part1 = "USARealtor1";
        const part2 = "gmail.com";
        return `${part1}@${part2}`;
    };

    return (
        <ScrollProvider>
            <div className="site-footer">
                <footer className="footer-container">
                    <div className="footer-top">
                        {/* Column 1 */}
                        <div className="footer-column">
                            <h1 className='footer-titles'>AREAS</h1>
                            <ul className='notranslate'>
                                <li>
                                    <Link reloadDocument to="/PalmBeach">PALM BEACH</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/WestPalmBeach">WEST PALM BEACH</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/PalmBeachGardens">PALM BEACH GARDENS</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/Jupiter">JUPITER</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/Wellington">WELLINGTON</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="footer-column">
                            <h1 className='footer-titles'>MORE AREAS</h1>
                            <ul className='notranslate'>
                                <li>
                                    <Link reloadDocument to="/BocaRaton">BOCA RATON</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/DelrayBeach">DELRAY BEACH</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/BoyntonBeach">BOYNTON BEACH</Link>
                                </li>
                                <li>
                                    <Link reloadDocument to="/LakeWorth">LAKE WORTH</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="footer-column">
                            <h1 className='footer-titles'>MORE LINKS</h1>
                            <ul>
                                <li>
                                    <LinkScroll to="aboutMeComponent" smooth={true} duration={600} offset={-135} >ABOUT ME</LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll to="areasComponent" smooth={true} duration={600} offset={-135} >AREAS</LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll to="searchComponent" smooth={true} duration={600} offset={-135} >SEARCH</LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll to="contactComponent" smooth={true} duration={600} offset={-135} >CONTACT</LinkScroll>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="footer-column">
                            <h1 className='footer-titles'>MY COMPANY</h1>
                            <ul>
                                <li><a href="tel:(954) 614-1351">(954) 614-1351</a></li>
                                <li className='notranslate'><a href={`mailto:${obfuscateEmail()}`}>{email}</a></li>
                                <li><Link reloadDocument to="/TermsOfService">Terms Of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className='notranslate'>© 2023 by Nicholas Costa</p>
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
                            <a aria-label='Instagram' href="https://www.facebook.com/profile.php?id=100090548027826"><FaFacebook style={{fill: "#4267B2"}} size={35}/></a>
                            <a aria-label='Facebook' href="https://www.instagram.com/josecosta.realtor/"><FaInstagram style={{ fill: "url(#instagram-gradient)" }} size={35}/></a>
                            {/* Add other icons as needed */}
                        </div>
                    </div>
                </footer>
            </div>
        </ScrollProvider>
        
        
    );
}

export default Footer;
