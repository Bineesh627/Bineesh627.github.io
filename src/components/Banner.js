import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [ "AI Expert", "Python Developer", "Cyber Security" ];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, period, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  const handleConnect = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Bineesh S`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Cyber Security", "Python Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.</p>
                <div className="banner-btns">
                  <button onClick={handleConnect}>Let's Connect <ArrowRightCircle size={25} /></button>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
