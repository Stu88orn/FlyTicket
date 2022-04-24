import { Component } from '@angular/core';

declare function greet():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlyTicket';

  constructor(){

  }
}
