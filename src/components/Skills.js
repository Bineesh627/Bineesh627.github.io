import React, { useState } from "react";
import '../assets/css/Skills.css';

// Import logos
import jsLogo from "../assets/img/skills/js.png";
import htmlLogo from "../assets/img/skills/html.png";
import cssLogo from "../assets/img/skills/css-3.png";
import BootstrapLogo from "../assets/img/skills/bootstrap.png";
import ReactLogo from "../assets/img/skills/react.png";
import UiUxLogo from "../assets/img/skills/ui-ux.png";
import DjangoLogo from "../assets/img/skills/django.png";
import PythonLogo from "../assets/img/skills/python.png";
import MongoDbLogo from "../assets/img/skills/mongodb.png";
import MysqlLogo from "../assets/img/skills/mysql.png";
import GitLogo from "../assets/img/skills/git.png";
import DockerLogo from "../assets/img/skills/docker.png";
import FigmaLogo from "../assets/img/skills/figma.png";
import VsCodeLogo from "../assets/img/skills/vs-code.png";
import LinuxLogo from "../assets/img/skills/linux.png";
import PostmanLogo from "../assets/img/skills/postman.png";
import BurpsuiteLogo from "../assets/img/skills/burpsuite.png";
import NmapLogo from "../assets/img/skills/nmap.png";

const skills = [
  { name: "HTML", levelLabel: "Expert", category: "frontend", icon: htmlLogo },
  { name: "CSS", levelLabel: "Expert", category: "frontend", icon: cssLogo },
  { name: "JavaScript", levelLabel: "Advanced", category: "frontend", icon: jsLogo },
  { name: "Bootstrap", levelLabel: "Advanced", category: "frontend", icon: BootstrapLogo },
  { name: "React", levelLabel: "Intermediate", category: "frontend", icon: ReactLogo },
  { name: "UI/UX", levelLabel: "Intermediate", category: "frontend", icon: UiUxLogo },

  { name: "Django", levelLabel: "Advanced", category: "backend", icon: DjangoLogo },
  { name: "Python", levelLabel: "Expert", category: "backend", icon: PythonLogo },
  { name: "MongoDB", levelLabel: "Advanced", category: "backend", icon: MongoDbLogo },
  { name: "MySQL", levelLabel: "Expert", category: "backend", icon: MysqlLogo },

  { name: "Git", levelLabel: "Advanced", category: "tools", icon: GitLogo },
  { name: "Docker", levelLabel: "Basic", category: "tools", icon: DockerLogo },
  { name: "Figma", levelLabel: "Intermediate", category: "tools", icon: FigmaLogo },
  { name: "VS Code", levelLabel: "Expert", category: "tools", icon: VsCodeLogo },
  { name: "Linux", levelLabel: "Expert", category: "tools", icon: LinuxLogo },
  { name: "Postman", levelLabel: "Advanced", category: "tools", icon: PostmanLogo },
  { name: "Burp Suite", levelLabel: "Intermediate", category: "tools", icon: BurpsuiteLogo },
  { name: "Nmap", levelLabel: "Intermediate", category: "tools", icon: NmapLogo },

  { name: "Penetration Testing", levelLabel: "Expert", category: "cybersecurity" },
  { name: "Vulnerability Assessment", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Network Security", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Ethical Hacking", levelLabel: "Expert", category: "cybersecurity" },
  { name: "Security Auditing", levelLabel: "Advanced", category: "cybersecurity" },
  { name: "Incident Response", levelLabel: "Intermediate", category: "cybersecurity" },
  { name: "Risk Assessment", levelLabel: "Advanced", category: "cybersecurity" },

  { name: "Machine Learning", levelLabel: "Expert", category: "ai" },
  { name: "Deep Learning", levelLabel: "Advanced", category: "ai" },
  { name: "Natural Language Processing", levelLabel: "Advanced", category: "ai" },
  { name: "Computer Vision", levelLabel: "Intermediate", category: "ai" },
  { name: "TensorFlow", levelLabel: "Advanced", category: "ai" },
  { name: "PyTorch", levelLabel: "Intermediate", category: "ai" },
  { name: "Data Analysis", levelLabel: "Expert", category: "ai" },
  { name: "AI Model Development", levelLabel: "Expert", category: "ai" },

  { name: "Business Strategy", levelLabel: "Expert", category: "entrepreneurship" },
  { name: "Product Development", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Market Research", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Financial Planning", levelLabel: "Intermediate", category: "entrepreneurship" },
  { name: "Team Leadership", levelLabel: "Expert", category: "entrepreneurship" },
  { name: "Project Management", levelLabel: "Advanced", category: "entrepreneurship" },
  { name: "Innovation Management", levelLabel: "Expert", category: "entrepreneurship" },
];

const categories = ["frontend", "backend", "tools", "cybersecurity", "ai", "entrepreneurship"];

const levelColors = {
  Expert: "bg-success",
  Advanced: "bg-primary",
  Intermediate: "bg-warning text-dark",
  Basic: "bg-secondary",
};

const cardStyle = {
  backgroundColor: "#2c2c2c",
  color: "#f8f9fa",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return React.createElement(
    "section",
    { id: "skills", className: "starry-background" },
    React.createElement(
      "div",
      { className: "py-5", style: { position: "relative", zIndex: 2 } },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "h2",
          { className: "text-center mb-4", style: { color: "#f8f9fa" } },
          "My ",
          React.createElement("span", { className: "text-primary" }, "Skills")
        ),

        // Category buttons
        React.createElement(
          "div",
          { className: "d-flex justify-content-center flex-wrap mb-4 gap-2" },
          categories.map((category, index) =>
            React.createElement(
              "button",
              {
                key: index,
                type: "button",
                className:
                  activeCategory === category
                    ? "btn btn-primary text-capitalize"
                    : "btn btn-outline-light text-capitalize",
                onClick: () => setActiveCategory(category),
              },
              category
            )
          )
        ),

        // Skill cards
        React.createElement(
          "div",
          { className: "row g-3" },
          filteredSkills.map((skill, index) =>
            React.createElement(
              "div",
              { key: index, className: "col-12 col-sm-6 col-lg-4" },
              React.createElement(
                "div",
                {
                  className: "card h-100",
                  style: hoveredIndex === index
                    ? { ...cardStyle, ...cardHoverStyle }
                    : cardStyle,
                  onMouseEnter: () => setHoveredIndex(index),
                  onMouseLeave: () => setHoveredIndex(null),
                  tabIndex: 0,
                  onFocus: () => setHoveredIndex(index),
                  onBlur: () => setHoveredIndex(null),
                },
                React.createElement(
                  "div",
                  { className: "card-body d-flex align-items-center gap-3" },

                  // Left-side icon (fixed small)
                  skill.icon &&
                    React.createElement("img", {
                      src: skill.icon,
                      alt: `${skill.name} logo`,
                      style: { width: "50px", height: "50px", objectFit: "contain", flexShrink: 0 }
                    }),

                  // Right-side content (fills remaining space)
                  React.createElement(
                    "div",
                    { className: "flex-grow-1" },
                    React.createElement(
                      "h5",
                      { className: "card-title mb-2" },
                      skill.name
                    ),
                    React.createElement(
                      "span",
                      { className: `badge ${levelColors[skill.levelLabel] || "bg-secondary"}` },
                      skill.levelLabel
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};
