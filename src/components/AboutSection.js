import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2>About Us</h2>
      <p>We specialize in fire safety solutions, electrical installations, and plumbing services, ensuring top-tier safety and compliance.</p>
      <div className="about-container">
        <div className="about-card">
          <h3>🔥 Fire Safety Experts</h3>
          <p>We install and maintain fire sprinkler systems, hydrants, and advanced detection systems.</p>
        </div>
        <div className="about-card">
          <h3>⚡ Electrical Solutions</h3>
          <p>From wiring to panel installations, we provide reliable electrical services for homes and industries.</p>
        </div>
        <div className="about-card">
          <h3>🚰 Plumbing Services</h3>
          <p>We ensure high-quality plumbing installations, including pipelines, fittings, and maintenance.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
