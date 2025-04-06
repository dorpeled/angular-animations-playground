# Angular Animations Playground

A comprehensive demo and educational playground for teaching Angular animations techniques, designed for a 1-hour knowledge-sharing session.

## Overview

This project showcases various Angular animation techniques, from basic to advanced:

1. **Fade Card Demo** - Simple entry/exit animations
2. **Toggle Panel** - State-based animations
3. **Reusable Box** - Reusable and parameterized animations
4. **Route Views** - Route transition animations

## Getting Started

### Prerequisites

- Node.js v18.19.0 or higher
- Angular CLI

### Installation

```bash
# Clone the repository (if applicable)
git clone <repository-url>

# Navigate to project directory
cd angular-animations-playground

# Install dependencies
npm install

# Start the development server
npm start
```

The application will run at `http://localhost:4200/`

## Demo Components

### 1. Fade Card

- Demonstrates `:enter` and `:leave` animations using opacity
- Shows how to animate elements being added to or removed from the DOM

### 2. Toggle Panel

- Shows state-based animations with the `@expandCollapse` trigger
- Transitions between `expanded` and `collapsed` states
- Animates multiple properties simultaneously

### 3. Reusable Box

- Demonstrates creating reusable animations with the `animation()` function
- Shows how to use `useAnimation()` to reuse animations
- Illustrates parameter customization for reused animations

### 4. Route Views

- Demonstrates route transition animations
- Shows navigation between different views with smooth transitions

## Key Concepts

- Triggers, states, and transitions
- Entry and exit animations
- Parameterized animations
- Reusable animation libraries
- Route-based animations

## Challenges for Participants

Throughout the codebase, you'll find commented sections marked with `// CHALLENGE` indicating areas where participants can experiment and expand the animations.

## Learning Resources

- [Angular Animations Guide](https://angular.io/guide/animations)
- [Angular Animations API](https://angular.io/api/animations)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

## License

This project is licensed under the MIT License.
