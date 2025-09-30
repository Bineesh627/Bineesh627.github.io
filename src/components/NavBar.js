import { useState, useEffect } from "react";
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

      {/* Mobile Menu Styles */}
      <style jsx>{`
        /* Mobile Menu Toggle Button */
        .mobile-menu-toggle {
          background: none;
          border: none;
          color: #fff;
          padding: 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          min-height: 44px;
        }

        .mobile-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }

        .mobile-menu-toggle:focus {
          outline: 2px solid rgb(13, 110, 253);
          outline-offset: 2px;
        }

        /* Mobile Menu Overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Mobile Menu Drawer */
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: #000;
          z-index: 9999;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        .mobile-menu-drawer.open {
          right: 0;
        }

        /* Close Button */
        .mobile-menu-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #fff;
          padding: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          min-height: 44px;
        }

        .mobile-menu-close:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .mobile-menu-close:focus {
          outline: 2px solid rgb(13, 110, 253);
          outline-offset: 2px;
        }

        /* Mobile Menu Navigation */
        .mobile-menu-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 30px 30px;
        }

        .mobile-menu-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 8px;
        }

        .mobile-menu-item {
          opacity: 0;
          transform: translateX(30px);
          animation: slideInFade 0.5s ease-out forwards;
        }

        @keyframes slideInFade {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-menu-link {
          display: block;
          color: #fff;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 600;
          padding: 16px 0;
          min-height: 56px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          border-radius: 8px;
          position: relative;
        }

        .mobile-menu-link:hover,
        .mobile-menu-link:focus {
          color: rgb(13, 110, 253);
          text-decoration: none;
          transform: translateX(8px);
        }

        .mobile-menu-link.active {
          color: rgb(13, 110, 253);
        }

        .mobile-menu-link.active::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 24px;
          background: rgb(13, 110, 253);
          border-radius: 2px;
        }

        .mobile-menu-link:focus {
          outline: 2px solid rgb(13, 110, 253);
          outline-offset: 2px;
        }

        /* Mobile CTA Button */
        .mobile-cta-container {
          margin-top: 40px;
          opacity: 0;
          transform: translateY(20px);
          animation: slideInFade 0.5s ease-out forwards;
        }

        .mobile-cta-button {
          display: block;
          width: 100%;
          padding: 16px 24px;
          background: transparent;
          border: 2px solid #fff;
          border-radius: 50px;
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-cta-button:hover,
        .mobile-cta-button:focus {
          background: rgb(13, 110, 253);
          border-color: rgb(13, 110, 253);
          color: #fff;
          text-decoration: none;
          transform: scale(1.02);
        }

        .mobile-cta-button:focus {
          outline: 2px solid rgb(13, 110, 253);
          outline-offset: 2px;
        }

        /* Responsive - Hide on desktop */
        @media (min-width: 768px) {
          .mobile-menu-toggle,
          .mobile-menu-overlay,
          .mobile-menu-drawer {
            display: none !important;
          }
        }

        /* Smaller mobile screens */
        @media (max-width: 320px) {
          .mobile-menu-drawer {
            width: 100vw;
            right: -100vw;
          }
          
          .mobile-menu-drawer.open {
            right: 0;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .mobile-menu-drawer,
          .mobile-menu-toggle,
          .mobile-menu-close,
          .mobile-menu-link,
          .mobile-cta-button {
            transition: none;
          }
          
          .mobile-menu-item {
            animation: none;
            opacity: 1;
            transform: none;
          }
          
          .mobile-cta-container {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  )
}
