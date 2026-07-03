import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, X, Tag, ChevronLeft, ChevronRight, HardDrive, FileText } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import '../assets/css/Blogs.css';
import { blogsData } from '../data/blogsData';

gsap.registerPlugin(ScrollTrigger);

export const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    setPosts(blogsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.from('.blog-card-wrapper', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 40,
          stagger: 0.08,
          duration: 0.6,
          ease: "power2.out"
        });
      }, containerRef.current);
      
      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [posts]);

  useEffect(() => {
    if (selectedPost || lightboxImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (selectedPost && !lightboxImage) setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [selectedPost, lightboxImage]);

  const handleNextImage = () => {
    if (!selectedPost || !selectedPost.images) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedPost.images.length);
  };

  const handlePrevImage = () => {
    if (!selectedPost || !selectedPost.images) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedPost.images.length) % selectedPost.images.length);
  };

  const openLightbox = (imgUrl) => {
    setLightboxImage(imgUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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

  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const filteredPosts = selectedCategory
    ? posts.filter((p) => p.category === selectedCategory)
    : posts;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <section className="blogs-page min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center text-white-50 font-mono">LOADING_INSIGHTS_DB...</div>
      </section>
    );
  }

  return (
    <div className="blogs-page min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <div className="blogs-glow blur-3xl"></div>

      <section id="blog" ref={containerRef} className="py-5 mt-5">
        <div className="container mt-5">
          {/* Section Header */}
          <div className="os-section-header">
            <h2 className="os-section-title">
              Insights & Technical <span className="text-gradient-blue">Blogs</span>
            </h2>
            <p className="os-section-subtitle">Articles on tech architecture, software engineering, and business models</p>
            <div className="os-separator"></div>
          </div>

          {/* Category tabs */}
          <div className="skills-os-tabs d-flex justify-content-center flex-wrap mb-5 gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`skills-os-tab-btn font-mono ${selectedCategory === null ? 'active' : ''}`}
            >
              ALL_POSTS
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`skills-os-tab-btn font-mono ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="row g-4 justify-content-center">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-12 col-md-6 col-lg-4 blog-card-wrapper">
                <article
                  className="blog-os-card spotlight-card h-100"
                  onClick={() => setSelectedPost(post)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Tab header */}
                  <div className="blog-os-header font-mono text-xs d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-25 pb-2">
                    <span className="d-flex align-items-center"><FileText size={12} className="me-1 text-primary" /> ARTICLE_LOG</span>
                    <span className="text-gradient-green">{post.category.toUpperCase()}</span>
                  </div>

                  {post.cover_image_url && (
                    <div className="blog-os-img-wrapper">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="blog-os-img"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <div className="blog-os-overlay" />
                    </div>
                  )}

                  <div className="blog-os-content mt-3">
                    <h3 className="blog-os-title font-display text-gradient-blue">
                      {post.title}
                    </h3>
                    <p className="blog-os-excerpt">
                      {post.excerpt}
                    </p>

                    <div className="blog-os-meta font-mono text-xs mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Calendar size={12} className="text-primary me-2" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <Clock size={12} className="text-primary me-2" />
                        <span>{post.read_time} MIN</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Details Dialog Popup */}
          {selectedPost &&
            createPortal(
              <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
                <div className="modal-os-content os-window-frame" onClick={(e) => e.stopPropagation()}>
                  <div className="os-window-header">
                    <div className="os-control-dots">
                      <span className="os-dot red" onClick={() => setSelectedPost(null)}></span>
                      <span className="os-dot yellow"></span>
                      <span className="os-dot green"></span>
                    </div>
                    <div className="os-window-title">DATABASE_VIEWER // {selectedPost.title.substring(0, 20)}...</div>
                    <HardDrive size={14} className="text-secondary" />
                  </div>

                  <div className="os-window-body p-0">
                    {/* Header Image cover */}
                    {selectedPost.images && selectedPost.images.length > 0 ? (
                      <div className="modal-header-img">
                        <div className="carousel-container">
                          <img
                            src={selectedPost.images[currentImageIndex]}
                            alt={`${selectedPost.title} slide ${currentImageIndex + 1}`}
                            className="modal-img carousel-img cursor-zoom-in"
                            onClick={() => openLightbox(selectedPost.images[currentImageIndex])}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
                            }}
                          />
                          {selectedPost.images.length > 1 && (
                            <>
                              <button className="carousel-btn prev" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} aria-label="Previous image">
                                <ChevronLeft size={20} />
                              </button>
                              <button className="carousel-btn next" onClick={(e) => { e.stopPropagation(); handleNextImage(); }} aria-label="Next image">
                                <ChevronRight size={20} />
                              </button>
                              <div className="carousel-indicators">
                                {selectedPost.images.map((_, idx) => (
                                  <span 
                                    key={idx} 
                                    className={`carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCurrentImageIndex(idx);
                                    }}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        <div className="modal-img-overlay pointer-events-none" /> 
                      </div>
                    ) : (
                      selectedPost.cover_image_url && (
                        <div className="modal-header-img">
                          <img
                            src={selectedPost.cover_image_url}
                            alt={selectedPost.title}
                            className="modal-img cursor-zoom-in"
                            onClick={() => openLightbox(selectedPost.cover_image_url)}
                            onError={(e) => {
                              e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
                            }}
                          />
                          <div className="modal-img-overlay pointer-events-none" />
                        </div>
                      )
                    )}

                    {/* Content Detail Body */}
                    <div className="modal-body-content p-4">
                      <div className="modal-top-bar d-flex justify-content-between align-items-start border-bottom border-secondary border-opacity-25 pb-3 mb-4">
                        <div>
                          <span className="modal-category font-mono text-xs text-gradient-green">
                            {selectedPost.category.toUpperCase()}
                          </span>
                          <h2 className="modal-title font-display text-gradient-blue mt-2 mb-0">
                            {selectedPost.title}
                          </h2>
                        </div>
                        <button
                          onClick={() => setSelectedPost(null)}
                          className="modal-close-btn"
                          aria-label="Close modal"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="modal-meta-details font-mono text-xs d-flex align-items-center mb-4">
                        <div className="meta-item-detail">
                          <Calendar size={14} className="text-primary me-2" />
                          <span>DATE: {formatDate(selectedPost.published_at)}</span>
                        </div>
                        <div className="meta-item-detail ms-4">
                          <Clock size={14} className="text-primary me-2" />
                          <span>LOAD_TIME: {selectedPost.read_time} MIN</span>
                        </div>
                      </div>

                      <div className="modal-prose-content font-sans">
                        <div className="prose-body-text text-secondary">
                          {selectedPost.content}
                        </div>
                      </div>

                      {selectedPost.tags && selectedPost.tags.length > 0 && (
                        <div className="modal-tags-list mt-4 pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center flex-wrap gap-2">
                          <Tag size={14} className="tag-icon me-2 text-primary" />
                          {selectedPost.tags.map((tag, i) => (
                            <span key={i} className="modal-tag-pill font-mono text-xs">
                              #{tag.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>,
              document.body
            )}
          
          {/* Lightbox modal overlay */}
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
                        alt="Zoomed full screen article asset" 
                        className="lightbox-img"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
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
      </section>
    </div>
  );
};
export default Blogs;
