import { Component, OnInit } from '@angular/core';
import {SeatsService} from "../../../services/seats.service";

@Component({
  selector: 'app-boeing787',
  templateUrl: './boeing787.component.html',
  styleUrls: ['./boeing787.component.scss']
})
export class Boeing787Component implements OnInit {

  title__seatList: string = 'Wybór Miejsca'
  nextButton: string = 'Next';
  reservationButton: string = 'Reservation';

  seatLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I'];
  seats: boolean[][] = [];
  private readonly rowsNumber: number = 10;
  private readonly columnNumber: number = 9;


  dataSource:any = [];

  constructor(private seat:SeatsService) { }

  ngOnInit(): void {
    this.seats = [];

    for (let i = 0; i < this.rowsNumber; i++) {
      this.seats[i] = [];
      for (let j = 0; j < this.columnNumber; j++) {
        this.seats[i][j] = false;
      }
      this.seats.push(this.seats[i + 1]);

    }
  }

  toggleSelection(row: number, column: number) {
    this.seats[row][column] = !this.seats[row][column];
    console.log(this.seats[row][column]);
  }

  onAddSeat(){
    this.seat.setSeats(this.seats);
    console.log(this.seat.getSeats());
  }

}
