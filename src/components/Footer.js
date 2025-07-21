import React from 'react';
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section company-info">
              <div className="footer-logo">
                
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