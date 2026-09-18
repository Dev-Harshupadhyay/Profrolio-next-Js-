"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glare?: boolean;
  glowColor?: string;
  onClick?: () => void;
}

export function Card3D({
  children,
  className = "",
  depth = 12,
  glare = true,
  glowColor = "rgba(56, 189, 248, 0.15)",
  onClick,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calculate normalized coords (-1 to 1)
      const xPct = (mouseX / width - 0.5) * 2;
      const yPct = (mouseY / height - 0.5) * 2;

      setRotateX(-yPct * depth);
      setRotateY(xPct * depth);

      setGlarePos({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.8,
      });
    },
    [depth, shouldReduceMotion]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  if (shouldReduceMotion) {
    return (
      <div className={`relative ${className}`} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: "1000px" }}
      className={`relative transform-gpu ${className}`}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}, 0 0 25px -5px ${glowColor}`
            : "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-inherit overflow-hidden"
      >
        {/* Child Content with 3D Preservation */}
        <div style={{ transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>

        {/* Dynamic Specular 3D Glare / Light Reflection */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 z-50 rounded-inherit transition-opacity duration-300"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 300px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.12), transparent 80%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

// 3D Pop-out Layer Component for content inside Card3D
export function Card3DItem({
  children,
  z = 30,
  className = "",
}: {
  children: React.ReactNode;
  z?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{
        transform: shouldReduceMotion ? undefined : `translateZ(${z}px)`,
        transformStyle: "preserve-3d",
      }}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
