import { Routes } from '@angular/router';

import { DocsComponent } from './pages/docs/docs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  // ===== LOGIN =====
  {
    path: 'login',
    component: LoginComponent
  },

  // ===== HOME =====
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  // ===== DOCS =====
  {
    path: 'docs/:section/:page',
    component: DocsComponent,
    canActivate: [authGuard]
  },

  // ===== FALLBACK =====
  {
    path: '**',
    redirectTo: ''
  }

];