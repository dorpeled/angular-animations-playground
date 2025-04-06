import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-b',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-b.component.html',
  styleUrl: './view-b.component.scss',
})
export class ViewBComponent {
  steps = [
    'Create a route animation trigger in the parent container',
    'Add animation metadata to routes or components',
    'Use router events to track navigation',
    'Define enter/leave transitions based on route data',
  ];
}
