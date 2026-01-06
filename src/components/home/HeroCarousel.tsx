import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import heroBg from '../../assets/hero_research.png'; // Updated background image

const HeroCarousel: React.FC = () => {
    const slides = [
        {
            image: heroBg,
            title: "Advanced Drug Discovery",
            subtitle: "Exploring molecular structures at the atomic scale"
        },
        // Placeholder for second slide to demonstrate carousel logic
        {
            image: heroBg,
            title: "Molecular Dynamics Simulations",
            subtitle: "Unraveling the physics of biological systems"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="hero-carousel">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="carousel-content container">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <a href="/research" className="btn-primary">Learn More</a>
                    </div>
                </div>
            ))}
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? 'active' : ''}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
