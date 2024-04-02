import React, { useState, useEffect, useRef } from 'react';
import '../components-css/Slideshow.css';
import { useScrollContext } from './ScrollContext';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import BeachImage from '../images/beach.jpg';
import PierImage from '../images/pier.jpeg';
import CityImage from '../images/city.jpeg';
import LuxImage from '../images/lux.jpeg'

function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(1); // Start from the first "real" slide
    const [isTransitioning, setIsTransitioning] = useState(true);
    const slidesRef = useRef(null);
    const { isScrolled } = useScrollContext();


    // USED FOR SLIDESHOW
    const images = [
        BeachImage,
        PierImage,
        CityImage,
        LuxImage
    ];

    // Include both duplicated last and first slides
    const slides = [images[images.length - 1], ...images, images[0]];

    const nextSlide = () => {
        if (currentIndex >= images.length) {
            // Transition to the first duplicated slide then reset to the first real slide
            setCurrentIndex(currentIndex + 1);
            setTimeout(() => {
                setIsTransitioning(false); // Disable transition for the reset
                setCurrentIndex(1); // Reset to the first real slide
            }, 300); // Transition duration
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex <= 1) {
            // Transition to the last duplicated slide then reset to the last real slide
            setCurrentIndex(0); // The last duplicated slide
            setTimeout(() => {
                setIsTransitioning(false); // Disable transition for the reset
                setCurrentIndex(images.length); // Reset to the last real slide
            }, 300); // Transition duration
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 9000); // Change the slide every 5000ms (5 seconds)

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [currentIndex]); // Depend on `currentIndex` to trigger changes

    useEffect(() => {
        if ((currentIndex === 1 || currentIndex === images.length) && !isTransitioning) {
            // Re-enable transition after resetting
            setTimeout(() => setIsTransitioning(true), 50); // A slight delay to ensure re-enabling happens after the reset
        }
    }, [currentIndex, isTransitioning]);

    const offset = -currentIndex * 100; // Calculate the offset based on the current index

    return (
        <div className='slideshow'>
            <div
                className="images-container"
                style={{
                    left: `${offset}%`,
                    transition: isTransitioning ? 'left 300ms ease-in-out' : 'none',
                }}
                ref={slidesRef}
            >
                {slides.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img} alt={`Slide ${index}`} className="slide-image" />
                    </div>
                ))}
            </div>
            <div className="welcome-message">
                <p className="text-border">Your dream home is one click away</p>
            </div>
            <button onClick={prevSlide} className="prev-button"><BsArrowLeft/></button>
            <button onClick={nextSlide} className="next-button"><BsArrowRight/></button>
        </div>
    );
}

export default Slideshow;