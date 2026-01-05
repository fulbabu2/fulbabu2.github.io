import React from 'react';
import './People.css';
import piPhoto from '../assets/fulbabu.png';

const PiProfile: React.FC = () => {
    return (
        <div className="people-page">
            <div className="container">
                <div className="page-header">
                    <h1>Principal Investigator</h1>
                </div>
            </div>

            <div className="pi-section">
                <div className="pi-container">
                    <div className="pi-sidebar">
                        <div className="sidebar-card">
                            <img src={piPhoto} alt="Dr. Md F. Shaikh" className="pi-photo" />
                            <div className="sidebar-info">
                                <h2>Dr. Md F. Shaikh</h2>
                                <p className="pi-title">Principal Investigator</p>
                                <p className="pi-dept">Assistant Professor of Biophysics</p>

                                <div className="sidebar-contact">
                                    <div className="email-item">
                                        <span className="label">Email:</span>
                                        <a href="mailto:mfsk@illinois.edu">mfsk@illinois.edu</a>
                                    </div>
                                </div>

                                <div className="social-links-row">
                                    <a href="https://scholar.google.com/citations?user=hH9eGJUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-icon sc-scholar" title="Google Scholar">
                                        <i className="ai ai-google-scholar"></i> Scholar
                                    </a>
                                    <a href="https://www.linkedin.com/in/md-fulbabu-shaikh-a17936133/" target="_blank" rel="noopener noreferrer" className="social-icon sc-linkedin" title="LinkedIn">
                                        <i className="fab fa-linkedin"></i> LinkedIn
                                    </a>
                                    <a href="https://orcid.org/0000-0003-4341-8370" target="_blank" rel="noopener noreferrer" className="social-icon sc-orcid" title="ORCID">
                                        <i className="ai ai-orcid"></i> ORCID
                                    </a>
                                    <a href="https://www.researchgate.net/profile/Md-Fulbabu-Sk" target="_blank" rel="noopener noreferrer" className="social-icon sc-rg" title="ResearchGate">
                                        <i className="ai ai-researchgate"></i> RG
                                    </a>
                                    <a href="https://x.com/ShaiKhBioPhys" target="_blank" rel="noopener noreferrer" className="social-icon sc-x" title="X (Twitter)">
                                        <i className="fab fa-twitter"></i> X
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pi-content">
                        <h3 className="content-title">About</h3>
                        <div className="pi-bio">
                            <p>Dr. Mohammad F. Shaikh received his Ph.D. in Computational Biophysics from the Indian Institute of Technology Indore, where his doctoral work, under the mentorship of Dr. Parimal Kar, focused on the computational modeling of Janus kinase and the molecular basis of its inhibition.</p>
                            <p>His research expertise spans large-scale conformational changes in membrane proteins, protein-lipid interactions, molecular recognition, and computer-aided drug discovery, employing advanced molecular dynamics and machine learning techniques.</p>
                            <p>He has authored over 30 peer-reviewed publications, including recent high-impact studies in Nature, and have accumulated more than 700 citations with an h-index of 14. His work has contributed to understanding the molecular mechanisms of protein kinases, neurotransmitter transporters, viral proteins, and drug resistance, with applications ranging from cancer and autoimmune disorders to infectious diseases.</p>
                            <p>His achievements have been recognized with several honors, including the prestigious DST-INSPIRE Fellowship from the Government of India, selection as a 2024 Top Scholar by ScholarGPS (placing him in the top 0.5% of scholars worldwide), and best poster awards at international scientific conferences. He is also actively involved in scientific outreach, mentoring, and peer review, reflecting my dedication to advancing the field of biophysics and supporting the broader scientific community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Section for Education & Awards */}
            <div className="profile-details-full" style={{ maxWidth: '95%', margin: '0 auto', padding: '0 1.5rem' }}>
                <div className="profile-details">
                    <div className="profile-columns">
                        <div className="timeline-section">
                            <h3 className="section-header">Appointments & Education</h3>

                            {/* Timeline Item: Postdoc */}
                            <div className="timeline-row">
                                <div className="timeline-date">2022-</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-desktop"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Postdoctoral Research Associate</h4>
                                    <p className="institution">University of Illinois Urbana-Champaign</p>
                                    <p className="department">Beckman Institute for Advanced Science and Technology</p>
                                    <ul className="sub-detail-list">
                                        <li><strong>Advisor:</strong> Prof. Emad Tajkhorshid</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Timeline Item: PhD */}
                            <div className="timeline-row">
                                <div className="timeline-date">2017-2022</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Ph.D. in Computational Biophysics</h4>
                                    <p className="institution">Indian Institute of Technology Indore</p>
                                    <p className="department">Biosciences and Biomedical Engineering (BSBE)</p>
                                    <ul className="sub-detail-list">
                                        <li><strong>Advisor:</strong> Dr. Parimal Kar</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Timeline Item: MSc */}
                            <div className="timeline-row">
                                <div className="timeline-date">2014-2016</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-graduation-cap"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Master of Science in Physics</h4>
                                    <p className="institution">Aligarh Muslim University</p>
                                    <ul className="sub-detail-list">
                                        <li><strong>Advisor:</strong> Prof. Shahid Husain</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Timeline Item: BSc */}
                            <div className="timeline-row">
                                <div className="timeline-date">2011-2014</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-university"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Bachelor of Science in Physics (Honors)</h4>
                                    <p className="institution">Aligarh Muslim University</p>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-section">
                            <h3 className="section-header">Honors & Awards</h3>

                            <div className="timeline-row">
                                <div className="timeline-date">2024</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Top Scholar (Top 0.5% Worldwide)</h4>
                                    <p className="institution">ScholarGPS</p>
                                </div>
                            </div>

                            <div className="timeline-row">
                                <div className="timeline-date">2017-2022</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-certificate"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>DST-INSPIRE Fellowship</h4>
                                    <p className="institution">Government of India</p>
                                </div>
                            </div>

                            <div className="timeline-row">
                                <div className="timeline-date">2011-2016</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>DST-INSPIRE Scholarship</h4>
                                    <p className="institution">Government of India</p>
                                </div>
                            </div>

                            <div className="timeline-row">
                                <div className="timeline-date">2012</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>AMU-Graduate Scholarship, North California Merit-Cum Fellowship</h4>
                                    <p className="institution">AMU Alumni Association</p>
                                </div>
                            </div>

                            <div className="timeline-row">
                                <div className="timeline-date">2009</div>
                                <div className="timeline-marker">
                                    <div className="timeline-line"></div>
                                    <div className="timeline-icon">
                                        <i className="fas fa-certificate"></i>
                                    </div>
                                </div>
                                <div className="timeline-content">
                                    <h4>Merit Cum Means Scholarship</h4>
                                    <p className="institution">Govt. of West Bengal, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PiProfile;
