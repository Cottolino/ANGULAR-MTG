import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMTGComponent } from './list-mtg/list-mtg.component';
import { CardComponent } from './card/card.component';
import { CardViewComponent } from './card-view/card-view.component';
import { TradeInComponent } from './trade-in/trade-in.component';
import { CardView2Component } from './card-view2/card-view2.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListMTGComponent,
    CardComponent,
    CardViewComponent,
    TradeInComponent,
    CardView2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
