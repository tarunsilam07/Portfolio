"use client";
import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundParticles: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesLoaded = async (container: any): Promise<void> => {
    console.log("Particles Loaded:", container);
  };

  return (
    <Particles
      id="backgroundParticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "#000000",
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2, // Reduce the number of particles added on click
            },
            repulse: {
              distance: 100, // Reduce the repulse distance
              duration: 0.2, // Shorten the repulse duration
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, // Constant speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: false, // Disable opacity animation
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: false, // Disable size animation
              speed: 0,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full -z-10 cursor-pointer"
    />
  );
};

export default BackgroundParticles;
