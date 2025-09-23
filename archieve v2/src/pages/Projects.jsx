import React from 'react';
import Header from '../components/Header';
import ProjectsSection from '../components/ProjectsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CertificationsSection from '../components/CertificationsSection';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <FAQSection />
      <CallToActionSection />
      
    </div>
  );
}

export default Projects;
