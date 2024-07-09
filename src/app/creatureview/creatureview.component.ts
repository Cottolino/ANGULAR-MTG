import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creatureview',
  templateUrl: './creatureview.component.html',
  styleUrls: ['./creatureview.component.css']
})
export class CreatureviewComponent {

  public creatureCopy: any = {};
  constructor() { }
  @Input('card-data') set creature(c: any)
  {
      this.creatureCopy = Object.assign({}, c);
  }
  get creature()
  {
      return this.creatureCopy;
  }

  test()
  {
    console.log(this.creature);
  }
}