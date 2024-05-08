import React from 'react';
import Header from './Header';
import Slideshow from './Slideshow';

import Listings from './Listings';
//import Contact from './Contact';
import AboutMe from './About';
import Search from './Search';
import Areas from './Areas';
import Footer from './Footer'
import { Element } from 'react-scroll'; // Import Element from react-scroll
import { ScrollProvider } from './ScrollContext';

function Home() {
    
    
    return (

        <ScrollProvider>
            <div className="home-container">
                
                <Header />
                <Element name="SlideShowComponent">
                    <Slideshow />
                </Element>
                <Element name="aboutMeComponent">
                    <AboutMe />
                </Element>
                <Element name="areasComponent">
                    <Areas/>
                </Element>
                <Element name="searchComponent" >
                    <Search />
                </Element>
                <Element name="listingsComponent">
                    <Listings />
                </Element>
                <Footer/>
            </div>
        </ScrollProvider>
        
    );
}

export default Home;