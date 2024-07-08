import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
// Removed import statement for CSS
// import '../components-css/Slideshow.css';

import BeachImage from '../images/beach.webp';
import PierImage from '../images/pier.webp';
import CityImage from '../images/city.webp';
import LuxImage from '../images/lux.webp';

const Slideshow = () => {
    const images = useMemo(() => [
        { src: BeachImage, alt: 'Beach', fetchPriority: 'high' },
        { src: PierImage, alt: 'Pier',  },
        { src: CityImage, alt: 'City',  },
        { src: LuxImage, alt: 'Luxury', }
    ], []);

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
                            className="slide-image"
                            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                            srcSet={img.srcSet}
                            fetchpriority={index === 0 ? 'high' : 'auto'}
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
