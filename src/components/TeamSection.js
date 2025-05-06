import React from 'react';
import '../styles/TeamSection.css';

import shashankImg from '../path/image/profile/shashanksaini-profile.png';
import anilImg from '../path/image/profile/anilsaini-profile.jpg';
import poonamImg from '../path/image/profile/poonamsainiplaceholder.jpg';
import saleemImg from '../path/image/profile/saleemaliplaceholder.jpg';


function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Shashank Saini",
      position: "CEO & Founder",
      bio: "With over 20 years of industry experience, Shashank leads our company with vision and expertise.",
      image: shashankImg,
      social: {
        linkedin: "https://linkedin.com/in/johnsmith",
        twitter: "https://twitter.com/johnsmith"
      }
    },
    {
      id: 2,
      name: "Anil Kumar Saini",
      position: "Chief Operations Officer",
      bio: "Anil Saini ensures our operations run smoothly and efficiently while maintaining our high quality standards.",
      image: anilImg,
      social: {
        linkedin: "https://linkedin.com/in/lisajohnson",
        twitter: "https://twitter.com/lisajohnson"
      }
    },
    {
      id: 3,
      name: "Poonam Saini",
      position: "Technical Director",
      bio: "Poonam Saini brings technical innovation and expertise to every project we undertake.",
      image: poonamImg,
      social: {
        linkedin: "https://linkedin.com/in/davidchen",
        twitter: "https://twitter.com/davidchen"
      }
    },
    {
      id: 4,
      name: "Saleem Ali",
      position: "Client Relations Manager",
      bio: "Saleem ensures our clients receive exceptional service throughout their journey with us.",
      image: saleemImg,
      social: {
        linkedin: "https://linkedin.com/in/mariarodriguez",
        twitter: "https://twitter.com/mariarodriguez"
      }
    }

    
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Leadership Team</h2>
          <p>Meet the experienced professionals who lead our company with expertise and passion.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-content">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
