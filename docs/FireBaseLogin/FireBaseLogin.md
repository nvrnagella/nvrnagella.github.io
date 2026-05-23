# Firebase Authentication Integration Guide (Angular + GitHub Pages)

## 1. Overview

This document explains how to integrate secure Firebase Authentication into an Angular standalone application hosted on GitHub Pages.

After completing this setup:

* Users must log in before accessing the app
* Authentication is handled securely by Firebase
* No backend/API is required
* Authentication state persists automatically
* GitHub Pages deployment works correctly

---

# 2. Why Firebase Authentication?

## Previous Approach (Not Secure)

Initially authentication was implemented like this:

```ts
private USERNAME = 'venkat';
private PASSWORD = 'password';
```

Problems:

* Credentials visible in browser bundle
* Easy to bypass
* Not production secure
* Anyone can inspect source code

---

## Firebase Authentication Advantages

Firebase solves these issues:

| Feature                 | Supported |
| ----------------------- | --------- |
| Secure login            | ✅         |
| Password encryption     | ✅         |
| Session management      | ✅         |
| Persistent login        | ✅         |
| No backend needed       | ✅         |
| Free tier               | ✅         |
| GitHub Pages compatible | ✅         |

---

# 3. Architecture

```text
Angular App
      ↓
Firebase Authentication
      ↓
Secure Login Validation
      ↓
JWT/Auth Token
      ↓
Protected Routes
```

---

# 4. Firebase Project Setup

## Step 1 — Create Firebase Project

Go to:

[Firebase Console](https://console.firebase.google.com?utm_source=chatgpt.com)

Create project:

```text
knowledge-hub-nvr
```

---

## Step 2 — Register Web App

Inside Firebase:

```text
Project Overview
   ↓
Add App
   ↓
Web (</>)
```

App nickname:

```text
knowledge-hub
```

---

## Step 3 — Firebase Configuration

Firebase generated:

```ts
const firebaseConfig = {

  apiKey: "AIzaSyAsa-UEz1nH7acEbWGNmnMI1NB6dEe_UOw",

  authDomain: "knowledge-hub-nvr.firebaseapp.com",

  projectId: "knowledge-hub-nvr",

  storageBucket: "knowledge-hub-nvr.firebasestorage.app",

  messagingSenderId: "636975707938",

  appId: "1:636975707938:web:387b33213860992ec3977b"

};
```

---

# 5. Enable Authentication

## Navigate

```text
Security
   ↓
Authentication
```

---

## Enable Provider

Open:

```text
Sign-in method
```

Enable:

```text
Email/Password
```

Save.

---

# 6. Create Firebase User

Navigate:

```text
Authentication
   ↓
Users
```

Click:

```text
Add User
```

Create:

```text
Email
Password
```

Example:

```text
venkat@gmail.com
StrongPassword123
```

This becomes the valid login account.

---

# 7. Install Firebase SDK

Run:

```bash
npm install firebase
```

---

# 8. Environment Configuration

## Create Folder

```text
src/environments
```

---

## Create File

```text
src/environments/environment.ts
```

---

## Add Configuration

```ts
export const environment = {

  firebaseConfig: {

    apiKey: "AIzaSyAsa-UEz1nH7acEbWGNmnMI1NB6dEe_UOw",

    authDomain: "knowledge-hub-nvr.firebaseapp.com",

    projectId: "knowledge-hub-nvr",

    storageBucket: "knowledge-hub-nvr.firebasestorage.app",

    messagingSenderId: "636975707938",

    appId: "1:636975707938:web:387b33213860992ec3977b"

  }

};
```

---

# 9. Auth Service

## File

```text
src/app/services/auth.service.ts
```

---

## Purpose

This service:

* Initializes Firebase
* Performs login
* Performs logout
* Tracks authentication state
* Exposes login status

---

## Final Code

```ts
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';

import {

  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User

} from 'firebase/auth';

import { environment } from '../../environments/environment';

const app = initializeApp(
  environment.firebaseConfig
);

const auth = getAuth(app);

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User | null = null;

  authReady = false;

  constructor(
    private router: Router
  ) {

    onAuthStateChanged(auth, (user) => {

      this.currentUser = user;

      this.authReady = true;

    });

  }

  async login(
    email: string,
    password: string
  ) {

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  }

  async logout() {

    await signOut(auth);

    this.router.navigate(['/login']);

  }

  isLoggedIn(): boolean {

    return this.currentUser !== null;

  }

}
```

---

# 10. Route Guard

## File

```text
src/app/guards/auth.guard.ts
```

---

## Purpose

Protects routes from unauthorized access.

Without login:

```text
Redirect → /login
```

---

## Final Code

```ts
import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async () => {

  const auth = inject(AuthService);

  const router = inject(Router);

  while (!auth.authReady) {

    await new Promise(resolve =>
      setTimeout(resolve, 50)
    );

  }

  if (auth.isLoggedIn()) {

    return true;

  }

  router.navigate(['/login']);

  return false;

};
```

---

# 11. Login Component

## Generate Component

```bash
ng generate component pages/login --standalone
```

---

# 12. Login Component TS

## File

```text
src/app/pages/login/login.component.ts
```

---

## Final Code

```ts
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';

  password = '';

  error = '';

  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async login() {

    this.error = '';

    this.loading = true;

    try {

      await this.auth.login(
        this.email,
        this.password
      );

      this.router.navigate(['/']);

    }
    catch (err) {

      this.error =
        'Invalid email or password';

    }
    finally {

      this.loading = false;

    }

  }

}
```

---

# 13. Login Component HTML

## File

```text
src/app/pages/login/login.component.html
```

---

## Final Code

```html
<div class="login-container">

  <div class="login-card">

    <h2>
      Knowledge Hub Login
    </h2>

    <input
      type="email"
      placeholder="Email"
      [(ngModel)]="email"
    />

    <input
      type="password"
      placeholder="Password"
      [(ngModel)]="password"
    />

    <button
      (click)="login()"
      [disabled]="loading"
    >

      {{ loading ? 'Signing In...' : 'Login' }}

    </button>

    <p *ngIf="error" class="error">

      {{ error }}

    </p>

  </div>

</div>
```

---

# 14. Login Component CSS

## File

```text
src/app/pages/login/login.component.css
```

---

## Final Code

```css
.login-container {

  height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #0f172a;

}

.login-card {

  width: 320px;

  padding: 30px;

  background: #1e293b;

  border-radius: 12px;

  display: flex;

  flex-direction: column;

  gap: 14px;

}

.login-card h2 {

  color: white;

  text-align: center;

}

.login-card input {

  padding: 12px;

  border-radius: 6px;

  border: none;

}

.login-card button {

  padding: 12px;

  border: none;

  background: #2563eb;

  color: white;

  border-radius: 6px;

  cursor: pointer;

}

.error {

  color: #f87171;

  text-align: center;

}
```

---

# 15. Route Configuration

## File

```text
src/app/app.routes.ts
```

---

## Final Code

```ts
import { Routes } from '@angular/router';

import { DocsComponent } from './pages/docs/docs.component';

import { HomeComponent } from './pages/home/home.component';

import { LoginComponent } from './pages/login/login.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },

  {
    path: 'docs/:section/:page',
    component: DocsComponent,
    canActivate: [authGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }

];
```

---

# 16. FormsModule Configuration

## File

```text
src/app/app.config.ts
```

---

## Important Addition

```ts
import { FormsModule } from '@angular/forms';
```

---

## Final Setup

```ts
importProvidersFrom(

  MarkdownModule.forRoot(),

  FormsModule

)
```

---

# 17. Logout Integration

## File

```text
app.component.ts
```

---

## Final Logout Method

```ts
async logout() {

  await this.auth.logout();

}
```

---

# 18. Session Persistence

Firebase automatically:

* Restores login session after refresh
* Maintains authentication tokens
* Handles expiration securely

No manual localStorage handling required.

---

# 19. GitHub Pages Important Step

## Authorized Domains

Navigate:

```text
Authentication
   ↓
Settings
   ↓
Authorized Domains
```

Add:

```text
yourusername.github.io
```

Example:

```text
venkataramanaiah.github.io
```

Without this, deployed login will fail.

---

# 20. Run Application

## Development

```bash
ng serve
```

---

# 21. Build for GitHub Pages

```bash
ng build --base-href "/YOUR_REPOSITORY_NAME/"
```

Example:

```bash
ng build --base-href "/knowledge-hub/"
```

---

# 22. Final Result

After integration:

| Feature              | Status |
| -------------------- | ------ |
| Secure login         | ✅      |
| Firebase auth        | ✅      |
| Protected routes     | ✅      |
| Persistent session   | ✅      |
| Logout               | ✅      |
| GitHub Pages support | ✅      |
| No backend needed    | ✅      |

---

# 23. Key Learnings

## Hardcoded Login vs Firebase

| Hardcoded               | Firebase         |
| ----------------------- | ---------------- |
| Insecure                | Secure           |
| Client-only             | Server verified  |
| Easy to bypass          | Protected        |
| Manual session handling | Automatic        |
| Not production ready    | Production ready |

---

# 24. Final Architecture Summary

```text
Angular Frontend
       ↓
Firebase Authentication
       ↓
Secure Token Validation
       ↓
Protected Angular Routes
       ↓
GitHub Pages Hosting
```
