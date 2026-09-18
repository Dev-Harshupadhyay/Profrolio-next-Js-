"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { useReducedMotion } from "framer-motion";

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;
    let isVisible = true;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central 3D Icosahedron Hologram Wireframe
    const icosaGeometry = new THREE.IcosahedronGeometry(1.8, 1);
    const isDark = resolvedTheme !== "light";

    const wireframeColor = isDark ? 0x38bdf8 : 0x0284c7;
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.25 : 0.2,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    group.add(icosaMesh);

    // 2. Inner Glowing Core
    const innerGeometry = new THREE.OctahedronGeometry(1.0, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x818cf8 : 0x4f46e5,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // 3. Surrounding 3D Orbital Rings
    const ringGeometry1 = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ringMaterial1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0ea5e9,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
    });
    const ring1 = new THREE.Mesh(ringGeometry1, ringMaterial1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeometry2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ringMaterial2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0xa855f7 : 0x7c3aed,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    group.add(ring2);

    // 4. Floating 3D Star / Particle Nodes Field
    const particlesCount = 180;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 12;
      posArray[i + 1] = (Math.random() - 0.5) * 12;
      posArray[i + 2] = (Math.random() - 0.5) * 8;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    group.add(particlesMesh);

    // Mouse Tracking with Eased Damping
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Intersection Observer to pause when offscreen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    });
    observer.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y = targetX * 3 + elapsedTime * 0.08;
      group.rotation.x = targetY * 3 + Math.sin(elapsedTime * 0.5) * 0.1;

      // Rotate individual components
      icosaMesh.rotation.x = elapsedTime * 0.12;
      icosaMesh.rotation.y = elapsedTime * 0.15;

      innerMesh.rotation.x = -elapsedTime * 0.2;
      innerMesh.rotation.z = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.12;

      // Float effect
      group.position.y = Math.sin(elapsedTime * 0.8) * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icosaGeometry.dispose();
      innerGeometry.dispose();
      ringGeometry1.dispose();
      ringGeometry2.dispose();
      particlesGeometry.dispose();
    };
  }, [resolvedTheme, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none -z-0 w-full h-full opacity-70 dark:opacity-60 overflow-hidden"
      aria-hidden="true"
    />
  );
}
