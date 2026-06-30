import React from "react";
import { Cpu, Terminal, Play, Check } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
  {
    id: 1,
    pid: "PID_8829",
    status: "ACTIVE",
    title: "Founder & CEO",
    location: "Fusintech [EdTech Platform]",
    description:
      "Founded fusintech, an innovative EdTech platform leveraging AI for personalized learning experiences.",
    date: "December 2025 - Present",
  },
  {
    id: 2,
    pid: "PID_4193",
    status: "SUCCESS",
    title: "Cyber Security • Intern",
    location: "RedTeam Hacker Academy, Trivandrum",
    description:
      "Completed an internship on Cyber Security at RedTeam Hacker Academy, Trivandrum, where I gained hands-on knowledge of basic hacking methods, security concepts, and defensive techniques used in cybersecurity.",
    date: "October 2024 - November 2024",
  },
];

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
          {timelineElements.map((element) => {
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
                
                <h5 className="vertical-timeline-element-subtitle font-display mt-1 mb-3 text-secondary" style={{ fontSize: "0.9rem" }}>
                  {element.location}
                </h5>

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
