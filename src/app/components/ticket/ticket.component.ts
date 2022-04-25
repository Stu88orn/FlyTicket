import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SeatsService} from "../../services/seats.service"
import {FlightService} from "../../services/api/flight.service";
import {DayOfWeekService} from "../../services/Converters/day-of-week.service";
import {TicketService} from "../../services/ticket.service";
import {Flight} from "../../models/flight";
import { Ticket } from 'src/app/models/ticket';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
  _reservation = { name: "Marcin" } as unknown as Ticket;
  seatTable:any[] = []
  _actualDate : any;
  flightDetails: Flight;
  Name:string[] = [];
  Surname:string[] = [];
  Luggage:string[] = [];

  constructor(private seat: SeatsService, private flight:FlightService,
              private actualDate: DayOfWeekService, private ticket:TicketService,
              private navigation:NavigationService) {
    this.getData();
    this.flightDetails = this.flight.getFlightDetails(); //here we have all information about choose fly
  }

  ngOnInit(): void {
  }

  getData(){
    for(let i = 0; i<this.seat.getSeats();i++){
      this.Name[i] = this.ticket.getName(i);
      this.Surname[i] = this.ticket.getSurname(i);
      this.Luggage[i] = this.ticket.getLuggage(i);
    }

    this.seatTable[this.seat.getSeats() - 1] = [];

    this._actualDate = this.actualDate._actualDate;
    console.log(this._reservation);
  }

  reserve(){
    this.navigation.setPage(1);
    this.navigation.goToPage('main');
  }

}
