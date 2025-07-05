import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

export function roleGuard(expectedRoles: string[]): CanActivateFn {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const user = auth.getUser();
    if (user && expectedRoles.some(role => user.roles.includes(role))) {
      return true;
    }
    return router.createUrlTree(['/login']);
  };
}
