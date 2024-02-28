import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { AuthTestService } from "./auth-test.service";


// E' solo una funzione importata nel ROUTING!
// Vedi DOC angular.io
export const activateUsersFn: CanActivateFn = function(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
{
  // const auth: AuthService = inject(AuthService);
  // if (auth.isUserLogin())
  // { 
  //     return true;
  // }
  // else
  // {
  //   const router = inject(Router);
  //   router.navigate(['login']);
  //   return false;  
  // }

  return true;
  
  const auth2: AuthTestService = inject(AuthTestService);
  if (auth2.isUserLogin())
  { 
      return true;
  }
  else
  {
    const router = inject(Router);
    router.navigate(['login']);
    return false;
  }
  
}