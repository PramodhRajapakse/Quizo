import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    setParticles(newParticles);
  }, [dimensions]);

  return (
    <div
      className="position-fixed w-100 h-100 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #f0f2f5, #d9dce1, #c9ced6)",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="position-absolute bg-dark rounded-circle"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [
              particle.x,
              particle.x + particle.speedX * 200,
              particle.x + particle.speedX * 400,
              particle.x,
            ],
            y: [
              particle.y,
              particle.y + particle.speedY * 200,
              particle.y + particle.speedY * 400,
              particle.y,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <svg
        className="position-absolute w-100 h-100"
        style={{ pointerEvents: "none", top: 0, left: 0 }}
      >
        {particles.slice(0, 20).map((particle, index) => (
          <motion.line
            key={`line-${particle.id}`}
            x1={particle.x}
            y1={particle.y}
            x2={particles[(index + 1) % particles.length]?.x || 0}
            y2={particles[(index + 1) % particles.length]?.y || 0}
            stroke="rgba(57, 72, 103, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </svg>
    </div>
  );
}