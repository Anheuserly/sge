import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Get In Touch</h2>
      <p>Need a consultation? Reach out to us for top-notch fire safety and installation services.</p>
      <a href="mailto:info@sge.org.in" className="contact-btn">Contact Us</a>
    </section>
  );
};

export default ContactSection;
