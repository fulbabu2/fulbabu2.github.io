import React from 'react';
import './Research.css';
import transportImg from '../assets/research_transport.png';
import ionChannelsImg from '../assets/research_ion_channels.png';
import proteinTransitionImg from '../assets/research_protein_transition.png';
import drugDesignImg from '../assets/research_drug_design.png';
import proteinDnaImg from '../assets/research_protein_dna.png';
import methodsImg from '../assets/research_methods.png';

const Research: React.FC = () => {
    const [selectedArea, setSelectedArea] = React.useState<{ title: string; description: string; image: string } | null>(null);

    const researchAreas = [
        {
            title: "Transport Membrane Proteins",
            description: "Transport proteins enable the movement of vital molecules-such as ions, nutrients, and gases-across cellular membranes, playing a key role in maintaining cellular homeostasis. They are essential for processes like nerve signaling, muscle contraction, and nutrient absorption. Computational modeling provides detailed insight into their structural behavior and interactions, offering a powerful approach to study mechanisms that are challenging to capture experimentally. By simulating ligand binding, mutations, and transport dynamics at the atomic level, it advances drug discovery and deepens our understanding of related disease pathways.",
            image: transportImg
        },
        {
            title: "Neuronal Ion Channels",
            description: "Neuronal ion channel proteins control the flow of ions like sodium, potassium, and calcium, essential for generating and regulating the heart’s electrical impulses. These channels coordinate the rhythmic contraction and relaxation of cardiac muscle, ensuring proper heartbeat. Computational modeling uncovers their gating mechanisms, ion selectivity, and drug interactions at atomic detail, offering critical insights for understanding arrhythmias and guiding cardiovascular drug development.",
            image: ionChannelsImg
        },
        {
            title: "Protein Conformational Transitions",
            description: "Large-scale conformational transitions enable proteins to switch between functional states critical for processes like signaling, transport, and catalysis. These dynamic changes often involve collective motions that are difficult to capture experimentally. Computational modeling provides powerful tools to visualize and quantify these transitions, offering mechanistic insights into protein function and allosteric regulation at atomic resolution.",
            image: proteinTransitionImg
        },
        {
            title: "Computational Drug Design",
            description: "Computer-aided drug design (CADD) accelerates the discovery of new therapeutics by virtually screening and optimizing molecules before laboratory testing. It helps identify potential drug candidates, predict their binding affinity, and assess pharmacokinetic properties with high efficiency. By simulating molecular interactions and analyzing large datasets, CADD reduces experimental costs and enhances the precision of modern drug development.",
            image: drugDesignImg
        },
        {
            title: "Protein-Nucleic Acid Interactions",
            description: "Protein–nucleic acid interactions are essential for vital processes like transcription, replication, and RNA regulation. Proteins recognize specific DNA or RNA sequences and structures using specialized binding domains. These interactions are driven by hydrogen bonds, electrostatic forces, and shape complementarity. Computational modeling plays a crucial role in visualizing, predicting, and analyzing these interactions at atomic resolution.",
            image: proteinDnaImg
        },
        {
            title: "Computational Methods Development",
            description: "Develop AI/ML and molecular dynamics simulation based methods for mechanistic understanding of biological processes.",
            image: methodsImg
        },
    ];

    const openLightbox = (area: typeof researchAreas[0]) => {
        setSelectedArea(area);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedArea(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="research-page">
            <div className="container">
                <div className="page-header">
                    <h1>Research Areas</h1>
                    <p className="lead-text">Exploring the physics of biological systems through high-performance computing and Artificial Intelligence.</p>
                </div>

                <div className="research-grid">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="research-card">
                            <div className="research-image-container" onClick={() => openLightbox(area)} style={{ cursor: 'pointer' }}>
                                <img src={area.image} alt={area.title} className="research-image" />
                            </div>
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            <button className="read-more" onClick={() => openLightbox(area)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', color: 'var(--color-secondary)' }}>
                                Read More &rarr;
                            </button>
                        </div>
                    ))}
                </div>

                <div className="section methodology-section">
                    <h2>Methods & Tools</h2>
                    <div className="header-line"></div>
                    <p>
                        We use and develop advanced computational tools including AMBER, NAMD and VMD.
                        Our simulations span multiple scales, from quantum mechanics/molecular mechanics (QM/MM)
                        to coarse-grained models, allowing us to bridge the gap between atomic details and cellular processes.
                    </p>
                </div>
            </div>

            {selectedArea && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close rich-close" onClick={closeLightbox}>&times;</button>
                    <div className="lightbox-content rich-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedArea.image} alt={selectedArea.title} className="lightbox-image" />
                        <div className="lightbox-caption">
                            <h3>{selectedArea.title}</h3>
                            <p>{selectedArea.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Research;
