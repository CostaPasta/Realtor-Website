import React from 'react';
import '../components-css/About.css';
import DadImage from '../images/dad.jpeg'


const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="profile-image">
                <img src={DadImage} alt="Jose Costa" />
            </div>
            <div className="profile-details">
                <h2 id='name'>Looking for your dream home in South Florida?</h2>
                {/* <h1 id='realtor-id'>Realtor® | #3132965</h1> */}
                <p>
                    When navigating the Palm Beach County real estate market, it's essential to rely on a real estate expert who genuinely cares about your needs and is dedicated to fulfilling them.
                </p>
                <p>
                    Jose Costa, brings over 11 YEARS OF EXPERIENCE in real estate to the table. 
                    With a deep-seated connection to South Florida for more than 30 years, Jose's multilingual abilities in ENGLISH, PORTUGUESE, and SPANISH, coupled with his intimate familiarity with every corner of the Palm Beach area, position him as an invaluable asset.
                </p>
                <p>
                    Clients who have partnered with Jose value the assurance that the sale or purchase of their property is managed by a real estate agent who is not only highly competent but also deeply trustworthy. 
                    Whether you're in the market to buy or sell, Jose's extensive local insights and enthusiasm promise to make your real estate journey both seamless and stressfree.
                </p>
                {/* <ul className="custom-bullets">
                    <li>11 years in real estate.</li>
                    <li>Deep roots in South Florida - 30+ years!</li>
                    <li>Speaks English, Portuguese, and Spanish.</li>
                    <li>Knows every nook and cranny of the Palm Beach area.</li>
                    <li>Whether you're buying or selling, Jose's local knowledge and passion make your journey smooth and exciting. Dive into the best of Florida with Jose!</li>
                </ul> */}
                <div className="contact-details">
                    <a href="mailto:usarealtor1@gmail.com">USArealtor1@gmail.com</a>
                    <a href="tel:+19546141351"> +1(954) 614-1351</a> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe;


