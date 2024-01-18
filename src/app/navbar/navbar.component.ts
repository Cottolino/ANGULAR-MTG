import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isLoggedIn$: Observable<boolean>;
  constructor(private authService: AuthService)
  {
      this.isLoggedIn$ = this.authService.isLoggedIn$;

  }
  logout()
  {
      this.authService.logOut();
  }
}
