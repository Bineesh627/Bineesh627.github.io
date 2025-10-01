import React from "react";
import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react";
import '../assets/css/Projects.css';
import projImg1 from "../assets/img/projects/project-img1.png";
import projImg2 from "../assets/img/projects/project-img2.png";
import projImg3 from "../assets/img/projects/project-img3.png";
import projImg4 from "../assets/img/projects/project-img4.png";

const projects = [
  {
    id: 1,
    title: "Rag Chatbot",
    description: "Developed a college chatbot leveraging Retrieval-Augmented Generation (RAG) in collaboration with the principal. The system employs intelligent agents to extract information from the college website and PDF documents, all managed through a dedicated admin panel for seamless operation.",
    image: projImg1,
    tags: ["Python", "Bootstrap", "Django", "Langchain", "HTML", "CSS", "Javascript", "Numpy"],
    demoUrl: "#projects",
    githubUrl: "https://github.com/Bineesh627/college_chatbot",
  },
  {
    id: 2,
    title: "Culinary Community & Sharing Platform ",
    description: "Join a vibrant community of food lovers on RecipeRave! Follow your favorite home cooks and culinary creators, explore a diverse collection of recipes, and share your own delicious creations with the world, just like your favorite photo-sharing platform.",
    image: projImg2,
    tags: ["Python", "Django", "HTML", "CSS", "Javascript", "Bootstrap"],
    demoUrl: "#projects",
    githubUrl: "https://github.com/Bineesh627/reciperave",
  },
  {
    id: 3,
    title: "MobileInfoga",
    description: "MobileInfoGa is a powerful OSINT tool designed to gather comprehensive details about phone numbers. Utilizing various techniques and integrations, it can retrieve information such as country of origin, carrier details, and potential online associations.",
    image: projImg3,
    tags: ["Python", "Telethon", "Phonenumbers"],
    demoUrl: "#projects",
    githubUrl: "https://github.com/Bineesh627/MobileInfoga",
  },
  {
    id: 4,
    title: "OpenSS7",
    description: "Recreating the OpenSS7 website design involves building a structurally sound and information-focused clone emphasizing clear navigation and logical presentation of technical content.",
    image: projImg4,
    tags: ["HTML", "CSS"],
    demoUrl: "#projects",
    githubUrl: "https://github.com/Bineesh627/openss7",
  },
];

export const Projects = () => {
  return (
    <div className="starry-background">
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
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm mx-2"
                      >
                        Demo <ExternalLink size={16} />
                      </a>
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
    </div>
  );
};