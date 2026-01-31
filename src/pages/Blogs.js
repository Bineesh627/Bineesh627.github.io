import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, X, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState(null);

  const containerRef = useRef(null);

  useEffect(() => {
    // Simulating loading data
    setPosts(blogsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
        const ctx = gsap.context(() => {
            gsap.from('.blog-card', {
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
              },
              opacity: 0,
              y: 50,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out"
            });
          }, containerRef);
      
          return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [posts]);

  // Lock body scroll when modal OR lightbox is open
    useEffect(() => {
        if (selectedPost || lightboxImage) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            if (selectedPost && !lightboxImage) setCurrentImageIndex(0); // Reset index only on modal open
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

  // Lightbox Handlers
  const openLightbox = (imgUrl) => {
      setLightboxImage(imgUrl);
  };

  const closeLightbox = () => {
      setLightboxImage(null);
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
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">Blog & Insights</h2>
          <div className="text-center text-white-50">Loading posts...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      ref={containerRef}
      className="section"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute-bg-orb bg-neon-purple-blur blur-3xl" style={{ top: '20%', left: '-10%' }} />
        <div className="absolute-bg-orb bg-neon-cyan-blur blur-3xl" style={{ bottom: '10%', right: '-10%' }} />
      </div>

      <div className="container-custom">
        <h2 className="section-title">Insights & <span className="text-primary">Blogs</span></h2>

        {/* Categories */}
        <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`category-btn ${selectedCategory === null ? 'active' : 'inactive'}`}
          >
            All Posts
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`category-btn ${selectedCategory === cat ? 'active' : 'inactive'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="row g-4 justify-content-center">
          {filteredPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
                <article
                className="blog-card"
                onClick={() => setSelectedPost(post)}
                style={{ cursor: 'pointer' }}
                >
                <div className="glass-card">
                    {post.cover_image_url && (
                    <div className="card-img-wrapper">
                        <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="card-img"
                        />
                        <div className="card-overlay" />
                        <div className="card-category-badge">
                            {post.category}
                        </div>
                    </div>
                    )}

                    <div className="card-content">
                    <h3 className="card-title">
                        {post.title}
                    </h3>

                    <p className="card-excerpt">
                        {post.excerpt}
                    </p>

                    <div className="card-meta">
                        <div className="meta-item">
                        <Calendar size={14} />
                        <span>{formatDate(post.published_at)}</span>
                        </div>
                        <div className="meta-item">
                        <Clock size={14} />
                        <span>{post.read_time} min</span>
                        </div>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="card-tags">
                        {post.tags.slice(0, 3).map((tag, i) => (
                            <span
                            key={i}
                            className="tag-badge"
                            >
                            #{tag}
                            </span>
                        ))}
                        </div>
                    )}
                    </div>
                </div>
                </article>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPost &&
          createPortal(
            <div
              className="modal-overlay"
              onClick={() => setSelectedPost(null)}
            >
              <div
                className="modal-content-custom"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header Image / Carousel */}
                {selectedPost.images && selectedPost.images.length > 0 ? (
                    <div className="modal-header-img">
                        <div className="carousel-container">
                             <img
                                src={selectedPost.images[currentImageIndex]}
                                alt={`${selectedPost.title} slide ${currentImageIndex + 1}`}
                                className="modal-img carousel-img cursor-zoom-in"
                                onClick={() => openLightbox(selectedPost.images[currentImageIndex])}
                            />
                            {selectedPost.images.length > 1 && (
                                <>
                                    <button className="carousel-btn prev" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button className="carousel-btn next" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
                                        <ChevronRight size={24} />
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
                         {/* pointer-events-none so click goes to image */}
                    </div>
                ) : (
                    selectedPost.cover_image_url && (
                        <div className="modal-header-img">
                            <img
                            src={selectedPost.cover_image_url}
                            alt={selectedPost.title}
                            className="modal-img cursor-zoom-in"
                            onClick={() => openLightbox(selectedPost.cover_image_url)}
                            />
                            <div className="modal-img-overlay pointer-events-none" />
                        </div>
                    )
                )}

                <div className="modal-body">
                  <div className="modal-top-bar">
                    <div className="flex-grow-1">
                      <span className="modal-category">
                        {selectedPost.category}
                      </span>
                      <h2 className="modal-title">
                        {selectedPost.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="modal-close-btn"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="modal-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{formatDate(selectedPost.published_at)}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>{selectedPost.read_time} min read</span>
                    </div>
                  </div>

                  <div className="modal-prose">
                    <div className="prose-content">
                      {selectedPost.content}
                    </div>
                  </div>

                  {selectedPost.tags && selectedPost.tags.length > 0 && (
                    <div className="modal-tags">
                      <Tag size={16} className="tag-icon" />
                      {selectedPost.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="modal-tag-bg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>,
            document.body
          )}
          
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
    </section>
  );
};
