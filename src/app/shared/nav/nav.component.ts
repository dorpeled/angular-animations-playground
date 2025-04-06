import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  routes = [
    { path: 'fade-card', label: 'Fade Card' },
    { path: 'toggle-panel', label: 'Toggle Panel' },
    { path: 'reusable-box', label: 'Reusable Box' },
  ];
}
