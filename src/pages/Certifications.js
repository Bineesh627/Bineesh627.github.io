import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { X } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../assets/css/Certifications.css";
import { certificationsData } from "../data/certificationsData";


const certifications = certificationsData;


export const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

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

  return (
    <>
    <div className="text-white min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <section className="certifications-section">
        <Container>
          <div className="certifications-header">
            <h2 className="certifications-title">
              My <span className="text-accent">Certifications</span>
            </h2>
            <p className="certifications-subtitle">
              Professional credentials and achievements
            </p>
            <div className="decorative-line"></div>
          </div>

          {/* Use Bootstrap gutters for spacing */}
          <Row className="g-4 certifications-grid">
            {certifications.map((cert, index) => (
              <Col key={cert.id} xs={12} md={6} lg={4} className="certification-col">
                <div
                  className="certification-card h-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="cert-image-container" 
                    onClick={() => openLightbox(cert.image)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cert-overlay">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="click-to-zoom-hint" style={{
                           position: 'absolute', 
                           top: '50%', 
                           left: '50%', 
                           transform: 'translate(-50%, -50%)', 
                           color: '#fff', 
                           background: 'rgba(0,0,0,0.6)', 
                           padding: '8px 16px', 
                           borderRadius: '20px',
                           fontSize: '0.8rem',
                           pointerEvents: 'none'
                      }}>
                          Click to View
                      </span>
                    </div>
                  </div>

                  <div className="cert-details">
                    <h3 className="cert-title">{cert.title}</h3>
                    {cert.certificateId && <p className="cert-id">ID: {cert.certificateId}</p>}
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-footer">
                      <span className="cert-date">Completed: {cert.completionDate}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lightbox Portal */}
      {lightboxImage && 
            createPortal(
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close-btn" onClick={closeLightbox}>
                        <X size={32} />
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
                                    alt="Full screen view" 
                                    className="lightbox-img"
                                />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>,
                document.body
            )
          }
    </div>
    </>
  );
};
