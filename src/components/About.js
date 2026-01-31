import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Add Button for cv
import profile from "../assets/img/profile-pic.png";

export const About = () => {
  // const cvLink = "#";

  // const handleDownloadCV = () => {
  //   window.open(cvLink, '_blank');
  // };
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
          <Card style={{ width: "20rem", border: "none", backgroundColor: "transparent" }}>
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
          {/* <Button variant="danger" size="md" className="cv-btn mt-2" style={{ backgroundColor: "rgb(13 110 253)", border: "none" }} onClick={handleDownloadCV}>Download CV</Button> */}
        </Col>
      </Row>
      </Container>
    </div>
  );
};