import { Routes } from '@angular/router';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'docs/daily-logic/day01-char-frequency', pathMatch: 'full' },
  { path: 'docs/:section/:page', component: DocsComponent },
  { path: '**', redirectTo: 'docs/daily-logic/day01-char-frequency' }
];
