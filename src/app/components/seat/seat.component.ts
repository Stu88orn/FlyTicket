import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  public isSelected:boolean = false;
  @Input() id: string | undefined;

  public handleClick($event: MouseEvent): void {
    this.isSelected = !this.isSelected;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
