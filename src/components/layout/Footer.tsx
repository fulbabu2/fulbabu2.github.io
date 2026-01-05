import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>The Shaikh Biophysics Group</h3>
                    <p>Department of Biochemistry</p>
                    <p>University of Illinois at Urbana-Champaign</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Research and Advanced Laboratory of Biochemistry</p>
                    <p>1110 West Green Street</p>
                    <p>Urbana, IL 61801</p>
                </div>
                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} The Shaikh Biophysics Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
