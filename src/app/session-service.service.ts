import { Injectable } from '@angular/core';
import { Card } from './classes/Card';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  apiurlLoadSession = environment.apiurlLoadSession;
  apiurlLoadCardSession = environment.apiurlLoadCardsSession;

  cardsGOT: Card[] = [];
  cardsSEARCH: Card[] = [];
  cardsTradeIn: Card[] = [];
  cardsTradeOut: Card[] = [];
  constructor(private http: HttpClient){}
  //Creare API per il ritorno delle Cards di una Sessione!
  //Creare API per il ritorno di tutte le Sessioni!
  loadCardsSession(id : number)
  {
      const httpOptions = {
        params: {
          id
        }
      }
      return this.http.get<any>(this.apiurlLoadCardSession,httpOptions);
  }
  loadSessions()
  {
      return this.http.get<any>(this.apiurlLoadSession);
  }
}
