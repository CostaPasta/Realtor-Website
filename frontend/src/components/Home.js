import React, { useEffect } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import BeachImage from '../images/beach.jpg';
import PierImage from '../images/pier.jpeg';
import CityImage from '../images/city.jpeg';
import LuxImage from '../images/lux.jpeg'
import Listings from './Listings';
import Contact from './Contact';
import AboutMe from './About';
import Search from './Search';

function Home() {

    const images = [
        BeachImage,
        PierImage,
        CityImage,
        LuxImage
        // ... add as many images as you'd like
    ];

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

    return (
        <div className="home-container">
            <Header />
            <Slideshow images={images} />
            <AboutMe />
            <Search/>
            <Listings />
            <Contact />
        </div>
    );
}

export default Home;
