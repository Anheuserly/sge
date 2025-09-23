import React from 'react';
import Header from '../components/Header';
// Core Sections
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
// Additional Sections
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import StatsSection from '../components/StatsSection';
import TeamSection from '../components/TeamSection';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';
import CareersSection from '../components/CareersSection';
import NewsletterSection from '../components/NewsletterSection';
// import BlogSection from '../components/BlogSection'; // Optional
// import BrochureSection from '../components/BrochureSection'; // Optional
// import ProjectMapSection from '../components/ProjectMapSection'; // Optional

function Home() {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ContactSection />
      
    </div>
  );
}

export default Home;