import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-a',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-a.component.html',
  styleUrl: './view-a.component.scss',
})
export class ViewAComponent {
  features = [
    'Route-based animations',
    'Shared transitions',
    'Page-specific animation params',
    'Router events integration',
  ];
}
