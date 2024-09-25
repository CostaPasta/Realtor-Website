import React, { useEffect } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import AboutMe from './About';
import Search from './Search';
import Areas from './Areas';
import Footer from './Footer';
import { Element } from 'react-scroll'; // Import Element from react-scroll
import { ScrollProvider } from './ScrollContext';
import Contact from './Contact';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';

const trackingId = "G-N7R9PEDGV1"; // Replace with your Google Analytics Tracking ID

function Home() {

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.send("pageview");
        }, []);

  return (
    <ScrollProvider>
      <div className="home-container">
        <Helmet>
          <link rel="canonical" href="https://josecostarealtor.com/" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "name": "Jose Costa",
                "url": "https://josecostarealtor.com",
                "logo": "https://josecostarealtor.com/images/logo.webp",
                "image": "https://josecostarealtor.com/images/dadtransparent.webp",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-954-614-1351",
                  "contactType": "Realty Service",
                  "areaServed": "US",
                  "availableLanguage": ["English", "Spanish", "Portuguese"]
                },
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
        <Header />
        <Element name="SlideShowComponent">
          <Slideshow />
        </Element>
        <Element name="aboutMeComponent">
          <AboutMe />
        </Element>
        <Element name="areasComponent">
          <Areas />
        </Element>
        <Element name="searchComponent">
          <Search />
        </Element>
        <Element name="contactComponent">
          <Contact />
        </Element>
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default Home;
