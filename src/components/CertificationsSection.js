import React from 'react';
import '../styles/CertificationsSection.css';

function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/images/certifications/iso-9001.png",
      year: "Since 2015"
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      description: "Environmental Management System",
      image: "/images/certifications/iso-14001.png",
      year: "Since 2016"
    },
    {
      id: 3,
      name: "OHSAS 18001",
      description: "Occupational Health and Safety",
      image: "/images/certifications/ohsas-18001.png",
      year: "Since 2017"
    },
    {
      id: 4,
      name: "LEED Certification",
      description: "Leadership in Energy and Environmental Design",
      image: "/images/certifications/leed.png",
      year: "Since 2018"
    }
  ];

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
            <div key={cert.id} className="cert-card">
              <div className="cert-image">
                <img src={cert.image} alt={cert.name} />
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
    </section>
  );
}

export default CertificationsSection;
