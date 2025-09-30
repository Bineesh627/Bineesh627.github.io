import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
// import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
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

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
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
  )
}
