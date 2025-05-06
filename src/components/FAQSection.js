import React, { useState } from 'react';
import '../styles/FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of services including project planning, design, implementation, and maintenance. Our team specializes in delivering high-quality solutions tailored to meet your specific needs and requirements."
    },
    {
      id: 2,
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary depending on scope, complexity, and specific requirements. A small project might take 2-4 weeks, while larger projects can span several months. During our initial consultation, we'll provide you with a detailed timeline based on your project specifications."
    },
    {
      id: 3,
      question: "Do you provide warranties for your work?",
      answer: "Yes, we stand behind the quality of our work. All our projects come with a standard warranty period, and we offer extended warranty options for additional peace of mind. Our warranty covers workmanship and materials, ensuring your investment is protected."
    },
    {
      id: 4,
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and based on the scope of work, materials required, and project timeline. We provide detailed quotes after an initial consultation to understand your specific needs. We're committed to delivering excellent value while maintaining the highest quality standards."
    },
    {
      id: 5,
      question: "How do you ensure quality control?",
      answer: "Quality control is integrated into every phase of our process. We follow industry best practices, employ skilled professionals, use premium materials, and conduct regular inspections throughout the project. Our multi-stage quality assurance process ensures that the final result meets or exceeds your expectations."
    },
    {
      id: 6,
      question: "Can you work with specific budgets?",
      answer: "Absolutely. We understand budget constraints and work closely with our clients to develop solutions that align with their financial parameters while still achieving their goals. We offer various options and alternatives to help maximize value within your budget."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services, process, and more.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`icon ${activeIndex === index ? 'rotate' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
