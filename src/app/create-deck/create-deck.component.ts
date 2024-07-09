import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DeckServiceService } from '../services/deck-service.service';
import { CardDeck } from '../classes/CardDeck';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css'],
})
export class CreateDeckComponent {
    public cards: CardDeck[] = [];
    public api: string = "1";

    public creature : CardDeck[] = [];
    public instant : CardDeck[] = [];
    

    constructor(private cardService: DeckServiceService)
    {
        this.creature = this.cardService.creature;
        this.instant = this.cardService.instant;
    }
    search() {
      // const search: any = document.querySelector("#search");
      // alert(search.value);
      if(this.api == "1")
      {
        this.cards = [];
        this.cards = this.cardService.stampaCards();
        // alert("MTG");
      }
      else
      {
        this.cards = [];
        this.cards = this.cardService.stampaCardsSCRYFALL();
        // alert("SCRYFALL");
      }
      console.log(this.cards);
    }

    addCardDeck(card: CardDeck)
    {
        //if creatura
        // alert("Add Card Deck");
        if(card.type.includes("Creature"))
        {
          this.cardService.creature.push(card);
          this.creature = this.cardService.creature;
        }
        else
        {
          this.cardService.instant.push(card);
          this.instant = this.cardService.instant;
        }
          

        //if instant
        // console.log(this.creature);
    }

    test()
    {
      console.log(this.creature);
      console.log(this.instant);
    }
    
}
