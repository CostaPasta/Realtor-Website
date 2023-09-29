import React, { useState, useEffect, useRef } from 'react'; // Add useRef import
import '../components-css/Slideshow.css';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const classNames = ['sweeping1', 'sweeping2'];
    const [animateClass, setAnimateClass] = useState(classNames[0]);
    const timerRef = useRef(null);

    const nextSlide = () => {
        setAnimateClass(prevClass => classNames[(classNames.indexOf(prevClass) + 1) % classNames.length]);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(nextSlide, 5000);
    };

    const prevSlide = () => {
        setAnimateClass(prevClass => classNames[(classNames.indexOf(prevClass) + 1) % classNames.length]);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(nextSlide, 5000);
    };

    useEffect(() => {
        timerRef.current = setInterval(nextSlide, 5000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }; 
    }, []);

    const offset = -currentIndex * 100; // Calculate the left offset based on the current index

    return (
        <div className="slideshow">
            <div className="images-container" style={{ left: `${offset}%` }}>
                {props.images.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img} alt={`slide ${index}`} className="slide-image" />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="prev-button">Prev</button>
            <button onClick={nextSlide} className="next-button">Next</button>
        </div>
    );
}

export default Slideshow;
