import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  collapseOut,
  expandIn,
  fadeIn,
} from '../../animations/reusable-animations';

// Box interface for proper typing
interface AnimationBox {
  id: number;
  color: string;
  title: string;
  description: string;
  animation: string;
  removing?: boolean;
}

@Component({
  selector: 'app-reusable-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-box.component.html',
  styleUrl: './reusable-box.component.scss',
  // DEMO: Using reusable animations with parameters
  animations: [
    // Single animation trigger that handles all animation types
    trigger('boxAnimation', [
      // Default enter animation
      transition(
        ':enter, * => enter',
        useAnimation(expandIn, {
          params: {
            duration: '400ms',
            easing: 'ease-out',
          },
        })
      ),
      // Standard leave animation
      transition(
        ':leave, * => leave',
        useAnimation(collapseOut, {
          params: {
            duration: '300ms',
            easing: 'ease-out',
          },
        })
      ),
      // Custom timing animations based on state
      transition(
        '* => slow',
        useAnimation(fadeIn, {
          params: {
            duration: '2000ms',
            easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)',
          },
        })
      ),
      transition(
        '* => medium',
        useAnimation(fadeIn, {
          params: {
            duration: '500ms',
            easing: 'ease-in',
          },
        })
      ),
      transition(
        '* => smooth',
        useAnimation(fadeIn, {
          params: {
            duration: '800ms',
            easing: 'ease-out',
          },
        })
      ),
    ]),

    // Animation for the container
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, height: 0 }),
            stagger(100, [
              animate('400ms ease', style({ opacity: 1, height: '*' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ReusableBoxComponent implements AfterViewInit {
  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;

  // Store positions for animation
  boxPositions = new Map<number, DOMRect>();

  // Initial box data
  private initialBoxes: AnimationBox[] = [
    {
      id: 1,
      color: '#4CAF50',
      title: 'Standard Fade In',
      description: 'Using the default animation with standard timing',
      animation: 'default',
    },
    {
      id: 2,
      color: '#9C27B0',
      title: 'Slow Fade In',
      description: 'Using a slow fade with custom cubic-bezier easing',
      animation: 'slow',
    },
    {
      id: 3,
      color: '#FF9800',
      title: 'Medium Fade In',
      description: 'Using a medium-speed fade with ease-in timing',
      animation: 'medium',
    },
    {
      id: 4,
      color: '#2196F3',
      title: 'Smooth Fade In',
      description: 'Using a smooth fade with ease-out timing function',
      animation: 'smooth',
    },
  ];

  // Current boxes
  boxes: AnimationBox[] = [...this.initialBoxes];

  // Current sort order (default: no sorting)
  currentSortOrder: 'default' | 'ascending' | 'descending' = 'default';

  // Animation trigger
  animationState = 0;

  ngAfterViewInit() {
    this.saveElementPositions();

    // Watch for changes to the list of elements
    this.boxElements.changes.subscribe(() => {
      setTimeout(() => this.saveElementPositions(), 0);
    });
  }

  /**
   * Save current positions of all box elements
   */
  saveElementPositions() {
    this.boxElements.forEach((element, index) => {
      const box = this.boxes[index];
      this.boxPositions.set(
        box.id,
        element.nativeElement.getBoundingClientRect()
      );
    });
  }

  /**
   * Track boxes by their ID for better animation performance
   */
  trackById(index: number, box: AnimationBox): number {
    return box.id;
  }

  /**
   * Get animation state for a specific box
   */
  getAnimationState(box: AnimationBox): string {
    return box.removing ? 'leave' : box.animation;
  }

  /**
   * Remove a box by ID
   */
  removeBox(id: number): void {
    // Mark the box as removing to trigger animation
    this.boxes = this.boxes.map((box) =>
      box.id === id ? { ...box, removing: true } : box
    );

    // Actual removal happens after animation completes
    setTimeout(() => {
      this.boxes = this.boxes.filter((box) => box.id !== id);
      this.animationState++;
    }, 300); // Match the collapseOut duration
  }

  /**
   * Restore all initial boxes
   */
  restoreAllBoxes(): void {
    this.saveElementPositions();
    // Using the spread operator creates a new array to trigger animations
    this.boxes = [...this.initialBoxes];
    this.animationState++;
  }

  /**
   * Sort boxes by title in the specified order
   */
  sortBoxes(): void {
    // Save current positions before sorting
    this.saveElementPositions();

    // Make a new array to trigger animations
    let newBoxes: AnimationBox[];

    // Cycle through sort orders
    if (this.currentSortOrder === 'default') {
      this.currentSortOrder = 'ascending';
      newBoxes = [...this.boxes].sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.currentSortOrder === 'ascending') {
      this.currentSortOrder = 'descending';
      newBoxes = [...this.boxes].sort((a, b) => b.title.localeCompare(a.title));
    } else {
      this.currentSortOrder = 'default';
      // Instead of using initialBoxes (which would restore removed items),
      // maintain the current set of boxes but sort them by ID to restore original order
      newBoxes = [...this.boxes].sort((a, b) => a.id - b.id);
    }

    // Assign the sorted array and trigger animations
    this.boxes = newBoxes;
    this.animationState++;

    // Apply CSS animations manually after DOM update
    setTimeout(() => {
      this.boxElements.forEach((element, index) => {
        const box = this.boxes[index];
        const oldPosition = this.boxPositions.get(box.id);
        const newPosition = element.nativeElement.getBoundingClientRect();

        if (oldPosition) {
          // Calculate the distance the element needs to move
          const deltaY = oldPosition.top - newPosition.top;

          if (deltaY) {
            // Apply animation using the Web Animations API
            element.nativeElement.animate(
              [
                { transform: `translateY(${deltaY}px)` },
                { transform: 'translateY(0)' },
              ],
              {
                duration: 400,
                easing: 'ease',
                fill: 'forwards',
              }
            );
          }
        }
      });

      // Update positions after animation
      setTimeout(() => this.saveElementPositions(), 400);
    }, 0);
  }

  /**
   * Get the current sort order text for the button
   */
  getSortButtonText(): string {
    switch (this.currentSortOrder) {
      case 'ascending':
        return 'Sort: Z to A';
      case 'descending':
        return 'Sort: Default';
      default:
        return 'Sort: A to Z';
    }
  }
}
