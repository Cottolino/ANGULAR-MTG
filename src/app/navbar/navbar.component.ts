import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthTestService } from '../auth-test.service';
import { User } from '../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isLoggedIn$: Observable<User | null>;
  public user: User = new User();

  constructor(private authService: AuthService, private auth2: AuthTestService, private router: Router)
  {
      // this.isLoggedIn$ = this.authService.isLoggedIn$;
      this.isLoggedIn$ = this.auth2.isLoggedIn$;
      this.isLoggedIn$.subscribe((res) => {
        if(res != null)
        {
          this.user = res;
        }
      });

  }
  logout()
  {
      // this.authService.logOut();
      this.auth2.logOut();
      this.router.navigateByUrl('/login');
  }
}
