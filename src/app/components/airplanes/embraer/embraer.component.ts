import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embraer',
  templateUrl: './embraer.component.html',
  styleUrls: ['./embraer.component.scss']
})
export class EmbraerComponent implements OnInit {

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
