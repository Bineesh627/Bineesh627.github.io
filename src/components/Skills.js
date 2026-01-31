import React, { useState } from "react";
import { skillsData, skillCategories as categories } from "../data/skillsData";

const skills = skillsData;

const levelColors = {
  Expert: "bg-success",
  Advanced: "bg-primary",
  Intermediate: "bg-warning text-dark",
  Basic: "bg-secondary",
};

const cardStyle = {
  backgroundColor: "rgba(44, 44, 44, 0.3)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
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
