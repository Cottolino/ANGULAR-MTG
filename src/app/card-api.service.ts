import { Injectable } from '@angular/core';
import { Observable, from, map, switchMap, tap } from "rxjs";
import { Card } from './classes/Card';
import { CardItem, CardMTG } from './interfaces/card';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardAPIService {
  cardsGOT: any[] = [];
  cardsSEARCH: any[] = [];
  constructor(private http: HttpClient) { }
  saveSesion()
  {
      

  }
}
