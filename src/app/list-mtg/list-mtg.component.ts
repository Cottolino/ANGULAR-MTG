import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../classes/Card';
import jspdf from 'jspdf';
import { ServiceScryFallService } from '../service-scry-fall.service';

interface dataCelle
{
  nome: string,
  set: string,
  prezzo: string
}

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
  public ref2: number = 0;

  public dim: string = "";

  constructor(private service: CardService, private serviceScryFall: ServiceScryFallService){}
  ngOnInit()
  {
      
      this.cardsGOT = this.service.cardsGOT;
      this.cardsSEARCH = this.service.cardsSEARCH;

      this.cardsTradeIn = this.service.cardsTradeIn;
      this.cardsTradeOut = this.service.cardsTradeOut;

      console.log(this.cardsGOT);
  }
  dimensioneImg50()
  {
    // const img: any = document.querySelectorAll(".card-view");

    // img.forEach((element: any) => {
    //     element.style = "width: 50%; height: 50%";
    // });

    // const img2: any = document.querySelectorAll(".card-view-top");

    //   img2.forEach((element: any) => {
    //       element.style = "width: 75%;";
    //   });
      
  }
  //ScryFall
  testScryFall()
  {
    var array: any[] = this.serviceScryFall.stampaCardsScryFall();
    console.log(array);
  }
  //


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
    var tmp: Card = Object.assign({},card);
    // this.ref++;
    // tmp.ref = this.ref;

    // this.cardsGOT.push(tmp);

    this.service.addGot(tmp);
    console.log(this.service.cardsGOT);
  }
  //Aggiunge unma carta CERCO
  onAddCardEventSearch(card: any)
  {
    var tmp: Card = Object.assign({},card);
    // this.ref2++;
    // tmp.ref = this.ref2;
    
    // this.cardsSEARCH.push(tmp);

    this.service.addSearch(tmp);
  }
  //Aggiunge carta a TRADEIN
  addCardTradeIn(card: any)
  {
    // this.cardsTradeIn.push(card);
    this.service.addTradeIn(card);
  }
  //Agiunge carta a TRADEOUT
  addCardTradeOut(card: any)
  {
    // this.cardsTradeOut.push(card);
    this.service.addTradeOut(card);
  }
  //Pulisce 
  clear()
  {
    this.cards = this.service.deleteCard();
  }
  //Rimuove la carta da  POSSIEDO
  removeCard(card: any)
  {
    // const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    // if(idx != -1)
    // {
    //   this.cardsGOT.splice(idx,1);
    // }
    this.service.removeGot(card);
  }
  //Rimuove la carta da CERCO
  removeCard2(card: any)
  {
    // const index = this.cardsSEARCH.indexOf(card);
    // if(index > -1)
    // {
    //     this.cardsSEARCH.splice(index,1);
    // }
    this.service.removeSearch(card);
  }
  //Crea lista POSSIEDO
  List()
  {
    this.text = "";
    this.cardsGOT.forEach((val) => {
      var foil: string = "";
      if(val.foil == true) foil = "FOIL";
      this.text += val.name + "[" + val.setName + "] " + val.prezzo + "€ (" + val.prezzo_consigliato + "€) " + foil + "\n";
    });
    this.showList = 1;

  }
  //Crea lista CERCO
  List2()
  {
    this.text2 = "";
    this.cardsSEARCH.forEach((val) => {
      this.text2 += val.name + "[" + val.setName + "] " + "(" + val.prezzo_consigliato + "€)" + "\n";
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
    // const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    // if(idx != -1)
    // {
    //   this.cardsGOT[idx].prezzo = card.prezzo;
    // }
    this.service.modificaPrezzo(card);
  }

  setPrezzoConsigliato(card: Card)
  {
    // const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    // if(idx != -1)
    // {
    //   this.cardsGOT[idx] = card;
    // }
    this.service.setPrezzoConsigliato(card);

  }

  setPrezzoConsigliatoSearch(card: Card)
  {
    
    // const idx = this.cardsSEARCH.findIndex((v) => v.ref == card.ref );
    // if(idx != -1)
    // {
    //   this.cardsSEARCH[idx] = card;
    // }
    this.service.setPrezzoConsigliatoSearch(card);
  }

  setFoil(card: Card)
  {
    // const idx = this.cardsGOT.findIndex((v) => v.ref == card.ref );
    // if(idx != -1)
    // {
      
    //   this.cardsGOT[idx] = card;
    //   this.cardsGOT[idx].foil = true;
    // }
    this.service.setFoil(card);
  }
  
  resetTrade()
  {
    // this.cardsTradeIn = [];
    // this.cardsTradeOut = [];

    this.service.resetTrade();
  }

  creaPDF()
  {
    var doc = new jspdf();
    var i: number = 20;

    doc.setFontSize(28);
    doc.setTextColor(0,0,204);
    doc.text("POSSEGGO",20,i);
    i+=10;
    this.cardsGOT.forEach((val)=> {
      doc.setFontSize(16);
      doc.setTextColor(0,0,0);
      var str: string = "";
      var foil: string = "";
      if(val.foil == true) foil = "FOIL";
      str += val.name + " [" + val.setName + "] " + val.prezzo + "$ "+ foil;
      doc.text(str,20,i);
      //Img
      // i+=10;
      // doc.addImage(val.imageUrl,"JPEG",20,i,100,130);
      i+=10;
    });
    i+=10;
    doc.setFontSize(28);
    doc.setTextColor(255,255,0);
    doc.text("CERCO",20,i);
    i+=10;
    this.cardsSEARCH.forEach((val)=> {
      doc.setFontSize(16);
      doc.setTextColor(0,0,0);
      var str: string = "";
      var foil: string = "";
      if(val.foil == true) foil = "FOIL";
      str += val.name + " [" + val.setName + "] " + val.prezzo + "$ " + foil;
      doc.text(str,20,i);
      i+=10;
    });
    i+=10;
    doc.setFontSize(28);
    doc.setTextColor(0,0,0);
    doc.text("TRADEIN",20,i);
    i+=10;
    this.cardsTradeIn.forEach((val)=> {
      doc.setFontSize(16);
      doc.setTextColor(0,0,0);
      var str: string = "";
      var foil: string = "";
      if(val.foil == true) foil = "FOIL";
      str += val.name + " [" + val.setName + "] " + val.prezzo + "$ " + foil;
      doc.text(str,20,i);
      i+=10;
    });
    i+=10;
    doc.setFontSize(28);
    doc.setTextColor(0,0,0);
    doc.text("TRADEOUT",20,i);
    i+=10;
    this.cardsTradeOut.forEach((val)=> {
      doc.setFontSize(16);
      doc.setTextColor(0,0,0);
      var str: string = "";
      var foil: string = "";
      if(val.foil == true) foil = "FOIL";
      str += val.name + " [" + val.setName + "] " + val.prezzo + "$ " + foil;
      doc.text(str,20,i);
      i+=10;
    });
    doc.save("Test.pdf");
  }

  
}
