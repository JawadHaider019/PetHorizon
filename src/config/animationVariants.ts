// Reusable Framer Motion animation presets for scroll-triggered directional reveals

export const scrollTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
};

export const defaultViewport = {
  once: false,
  amount: 0.15
};

// Text & Headings: slide up from bottom to top
export const fadeInUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: defaultViewport,
  transition: scrollTransition
};

// Cards & Columns sliding from left to right
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: defaultViewport,
  transition: scrollTransition
};

// Cards & Columns sliding from right to left
export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: defaultViewport,
  transition: scrollTransition
};

// Directional staggered card generator
export const staggerCard = (
  index: number = 0,
  direction: 'left' | 'right' | 'up' = 'up',
  delayStep: number = 0.08
) => {
  const initial =
    direction === 'left'
      ? { opacity: 0, x: -35, y: 0 }
      : direction === 'right'
      ? { opacity: 0, x: 35, y: 0 }
      : { opacity: 0, y: 35, x: 0 };

  return {
    initial,
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: defaultViewport,
    whileHover: { y: -6, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
    transition: {
      duration: 0.6,
      delay: Math.min(index * delayStep, 0.35),
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  };
};

// Interactive micro-interaction presets
export const cardHoverMotion = {
  whileHover: {
    y: -6,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
};

export const buttonTapMotion = {
  whileHover: {
    scale: 1.025,
    transition: { duration: 0.15 }
  },
  whileTap: {
    scale: 0.975
  }
};

