import { transition, trigger, useAnimation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  bounceIn,
  fadeIn,
  fadeOut,
  slideInLeft,
  slideInRight,
} from '../../animations/reusable-animations';

@Component({
  selector: 'app-reusable-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-box.component.html',
  styleUrl: './reusable-box.component.scss',
  animations: [
    // DEMO: Using reusable animations with parameters
    trigger('boxAnimation', [
      transition(
        ':enter',
        useAnimation(bounceIn, {
          params: {
            duration: '800ms',
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
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
    ]),

    trigger('slideAnimation', [
      transition(':enter', useAnimation(slideInLeft)),
    ]),

    trigger('slideRightAnimation', [
      transition(':enter', useAnimation(slideInRight)),
    ]),
  ],
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
