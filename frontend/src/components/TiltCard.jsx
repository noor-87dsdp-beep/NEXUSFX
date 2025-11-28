import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const TiltCard = ({ children, className = '', intensity = 15, glare = true }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  });
  const [glareStyle, setGlareStyle] = useState({
    background: 'transparent',
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation angles
      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      });

      if (glare) {
        // Calculate glare position
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;

        setGlareStyle({
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.15), transparent 60%)`,
          opacity: 1,
        });
      }
    },
    [intensity, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
    setGlareStyle({
      background: 'transparent',
      opacity: 0,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        ...tiltStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Glare overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
          style={{
            ...glareStyle,
            transition: 'opacity 0.3s ease-out',
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
