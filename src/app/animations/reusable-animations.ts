import {
  animate,
  animation,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

// CHALLENGE: Creating reusable animations with animation() and useAnimation()

// Fade In animation
export const fadeIn = animation(
  [
    style({ opacity: 0 }),
    animate('{{ duration }} {{ easing }}', style({ opacity: 1 })),
  ],
  {
    params: {
      duration: '400ms',
      easing: 'ease-in',
    },
  }
);

// Fade Out animation
export const fadeOut = animation(
  [
    style({ opacity: '*' }),
    animate('{{ duration }} {{ easing }}', style({ opacity: 0 })),
  ],
  {
    params: {
      duration: '400ms',
      easing: 'ease-out',
    },
  }
);

// Scale In animation
export const scaleIn = animation(
  [
    style({ opacity: 0, transform: 'scale(0.5)' }),
    animate(
      '{{ duration }} {{ easing }}',
      style({ opacity: 1, transform: 'scale(1)' })
    ),
  ],
  {
    params: {
      duration: '400ms',
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
  }
);

// Bounce In animation with keyframes
export const bounceIn = animation(
  [
    animate(
      '{{ duration }} {{ easing }}',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(0.5)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'scale(1.1)',
          offset: 0.7,
        }),
        style({
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    ),
  ],
  {
    params: {
      duration: '600ms',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  }
);

// Slide In Left animation
export const slideInLeft = animation(
  [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
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

// Slide In Right animation
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

// Slide In Up animation
export const slideInUp = animation(
  [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate(
      '{{ duration }} {{ easing }}',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ],
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
  fadeInOut: trigger('fadeInOut', [
    transition(':enter', useAnimation(fadeIn)),
    transition(':leave', useAnimation(fadeOut)),
  ]),
  bounceInOut: trigger('bounceInOut', [
    transition(':enter', useAnimation(bounceIn)),
    transition(':leave', useAnimation(fadeOut)),
  ]),
  scaleInOut: trigger('scaleInOut', [
    transition(':enter', useAnimation(scaleIn)),
    transition(':leave', useAnimation(fadeOut)),
  ]),
};
