import { useState, useEffect } from "react";
import '../assets/css/NavBar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";
// import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

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
              <Nav.Link as={Link} to="/" className={isActive('/') ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
              <Nav.Link as={Link} to="/projects" className={isActive('/projects') ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
              <Nav.Link as={Link} to="/certifications" className={isActive('/certifications') ? 'active navbar-link' : 'navbar-link'}>Certifications</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className={isActive('/blogs') ? 'active navbar-link' : 'navbar-link'}>Blogs</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <Link to='/contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Link>
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
              <Link 
                to="/" 
                className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.2s' }}>
              <Link 
                to="/projects" 
                className={`mobile-menu-link ${isActive('/projects') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.3s' }}>
              <Link 
                to="/certifications" 
                className={`mobile-menu-link ${isActive('/certifications') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Certifications
              </Link>
            </li>
            <li className="mobile-menu-item" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/blogs" 
                className={`mobile-menu-link ${isActive('/blogs') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
            </li>
          </ul>

          {/* Mobile CTA Button */}
          <div className="mobile-cta-container" style={{ animationDelay: '0.5s' }}>
            <Link 
              to="/contact" 
              className="mobile-cta-button"
              onClick={closeMobileMenu}
            >
              Let's Connect
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
