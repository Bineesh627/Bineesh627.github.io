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
  { name: "Cyber Security Expert", levelLabel: "Expert", category: "tools" },
  { name: "AI Expert", levelLabel: "Expert", category: "tools" },
  { name: "Entrepreneur", levelLabel: "Expert", category: "tools" },
];

const categories = ["frontend", "backend", "tools"];

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
    { id: "skills", className: "py-5"},
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
  );
};
