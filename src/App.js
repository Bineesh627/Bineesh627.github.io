import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

// Import page components
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Certifications } from "./pages/Certifications";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";

import { SpaceBackground } from "./components/SpaceBackground";

function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'blogs':
        return <Blogs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App text-white">
      <SpaceBackground />
      <NavBar activeTab={activeTab} onUpdateActiveTab={setActiveTab} />
      
      {renderContent()}
      
      <Footer onUpdateActiveTab={setActiveTab} />
    </div>
  );
}

export default App;