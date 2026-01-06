import React from 'react';
import './Gallery.css';
import hero1 from '../assets/hero1.png';
import mdResult1 from '../assets/gallery/md-result-1.jpg';

interface GalleryItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

const Gallery: React.FC = () => {
    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            title: "MD Result 1",
            description: "Molecular Dynamics Simulation Snapshot - Membrane Protein System",
            image: mdResult1
        },
        {
            id: 2,
            title: "Simulation Setup",
            description: "Initial system configuration",
            image: hero1
        },
        {
            id: 3,
            title: "Trajectory Analysis",
            description: "RMSD and RMSF calculations",
            image: hero1
        },
        {
            id: 4,
            title: "Protein Dynamics",
            description: "Conformational changes over time",
            image: hero1
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
