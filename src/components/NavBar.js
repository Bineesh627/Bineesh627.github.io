import { useState, useEffect } from "react";
import '../assets/css/NavBar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Home, Briefcase, Award, BookOpen, MessageSquare } from "lucide-react";
// import logo from '../assets/img/logo.svg';

export const NavBar = ({ activeTab, onUpdateActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const handleNavClick = (tab) => {
    onUpdateActiveTab(tab);
    window.scrollTo(0, 0); // Scroll to top when switching tabs
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          
          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-md-flex">
            <Nav className="ms-auto">
              <Nav.Link className={activeTab === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('home')}>Home</Nav.Link>
              <Nav.Link className={activeTab === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
              <Nav.Link className={activeTab === 'certifications' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('certifications')}>Certifications</Nav.Link>
              <Nav.Link className={activeTab === 'blogs' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavClick('blogs')}>Blogs</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button className="vvd" onClick={() => handleNavClick('contact')}><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modern Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav d-md-none">
        <div className="mobile-nav-container">
            <button 
                className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
            >
                <div className="icon-wrapper"><Home size={20} /></div>
                <span>Home</span>
            </button>
            <button 
                className={`mobile-nav-item ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
            >
                <div className="icon-wrapper"><Briefcase size={20} /></div>
                <span>Work</span>
            </button>
            <button 
                className={`mobile-nav-item ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => handleNavClick('certifications')}
            >
                <div className="icon-wrapper"><Award size={20} /></div>
                <span>Awards</span>
            </button>
            <button 
                className={`mobile-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
                onClick={() => handleNavClick('blogs')}
            >
                <div className="icon-wrapper"><BookOpen size={20} /></div>
                <span>Blogs</span>
            </button>
            <button 
                className={`mobile-nav-item ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
            >
                <div className="icon-wrapper"><MessageSquare size={20} /></div>
                <span>Contact</span>
            </button>
        </div>
      </div>
    </>
  )
}
