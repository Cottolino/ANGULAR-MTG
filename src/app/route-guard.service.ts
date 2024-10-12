import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { AuthTestService } from "./auth-test.service";


// E' solo una funzione importata nel ROUTING!
// Vedi DOC angular.io
// export const activateUsersFn: CanActivateFn = function(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
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
  
  const auth2: AuthTestService = inject(AuthTestService);
  var autenticato: any = null;
  auth2.me().subscribe(async (res: any) => {
    // console.log(res,'USER TOKEN');
    autenticato = res;
  },
() => {
  console.log('ERRORE TOKEN');
},
()=> { 
    console.log('COMPLETATO TOKEN');
    if (autenticato.name)
      { 
          // console.log(autenticato,'USER TOKEN');
          console.log(autenticato,'AUTENTICATO');
          return autenticato;
          
      }
      else
      {
        const router = inject(Router);
        router.navigate(['login']);
        console.log('NON AUTENTICATO');
        return false;
      }

});
return autenticato;
}

//da rifare => non funziona => https://chatgpt.com/c/b7309266-68ad-470e-a4d4-f0910fba1fcb