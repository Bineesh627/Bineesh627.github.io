import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaMap,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGithub
} from "react-icons/fa";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sbineesh172@gmail.com",
      link: "mailto:sbineesh172@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "91 95673 14355",
      link: "tel:+919567314355"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Alappuzha, Kerala",
      link: "https://www.google.com/maps?q=Alappuzha,+Kerala,+India"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bineesh627"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/bineesh627"
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://www.instagram.com/dream_boy_.627"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      url: "https://wa.me/+919567314355"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/Bineesh627"
    }
  ];

  const handleMapClick = () => {
    window.open("https://www.google.com/maps?q=Alappuzha,+Kerala,+India", "_blank");
  };

  return (
    <div className="contact-page">
      <Container className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Let's connect and collaborate
          </p>
        </div>

        {/* Main Content */}
        <Row className="contact-content">
          {/* Left Side - Contact Information */}
          <Col lg={6} className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <a 
                      href={item.link}
                      className="contact-value"
                      target={item.label === "Location" ? "_blank" : "_self"}
                      rel={item.label === "Location" ? "noopener noreferrer" : ""}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Side - Map Section */}
          <Col lg={6} className="map-section">
            <Card className="map-card" onClick={handleMapClick}>
              <Card.Body className="map-card-body">
                <div className="map-icon">
                  <FaMap />
                </div>
                <p className="map-text">
                  View Location on Google Maps
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Bottom Section - Social Media */}
        <div className="social-section">
          <h2 className="social-title">Follow Me</h2>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        .contact-page {
          position: relative;
          background: #000;
          overflow: hidden;
          min-height: 100vh;
          color: #fff;
          padding: 120px 0 80px 0;
          font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .contact-page::before {
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
        
        .contact-page::after {
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
        

        .contact-container {
          max-width: 1200px;
          position: relative;
          z-index: 2;
        }

        /* Header Styles */
        .contact-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .contact-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .text-accent {
          color: rgb(13, 110, 253);
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: #cccccc;
          margin: 0;
          font-weight: 400;
        }

        /* Main Content */
        .contact-content {
          margin-bottom: 80px;
        }

        /* Contact Information Section */
        .contact-info-section {
          padding-right: 2rem;
        }

        .section-title {
          color: rgb(13, 110, 253);
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          letter-spacing: -0.01em;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
          border-bottom-color: rgb(13, 110, 253);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: rgba(13, 110, 253, 0.1);
          border: 2px solid rgb(13, 110, 253);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(13, 110, 253);
          font-size: 1.2rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: rgb(13, 110, 253);
          color: #fff;
          transform: scale(1.1);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-label {
          font-size: 0.9rem;
          color: #cccccc;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-value {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: rgb(13, 110, 253);
          text-decoration: none;
        }

        /* Map Section */
        .map-section {
          padding-left: 2rem;
          display: flex;
          align-items: center;
        }

        .map-card {
          background: #1a1a1a;
          border: 2px solid rgba(13, 110, 253, 0.2);
          border-radius: 16px;
          width: 100%;
          height: 280px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .map-card:hover {
          border-color: rgb(13, 110, 253);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(13, 110, 253, 0.2);
        }

        .map-card-body {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px 20px;
        }

        .map-icon {
          width: 80px;
          height: 80px;
          background: rgba(13, 110, 253, 0.1);
          border: 3px solid rgb(13, 110, 253);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(13, 110, 253);
          font-size: 2rem;
          margin-bottom: 24px;
          transition: all 0.3s ease;
        }

        .map-card:hover .map-icon {
          background: rgb(13, 110, 253);
          color: #fff;
          transform: scale(1.1);
        }

        .map-text {
          color: rgb(13, 110, 253);
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          transition: color 0.3s ease;
        }

        .map-card:hover .map-text {
          color: #fff;
        }

        /* Social Section */
        .social-section {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-title {
          color: #ffffff;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          letter-spacing: -0.01em;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 60px;
          height: 60px;
          background: #1a1a1a;
          border: 2px solid rgba(13, 110, 253, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cccccc;
          font-size: 1.4rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgb(13, 110, 253);
          transform: scale(0);
          transition: transform 0.3s ease;
          border-radius: 50%;
        }

        .social-icon:hover {
          border-color: rgb(13, 110, 253);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.3);
        }

        .social-icon:hover::before {
          transform: scale(1);
        }

        .social-icon:hover {
          color: #fff;
        }

        .social-icon > * {
          position: relative;
          z-index: 1;
        }

        /* Responsive Design */
        @media (max-width: 991.98px) {
          .contact-page {
            padding: 100px 0 60px 0;
          }

          .contact-title {
            font-size: 2.8rem;
          }

          .contact-info-section,
          .map-section {
            padding-left: 0;
            padding-right: 0;
          }

          .contact-info-section {
            margin-bottom: 60px;
            padding: 0 20px;
          }
          
          .map-section {
            padding: 0 20px;
          }

          .map-card {
            height: 240px;
            margin-bottom: 40px;
          }

          .map-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .contact-items {
            gap: 40px;
            padding: 20px 0;
          }
          
          .contact-item {
            padding: 20px 0;
            gap: 24px;
          }
          
          .contact-icon {
            margin-right: 8px;
          }
        }

        @media (max-width: 767.98px) {
          .contact-page {
            padding: 80px 0 60px 0;
          }

          .contact-title {
            font-size: 2.2rem;
          }

          .contact-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .social-title {
            font-size: 1.5rem;
          }

          .contact-header {
            margin-bottom: 60px;
          }

          .contact-content {
            margin-bottom: 80px;
          }
          
          .contact-info-section {
            margin-bottom: 80px;
            padding: 0 24px;
          }
          
          .map-section {
            padding: 0 24px;
          }

          .contact-item {
            gap: 20px;
            padding: 24px 0;
            margin: 0 -8px;
          }
          
          .contact-items {
            gap: 32px;
            padding: 24px 0;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
            margin-right: 12px;
            flex-shrink: 0;
          }
          
          .contact-details {
            flex: 1;
            min-width: 0;
          }

          .social-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }

          .social-icons {
            gap: 16px;
          }
          
          .map-card {
            margin-bottom: 60px;
          }
        }

        @media (max-width: 575.98px) {
          .contact-page {
            padding: 80px 0 80px 0;
          }
          
          .contact-title {
            font-size: 1.8rem;
          }

          .contact-info-section {
            padding: 0 20px;
            margin-bottom: 100px;
          }
          
          .map-section {
            padding: 0 20px;
          }
          
          .contact-items {
            gap: 36px;
            padding: 32px 0;
          }
          
          .contact-item {
            padding: 28px 0;
            gap: 24px;
            margin: 0 -4px;
          }
          
          .contact-icon {
            margin-right: 16px;
          }
          
          .map-card {
            height: 200px;
            margin-bottom: 80px;
          }

          .map-card-body {
            padding: 30px 15px;
          }

          .map-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            margin-bottom: 16px;
          }

          .map-text {
            font-size: 1rem;
          }
        }

        /* Focus States for Accessibility */
        .contact-value:focus,
        .social-icon:focus,
        .map-card:focus {
          outline: 2px solid rgb(13, 110, 253);
          outline-offset: 2px;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .contact-item,
          .contact-icon,
          .map-card,
          .map-icon,
          .social-icon,
          .social-icon::before {
            transition: none;
          }

          .contact-item:hover,
          .map-card:hover,
          .social-icon:hover {
            transform: none;
          }
        }
      `}</style>
      </div>
    </div>
  );
};