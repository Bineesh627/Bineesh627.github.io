import { useState, useEffect } from "react";
import '../assets/css/NavBar.css';
import { Home, Briefcase, Award, BookOpen, MessageSquare, Terminal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ activeTab }) => {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setTime(date.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (tab) => {
    const path = tab === 'home' ? '/' : `/${tab}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Top Taskbar Header */}
      <div className="mobile-top-header d-lg-none">
        <div className="mobile-header-container">
          <span className="taskbar-status-dot green animate-pulse"></span>
          <span className="taskbar-brand font-mono">FUSINTECH_OS_V5.0</span>
        </div>
      </div>

      {/* OS Header System Taskbar (Desktop) */}
      <nav className="os-taskbar d-none d-lg-flex">
        <div className="os-taskbar-container">
          
          {/* System Name / Status */}
          <div className="os-taskbar-left" onClick={() => handleNavClick('home')}>
            <span className="taskbar-status-dot green animate-pulse"></span>
            <span className="taskbar-brand font-mono">FUSINTECH_OS_V5.0</span>
          </div>

          {/* Center: System Windows Nav Links */}
          <div className="os-taskbar-center">
            <button 
              className={`taskbar-link font-display ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              <Terminal size={14} className="me-1" />
              CONSOLE
            </button>
            <button 
              className={`taskbar-link font-display ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              <Briefcase size={14} className="me-1" />
              EXPLORER
            </button>
            <button 
              className={`taskbar-link font-display ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => handleNavClick('certifications')}
            >
              <Award size={14} className="me-1" />
              CREDENTIALS
            </button>
            <button 
              className={`taskbar-link font-display ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => handleNavClick('blogs')}
            >
              <BookOpen size={14} className="me-1" />
              DATABASE
            </button>
          </div>

          {/* Right side: Real-time Telemetry (Clock & Stats) */}
          <div className="os-taskbar-right font-mono">
            <span className="taskbar-ping">PING: 12ms</span>
            <span className="taskbar-divider">|</span>
            <span className="taskbar-loc">LOC: 09.39N 76.45E</span>
            <span className="taskbar-divider">|</span>
            <span className="taskbar-clock">{time}</span>
            <button 
              className="taskbar-connect-btn font-display"
              onClick={() => handleNavClick('contact')}
            >
              COMMS
            </button>
          </div>
        </div>
      </nav>

      {/* Modern OS Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav d-lg-none">
        <div className="mobile-nav-container">
          <button 
            className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <div className="icon-wrapper"><Home size={18} /></div>
            <span className="font-display">CONSOLE</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavClick('projects')}
          >
            <div className="icon-wrapper"><Briefcase size={18} /></div>
            <span className="font-display">EXPLORER</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => handleNavClick('certifications')}
          >
            <div className="icon-wrapper"><Award size={18} /></div>
            <span className="font-display">RECORDS</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            onClick={() => handleNavClick('blogs')}
          >
            <div className="icon-wrapper"><BookOpen size={18} /></div>
            <span className="font-display">DATABASE</span>
          </button>
          <button 
            className={`mobile-nav-item ${activeTab === 'contact' ? 'active comms-active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            <div className="icon-wrapper"><MessageSquare size={18} /></div>
            <span className="font-display">COMMS</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default NavBar;
