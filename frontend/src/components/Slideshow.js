import React, { useState, useEffect, useCallback } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// import '../components-css/Slideshow.css';

import BeachImage from '../images/beach.webp';
import PierImage from '../images/pier.webp';
import CityImage from '../images/city.webp';
import LuxImage from '../images/lux.webp';

const Slideshow = () => {
    const images = [
        { src: BeachImage, alt: 'Beach', fetchPriority: 'high' },
        { src: PierImage, alt: 'Pier' },
        { src: CityImage, alt: 'City' },
        { src: LuxImage, alt: 'Luxury' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 7000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    useEffect(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        const img = new Image();
        img.src = images[nextIndex].src;
    }, [currentIndex, images]);

    return (
        <div className='slideshow'>
            <div className="slide-container">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img 
                            src={img.src} 
                            alt={img.alt} 
                            // loading={index === 0 ? 'eager' : 'lazy'}
                            className="slide-image"
                            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                            srcSet={`
                                ${img.src} 480w,
                                ${img.src} 800w,
                                ${img.src} 1200w
                            `}
                        />
                    </div>
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
