import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-base">
      {/* Heavy Blur Overlay to blend colors smoothly */}
      <div className="absolute inset-0 backdrop-blur-[120px] z-10" />

      {/* Blob 1 - Primary */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 2 }}
        className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/40 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-floating"
      />
      
      {/* Blob 2 - Secondary */}
      <motion.div
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 3 }}
        className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-floating-slow"
      />

      {/* Blob 3 - Accent */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.08,
          y: mousePosition.y * -0.08,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 2.5 }}
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-accent/30 rounded-full mix-blend-screen filter blur-[90px] opacity-50 animate-pulse-glow"
      />
      
      {/* Ambient noise texture for a premium grainy effect */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-20 mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
    </div>
  );
};

export default FluidBackground;
