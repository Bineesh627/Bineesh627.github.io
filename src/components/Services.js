import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { servicesData } from '../data/servicesData';
import '../assets/css/Services.css';

export const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="services-os tilt-perspective" id="services">
      {/* Ambient glows */}
      <div className="services-os-glow top-left blur-3xl"></div>
      <div className="services-os-glow bottom-right blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            My <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="os-section-subtitle">Tactical engineering & high-performance solutions</p>
          <div className="os-separator"></div>
        </div>

        <Row className="g-4">
          {servicesData.map((element) => {
            const IconComponent = element.icon;
            const getCardThemeClass = (id) => {
              if (id === 1) return 'theme-blue';
              if (id === 2) return 'theme-purple';
              if (id === 3) return 'theme-orange';
              return 'theme-green';
            };

            return (
              <Col key={element.id} xs={12} md={6}>
                <div 
                  className={`services-os-card glass-panel ${getCardThemeClass(element.id)}`}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Top Header Row */}
                  <div className="services-os-card-header">
                    <div className="services-os-icon-box">
                      <IconComponent size={22} />
                    </div>
                    <span className="services-os-status">{element.status}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="services-os-title font-display text-gradient-green">
                    {element.title}
                  </h3>
                  <p className="services-os-desc">
                    {element.description}
                  </p>

                  {/* Features List */}
                  <ul className="services-os-features-list">
                    {element.features.map((feature, idx) => (
                      <li key={idx} className="services-os-feature-item">
                        <span className="services-os-feature-bullet">{"//"}</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
