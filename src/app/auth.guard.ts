import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators';
import { AuthTestService } from './auth-test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthTestService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.authService.getToken();

    return this.authService.me().pipe(
      map(isValid => {
        if (!isValid) {
          this.authService.logOut();
          this.router.navigate(['/login']);
        }
        console.log(isValid);
        return isValid;
      }),
      catchError(error => {
        console.log(error);
        this.authService.logOut();
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
