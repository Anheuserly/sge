import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import CertificationsSection from '../components/CertificationsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about-page">
      <Header />
      <AboutSection />
      <TeamSection />
      <CertificationsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
     
    </div>
  );
}

export default About;
