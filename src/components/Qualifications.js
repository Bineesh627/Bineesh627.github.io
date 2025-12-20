import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Qualifications.css';

const qualificationsData = [
  {
    id: '1',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science',
    institution: 'IHRD College of Applied Science, Karthikappally',
    description:
      'Currently pursuing a BCA degree, specializing in computer applications, software development, and information technology principles.',
    graduation_date: '2025-05-25',
    score: '3.8/4.0',
    highlights: [],
  },
  {
    id: '2',
    degree: 'HSC Biology Science',
    field: 'Higher Secondary School Certificate',
    institution: 'G.H.S.S Mangalam School, Aratupuzha',
    description: 'Completed higher secondary education with a focus on biology science, gaining in-depth knowledge of biological concepts alongside foundational sciences.',
    graduation_date: 'July 2022',
    score: '73%',
    highlights: [],
  },
  {
    id: '3',
    degree: 'SSLC Examination',
    field: 'Secondary School Certificate',
    institution: 'St. Thomas Higher Secondary School, Karthikapally',
    description: 'Successfully completed secondary education, laying a strong foundation in core academic subjects and developing essential skills.',
    graduation_date: 'March 2020',
    score: '87%',
    highlights: [],
  },
];

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
          <h2 className="section-title">Qualifications</h2>
          
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
