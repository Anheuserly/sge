import React from 'react';
import '../styles/CareersSection.css'; // Import the CSS file

function CareersSection() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Project Manager",
      department: "Operations",
      location: "Delhi NCR, IN",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Technical Specialist",
      department: "Engineering",
      location: "Delhi NCR, IN",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Client Relations Coordinator",
      department: "Customer Service",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Delhi NCR, IN",
      type: "Part-time"
    }
  ];

  return (
    <section className="careers-section">
      <div className="container">
        <div className="section-header">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for talented individuals to join our growing team.
            Explore our current openings and become part of our success story.
          </p>
        </div>

        <div className="positions-wrapper">
          {openPositions.map(position => (
            <div key={position.id} className="job-card">
              <div className="job-info">
                <h3>{position.title}</h3>
                <div className="tags">
                  <span>{position.department}</span>
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
              </div>
              <a href={`/careers/${position.id}`} className="apply-btn">
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <div className="general-application">
          <p>
            Don't see a position that matches your skills? We're always interested in hearing from talented professionals.
          </p>
          <a href="/careers/general-application" className="submit-btn">
            Submit General Application
          </a>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;
