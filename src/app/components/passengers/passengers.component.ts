import {Component, OnInit} from '@angular/core';
import {SeatsService} from "../../services/seats.service";
import {Ticket} from "../../models/ticket";
import {TicketService} from "../../services/ticket.service";
import {NavigationService} from "../../services/navigation.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  seatTable = [];
  trackByFn: any;
  count = 0;
  isChecked:boolean[] = [false,false,false,false,false,false,false];
  public addPassengerFormGroup!: FormGroup;

  constructor(private seat: SeatsService, private ticket:TicketService,
              private navigation:NavigationService) {
  }

  ngOnInit(): void {
    this.addPassengerFormGroup = new FormGroup({
      passengerName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      passengerSurName : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      passengerDateOfBirth : new FormControl('', [Validators.required]),
      passengerPassport : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
    })
    this.count = this.seat.getSeats()
    console.log(this.count);
    // @ts-ignore
    this.seatTable[this.count - 1] = []
  }

  ngDoCheck(): void {
    this.count = this.seat.getSeats()
  }

  checkCheckBoxvalue(event:any){
    //console.log(this.isChecked)
  }

  show() {
    for (let i = 0; i < this.count; i++) {
      this.ticket.setName(((<HTMLInputElement>document.getElementById("name_" + i)).value), i);
      this.ticket.setSurname(((<HTMLInputElement>document.getElementById("surname_" + i)).value), i);
      this.ticket.setDateOfBirth(((<HTMLInputElement>document.getElementById("dateOfBirth_" + i)).value), i);
      this.ticket.setPassport(((<HTMLInputElement>document.getElementById("passport_" + i)).value), i);
      this.ticket.setLuggage(this.isChecked[i],i).toString();
    }

    this.navigation.setPage(5);
    this.navigation.goToPage('ticket');

  }

  public checkError = (controlName: string, errorName: string) => {
    return this.addPassengerFormGroup.controls[controlName].hasError(errorName);
  }

}
