import React from "react";
import "../assets/css/Contact.css";
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


// Renaming the original Contact component to ContactContent for internal use
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
    <>
      <div className="contact-page" style={{ position: "relative", zIndex: 2 }}>
      <Container className="contact-container" id="connect">
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
                      rel={item.label === "Location" ? "noopener noreferrer" : undefined}
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
      </div>
    </>
  );
};

export default Contact;
