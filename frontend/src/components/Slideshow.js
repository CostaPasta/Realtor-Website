import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { getBlobUrl } from './blobService';
// Removed import statement for CSS
// import '../components-css/Slideshow.css';

// import BeachImage from '../images/beach.webp';
// import PierImage from '../images/pier.webp';
// import CityImage from '../images/city.webp';
// import LuxImage from '../images/lux.webp';

const imagePaths = {
    beach: 'beach-JqoB3QHawoLhOlxlnqyWIJK2UstL9B.webp',
    pier: 'pier-MVXPl4kBvpsLSa6uuSdn529CAWY2kB.webp',
    city: 'city-wC6k7oEdiY3CEBiZhssjiP8fAb0vlN.webp',
    lux: 'pier-MVXPl4kBvpsLSa6uuSdn529CAWY2kB.webp', // Replace <your-unique-id> with the actual unique ID of the lux image
};
  


const Slideshow = () => {
    const images = useMemo(() => [
        { src: getBlobUrl(imagePaths.beach), alt: 'Beach', srcSet: `${getBlobUrl(imagePaths.beach)} 480w, ${getBlobUrl(imagePaths.beach)} 800w, ${getBlobUrl(imagePaths.beach)} 1200w` },
        { src: getBlobUrl(imagePaths.pier), alt: 'Pier', srcSet: `${getBlobUrl(imagePaths.pier)} 480w, ${getBlobUrl(imagePaths.pier)} 800w, ${getBlobUrl(imagePaths.pier)} 1200w` },
        { src: getBlobUrl(imagePaths.city), alt: 'City', srcSet: `${getBlobUrl(imagePaths.city)} 480w, ${getBlobUrl(imagePaths.city)} 800w, ${getBlobUrl(imagePaths.city)} 1200w` },
        { src: getBlobUrl(imagePaths.lux), alt: 'Luxury', srcSet: `${getBlobUrl(imagePaths.lux)} 480w, ${getBlobUrl(imagePaths.lux)} 800w, ${getBlobUrl(imagePaths.lux)} 1200w` },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 9000);
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
                            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw, (max-height: 100%)"
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
                <button className="prev-button" aria-label='Previous Button' onClick={prevSlide}><BsArrowLeft /></button>
                <button className="next-button" aria-label='Next Button' onClick={nextSlide}><BsArrowRight /></button>
            </div>
        </div>
    );
};

export default Slideshow;
