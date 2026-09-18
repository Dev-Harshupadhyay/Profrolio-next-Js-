"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "icon";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  arrow?: boolean;
  loading?: boolean;
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
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  // Size classes
  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
    md: "text-sm px-5 py-2.5 h-10 gap-2",
    lg: "text-base px-6 py-3 h-12 gap-2.5",
  }[size];

  // Variant classes
  const variantClasses = {
    primary:
      "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-sm border border-transparent shadow-black/10 dark:shadow-white/5",
    secondary:
      "bg-neutral-100/90 text-neutral-900 dark:bg-white/10 dark:text-white hover:bg-neutral-200/90 dark:hover:bg-white/15 border border-neutral-200/80 dark:border-white/10 backdrop-blur-md",
    outline:
      "bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/20 hover:border-neutral-400 dark:hover:border-white/40 hover:bg-neutral-100/50 dark:hover:bg-white/5",
    ghost:
      "bg-transparent text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/60 dark:hover:bg-white/5",
    icon: "p-2 h-10 w-10 justify-center rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-white/10 text-neutral-700 dark:text-neutral-300",
  }[variant];

  const baseClasses = `group relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${
    variant === "icon" ? "" : sizeClasses
  } ${variantClasses} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
              {icon}
            </span>
          )}
          {children && <span>{children}</span>}
          {icon && iconPosition === "right" && (
            <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
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
          className={baseClasses}
          whileHover={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 1.025 }
          }
          whileTap={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 0.97 }
          }
          transition={{
            type: "spring" as const,
            stiffness: 450,
            damping: 25,
          }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        <motion.span
          className="inline-flex items-center gap-2"
          whileHover={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 1.025 }
          }
          whileTap={
            shouldReduceMotion || disabled || loading
              ? undefined
              : { scale: 0.97 }
          }
          transition={{
            type: "spring" as const,
            stiffness: 450,
            damping: 25,
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
      onClick={onClick}
      className={baseClasses}
      whileHover={
        shouldReduceMotion || disabled || loading
          ? undefined
          : { scale: 1.025 }
      }
      whileTap={
        shouldReduceMotion || disabled || loading
          ? undefined
          : { scale: 0.97 }
      }
      transition={{
        type: "spring" as const,
        stiffness: 450,
        damping: 25,
      }}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
