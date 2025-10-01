import React, { useState } from "react";

const skills = [
  { name: "HTML/CSS", levelLabel: "Expert", category: "frontend" },
  { name: "JavaScript", levelLabel: "Advanced", category: "frontend" },
  { name: "Bootstrap", levelLabel: "Advanced", category: "frontend" },
  { name: "React", levelLabel: "Intermediate", category: "frontend" },
  { name: "UI/UX", levelLabel: "Intermediate", category: "frontend" },

  { name: "Django", levelLabel: "Intermediate", category: "backend" },
  { name: "Python", levelLabel: "Intermediate", category: "backend" },
  { name: "MongoDB", levelLabel: "Advanced", category: "backend" },
  { name: "MySQL", levelLabel: "Expert", category: "backend" },

  { name: "Git/GitHub", levelLabel: "Advanced", category: "tools" },
  { name: "Docker", levelLabel: "Basic", category: "tools" },
  { name: "Figma", levelLabel: "Intermediate", category: "tools" },
  { name: "VS Code", levelLabel: "Expert", category: "tools" },
  { name: "Linux", levelLabel: "Expert", category: "tools" },
  { name: "Postman", levelLabel: "Advanced", category: "tools" },
  { name: "Burp Suite", levelLabel: "Intermediate", category: "tools" },
  { name: "Nmap", levelLabel: "Intermediate", category: "tools" },

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

// Add styles for pop-up animation and card-body dark background
const cardStyle = {
  backgroundColor: "#2c2c2c", // dark gray background for card-body
  color: "#f8f9fa",           // light text color for readability
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
                tabIndex: 0,  // make card focusable via keyboard
                onFocus: () => setHoveredIndex(index),
                onBlur: () => setHoveredIndex(null),
              },
              React.createElement(
                "div",
                { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, skill.name),
                React.createElement(
                  "div",
                  { className: "mt-2" },
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
    ),
    React.createElement("style", { jsx: true }, `
      .starry-background {
        position: relative;
        background: #000;
        overflow: hidden;
      }
      
      .starry-background::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(2px 2px at 20px 30px, #eee, transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 90px 40px, #fff, transparent),
          radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
          radial-gradient(2px 2px at 160px 30px, #fff, transparent);
        background-repeat: repeat;
        background-size: 200px 100px;
        animation: sparkle 20s linear infinite;
        z-index: 1;
      }
      
      .starry-background::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(ellipse at 30% 20%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(75, 0, 130, 0.15) 0%, transparent 50%);
        z-index: 1;
      }
      
      @keyframes sparkle {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-100px); }
      }
    `)
  );
};
