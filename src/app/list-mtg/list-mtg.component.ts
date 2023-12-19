import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../classes/Card';



@Component({
  selector: 'app-list-mtg',
  templateUrl: './list-mtg.component.html',
  styleUrls: ['./list-mtg.component.css']
})
export class ListMTGComponent implements OnInit{
  title = 'Lista Card';
  public cards: Card[] = [];
  public cardsGOT : Card[] = [];
  public cardsSEARCH: Card[] = [];
  //TradeIn
  public cardsTradeIn: Card[] = [];
  public cardsTradeOut: Card[] = [];
  

  public showList: any = 0;
  public text: any = "";
  public text2: any = "";
  public showTrade: number = 0;
  public ref: number = 0; 
  constructor(private service: CardService){}
  ngOnInit()
  {
    
  }
  //Popola le carte da aggiungere
  search()
  {
    this.service.enableBTN();
    this.cards = this.service.stampaCards();
    
  }
  //Visualizza piiu carte da aggiungere
  addMoreCard()
  {
    this.cards = [];
    var moreCards = this.service.stampaCards();
    this.cards = moreCards;
  }
  //Aggiunge una carta POSSIEDO
  onAddCardEvent(card: any)
  {
    this.ref++;
    card.ref = this.ref;
    this.cardsGOT.push(card);
  }
  //Aggiunge unma carta CERCO
  onAddCardEventSearch(card: any)
  {
    this.cardsSEARCH.push(card);
  }
  //Aggiunge carta a TRADEIN
  addCardTradeIn(card: any)
  {
    this.cardsTradeIn.push(card);
  }
  //Agiunge carta a TRADEOUT
  addCardTradeOut(card: any)
  {
    this.cardsTradeOut.push(card);
  }
  //Pulisce 
  clear()
  {
    this.cards = this.service.deleteCard();
  }
  //Rimuove la carta da  POSSIEDO
  removeCard(card: any)
  {
    const index = this.cardsGOT.indexOf(card);
    if(index > -1)
    {
        this.cardsGOT.splice(index,1);
    }
  }
  //Rimuove la carta da CERCO
  removeCard2(card: any)
  {
    const index = this.cardsSEARCH.indexOf(card);
    if(index > -1)
    {
        this.cardsSEARCH.splice(index,1);
    }
  }
  //Crea lista POSSIEDO
  List()
  {
    this.text = "";
    this.cardsGOT.forEach((val) => {
      this.text += val.name + "\n";
    });
    this.showList = 1;

  }
  //Crea lista CERCO
  List2()
  {
    this.text2 = "";
    this.cardsSEARCH.forEach((val) => {
      this.text2 += val.name + "\n";
    });
    this.showList = 1;
  }
  //Mostra TRADE
  avviaTrade()
  {
    this.showTrade = 1;
  }
  //Modfica prezzo carta POSSIEDO
  modificaPrezzo(card: Card)
  {
    const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    if(idx != -1)
    {
      this.cardsGOT[idx].prezzo = card.prezzo;
    }
  }
  setFoil(card: Card)
  {
    const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    if(idx != -1)
    {
      
      this.cardsGOT[idx] = card;
      this.cardsGOT[idx].foil = true;
    }
  }
  resetTrade()
  {
    this.cardsTradeIn = [];
    this.cardsTradeOut = [];
  }
}
