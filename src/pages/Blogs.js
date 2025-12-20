import React, { useState, useEffect } from "react";
import '../assets/css/Blogs.css';
import { ArrowRight } from "react-bootstrap-icons";
import { Tag, Calendar, User, Share2 } from "lucide-react";
import InnovativeThinkerAward from "../assets/img/blogs/InnovativeThinkerAward.jpg";
import { SpaceBackground } from '../components/SpaceBackground';

const projects = [
  {
    id: 1,
    title: "Innovative Thinker Award",
    date: "January 29, 2025",
    readingTime: "2 min",
    category: "Innovative thinker",
    description:
      "Honored to receive the Dr. C.V. Raman Foundation Award as an Innovative Thinker and Person. This recognition inspires me to continue exploring research, innovation, and problem-solving, while pursuing my ambition to become an entrepreneur in the field of Artificial Intelligence.",
    image: InnovativeThinkerAward,
    url: "https://medium.com/@bineeshs/honored-innovative-thinker-award-654af179e124",
    author: "Bineesh",
    link: "https://medium.com/@bineeshs/honored-innovative-thinker-award-654af179e124"
  },
];

export const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [defaultCount, setDefaultCount] = useState(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 992) {
        setVisibleCount(3);
        setDefaultCount(3);
      } else {
        setVisibleCount(6);
        setDefaultCount(6);
      }
      setIsExpanded(false);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const toggleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(defaultCount); // Show less
    } else {
      setVisibleCount(projects.length); // Show all
    }
    setIsExpanded(!isExpanded);
  };

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <>
      <div className="text-white min-vh-100 pt-2" style={{ position: "relative", zIndex: 2 }}>
        <section className="py-5 mt-5" data-bs-theme="dark">
          <div className="container">
            <h2 className="display-5 fw-bold text-center mb-4">
              Insights & <span className="text-primary">Blogs</span>
            </h2>
            <p
              className="text-center text-secondary mb-5 mx-auto"
              style={{ maxWidth: 600 }}
            >
              Where innovation is imagined, refined, and shared
            </p>

            <div className="row g-4 justify-content-center">
              {visibleProjects.map((blog) => (
                <div key={blog.id} className="col-12 col-md-6 col-lg-4">
                  <div className="blog-card h-100">
                    <div className="blog-img-wrapper">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="blog-img"
                      />
                      <span className="category-badge">
                        <Tag size={12} className="me-1" />
                        {blog.category}
                      </span>
                    </div>
                    
                    <div className="blog-content">
                      <div className="blog-meta mb-3">
                        <span className="meta-item">
                          <Calendar size={14} className="me-1" />
                          {blog.date}
                        </span>
                        <span className="meta-dot">•</span>
                        <span className="meta-item">
                          {blog.readingTime}
                        </span>
                      </div>

                      <h3 className="blog-title">{blog.title}</h3>
                      <p className="blog-excerpt">{blog.description}</p>

                      <div className="blog-footer mt-auto">
                        <div className="author-info">
                            <User size={14} className="me-1 text-secondary-custom" />
                            <span className="author-name">{blog.author}</span>
                        </div>
                        <div className="action-buttons">
                            <button className="share-btn">
                                <Share2 size={16} />
                            </button>
                            <a href={blog.url} className="continue-btn" target="_blank" rel="noopener noreferrer">
                                Read More <ArrowRight size={16} className="ms-1" />
                            </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {projects.length > defaultCount && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-light"
                  onClick={toggleShowMore}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};