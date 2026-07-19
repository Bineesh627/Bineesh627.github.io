import React from "react";
import "../assets/css/Contact.css";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram, MessageSquare, Github, Terminal } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import { Metadata } from "../components/Metadata";
import { pagesMetadata } from "../data/metadata";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "sbineesh172@gmail.com",
      link: "mailto:sbineesh172@gmail.com"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 95673 14355",
      link: "tel:+919567314355"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Alappuzha, Kerala, India",
      link: "https://www.google.com/maps?q=Alappuzha,+Kerala,+India"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bineesh627"
    },
    {
      icon: <Twitter size={18} />,
      label: "Twitter",
      url: "https://twitter.com/bineesh627"
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://www.instagram.com/dream_boy_.627"
    },
    {
      icon: <MessageSquare size={18} />,
      label: "WhatsApp",
      url: "https://wa.me/+919567314355"
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      url: "https://github.com/Bineesh627"
    },
    {
      icon: <SiHuggingface size={18} />,
      label: "HuggingFace",
      url: "https://huggingface.co/bineesh627"
    }
  ];

  const handleMapClick = () => {
    window.open("https://www.google.com/maps?q=Alappuzha,+Kerala,+India", "_blank");
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
    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="contact-page min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <Metadata {...pagesMetadata.contact} />
      <div className="contact-glow blur-3xl"></div>

      <Container className="py-5 mt-5">
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Connect & <span className="text-gradient-blue">Collaborate</span>
          </h2>
          <p className="os-section-subtitle">Open channels for software developments and business consultations</p>
          <div className="os-separator"></div>
        </div>

        {/* Main Grid */}
        <Row className="g-5 align-items-stretch mt-3">
          {/* Left Column: Direct channels list */}
          <Col lg={6} className="d-flex flex-column gap-3">
            <div className="os-window-frame h-100">
              <div className="os-window-header">
                <div className="os-control-dots">
                  <span className="os-dot red"></span>
                  <span className="os-dot yellow"></span>
                  <span className="os-dot green"></span>
                </div>
                <div className="os-window-title">CHANNELS_LIST</div>
                <Terminal size={14} className="text-secondary" />
              </div>

              <div className="os-window-body d-flex flex-column gap-3">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="contact-os-item spotlight-card"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="contact-os-icon-box">
                      {item.icon}
                    </div>
                    <div className="contact-os-details">
                      <span className="contact-os-label font-mono text-xs">PORT_0{index + 1} {"//"} {item.label.toUpperCase()}</span>
                      <a 
                        href={item.link}
                        className="contact-os-value font-display"
                        target={item.label === "Location" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Right Column: Radar target locator */}
          <Col lg={6} className="d-flex flex-column">
            <div className="os-window-frame h-100">
              <div className="os-window-header">
                <div className="os-control-dots">
                  <span className="os-dot red"></span>
                  <span className="os-dot yellow"></span>
                  <span className="os-dot green"></span>
                </div>
                <div className="os-window-title">RADAR_TARGET_LOCK</div>
                <Terminal size={14} className="text-secondary" />
              </div>

              <div className="os-window-body d-flex align-items-center justify-content-center p-0" style={{ minHeight: "300px" }}>
                <div 
                  className="contact-os-radar d-flex flex-column align-items-center justify-content-center w-100 h-100 py-5"
                  onClick={handleMapClick}
                  style={{ cursor: "pointer" }}
                >
                  {/* concentric scanner circles */}
                  <div className="radar-sweep-scanner"></div>
                  <div className="radar-grid-ring r1"></div>
                  <div className="radar-grid-ring r2"></div>
                  <div className="radar-grid-ring r3"></div>

                  <div className="radar-icon-frame mb-3 animate-target">
                    <Globe size={28} className="text-primary" />
                  </div>
                  <p className="radar-target-name font-mono mb-1">LOCK_TARGET: ALAPPUZHA, IN</p>
                  <p className="radar-target-subtext font-mono text-xs text-muted">CLICK_TO_ESTABLISH_MAP_LINK</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Social Dock */}
        <div className="social-dock-os mt-5 pt-4 text-center">
          <h3 className="social-dock-title font-mono text-xs mb-3 text-muted">ESTABLISH REMOTE CONNECTION</h3>
          <div className="social-dock-shell d-inline-flex align-items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-dock-node"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </Container>
    </div>
  );
};
export default Contact;
