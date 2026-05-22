import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERNAME = 'venkat';
  private PASSWORD = 'Nvrms@90';

  login(username: string, password: string): boolean {

    if (
      username === this.USERNAME &&
      password === this.PASSWORD
    ) {
      localStorage.setItem('loggedIn', 'true');
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}