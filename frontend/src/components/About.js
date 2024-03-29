import React from 'react';
import '../components-css/About.css';
import DadImage from '../images/dad.jpeg'
import DadImageTransparent from '../images/dadtransparent.png'


const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="profile-image">
                <img src={DadImageTransparent} alt="Jose Costa" />
            </div>
            <div className="profile-details">
                <h2 id='name'>Looking for your dream home in South Florida?</h2>
                {/* <h1 id='realtor-id'>Realtor® | #3132965</h1> */}
                <p>
                    When navigating the Palm Beach County real estate market, it's ESSENTIAL to rely on a real estate expert who genuinely cares about your needs and is dedicated to fulfilling them.
                </p>
                <p>
                    Jose Costa, has lived in South Florida for more than 30 YEARS and brings over 11 YEARS OF EXPERIENCE in real estate to the table. 
                </p>
                <p>
                    Jose's can speak in ENGLISH, PORTUGUESE, and SPANISH; providing varies amounts of communication.
                </p>
                {/* <p>
                    Clients who have partnered with Jose value the assurance that the sale or purchase of their property is managed by a real estate agent who is not only highly competent but also deeply trustworthy. 
                    Whether you're in the market to buy or sell, Jose's extensive local insights and enthusiasm promise to make your real estate journey both seamless and stressfree.
                </p> */}
                {/* <ul className="custom-bullets">
                    <li>11 YEARS in real estate experience.</li>
                    <li>Deep roots in South Florida for more than 30 YEARS!</li>
                    <li>Speaks ENGLISH, PORTUGUESE, and SPANISH.</li>
                    <li>Knows every nook and cranny of the Palm Beach area.</li>
                    <li>Whether you're buying or selling, Jose's local knowledge and passion make your journey smooth and exciting. Dive into the best of Florida with Jose!</li>
                </ul> */}
                <div className="contact-details">
                    <a href="mailto:usarealtor1@gmail.com">JOSE@USArealtor.com</a>
                    <a href="tel:+19546141351"> +1(954) 614-1351</a> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe;


