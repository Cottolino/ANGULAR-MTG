import { Injectable } from '@angular/core';
import { CardDeck, CardDeckMana } from '../classes/CardDeck';
import { Deck } from '../classes/Deck';
import { Card } from '../classes/Card';
import { filter, from, map, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthTestService } from '../auth-test.service';


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

  public listadeck: Deck[] = [];
  public manaCostConvert: CardDeckMana[] = [];
  
  

  constructor(private http: HttpClient, private auth2: AuthTestService) {

  }

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
        card.manaCost = ele.mana_cost;
        card.rarity = ele.rarity;
        card.setName = ele.set_name;
        card.text = ele.oracle_text;
        card.flavor = ele.flavor_text;
        
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
  addCardDeck(card: CardDeck)
  {
      if(card.type.includes("Creature"))
      {
          var idx = this.creature.findIndex((c) => c.name == card.name);
          if(idx == -1)
          {
            this.creature.push(card);
          }
          else
          {
            this.creature[idx].qty++;
          }

      }
      else if(card.type.includes("Instant"))
      {
        var idx = this.instant.findIndex((c) => c.name == card.name);
        if(idx == -1)
        {
          this.instant.push(card);
        }
        else
        {
          this.instant[idx].qty++;
        }
      }
      else if(card.type.includes("Sorcery"))
      {
        var idx = this.sorcery.findIndex((c) => c.name == card.name);
        if(idx == -1)
        {
          this.sorcery.push(card);
        }
        else
        {
          this.sorcery[idx].qty++;
        }
      }
      else if(card.type.includes("Artifact"))
      {
        var idx = this.artifact.findIndex((c) => c.name == card.name);
        if(idx == -1)
        {
          this.artifact.push(card);
        }
        else
        {
          this.artifact[idx].qty++;
        }
      }
      else
      {
        var idx = this.other.findIndex((c) => c.name == card.name);
        if(idx == -1)
        {
          this.other.push(card);
        }
        else
        {
          this.other[idx].qty++;
        }
      }
  
  }
  saveDeck(nameDeck: string)
  {
      // this.http.post("http://apimtg.test/api/savedeck", this.deck).subscribe((data: any) => {});
      const post = {
        nameDeck: nameDeck,
        creature: this.creature,
        instant: this.instant,
        sorcery: this.sorcery,
        artifact: this.artifact,
        other: this.other
      };
      return this.http.post<any>("http://apimtg.test/api/savedeck",post,
        {
            headers: new HttpHeaders({
                Authorization: 'Bearer'+this.auth2.getToken()
            })
        });

  }
  decks()
  {
      return this.http.get<any>("http://apimtg.test/api/decks",
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer'+this.auth2.getToken()
        })
      }).pipe(map((data: any) => {
                this.listadeck = data;
      }));
  }
  getDeck(id: number)
  {
    this.creature = [];
    this.instant = [];
    this.sorcery = [];
    this.artifact = [];
    this.other = [];

    this.manaCostConvert = [];

    return this.http.get<any>("http://apimtg.test/api/deck/"+id,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer'+this.auth2.getToken()
        })
      }).pipe(
        switchMap((data: any) => from(data)),
        map((data: any) => {
                // console.log(data);


                let pattern = '\\{[A-Za-z0-9]+\\}';
                let inputString = data.manaCost ?? '';
                let matches: String[] = [];
                let matchCount = 0;

                const regex = new RegExp(pattern, 'g');
                matches = inputString.match(regex) || [];
                // matchCount = matches.length;
                matchCount = 0;

                matches.forEach((element) => {
                    // console.log(element);
                    if(element.match('[0-9]+'))
                    {
                        matchCount += parseInt(element.replace('{','').replace('}',''));
                    }
                    else
                    {
                        matchCount++;
                    }  
                  });

                let tmp = new CardDeckMana();
                tmp = data;
                tmp.manaCostConvert = matchCount;
                tmp.matches = matches;

                this.manaCostConvert.push(tmp);

                // console.log(matchCount, ": ManaCost");
                // console.log(matches, ": Array");
                console.log(tmp, ": CardManaCost");



                if(data.type.includes("Creature"))
                {
                    this.creature.push(data);
                }
                else if(data.type.includes("Instant"))
                {
                    this.instant.push(data);
                }
                else if(data.type.includes("Sorcery"))
                {
                    this.sorcery.push(data);
                }
                else if(data.type.includes("Artifact"))
                {
                    this.artifact.push(data);
                }
                else
                {
                    this.other.push(data);
                }

      }));
  }

}
