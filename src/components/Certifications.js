import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Certifications.css";

// Sample certification data - replace with your actual certifications
const certifications = [
  {
    id: 1,
    title: "Ethical Hacking Essentials",
    certificateId: "RTA-EHE-2024-001",
    description: "Comprehensive training in ethical hacking methodologies, penetration testing, and cybersecurity fundamentals.",
    completionDate: "November 2024",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "RedTeam Hacker Academy"
  },
  {
    id: 2,
    title: "Full Stack Web Development",
    certificateId: "FSD-2024-002",
    description: "Complete web development certification covering frontend and backend technologies including React, Node.js, and databases.",
    completionDate: "October 2024",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "Tech Academy"
  },
  {
    id: 3,
    title: "Python Programming",
    certificateId: "PY-ADV-2024-003",
    description: "Advanced Python programming certification covering data structures, algorithms, and application development.",
    completionDate: "September 2024",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "Python Institute"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    certificateId: "UX-FUND-2024-004",
    description: "User experience and interface design principles, wireframing, prototyping, and design thinking methodologies.",
    completionDate: "August 2024",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "Design Academy"
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    certificateId: "CS-FUND-2024-005",
    description: "Foundation course in cybersecurity covering network security, threat analysis, and security best practices.",
    completionDate: "July 2024",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "Cyber Security Institute"
  },
  {
    id: 6,
    title: "Database Management",
    certificateId: "DB-ADV-2024-006",
    description: "Advanced database management covering SQL, NoSQL, database design, optimization, and administration.",
    completionDate: "June 2024",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
    issuer: "Database Academy"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <Container>
        {/* Section Header */}
        <div className="certifications-header">
          <h2 className="certifications-title">
            My <span className="text-accent">Certifications</span>
          </h2>
          <p className="certifications-subtitle">
            Professional credentials and achievements
          </p>
          <div className="decorative-line"></div>
        </div>

        {/* Certifications Grid */}
        <Row className="certifications-grid">
          {certifications.map((cert, index) => (
            <Col key={cert.id} xs={12} md={6} lg={4} className="certification-col">
              <div 
                className="certification-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="cert-image-container">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                    loading="lazy"
                  />
                  <div className="cert-overlay">
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="cert-details">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-id">{cert.certificateId}</p>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-footer">
                    <span className="cert-date">{cert.completionDate}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* View All Button */}
        <div className="certifications-footer">
          <button className="view-all-btn">
            View All Certifications
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </Container>
    </section>
  );
};