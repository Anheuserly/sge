import React from 'react';
import '../styles/CallToActionSection.css'; // External CSS file

function CallToActionSection() {
  return (
    <section className="call-to-action-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's work together to bring your vision to life. Our team is ready to deliver exceptional results that exceed your expectations.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="/quote" className="btn-outline">Request a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
