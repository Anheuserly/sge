import React from 'react';
import Header from '../components/Header';


// Import architecture-specific section components
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';


function Home() {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default Home;