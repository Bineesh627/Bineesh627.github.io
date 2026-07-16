import React from 'react';
import { Calendar, Landmark, Database, FileText } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Qualifications.css';
import { qualificationsData } from '../data/qualificationsData';

export const Qualifications = () => {
  const formatDate = (dateString) => {
    const parsed = Date.parse(dateString);
    if (isNaN(parsed)) {
      return dateString;
    }
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

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
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="qualifications-os" id="qualifications">
      {/* Ambient glows */}
      <div className="qual-os-glow top-left blur-3xl"></div>
      <div className="qual-os-glow bottom-right blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Academic <span className="text-gradient-blue">Qualifications</span>
          </h2>
          <p className="os-section-subtitle">My educational background and academic records</p>
          <div className="os-separator"></div>
        </div>
        
        <Row className="g-4">
          {qualificationsData.map((qual) => (
            <Col key={qual.id} md={12}>
              <div 
                className="qual-os-card glass-panel spotlight-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Header row with document layout */}
                <div className="qual-header-row d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                  <div className="d-flex align-items-start gap-3">
                    <div className="qual-os-icon-box">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="qual-os-degree font-display text-gradient-blue">{qual.degree}</h3>
                      <p className="qual-os-field font-mono"><Database size={12} className="me-1 text-secondary" /> {qual.field}</p>
                    </div>
                  </div>

                  <div className="qual-os-date font-mono">
                    <Calendar size={12} className="me-2 text-primary" />
                    <span>{formatDate(qual.graduation_date)}</span>
                  </div>
                </div>

                {/* Content details */}
                <div className="qual-os-content mt-4">
                  <p className="qual-os-institution font-display">
                    <Landmark size={14} className="me-2 text-secondary" />
                    {qual.institution}
                  </p>
                  
                  {qual.description && (
                    <p className="qual-os-description">
                      {qual.description}
                    </p>
                  )}
                </div>

                {qual.score && (
                  <div className="qual-os-score font-mono mt-3 pt-3 border-top border-secondary border-opacity-25">
                    <span className="qual-score-label">GPA_INDEX:</span>
                    <span className="qual-score-value text-gradient-green ms-2">{qual.score}</span>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Qualifications;

