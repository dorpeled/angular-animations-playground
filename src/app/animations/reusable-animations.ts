import { animation, trigger } from '@angular/animations';

// CHALLENGE: Creating reusable animations with animation() and useAnimation()

// Fade In animation
export const fadeIn = animation(
  // CHALLENGE: Implement fadeIn animation
  [],
  {
    params: {
      duration: '400ms',
      easing: 'ease-in',
    },
  }
);

// Fade Out animation
export const fadeOut = animation(
  // CHALLENGE: Implement fadeOut animation
  [],
  {
    params: {
      duration: '400ms',
      easing: 'ease-out',
    },
  }
);

// Scale In animation
export const scaleIn = animation(
  // CHALLENGE: Implement scaleIn animation
  [],
  {
    params: {
      duration: '400ms',
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
  }
);

// Bounce In animation with keyframes
export const bounceIn = animation(
  // CHALLENGE: Implement bounceIn animation with keyframes
  [],
  {
    params: {
      duration: '600ms',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  }
);

// Slide In Left animation
export const slideInLeft = animation(
  // CHALLENGE: Implement slideInLeft animation
  [],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

// Slide In Right animation
export const slideInRight = animation(
  // CHALLENGE: Implement slideInRight animation
  [],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

// Slide In Up animation
export const slideInUp = animation(
  // CHALLENGE: Implement slideInUp animation
  [],
  {
    params: {
      duration: '500ms',
      easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    },
  }
);

// CHALLENGE: Create your own custom animation with keyframes

// Helper trigger for creating quick animations
export const appAnimations = {
  // CHALLENGE: Implement the following triggers using the reusable animations
  fadeInOut: trigger('fadeInOut', []),
  bounceInOut: trigger('bounceInOut', []),
  scaleInOut: trigger('scaleInOut', []),
};
