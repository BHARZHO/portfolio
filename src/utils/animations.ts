/**
 * Standardized Framer Motion variants and transitions to maintain design system continuity.
 */

// Premium spring transitions for physical feel
export const transitions = {
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  smooth: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.3,
  },
} as const;

// Fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
} as const;

// Entrance directions
export const slideUp = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

export const slideInLeft = {
  hidden: { x: -24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

export const slideInRight = {
  hidden: { x: 24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
} as const;

// Stagger parent container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
} as const;

// Scale-up animations
export const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
} as const;
