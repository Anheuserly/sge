import React from 'react';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import CallToActionSection from '../components/CallToActionSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';
import StatsSection from '../components/StatsSection';
// import MapSection from '../components/MapSection'; // Uncomment if you have this
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <ContactSection />
      <StatsSection />
      <FAQSection />
      <CallToActionSection />
      <NewsletterSection />
      {/* <MapSection /> */}
     
    </div>
  );
}

export default Contact;
