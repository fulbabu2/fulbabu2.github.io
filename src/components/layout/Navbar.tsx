import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="navbar-brand">
          <div className="brand-title">THE SHAIKH BIOPHYSICS GROUP</div>
          <div className="brand-subtitle">Computational Structural Biology & Biophysics (CSBB)</div>
        </Link>
        <ul className="navbar-links">
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
      </div>
    </nav>
  );
};

export default Navbar;
