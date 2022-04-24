import { Component, OnInit } from '@angular/core';
import {SeatsService} from "../../../services/seats.service";


@Component({
  selector: 'app-airbus-a320',
  templateUrl: './airbus-a320.component.html',
  styleUrls: ['./airbus-a320.component.scss']
})
export class AirbusA320Component implements OnInit {
  title__seatList: string = 'Wybór Miejsca'
  nextButton: string = 'Next';
  reservationButton: string = 'Reservation';

  seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
  seats: boolean[][] = [];
  private readonly rowsNumber: number = 10;
  private readonly columnNumber: number = 6;



  dataSource:any = [];

  constructor(private seat:SeatsService) { }

  ngOnInit(): void {
this.seats = [];

    for (let i = 0; i < this.rowsNumber; i++) {
      this.seats[i] = [];
      for (let j = 0; j < this.columnNumber; j++) {
        this.seats[i][j] = false;
      }
      this.seats.push(this.seats[i + 1 ]);

    }
  }

  toggleSelection(row: number, column: number) {
    this.seats[row][column] = !this.seats[row][column];
    console.log(this.seats[row][column]);
  }

onAddSeat(){
    const count = this.seats.flat().filter(Boolean).length;
    this.seat.setSeats(count);
    console.log(this.seat.getSeats());

}
}
