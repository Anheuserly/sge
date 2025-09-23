import React from 'react';
import '../styles/TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Working with this team was a game-changer for our business. Their attention to detail and commitment to excellence exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechInnovate",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      quote: "The level of professionalism and expertise demonstrated throughout our project was outstanding. I wouldn't hesitate to recommend their services.",
      author: "Michael Chen",
      position: "Director, BuildRight Construction",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      quote: "From concept to completion, they guided us through every step with clarity and confidence. The results speak for themselves.",
      author: "Emily Rodriguez",
      position: "Operations Manager, GreenSpaces",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="star" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author-info">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div>
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
