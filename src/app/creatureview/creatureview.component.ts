import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-creatureview',
  templateUrl: './creatureview.component.html',
  styleUrls: ['./creatureview.component.css']
})
export class CreatureviewComponent {
  
  @Output('vediSquare') vediSquareEvent = new EventEmitter();

  public creatureCopy: any = {};
  constructor() { }
  @Input('card-data') creature: any;

  // @Input('card-data') set creature(c: any)
  // {
  //     this.creatureCopy = Object.assign({}, c);
  // }
  // get creature()
  // {
  //     return this.creatureCopy;
  // }

  test()
  {
    console.log(this.creature);
  }
  vedi(){}
  rimuovi(){}
  vediSquare()
  {
      this.vediSquareEvent.emit(this.creature);
  }
}