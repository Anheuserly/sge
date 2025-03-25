import React from 'react';
import '../styles/ServicesSection.css';

const services = [
  { name: 'Fire Fighting Systems', image: 'fire.png', description: 'Sprinkler systems, hydrants, and extinguishers for fire safety.' },
  { name: 'Detection Systems', image: 'detection.png', description: 'Addressable, conventional, and wireless fire detection systems.' },
  { name: 'Electrical Work', image: 'electrical.png', description: 'Industrial and commercial electrical installation and maintenance.' },
  { name: 'Plumbing Solutions', image: 'plumbing.png', description: 'Complete plumbing installations for residential and commercial buildings.' }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <h2>Our Expertise</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={`../assets/${service.image}`} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
