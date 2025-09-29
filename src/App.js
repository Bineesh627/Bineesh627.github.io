// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { GalaxyBackground } from "./components/GalaxyBackground";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Blogs } from "./components/Blogs";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";   // ✅ import router

function App() {
  return (
    <Router
      future={{ 
        v7_startTransition: true,       // ✅ Fixes startTransition warning
        v7_relativeSplatPath: true      // ✅ Fixes relative splat path warning
      }}
    >
      <div className="App bg-black text-white">
        <GalaxyBackground />
        <NavBar />
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Blogs />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;