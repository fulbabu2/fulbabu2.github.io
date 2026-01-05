import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import PublicationList from '../components/common/PublicationList';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroCarousel />

            <div className="container section">
                <div className="section-header">
                    <h2>Recent News</h2>
                    <div className="header-line"></div>
                </div>
                <div className="news-grid">
                    <div className="news-item">
                        <span className="news-date">Oct 15, 2024</span>
                        <h4>Group receives generic grant for biophysics research</h4>
                        <p>We are excited to announce a new funding opportunity to explore...</p>
                    </div>
                    <div className="news-item">
                        <span className="news-date">Sep 01, 2024</span>
                        <h4>New paper published in Nature</h4>
                        <p>Our latest work on nanopore sequencing has been featured...</p>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="section-header">
                    <h2>Selected Publications</h2>
                    <div className="header-line"></div>
                </div>
                <PublicationList limit={4} />
                <div className="view-more">
                    <a href="/publications">View all publications &rarr;</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
