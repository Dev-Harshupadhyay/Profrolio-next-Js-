"use client";

import React from "react";

/**
 * Card wrapper kept for API compatibility — the 3D tilt/glare effects
 * have been removed (flat, motion-light redesign).
 */
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
  onClick,
}: Card3DProps) {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

interface Card3DItemProps {
  children: React.ReactNode;
  z?: number;
  className?: string;
}

/** Flat child wrapper (kept for API compatibility). */
export function Card3DItem({ children, className = "" }: Card3DItemProps) {
  return <div className={`relative ${className}`}>{children}</div>;
}
