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