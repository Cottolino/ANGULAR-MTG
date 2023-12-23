import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../classes/Card';
import { ServiceScryFallService } from '../service-scry-fall.service';
import { CardScryFallClass } from '../classes/CardScyFall';

@Component({
  selector: 'app-card-view2',
  templateUrl: './card-view2.component.html',
  styleUrls: ['./card-view2.component.css']
})
export class CardView2Component {
@Input('card-data') card: Card;
@Output('addCardTradeOut') addCardTradeOutE = new EventEmitter();
@Output('removeCard') removeCard = new EventEmitter();
@Output('setPrezzoConsigliatoSearch') eventSetPrezzoConsiliatoSearch = new EventEmitter();
  constructor(private serviceScryFall: ServiceScryFallService)
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
  prezzoConsigliatoSearch()
  {
          //Da ottimizzare quando torna un ARRAY
          this.serviceScryFall.getCardPriceScryFall(this.card.name).subscribe((card: CardScryFallClass) => {
            if(card.prezzo!=null)
            {
                this.card.prezzo_consigliato = card.prezzo;
                this.eventSetPrezzoConsiliatoSearch.emit(this.card);
            }
  
        });;
    
  }
}
