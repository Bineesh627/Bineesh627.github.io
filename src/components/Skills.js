import React, { useState } from "react";
import { skillsData, skillCategories as categories } from "../data/skillsData";
import '../assets/css/Skills.css';
import { Cpu } from "lucide-react";

const levelColors = {
  Expert: "voxel-expert",
  Advanced: "voxel-advanced",
  Intermediate: "voxel-intermediate",
  Basic: "voxel-basic",
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeCategory
  );

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Voxel tilt elevator effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 8;
    const rotateY = (x - centerX) / 8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <section id="skills" className="skills-os">
      <div className="skills-os-glow blur-3xl"></div>

      <div className="container py-5" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="os-section-subtitle">Core capabilities and programming proficiencies</p>
          <div className="os-separator"></div>
        </div>

        {/* Toggles */}
        <div className="skills-os-tabs d-flex justify-content-center flex-wrap mb-5 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`skills-os-tab-btn font-mono ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Voxel Matrix Grid */}
        <div className="row g-4 justify-content-center">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 voxel-cell-perspective">
              <div
                className="voxel-card glass-panel spotlight-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="voxel-card-header font-mono">
                  <Cpu size={12} className="text-secondary" />
                  <span className="voxel-id">CELL_0{index + 1}</span>
                </div>
                
                <div className="voxel-card-body d-flex flex-column align-items-center text-center mt-3">
                  {/* Icon or placeholder */}
                  {skill.icon ? (
                    <div className="voxel-icon-wrapper mb-3">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className="voxel-logo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="voxel-icon-placeholder font-mono mb-3">
                      {skill.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}

                  {/* Context info */}
                  <h5 className="voxel-name font-display">{skill.name}</h5>
                  <span className={`voxel-badge font-mono ${levelColors[skill.levelLabel] || "voxel-basic"}`}>
                    {skill.levelLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
