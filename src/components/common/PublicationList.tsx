import React from 'react';
import './PublicationList.css';

interface Publication {
    id: number;
    title: string;
    authors: string;
    journal: string;
    year: number;
}

const selectedPublications: Publication[] = [
    {
        id: 31,
        title: "Structure of the human dopamine transporter and mechanisms of allosteric inhibition",
        authors: "Srivastava, Dushyant; Navratna, Vikas; Tosh, Dilip K.; Chinn, Audrey; Sk, Md Fulbabu; Tajkhorshid, Emad; Jacobson, Kenneth A.; Gouaux, Eric*",
        journal: "Nature",
        year: 2024
    },
    {
        id: 30,
        title: "Dynamic Interplay of Loop Motions Governs the Molecular Level Regulatory Dynamics in Spleen Tyrosine Kinase: Insights from Molecular Dynamics Simulations",
        authors: "S. Samanta†; Sk, Md Fulbabu†; Koirala, S; Kar, Parimal*",
        journal: "Journal of Physical Chemistry B",
        year: 2024
    },
    {
        id: 28,
        title: "Microsecond dynamics of H10N7 influenza neuraminidase reveals the plasticity of loop regions and drug resistance due to the R292K mutation",
        authors: "Sk, Md Fulbabu; S. Samanta; Poddar, S; Kar, Parimal*",
        journal: "Journal of Computational Chemistry",
        year: 2024
    },
    {
        id: 22,
        title: "Phosphorylation-induced conformational dynamics and inhibition of JAK1 by suppressors of cytokine signaling 1",
        authors: "Sk, Md Fulbabu; Jonniya, N. A.; Roy, Rajarshi; Kar, Parimal*",
        journal: "Journal of Physical Chemistry B",
        year: 2022
    }
];

const PublicationList: React.FC<{ limit?: number }> = ({ limit }) => {
    const displayPubs = limit ? selectedPublications.slice(0, limit) : selectedPublications;

    return (
        <div className="publication-list">
            {displayPubs.map(pub => (
                <div key={pub.id} className="publication-item">
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-authors">{pub.authors}</p>
                    <p className="pub-journal">
                        <span className="journal-name">{pub.journal}</span>, {pub.year}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default PublicationList;
