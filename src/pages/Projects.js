import React, { useState } from "react";
import { ArrowRight, Github, Folder, HardDrive, FileCode, ChevronDown } from "lucide-react";
import '../assets/css/Projects.css';
import { projectsData } from "../data/projectsData";

export const Projects = () => {
  const [selectedFolder, setSelectedFolder] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const folders = [
    { id: "all", name: "root_directory", count: projectsData.length },
    { id: "Python", name: "bin_python", count: projectsData.filter(p => p.tags.includes("Python")).length },
    { id: "Django", name: "lib_django", count: projectsData.filter(p => p.tags.includes("Django")).length },
    { id: "TypeScript", name: "usr_typescript", count: projectsData.filter(p => p.tags.includes("TypeScript")).length },
    { id: "React", name: "dev_react", count: projectsData.filter(p => p.tags.includes("React")).length },
    { id: "AI", name: "etc_ai", count: projectsData.filter(p => p.tags.includes("AI")).length },
    { id: "CSS", name: "var_styles", count: projectsData.filter(p => p.tags.includes("CSS")).length }
  ];

  const filteredProjects = selectedFolder === "all" 
    ? projectsData 
    : projectsData.filter(p => p.tags.includes(selectedFolder));

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
              {/* Directory Path Bar (Futuristic OS Address Bar - Mobile ONLY) */}
              <div className="directory-path-bar p-3 border-bottom border-secondary border-opacity-25 d-flex d-md-none align-items-center justify-content-between">
                <div className="d-flex align-items-center font-mono text-xs">
                  <span className="text-secondary me-2">PATH:</span>
                  <span className="text-muted">guest@fusintech_os:~/projects/</span>
                  <div className="custom-dir-dropdown-container">
                    <button 
                      className="custom-dir-dropdown-btn font-mono" 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <Folder size={12} className="text-primary me-1" />
                      {folders.find(f => f.id === selectedFolder)?.name}
                      <span className="folder-count ms-1">[{folders.find(f => f.id === selectedFolder)?.count}]</span>
                      <ChevronDown size={12} className="ms-2 text-secondary" />
                    </button>
                    {isDropdownOpen && (
                      <div className="custom-dir-dropdown-menu">
                        {folders.map(folder => (
                          <button 
                            key={folder.id}
                            onClick={() => { setSelectedFolder(folder.id); setIsDropdownOpen(false); }}
                            className={`custom-dir-dropdown-item ${selectedFolder === folder.id ? 'active' : ''}`}
                          >
                            <Folder size={12} className="me-2 text-primary" />
                            <span>{folder.name}</span>
                            <span className="ms-auto text-secondary text-xs">[{folder.count}]</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="row g-0">
                {/* Directory Sidebar - Desktop ONLY */}
                <div className="col-12 col-md-3 border-end border-secondary border-opacity-25 p-3 d-none d-md-block">
                  <div className="sidebar-title font-mono text-muted text-xs mb-3">SYSTEM_NODES</div>
                  <div className="sidebar-folder-list d-flex flex-column gap-2">
                    {folders.map(folder => (
                      <button
                        key={folder.id}
                        onClick={() => setSelectedFolder(folder.id)}
                        className={`sidebar-folder-btn font-mono ${selectedFolder === folder.id ? 'active' : ''}`}
                      >
                        <Folder size={14} className="me-2 text-primary" />
                        <span className="folder-name">{folder.name}</span>
                        <span className="folder-count ms-auto">[{folder.count}]</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Directory Content explorer Grid - 9 cols on desktop, 12 cols on mobile */}
                <div className="col-12 col-md-9 p-4" style={{ minHeight: "500px", background: "transparent" }}>
                  <div className="row g-4">
                    {filteredProjects.map((project) => (
                      <div key={project.id} className="col-12 col-lg-6 voxel-cell-perspective">
                        <div 
                          className="project-os-card spotlight-card h-100"
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
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
                            {/* Actions on hover */}
                            <div className="project-os-overlay d-flex justify-content-center align-items-center">
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-cyber-icon"
                                aria-label="View repository on Github"
                              >
                                <Github size={20} />
                              </a>
                            </div>
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