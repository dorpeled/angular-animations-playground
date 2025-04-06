import { Routes } from '@angular/router';
import { FadeCardComponent } from './demos/fade-card/fade-card.component';
import { ReusableBoxComponent } from './demos/reusable-box/reusable-box.component';
import { TogglePanelComponent } from './demos/toggle-panel/toggle-panel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'fade-card', pathMatch: 'full' },
  { path: 'fade-card', component: FadeCardComponent },
  { path: 'toggle-panel', component: TogglePanelComponent },
  { path: 'reusable-box', component: ReusableBoxComponent },
  { path: '**', redirectTo: 'fade-card' },
];
