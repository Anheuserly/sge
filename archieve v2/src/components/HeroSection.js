import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';

// Import the background images
import hero1 from '../path/image/hero/fire-2-1.png';
import hero2 from '../path/image/hero/fire-fighting.jpg';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Images for the background slider using imported images
  const backgroundImages = [hero1, hero2];

  // Auto-rotate background images
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background image slider */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`hero-background ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      
      {/* Overlay with gradient */}
      <div className="hero-overlay"></div>
      
      {/* Content with animations */}
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="logo-container">
          <div className="logo-animation"></div>
        </div>
        <h1 className="hero-title">
          <span className="text-gradient">SHREE GANESH</span>
          <span className="text-bold">ENTERPRISES</span>
        </h1>
        <p className="hero-description">Bringing visions to life with cutting-edge design and technology.</p>
        <div className="hero-buttons">
          <button className="primary-button">Our Services</button>
          <button className="secondary-button">Contact Us</button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </section>
  );
};

export default HeroSection;