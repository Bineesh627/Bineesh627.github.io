import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer 
      className="footer" 
      style={{ backgroundColor: 'rgb(5, 5, 5)', padding: '20px 0', color: '#fff' }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bineesh627" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              <a href="https://github.com/Bineesh627" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/dream_boy_.627" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
              <a href="https://wa.me/+919567314355" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="WhatsApp Icon" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved By Bineesh S</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
