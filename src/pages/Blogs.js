import React, { useState, useEffect } from "react";
import { FaShareAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ArrowRight } from "react-bootstrap-icons";
import InnovativeThinkerAward from "../assets/img/blogs/InnovativeThinkerAward.jpg";

const projects = [
  {
    id: 1,
    title: "Innovative Thinker Award",
    date: "January 29, 2025",
    readingTime: "2 min",
    topic: "Innovative thinker",
    description:
      "Honored to receive the Dr. C.V. Raman Foundation Award as an Innovative Thinker and Person. This recognition inspires me to continue exploring research, innovation, and problem-solving, while pursuing my ambition to become an entrepreneur in the field of Artificial Intelligence.",
    images: [InnovativeThinkerAward],
    url: "https://medium.com/@bineeshs/honored-innovative-thinker-award-654af179e124",
  },
];

export const Blogs = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentIndexes, setCurrentIndexes] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {})
  );

  // New: Show More/Show Less logic
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

  const handleShare = (project) => {
    if (navigator.share) {
      navigator
        .share({
          title: project.title,
          text: project.description,
          url: project.url,
        })
        .catch(console.error);
    } else {
      window.prompt("Copy link to share:", project.url);
    }
  };

  const handlePrevImage = (id, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? total - 1 : prev[id] - 1,
    }));
  };

  const handleNextImage = (id, total) => {
    setCurrentIndexes((prev) => ({
      ...prev,
      [id]: prev[id] === total - 1 ? 0 : prev[id] + 1,
    }));
  };

  return (
    <div className="bg-black text-white min-vh-100 pt-2"> 
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

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.slice(0, visibleCount).map((project) => (
              <div key={project.id} className="col">
                <div
                  className="card h-100 bg-dark text-light shadow-lg border-0 rounded-4 overflow-hidden"
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      hoveredId === project.id
                        ? "translateY(-8px)"
                        : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Carousel */}
                  <div className="position-relative overflow-hidden">
                    <img
                      src={project.images[currentIndexes[project.id]]}
                      alt={project.title}
                      className="card-img-top"
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        transition: "opacity 0.4s ease",
                      }}
                    />
                    <button
                      className="arrow-btn position-absolute top-50 start-0 translate-middle-y"
                      onClick={() =>
                        handlePrevImage(project.id, project.images.length)
                      }
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      className="arrow-btn position-absolute top-50 end-0 translate-middle-y"
                      onClick={() =>
                        handleNextImage(project.id, project.images.length)
                      }
                    >
                      <FaChevronRight />
                    </button>
                    <span className="position-absolute top-0 start-0 m-2 badge bg-primary">
                      {project.topic}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="badge bg-secondary me-2">
                        {project.date}
                      </span>
                      <span className="badge bg-info text-dark">
                        {project.readingTime} read
                      </span>
                    </div>
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-secondary small">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer with Premium Buttons */}
                  <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm fw-bold continue-btn"
                    >
                      Continue Reading <ArrowRight size={16} />
                    </a>
                    <button
                      className="share-btn"
                      onClick={() => handleShare(project)}
                      aria-label={`Share ${project.title}`}
                    >
                      <FaShareAlt size={18} />
                    </button>
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
  );
};