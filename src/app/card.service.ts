import { Injectable } from '@angular/core';
import { Observable, from, map, switchMap, tap } from "rxjs";
import { Card } from './classes/Card';
import { CardItem, CardMTG } from './interfaces/card';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../environments/environment';
 
interface dataPost
{
  cardsGot: Card[],
  cardsSearch: Card[],
  cardsTradeIn: Card[],
  cardsTradeOut: Card[],
  nameSession: string

}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiurlDB = 'http://localhost/MTG-BACKEND/cards.php';
  apiurlDBPost = 'http://localhost/MTG-BACKEND/insertCardGot.php';
  apiurlSaveSession = 'http://localhost/MTG-BACKEND/saveSession.php';
  // apiurlDB = environment.apiurlDB;
  
  
  cards: Card[] = [];
  cardsGOT: Card[] = [];
  cardsSEARCH: Card[] = [];
  cardsTradeIn: Card[] = [];
  cardsTradeOut: Card[] = [];

  ncarteFound: Number = 0;

  page: number = 0;
  index: number = 0;
  // id_num: number = 0;

  ref: number = 0;
  
  constructor(private http: HttpClient){}

    //Chiamata GET API DB
    getDBCardsGOT() : Observable<any[]>
    {
      return this.http.get<any[]>(this.apiurlDB).pipe(
        map((risposta: any) => risposta['dati']));
    }
    postDBCard(data: any) : Observable<any>
    {
        var intestaz = new HttpHeaders().set('Content-Type','application/json');
        var post = JSON.stringify(data);
        // console.log(post);
        return this.http.post<any>(this.apiurlDBPost,post).pipe(
          map((risposta:any) => risposta['dati'])
        );
  
    }
    saveSesion(namesession: string)
    {
        var post : dataPost = {
          cardsGot : this.cardsGOT,
          cardsSearch: this.cardsSEARCH,
          cardsTradeIn: this.cardsTradeIn,
          cardsTradeOut: this.cardsTradeOut,
          nameSession : namesession
        };
        var data = JSON.stringify(post);
        
        return this.http.post<any>(this.apiurlSaveSession,data).pipe(
          // map((risposta: any) => risposta['result'])
        );
    }

    //Trasforma un flusso in dati
    //Da una Promise a dati 
    getCards(cardtitle: string, page: number)
    {
        const apiurl = "https://api.magicthegathering.io/v1/cards?page=1&name=";
        const param_apiurl = "https://api.magicthegathering.io/v1/cards?page="+page+"&name="+cardtitle;
        //const p = fetch(apiurl + cardtitle).then(res => res.json());
        const p = fetch(param_apiurl).then(res => res.json());

        return from(p).pipe(
          switchMap((data: CardMTG) => from(data.cards || [])),
          map((ele: CardItem) => {
            // const card: Card = {
            //   name: ele.name,
            //   rarity: ele.rarity,
            //   imageUrl: ele.imageUrl
            // };
            // this.id_num++;
            const card = new Card();
              card.name = ele.name;
              card.rarity = ele.rarity;
              card.imageUrl = ele.imageUrl;
              card.id = ele.id;
              card.setName = ele.setName;
              card.manaCost = ele.manaCost;
              card.type = ele.type;
              card.text = ele.text;
              card.flavor = ele.flavor;

          return card;  
          }),
          
        )      
    }
    //Sottoscrive l'OBS
    stampaCards()
    {
      console.log("Chiamata");
      this.page++;
      const search: any = document.querySelector("#search");
      this.getCards(search.value,this.page).subscribe((card: Card) => {
        if(card.imageUrl != null)
        {
          this.cards.push(card);
          // console.log("Subscribe");
          this.index++;
          console.log(this.index);
        }
      });
      //console.log(this.cards);

      //Async
      setTimeout(() => {
        if(this.index == 0)
        {
          //Change Detector nel prossimo ciclo di vita del componente
          alert("Non ci sono piu carte da Aggiuingere!");
          const btnAddMoreCards: any = document.querySelector("#btnAddMoreCards");
          btnAddMoreCards.disabled = true;
        }
      },3000);

      return this.cards;
    }

    deleteCard()
    {
      this.cards = [];
      this.page = 0;
      return this.cards;
    }
    // removeCard(card: any)
    // {
    //   const index = this.cards.indexOf(card);
    //   if(index > -1)
    //   {
    //       this.users.splice(index,1);
    //   }
    //   return this.cards;
    // }
    enableBTN()
    {
      const btnAddMoreCards: any = document.querySelector("#btnAddMoreCards");
      btnAddMoreCards.disabled = false;
    }

    addGot(card: Card)
    {
        this.ref++;
        card.ref = this.ref;
        this.cardsGOT.push(card);
    }
    addSearch(card: Card)
    {
        this.ref++;
        card.ref = this.ref;
        this.cardsSEARCH.push(card);
    }
    addTradeIn(card: Card)
    {
        this.cardsTradeIn.push(card);
    }
    addTradeOut(card: Card)
    {
        this.cardsTradeOut.push(card);
    }
    removeGot(card: Card)
    {
      const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
      if(idx != -1)
      {
        this.cardsGOT.splice(idx,1);
      }
    }
    removeSearch(card: Card)
    {
      const index = this.cardsSEARCH.indexOf(card);
      if(index > -1)
      {
          this.cardsSEARCH.splice(index,1);
      }
    }
    modificaPrezzo(card: Card)
    {
      const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
      if(idx != -1)
      {
        this.cardsGOT[idx].prezzo = card.prezzo;
      }
    }
    setPrezzoConsigliato(card: Card)
    {
      const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
      if(idx != -1)
      {
        this.cardsGOT[idx] = card;
      }
    }
    setPrezzoConsigliatoSearch(card: Card)
    {
      const idx = this.cardsSEARCH.findIndex((v) => v.ref == card.ref );
      if(idx != -1)
      {
        this.cardsSEARCH[idx] = card;
      }
    }
    setFoil(card: Card)
    {
      const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
      if(idx != -1)
      {
        
        this.cardsGOT[idx] = card;
        this.cardsGOT[idx].foil = 1;
      }
    }
    resetTrade()
    {
      this.cardsTradeIn = [];
      this.cardsTradeOut = [];
    }
    getCard(ref: number) : Card | undefined
    {
        // console.log(this.cardsGOT);
        return this.cardsGOT.find((val) => val.ref == ref);
    }
}
