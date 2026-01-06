import React from 'react';
import './Gallery.css';
import mdResult1 from '../assets/gallery/md_result_1.jpg';

const Gallery: React.FC = () => {
    // Gallery Items
    const galleryItems = [
        {
            id: 1,
            title: "MD result 1",
            description: "Molecular dynamics simulation result visualizing protein-membrane interaction.",
            image: mdResult1
        }
    ];

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
