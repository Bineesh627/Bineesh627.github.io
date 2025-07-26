import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // State to track if animation has played at least once
  const [leftVisibleOnce, setLeftVisibleOnce] = useState(false);
  const [rightVisibleOnce, setRightVisibleOnce] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send. Please try again later." });
    }
  };

  // Section Background Color
  const sectionStyle = {
    minHeight: '100vh',
    background: 'black',
    padding: '60px 0',
    color: '#f8f9fa',
  };

  // Text styling for contact info
  const infoStyle = { fontSize: "1.17rem", lineHeight: "2.2", marginTop: '36px' };

  return (
    <section className="contact" id="connect" style={sectionStyle}>
      <Container>
        <Row className="align-items-center">
          {/* Left column: Contact info with icons */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !leftVisibleOnce) setLeftVisibleOnce(true);
                const shouldAnimate = isVisible || leftVisibleOnce;
                return (
                  <div className={shouldAnimate ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Get In Touch</h2>
                    <p>
                      Do you want to hire me? Do you need any support or guidance? <br />
                      Or if you have any questions, please don't hesitate to connect with me by simply entering your info in the provided form or hook up with me through email.
                    </p>
                    <div style={infoStyle}>
                      <p>
                        <FaUser
                          style={{ color: "#74b9ff", marginRight: "10px", verticalAlign: 'middle' }}
                          size={20}
                          aria-label="Name Icon"
                        />
                        <strong>Name:</strong> Bineesh S
                      </p>
                      <p>
                        <FaMapMarkerAlt
                          style={{ color: "#fdcb6e", marginRight: "10px", verticalAlign: 'middle' }}
                          size={20}
                          aria-label="Address Icon"
                        />
                        <strong>Address:</strong> Alappuzha, Kerala, India
                      </p>
                      <p>
                        <FaEnvelope
                          style={{ color: "#ff7675", marginRight: "10px", verticalAlign: 'middle' }}
                          size={20}
                          aria-label="Email Icon"
                        />
                        <strong>Email:</strong> <a href="mailto:sbineesh172@gmail.com" style={{ color: "#dfe6e9", textDecoration: "underline" }}>sbineesh172@gmail.com</a>
                      </p>
                    </div>
                  </div>
                )
              }}
            </TrackVisibility>
          </Col>
          {/* Right column: Form */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => {
                if (isVisible && !rightVisibleOnce) setRightVisibleOnce(true);
                const shouldAnimate = isVisible || rightVisibleOnce;
                return (
                  <div className={shouldAnimate ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                            autoComplete="given-name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                            autoComplete="family-name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                            autoComplete="email"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                            autoComplete="tel"
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            id="message"
                            name="message"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                            autoComplete="off"
                            required
                          />
                          <button
                            type="submit"
                            style={{
                              background: "#a29bfe",
                              border: "none",
                              color: "#2d3436",
                              fontWeight: 600,
                              borderRadius: "6px",
                              padding: "12px 20px",
                              marginTop: "18px",
                              cursor: "pointer"
                            }}
                          >
                            <span>{buttonText}</span>
                          </button>
                        </Col>
                        {status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </form>
                  </div>
                )
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
