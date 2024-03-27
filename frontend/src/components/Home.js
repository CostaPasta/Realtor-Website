import React, { useEffect } from 'react';
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


    useEffect(() => {
        function adjustSlideshowHeight() {
            const header = document.querySelector('.header');
            const slideshow = document.querySelector('.slideshow');

            // Calculate the height for the slideshow
            const slideshowHeight = window.innerHeight - header.offsetHeight;

            // Set the computed height to the slideshow
            slideshow.style.height = `${slideshowHeight}px`;
        }

        // Call the function initially
        adjustSlideshowHeight();

        // Update the height when the window is resized
        window.addEventListener('resize', adjustSlideshowHeight);

        return () => {
            // Cleanup the event listener on component unmount
            window.removeEventListener('resize', adjustSlideshowHeight);
        };
    }, []);
    //END SLIDWSHOW 

    
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