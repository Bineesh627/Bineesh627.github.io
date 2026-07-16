import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { faqData } from '../data/faqData';
import { ChevronDown } from 'lucide-react';
import '../assets/css/FAQ.css';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="faq-os" id="faq">
      {/* Ambient glows */}
      <div className="faq-os-glow top-left blur-3xl"></div>
      <div className="faq-os-glow bottom-right blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            System <span className="text-gradient-blue">FAQs</span>
          </h2>
          <p className="os-section-subtitle">Resolving standard contract parameters & objections</p>
          <div className="os-separator"></div>
        </div>

        <div className="faq-os-container">
          {faqData.map((element) => {
            const isActive = activeIndex === element.id;
            return (
              <div 
                key={element.id} 
                className={`faq-os-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="faq-os-trigger"
                  onClick={() => toggleAccordion(element.id)}
                  aria-expanded={isActive}
                >
                  <div className="faq-os-question-wrapper">
                    <span className="faq-os-category">{element.category}</span>
                    <span className="faq-os-question">{element.question}</span>
                  </div>
                  <ChevronDown size={16} className="faq-os-icon" />
                </button>

                <div 
                  className="faq-os-collapse"
                  style={{
                    maxHeight: isActive ? '300px' : '0'
                  }}
                >
                  <div className="faq-os-body">
                    {element.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
