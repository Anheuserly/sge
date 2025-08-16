import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import '../styles/Header.css';
import logo from '../path/image/logo/Logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  // Sticky header on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, dropdownOpen]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Services submenu items
  const servicesSubmenu = [
    { title: 'Electrical Services', path: '/services/electrical' },
    { title: 'Plumbing Services', path: '/services/plumbing' },
    { title: 'Construction', path: '/services/construction' },
    { title: 'Renovation', path: '/services/renovation' },
  ];

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@sge.org.in">info@sge.org.in</a>
            </div>
          </div>
          
          <div className="top-bar-center">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:+919871936847">+91 9871936847</a>
            </div>
          </div>
          
          <div className="top-bar-right">
            <div className="contact-item address-item">
              <FaMapMarkerAlt className="contact-icon" />
              <address>House No. 535, Second Floor, Left Side, Khasra No. 60, 128-D21, Chattarpur Pahadi, New Delhi - 110074</address>
            </div>
            
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`main-header ${scrolled ? 'compact' : ''}`}>
        <div className="container main-header-container">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/" title="Shree Ganesh Enterprises">
              <img src={logo} alt="Shree Ganesh Enterprises Logo" className="logo-img" />
              <div className="logo-text-container">
                <span className="logo-text">SHREE GANESH</span>
                <span className="logo-subtext">ENTERPRISES</span>
              </div>
            </NavLink>
          </div>

          {/* Navigation */}
          <nav
            className={`nav-links ${menuOpen ? 'open' : ''}`}
            ref={navRef}
            aria-label="Main navigation"
          >
            <div className="mobile-nav-header">
              <div className="mobile-logo">
                <img src={logo} alt="Shree Ganesh Enterprises Logo" />
              </div>
              <button
                className="close-menu"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <NavLink to="/" onClick={() => setMenuOpen(false)} end>
              Home
            </NavLink>

            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
             Services
            </NavLink>

            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/documents" onClick={() => setMenuOpen(false)}>
            Documents</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/career" onClick={() => setMenuOpen(false)}>
              Career
            </NavLink>

            <div className="nav-cta">
              <a href="/quote" className="cta-button">Get a Quote</a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="header-right">
            <a href="/quote" className="desktop-cta cta-button">
              Get a Quote
            </a>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
    </header>
  );
};

export default Header;