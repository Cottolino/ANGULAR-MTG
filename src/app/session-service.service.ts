import { Injectable } from '@angular/core';
import { Card } from './classes/Card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {
  cardsGOT: Card[] = [];
  cardsSEARCH: Card[] = [];
  cardsTradeIn: Card[] = [];
  cardsTradeOut: Card[] = [];
  constructor(private http: HttpClient){}
  //Creare API per il ritorno delle Cards di una Sessione!
  //Creare API per il ritorno di tutte le Sessioni!
  loadCardsSession(){}
  loadSessions()
  {
      return this.http.get<any>("http://localhost/MTG-BACKEND/sessions.php");
  }
}
