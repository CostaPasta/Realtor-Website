import React from 'react';
import '../components-css/About.css';
import DadImageTransparent from '../images/dadtransparent.webp';
import { Helmet } from 'react-helmet-async';

const AboutMe = () => {
    console.log('Running in', process.env.NODE_ENV, 'mode');

    const email = "Jose@USAREALTOR.com";
    const obfuscateEmail = () => {
        const part1 = "USARealtor1";
        const part2 = "gmail.com";
        return `${part1}@${part2}`;
    };

    return (
        <div className="about-me-container" id='aboutMeC'>
            <Helmet>
                <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Jose Costa",
                    "jobTitle": "Real Estate Agent",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Jose Costa Realty",
                        "url": "https://josecostarealtor.com"
                    },
                    "email": "mailto:${obfuscateEmail()}",
                    "telephone": "+1-954-614-1351",
                    "image": "https://josecostarealtor.com/images/dadtransparent.webp",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "South Florida",
                        "addressRegion": "FL",
                        "addressCountry": "US"
                    },
                    "sameAs": [
                        "https://www.instagram.com/josecosta.realtor/",
                        "https://www.facebook.com/profile.php?id=100090548027826"
                    ]
                    }
                `}
                </script>
            </Helmet>
            <div className="profile-image">
                <img src={DadImageTransparent} alt="Jose Costa" />
            </div>
            <div className="profile-details">
                <h2 id='name'>Meet <span className='highlight-blue'>Jose Costa</span>,</h2>
                <h2 id='name-2'>Your South Florida <span className='highlight-orange'>Real Estate Expert</span></h2>
                <p>
                    With over <span className='highlight-blue' style={{fontWeight: 'bold'}}>30 years</span> as a South Florida resident and <span className='highlight-blue' style={{fontWeight: 'bold'}}>11 years of real estate experience</span>, Jose Costa offers unparalleled local knowledge and expertise.
                </p>

                <h3 className='aboutMeSubTitle'>Why Choose Jose?</h3>
                <p>
                    Jose provides personalized guidance, ensuring you find your perfect home or investment. Fluent in <span style={{fontWeight: 'bold'}}>English, Spanish, and Portuguese</span>, he communicates effectively with diverse clients.
                </p>
                <p id='contact-p-tag'>
                    Ready to start your journey? Contact Jose for a seamless and informed real estate experience.
                </p>

                {/* <h3 className='aboutMeSubTitle'>Multilingual Communication:</h3>
                <p>
                    Fluent in <i>English, Spanish, and Portuguese</i>, Jose ensures seamless communication for both buyers and sellers, delivering top-notch service with genuine care.
                </p>

                <p>
                    Jose will guide you with detailed market insights and a deep understanding of your needs, ensuring you always get the best deal.
                </p> */}
                <div className="contact-details">
                    <a className='contact-info notranslate' href={`mailto:${obfuscateEmail()}`}>{email}</a>
                    <a className='contact-info' href="tel:+19546141351">+1(954) 614-1351</a> 
                    <a className='contact-info contact-info-secondary' href='https://www.instagram.com/josecosta.realtor/'>Instagram</a> 
                    <a className='contact-info contact-info-secondary' href='https://www.facebook.com/profile.php?id=100090548027826'>Facebook</a> 
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
