import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Qualifications.css';
import { qualificationsData } from '../data/qualificationsData';

export const Qualifications = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <section className="qualifications-section" id="qualifications">
      {/* Background ambient glows */}
      <div className="qual-bg-glow top-left"></div>
      <div className="qual-bg-glow bottom-right"></div>

      <Container>
          <h2 className="section-title">
            My <span className="text-primary">Qualifications</span>
          </h2>
          
          <Row className="g-4">
            {qualificationsData.map((qual) => (
              <Col key={qual.id} md={12}>
                <div className="qual-card">
                  <div className="d-flex align-items-start mb-3">
                    <div className="qual-icon-box">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="qual-degree">{qual.degree}</h3>
                      <p className="qual-field">{qual.field}</p>
                    </div>
                  </div>

                  <p className="qual-institution">
                    <BookOpen size={16} />
                    {qual.institution}
                  </p>

                  {qual.description && (
                    <p className="qual-description">
                      {qual.description}
                    </p>
                  )}

                  <div className="qual-info-grid row">
                    <div className="col-12 col-md-4 mb-3">
                      <p className="qual-label">Graduation Date</p>
                      <p className="qual-value">
                        {formatDate(qual.graduation_date)}
                      </p>
                    </div>

                    {qual.score && (
                      <div className="col-6 col-md-4 mb-3">
                        <p className="qual-label">
                          {qual.score.includes('%') ? 'Percentage' : 'CGPA'}
                        </p>
                        <p className="qual-value">{qual.score}</p>
                      </div>
                    )}

                    {qual.highlights && qual.highlights.length > 0 && (
                      <div className="col-12 col-md-4">
                        <p className="qual-label">Highlights</p>
                        <div className="mt-1">
                          {qual.highlights.map((highlight, idx) => (
                            <div key={idx} className="qual-highlight-item">
                              <Award size={14} />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
      </Container>
    </section>
  );
};
