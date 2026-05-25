import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

// Import page components
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Certifications } from "./pages/Certifications";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

import { SpaceBackground } from "./components/SpaceBackground";

function AppContent() {
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path.startsWith('/projects') || path.startsWith('/project')) return 'projects';
    if (path.startsWith('/certifications') || path.startsWith('/certification')) return 'certifications';
    if (path.startsWith('/blogs') || path.startsWith('/blog')) return 'blogs';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <div className="App text-white">
      <SpaceBackground />
      <NavBar activeTab={activeTab} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/certification" element={<Certifications />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  );
}

export default App;