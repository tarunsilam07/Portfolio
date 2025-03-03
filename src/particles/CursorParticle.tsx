"use client";
import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  directionX: number;
  directionY: number;
}

const ParticleEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // ✅ Ensure this only runs in the browser
    setIsClient(true);

    if (!isClient) return;

    const createParticle = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 5 + 5,
        duration: Math.random() * 1.5 + 1.5,
        directionX: (Math.random() - 0.5) * 2,
        directionY: (Math.random() - 0.5) * 2,
      };

      setParticles((prevParticles) => [...prevParticles, newParticle]);

      setTimeout(() => {
        setParticles((prevParticles) => prevParticles.filter((p) => p.id !== newParticle.id));
      }, newParticle.duration * 1000);
    };

    window.addEventListener("mousemove", createParticle);
    return () => window.removeEventListener("mousemove", createParticle);
  }, [isClient]);

  if (!isClient) return null; // ✅ Prevents issues on the server

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: "absolute",
            top: `${particle.y - particle.size / 2}px`,
            left: `${particle.x - particle.size / 2}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: 1,
            transform: `translate(${particle.directionX * 100}px, ${particle.directionY * 100}px)`,
            animation: `fadeOut ${particle.duration}s ease-out forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </div>
  );
};

export default ParticleEffect;
