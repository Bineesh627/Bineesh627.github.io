import React from 'react';
import '../assets/css/SpaceBackground.css';

export const SpaceBackground = () => {
  return (
    <div className="space-background-container">
      <div className="galaxy-overlay"></div>
      
      {/* Dense Star Layers */}
      <div className="stars-layer stars-small"></div>
      <div className="stars-layer stars-medium"></div>
      <div className="stars-layer stars-large"></div>
      
      {/* Shooting Stars - Multiple Angles */}
      <div className="col-12">
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
      </div>
    </div>
  );
};
