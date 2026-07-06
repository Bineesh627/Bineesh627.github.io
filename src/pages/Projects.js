import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, HardDrive, FileCode } from "lucide-react";
import '../assets/css/Projects.css';
import { projectsData } from "../data/projectsData";

export const Projects = () => {
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

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
    <div className="projects-page min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <div className="projects-glow blur-3xl"></div>

      <section className="py-5 mt-5">
        <div className="container mt-5">
          {/* Section Header */}
          <div className="os-section-header">
            <h2 className="os-section-title">
              Product & Software <span className="text-gradient-blue">Projects</span>
            </h2>
            <p className="os-section-subtitle">A curated catalog of my technical releases and business projects</p>
            <div className="os-separator"></div>
          </div>

          {/* OS Windows Explorer Layout */}
          <div className="os-window-frame mt-5">
            {/* Header */}
            <div className="os-window-header">
              <div className="os-control-dots">
                <span className="os-dot red"></span>
                <span className="os-dot yellow"></span>
                <span className="os-dot green"></span>
              </div>
              <div className="os-window-title">EXPLORER_SHELL // PROJECTS_DIRECTORY</div>
              <HardDrive size={14} className="text-secondary" />
            </div>

            <div className="os-window-body p-0">
              <div className="row g-0">
                {/* Directory Content explorer Grid - Full Width */}
                <div className="col-12 p-4" style={{ minHeight: "500px", background: "transparent" }}>
                  <div className="row g-4">
                    {projectsData.map((project) => (
                      <div key={project.id} className="col-12 col-md-6 col-lg-4 voxel-cell-perspective d-flex justify-content-center">
                        <div 
                          className="project-os-card spotlight-card h-100"
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => navigate(`/projects/${project.id}`)}
                        >
                          {/* Folder Tab Header */}
                          <div className="project-folder-tab font-mono text-xs d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-25 pb-2">
                            <span className="d-flex align-items-center"><FileCode size={12} className="me-1 text-primary" /> PROJECT_ARCHIVE</span>
                            <span className="text-muted">SIZE: 1.2 MB</span>
                          </div>

                          {/* Image Wrapper */}
                          <div className="project-os-image-wrapper">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="project-os-img"
                              onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800";
                              }}
                            />
                          </div>

                          {/* Details content */}
                          <div className="project-os-card-body mt-3">
                            <div className="project-os-tags mb-3">
                              {project.tags.map((tag) => (
                                <span key={tag} className="project-os-tag-badge font-mono">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h3 className="project-os-title font-display text-gradient-blue">{project.title}</h3>
                            <p className="project-os-desc">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Loader CTA */}
          <div className="text-center mt-5 pt-4">
            <a
              className="btn-cyber-os"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Bineesh627"
            >
              QUERY_REMOTE_GITHUB <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;