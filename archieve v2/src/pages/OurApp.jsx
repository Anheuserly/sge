// src/pages/OurApp.jsx

import React from 'react';
import Header from '../components/Header';
import PrivacyPolicyServiceApp from "../components/PrivacyPolicyServiceApp";
import PrivacyPolicyPartnerApp from "../components/PrivacyPolicyPartnerApp";
import AppDownloadSection from '../components/AppDownloadSection';

function OurApp() {
  return (
    <div className="our-app-page">
      <Header />
      <AppDownloadSection />
      <PrivacyPolicyServiceApp />
      <PrivacyPolicyPartnerApp />
    </div>
  );
}

export default OurApp;
