// src/components/DocumentsSection.js
import React, { useState } from 'react';
import DocumentItem from './DocumentItem';
import DocumentModal from './DocumentModal';
import '../styles/DocumentsSection.css';

// Import document thumbnails (you'll need to create these)
import gstThumb from '../path/documents/gst-thumb.jpg';
import profileThumb from '../path/documents/profile-thumb.jpg';
import msmeThumb from '../path/documents/msme-thumb.jpg';
import esiThumb from '../path/documents/esi-thumb.jpg';
import pfThumb from '../path/documents/pf-thumb.jpg';

// Import actual PDF files
import gstCertificate from '../path/documents/gst-certificate.pdf';
import companyProfile from '../path/documents/company-profile.pdf';
import msme from '../path/documents/msme.pdf';
import esi from '../path/documents/esi.pdf';
import pf from '../path/documents/pf.pdf';

const documents = [
  { 
    id: 1,
    title: 'GST Certificate', 
    file: gstCertificate,
    thumbnail: gstThumb,
    description: 'Our Goods and Services Tax registration certificate'
  },
  { 
    id: 2,
    title: 'Company Profile', 
    file: companyProfile,
    thumbnail: profileThumb,
    description: 'Detailed information about our company'
  },
  { 
    id: 3,
    title: 'MSME Certificate', 
    file: msme,
    thumbnail: msmeThumb,
    description: 'Micro, Small & Medium Enterprises registration'
  },
  { 
    id: 4,
    title: 'ESI Registration', 
    file: esi,
    thumbnail: esiThumb,
    description: 'Employee State Insurance registration'
  },
  { 
    id: 5,
    title: 'PF Registration', 
    file: pf,
    thumbnail: pfThumb,
    description: 'Provident Fund registration certificate'
  },
];

const DocumentsSection = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doc) => {
    setSelectedDocument(doc);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <div className="documents-section">
      <h1 className="documents-title">Our Legal Documents & Certificates</h1>
      <p className="documents-subtitle">Click on any document to view details</p>
      
      <div className="documents-grid">
        {documents.map((doc) => (
          <DocumentItem 
            key={doc.id} 
            document={doc} 
            onClick={() => openModal(doc)}
          />
        ))}
      </div>
      
      {isModalOpen && (
        <DocumentModal 
          document={selectedDocument} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default DocumentsSection;