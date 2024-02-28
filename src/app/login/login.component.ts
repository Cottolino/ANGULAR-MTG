import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthTestService } from '../auth-test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    loginForm: FormGroup = new FormGroup({});

  constructor(private auth: AuthService, private router: Router, private auth2: AuthTestService){}
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      });
  }
  // login()
  // {
  //     const {email, password} = this.loginForm.value;
  //     this.auth.signIn(email,password);
  //     this.router.navigate(['/']);
  // }
  login()
  {
      const {email,password} = this.loginForm.value;
      this.auth2.signIn(email,password).subscribe((resp) => {
        console.log(resp);
        this.router.navigateByUrl('/trade');
      });
      
  }
}
