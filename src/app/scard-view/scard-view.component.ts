import { Component, Input } from '@angular/core';
import { Card } from '../classes/Card';

@Component({
  selector: 'app-scard-view',
  templateUrl: './scard-view.component.html',
  styleUrls: ['./scard-view.component.css']
})
export class SCardViewComponent {
  private cardCopy: Card = new Card();
  private __card: Card = new Card();
  @Input('card') set card(card: Card)
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
constructor()
{

}
}
