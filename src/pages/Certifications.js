import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/Certifications.css";
import EEHCertificate from "../assets/img/certifications/EEH_Certificate.jpg";
import OutskillCertificate from "../assets/img/certifications/Outskill_Certificate.jpg";
import InterCertificate from "../assets/img/certifications/Internship_Certificate.jpg";
import InternetSecurity from "../assets/img/certifications/Internet_Security.jpg";
import IntroductionCloudComputing from "../assets/img/certifications/Introduction_Cloud_Computing.jpg";
import IntroductionMachineLearning from "../assets/img/certifications/Introduction_Machine_Learning.jpg";
import IntroductionUiUx from "../assets/img/certifications/Introduction_UI-UX.png";

const certifications = [
  {
    id: 1,
    title: "Generative AI Mastermind",
    certificateId: "",
    description:
      "Advanced program focused on generative AI concepts, prompt engineering, and real-world applications.",
    completionDate: "September 2025",
    image: OutskillCertificate,
    issuer: "Outskill",
  },
  {
    id: 2,
    title: "Ethical Hacking Essentials",
    certificateId: "RTXSTU1318012510",
    description:
      "Core training in penetration testing, system vulnerabilities, and defensive cybersecurity techniques.",
    completionDate: "October 2024",
    image: EEHCertificate,
    issuer: "RedTeam Hacker Academy",
  },
  {
    id: 3,
    title: "Cyber Security Internship",
    certificateId: "",
    description:
      "Hands-on experience in cybersecurity projects covering threat analysis, testing, and security operations.",
    completionDate: "November 2024",
    image: InterCertificate,
    issuer: "RedTeam Hacker Academy",
  },
  {
    id: 4,
    title: "Internet and Security",
    certificateId: "EDPT1681140384408L",
    description:
      "Foundation course on online safety, data protection, and secure internet practices.",
    completionDate: "April 2023",
    image: InternetSecurity,
    issuer: "Edapt",
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    certificateId: "EDPT1680971415613F",
    description:
      "Beginner-level training on cloud platforms, services, and deployment models.",
    completionDate: "April 2023",
    image: IntroductionCloudComputing,
    issuer: "Edapt",
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    certificateId: "EDPT1682006280907N",
    description:
      "Introductory course covering supervised and unsupervised learning, algorithms, and applications.",
    completionDate: "April 2023",
    image: IntroductionMachineLearning,
    issuer: "Edapt",
  },
  {
    id: 7,
    title: "Introduction to UI/UX Design",
    certificateId: "",
    description:
      "Creative course on design principles, user experience fundamentals, and interface prototyping.",
    completionDate: "September 2024",
    image: IntroductionUiUx,
    issuer: "Faith Academy",
  },
];

export const Certifications = () => {
  return (
    <div className="starry-background">
      <div className="text-white min-vh-100" style={{ position: "relative", zIndex: 2 }}>
        <section className="certifications-section">
        <Container>
          <div className="certifications-header">
            <h2 className="certifications-title">
              My <span className="text-accent">Certifications</span>
            </h2>
            <p className="certifications-subtitle">
              Professional credentials and achievements
            </p>
            <div className="decorative-line"></div>
          </div>

          {/* Use Bootstrap gutters for spacing */}
          <Row className="g-4 certifications-grid">
            {certifications.map((cert, index) => (
              <Col key={cert.id} xs={12} md={6} lg={4} className="certification-col">
                <div
                  className="certification-card h-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="cert-image-container">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cert-overlay">
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="cert-details">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-id">ID: {cert.certificateId}</p>
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-footer">
                      <span className="cert-date">Completed: {cert.completionDate}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        </section>
      </div>
      
      <style jsx>{`
        .starry-background {
          position: relative;
          background: #000;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .starry-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 160px 30px, #fff, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 20s linear infinite;
          z-index: 1;
        }
        
        .starry-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(75, 0, 130, 0.15) 0%, transparent 50%);
          z-index: 1;
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </div>
  );
};
