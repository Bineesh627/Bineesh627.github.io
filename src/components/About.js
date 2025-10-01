import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profile from "../assets/img/profile-pic.png";

export const About = () => {
  const cvLink = "https://drive.google.com/file/d/1U2nLSDzrpbBygta8rbe1h3Jobove43Ef/view?usp=sharing";

  const handleDownloadCV = () => {
    window.open(cvLink, '_blank');
  };
  return (
    <div className="starry-background">
      <Container id="about" className="my-5 py-5" style={{ minHeight: "34rem", position: "relative", zIndex: 2 }}>
      {/* Heading and Subheading */}
      <h2 className="mb-1 text-center" style={{ fontWeight: "400" }}>
        About me
      </h2>
      <div className="d-flex flex-column align-items-center" style={{ color: "rgb(13 110 253)", fontWeight: "500", marginBottom: "1.5rem" }}>
        <span>who I am</span>
        <hr
          style={{
            width: "180px",
            border: "1px solid rgb(13 110 253)",
            margin: "0.5rem 0",
          }}
        />
      </div>

      {/* Main Row with Image and Text */}
      <Row className="align-items-center">
        {/* Profile Image */}
        <Col xs={12} md={4} className="mb-4 mb-md-0 d-flex justify-content-center">
          <Card style={{ width: "20rem", border: "none" }}>
            {/* Replace src with your actual image path */}
            <Card.Img
              variant="top"
              src={profile}
              alt="Bineesh profile"
              style={{
                borderRadius: "0.5rem",
                objectFit: "cover",
                height: "24rem", // increased height
                width: "100%",
                overflow: "hidden",
              }}
            />
          </Card>
        </Col>

        {/* About Text */}
        <Col xs={12} md={8}>
          <h4 style={{ fontWeight: "600" }}>
            I'm Bineesh and I'm a{" "}
            <span style={{ color: "rgb(13 110 253)" }}>Developer</span>
          </h4>
          <p className="mt-3" style={{ textAlign: "justify", lineHeight: "1.7" }}>
            I'm an aspiring Full-Stack Developer specializing in 4.0 technologies. I thrive on tackling coding challenges and gaining practical experience through hands-on projects. Eager to contribute and innovate in the evolving tech landscape.
            Additionally, I am a highly motivated professional with a rapid learning curve and a strong ability to self-learn. I take initiative, am proactive, and consistently deliver high-quality, efficient, and reliable solutions. My expertise spans designing, developing, and deploying robust applications, websites, and complex systems even within tight project timelines. I thrive on challenges and continually seek to expand my skill set independently.
          </p>
          <Button variant="danger" size="md" className="cv-btn mt-2" style={{ backgroundColor: "rgb(13 110 253)", border: "none" }} onClick={handleDownloadCV}>Download CV</Button>
        </Col>
      </Row>
      </Container>
      
      <style jsx>{`
        .starry-background {
          position: relative;
          background: #000;
          overflow: hidden;
        }
        
        .starry-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(2px 2px at 20px 30px, #eee, transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, #fff, transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 160px 30px, #fff, transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: sparkle 20s linear infinite;
          z-index: 1;
        }
        
        .starry-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(138, 43, 226, 0.2) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(75, 0, 130, 0.15) 0%, transparent 50%);
          z-index: 1;
        }
        
        @keyframes sparkle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
      `}</style>
    </div>
  );
};