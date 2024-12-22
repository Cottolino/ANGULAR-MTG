import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DeckServiceService } from '../services/deck-service.service';
import { CardDeck } from '../classes/CardDeck';
import { map } from 'rxjs';
import { Deck } from '../classes/Deck';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-deck',
  templateUrl: './create-deck.component.html',
  styleUrls: ['./create-deck.component.css'],
})
export class CreateDeckComponent implements OnInit{
    public cards: CardDeck[] = [];
    public api: string = "1";

    public creature : CardDeck[] = [];
    public instant : CardDeck[] = [];
    public sorcery : CardDeck[] = [];
    public artifact : CardDeck[] = [];
    
    public other : CardDeck[] = [];
    public deck: string = "Deck#1";

    public decks: Deck[] = [];

    //RiferHTML #imageSquare
    @ViewChild('imageSquare') imageSquare: ElementRef | undefined;
    
    constructor(private cardService: DeckServiceService)
    {
        this.cardService.decks().subscribe((data: any) => {
            this.decks = this.cardService.listadeck;
        });
    }
    ngOnInit(): void 
    {
      this.creature = this.cardService.creature;
      this.instant = this.cardService.instant;
      this.sorcery = this.cardService.sorcery;
      this.artifact = this.cardService.artifact;
      this.other = this.cardService.other;

      this.decks = this.cardService.listadeck;
    }
    
    loadDeck(deck: Deck)
    {
        this.cardService.getDeck(deck.id).subscribe((data: any) => {},(error) => {console.log(error)},
        () => {
          this.creature = this.cardService.creature;
          this.instant = this.cardService.instant;
          this.sorcery = this.cardService.sorcery;
          this.artifact = this.cardService.artifact;
          this.other = this.cardService.other;
        });
        this.deck = deck.name;
    }

    stampaDeck()
    {
        console.log(this.decks);
        console.log(this.cardService.listadeck);

        this.decks = this.cardService.listadeck;

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

        // if(card.type.includes("Creature"))
        // {
        //   this.cardService.creature.push(card);
        //   this.creature = this.cardService.creature;
        // }
        // else if(card.type.includes("Instant"))
        // {
        //   this.cardService.instant.push(card);
        //   this.instant = this.cardService.instant;
        // }
        // else if(card.type.includes("Sorcery"))
        // {
        //   this.cardService.sorcery.push(card);
        //   this.sorcery = this.cardService.sorcery;
        // }
        // else if(card.type.includes("Artifact"))
        // {
        //   this.cardService.artifact.push(card);
        //   this.artifact = this.cardService.artifact;
        // }
        // else
        // {
        //   this.cardService.other.push(card);
        //   this.other = this.cardService.other;
        // }
        this.cardService.addCardDeck(card);

        // console.log(this.creature);
        //
          

        //if instant
        // console.log(this.creature);
    }
    vediSquare(card: CardDeck)
    {

        // const img = document.querySelector('.square');
        // img?.setAttribute('src',card.imageUrl);

        //Posso utilizzare i metodi JS!
        this.imageSquare?.nativeElement.setAttribute('src',card.imageUrl);
        // console.log(card);
        // console.log(this.imageSquare?.nativeElement.src);
    }
    test()
    {
      console.log(this.creature);
      console.log(this.instant);
    }
    saveDeck()
    {
        this.cardService.saveDeck(this.deck).pipe().subscribe((data) => {
            console.log(data);
            alert(data.message);
        },
        //Error
        () => {},
        //Complete
        () => {
            this.cardService.decks().subscribe((data: any) => {
                this.decks = this.cardService.listadeck;
            });
        });
        // this.cardService.saveDeck(this.deck).pipe(map((asd: any) => {return asd})).subscribe((data) => {
        //   console.log(data);
        // });
    }
    
}
