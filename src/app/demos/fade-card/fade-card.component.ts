import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';

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
    trigger('fadeAnimation', [
      // Enter transition - fades in and expands
      transition(':enter', [
        style({
          opacity: 0,
          height: 0,
          overflow: 'hidden',
          margin: 0,
          padding: 0,
        }),
        animate(
          '500ms ease-in',
          style({
            opacity: 1,
            height: '*', // Auto height
            margin: '*',
            padding: '*',
          })
        ),
      ]),
      // Exit transition - fades out and collapses
      transition(':leave', [
        style({
          opacity: 1,
          height: '*',
          overflow: 'hidden',
        }),
        animate(
          '500ms ease-out',
          style({
            opacity: 0,
            height: 0,
            margin: 0,
            padding: 0,
          })
        ),
      ]),
    ]),
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
    // Enable animations after initial render to prevent animation on load
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
