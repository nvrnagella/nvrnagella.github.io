import { Routes } from '@angular/router';
import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },   // ⭐ NEW default page
  { path: 'docs/:section/:page', component: DocsComponent },
  { path: '**', redirectTo: '' }            // ⭐ fallback to home
];
