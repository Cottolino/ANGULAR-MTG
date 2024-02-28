import { Component, EventEmitter, Input, Output } from '@angular/core';

interface listSession
{
    id: number,
    name: string
}

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent {
@Input('session') session: listSession | undefined;
@Output('load') emitterLoad = new EventEmitter();
@Output('deleteSession') emitterDelete = new EventEmitter();
  constructor()
  {

  }
  load()
  {
      // alert();
      this.emitterLoad.emit(this.session);
  }
  deleteSession()
  {
      this.emitterDelete.emit(this.session);
  }
}
