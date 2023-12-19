import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../classes/Card';

@Component({
  selector: 'app-card-view2',
  templateUrl: './card-view2.component.html',
  styleUrls: ['./card-view2.component.css']
})
export class CardView2Component {
@Input('card-data') card: Card;
@Output('addCardTradeOut') addCardTradeOutE = new EventEmitter();
@Output('removeCard') removeCard = new EventEmitter();
  constructor()
  {
    this.card = new Card();
  }
  addCardTradeOut()
  {
    this.addCardTradeOutE.emit(this.card);
  }
  removeCardFunc()
  {
    this.removeCard.emit(this.card);
  }
}
