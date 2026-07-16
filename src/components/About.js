import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profile-pic.png";
import { Eye, ShieldCheck, Cpu } from "lucide-react";

export const About = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // 3D perspective rotation calculation
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
    <section className="about-os" id="about">
      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            About <span className="text-gradient-blue">Bineesh S</span>
          </h2>
          <p className="os-section-subtitle">Tech Innovator, AI Engineer & Founder</p>
          <div className="os-separator"></div>
        </div>

        <Row className="align-items-center g-5">
          {/* Left Column: Biometric Scope Face Scan */}
          <Col xs={12} lg={5} className="d-flex justify-content-center">
            <div className="os-biometric-scope">
              <div 
                className="os-biometric-card glass-panel spotlight-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* HUD Overlay Lines */}
                <div className="hud-corner top-left"></div>
                <div className="hud-corner top-right"></div>
                <div className="hud-corner bottom-left"></div>
                <div className="hud-corner bottom-right"></div>
                
                <div className="scan-sweep-line"></div>

                <div className="os-avatar-frame">
                  <img
                    src={profile}
                    alt="Bineesh S Biometric Scan"
                    className="os-avatar-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600";
                    }}
                  />
                  <div className="os-avatar-overlay"></div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Decrypted Bio Logs */}
          <Col xs={12} lg={7}>
            <div className="os-bio-logs glass-panel">
              <div className="logs-header font-mono">
                <ShieldCheck size={16} className="text-success me-2 animate-pulse" />
                <span>DIAGNOSTIC_STATE: DECRYPTED</span>
              </div>
              
              <div className="logs-body">
                {/* Core parameter tags */}
                <div className="logs-meta-grid font-mono mb-4">
                  <div className="meta-item"><span className="m-lbl">SUBJECT:</span> <span className="m-val text-white">BINEESH S</span></div>
                  <div className="meta-item"><span className="m-lbl">ORG_ID:</span> <span className="m-val text-gradient-green">INDEPENDENT [FREELANCER]</span></div>
                  <div className="meta-item"><span className="m-lbl">CLASS:</span> <span className="m-val text-white">CLASS_AI_ENGINEER</span></div>
                  <div className="meta-item"><span className="m-lbl">STATUS:</span> <span className="m-val text-gradient-blue">ACTIVE_EXECUTION</span></div>
                </div>

                <div className="log-console-text">
                  <div className="console-title font-mono"><Cpu size={14} className="me-2 text-primary" /> SYSTEM_DECRYPT_LOG // SUMMARY</div>
                  <p className="log-paragraph mt-2">
                    AI Engineer and Python developer specializing in advanced machine learning model development, computer vision, and privacy-preserving federated architectures. Highly motivated developer with a proven capability of training neural networks, designing intelligent agents, and deploying explainable AI tools.
                  </p>
                  
                  <p className="log-paragraph mt-3">
                    Leveraging deep learning frameworks (PyTorch, TensorFlow) and federated learning structures (Flower) alongside cybersecurity methodologies to architect secure, intelligence-driven software ecosystems and interactive data workspaces.
                  </p>
                </div>

                {/* Sub logs status ticker */}
                <div className="mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex gap-3 font-mono text-muted text-xs">
                  <span><Eye size={12} className="me-1" /> ACCESS: RESTRICTED</span>
                  <span>NODE: 192.168.1.104</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;