import React, { useState } from 'react';
import './Publications.css';
import journalCover from '../assets/journal-cover.png';
import natureCover from '../assets/covers/cover_nature.png';
import jccCover from '../assets/covers/cover_j_comp_chem.png';
import jpcbCover from '../assets/covers/cover_jpc_b.png';
import jbsdCover from '../assets/covers/cover_jbsd.png';
import sarCover from '../assets/covers/cover_sar_qsar.png';
import acsOmegaCover from '../assets/covers/cover_acs_omega.png';
import frontiersCover from '../assets/covers/cover_frontiers_mol_bio.png';
import acsChemNeuroCover from '../assets/covers/cover_acs_chem_neuro.png';
import molDivCover from '../assets/covers/cover_mol_div.png';
import compBioMedCover from '../assets/covers/cover_comp_bio_med.png';
import compBioChemCover from '../assets/covers/cover_comp_bio_chem.png';
import jcimCover from '../assets/covers/cover_jcim.png';
import chemBioDrugCover from '../assets/covers/cover_chem_bio_drug.png';
import chemometricsCover from '../assets/covers/cover_chemometrics.png';

const journalCoverMap: { [key: string]: string } = {
    "Nature": natureCover,
    "Journal of Computational Chemistry": jccCover,
    "Journal of Physical Chemistry B": jpcbCover,
    "The Journal of Physical Chemistry B": jpcbCover,
    "Journal of Biomolecular Structure and Dynamics": jbsdCover,
    "SAR and QSAR in Environmental Research": sarCover,
    "ACS Omega": acsOmegaCover,
    "Frontiers in Molecular Biosciences": frontiersCover,
    "ACS Chemical Neuroscience": acsChemNeuroCover,
    "Molecular Diversity": molDivCover,
    "Computers in Biology and Medicine": compBioMedCover,
    "Computational Biology and Chemistry": compBioChemCover,
    "Journal of Chemical Information and Modeling": jcimCover,
    "Chemical Biology & Drug Design": chemBioDrugCover,
    "Chemometrics and Intelligent Laboratory Systems": chemometricsCover,
};

interface Publication {
    id: number;
    title: string;
    authors: string;
    journal: string;
    year: number;
    url?: string;
}

const allPublications: Publication[] = [
    {
        id: 32,
        title: "Unlocking the Conformational Secrets of DYRK1A Kinase with Computational Microscope: Exploring Phosphorylation-Driven Structural Dynamics",
        authors: "Ursal, Kapil; Sk, Md Fulbabu; Mahapatra, Subhasmita; Kar, Parimal*",
        journal: "Journal of Computational Chemistry",
        year: 2025,
        url: "https://doi.org/10.1002/jcc.70172"
    },
    {
        id: 31,
        title: "Structure of the human dopamine transporter and mechanisms of allosteric inhibition",
        authors: "Srivastava, Dushyant; Navratna, Vikas; Tosh, Dilip K.; Chinn, Audrey; Sk, Md Fulbabu; Tajkhorshid, Emad; Jacobson, Kenneth A.; Gouaux, Eric*",
        journal: "Nature",
        year: 2024,
        url: "https://doi.org/10.1038/s41586-024-07739-9"
    },
    {
        id: 30,
        title: "Dynamic Interplay of Loop Motions Governs the Molecular Level Regulatory Dynamics in Spleen Tyrosine Kinase: Insights from Molecular Dynamics Simulations",
        authors: "S. Samanta†; Sk, Md Fulbabu†; et al.",
        journal: "Journal of Physical Chemistry B",
        year: 2024,
        url: "https://doi.org/10.1021/acs.jpcb.4c03217"
    },
    {
        id: 29,
        title: "Deciphering the molecular choreography of Janus kinase 2 inhibition via Gaussian accelerated molecular dynamics simulations: A dynamic odyssey",
        authors: "Sk, Md Fulbabu; S. Samanta; S. Poddar; Kar, Parimal*",
        journal: "Journal of Computer-aided Molecular Design",
        year: 2024,
        url: "https://doi.org/10.1007/s10822-023-00548-8"
    },
    {
        id: 28,
        title: "Microsecond dynamics of H10N7 influenza neuraminidase reveals the plasticity of loop regions and drug resistance due to the R292K mutation",
        authors: "Sk, Md Fulbabu; S. Samanta; Poddar, S; Kar, Parimal*",
        journal: "Journal of Computational Chemistry",
        year: 2024,
        url: "https://doi.org/10.1002/jcc.27234"
    },
    {
        id: 27,
        title: "Conformational preferences of triantennary and tetraantennary hybrid N-glycans in aqueous solution: Insight from 20 microsecond long atomistic molecular dynamic simulations",
        authors: "Roy, Rajarshi; Poddar, Sayan; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2023,
        url: "https://doi.org/10.1080/07391102.2022.2047109"
    },
    {
        id: 26,
        title: "Exploring molecular interactions of potential inhibitors against the Spleen Tyrosine Kinase implicated in Autoimmune disorders",
        authors: "S. Samanta†; Md Fulbabu Sk†; et al.",
        journal: "SAR and QSAR in Environmental Research",
        year: 2023,
        url: "https://doi.org/10.1080/1062936X.2023.2266364"
    },
    {
        id: 25,
        title: "Computational studies indicated the effectiveness of human metabolites against SARS-CoV-2 main protease",
        authors: "Roy, Rajarshi†; Sk, Md Fulbabu†; Tanwar, O.; Kar, Parimal*",
        journal: "Molecular Diversity",
        year: 2023,
        url: "https://doi.org/10.1007/s11030-022-10513-6"
    },
    {
        id: 24,
        title: "Finding potential inhibitors against RNA-dependent RNA polymerase (RdRp) of bovine ephemeral fever virus (BEFV): an in-silico study",
        authors: "Pyasi, Shruti; Jonniya, Nisha A.; Sk, Md Fulbabu; Nayak, Debasis*; Kar, Parimal",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2022,
        url: "https://doi.org/10.1080/07391102.2021.1946714"
    },
    {
        id: 23,
        title: "Finding inhibitors and deciphering inhibitor-induced conformational plasticity in the Janus Kinase via multiscale simulations",
        authors: "Sk, Md Fulbabu*; Kar, Parimal*",
        journal: "SAR and QSAR in Environmental Research",
        year: 2022,
        url: "https://doi.org/10.1080/1062936X.2022.2145352"
    },
    {
        id: 22,
        title: "Phosphorylation-induced conformational dynamics and inhibition of Janus kinase 1 by suppressors of cytokine signaling 1",
        authors: "Sk, Md Fulbabu; Jonniya, N. A.; Roy, Rajarshi; Kar, Parimal*",
        journal: "Journal of Physical Chemistry B",
        year: 2022,
        url: "https://doi.org/10.1021/acs.jpcb.1c10733"
    },
    {
        id: 21,
        title: "A plausible contribution to multiple sclerosis; presentation of antigenic myelin protein epitopes by major histocompatibility complexes",
        authors: "Jakhmola, Shweta*†; Sk, Md Fulbabu†; Chatterjee, Akash; Jain, Khushboo; Kar, Parimal*; Jha, Hem C.*",
        journal: "Computers in Biology and Medicine",
        year: 2023,
        url: "https://doi.org/10.1016/j.compbiomed.2023.107567"
    },
    {
        id: 20,
        title: "Unraveling the molecular mechanism of recognition of selected next generation antirheumatoid arthritis inhibitors by Janus kinase 1",
        authors: "Sk, Md Fulbabu; Jonniya, N. A.; Roy, Rajarshi; Kar, Parimal*",
        journal: "ACS Omega",
        year: 2022,
        url: "https://doi.org/10.1021/acsomega.1c06715"
    },
    {
        id: 19,
        title: "Computational investigation of structural dynamics of SARS-CoV-2 methyltransferase-stimulatory factor heterodimer nsp16/nsp10 bound to the cofactor SAM",
        authors: "Sk, Md Fulbabu†; Jonniya, Nisha A.†; Roy, Rajarshi; Poddar, Sayan; Kar, Parimal*",
        journal: "Frontiers in Molecular Biosciences",
        year: 2020,
        url: "https://doi.org/10.3389/fmolb.2020.590165"
    },
    {
        id: 18,
        title: "Comparative structural dynamics of isoforms of Helicobacter pylori adhesin BabA bound to Lewisb hexasaccharide via multiple replica molecular dynamics simulations",
        authors: "Roy, Rajarshi; Jonniya, Nisha A.; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Frontiers in Molecular Biosciences",
        year: 2022,
        url: "https://doi.org/10.3389/fmolb.2022.852895"
    },
    {
        id: 17,
        title: "Decoding the host-parasite protein interactions involved in cerebral malaria through glares of molecular dynamics simulations",
        authors: "Indari, Omkar†; Sk, Md Fulbabu†; Jakhmola, Shweta; Jonniya, Nisha A.; Jha, Hem*; Kar, Parimal*",
        journal: "Journal of Physical Chemistry B",
        year: 2022,
        url: "https://doi.org/10.1021/acs.jpcb.1c07850"
    },
    {
        id: 16,
        title: "Identification of novel Efflux pump inhibitors for Neisseria gonorrhoeae via multiple ligand-based pharmacophores, e-pharmacophore, molecular docking, density functional theory, and Molecular dynamics approaches",
        authors: "Jain, Neha*; Sk, Md Fulbabu; Mishra, Amit; Kar, Parimal; Kumar, Amit*",
        journal: "Computational Biology and Chemistry",
        year: 2022,
        url: "https://doi.org/10.1016/j.compbiolchem.2022.107682"
    },
    {
        id: 15,
        title: "Discovery of potential competitive inhibitors against With No Lysine Kinase 1 for treating hypertension by virtual screening, inverse pharmacophore-based lead optimization, and molecular dynamics simulations",
        authors: "Jonniya, Nisha A.; Sk, Md Fulbabu; Roy, Rajarshi; Kar, Parimal*",
        journal: "SAR and QSAR in Environmental Research",
        year: 2022,
        url: "https://doi.org/10.1080/1062936X.2021.2023218"
    },
    {
        id: 14,
        title: "Elucidating biophysical basis of binding of inhibitors to SARS-CoV-2 main protease by using molecular dynamics simulations and free energy calculations",
        authors: "Sk, Md Fulbabu; Roy, Rajarshi; Jonniya, Nisha A.; Poddar, Sayan; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2021,
        url: "https://doi.org/10.1080/07391102.2020.1768149"
    },
    {
        id: 13,
        title: "Investigating potency of TMC-126 against wild-type and mutant variants of HIV-1 protease: A molecular dynamics and free energy study",
        authors: "Sk, Md Fulbabu; Haridev, S. R.; Roy, Rajarshi; Kar, Parimal*",
        journal: "SAR and QSAR in Environmental Research",
        year: 2021,
        url: "https://doi.org/10.1080/1062936X.2021.1999318"
    },
    {
        id: 12,
        title: "Exploring the potency of currently used drugs against HIV-1 protease of subtype D variant by using multiscale simulations",
        authors: "Sk, Md Fulbabu; Roy, Rajarshi; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2021,
        url: "https://doi.org/10.1080/07391102.2020.1724196"
    },
    {
        id: 11,
        title: "Investigating phosphorylation-induced conformational changes in WNK1 kinase by molecular dynamics simulations",
        authors: "Jonniya, Nisha A.; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "ACS Omega",
        year: 2019,
        url: "https://doi.org/10.1021/acsomega.9b02187"
    },
    {
        id: 10,
        title: "Exploring the energetic basis of binding of currently used drugs against HIV-1 subtype CRF01-AE protease via molecular dynamics simulations",
        authors: "Sk, Md Fulbabu; Jonniya, Nisha A.; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2021,
        url: "https://doi.org/10.1080/07391102.2020.1794965"
    },
    {
        id: 9,
        title: "Identification of potential inhibitors against Epstein–Barr virus nuclear antigen 1 (EBNA1): An insight from docking and molecular dynamic simulations",
        authors: "Jakhmola, Shweta; Jonniya, Nisha A.; Sk, Md Fulbabu; Rani, Annu; Kar, Parimal*; Jha, Hem C*",
        journal: "ACS Chemical Neuroscience",
        year: 2021,
        url: "https://doi.org/10.1021/acschemneuro.1c00350"
    },
    {
        id: 8,
        title: "Unraveling the molecular mechanism of recognition of human interferon-stimulated gene product 15 by coronavirus papain-like proteases: A multiscale simulation study",
        authors: "Roy, Rajarshi; Jonniya, Nisha A.; Poddar, Sayan; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Journal of Chemical Information and Modeling",
        year: 2021,
        url: "https://doi.org/10.1021/acs.jcim.1c00918"
    },
    {
        id: 7,
        title: "Plant-derived natural polyphenols as potential antiviral drugs against SARS-CoV-2 via RNA dependent RNA polymerase (RdRp) inhibition: an in-silico analysis",
        authors: "Singh, Satyam; Sk, Md Fulbabu; Sonawane, Avinash; Kar, Parimal; Sadhukhan, Sushabhan*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2021,
        url: "https://doi.org/10.1080/07391102.2020.1796810"
    },
    {
        id: 6,
        title: "Characterizing an allosteric inhibitor-induced inactive state in with-no-lysine kinase 1 using Gaussian accelerated molecular dynamics simulations",
        authors: "Jonniya, Nisha A.; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Physical Chemistry Chemical Physics",
        year: 2021,
        url: "https://doi.org/10.1039/D0CP05733A"
    },
    {
        id: 5,
        title: "A comparative study of structural and conformational properties of WNK kinase isoforms bound to an inhibitor: insights from molecular dynamic simulations",
        authors: "Jonniya, Nisha A.; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2022,
        url: "https://doi.org/10.1080/07391102.2020.1827035"
    },
    {
        id: 4,
        title: "Elucidating specificity of an allosteric inhibitor WNK476 among With-No-Lysine kinase isoforms using molecular dynamic simulations",
        authors: "Jonniya, Nisha A.; Sk, Md Fulbabu; Kar, Parimal*",
        journal: "Chemical Biology & Drug Design",
        year: 2021,
        url: "https://doi.org/10.1111/cbdd.13863"
    },
    {
        id: 3,
        title: "Finding potent inhibitors against SARS-CoV-2 main protease through virtual screening, ADMET, and molecular dynamics simulation studies",
        authors: "Roy, Rajarshi; Sk, Md Fulbabu; Jonniya, Nisha A.; Poddar, Sayan; Kar, Parimal*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2022,
        url: "https://doi.org/10.1080/07391102.2021.1897680"
    },
    {
        id: 2,
        title: "Mining of Ebola virus genome for the construction of multi-epitope vaccine to combat its infection",
        authors: "Shankar, Uma; Jain, Neha; Mishra, Subodh K.; Sk, Md Fulbabu; Kar, Parimal; Kumar, Amit*",
        journal: "Journal of Biomolecular Structure and Dynamics",
        year: 2022,
        url: "https://doi.org/10.1080/07391102.2021.1874529"
    },
    {
        id: 1,
        title: "Identification of food compounds as inhibitors of SARS-CoV-2 main protease using molecular docking and molecular dynamics simulations",
        authors: "Masand, Vijay H*; Sk, Md Fulbabu; Kar, Parimal; Vesna Rastija; Magdi EA. Zaki*",
        journal: "Chemometrics and Intelligent Laboratory Systems",
        year: 2021,
        url: "https://doi.org/10.1016/j.chemolab.2021.104394"
    }
];

const Publications: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPubs = allPublications.filter(pub =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="publications-page">
            <div className="container">
                <div className="page-header">
                    <h1>Publications</h1>
                    <div className="header-line" style={{ margin: '0 auto' }}></div>
                </div>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="publication-list-full">
                    {filteredPubs.map(pub => (
                        <div key={pub.id} className="pub-item-full">
                            <div className="pub-cover">
                                <img src={journalCoverMap[pub.journal] || journalCover} alt={`${pub.journal} Cover`} />
                            </div>
                            <div className="pub-content">
                                <h3 className="pub-title-full">{pub.title}</h3>
                                <p className="pub-authors-full">{pub.authors}</p>
                                <div className="pub-meta">
                                    <span className="pub-journal-full">{pub.journal}</span>
                                    <span className="pub-year-full">({pub.year})</span>
                                    <a
                                        href={pub.url || `https://scholar.google.com/scholar?q=${encodeURIComponent(pub.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pub-link"
                                    >
                                        View Article
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                    {filteredPubs.length === 0 && (
                        <p className="no-results">No publications found matching your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Publications;
