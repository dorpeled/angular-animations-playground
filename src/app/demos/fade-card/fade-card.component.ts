import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';

/**
 * ANIMATION CHALLENGE: FADE CARD
 *
 * This component demonstrates:
 * 1. Enter/leave animations using :enter and :leave transitions
 * 2. Handling initial rendering without unwanted animations
 * 3. Adding and removing items from a list with smooth transitions
 *
 * Your challenge:
 * - Implement the fadeAnimation trigger for smooth enter/leave animations
 * - Understand how to disable animations on initial render
 */

// Card data interface
interface Card {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-fade-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fade-card.component.html',
  styleUrl: './fade-card.component.scss',
  animations: [
    // CHALLENGE: Implement fadeAnimation trigger
    // TODO: Create a trigger called 'fadeAnimation' with two transitions:
    // 1. :enter - fade in and expand from height 0
    // 2. :leave - fade out and collapse to height 0
    /* Example structure:
    trigger('fadeAnimation', [
      // Enter transition
      transition(':enter', [
        style({ ... }), // Initial style
        animate('500ms ease-in', style({ ... })) // Final style
      ]),
      
      // Exit transition
      transition(':leave', [
        style({ ... }), // Initial style
        animate('500ms ease-out', style({ ... })) // Final style
      ])
    ])
    */
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeCardComponent {
  // Flag to disable animations on initial render
  disableAnimations = true;

  // Inject the ChangeDetectorRef
  cdr = inject(ChangeDetectorRef);

  // Initial set of cards
  cards: Card[] = [
    {
      id: 1,
      title: 'Card One',
      description: 'This is the first card that demonstrates fade animation',
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'This is the second card with the same animation applied',
    },
  ];

  constructor() {
    // IMPORTANT: This prevents animations from running on initial page load
    // By enabling animations only after the first render cycle
    afterNextRender(() => {
      this.disableAnimations = false;
      this.cdr.markForCheck();
    });
  }

  /**
   * Removes a card from the list by ID
   */
  removeCard(id: number): void {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  /**
   * Adds a new card to the list with an auto-incremented ID
   */
  addNewCard(): void {
    const newId =
      this.cards.length > 0 ? Math.max(...this.cards.map((c) => c.id)) + 1 : 1;

    this.cards.push({
      id: newId,
      title: `Card ${newId}`,
      description: `This is a new card with id ${newId}`,
    });
  }
}
