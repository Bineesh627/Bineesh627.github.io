import React from "react";
import { ReactComponent as WorkIcon } from "../assets/img/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/img/school.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


// You can import this or pass as prop
const timelineElements = [
  {
    id: 1,
    title: "Cyber Security • Intern",
    location: "RedTeam Hacker Academy, Trivandrum",
    description:
      "Completed an internship on Essentials of Ethical Hacking at RedTeam Hacker Academy, Trivandrum, where I gained hands-on knowledge of basic hacking methods, security concepts, and defensive techniques used in cybersecurity.",
    date: "October 2024 - November 2024",
    icon: "work",
  },
  {
    id: 2,
    title: "Bachelor of Computer Applications (BCA)",
    location: "IHRD CAS Karthikapally",
    description:
      "Currently pursuing a BCA degree, specializing in computer applications, software development, and information technology principles.",
    date: "September 2022 - May 2025",
    icon: "school",
  },
  {
    id: 3,
    title: "HSC (Biology Science)",
    location: "G.H.S.S Mangalam School, Aratupuzha",
    description:
      "Completed higher secondary education with a focus on biology science, gaining in-depth knowledge of biological concepts alongside foundational sciences.",
    date: "July 2022",
    icon: "school",
  },
  {
    id: 4,
    title: "SSLC Examination",
    location: "St. Thomas Higher Secondary School, Karthikapally",
    description:
      "Successfully completed secondary education, laying a strong foundation in core academic subjects and developing essential skills.",
    date: "March 2020",
    icon: "school",
  },
];

export const Experience = () => {
  const workIconStyles = { background: "#06D6A0", color: "black" };
  const schoolIconStyles = { background: "#f9c74f", color: "black" };
  const branchColor = "rgb(13 110 253)";

  return (
    <div 
      className="bg-black text-white py-5" // Bootstrap for black background + white text + padding
      style={{ minHeight: "100vh" }}       // full viewport height
    >
      <div className="container" id="experience">
        <h1 className="text-center mb-4 fw-bold">
          <span>Professional </span>
          <span style={{ color: branchColor }}>Experience</span>
        </h1>
        <div className="text-center mb-5">
          <span>My career journey visualized</span>
        </div>
        {/* For the VerticalTimeline container, override bootstrap bg for timeline line via inline styles */}
        <VerticalTimeline
          lineColor="#222"  // dark gray for vertical line
        >
          {timelineElements.map((element) => {
            const isWorkIcon = element.icon === "work";
            // const showButton = !!element.buttonText;

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="text-white fw-semibold"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                contentStyle={{ 
                  background: "#111",  // dark card background using inline style 
                  color: "white",
                  boxShadow: "0 4px 16px rgba(255,255,255,0.1)"
                }}
                contentArrowStyle={{ 
                  borderRight: "7px solid #111" // arrow color matching the content bg
                }}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle text-secondary">
                  {element.location}
                </h5>
                <p>{element.description}</p>
                {/* {showButton && (
                  <a
                    // href="/"
                    className={`btn btn-sm fw-semibold ${
                      isWorkIcon ? "btn-success text-dark" : "btn-warning text-dark"
                    }`}
                    style={{ marginTop: "10px" }}
                  >
                    {element.buttonText}
                  </a>
                )} */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};
