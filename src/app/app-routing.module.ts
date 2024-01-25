import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMTGComponent } from './list-mtg/list-mtg.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { LoginComponent } from './login/login.component';
import { activateUsersFn } from './route-guard.service';
import { SignupComponent } from './signup/signup.component';
import { ListSessionComponent } from './list-session/list-session.component';

const routes: Routes = [
  {
    path: 'trade',
    pathMatch: 'full',
    component: ListMTGComponent,
    canActivate: [ activateUsersFn ]
  },
  {
    path: 'single-card/:ref',
    pathMatch: 'full',
    component: SingleCardComponent,
    canActivate: [ activateUsersFn ]
    
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'trade'
  },
  {
    path: 'session',
    pathMatch: 'full',
    component: ListSessionComponent,
    canActivate: [ activateUsersFn ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
