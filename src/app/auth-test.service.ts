import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { User } from './interfaces/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'jquery';

interface JWT
{
  access_token: string,
  token_type: string,
  expires_in: number,
  user_name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthTestService {
  // private AUTH_API = 'http://apimtg.test/api/auth';
  private AUTH_API = environment.AuthApi;
  
  private isLoggedInSubject: BehaviorSubject<User | null >;
  public isLoggedIn$: Observable<User | null>;

  constructor(private http: HttpClient)
  {
    this.isLoggedInSubject = new BehaviorSubject(this.getUser());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }

  getUser(): User | null
  {
      const userString = localStorage.getItem('user');
      if(!userString)
      {
        return null;
      }
      return JSON.parse(userString);
  }

    //Login
    signIn(email: string, password: string) : Observable<User>
    {
        return this.http.post<JWT>(this.AUTH_API + '/login',{email, password}).pipe(
          switchMap(( response: JWT) => {
            console.log(response);
            localStorage.setItem('jwt',response.access_token);
            const user = new User(); 
            user.name = response.user_name;
            user.email = response.email;
            this.isLoggedInSubject.next(user);
            localStorage.setItem('user',JSON.stringify(user));
            return of(user);
          })
        );
    }

  //Register
  singUp(username: string, email: string, password: string) :Observable<User>
  {
    const user = new User(); 
    user.name = username;
    user.email = email;

    return this.http.post<JWT>(this.AUTH_API + '/signup',{email, password, username}).pipe(
      switchMap(( response: JWT) => {
        console.log(response);
        localStorage.setItem('jwt',response.access_token);

        this.isLoggedInSubject.next(user);
        localStorage.setItem('user',JSON.stringify(user));
        return of(user);
      })
    );

  }

  isUserLogin(): boolean
  {
      //Da Modificare!!!
      //Fare check TOKEN
      return !!this.getUser();
  }

  logOut(): void
  {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
      
    this.isLoggedInSubject.next(null);
  }

  public getToken()
  {
      return localStorage.getItem('jwt');
  }

  public me()
  {

    const token = localStorage.getItem('jwt');
    if(token)
    {
      return this.http.post<any>(this.AUTH_API + '/me',{},
      {
          headers: new HttpHeaders({
            Authorization: 'Bearer'+token
          })
      });
    }
    return of(null);
  }
  
}
