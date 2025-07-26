import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "College chatbot",
      description: "Developed a college chatbot leveraging Retrieval-Augmented Generation (RAG) in collaboration with the principal. The system employs intelligent agents to extract information from the college website and PDF documents, all managed through a dedicated admin panel for seamless operation.",
      imgUrl: projImg1,
    },
    {
      title: "RecipeRave",
      description: "Join a vibrant community of food lovers on RecipeRave! Follow your favorite home cooks and culinary creators, explore a diverse collection of recipes, and share your own delicious creations with the world, just like your favorite photo-sharing platform.",
      imgUrl: projImg2,
    },
    {
      title: "MobileInfoga",
      description: "MobileInfoGa is a powerful OSINT tool designed to gather comprehensive details about phone numbers. Utilizing various techniques and integrations, it can retrieve information such as country of origin, carrier details, and potential online associations.",
      imgUrl: projImg3,
    },
    {
      title: "OpenSS7",
      description: "Recreating the OpenSS7 website design involves building a structurally sound and information-focused clone emphasizing clear navigation and logical presentation of technical content.",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have a portfolio of successfully completed projects that showcase my skills and experience. You can view examples of my previous work in the project details below. Let’s discuss how I can help bring your vision to life.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="Colorful Background Shape" /> */}
    </section>
  )
}