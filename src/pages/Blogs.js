import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, FileText } from 'lucide-react';
import '../assets/css/Blogs.css';
import { blogsData } from '../data/blogsData';
import { Metadata } from '../components/Metadata';
import { pagesMetadata } from '../data/metadata';

gsap.registerPlugin(ScrollTrigger);

export const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

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
        <Metadata
          title="Loading Blogs"
          description="Loading blog database."
        />
        <div className="text-center text-white-50 font-mono">LOADING_INSIGHTS_DB...</div>
      </section>
    );
  }

  return (
    <div className="blogs-page min-vh-100" style={{ position: "relative", zIndex: 2 }}>
      <Metadata {...pagesMetadata.blogs} />
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
                  onClick={() => navigate(`/blogs/${post.slug}`)}
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
        </div>
      </section>
    </div>
  );
};
export default Blogs;
