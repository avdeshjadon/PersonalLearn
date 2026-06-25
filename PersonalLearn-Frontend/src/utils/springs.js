/**
 * Global Spring Physics Configurations for Framer Motion
 * 
 * Using physics-based springs instead of duration-based tweens provides
 * a much more fluid, organic, and "buttery smooth" Apple-like feel.
 */

// Fluid, organic sliding (Ideal for lists, layout shifts, modals)
export const springSmooth = { 
  type: 'spring', 
  stiffness: 300, 
  damping: 30,
  mass: 1 
};

// Playful, responsive pop (Ideal for small toggles, checkboxes, new items appearing)
export const springBouncy = { 
  type: 'spring', 
  stiffness: 400, 
  damping: 25,
  mass: 1 
};

// Fast, immediate scale (Ideal for large Modals where you don't want too much bounce)
export const springSnappy = { 
  type: 'spring', 
  stiffness: 500, 
  damping: 35,
  mass: 1 
};

// Very subtle float effect for sustained animations or very slow reveals
export const springFloat = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1
};
