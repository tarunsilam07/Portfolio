"use client"
import React, { useEffect, useState } from 'react';

// Define types for the particle object
interface Particle {
  x: number;
  y: number;
  size: number;
  duration: number;
  directionX: number;
  directionY: number;
}

const ParticleEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (e: MouseEvent) => {
      const newParticle: Particle = {
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 5 + 5,
        duration: Math.random() * 2 + 2,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
      };

      setParticles((prevParticles) => [...prevParticles, newParticle]);

      setTimeout(() => {
        setParticles((prevParticles) =>
          prevParticles.filter((particle) => particle !== newParticle)
        );
      }, newParticle.duration * 1000);
    };

    window.addEventListener('mousemove', createParticle);

    return () => {
      window.removeEventListener('mousemove', createParticle);
    };
  }, []);

  return (
    <div>
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle"
          style={{
            position: 'absolute',
            top: `${particle.y - particle.size / 2}px`,
            left: `${particle.x - particle.size / 2}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            transform: `translate(${particle.directionX * 100}px, ${particle.directionY * 100}px)`,
            animation: `move ${particle.duration}s ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes move {
          0% { transform: scale(1); }
          100% { transform: scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ParticleEffect;
