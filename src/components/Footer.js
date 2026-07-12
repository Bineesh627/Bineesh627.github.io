import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Cpu, ShieldCheck, Mail, Linkedin, Github, MessageSquare, Heart } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import "../assets/css/Footer.css";

export const Footer = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(date.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fpsInterval = setInterval(() => {
      setFps(Math.floor(Math.random() * 4) + 57);
    }, 2000);
    return () => clearInterval(fpsInterval);
  }, []);

  const handleNavClick = (tab) => {
    const path = tab === 'home' ? '/' : `/${tab}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={16} />, url: "https://github.com/Bineesh627", label: "GitHub" },
    { icon: <Linkedin size={16} />, url: "https://www.linkedin.com/in/bineesh627", label: "LinkedIn" },
    { icon: <SiHuggingface size={16} />, url: "https://huggingface.co/bineesh627", label: "Hugging Face" },
    { icon: <MessageSquare size={16} />, url: "https://wa.me/+919567314355", label: "WhatsApp" },
    { icon: <Mail size={16} />, url: "mailto:sbineesh172@gmail.com", label: "Email" }
  ];

  return (
    <footer className="modern-footer">
      <Container>
        <div className="os-window-frame footer-panel">
          <div className="os-window-header">
            <div className="os-control-dots">
              <span className="os-dot red"></span>
              <span className="os-dot yellow"></span>
              <span className="os-dot green"></span>
            </div>
            <div className="os-window-title">SYS_SHUTDOWN // CORE_TERMINAL_LOG</div>
            <Cpu size={14} className="text-primary animate-pulse" />
          </div>

          <div className="os-window-body footer-content p-4" style={{ background: "transparent" }}>
            <Row className="g-4">
              {/* Operator Brand Info */}
              <Col xs={12} lg={4} className="brand-section">
                <div className="operator-header mb-3">
                  <div className="pulse-indicator mb-2">
                    <span className="taskbar-status-dot green animate-pulse me-2"></span>
                    <span className="status-label text-gradient-green font-mono text-xs">OPERATOR: ONLINE</span>
                  </div>
                  <div className="brand-name font-display text-gradient-blue">
                    Bineesh S
                  </div>
                </div>
                <p className="brand-tagline text-muted">
                  Founder of Fusintech | Tech Entrepreneur & AI Developer. Designing modern EdTech infrastructures and deploying high-performance automation scripts.
                </p>
                <div className="social-dock-shell mt-4 d-inline-flex gap-2">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
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
              </Col>

              {/* Navigation Links */}
              <Col xs={12} sm={6} lg={4} className="links-section">
                <h3 className="links-heading font-display">System Directories</h3>
                <ul className="footer-links font-mono">
                  <li>
                    <button className="footer-link btn-link" onClick={() => handleNavClick('home')}>
                      <span className="link-arrow me-2">&gt;</span> {"home_console"}
                    </button>
                  </li>
                  <li>
                    <button className="footer-link btn-link" onClick={() => handleNavClick('projects')}>
                      <span className="link-arrow me-2">&gt;</span> {"project_explorer"}
                    </button>
                  </li>
                  <li>
                    <button className="footer-link btn-link" onClick={() => handleNavClick('certifications')}>
                      <span className="link-arrow me-2">&gt;</span> {"credentials_archive"}
                    </button>
                  </li>
                  <li>
                    <button className="footer-link btn-link" onClick={() => handleNavClick('blogs')}>
                      <span className="link-arrow me-2">&gt;</span> {"insight_database"}
                    </button>
                  </li>
                  <li>
                    <button className="footer-link btn-link" onClick={() => handleNavClick('contact')}>
                      <span className="link-arrow me-2">&gt;</span> {"comm_portals"}
                    </button>
                  </li>
                </ul>
              </Col>

              {/* Core Telemetry Logs */}
              <Col xs={12} sm={6} lg={4} className="telemetry-section font-mono">
                <h3 className="links-heading font-display">Core Telemetry</h3>
                <div className="telemetry-box p-3">
                  <div className="telemetry-item d-flex justify-content-between mb-2">
                    <span className="lbl text-muted">SYS_CLOCK:</span>
                    <span className="val text-primary">{time || "00:00:00"}</span>
                  </div>
                  <div className="telemetry-item d-flex justify-content-between mb-2">
                    <span className="lbl text-muted">COORD_LOC:</span>
                    <span className="val">09.39N 76.45E</span>
                  </div>
                  <div className="telemetry-item d-flex justify-content-between mb-2">
                    <span className="lbl text-muted">FRAME_RATE:</span>
                    <span className="val text-gradient-green">{fps} FPS</span>
                  </div>
                  <div className="telemetry-item d-flex justify-content-between mb-2">
                    <span className="lbl text-muted">SECURE_LEVEL:</span>
                    <span className="val text-gradient-green d-flex align-items-center gap-1">
                      <ShieldCheck size={12} /> SECURE
                    </span>
                  </div>
                  <div className="telemetry-item d-flex justify-content-between">
                    <span className="lbl text-muted">HOST_DOMAIN:</span>
                    <span className="val">bineeshs.vercel.app</span>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="footer-separator mt-4 mb-3"></div>

            {/* Bottom Bar */}
            <div className="footer-bottom d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
              <p className="copyright-text font-mono text-muted text-xs">
                © {new Date().getFullYear()} BINEESH S // ALL SYSTEM RIGHTS RESERVED.
              </p>
              <p className="dev-text font-mono text-muted text-xs d-flex align-items-center gap-1">
                BUILT WITH <Heart size={10} className="text-danger animate-pulse" /> & REACT
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;