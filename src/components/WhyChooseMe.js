import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { whyChooseMeData } from '../data/whyChooseMeData';
import { Shield, Sparkles, CheckCircle } from 'lucide-react';
import '../assets/css/WhyChooseMe.css';

export const WhyChooseMe = () => {
  return (
    <section className="wcm-os" id="why-choose-me">
      {/* Ambient glows */}
      <div className="wcm-os-glow top-right blur-3xl"></div>
      <div className="wcm-os-glow bottom-left blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Why <span className="text-gradient-green">Choose Me</span>
          </h2>
          <p className="os-section-subtitle">Systems reliability metrics & project execution parameters</p>
          <div className="os-separator"></div>
        </div>

        <Row className="g-5 align-items-center">
          {/* Left Side: System Telemetry Meters */}
          <Col xs={12} lg={5}>
            <div className="glass-panel p-4" style={{ position: "relative", zIndex: 10 }}>
              <h3 className="font-display text-gradient-blue mb-3" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                System Calibration Logs
              </h3>
              <p className="font-mono text-muted text-xs mb-4">
                {"// DIAGNOSTIC PERFORMANCE READINGS FROM ACTIVE CLIENT CONTRACTS"}
              </p>

              {/* Metric 1 */}
              <div className="mb-4">
                <div className="d-flex justify-content-between font-mono text-xs mb-2">
                  <span className="d-flex align-items-center gap-2"><Sparkles size={12} className="text-primary" /> CORE_ACCURACY_RATING</span>
                  <span className="text-gradient-green">100%</span>
                </div>
                <div className="telemetry-progress-track">
                  <div className="telemetry-progress-bar green" style={{ width: "100%" }}></div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="mb-4">
                <div className="d-flex justify-content-between font-mono text-xs mb-2">
                  <span className="d-flex align-items-center gap-2"><Shield size={12} className="text-primary" /> SECURITY_SHIELD_COMPLIANCE</span>
                  <span className="text-gradient-blue">98%</span>
                </div>
                <div className="telemetry-progress-track">
                  <div className="telemetry-progress-bar blue" style={{ width: "98%" }}></div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="mb-4">
                <div className="d-flex justify-content-between font-mono text-xs mb-2">
                  <span className="d-flex align-items-center gap-2"><CheckCircle size={12} className="text-primary" /> ON_TIME_DELIVERY_INDEX</span>
                  <span className="text-gradient-purple" style={{ color: "var(--accent-purple)" }}>95%</span>
                </div>
                <div className="telemetry-progress-track">
                  <div className="telemetry-progress-bar purple" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="font-mono text-muted text-xxs mt-4 pt-3 border-top border-secondary border-opacity-25" style={{ fontSize: "0.68rem" }}>
                <span>NODE_STATE: SYSTEM_OPERATIONAL_OPTIMAL</span>
              </div>
            </div>
          </Col>

          {/* Right Side: Pillars */}
          <Col xs={12} lg={7}>
            <Row className="g-4">
              {whyChooseMeData.map((element) => {
                const IconComponent = element.icon;
                return (
                  <Col key={element.id} xs={12}>
                    <div className="wcm-os-card">
                      <div className="d-flex align-items-start gap-4">
                        <div className="wcm-os-icon-box">
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="wcm-os-title font-display text-gradient-blue">
                            {element.title}
                          </h3>
                          <p className="wcm-os-desc m-0">
                            {element.description}
                          </p>
                          <div className="wcm-telemetry-row">
                            <span className="wcm-telemetry-label">{element.statLabel}:</span>
                            <span className="wcm-telemetry-value">{element.statValue}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseMe;
