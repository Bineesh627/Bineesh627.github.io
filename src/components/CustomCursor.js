import React, { useEffect, useState, useRef } from 'react';
import '../assets/css/CustomCursor.css';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setHidden(false);
      const { clientX, clientY } = e;
      
      // Update dot position instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      // Update ring position with a smooth lag effect
      if (ringRef.current) {
        ringRef.current.animate({
          transform: `translate3d(${clientX - 16}px, ${clientY - 16}px, 0)`
        }, { duration: 150, fill: "forwards" });
      }
    };

    const handleMouseOver = (e) => {
      // Expand cursor on interactive element hover
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.spotlight-card') || 
        target.closest('.voxel-card') ||
        target.classList.contains('cursor-pointer');
      
      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    const handleMouseLeaveWindow = () => {
      setHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  return (
    <div className={`custom-cursor-container d-none d-lg-block ${hidden ? 'cursor-hidden' : ''}`}>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className={`custom-cursor-ring ${hovered ? 'cursor-expand' : ''}`} />
    </div>
  );
};
export default CustomCursor;
