import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Certifications } from "./pages/Certifications";
import { Blogs } from "./pages/Blogs";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { ProjectCaseStudy } from "./pages/ProjectCaseStudy";

import { CyberCanvasBackground } from "./components/CyberCanvasBackground";
import { CustomCursor } from "./components/CustomCursor";

function AppContent() {
  const location = useLocation();

  const getActiveTab = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/projects')) return 'projects';
    if (path.startsWith('/certifications')) return 'certifications';
    if (path.startsWith('/blogs')) return 'blogs';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <div className="App text-white">
      <CyberCanvasBackground />
      <CustomCursor />
      <NavBar activeTab={activeTab} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectCaseStudy />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
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