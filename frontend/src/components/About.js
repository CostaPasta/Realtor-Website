import React from 'react';
import '../components-css/About.css';
import DadImageTransparent from '../images/dadtransparent.webp';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="profile-image">
                <img src={DadImageTransparent} alt="Jose Costa" />
            </div>
            <div className="profile-details">
                <h2 id='name'>Looking for your dream home in South Florida?</h2>
                <p>Navigating the South Florida real estate market can be challenging, but Jose Costa makes it simple.</p>

                <h3 className='aboutMeSubTitle'>Local Expert:</h3>
                <p>
                    Jose, has been a <u>South Florida resident</u> for over 30 YEARS with over 11 years of <u>real estate experience</u>, he's a trusted expert who understands the unique landscape.
                </p>

                <h3 className='aboutMeSubTitle'>Multilingual Communication:</h3>
                <p>
                    Fluent in <i>English, Spanish, and Portuguese</i>, Jose ensures seamless communication for both buyers and sellers, delivering top-notch service with genuine care.
                </p>

                <p>
                    Jose will guide you with detailed market insights and a deep understanding of your needs, ensuring you always get the best deal.
                </p>
                <div className="contact-details">
                    <a className='notranslate' href="mailto:usarealtor1@gmail.com">JOSE@USArealtor.com</a>
                    <a href="tel:+19546141351"> +1(954) 614-1351</a> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
