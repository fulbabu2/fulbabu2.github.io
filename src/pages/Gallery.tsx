import React from 'react';
import './Gallery.css';
// Reusing hero image or using placeholders
import hero1 from '../assets/hero1.png';

const Gallery: React.FC = () => {
    // Generate some mock items
    const galleryItems = Array(6).fill(null).map((_, i) => ({
        id: i,
        title: `Simulation Result ${i + 1}`,
        description: "Visualizing molecular dynamics trajectory...",
        image: hero1 // In a real app, diverse images
    }));

    return (
        <div className="gallery-page">
            <div className="container">
                <div className="page-header">
                    <h1>Gallery</h1>
                    <div className="header-line" style={{ margin: '0 auto' }}></div>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map(item => (
                        <div key={item.id} className="gallery-item">
                            <div className="gallery-image-container">
                                <img src={item.image} alt={item.title} className="gallery-image" />
                                <div className="gallery-overlay">
                                    <div className="overlay-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
