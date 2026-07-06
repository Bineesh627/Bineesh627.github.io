import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowLeft, Github, Terminal, Activity, Cpu, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import '../assets/css/ProjectCaseStudy.css';

export const ProjectCaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find matching project
  const project = projectsData.find((p) => p.id === parseInt(id));

  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  // Reset scroll and lightbox on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveLightboxIndex(null);
    setIsZoomed(false);
  }, [id]);



  const handleNext = () => {
    if (!project || !project.gallery) return;
    setActiveLightboxIndex((prev) => (prev + 1) % project.gallery.length);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    if (!project || !project.gallery) return;
    setActiveLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    setIsZoomed(false);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsZoomed((prev) => !prev);
  };

  const handleMouseMoveZoom = (e) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomOrigin({ x, y });
  };



  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLightboxIndex, project]);

  // If project not found, show elegant OS 404 screen
  if (!project) {
    return (
      <section className="project-cs-page min-vh-100 d-flex align-items-center justify-content-center" style={{ position: "relative", zIndex: 2 }}>
        <div className="project-cs-glow blur-3xl"></div>
        <div className="container text-center py-5">
          <div className="os-window-frame mx-auto" style={{ maxWidth: '500px' }}>
            <div className="os-window-header">
              <div className="os-control-dots">
                <span className="os-dot red" onClick={() => navigate('/projects')}></span>
                <span className="os-dot yellow"></span>
                <span className="os-dot green"></span>
              </div>
              <div className="os-window-title font-mono">FILE_UNRESOLVED.SYS</div>
            </div>
            <div className="os-window-body p-4 text-center">
              <Terminal size={48} className="text-danger mb-3 mx-auto" />
              <h3 className="font-display text-gradient-blue mb-2">ERROR 404: RECORD_UNRESOLVED</h3>
              <p className="text-secondary font-mono text-sm mb-4">
                The requested project case study could not be located in the explorer shell archive.
              </p>
              <Link to="/projects" className="project-cs-back-btn">
                <ArrowLeft size={16} /> RETURN_TO_EXPLORER
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="project-cs-page min-vh-100 py-5 mt-5">
      <div className="project-cs-glow blur-3xl" />
      <div className="project-cs-glow-2 blur-3xl" />

      <Container className="mt-4">
        {/* Back navigation */}
        <div className="project-cs-back-btn-wrapper">
          <Link to="/projects" className="project-cs-back-btn">
            <ArrowLeft size={14} /> BACK_TO_EXPLORER
          </Link>
        </div>

        {/* Case Study Title Header */}
        <header className="project-cs-header">
          <div className="project-cs-category font-mono">
            PROJECT_ID // 0{project.id}
          </div>
          <h1 className="project-cs-title font-display text-gradient-blue">
            {project.title}
          </h1>

          <div className="project-cs-meta">
            <div className="project-cs-meta-item">
              <Cpu size={14} />
              <span>RELEASE_BUILD: V1.0.0</span>
            </div>
            <div className="project-cs-meta-item">
              <Globe size={14} />
              <span>STATUS: PRODUCTION_DEPLOY</span>
            </div>
          </div>
        </header>

        {/* Project Cover Banner (Single Cover Image) */}

        {/* Main Details Panel */}
        <Row className="project-cs-main g-5">
          
          {/* Left Column: Diagnostics Specifications Panel */}
          <Col xs={12} lg={4}>
            <div className="project-cs-specs-panel glass-panel">
              <div className="cs-specs-header font-mono">
                <Terminal size={12} /> SYSTEM_PARAMETERS
              </div>
              <div className="cs-specs-body">
                <div className="cs-specs-title">
                  <Activity size={14} className="text-primary" /> Technical Profile
                </div>
                
                <div className="cs-specs-list font-mono">
                  <div className="cs-spec-row">
                    <span className="cs-spec-lbl">PROJECT NAME:</span>
                    <span className="cs-spec-val">{project.title.toUpperCase()}</span>
                  </div>
                  
                  <div className="cs-spec-row">
                    <span className="cs-spec-lbl">REPOSITORY:</span>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="cs-spec-val cs-spec-link text-decoration-none active-tag"
                    >
                      GITHUB // REPO
                    </a>
                  </div>

                  {project.specs && project.specs
                    .filter(spec => spec.label !== 'RELEASE_MODULE')
                    .map((spec, index) => (
                      <div key={index} className="cs-spec-row">
                        <span className="cs-spec-lbl">{spec.label.replace(/_/g, ' ')}:</span>
                        <span className="cs-spec-val">{spec.value}</span>
                      </div>
                    ))}

                  <div className="cs-spec-row">
                    <span className="cs-spec-lbl">TECH STACK:</span>
                    <div className="cs-spec-tags-grid">
                      {project.tags.map((tag) => (
                        <span key={tag} className="cs-spec-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Case Study Write-ups */}
          <Col xs={12} lg={8}>
            <div className="project-cs-content-panel">
              
              {/* Dynamic Rich Text Case Study Component */}
              <div className="cs-content-block project-case-study-rich-text">
                {project.caseStudyContent}
              </div>

              {/* Project Screenshots Gallery Archive */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="cs-gallery-section mt-5">
                  <h3 className="font-display text-gradient-blue mb-4 uppercase text-sm tracking-wider font-semibold">
                    System Screenshots // Visual Archive
                  </h3>
                  <Row className="g-4 cs-gallery-row">
                    {project.gallery.map((imgUrl, index) => (
                      <Col xs={12} sm={6} key={index} className="cs-gallery-col">
                        <div 
                          className="cs-gallery-item"
                          onClick={() => setActiveLightboxIndex(index)}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${project.title} screenshot ${index + 1}`} 
                            className="cs-gallery-img"
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                            }}
                          />
                          <div className="cs-gallery-overlay">
                            <span>VIEW_FULLSCREEN</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}


              {/* CTA Codebase */}
              <div className="text-center pt-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cs-repo-cta"
                >
                  <Github size={18} /> CLONE_SYSTEM_REPOSITORY
                </a>
              </div>

            </div>
          </Col>
          
        </Row>
      </Container>

      {/* Dynamic Lightbox Modal Viewer */}
      {activeLightboxIndex !== null && project.gallery && (
        <div className="cs-lightbox" onClick={() => { setActiveLightboxIndex(null); setIsZoomed(false); }}>
          <div className="cs-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="cs-lightbox-close font-mono"
              onClick={() => { setActiveLightboxIndex(null); setIsZoomed(false); }}
            >
              <X size={16} /> CLOSE_SHELL
            </button>

            <button 
              className="cs-lightbox-btn prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="cs-lightbox-img-wrapper">
              <img 
                src={project.gallery[activeLightboxIndex]} 
                alt="System preview maximized" 
                className={`cs-lightbox-img ${isZoomed ? 'zoomed' : ''}`}
                onClick={handleImageClick}
                onMouseMove={handleMouseMoveZoom}
                style={{
                  transformOrigin: isZoomed ? `${zoomOrigin.x}% ${zoomOrigin.y}%` : 'center center'
                }}
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>

            <button 
              className="cs-lightbox-btn next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {project.gallery.length > 1 && (
              <div className="cs-lightbox-mobile-controls">
                <button 
                  className="cs-lightbox-mobile-btn prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="cs-lightbox-mobile-counter font-mono">
                  {activeLightboxIndex + 1} / {project.gallery.length}
                </span>
                <button 
                  className="cs-lightbox-mobile-btn next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCaseStudy;
