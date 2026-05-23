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