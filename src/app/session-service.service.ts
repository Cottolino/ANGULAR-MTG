import { Injectable } from '@angular/core';
import { Card } from './classes/Card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthTestService } from './auth-test.service';

interface Session
{
    id: number,
    name: string
}

@Injectable({
  providedIn: 'root'
})

//Gestisce LOAD_CARDS_SESSION, LOAD_SESSIONS, DELETE_SESSION
export class SessionServiceService {
  apiurlLoadSession = environment.apiurlLoadSession;
  apiurlLoadCardSession = environment.apiurlLoadCardsSession;
  apiurlDeleteSession = environment.apiurlDeleteSession;

  cardsGOT: Card[] = [];
  cardsSEARCH: Card[] = [];
  cardsTradeIn: Card[] = [];
  cardsTradeOut: Card[] = [];
  listSession: Session[] = [];
  
  constructor(private http: HttpClient, private auth2: AuthTestService){}
  //Creare API per il ritorno delle Cards di una Sessione!
  //Creare API per il ritorno di tutte le Sessioni!
  loadCardsSession(id : number)
  {
      // const httpOptions = {
      //   params: {
      //     id
      //   }
      // }
      return this.http.get<any>(this.apiurlLoadCardSession+"?id="+id,
      {
          headers: new HttpHeaders({
              Authorization: 'Bearer'+this.auth2.getToken()
          })
      });
  }
  loadSessions()
  {
      return this.http.get<any>(this.apiurlLoadSession,
        {
          headers: new HttpHeaders({
              Authorization: 'Bearer'+this.auth2.getToken()
          })
        });
  }
  deleteSession(id: number)
  {
      return this.http.get<any>(this.apiurlDeleteSession+"?id="+id,
      {
          headers: new HttpHeaders({
              Authorization: 'Bearer'+this.auth2.getToken()
          })
      });
  }
}
