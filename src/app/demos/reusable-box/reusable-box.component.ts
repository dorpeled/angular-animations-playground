import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fadeIn, fadeOut } from '../../animations/reusable-animations';

// Box interface for proper typing
interface AnimationBox {
  id: number;
  color: string;
  title: string;
  description: string;
  animation: string;
}

@Component({
  selector: 'app-reusable-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-box.component.html',
  styleUrl: './reusable-box.component.scss',
  // DEMO: Using reusable animations with parameters
  animations: [
    trigger('boxAnimation', [
      transition(':enter', useAnimation(fadeIn)),
      transition(
        ':leave',
        useAnimation(fadeOut, {
          params: {
            duration: '300ms',
          },
        })
      ),
    ]),

    trigger('customTiming', [
      transition(
        ':enter',
        useAnimation(fadeIn, {
          params: {
            duration: '2000ms',
            easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
          },
        })
      ),
      transition(
        ':leave',
        useAnimation(fadeOut, {
          params: {
            duration: '300ms',
          },
        })
      ),
    ]),

    // Fade animations with different timings for the slide boxes
    trigger('fadeAnimation3', [
      transition(
        ':enter',
        useAnimation(fadeIn, {
          params: {
            duration: '500ms',
            easing: 'ease-in',
          },
        })
      ),
      transition(
        ':leave',
        useAnimation(fadeOut, {
          params: {
            duration: '300ms',
          },
        })
      ),
    ]),

    trigger('fadeAnimation4', [
      transition(
        ':enter',
        useAnimation(fadeIn, {
          params: {
            duration: '800ms',
            easing: 'ease-out',
          },
        })
      ),
      transition(
        ':leave',
        useAnimation(fadeOut, {
          params: {
            duration: '300ms',
          },
        })
      ),
    ]),
  ],
})
export class ReusableBoxComponent {
  // Initial box data
  private initialBoxes: AnimationBox[] = [
    {
      id: 1,
      color: '#4CAF50',
      title: 'Standard Fade In',
      description: 'Using the fadeIn animation with default duration',
      animation: 'boxAnimation',
    },
    {
      id: 2,
      color: '#9C27B0',
      title: 'Slow Fade In',
      description: 'Using the fadeIn animation with extended duration',
      animation: 'customTiming',
    },
    {
      id: 3,
      color: '#FF9800',
      title: 'Medium Fade In',
      description: 'Using the fadeIn animation with medium duration',
      animation: 'fadeAnimation3',
    },
    {
      id: 4,
      color: '#2196F3',
      title: 'Smooth Fade In',
      description: 'Using the fadeIn animation with smooth ease-out timing',
      animation: 'fadeAnimation4',
    },
  ];

  // Current boxes
  boxes: AnimationBox[] = [...this.initialBoxes];

  /**
   * Track boxes by their ID for better animation performance
   */
  trackById(index: number, box: AnimationBox): number {
    return box.id;
  }

  /**
   * Remove a box by ID
   */
  removeBox(id: number): void {
    this.boxes = this.boxes.filter((box) => box.id !== id);
  }

  /**
   * Restore all initial boxes
   */
  restoreAllBoxes(): void {
    // Using the spread operator creates a new array to trigger animations
    this.boxes = [...this.initialBoxes];
  }
}
