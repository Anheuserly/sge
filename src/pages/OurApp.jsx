// src/pages/OurApp.jsx

import React from 'react';
import Header from '../components/Header';


import AppDownloadSection from '../components/AppDownloadSection';

function OurApp() {
  return (
    <div className="our-app-page">
      <Header />
      <AppDownloadSection />
    </div>
  );
}

export default OurApp;
