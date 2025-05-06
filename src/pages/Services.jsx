import React from 'react';
import Header from '../components/Header';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import CertificationsSection from '../components/CertificationsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

function Services() {
  return (
    <div className="services-page">
      <Header />
      <ServicesSection />
      <WhyChooseUsSection />
      <CertificationsSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToActionSection />

    </div>
  );
}

export default Services;
