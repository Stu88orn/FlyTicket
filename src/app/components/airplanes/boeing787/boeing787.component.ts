import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boeing787',
  templateUrl: './boeing787.component.html',
  styleUrls: ['./boeing787.component.scss']
})
export class Boeing787Component implements OnInit {

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
