import React, { useState } from 'react';
import '../styles/NewsletterSection.css';

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setSubscribed(true);
    setError('');
    setEmail('');

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive the latest news, updates, and industry insights.
          </p>

          <div className="newsletter-box">
            {subscribed ? (
              <div className="success-message">
                <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Thank you for subscribing to our newsletter!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="newsletter-form">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                    {error && <p className="error-text">{error}</p>}
                  </div>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            )}
            <p className="privacy-text">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
