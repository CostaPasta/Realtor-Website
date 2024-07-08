import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import '../components-css/Slideshow.css';

// Import your images
import BeachImage from '../images/beach.webp';
import PierImage from '../images/pier.webp';
import CityImage from '../images/city.webp';
import LuxImage from '../images/lux.webp';

const Slideshow = () => {
    const images = [BeachImage, PierImage, CityImage, LuxImage];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className='slideshow'>
            <div className="slide-container">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>
            <div className="welcome-message">
                <p className="text-border">Your dream home is one click away</p>
            </div>
            <div className="arrows-container">
                <button className="prev-button" onClick={prevSlide}><BsArrowLeft /></button>
                <button className="next-button" onClick={nextSlide}><BsArrowRight /></button>
            </div>
        </div>
    );
};

export default Slideshow;