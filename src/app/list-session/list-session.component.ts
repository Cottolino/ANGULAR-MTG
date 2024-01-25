import { Component, Input } from '@angular/core';
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
  public cardsGOT: Card[] = [];
  public cardsSEARCH: Card[] = [];
  public cardsTradeIn: Card[] = [];
  public cardsTradeOut: Card[] = [];
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
  load(session: listSession)
  {
      alert(session.name);
      
      //Creare API per il ritorno delle Cards di una Sessione!
      
      // this.service.getDBCardsGOT().subscribe((res:any) => {
      //   this.cardsGOT = res;
      //   console.log(this.cardsGOT);
      // });

  }
}
