import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-fade-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fade-card.component.html',
  styleUrl: './fade-card.component.scss',
  animations: [
    trigger('fadeAnimation', [
      // Enter transition
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })),
      ]),
      // Exit transition
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FadeCardComponent {
  // Used to disable initial animations
  disableAnimations = true;
  cdr = inject(ChangeDetectorRef);

  cards = [
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
    // Properly use afterNextRender within the injection context
    afterNextRender(() => {
      // Now animations will be enabled for any new cards
      this.disableAnimations = false;
      this.cdr.markForCheck();
    });
  }

  removeCard(id: number): void {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

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
