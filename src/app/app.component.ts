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
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Set initial states for entering and leaving pages
        query(
          ':enter',
          [
            style({
              opacity: 0,
              position: 'absolute',
              width: '100%',
            }),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            style({
              opacity: 1,
              position: 'absolute',
              width: '100%',
            }),
          ],
          { optional: true }
        ),

        // Run animations in parallel
        group([
          // Fade out the leaving page
          query(':leave', [animate('300ms ease-out', style({ opacity: 0 }))], {
            optional: true,
          }),

          // Fade in the entering page
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}
