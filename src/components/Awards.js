import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Award, BookOpen, ArrowRight, Activity, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import '../assets/css/Awards.css';

// Import images
import InnovativeThinkerAward from '../assets/img/blogs/InnovativeThinkerAward.jpg';
import karateBlackbelt from '../assets/img/blogs/karate_blackbelt.png';
import karateAward from '../assets/img/blogs/karate_award.png';
import karateCertificate from '../assets/img/blogs/karate_certificate.png';

// Automatic slide cycler sub-component for image slideshows
const AwardImageCycler = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // cycle every 4 seconds
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="award-slideshow-container">
      {images.map((img, idx) => (
        <div key={idx} className={`award-slide ${idx === currentIndex ? 'active' : ''}`}>
          <img 
            src={img} 
            alt={`${title} Preview ${idx + 1}`} 
            className="award-slide-img" 
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600";
            }}
          />
        </div>
      ))}
      <div className="award-slide-overlay"></div>
      
      {/* Visual slide dots */}
      {images.length > 1 && (
        <div className="slideshow-dots">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`slide-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Awards = () => {
  const [activeAwardIndex, setActiveAwardIndex] = useState(0);

  const awardsData = [
    {
      id: 'award-1',
      title: 'Dr. C.V. Raman Foundation Award',
      subtitle: 'Recognized for Innovation & Analytical Thinking',
      category: 'Honor // Innovation Core',
      serial: 'RECORD_ID // CVR-2025-01',
      description: 'Awarded the prestigious Innovative Thinker honor by the Dr. C.V. Raman Foundation. Presented by Ramesh Chennithala, MLA and former Home Minister of Kerala. Earning this award fuels my entrepreneurial vision to develop Artificial Intelligence technologies that make a positive societal impact.',
      images: [InnovativeThinkerAward],
      slug: 'dr-cv-raman-award',
      specs: [
        { label: 'DATE_STAMP', value: 'Jan 29, 2025' },
        { label: 'PRESENTER', value: 'R. Chennithala' },
        { label: 'AUTHORITY', value: 'CV Raman Fdn.' },
        { label: 'DISTINCTION', value: 'Innovative Thinker' }
      ]
    },
    {
      id: 'award-2',
      title: 'Sho Dan (1st Dan) Black Belt',
      subtitle: 'Milestone in Traditional Karate-Do Martial Arts',
      category: 'Martial Arts // Discipline',
      serial: 'RECORD_ID // KRT-2019-12',
      description: 'Successfully advanced to the Sho Dan grade under Focus Sports Karate Club, affiliated with GI Toku Kai Karate Do Kerala. Earning the black belt represents years of consistent practice and builds lifelong values of discipline, composure, and resilience.',
      images: [karateBlackbelt, karateAward, karateCertificate],
      slug: 'karate-blackbelt-milestone',
      specs: [
        { label: 'DATE_STAMP', value: 'Dec 29, 2019' },
        { label: 'DOJO_CLUB', value: 'Focus Sports' },
        { label: 'AFFILIATION', value: 'GI Toku Kai' },
        { label: 'DAN_RANK', value: 'Sho Dan (1st Dan)' }
      ]
    }
  ];

  const handlePrev = () => {
    if (activeAwardIndex > 0) {
      setActiveAwardIndex(activeAwardIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeAwardIndex < awardsData.length - 1) {
      setActiveAwardIndex(activeAwardIndex + 1);
    }
  };

  const getCardClass = (index) => {
    if (index === activeAwardIndex) {
      return 'award-card-center';
    } else if (index === activeAwardIndex - 1) {
      return 'award-card-left';
    } else if (index === activeAwardIndex + 1) {
      return 'award-card-right';
    }
    return 'award-card-out';
  };

  const handleCardClick = (index) => {
    if (index === activeAwardIndex - 1) {
      handlePrev();
    } else if (index === activeAwardIndex + 1) {
      handleNext();
    }
  };

  return (
    <section className="awards-os" id="awards">
      <div className="awards-glow blur-3xl"></div>
      <div className="awards-glow-2 blur-3xl"></div>
      
      <Container style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Honors & <span className="text-gradient-blue">Awards</span>
          </h2>
          <p className="os-section-subtitle">Milestones of distinction, martial discipline & innovation</p>
          <div className="os-separator"></div>
        </div>

        {/* Custom Telemetry Horizontal Controls */}
        <div className="awards-slider-controls">
          <button 
            className="awards-control-btn font-mono" 
            onClick={handlePrev}
            disabled={activeAwardIndex === 0}
          >
            <ChevronLeft size={16} /> PREV_REC
          </button>
          
          <div className="awards-status-text font-mono">
            RECORD: 0{activeAwardIndex + 1} / 0{awardsData.length}
          </div>
          
          <button 
            className="awards-control-btn font-mono" 
            onClick={handleNext}
            disabled={activeAwardIndex === awardsData.length - 1}
          >
            NEXT_REC <ChevronRight size={16} />
          </button>
        </div>

        {/* 3-Card Slider Frame */}
        <div className="awards-slider-frame">
          {awardsData.map((award, index) => {
            const cardClass = getCardClass(index);
            return (
              <div 
                key={award.id} 
                className={`award-slide-wrapper ${cardClass}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="award-console-card spotlight-card">
                  
                  {/* Left Pane: Image / Certificate Preview */}
                  <div className="award-preview-pane">
                    {/* HUD corners */}
                    <div className="hud-corner top-left"></div>
                    <div className="hud-corner top-right"></div>
                    <div className="hud-corner bottom-left"></div>
                    <div className="hud-corner bottom-right"></div>

                    <div className="preview-hud-header font-mono">
                      <span className="hud-lens-tag">
                        <Cpu size={12} className="animate-pulse" /> PREVIEW_MONITOR
                      </span>
                      <span>{award.images.length > 1 ? `AUTO_CYCLE: ${award.images.length} FRAMES` : 'STATIC_FRAME'}</span>
                    </div>

                    <div className="preview-sweep-line"></div>

                    {/* Slideshow element */}
                    <AwardImageCycler images={award.images} title={award.title} />
                  </div>

                  {/* Right Pane: System Details */}
                  <div className="award-details-pane">
                    <div>
                      {/* Header bar */}
                      <div className="award-cat-row">
                        <span className="award-system-category">{award.category}</span>
                        <span className="award-verified-ticker">
                          <Award size={12} className="text-success" /> VERIFIED_RECORD
                        </span>
                      </div>

                      <h3 className="award-main-title font-display text-gradient-blue">{award.title}</h3>
                      
                      {/* Diagnostic decrypt block */}
                      <div className="award-decrypted-terminal">
                        <div className="terminal-header font-mono">
                          <Activity size={12} className="text-primary" /> SYSTEM_DECRYPT_LOG // OVERVIEW
                        </div>
                        <p className="terminal-log-body">
                          {award.description}
                        </p>
                      </div>

                      {/* Metadata Parameter Fields */}
                      <div className="award-parameter-grid">
                        {award.specs.map((spec, idx) => (
                          <div key={idx} className="parameter-cell">
                            <Activity size={10} />
                            <div>
                              <span className="param-title">{spec.label}:</span>{' '}
                              <span className="param-val">{spec.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Read More button */}
                    <div>
                      <Link to={`/blogs/${award.slug}`} className="btn-console-access">
                        <BookOpen size={14} /> ACCESS_RECORD // FULL_REPORT <ArrowRight size={14} className="ms-1" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Awards;
