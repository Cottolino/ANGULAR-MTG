import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMTGComponent } from './list-mtg/list-mtg.component';
import { CardComponent } from './card/card.component';
import { CardViewComponent } from './card-view/card-view.component';
import { TradeInComponent } from './trade-in/trade-in.component';
import { CardView2Component } from './card-view2/card-view2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleCardComponent } from './single-card/single-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { SessionComponent } from './session/session.component';
import { ListSessionComponent } from './list-session/list-session.component';
import { SCardViewComponent } from './scard-view/scard-view.component';
import { CreateDeckComponent } from './create-deck/create-deck.component';

import {  } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardviewdeckComponent } from './cardviewdeck/cardviewdeck.component';
import { CreatureviewComponent } from './creatureview/creatureview.component';
import { ListCardComponent } from './list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMTGComponent,
    CardComponent,
    CardViewComponent,
    TradeInComponent,
    CardView2Component,
    SingleCardComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    SessionComponent,
    ListSessionComponent,
    SCardViewComponent,
    CreateDeckComponent,
    CardviewdeckComponent,
    CreatureviewComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
