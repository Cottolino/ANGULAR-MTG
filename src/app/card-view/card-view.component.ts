import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../classes/Card';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  private cardCopy: Card = new Card();
  private __card: Card = new Card();

  // @Input('card-data') card: Card;

  //L'oggetto passato dal padre ne viene fatta una copia e SETTATA alla variabile di INPUT CARD
  //Così da non modifare il riferimento
  @Input('card-data') set card(card: Card)
  {
    this.__card = card;
    this.cardCopy = Object.assign({}, card);
  }
  //Ritorna la copia e NON MODFICA il riferimento sorgente
  get card()
  {
    // return this.__card;
    return this.cardCopy;
  }
  @Output('removeCard') removeCard = new EventEmitter();
  @Output('addCardTradeIn') addCard = new EventEmitter();
  @Output('modPrezzo') eventModPrezzo = new EventEmitter();
  @Output('EventSetFoil') eventSetFoil = new EventEmitter();
  public modPrezzo: boolean = false;
  constructor()
  {
    // this.card = new Card();
    // this.card.prezzo = 0;

  }
  removeCardFunc()
  {
    this.removeCard.emit(this.card);
  }
  addCardTradeIn()
  {
    this.addCard.emit(this.card);
  }
  modificaPrezzo()
  {
    this.modPrezzo = true;
  }
  salvaPrezzo()
  {
    //RISOLTO con metodo GETTER/SETTER
    //const cardCopy =  Object.assign({}, this.card);
    //ngModel mettere in lettura/scrittura l'oggetto!

    //RISOLTO con metodo GETTER/SETTER
    this.eventModPrezzo.emit(this.card);
    this.modPrezzo = false;
  }
  setFoil()
  {
    this.eventSetFoil.emit(this.card);
  }
}
