import React from 'react';
import './GalaxyBackground.css';

export const GalaxyBackground = () => {
  // Helper function to generate stars at random positions
  const generateStars = (count, className) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      stars.push(
        <div
          key={i}
          className={`star ${className}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="galaxy-background position-fixed w-100 h-100 overflow-hidden">
      {/* Galaxy cloud layers */}
      <div className="galaxy-layer galaxy-layer-1 position-absolute w-100 h-100"></div>
      <div className="galaxy-layer galaxy-layer-2 position-absolute w-100 h-100"></div>
      <div className="galaxy-layer galaxy-layer-3 position-absolute w-100 h-100"></div>
      
      {/* Star layers */}
      <div className="stars-container position-absolute w-100 h-100">
        {generateStars(200, 'star-small')}
        {generateStars(100, 'star-medium')}
        {generateStars(50, 'star-large')}
      </div>
      
      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1 position-absolute"></div>
      <div className="shooting-star shooting-star-2 position-absolute"></div>
      <div className="shooting-star shooting-star-3 position-absolute"></div>
    </div>
  );
};