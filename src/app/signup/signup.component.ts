import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthTestService } from '../auth-test.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// public mymodel:any;
public signupForm: FormGroup;
// public username: string | undefined;
constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private auth2: AuthTestService)
{
  this.signupForm = this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  },
  {
    updateOn: 'change'
  });
}
  ngOnInit(): void {

  }
signup()
{
    console.log(this.signupForm);
    if(this.signupForm.valid)
    {
        // const {username,email,password} = this.signupForm.value;
        // this.authService.singUp(username,email,password);
        // this.router.navigate(['/']);
        const {username,email,password} = this.signupForm.value;
        this.auth2.singUp(username,email,password).subscribe((res) => {});
        this.router.navigateByUrl('/');

    }
}
}
