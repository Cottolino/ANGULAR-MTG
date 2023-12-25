import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMTGComponent } from './list-mtg/list-mtg.component';
import { SingleCardComponent } from './single-card/single-card.component';

const routes: Routes = [
  {
    path: 'trade',
    pathMatch: 'full',
    component: ListMTGComponent
  },
  {
    path: 'single-card/:ref',
    pathMatch: 'full',
    component: SingleCardComponent
    
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'trade'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
