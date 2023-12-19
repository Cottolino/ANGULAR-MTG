import { Component, Input } from '@angular/core';
import { Card } from '../classes/Card';

@Component({
  selector: 'app-trade-in',
  templateUrl: './trade-in.component.html',
  styleUrls: ['./trade-in.component.css']
})
export class TradeInComponent {
//Da valutare se passare la copia!
//Init dei campi
@Input("card") card: Card | undefined;
}
