import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Card } from '../classes/Card';
import { CardService } from '../card.service';
import { SessionServiceService } from '../session-service.service';
import { SessionComponent } from '../session/session.component';
import { from, map } from 'rxjs';

interface Session
{
    id: number,
    name: string
}

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements AfterViewInit{
  public listSession: Session[] = [];
  public currentSession: string = "";
  public cardsGOT: Card[] = [];
  public cardsSEARCH: Card[] = [];
  public cardsTradeIn: Card[] = [];
  public cardsTradeOut: Card[] = [];

  public hideSession: number = 0;
  
  @ViewChildren(SessionComponent, {read: ElementRef}) trs!: QueryList<ElementRef>

  //Creare API per il ritorno delle Cards di una Sessione!
  //Creare API per il ritorno di tutte le Sessioni!
  constructor(private service: CardService, private sessionService: SessionServiceService)
  { 
      this.cardsGOT = this.sessionService.cardsGOT;
      this.cardsSEARCH = this.sessionService.cardsSEARCH;
      this.cardsTradeIn = this.sessionService.cardsTradeIn;
      this.cardsTradeOut = this.sessionService.cardsTradeOut;

      // this.listSession = this.sessionService.listSession;

      this.sessionService.loadSessions().subscribe((res:any) =>{
        // this.listSession = res['dati'];
        this.sessionService.listSession = res['dati'];
        this.listSession = this.sessionService.listSession;
      });

  }
  ngAfterViewInit()
  {

  }
  ngOnInit()
  {
    this.cardsGOT = this.sessionService.cardsGOT;
    this.cardsSEARCH = this.sessionService.cardsSEARCH;
    this.cardsTradeIn = this.sessionService.cardsTradeIn;
    this.cardsTradeOut = this.sessionService.cardsTradeOut;

    this.listSession = this.sessionService.listSession;

  }
  delete(session : Session)
  {
      this.sessionService.deleteSession(session.id).subscribe((res) => {
        console.log(res ,'DELETE');
      });
      setTimeout(()=>{
        this.sessionService.loadSessions().subscribe((res:any) =>{

            this.sessionService.listSession = res['dati'];
            this.listSession = this.sessionService.listSession;
            this.currentSession = "";
            // console.log(this.sessionService.listSession,'LIST SESSION SERVICE');

        // this.listSession = [];
        // this.listSession.push(...this.sessionService.listSession);

        //Modo alternastivo per aggiornare il component senza API

        // setTimeout(() =>
        // this.trs.forEach((ele) => {
        //   if (Number(ele.nativeElement.id) == session.id)
        //   {
        //       // ele.nativeElement.parentNode.removeChild(ele.nativeElement);
        //       // const e = document.querySelector('[id="'+session.id+'"]');
        //       // ele.nativeElement.remove();
        //       this.currentSession = "";
        //       // e?.remove();

        //       console.log(ele.nativeElement,'ELEMENT');
        //       console.log(session.id,'ID');
              
        //   } 
        // }),1000);

        // this.listSession = [];
        // this.listSession = res['dati'];
      });
    },1000);

      console.log(this.trs,'TRS');
      
      
  }
  load(session: Session)
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
  azzera()
  {
      let add1 :Session = {
        id: 1,
        name: 'asd'
      };

      this.listSession = [];
      this.listSession.push(add1);
      this.listSession.push(add1);
      this.listSession.push(add1);
      
  }
}
