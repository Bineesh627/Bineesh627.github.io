import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Terminal } from 'lucide-react';
import './WhatsAppCTA.css';

export const WhatsAppCTA = () => {
  const whatsappNumber = "919567314355";
  const defaultMessage = encodeURIComponent("Hi Bineesh, I saw your portfolio and would like to connect!");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <section className="whatsapp-cta-section py-5 mt-5">
      <div className="container">
        <div className="os-window-frame mx-auto" style={{ maxWidth: '800px' }}>
          {/* OS Windows Terminal Header */}
          <div className="os-window-header">
            <div className="os-control-dots">
              <span className="os-dot red"></span>
              <span className="os-dot yellow"></span>
              <span className="os-dot green"></span>
            </div>
            <div className="os-window-title">SECURE_COMMS_PROTOCOL.EXE</div>
            <Terminal size={14} className="text-secondary" />
          </div>

          {/* OS Body */}
          <div className="os-window-body text-center p-5">
            <div className="cyber-glow-container mb-4">
              <div className="cyber-glow-ring"></div>
              <FaWhatsapp size={48} className="whatsapp-cyber-icon" />
            </div>

            <h2 className="font-display text-gradient-blue mb-3">
              Establish Direct Connection
            </h2>
            <p className="font-mono text-secondary text-sm mb-4 max-w-md mx-auto">
              Initiate a real-time comms link directly via WhatsApp. Perfect for rapid consultations, software development collaborations, and business opportunities.
            </p>

            <div className="d-flex align-items-center justify-content-center gap-2 mb-4 text-xs font-mono text-success">
              <span className="blink-dot"></span>
              <span>LINK_STATUS: ONLINE_&_READY</span>
            </div>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-whatsapp font-mono text-decoration-none d-inline-flex align-items-center gap-2"
            >
              <FaWhatsapp size={18} /> OPEN_WHATSAPP_PORT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
