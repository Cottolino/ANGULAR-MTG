import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Card } from '../classes/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  public ref: number = 0;
  @Input('card-data') card: Card = new Card();
  @Output('onAddCardEvent') CardEvent = new EventEmitter();
  @Output('addCardSearchEvent') addCardSearchEvent = new EventEmitter();
  ngOnInit(){}
  info(){}
  addCard()
  {
    this.CardEvent.emit(this.card);
  }
  addCardSearch()
  {
    this.addCardSearchEvent.emit(this.card);
  }
}
