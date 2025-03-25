import React from 'react';
import '../styles/Footer.css'; // Ensure you have styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
