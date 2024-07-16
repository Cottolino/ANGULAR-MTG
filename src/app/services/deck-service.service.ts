import { Injectable } from '@angular/core';
import { CardDeck } from '../classes/CardDeck';
import { Deck } from '../classes/Deck';
import { Card } from '../classes/Card';
import { filter, from, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeckServiceService {

  public cardsDeck: CardDeck[] = [];
  public deck: Deck = new Deck();
  public cards: CardDeck[] = [];

  public creature: CardDeck[] = [];
  public instant: CardDeck[] = [];
  public sorcery: CardDeck[] = [];
  public artifact: CardDeck[] = [];
  
  public other: CardDeck[] = [];
  
  

  constructor() { }

  getCardsMTG(cardtitle: string, page: number)
  {
    const apiurl = "https://api.magicthegathering.io/v1/cards?page=1&name=";
    const param_apiurl = "https://api.magicthegathering.io/v1/cards?page="+page+"&name="+cardtitle;

    const p = fetch(param_apiurl).then(res => res.json());
    return from(p).pipe(
      switchMap((data: any) => from(data.cards || [])),
      filter((ele: any) => ele.imageUrl != null),
      map((ele: any) => {
          const card = new CardDeck();
          card.name = ele.name;
          card.rarity = ele.rarity;
          card.imageUrl = ele.imageUrl;
          card.setName = ele.setName;
          card.manaCost = ele.manaCost;
          card.type = ele.type;
          card.text = ele.text;
          card.flavor = ele.flavor;

          return card;
      })
    );
  }
  
  getCardsSCRYFALL(cardtitle: string)
  {
    const apiurl = "https://api.scryfall.com/cards/search?q";
    const param_apiurl = "https://api.scryfall.com/cards/search?q="+cardtitle;

    const p = fetch(param_apiurl).then(res => res.json());
    return from(p).pipe(
      switchMap((data: any) => from(data.data || [])),
      filter((ele: any) => ele.image_uris.normal != null),
      map((ele: any) => {

        const card = new CardDeck();
        card.name = ele.name;
        card.imageUrl = ele.image_uris.normal;
        card.type = ele.type_line;
        return card;
      }),
      
    )

  }

  stampaCards()
  {
    this.cards = [];
    const search: any = document.querySelector("#search");
    this.getCardsMTG(search.value,0).subscribe((card: any) => {
        this.cards.push(card);
    });
    return this.cards;
  }

  stampaCardsSCRYFALL()
  {
    this.cards = [];
    const search: any = document.querySelector("#search");
    this.getCardsSCRYFALL(search.value).subscribe((card: any) => {
        this.cards.push(card);
    });
    return this.cards;
  }

}
