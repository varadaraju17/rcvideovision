import React from 'react';

const AnimatedBackground = () => {
  const particleCount = 30;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 4 + 1;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const randomValue = Math.random();

    particles.push(
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          background: `rgba(100, 255, 218, ${Math.random() * 0.3 + 0.1})`, // Accent color with variable opacity
          boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(100, 255, 218, 0.4)`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--random': randomValue,
        }}
      ></div>
    );
  }

  return <div className="particle-container pointer-events-none">{particles}</div>;
};

export default AnimatedBackground;
