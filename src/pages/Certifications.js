import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { X, ZoomIn, Calendar, Award, HardDrive } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../assets/css/Certifications.css";
import { certificationsData } from "../data/certificationsData";
import { Metadata } from "../components/Metadata";
import { pagesMetadata } from "../data/metadata";

export const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterCategories = [
    { key: "all", label: "ALL" },
    { key: "Featured", label: "FEATURED" },
    { key: "AI", label: "AI" },
    { key: "Security", label: "SECURITY" },
    { key: "Cloud", label: "CLOUD" },
    { key: "Design", label: "DESIGN" },
    { key: "Soft", label: "SOFT" },
    { key: "Competition", label: "COMPETITION" }
  ];

  const filteredCertifications = selectedFilter === "all"
    ? certificationsData
    : certificationsData.filter((cert) => cert.categories?.includes(selectedFilter));

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [lightboxImage]);

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
    <div className="certifications-page min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <Metadata {...pagesMetadata.certifications} />
      <div className="certs-glow blur-3xl"></div>

      <section className="py-5 mt-5">
        <Container className="mt-5">
          {/* Section Header */}
          <div className="os-section-header">
            <h2 className="os-section-title">
              Professional <span className="text-gradient-blue">Credentials</span>
            </h2>
            <p className="os-section-subtitle">Verified academic achievements and developer certifications</p>
            <div className="os-separator"></div>
          </div>

          {/* Filter tabs */}
          <div className="certs-os-tabs d-flex justify-content-center flex-wrap mb-4 gap-2">
            {filterCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                className={`certs-os-tab-btn font-mono ${selectedFilter === category.key ? 'active' : ''}`}
                onClick={() => setSelectedFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>


          {/* OS Window Frame */}
          <div className="os-window-frame mt-5">
            <div className="os-window-header">
              <div className="os-control-dots">
                <span className="os-dot red"></span>
                <span className="os-dot yellow"></span>
                <span className="os-dot green"></span>
              </div>
              <div className="os-window-title">RECORDS_SHELL // verified_credentials</div>
              <HardDrive size={14} className="text-secondary" />
            </div>

            <div className="os-window-body p-4" style={{ background: "transparent" }}>
              <Row className="g-4">
                {filteredCertifications.map((cert) => (
                  <Col key={cert.id} xs={12} md={6} lg={4} className="voxel-cell-perspective">
                    <div
                      className="cert-os-card spotlight-card h-100"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Image Viewer Container */}
                      <div 
                        className="cert-os-image-wrapper" 
                        onClick={() => openLightbox(cert.image)}
                        style={{ cursor: 'pointer' }}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="cert-os-img"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                        <div className="cert-os-overlay d-flex flex-column align-items-center justify-content-center">
                          <ZoomIn size={24} className="mb-2 text-white" />
                          <span className="click-zoom-lbl font-mono text-xs">VIEW_DOCUMENT</span>
                        </div>
                      </div>

                      {/* Detail Body */}
                      <div className="cert-os-card-body mt-3">
                        <div className="cert-os-issuer-row font-mono text-xs d-flex align-items-center mb-2">
                          <Award size={12} className="text-primary me-2" />
                          <span className="text-gradient-green font-weight-bold">{cert.issuer.toUpperCase()}</span>
                        </div>
                        <h3 className="cert-os-title font-display text-gradient-blue">{cert.title}</h3>
                        {cert.certificateId && <p className="cert-os-id font-mono text-xs">ID: {cert.certificateId}</p>}
                        <p className="cert-os-desc">{cert.description}</p>
                        
                        <div className="cert-os-footer font-mono text-xs mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center">
                          <Calendar size={12} className="me-2 text-primary" />
                          <span>DATE: {cert.completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal overlay */}
      {lightboxImage && 
        createPortal(
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close lightbox">
              <X size={24} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                centerOnInit={true}
              >
                <TransformComponent wrapperClass="lightbox-transform-wrapper" contentClass="lightbox-transform-content">
                  <img 
                    src={lightboxImage} 
                    alt="Certificate document full screen view" 
                    className="lightbox-img"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>,
          document.body
        )
      }
    </div>
  );
};
export default Certifications;
