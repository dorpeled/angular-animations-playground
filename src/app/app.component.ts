import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // CHALLENGE: Add route animations between views
  // animations: [
  //   trigger('routeAnimations', [
  //     // Define transitions between routes
  //   ])
  // ]
})
export class AppComponent {
  title = 'Angular Animations Playground';

  // CHALLENGE: Add prepareRoute method to bind route animations
}
