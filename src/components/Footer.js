import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="modern-footer">
      <Container>
        {/* Main Footer Content */}
        <Row className="footer-main">
          {/* Brand Section - Left */}
          <Col xs={12} md={6} className="brand-section">
            <div className="brand-name">
              <span className="brand-primary">Bineesh</span>
              <span className="brand-accent">S</span>
            </div>
            <p className="brand-tagline">
              Tech-Driven Innovator | Building Future-Ready Vision
            </p>
          </Col>

          {/* Quick Links Section - Right */}
          <Col xs={12} md={6} className="links-section">
            <h2 className="links-heading">Quick Links</h2>
            <ul className="footer-links">
              <li>
                <a href="#blogs" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#connect" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2025 Bineesh S All rights reserved. |{" "}
            <a 
              href="https://neuraq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-link"
            >
              Neuraq Technologies
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};