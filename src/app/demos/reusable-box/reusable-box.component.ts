import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

/**
 * ANIMATION CHALLENGE: REUSABLE BOX COMPONENT
 *
 * This component demonstrates:
 * 1. Using reusable animations with different parameters
 * 2. Animating items as they enter, leave, and move
 * 3. Handling complex scenarios like sorting
 *
 * Your challenge:
 * - Implement the missing animations in the reusable-animations.ts file
 * - Connect those animations to this component
 * - Enhance the animations with your own creative touches
 */

// Box interface for proper typing
interface AnimationBox {
  id: number;
  color: string;
  title: string;
  description: string;
  animation: string;
  removing?: boolean;
  entering?: boolean;
}

@Component({
  selector: 'app-reusable-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reusable-box.component.html',
  styleUrl: './reusable-box.component.scss',

  // CHALLENGE: Import and use the animations you've created
  // HINT: You'll need both boxAnimations and listAnimation
  animations: [
    // TODO: Add boxAnimations from appAnimations
    // TODO: Add listAnimation from appAnimations
  ],
})
export class ReusableBoxComponent implements AfterViewInit {
  @ViewChildren('boxElement') boxElements!: QueryList<ElementRef>;

  // Store positions for animation
  boxPositions = new Map<number, DOMRect>();

  // Initial box data
  initialBoxes: AnimationBox[] = [
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
   * CHALLENGE: Implement this method to return the appropriate animation state
   * HINT: Consider the box.animation value, and handle removing/entering states
   */
  getAnimationState(box: AnimationBox): string {
    // TODO: Return 'leave' when box.removing is true
    // TODO: Return 'enter' when box.entering is true
    // TODO: Otherwise return box.animation
    return 'default'; // Replace this with your implementation
  }

  /**
   * Remove a box by ID with animation
   * CHALLENGE: Make sure the box animates out before being removed from the DOM
   */
  removeBox(id: number): void {
    // TODO: Mark the box as removing to trigger animation
    // TODO: Use setTimeout to actually remove the box after animation completes

    // For now, just remove it immediately (replace this)
    this.boxes = this.boxes.filter((box) => box.id !== id);
  }

  /**
   * Restore all initial boxes
   * CHALLENGE: Make restored boxes animate in properly without abrupt spacing
   */
  restoreAllBoxes(): void {
    // TODO: Keep existing boxes, only add missing ones
    // TODO: Mark new boxes as 'entering' to trigger enter animation
    // TODO: Prevent abrupt spacing issues during animation

    // For now, just reset to initial state (replace this)
    this.boxes = [...this.initialBoxes];
    this.animationState++;
  }

  /**
   * Sort boxes by title
   * CHALLENGE: Animate boxes to their new positions when sorting
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
      // Sort by ID to restore original order without re-adding removed items
      newBoxes = [...this.boxes].sort((a, b) => a.id - b.id);
    }

    // Assign the sorted array and trigger animations
    this.boxes = newBoxes;
    this.animationState++;

    // CHALLENGE: Implement position animation using the Web Animations API
    // HINT: Calculate the difference between old and new positions

    // TODO: Loop through boxElements and apply animations with element.animate()
    // TODO: Use the position data stored in boxPositions
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
