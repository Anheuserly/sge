import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-underline"></div>
          <p className="contact-description">
            Have questions or want to work with us? Reach out and we'll get back to you as soon as possible.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="method-details">
                <h3>Our Location</h3>
                <p>
                  House No. 435, Second Floor, Left Side, Khasra No. 60, 128-D21, <br />
                  Chattarpur Pahadi, New Delhi - 110074
                </p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="method-details">
                <h3>Phone Number</h3>
                <p><a href="tel:+919871936847">+91 9871936847</a></p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="method-details">
                <h3>Email Address</h3>
                <p><a href="mailto:info@sge.org.in">info@sge.org.in</a></p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="yourname@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help you?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
