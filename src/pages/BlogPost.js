import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Tag, Check, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { blogsData } from '../data/blogsData';
import '../assets/css/BlogPost.css';

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find matching blog post
  const post = blogsData.find((p) => p.slug === slug);

  // States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Handle Reading Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Entry Animations
  useEffect(() => {
    if (!post) return;
    
    // Reset view position
    window.scrollTo({ top: 0, behavior: 'instant' });

    const ctx = gsap.context(() => {
      // Clean hero animation
      gsap.from('.blog-post-hero-anim', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      });
      // Cover image zoom-in fade
      gsap.from('.blog-post-cover-wrapper', {
        opacity: 0,
        scale: 0.96,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
      });
      // Main text fade
      gsap.from('.blog-post-layout-anim', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, [post]);

  // If blog post not found, show elegant 404 OS screen
  if (!post) {
    return (
      <section className="blogs-page min-vh-100 d-flex align-items-center justify-content-center" style={{ position: "relative", zIndex: 2 }}>
        <div className="blogs-glow blur-3xl"></div>
        <div className="container text-center py-5">
          <div className="os-window-frame mx-auto" style={{ maxWidth: '500px' }}>
            <div className="os-window-header">
              <div className="os-control-dots">
                <span className="os-dot red" onClick={() => navigate('/blogs')}></span>
                <span className="os-dot yellow"></span>
                <span className="os-dot green"></span>
              </div>
              <div className="os-window-title font-mono">FILE_NOT_FOUND.SYS</div>
            </div>
            <div className="os-window-body p-4 text-center">
              <Terminal size={48} className="text-danger mb-3 mx-auto" />
              <h3 className="font-display text-gradient-blue mb-2">ERROR 404: BLOG_POST_UNRESOLVED</h3>
              <p className="text-secondary font-mono text-sm mb-4">
                The requested blog resource could not be found or loaded from the technical insights database index.
              </p>
              <Link to="/blogs" className="blog-back-btn">
                <ArrowLeft size={16} /> RETURN_TO_DATABASE
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Handle Share URL Copy
  const handleShareClick = () => {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl)
      .then(() => {
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 3000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Find related articles (excluding the current one)
  const relatedPosts = blogsData
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="blog-post-page min-vh-100 py-5 mt-5">
      {/* Top scroll-dependent progress indicator */}
      <div className="reading-progress-container">
        <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="blog-post-glow blur-3xl" />
      <div className="blog-post-glow-2 blur-3xl" />

      <div className="container mt-4">
        {/* Navigation back */}
        <div className="back-btn-wrapper blog-post-hero-anim">
          <Link to="/blogs" className="blog-back-btn font-mono">
            <ArrowLeft size={14} /> BACK_TO_DATABASE
          </Link>
        </div>

        {/* Hero details */}
        <header className="blog-post-hero">
          <div className="blog-post-category font-mono blog-post-hero-anim">
            {post.category.toUpperCase()}
          </div>
          <h1 className="blog-post-title font-display blog-post-hero-anim">
            {post.title}
          </h1>

          <div className="blog-post-meta font-mono blog-post-hero-anim">
            <div className="blog-post-meta-item">
              <Calendar size={14} className="text-primary" />
              <span>{formatDate(post.published_at)}</span>
            </div>
            <div className="blog-post-meta-item">
              <Clock size={14} className="text-primary" />
              <span>{post.read_time} MIN READ</span>
            </div>
          </div>
        </header>

        {/* Big Featured Cover Image */}
        {post.cover_image_url && (
          <div className="blog-post-cover-wrapper mb-5">
            <img
              src={post.cover_image_url}
              alt={post.title}
              className="blog-post-cover cursor-zoom-in"
              onClick={() => setLightboxImage(post.cover_image_url)}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            <div className="blog-post-cover-overlay" />
          </div>
        )}

        {/* Main Reading column */}
        <div className="blog-post-layout blog-post-layout-anim">
          <article className="blog-post-content-column">
            <div className="blog-post-body font-sans">
              {post.content}
            </div>

            {/* Post Tags list */}
            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-tags mb-4">
                <Tag size={14} className="text-primary me-1" />
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="blog-post-tag-pill">
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>
            )}

            {/* Share Article Section at the bottom */}
            <div className="blog-post-share-footer mt-5 pt-4 d-flex flex-column align-items-center gap-3">
              <span className="font-mono text-xs text-secondary">SHARE_THIS_ARTICLE</span>
              <button
                onClick={handleShareClick}
                className="share-footer-btn"
                title="Copy share link"
                aria-label="Copy share link"
              >
                <Share2 size={16} /> COPY_LINK
              </button>
            </div>
          </article>
        </div>

        {/* Share notification toast */}
        {showShareToast && (
          <div className="share-toast">
            <Check size={16} /> URL_COPIED_TO_CLIPBOARD
          </div>
        )}

        {/* Related insights grid */}
        {relatedPosts.length > 0 && (
          <section className="related-posts-section">
            <h3 className="related-section-title font-display text-gradient-blue">
              Keep Reading
            </h3>
            <div className="related-grid row g-4 justify-content-center">
              {relatedPosts.map((rPost) => (
                <div key={rPost.id} className="col-12 col-md-6 col-lg-5">
                  <article className="blog-os-card h-100">
                    <div className="blog-os-header font-mono text-xs d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-25 pb-2">
                      <span className="d-flex align-items-center">
                        <Terminal size={12} className="me-1 text-primary" /> RELATED_LOG
                      </span>
                      <span className="text-gradient-green">{rPost.category.toUpperCase()}</span>
                    </div>

                    <div className="blog-os-content d-flex flex-column h-100">
                      <h4 className="blog-os-title font-display text-gradient-blue mb-2">
                        {rPost.title}
                      </h4>
                      <p className="blog-os-excerpt mb-4">
                        {rPost.excerpt}
                      </p>
                      
                      <div className="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25">
                        <span className="font-mono text-xs text-secondary">{formatDate(rPost.published_at)}</span>
                        <Link to={`/blogs/${rPost.slug}`} className="blog-back-btn py-1 px-3 text-xs font-mono">
                          READ_POST
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox for zooming images */}
      {lightboxImage && (
        <div className="post-lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="post-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="post-lightbox-close" onClick={() => setLightboxImage(null)}>
              &times;
            </button>
            <img
              src={lightboxImage}
              alt="Zoomed Asset"
              className="post-lightbox-img"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogPost;
