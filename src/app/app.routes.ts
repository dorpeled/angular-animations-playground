import { Routes } from '@angular/router';
import { FadeCardComponent } from './demos/fade-card/fade-card.component';
import { ReusableBoxComponent } from './demos/reusable-box/reusable-box.component';
import { ViewAComponent } from './demos/route-views/view-a/view-a.component';
import { ViewBComponent } from './demos/route-views/view-b/view-b.component';
import { TogglePanelComponent } from './demos/toggle-panel/toggle-panel.component';

export const routes: Routes = [
  { path: '', redirectTo: 'fade-card', pathMatch: 'full' },
  { path: 'fade-card', component: FadeCardComponent },
  { path: 'toggle-panel', component: TogglePanelComponent },
  { path: 'reusable-box', component: ReusableBoxComponent },
  { path: 'route-views/view-a', component: ViewAComponent },
  { path: 'route-views/view-b', component: ViewBComponent },
  { path: '**', redirectTo: 'fade-card' },
];
