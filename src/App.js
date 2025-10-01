import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

// Import page components
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Certifications } from "./pages/Certifications";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router
      future={{ 
        v7_startTransition: true,       // ✅ Fixes startTransition warning
        v7_relativeSplatPath: true      // ✅ Fixes relative splat path warning
      }}
    >
      <div className="App bg-black text-white">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;