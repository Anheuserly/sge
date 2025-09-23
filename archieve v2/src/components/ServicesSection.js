import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/ServicesSection.css';

// Import service images
import fireImage from '../path/image/services/fire.jpg';
import detectionImage from '../path/image/services/detection.jpg';
import electricalImage from '../path/image/services/electrical.jpg';
import plumbingImage from '../path/image/services/plumbing.jpg';
import amcImage from '../path/image/services/amc.jpg';
import separationImage from '../path/image/services/saperation.jpg';
import miscellaneousImage from '../path/image/services/miscellaneous.jpg';
import firestopImage from '../path/image/services/firestop.jpg';

import securityImage from '../path/image/services/security.jpg';
import itImage from '../path/image/services/itsolutions.jpg';
import autocadImage from '../path/image/services/autocad.jpg';

// Service data with imported images
const services = [
  { 
    name: 'Fire Fighting Systems', 
    image: fireImage, 
    description: 'Comprehensive sprinkler systems, hydrants, and extinguishers for complete fire safety compliance and protection.',
    features: ['Sprinkler Systems', 'Fire Hydrants', 'Extinguishers', 'Emergency Planning'],
    icon: '🔥'
  },
  { 
    name: 'Detection Systems', 
    image: detectionImage, 
    description: 'State-of-the-art addressable, conventional, and wireless fire detection systems with 24/7 monitoring capabilities.',
    features: ['Smoke Detectors', 'Heat Sensors', 'Gas Detection', 'Alarm Systems'],
    icon: '🔍'
  },
  { 
    name: 'Electrical Work', 
    image: electricalImage, 
    description: 'Professional industrial and commercial electrical installation, maintenance, and troubleshooting services.',
    features: ['Wiring Installation', 'Panel Upgrades', 'Safety Inspections', 'Maintenance'],
    icon: '⚡'
  },
  { 
    name: 'Plumbing Solutions', 
    image: plumbingImage, 
    description: 'Complete plumbing installations and repairs for residential, commercial, and industrial buildings.',
    features: ['Pipe Installation', 'Fixture Setup', 'Drainage Systems', 'Maintenance'],
    icon: '🔧'
  },
  {
    name: 'AMC (Annual Maintenance Contracts)',
    image: amcImage,
    description: 'Reliable and cost-effective maintenance plans to ensure your systems operate efficiently year-round.',
    features: ['Scheduled Maintenance', 'Priority Support', 'Compliance Checks', 'System Upgrades'],
    icon: '🛠️'
  },
  {
    name: 'Separation Systems',
    image: separationImage,
    description: 'Engineering solutions for safe separation of hazardous systems and utilities.',
    features: ['Smoke Curtains', 'Barrier Systems', 'Compartmentalization', 'Regulatory Compliance'],
    icon: '🧱'
  },
  {
    name: 'Miscellaneous Equipment',
    image: miscellaneousImage,
    description: 'A variety of supporting equipment tailored to specific site and project needs.',
    features: ['Control Panels', 'Valves & Fittings', 'Mounting Structures', 'Support Systems'],
    icon: '⚙️'
  },
  {
    name: 'Fire Stop Accessories',
    image: firestopImage,
    description: 'Certified fire stop materials to seal openings and joints in fire-resistant walls or floors.',
    features: ['Fire Sleeves', 'Sealants', 'Collars', 'Putty Pads'],
    icon: '🧯'
  },
 
  {
    name: 'Security Systems',
    image: securityImage,
    description: 'Advanced surveillance and security systems for comprehensive site protection.',
    features: ['CCTV', 'Access Control', 'Video Door Phones', 'Intrusion Detection'],
    icon: '🔒'
  },
  {
    name: 'IT Solutions',
    image: itImage,
    description: 'Smart technology infrastructure including networking and server management.',
    features: ['Network Cabling', 'Server Racks', 'Wi-Fi Solutions', 'System Integration'],
    icon: '💻'
  },
  {
    name: 'AutoCAD Services',
    image: autocadImage,
    description: 'Professional drafting and design documentation services for engineering and architectural needs.',
    features: ['2D Drafting', '3D Modeling', 'MEP Layouts', 'As-built Drawings'],
    icon: '📐'
  }
];

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [activeService, setActiveService] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const handleServiceClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };
  
  return (
    <section id="services" className="services-section">
      <div className="services-background">
        <div className="services-overlay"></div>
      </div>
      
      <div className="services-content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Our Expertise</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Comprehensive solutions tailored to your specific requirements
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="services-container"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`service-card ${activeService === index ? 'active' : ''}`}
              onClick={() => handleServiceClick(index)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' 
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="service-image" 
                />
                <div className="service-image-overlay"></div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
                <motion.div 
                  className="service-features"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeService === index ? 'auto' : 0,
                    opacity: activeService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: activeService === index ? 1 : 0,
                          x: activeService === index ? 0 : -10
                        }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <button className="service-button">
                  {activeService === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>
              
              <div className="card-shine"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="services-cta"
        >
          <h3>Need a customized solution?</h3>
          <p>Our team of experts is ready to help you with your specific requirements</p>
          <button className="cta-button">Contact Us Today</button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;