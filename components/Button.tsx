"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { playTactileClick } from "@/lib/sound";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "icon" | "glow";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  arrow?: boolean;
  loading?: boolean;
  confettiEffect?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  arrow = false,
  loading = false,
  confettiEffect = false,
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  // Handle tactile click + confetti
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    playTactileClick();

    if (confettiEffect || variant === "glow") {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      try {
        confetti({
          particleCount: 28,
          spread: 60,
          origin: { x, y },
          colors: ["#38bdf8", "#818cf8", "#3b82f6", "#ffffff", "#34d399"],
          ticks: 120,
          gravity: 1.2,
          scalar: 0.8,
          shapes: ["circle"],
        });
      } catch (err) {
        // Safe fallback
      }
    }

    if (onClick) {
      onClick(e as any);
    }
  };

  // Size classes
  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
    md: "text-sm px-5 py-2.5 h-10 gap-2",
    lg: "text-base px-6 py-3.5 h-12 gap-2.5",
  }[size];

  // 3D tactile variant classes
  const variantClasses = {
    primary:
      "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-[0_4px_0_0_rgba(0,0,0,0.3)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.4)] active:translate-y-1 active:shadow-[0_0_0_0_rgba(0,0,0,0)] border border-neutral-700/50 dark:border-white/30",
    glow:
      "bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white shadow-[0_4px_0_0_#1d4ed8,0_0_20px_rgba(56,189,248,0.4)] active:translate-y-1 active:shadow-[0_0_0_0_#1d4ed8] border border-sky-400/40 hover:brightness-110",
    secondary:
      "bg-neutral-100/90 text-neutral-900 dark:bg-neutral-900/90 dark:text-white hover:bg-neutral-200/90 dark:hover:bg-neutral-800 border border-neutral-300/80 dark:border-white/15 shadow-[0_3px_0_0_rgba(0,0,0,0.08)] dark:shadow-[0_3px_0_0_rgba(255,255,255,0.08)] active:translate-y-0.5 active:shadow-none backdrop-blur-md",
    outline:
      "bg-transparent text-neutral-900 dark:text-white border-2 border-neutral-300 dark:border-white/20 hover:border-sky-500 dark:hover:border-sky-400 hover:bg-sky-500/5 active:translate-y-0.5",
    ghost:
      "bg-transparent text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-white/5 active:scale-95",
    icon:
      "p-2 h-10 w-10 justify-center rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-white/10 text-neutral-700 dark:text-neutral-300 shadow-[0_2px_0_0_rgba(0,0,0,0.08)] dark:shadow-[0_2px_0_0_rgba(255,255,255,0.08)] active:translate-y-0.5 active:shadow-none",
  }[variant];

  const baseClasses = `group relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none transform-gpu ${
    variant === "icon" ? "" : sizeClasses
  } ${variantClasses} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:scale-110">
              {icon}
            </span>
          )}
          {children && <span className="tracking-tight">{children}</span>}
          {icon && iconPosition === "right" && (
            <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:scale-110">
              {icon}
            </span>
          )}
          {arrow && (
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </>
      )}
    </>
  );

  if (href) {
    const isExternalLink =
      external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternalLink) {
      return (
        <motion.a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          onClick={handleClick as any}
          className={baseClasses}
          whileHover={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 1.03 }
          }
          whileTap={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 0.96 }
          }
          transition={{
            type: "spring" as const,
            stiffness: 500,
            damping: 20,
          }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={baseClasses} onClick={handleClick as any}>
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 1.03 }
          }
          whileTap={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 0.96 }
          }
          transition={{
            type: "spring" as const,
            stiffness: 500,
            damping: 20,
          }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={props.type || "button"}
      disabled={disabled || loading}
      onClick={handleClick}
      className={baseClasses}
      whileHover={
        shouldReduceMotion || disabled || loading
          ? undefined
          : { scale: 1.03 }
      }
      whileTap={
        shouldReduceMotion || disabled || loading
          ? undefined
          : { scale: 0.96 }
      }
      transition={{
        type: "spring" as const,
        stiffness: 500,
        damping: 20,
      }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
