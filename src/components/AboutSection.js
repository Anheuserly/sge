import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <div className="about-underline"></div>
          <p className="about-description">
            We are a passionate team dedicated to creating innovative solutions that make a difference.
            With years of experience in the industry, we strive to deliver excellence in everything we do.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>Pushing boundaries with creative solutions</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Teamwork</h3>
              <p>Collaborative approach to every project</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Growth</h3>
              <p>Constantly evolving and improving</p>
            </div>
          </div>
          <button className="about-btn">Learn More</button>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src="https://source.unsplash.com/random/600x400/?team" alt="Our Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

