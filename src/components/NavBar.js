import { useState, useEffect } from "react";
import '../assets/css/NavBar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { X, Menu } from "lucide-react";
// import logo from '../assets/img/logo.svg';

export const NavBar = ({ activeTab, onUpdateActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (tab) => {
    onUpdateActiveTab(tab);
    closeMobileMenu();
    window.scrollTo(0, 0); // Scroll to top when switching tabs
  };

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          
          {/* Custom Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle d-md-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={28} />
          </button>

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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button 
          className="mobile-menu-close"
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <X size={28} />
        </button>

        {/* Mobile Menu Items */}
        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item" style={{ animationDelay: '0.1s' }}>
              <button 
                className={`mobile-menu-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.2s' }}>
              <button 
                className={`mobile-menu-link ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </button>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.3s' }}>
              <button 
                className={`mobile-menu-link ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => handleNavClick('certifications')}
              >
                Certifications
              </button>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.4s' }}>
              <button 
                className={`mobile-menu-link ${activeTab === 'blogs' ? 'active' : ''}`}
                onClick={() => handleNavClick('blogs')}
              >
                Blogs
              </button>
            </li>
          </ul>

          {/* Mobile CTA Button */}
          <div className="mobile-cta-container" style={{ animationDelay: '0.5s' }}>
            <button 
              className="mobile-cta-button"
              onClick={() => handleNavClick('contact')}
            >
              Let's Connect
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
