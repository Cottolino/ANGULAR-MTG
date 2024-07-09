import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cardviewdeck',
  templateUrl: './cardviewdeck.component.html',
  styleUrls: ['./cardviewdeck.component.css']
})
export class CardviewdeckComponent {
@Input('card-data') card: any;
@Output('addCardDeck') addCardDeck = new EventEmitter();
//Setter & Getter Copia oggetto
  add()
  {
    this.addCardDeck.emit(this.card);
    console.log(this.card);
  }
}
