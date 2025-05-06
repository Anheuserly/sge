import React from 'react';
import '../styles/WhyChooseUsSection.css';

const features = [
  {
    title: "Experienced Team",
    description:
      "Our team brings decades of combined experience to every project, ensuring expert execution from start to finish.",
    iconPath:
      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand the importance of timelines and consistently deliver projects on schedule without compromising quality.",
    iconPath:
      "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Innovative Solutions",
    description:
      "We stay at the forefront of industry developments to provide cutting-edge solutions tailored to your needs.",
    iconPath:
      "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We place our clients at the center of everything we do, ensuring your vision and requirements are prioritized.",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Quality Assurance",
    description:
      "Our rigorous quality control processes ensure that every deliverable meets the highest standards of excellence.",
    iconPath:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622z",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="why-choose-section">
      <div className="why-container">
        <div className="why-header">
          <h2>Why Choose Us</h2>
          <p>
            We pride ourselves on delivering exceptional quality and service that sets us apart from the competition.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path d={feature.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
