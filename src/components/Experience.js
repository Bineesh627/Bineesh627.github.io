import React from "react";
import { ReactComponent as WorkIcon } from "../assets/img/work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


// You can import this or pass as prop
const timelineElements = [
  {
    id: 1,
    title: "Founder & CEO",
    location: "Fusintech",
    description:
      "Founded fusintech, an innovative EdTech platform leveraging AI for personalized learning experiences.",
    date: "December 2025 - Present",
    icon: "work",
  },
  {
    id: 2,
    title: "Cyber Security • Intern",
    location: "RedTeam Hacker Academy, Trivandrum",
    description:
      "Completed an internship on Cyber Security at RedTeam Hacker Academy, Trivandrum, where I gained hands-on knowledge of basic hacking methods, security concepts, and defensive techniques used in cybersecurity.",
    date: "October 2024 - November 2024",
    icon: "work",
  },
];

export const Experience = () => {
  const workIconStyles = { background: "#06D6A0", color: "black" };

  const branchColor = "rgb(13 110 253)";

  return (
    <div 
      className="text-white py-5" 
      style={{ position: "relative", zIndex: 2 }}
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
            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="text-white fw-semibold"
                iconStyle={workIconStyles}
                icon={<WorkIcon />}
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
