import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../classes/Card';
import { CardService } from '../card.service';
import { SessionServiceService } from '../session-service.service';

interface listSession
{
    id: number,
    name: string
}

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent {
  public listSession: listSession[] = [];
  public currentSession: string = "";
  public cardsGOT: Card[] = [];
  public cardsSEARCH: Card[] = [];
  public cardsTradeIn: Card[] = [];
  public cardsTradeOut: Card[] = [];

  public hideSession: number = 0;
  //Creare API per il ritorno delle Cards di una Sessione!
  //Creare API per il ritorno di tutte le Sessioni!
  constructor(private service: CardService, private sessionService: SessionServiceService)
  { 
      this.cardsGOT = this.sessionService.cardsGOT;
      this.cardsSEARCH = this.sessionService.cardsSEARCH;
      this.cardsTradeIn = this.sessionService.cardsTradeIn;
      this.cardsTradeOut = this.sessionService.cardsTradeOut;

      this.sessionService.loadSessions().subscribe((res:any) =>{
        this.listSession = res['dati'];
      });

  }
  ngOnInit()
  {

  }
  load(session: listSession)
  {
      // alert(session.name);
      this.currentSession = session.name;

      this.sessionService.loadCardsSession(session.id).subscribe((res) => {
        console.log(res,'Service');
        this.sessionService.cardsGOT = res['cardsGot'];
        this.sessionService.cardsSEARCH = res['cardsSearch'];
        this.sessionService.cardsTradeIn = res['cardsTradeIn'];
        this.sessionService.cardsTradeOut = res['cardsTradeOut'];

        this.cardsGOT = this.sessionService.cardsGOT;
        this.cardsSEARCH = this.sessionService.cardsSEARCH;
        this.cardsTradeIn = this.sessionService.cardsTradeIn;
        this.cardsTradeOut = this.sessionService.cardsTradeOut;



        console.log(this.cardsGOT,'CardsGot');
        console.log(this.cardsSEARCH,'CardsSearch');
        console.log(this.cardsTradeIn,'CardsTradeIn');
        console.log(this.cardsTradeOut,'CardsTradeOut');
        
        
      });

      //Creare API per il ritorno delle Cards di una Sessione!
      
      // this.service.getDBCardsGOT().subscribe((res:any) => {
      //   this.cardsGOT = res;
      //   console.log(this.cardsGOT);
      // });

  }
  hide()
  {
      this.hideSession = 1;
  }
  show()
  {
      this.hideSession = 0;
  }
}
