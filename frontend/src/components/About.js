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
                <h2 id='name'>Jose Costa</h2>
                <h1 id='realtor-id'>Realtor® | #3132965</h1>
                <ul className="custom-bullets">
                    <li>🏠 11 years in real estate.</li>
                    <li>🌴 Deep roots in South Florida - 30+ years!</li>
                    <li>🌎 Speaks English, Portuguese, and Spanish.</li>
                    <li>🔍 Knows every nook and cranny of the Palm Beach area.</li>
                    <li>Whether you're buying or selling, Jose's local knowledge and passion make your journey smooth and exciting. Dive into the best of Florida with Jose!</li>
                </ul>
                <div className="contact-details">
                    <a href="mailto:usarealtor1@gmail.com">✉️ USArealtor1@gmail.com</a>
                    <a href="tel:+19546141351">📲 +1(954) 614-1351</a> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
