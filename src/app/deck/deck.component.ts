import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Deck } from '../classes/Deck';
import { DeckServiceService } from '../services/deck-service.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
@Input('deck') deck: Deck = new Deck();
@Output('loadDeck') emitterLoad = new EventEmitter();
constructor(private deckService: DeckServiceService) {}
deleteDeck(){}
load(){
  console.log(this.deck);
  this.emitterLoad.emit(this.deck);
}
}
