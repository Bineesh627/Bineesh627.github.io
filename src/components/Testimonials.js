import { Container } from 'react-bootstrap';
import { testimonialsData } from '../data/testimonialsData';
import { Star } from 'lucide-react';
import '../assets/css/Testimonials.css';

export const Testimonials = () => {
  return (
    <section className="testimonials-os" id="testimonials">
      {/* Ambient glows */}
      <div className="testimonials-os-glow center-left blur-3xl"></div>
      <div className="testimonials-os-glow center-right blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="os-section-header">
          <h2 className="os-section-title">
            Client <span className="text-gradient-blue">Testimonials</span>
          </h2>
          <p className="os-section-subtitle">Verified system integration feedback from project owners</p>
          <div className="os-separator"></div>
        </div>

        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee-track">
            {[...testimonialsData, ...testimonialsData].map((element, idx) => (
              <div key={`${element.id}-${idx}`} className="testimonial-marquee-card">
                {/* Rating stars */}
                <div className="testimonial-rating">
                  {[...Array(element.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--accent-orange)" className="border-0" />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="testimonial-quote-box">
                  <span className="testimonial-quote-symbol">“</span>
                  <p className="testimonial-quote-text">
                    {element.quote}
                  </p>
                </div>

                {/* Client info and status badge */}
                <div className="testimonial-client-badge">
                  <div className="testimonial-client-info">
                    <span className="testimonial-client-name">{element.clientName}</span>
                    <span className="testimonial-client-role">{element.role}</span>
                  </div>
                  
                  <div className="testimonial-meta-box">
                    <span className="testimonial-log-id font-mono">{element.logId}</span>
                    <span className="testimonial-project font-mono">{element.projectType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
