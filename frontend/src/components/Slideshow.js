import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { getBlobUrl } from './blobService';
// Removed import statement for CSS
// import '../components-css/Slideshow.css';

// import BeachImage from '../images/beach.webp';
// import PierImage from '../images/pier.webp';
// import CityImage from '../images/city.webp';
// import LuxImage from '../images/lux.webp';

// Blob store image paths for different sizes
const imagePaths = {
    beach: {
      small: 'beach-small-du53wGqQzHxYnnWIWZpNHKVFFa1tXA.webp',
      medium: 'beach-medium-x8ugnBj6rLgT720uhoF9J4HyiLLOAr.webp',
      large: 'beach-large-StQzBFKZZ1JhP7KfXKJT8IdNBTLszk.webp',
    },
    pier: {
      small: 'pier-small-Iz3p0l8um6fb9fBIAXay1U8ByeY5Y9.webp',
      medium: 'pier-medium-A5pCh3rlBd65adLp3t5fMawD9WfLZI.webp',
      large: 'pier-MVXPl4kBvpsLSa6uuSdn529CAWY2kB.webp',
    },
    city: {
      small: 'city-small-wV2oowYNLbmrmkdQREQ6mcYRpwiTZp.webp',
      medium: 'city-medium-mOFLtHynv6jXIszew6FVLtzxr3d5Im.webp',
      large: 'city-wC6k7oEdiY3CEBiZhssjiP8fAb0vlN.webp',
    },
    lux: {
      small: 'lux-small-plbFEPeu3ZycEXFCuJeD9V8O5DyJRv.webp',
      medium: 'lux-medium-m6TYZm0un665TQSUNPuUoQTuIVEkRA.webp',
      large: 'lux-large-qaf9uVjef30AUwSyLugB6DpGiVO9pJ.webp',
    },
  };
  


const Slideshow = () => {
    const images = useMemo(() => [
        { 
            src: getBlobUrl(imagePaths.beach.large), 
            alt: 'Beach', 
            srcSet: `
            ${getBlobUrl(imagePaths.beach.small)} 480w, 
            ${getBlobUrl(imagePaths.beach.medium)} 800w, 
            ${getBlobUrl(imagePaths.beach.large)} 1200w
            ` 
        },
        { 
            src: getBlobUrl(imagePaths.pier.large), 
            alt: 'Pier', 
            srcSet: `
            ${getBlobUrl(imagePaths.pier.small)} 480w, 
            ${getBlobUrl(imagePaths.pier.medium)} 800w, 
            ${getBlobUrl(imagePaths.pier.large)} 1200w
            ` 
        },
        { 
            src: getBlobUrl(imagePaths.city.large), 
            alt: 'City', 
            srcSet: `
            ${getBlobUrl(imagePaths.city.small)} 480w, 
            ${getBlobUrl(imagePaths.city.medium)} 800w, 
            ${getBlobUrl(imagePaths.city.large)} 1200w
            ` 
        },
        { 
            src: getBlobUrl(imagePaths.lux.large), 
            alt: 'Luxury', 
            srcSet: `
            ${getBlobUrl(imagePaths.lux.small)} 480w, 
            ${getBlobUrl(imagePaths.lux.medium)} 800w, 
            ${getBlobUrl(imagePaths.lux.large)} 1200w
            ` 
        },
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
                <button className="prev-button" aria-label='Previous Button' onClick={prevSlide}><BsArrowLeft /></button>
                <button className="next-button" aria-label='Next Button' onClick={nextSlide}><BsArrowRight /></button>
            </div>
        </div>
    );
};

export default Slideshow;
