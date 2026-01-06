import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';
import transportImg from '../../assets/research_transport.png';
import ionChannelsImg from '../../assets/research_ion_channels.png';
import proteinTransitionImg from '../../assets/research_protein_transition.png';
import drugDesignImg from '../../assets/research_drug_design.png';
import proteinDnaImg from '../../assets/research_protein_dna.png';
import methodsImg from '../../assets/research_methods.png';

const HeroCarousel: React.FC = () => {
    const slides = [
        {
            image: transportImg,
            title: "Transport Membrane Proteins",
            subtitle: "Unraveling mechanisms of molecular transport across cell membranes",
            animationClass: "anim-transport"
        },
        {
            image: ionChannelsImg,
            title: "Neuronal Ion Channels",
            subtitle: "Investigating gating mechanisms and ion selectivity in neuronal channels",
            animationClass: "anim-ion"
        },
        {
            image: proteinTransitionImg,
            title: "Protein Conformational Transitions",
            subtitle: "Visualizing dynamic structural changes at atomic resolution",
            animationClass: "anim-conformation"
        },
        {
            image: drugDesignImg,
            title: "Computational Drug Design",
            subtitle: "Accelerating therapeutics discovery through virtual screening and simulation",
            animationClass: "anim-docking"
        },
        {
            image: proteinDnaImg,
            title: "Protein-Nucleic Acid Interactions",
            subtitle: "Decoding the molecular basis of gene regulation and replication",
            animationClass: "anim-binding"
        },
        {
            image: methodsImg,
            title: "Computational Methods Development",
            subtitle: "Advancing biological understanding with AI and high-performance computing",
            animationClass: "anim-compute"
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
                    className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${slide.animationClass}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="carousel-content container">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <Link to="/research" className="btn-primary">Learn More</Link>
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
