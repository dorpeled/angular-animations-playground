import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

/**
 * INTRODUCTION TO ANGULAR ANIMATIONS
 *
 * This file contains animation challenges to help you learn Angular animations.
 *
 * Key concepts:
 * - animations() creates reusable animations with customizable parameters
 * - useAnimation() applies these reusable animations in triggers
 * - Parameters allow for customizing duration, easing, etc.
 * - Triggers connect animations to component templates
 */

// CHALLENGE 1: Create a simple fade in animation
// HINT: Use style() to set initial state and animate() to final state
export const fadeIn = animation(
  [
    // TODO: Set initial opacity to 0
    // TODO: Animate to opacity 1 with parameterized duration and easing
  ],
  {
    // TODO: Define default parameters (duration and easing)
    params: {
      duration: '400ms',
      easing: 'ease-in',
    },
  }
);

// CHALLENGE 2: Create a fade out animation
export const fadeOut = animation(
  [
    // TODO: Start with current opacity (hint: use '*')
    // TODO: Animate to opacity 0
  ],
  {
    params: {
      duration: '400ms',
      easing: 'ease-out',
    },
  }
);

// Example: Scale In animation - study this as a reference
export const scaleIn = animation(
  [
    style({ opacity: 0, transform: 'scale(0.5)' }), // Initial state
    animate(
      '{{ duration }} {{ easing }}', // Parameterized timing
      style({ opacity: 1, transform: 'scale(1)' }) // Final state
    ),
  ],
  {
    params: {
      duration: '400ms', // Default duration
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Default easing curve
    },
  }
);

// CHALLENGE 3: Create a bounce in animation using keyframes
// HINT: Keyframes allow for multiple steps in an animation
export const bounceIn = animation(
  [
    // TODO: Use animate with keyframes
    // TODO: Create keyframes with offsets 0, 0.7, and 1
    // TODO: Scale from 0.5 to 1.1 to 1.0
  ],
  {
    params: {
      duration: '600ms',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  }
);

// CHALLENGE 4: Create a slide in from left animation
export const slideInLeft = animation(
  [
    // TODO: Initial state with opacity 0 and translateX(-100%)
    // TODO: Animate to opacity 1 and translateX(0)
  ],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

// Example: Slide In Right animation - use this as a reference
export const slideInRight = animation(
  [
    style({ opacity: 0, transform: 'translateX(100%)' }),
    animate(
      '{{ duration }} {{ easing }}',
      style({ opacity: 1, transform: 'translateX(0)' })
    ),
  ],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

// CHALLENGE 5: Create a slide in from bottom animation
export const slideInUp = animation(
  [
    // TODO: Implement slide from bottom (translateY(100%)) to center
  ],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

/**
 * ADVANCED ANIMATION CONCEPTS
 *
 * The animations below demonstrate more complex techniques:
 * - Animating multiple properties simultaneously
 * - Working with height and margin animations
 * - Using overflow to prevent content spill
 */

// CHALLENGE 6: Create an expand animation that animates height, margins and padding
export const expandIn = animation(
  [
    // TODO: Set initial state with opacity 0, height 0, no margins/padding and overflow hidden
    // TODO: Animate to natural values (hint: use '*' for computed values)
  ],
  {
    params: {
      duration: '400ms',
      easing: 'ease-out',
    },
  }
);

// CHALLENGE 7: Create a collapse animation (reverse of expandIn)
export const collapseOut = animation(
  [
    // TODO: Start with current styles (opacity, height, margin, padding)
    // TODO: Animate to opacity 0, height 0, no margins/padding
  ],
  {
    params: {
      duration: '300ms',
      easing: 'ease-out',
    },
  }
);

// CHALLENGE 8: Create fade in animations with different timing characteristics
// This one should be very slow with a special easing curve
export const slowFadeIn = animation(
  [
    // TODO: Create a fade in with 2000ms duration and special cubic-bezier curve
  ],
  {
    params: {
      duration: '2000ms',
      easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
    },
  }
);

// Medium speed fade with ease-in
export const mediumFadeIn = animation(
  [
    // TODO: Create a medium-speed fade with ease-in
  ],
  {
    params: {
      duration: '500ms',
      easing: 'ease-in',
    },
  }
);

// Smooth fade with ease-out
export const smoothFadeIn = animation(
  [
    // TODO: Create a smooth fade with ease-out
  ],
  {
    params: {
      duration: '800ms',
      easing: 'ease-out',
    },
  }
);

/**
 * WORKING WITH LISTS AND STAGGERED ANIMATIONS
 *
 * This section demonstrates:
 * - Querying for elements using query()
 * - Staggering animations with stagger()
 * - Working with optional elements
 */

// CHALLENGE 9: Create a staggered list animation
export const listStaggerAnimation = animation(
  [
    // TODO: Use query() to find ':enter' elements
    // TODO: Inside query, set initial styles and use stagger() to delay each item
    // TODO: Make sure to mark query as optional: { optional: true }
  ],
  {
    params: {
      staggerDuration: '100ms',
      itemDuration: '400ms',
      easing: 'ease',
    },
  }
);

/**
 * CREATING READY-TO-USE ANIMATION TRIGGERS
 *
 * This section shows how to:
 * - Create animation triggers that components can use directly
 * - Combine reusable animations into practical triggers
 * - Handle different transition states
 */

// Helper trigger for creating quick animations
export const appAnimations = {
  // CHALLENGE 10: Create a fade in/out trigger
  fadeInOut: trigger('fadeInOut', [
    // TODO: Use transition with :enter and useAnimation(fadeIn)
    // TODO: Use transition with :leave and useAnimation(fadeOut)
  ]),

  // CHALLENGE 11: Create a bounce in/out trigger
  bounceInOut: trigger('bounceInOut', [
    // TODO: Enter with bounceIn animation
    // TODO: Leave with fadeOut animation
  ]),

  // Example: Scale in/out trigger
  scaleInOut: trigger('scaleInOut', [
    transition(':enter', useAnimation(scaleIn)),
    transition(':leave', useAnimation(fadeOut)),
  ]),

  // CHALLENGE 12: Create an expand/collapse trigger
  expandCollapse: trigger('expandCollapse', [
    // TODO: Use expandIn for enter
    // TODO: Use collapseOut for leave
  ]),

  // CHALLENGE 13: Create a comprehensive box animation with multiple states
  boxAnimations: trigger('boxAnimations', [
    // TODO: Default enter animation (use expandIn)
    // TODO: Standard leave animation (use collapseOut)
    // TODO: Add custom timing animations for 'slow', 'medium', and 'smooth' states
  ]),

  // CHALLENGE 14: Create a staggered list animation trigger
  listAnimation: trigger('listAnimation', [
    // TODO: Create a transition that handles any state change ('* => *')
    // TODO: Add staggered animation for entering elements
  ]),
};

/**
 * NEXT STEPS:
 * 1. Implement the TODOs in this file
 * 2. Apply these animations in component templates
 * 3. Experiment with different parameters
 * 4. Create your own custom animations!
 */
