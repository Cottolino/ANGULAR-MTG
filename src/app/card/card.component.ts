import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Card } from '../classes/Card';
import * as $ from 'jquery';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  //Valutare se fare passare una copia
  // @Input('card-data') card: Card = new Card();
  private cardCopy: Card = new Card();

  @Input('card-data') set card(card: Card)
  {

    this.cardCopy = Object.assign({}, card);
  }
  get card()
  {
    return this.cardCopy;
  }
  @Output('onAddCardEvent') CardEvent = new EventEmitter();
  @Output('addCardSearchEvent') addCardSearchEvent = new EventEmitter();
  ngOnInit()
  {

  }
  info(){}
  addCard()
  {
    //Valutare se fare passare una copia
    this.CardEvent.emit(this.card);
  }
  addCardSearch()
  {
    this.addCardSearchEvent.emit(this.card);
  }
}


