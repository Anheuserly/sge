import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">SHREE GANESH ENTERPRISES</NavLink>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/projects" activeClassName="active">Projects</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
