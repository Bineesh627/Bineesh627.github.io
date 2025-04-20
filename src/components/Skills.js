import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import "../assets/styles/Skills.css"; // CSS file for styling

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      name: "Python",
      level: "Expert",
      description: "Advanced algorithms, automation, data analysis",
      proficiency: 90
    },
    {
      name: "Web Development",
      level: "Advanced",
      description: "React, Node.js, responsive design",
      proficiency: 80
    },
    {
      name: "Ethical Hacking",
      level: "Intermediate",
      description: "Penetration testing, security analysis",
      proficiency: 75
    },
    {
      name: "Web Design",
      level: "Advanced",
      description: "UI/UX, wireframing, prototyping",
      proficiency: 85
    }
  ];

  // Custom arrow components with proper positioning
  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="custom-arrow custom-arrow-right"
        aria-label="Next slide"
      >
        <i className="fa fa-chevron-right"></i>
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="custom-arrow custom-arrow-left"
        aria-label="Previous slide"
      >
        <i className="fa fa-chevron-left"></i>
      </button>
    );
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Highly proficient in Python for scripting and automation, with a strong foundation in web development principles.<br></br> Adept at leveraging technical skills to contribute to efficient and innovative projects.</p>
              <div className="carousel-wrapper">
                <Carousel 
                  responsive={responsive} 
                  infinite={true} 
                  className="owl-carousel owl-theme skill-slider"
                  centerMode={false}
                  itemClass="carousel-item-padding"
                  containerClass="carousel-container"
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                  removeArrowOnDeviceType={["mobile"]}
                  dotListClass="custom-dot-list"
                >
                  {skills.map((skill, index) => (
                    <div className="item" key={index}>
                      <div className="skill-item">
                        <h5>{skill.name}</h5>
                        <div className="skill-level">{skill.level}</div>
                        <div className="skill-bar-container">
                          <div 
                            className="skill-bar" 
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Abstract colorful sharp background" />
    </section>
  );
};