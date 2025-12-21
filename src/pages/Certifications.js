import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/Certifications.css";
import EEHCertificate from "../assets/img/certifications/EEH_Certificate.jpg";
import OutskillCertificate from "../assets/img/certifications/Outskill_Certificate.jpg";
import InterCertificate from "../assets/img/certifications/Internship_Certificate.jpg";
import InternetSecurity from "../assets/img/certifications/Internet_Security.jpg";
import IntroductionCloudComputing from "../assets/img/certifications/Introduction_Cloud_Computing.jpg";
import IntroductionMachineLearning from "../assets/img/certifications/Introduction_Machine_Learning.jpg";
import IntroductionUiUx from "../assets/img/certifications/Introduction_UI-UX.png";
import CommunicatingWithImpact from "../assets/img/certifications/Communicating_with_impact.png";
import CriticalSoftSkillsForProjectManagers from "../assets/img/certifications/Critical_soft_skills_for_project_managers.png";
import SkillsBuildOrientation from "../assets/img/certifications/Edunet_skillsBuild_orientation.png";
import YipCertificate from "../assets/img/certifications/yip_certificate.png";
import NxtwaveCompletion from "../assets/img/certifications/Nxtwave_completion.png";



const certifications = [
  {
    id: 1,
    title: "Generative AI Mastermind",
    certificateId: "",
    description:
      "Advanced program focused on generative AI concepts, prompt engineering, and real-world applications.",
    completionDate: "September 2025",
    image: OutskillCertificate,
    issuer: "Outskill",
  },
  {
    id: 2,
    title: "Essentials of Ethical Hacking",
    certificateId: "RTXSTU1318012510",
    description:
      "Core training in penetration testing, system vulnerabilities, and defensive cybersecurity techniques.",
    completionDate: "October 2024",
    image: EEHCertificate,
    issuer: "RedTeam Hacker Academy",
  },
  {
    id: 3,
    title: "Cyber Security Internship",
    certificateId: "",
    description:
      "Hands-on experience in cybersecurity projects covering threat analysis, testing, and security operations.",
    completionDate: "November 2024",
    image: InterCertificate,
    issuer: "RedTeam Hacker Academy",
  },
  {
    id: 4,
    title: "Internet and Security",
    certificateId: "EDPT1681140384408L",
    description:
      "Foundation course on online safety, data protection, and secure internet practices.",
    completionDate: "April 2023",
    image: InternetSecurity,
    issuer: "Edapt",
  },
  {
    id: 5,
    title: "Introduction to Cloud Computing",
    certificateId: "EDPT1680971415613F",
    description:
      "Beginner-level training on cloud platforms, services, and deployment models.",
    completionDate: "April 2023",
    image: IntroductionCloudComputing,
    issuer: "Edapt",
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    certificateId: "EDPT1682006280907N",
    description:
      "Introductory course covering supervised and unsupervised learning, algorithms, and applications.",
    completionDate: "April 2023",
    image: IntroductionMachineLearning,
    issuer: "Edapt",
  },
  {
    id: 7,
    title: "Introduction to UI/UX Design",
    certificateId: "",
    description:
      "Creative course on design principles, user experience fundamentals, and interface prototyping.",
    completionDate: "September 2024",
    image: IntroductionUiUx,
    issuer: "Faith Academy",
  },
  {
    id: 8,
    title: "Communicating with Impact",
    certificateId: "URL-FFD82E8D28EB",
    description:
      "Focused on improving communication skills, persuasive speaking, and effective presentation techniques.",
    completionDate: "June 2024",
    image: CommunicatingWithImpact,
    issuer: "IBM SkillsBuild",
  },
  {
    id: 9,
    title: "Critical Soft Skills for Project Managers",
    certificateId: "URL-G-YOH0ZY0C8",
    description:
      "Covers leadership, teamwork, problem-solving, and decision-making skills essential for project managers.",
    completionDate: "June 2024",
    image: CriticalSoftSkillsForProjectManagers,
    issuer: "IBM SkillsBuild",
  },
  {
    id: 10,
    title: "Edunet - SkillsBuild Orientation",
    certificateId: "PLAN-04138CD348A7",
    description:
      "Introduction to IBM SkillsBuild platform, resources, and learning pathways for career development.",
    completionDate: "June 2024",
    image: SkillsBuildOrientation,
    issuer: "IBM SkillsBuild",
  },
  {
    id: 11,
    title: "Young Innovators Programme (YIP)",
    certificateId: "22YIP074762",
    description:
      "Encourages creative thinking and innovation through real-world problem-solving and project development.",
    completionDate: "October 2022",
    image: YipCertificate,
    issuer: "K-DISC",
  },
  {
    id: 12,
    title: "AI for Students: Build Your Own Generative AI Model",
    certificateId: "",
    description:
      "Hands-on course on understanding generative AI concepts and building a simple AI model.",
    completionDate: "June 2024",
    image: NxtwaveCompletion,
    issuer: "NxtWave",
  },
];

export const Certifications = () => {
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
                  <div className="cert-image-container">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="cert-overlay">
                      <span className="cert-issuer">{cert.issuer}</span>
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
    </div>
    </>
  );
};
