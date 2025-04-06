import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fade-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fade-card.component.html',
  styleUrl: './fade-card.component.scss',
  // CHALLENGE: Add fadeAnimation trigger with :enter and :leave transitions
  // animations: []
})
export class FadeCardComponent {
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

  // CHALLENGE: Try implementing a different timing function

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
