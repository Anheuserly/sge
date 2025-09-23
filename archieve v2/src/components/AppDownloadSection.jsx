// src/components/AppDownloadSection.jsx

import React from 'react';
import '../styles/AppDownloadSection.css'; // Optional if you want custom styling


const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      <h1>Download Our Android Apps</h1>
      <p>Select the app you want to download or install:</p>

      {/* MEP_AMC_247 App */}
      <div className="app-card">
        <h2>MEP AMC 24/7</h2>
        <p>For clients and service users to manage maintenance and service requests.</p>
        <div className="button-group">
          <a
            href="https://play.google.com/store/apps/details?id=com.mepsge.amcsge"
            target="_blank"
            rel="noopener noreferrer"
            className="playstore-btn"
          >
            View on Play Store
          </a>
          <a
            href="https://www.mediafire.com/file/1du2oq4f57qr4ie/MEP_AMC_247.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            className="apk-btn"
          >
            Download APK
          </a>
        </div>
      </div>

      {/* SGE Partner App */}
      <div className="app-card">
        <h2>SGE Partner (AMC)</h2>
        <p>For technicians and service providers to receive job requests and update statuses.</p>
        <div className="button-group">
          <a
            href="https://play.google.com/store/apps/details?id=com.mepsge.amcsgepartner.amcsgepartner"
            target="_blank"
            rel="noopener noreferrer"
            className="playstore-btn"
          >
            View on Play Store
          </a>
          <a
            href="https://www.mediafire.com/file/mma3xkf1l20vbb4/amcsgepartner.apk/file"
            target="_blank"
            rel="noopener noreferrer"
            className="apk-btn"
          >
            Download APK
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
