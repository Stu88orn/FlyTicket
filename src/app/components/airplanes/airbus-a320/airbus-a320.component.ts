import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airbus-a320',
  templateUrl: './airbus-a320.component.html',
  styleUrls: ['./airbus-a320.component.scss']
})
export class AirbusA320Component implements OnInit {
  title__seatList: string = 'Wybór Miejsca'
  nextButton: string = 'Next';
  reservationButton: string = 'Reservation';

  dataSource:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddSeat(){
    this.dataSource.push(this.dataSource.length);
  }
}
