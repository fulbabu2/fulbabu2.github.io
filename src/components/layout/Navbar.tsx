import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import labLogo from '../../assets/lab-logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [peopleDropdownOpen, setPeopleDropdownOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setPeopleDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setPeopleDropdownOpen(false);
    }
  };

  const togglePeopleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setPeopleDropdownOpen(!peopleDropdownOpen);
  };
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <img src={labLogo} alt="Shaikh Lab Logo" className="navbar-logo" />
          <div className="brand-text">
            <div className="brand-title">THE SHAIKH BIOPHYSICS GROUP</div>
            <div className="brand-subtitle">Computational Structural Biology &amp; Biophysics (CSBB)</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links desktop-nav">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>HOME</Link></li>
          <li><Link to="/research" className={isActive('/research') ? 'active' : ''}>RESEARCH</Link></li>
          <li className="dropdown">
            <span className={`nav-link dropdown-trigger ${location.pathname.startsWith('/people') ? 'active' : ''}`}>PEOPLE</span>
            <div className="dropdown-menu">
              <Link to="/people/team">THE TEAM</Link>
              <Link to="/people/pi">DR. MOHAMMAD F. SHAIKH</Link>
            </div>
          </li>
          <li><Link to="/publications" className={isActive('/publications') ? 'active' : ''}>PUBLICATIONS</Link></li>
          <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>GALLERY</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>HOME</Link></li>
            <li><Link to="/research" className={isActive('/research') ? 'active' : ''}>RESEARCH</Link></li>
            <li className={`mobile-dropdown ${peopleDropdownOpen ? 'open' : ''}`}>
              <button
                className={`mobile-dropdown-trigger ${location.pathname.startsWith('/people') ? 'active' : ''}`}
                onClick={togglePeopleDropdown}
              >
                PEOPLE
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="mobile-dropdown-menu">
                <Link to="/people/team">THE TEAM</Link>
                <Link to="/people/pi">DR. MOHAMMAD F. SHAIKH</Link>
              </div>
            </li>
            <li><Link to="/publications" className={isActive('/publications') ? 'active' : ''}>PUBLICATIONS</Link></li>
            <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>GALLERY</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
