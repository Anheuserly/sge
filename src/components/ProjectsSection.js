import React from 'react';
import '../styles/ProjectsSection.css';

const projects = [
  { 
    title: 'Fire Hydrant Installation – Commercial Tower', 
    image: '/images/project1.jpg',
    description: 'Complete fire hydrant and sprinkler system installation for a high-rise commercial building in New Delhi.'
  },
  { 
    title: 'Industrial Electrical Wiring – Manufacturing Plant', 
    image: '/images/project2.jpg',
    description: 'Full electrical wiring and panel setup for a large-scale manufacturing unit in Okhla Industrial Area.'
  },
  { 
    title: 'Smoke Detection System – Hotel & Resort', 
    image: '/images/project3.jpg',
    description: 'Advanced smoke and heat detection system installed at a 5-star hotel for enhanced fire safety.'
  },
  { 
    title: 'Plumbing Pipeline Setup – Luxury Apartments', 
    image: '/images/project4.jpg',
    description: 'Installation of high-quality plumbing and drainage systems for a premium residential complex.'
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Our Recent Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
