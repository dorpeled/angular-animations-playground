import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // DEMO: Route animations between views
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Initial state of new page
        query(
          ':enter',
          [style({ opacity: 0, position: 'absolute', width: '100%' })],
          {
            optional: true,
          }
        ),

        query(
          ':leave',
          [style({ opacity: 1, position: 'absolute', width: '100%' })],
          {
            optional: true,
          }
        ),

        group([
          // Animation for the page being removed
          query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
            optional: true,
          }),

          // Animation for the new page
          query(':enter', [animate('500ms ease-in', style({ opacity: 1 }))], {
            optional: true,
          }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Angular Animations Playground';

  // Method to prepare route for animation
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
