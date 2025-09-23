import React, { useState } from 'react';
import '../styles/CertificationsSection.css';

// Image imports
import iso9001 from '../path/certifications/ISO.jpg';
import gst from '../path/certifications/gst.png';
import ministryFinance from '../path/certifications/ministry-finance.png';
import departmentRevenue from '../path/certifications/department-revenue.jpg';
import haryanaTax from '../path/certifications/haryana-tax.png';
import esi from '../path/certifications/esi.png';
import pf from '../path/certifications/pf.png';
import nsic from '../path/certifications/nsic.png';
import msme from '../path/certifications/msme.png';
import commercialTaxes from '../path/certifications/commercial-taxes.png';
import exciseTaxation from '../path/certifications/excise-taxation.jpg';
import cpwd from '../path/certifications/cpdw.png';

function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: iso9001,
      year: "Since 2015",
      details: "Our ISO 9001 certification demonstrates our commitment to quality management systems and continuous improvement processes."
    },
    {
      id: 2,
      name: "GST Certificate",
      description: "Goods and Services Tax Registration",
      image: gst,
      year: "Since 2017",
      details: "Registered under the GST Act for nationwide tax compliance."
    },
    {
      id: 3,
      name: "Ministry of Finance",
      description: "Registered under the Ministry of Finance",
      image: ministryFinance,
      year: "Since 2016",
      details: "Registered and compliant with government financial standards."
    },
    {
      id: 4,
      name: "Department of Revenue",
      description: "Official Revenue Compliance",
      image: departmentRevenue,
      year: "Since 2017",
      details: "Compliant with all national revenue department norms."
    },
    {
      id: 5,
      name: "Haryana Tax",
      description: "State-level Tax Compliance",
      image: haryanaTax,
      year: "Since 2018",
      details: "Registered under Haryana State Tax Authorities."
    },
    {
      id: 6,
      name: "ESI",
      description: "Employee State Insurance",
      image: esi,
      year: "Since 2019",
      details: "Provides social security to employees as per ESI scheme."
    },
    {
      id: 7,
      name: "PF",
      description: "Provident Fund",
      image: pf,
      year: "Since 2019",
      details: "Registered for employee retirement benefits under PF Act."
    },
    {
      id: 8,
      name: "NSIC",
      description: "National Small Industries Corporation",
      image: nsic,
      year: "Since 2020",
      details: "Certified by NSIC for participation in government procurement."
    },
    {
      id: 9,
      name: "MSME",
      description: "Micro, Small and Medium Enterprises",
      image: msme,
      year: "Since 2020",
      details: "Certified and recognized as an MSME by Government of India."
    },
    {
      id: 10,
      name: "Department of Commercial Taxes",
      description: "Commercial Tax Department",
      image: commercialTaxes,
      year: "Since 2021",
      details: "Tax compliant and registered with commercial tax department."
    },
    {
      id: 11,
      name: "Excise and Taxation Department",
      description: "Excise Registration",
      image: exciseTaxation,
      year: "Since 2021",
      details: "Compliant under excise and related taxation laws."
    },
    {
      id: 12,
      name: "CPWD",
      description: "Central Public Works Department",
      image: cpwd,
      year: "Since 2022",
      details: "Approved contractor under CPWD government projects."
    }
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    const currentIndex = certifications.findIndex(c => c.id === selectedCert.id);
    const prevIndex = (currentIndex - 1 + certifications.length) % certifications.length;
    setSelectedCert(certifications[prevIndex]);
  };

  const goToNext = () => {
    const currentIndex = certifications.findIndex(c => c.id === selectedCert.id);
    const nextIndex = (currentIndex + 1) % certifications.length;
    setSelectedCert(certifications[nextIndex]);
  };

  return (
    <section className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Certifications</h2>
          <p>
            We maintain the highest industry standards through rigorous certification processes and continuous improvement.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map(cert => (
            <div 
              key={cert.id} 
              className="cert-card"
              onClick={() => openModal(cert)}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.name} className="cert-image" />
                <div className="cert-overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="36px" height="36px">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                    <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
              </div>
              <h3>{cert.name}</h3>
              <p className="desc">{cert.description}</p>
              <p className="year">{cert.year}</p>
            </div>
          ))}
        </div>

        <div className="footer-note">
          <p>
            Our commitment to excellence is backed by industry-recognized certifications that ensure we deliver the highest quality services.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && selectedCert && (
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>
            
            <div className="cert-modal-image-container">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name} 
                className="cert-modal-image" 
              />
              
              <button className="modal-nav prev" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                </svg>
              </button>
              
              <button className="modal-nav next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                  <path d="m504-480-184-184 56-56 240 240-240 240-56-56 184-184Z"/>
                </svg>
              </button>
            </div>
            
            <div className="cert-modal-details">
              <h3>{selectedCert.name}</h3>
              <p className="cert-modal-desc">{selectedCert.description}</p>
              <p className="cert-modal-year">{selectedCert.year}</p>
              <p className="cert-modal-details">{selectedCert.details}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificationsSection;
