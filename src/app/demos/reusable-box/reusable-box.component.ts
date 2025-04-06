import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reusable-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-box.component.html',
  styleUrl: './reusable-box.component.scss',
  // CHALLENGE: Add multiple animation triggers (boxAnimation, customTiming, slideAnimation, etc.)
  // and import animations from reusable-animations.ts
  // animations: []
})
export class ReusableBoxComponent {
  boxes = [
    {
      id: 1,
      color: '#4CAF50',
      title: 'Bounce In Animation',
      description: 'Using the bounceIn animation with custom duration',
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
      title: 'Slide In Left',
      description: 'Using the slideInLeft animation with default parameters',
      animation: 'slideAnimation',
    },
    {
      id: 4,
      color: '#2196F3',
      title: 'Slide In Right',
      description: 'Using the slideInRight animation with default parameters',
      animation: 'slideRightAnimation',
    },
  ];

  removeBox(id: number): void {
    this.boxes = this.boxes.filter((box) => box.id !== id);
  }

  restoreAllBoxes(): void {
    this.boxes = [
      {
        id: 1,
        color: '#4CAF50',
        title: 'Bounce In Animation',
        description: 'Using the bounceIn animation with custom duration',
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
        title: 'Slide In Left',
        description: 'Using the slideInLeft animation with default parameters',
        animation: 'slideAnimation',
      },
      {
        id: 4,
        color: '#2196F3',
        title: 'Slide In Right',
        description: 'Using the slideInRight animation with default parameters',
        animation: 'slideRightAnimation',
      },
    ];
  }
}
