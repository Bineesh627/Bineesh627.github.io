import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, Cpu, HardDrive, Compass } from "lucide-react";
import { useNavigate } from "react-router-dom";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { InteractiveTerminal } from "./InteractiveTerminal";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [cpuLoad, setCpuLoad] = useState(32);
  const [ramLoad, setRamLoad] = useState(48);
  const period = 2000;
  const navigate = useNavigate();

  const tick = useCallback(() => {
    const toRotate = [ "AI_Engineer", "AI_Developer", "Python_Developer", "Cybersecurity_Expert" ];
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
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [delta, tick]);

  // Simulate changing CPU and RAM values for diagnostics look
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(Math.floor(Math.random() * 25) + 20);
      setRamLoad(Math.floor(Math.random() * 5) + 45);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="banner-os" id="home">
      <div className="os-scanline"></div>
      
      <Container>
        <Row className="align-items-stretch g-5">
          {/* Left Column: Diagnostics Kernel & Telemetry */}
          <Col xs={12} lg={6} className="d-flex flex-column justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  {/* System Load Telemetry */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <div className="os-widget-badge">
                      <span className="os-active-dot green animate-pulse"></span>
                      <span>SYSTEM: ACTIVE</span>
                    </div>
                    <div className="os-widget-badge">
                      <span>SEC_STATUS: SECURE</span>
                    </div>
                  </div>

                  {/* Display Identity */}
                  <h1 className="os-hero-title font-display">
                    KERNEL_ID: <br />
                    <span className="text-gradient-blue">BINEESH S</span>
                  </h1>

                  {/* Typing OS Prompt Role */}
                  <h2 className="os-hero-prompt font-mono">
                    root@bineesh:~$ <span className="wrap text-gradient-green">{text}</span>
                  </h2>

                  {/* Detailed Description */}
                  <p className="os-hero-description">
                    Freelance AI Engineer and Python Developer specializing in Machine Learning, Deep Learning, and Computer Vision solutions. Dedicated to building advanced intelligent agents, training custom neural networks, and deploying secure full-stack automation pipelines.
                  </p>

                  {/* Simulated telemetry diagnostic gauges */}
                  <div className="os-telemetry-grid mt-4 mb-4 font-mono">
                    <div className="telemetry-bar-row">
                      <Cpu size={14} className="me-2 text-primary" />
                      <span className="telemetry-label">CPU_LOAD:</span>
                      <div className="telemetry-progress-track">
                        <div className="telemetry-progress-bar blue" style={{ width: `${cpuLoad}%` }}></div>
                      </div>
                      <span className="telemetry-percentage">{cpuLoad}%</span>
                    </div>

                    <div className="telemetry-bar-row">
                      <HardDrive size={14} className="me-2 text-primary" />
                      <span className="telemetry-label">MEM_LOAD:</span>
                      <div className="telemetry-progress-track">
                        <div className="telemetry-progress-bar purple" style={{ width: `${ramLoad}%` }}></div>
                      </div>
                      <span className="telemetry-percentage">{ramLoad}%</span>
                    </div>

                    <div className="telemetry-bar-row">
                      <Compass size={14} className="me-2 text-primary" />
                      <span className="telemetry-label">GEOLOC_INDEX:</span>
                      <span className="telemetry-val text-white">09.39N 76.45E</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button className="btn-cyber-os" onClick={handleConnect}>
                      INIT_COMMS_LINK <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>

          {/* Right Column: Embedded Interactive OS Terminal */}
          <Col xs={12} lg={6} className="d-flex align-items-center">
            <InteractiveTerminal />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
