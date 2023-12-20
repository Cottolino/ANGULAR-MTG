import { Injectable } from '@angular/core';
import { from, map, switchMap, tap } from "rxjs";
import { Card } from './classes/Card';
import { CardScryFallClass } from './classes/CardScyFall';
import { CardItemScryFall, CardMTGScryFall } from './interfaces/card-scry-fall';





@Injectable({
  providedIn: 'root'
})
export class ServiceScryFallService {
  public cards: CardScryFallClass[] = [];
  constructor() { }

  getCardsScryFall(cardtitle: string)
  {
      const apiurl = "https://api.scryfall.com/cards/search?q";
      // const param_apiurl = "https://api.magicthegathering.io/v1/cards?page="+page+"&name="+cardtitle;
      const param_apiurl = "https://api.scryfall.com/cards/search?q="+cardtitle;
      
      //const p = fetch(apiurl + cardtitle).then(res => res.json());
      const p = fetch(param_apiurl).then(res => res.json());
      
      return from(p).pipe(
        switchMap((data: CardMTGScryFall) => from(data.data || [])),
        map((ele: CardItemScryFall) => {

          const cardScryFall = new CardScryFallClass();
          cardScryFall.id = ele.id;
          cardScryFall.name = ele.name;
          cardScryFall.prezzo = ele.prices.eur;
          cardScryFall.url = ele.image_uris.normal;
          return cardScryFall;  
        }),
        
      )      
  }

  getCardPriceScryFall(cardtitle: string)
  {
      const apiurl = "https://api.scryfall.com/cards/search?q";
      // const param_apiurl = "https://api.magicthegathering.io/v1/cards?page="+page+"&name="+cardtitle;
      const param_apiurl = "https://api.scryfall.com/cards/search?q="+cardtitle;
      
      //const p = fetch(apiurl + cardtitle).then(res => res.json());
      const p = fetch(param_apiurl).then(res => res.json());
      
      return from(p).pipe(
        switchMap((data: CardMTGScryFall) => from(data.data || [])),
        map((ele: CardItemScryFall) => {

          const cardScryFall = new CardScryFallClass();
          cardScryFall.id = ele.id;
          cardScryFall.name = ele.name;
          cardScryFall.prezzo = ele.prices.eur;
          cardScryFall.url = ele.image_uris.normal;
          return cardScryFall;  
        }),
        
      )      
  }
  
  stampaCardsScryFall()
  {
      const search: any = document.querySelector("#search");
      this.getCardsScryFall(search.value).subscribe((card: CardScryFallClass) => {
        this.cards.push(card);
      });

      return this.cards;
  }
}
