import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '123asd';
  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor()
  {
      //Metto valore ture o flase nell'obs privato
      this.isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());

      //Un BEHAVIORSUBJECT è un oggetto osservabile con un valore iniziale!
      //E' possibile modficare il valore osservabile tramite il metodo NEXT!
      //Leggo in modo asicrono il valore!Così è reperibile in qualsiasi momento
      this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }
    //Login
    signIn(email: string, password: string)
    {
        //Setto il token
        localStorage.setItem('jwt',this.token);
        //Passo true all'obs per il controllo dell'auth
        this.isLoggedInSubject.next(true);
    }
    //Register
    singUp(username: string, email: string, password: string)
    {
        //Setto il token
        localStorage.setItem('jwt',this.token);
        //Passo true all'obs per il controllo dell'auth
        this.isLoggedInSubject.next(true);
    }
    isUserLogin(): boolean
    {
        //Se ho un token registrato all'ora ho effettuato il LOGIN!
        return this.hasToken();
    }
    logOut(): void
    {
        //Rimuovo il token
        localStorage.removeItem('jwt');
        //Setto obs false
        this.isLoggedInSubject.next(false);
    }
    private hasToken()
    {
        //Ritorno vero se ho un token!
        return Boolean(localStorage.getItem('jwt'));
    }
}
