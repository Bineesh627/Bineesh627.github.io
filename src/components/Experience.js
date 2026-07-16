import React from "react";
import { Cpu, Terminal, Play, Check, MapPin, ExternalLink } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/experienceData";

export const Experience = () => {
  const iconStyles = (status) => ({
    background: "rgba(4, 4, 8, 0.95)",
    color: status === "ACTIVE" ? "var(--accent-blue)" : "var(--accent-green)",
    boxShadow: `0 0 0 4px ${status === "ACTIVE" ? "rgba(59, 163, 255, 0.15)" : "rgba(0, 255, 102, 0.15)"}, inset 0 2px 0 rgba(255,255,255,0.05), 0 10px 20px rgba(0,0,0,0.6)`
  });

  return (
    <div className="experience-os py-5" style={{ position: "relative", zIndex: 2 }}>
      <div className="container" id="experience">
        
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Professional <span className="text-gradient-green">Timeline</span>
          </h2>
          <p className="os-section-subtitle">My leadership roles and software engineering background</p>
          <div className="os-separator"></div>
        </div>

        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.05)">
          {experienceData.map((element) => {
            const isActive = element.status === "ACTIVE";
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="text-secondary font-mono text-sm"
                iconStyle={iconStyles(element.status)}
                icon={isActive ? <Play size={18} className="animate-pulse" /> : <Check size={18} />}
                contentStyle={{ 
                  background: "rgba(6, 6, 12, 0.5)",
                  color: "white",
                  border: `1px solid ${isActive ? 'rgba(59, 163, 255, 0.15)' : 'rgba(255, 255, 255, 0.06)'}`,
                  boxShadow: isActive ? "var(--neon-glow)" : "0 15px 35px rgba(0, 0, 0, 0.5)",
                  borderRadius: "12px",
                  padding: "20px"
                }}
                contentArrowStyle={{ 
                  borderRight: `7px solid ${isActive ? 'rgba(59, 163, 255, 0.15)' : 'rgba(255, 255, 255, 0.06)'}`
                }}
              >
                {/* Process Header */}
                <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-25 pb-2 font-mono">
                  <span className="text-muted text-xs"><Cpu size={12} className="me-1" /> {element.pid}</span>
                  <span className={`process-status-badge ${isActive ? 'active' : 'success'}`}>
                    {element.status}
                  </span>
                </div>

                {/* Body Content */}
                <h3 className="vertical-timeline-element-title font-display text-gradient-blue" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {element.title}
                </h3>
                
                <h5 className="vertical-timeline-element-subtitle font-display mt-1 mb-2 text-secondary" style={{ fontSize: "0.9rem" }}>
                  {element.link ? (
                    <a
                      href={element.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gradient-blue text-decoration-none d-inline-flex align-items-center gap-1"
                      style={{ borderBottom: "1px dashed rgba(59, 163, 255, 0.4)" }}
                    >
                      {element.company}
                      <ExternalLink size={12} className="ms-1" />
                    </a>
                  ) : (
                    element.company
                  )}
                </h5>

                {element.location && (
                  <div className="font-mono mb-2 d-flex align-items-center gap-1" style={{ fontSize: "0.75rem", color: "var(--text-primary)" }}>
                    <MapPin size={12} style={{ color: "var(--accent-blue)" }} />
                    <span style={{ color: "rgba(255, 255, 255, 0.75)" }}>{element.location}</span>
                  </div>
                )}


                {/* Info Badges */}
                {(element.employmentType || element.workMode) && (
                  <div className="d-flex gap-2 mb-3 align-items-center">
                    {element.employmentType && (
                      <span 
                        className="font-mono text-xs" 
                        style={{
                          background: "rgba(95, 163, 255, 0.08)",
                          color: "var(--accent-blue)",
                          border: "1px solid rgba(95, 163, 255, 0.2)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        {element.employmentType}
                      </span>
                    )}
                    {element.workMode && (
                      <span 
                        className="font-mono text-xs" 
                        style={{
                          background: "rgba(157, 78, 221, 0.08)",
                          color: "var(--accent-purple)",
                          border: "1px solid rgba(157, 78, 221, 0.2)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "0.7rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        {element.workMode}
                      </span>
                    )}
                  </div>
                )}

                <div className="process-console-log font-mono">
                  <span className="log-prompt text-primary"><Terminal size={12} className="me-1" /> log_output:</span>
                  <p className="text-secondary mt-1 mb-0" style={{ lineHeight: "1.6", fontSize: "0.85rem" }}>
                    {element.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Experience;
