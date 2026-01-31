import React from "react";
// import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import { ArrowRight, GithubIcon } from "lucide-react";
import '../assets/css/Projects.css';
import { projectsData } from "../data/projectsData";

const projects = projectsData;

export const Projects = () => {
  return (
    <>
      <div className="text-white pt-5" style={{ position: "relative", zIndex: 2 }}>
        <section className="py-5 pt-5" data-bs-theme="dark">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-secondary mb-5 mx-auto" style={{ maxWidth: 600 }}>
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {projects.map((project) => (
              <div key={project.id} className="col">
                <div className="card h-100 bg-dark text-light shadow border-0">
                  <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover", transition: "transform 0.3s ease" }}
                    />
                    {/* Overlay */}
                    <div className="overlay d-flex justify-content-center align-items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm mx-2"
                      >
                        Code <GithubIcon size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge bg-secondary me-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-secondary">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a
              className="btn btn-primary d-inline-flex align-items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Bineesh627"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
        </section>
      </div>
    </>
  );
};