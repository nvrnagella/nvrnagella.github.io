import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = async () => {

  const auth = inject(AuthService);

  const router = inject(Router);

  // wait until firebase restores session

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