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

  seatLetters = ['A', 'B', 'C', 'D'];
  seats: boolean[][] = [];
  private readonly rowsNumber: number = 10;
  private readonly columnNumber: number = 4;

  dataSource:any = [];

  constructor() { }

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
    this.dataSource.push(this.dataSource.length);
  }

}
