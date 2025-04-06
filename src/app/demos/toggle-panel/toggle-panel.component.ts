import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * ANIMATION CHALLENGE: TOGGLE PANEL
 *
 * This component demonstrates:
 * 1. State-based animations with Angular
 * 2. Transitions between states
 * 3. Animating multiple properties at once
 *
 * Your challenge:
 * - Implement the expandCollapse animation trigger
 * - Add a staggered animation for multiple panels
 */

@Component({
  selector: 'app-toggle-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-panel.component.html',
  styleUrl: './toggle-panel.component.scss',
  // DEMO: Animation with state changes - expandCollapse
  animations: [
    // CHALLENGE: Implement state-based animations
    // TODO: Create expandCollapse trigger with two states:
    // 1. 'collapsed' state: height: 0, opacity: 0, padding: 0, transform: translateX(15px)
    // 2. 'expanded' state: height: *, opacity: 1, padding: *, transform: translateX(0)
    // 3. Add a transition between states using cubic-bezier easing
    /* Example:
    trigger('expandCollapse', [
      state('collapsed', style({ ... })),
      state('expanded', style({ ... })),
      transition('collapsed <=> expanded', [
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
    */
  ],
})
export class TogglePanelComponent {
  panels = [
    {
      id: 1,
      title: 'What are Angular animations?',
      content:
        'Angular animations are built on top of the standard Web Animations API and provide a DSL (domain-specific language) for creating animations in a very intuitive way. They provide a way to add smooth transitions between states.',
      state: 'collapsed',
    },
    {
      id: 2,
      title: 'How do state-based animations work?',
      content:
        'State-based animations in Angular define different visual states and the transitions between them. This method provides a clean separation between the state logic in your component and the animation implementation.',
      state: 'collapsed',
    },
    {
      id: 3,
      title: 'What is the expandCollapse animation?',
      content:
        'The expandCollapse animation demonstrates how to smoothly transition between open and closed states of a panel by animating height, opacity and padding simultaneously.',
      state: 'collapsed',
    },
  ];

  /**
   * BONUS CHALLENGE: Add a staggered animation when multiple panels are toggled
   *
   * HINTS:
   * 1. Use query() and stagger() to select all elements with a specific state
   * 2. Apply the animations with a delay between each element
   * 3. Consider adding a new trigger for this purpose
   */

  togglePanel(panel: any): void {
    panel.state = panel.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  toggleAll(state: 'collapsed' | 'expanded'): void {
    this.panels.forEach((panel) => (panel.state = state));
  }
}
