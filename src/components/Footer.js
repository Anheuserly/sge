// src/components/Footer.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Initialize Google Map
    const initMap = () => {
      if (!window.google || !mapRef.current) return;
      
      const location = { lat: 28.5068707, lng: 77.1847125 };
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
        styles: [
          {
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "administrative.neighborhood",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "transit",
            "stylers": [{ "visibility": "off" }]
          },
          {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [{ "visibility": "off" }]
          }
        ]
      });
      
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Shree Ganesh Enterprises',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
        }
      });
    };

    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDekrfM6CqqemhBIpryk9PBTp4avVVmiHY&callback=initFooterMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      window.initFooterMap = initMap;
    } else {
      initMap();
    }
    
    return () => {
      if (window.initFooterMap) {
        delete window.initFooterMap;
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="newsletter-section">
            <h3>Stay Updated with Our Latest Projects</h3>
            <p>Subscribe to our newsletter for industry insights and company updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section company-info">
              <div className="footer-logo">
                <div className="logo-placeholder">
                  <span>SGE</span>
                </div>
                <div className="logo-text">
                  <h3>SHREE GANESH</h3>
                  <p>ENTERPRISES</p>
                </div>
              </div>
              <p className="footer-description">
                Professional MEP & Fire Safety Services delivering excellence in mechanical, electrical, 
                and plumbing systems since 1997. Trusted by leading businesses across the country.
              </p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/shree-ganesh-enterprises-1385b5271" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091506081596" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com/_sgemep/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://youtube.com/@sgemep?si=UIj49pqei7FAskoG" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            <div className="footer-section services">
              <h4>Our Services</h4>
              <ul className="services-list">
                <li><Link to="/services/electrical">Electrical Systems</Link></li>
                <li><Link to="/services/firefighting">Fire Fighting Systems</Link></li>
                <li><Link to="/services/plumbing">Plumbing & Drainage</Link></li>
                <li><Link to="/services/supperation">Supperation System</Link></li>
                <li><Link to="/services/fire-alarm">Fire Alarm Systems</Link></li>
                <li><Link to="/services/maintenance">Maintenance Services</Link></li>
              </ul>
            </div>

            <div className="footer-section quick-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/projects">Completed Projects</Link></li>
                <li><Link to="/certifications">Certifications</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Technical Blog</Link></li>
                <li><Link to="/safety">Safety Standards</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>

            <div className="footer-section contact">
              <h4>Contact Us</h4>
              <div className="contact-container">
                <div className="contact-info">
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>House No. 535, Second Floor, Left Side, Khasra No. 60, 128- D21, Chattarpur Pahadi, New Delhi - 110074</p>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} />
                    <p><a href="tel:+919871936847">+91 9871936847</a></p>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p><a href="mailto:info@sge.org.in">info@sge.org.in</a></p>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faClock} />
                    <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                  <Link to="/contact" className="emergency-contact">
                    24/7 Emergency Service
                  </Link>
                </div>
                
                <div className="map-container">
                  <div ref={mapRef} className="google-map"></div>
                  <a 
                    href="https://www.google.com/maps/place/Shree+Ganesh+Enterprises/@28.5068753,77.1800991,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1f768fdfa54b:0xd41288173e5dfa86!8m2!3d28.5068707!4d77.1847125!16s%2Fg%2F11lnqngb0y?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="map-link"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} SHREE GANESH ENTERPRISES. All rights reserved.
              </p>
            </div>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="divider">|</span>
              <Link to="/sitemap">Sitemap</Link>
            </div>
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;