import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SeatsService} from "../../services/seats.service"
import {FlightService} from "../../services/api/flight.service";
import {DayOfWeekService} from "../../services/Converters/dayOfWeek.service";
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
  _reservation = new Ticket();
  _ticketObj:any[] = [];
  seatTable:any[] = []
  _actualDate : any;
  flightDetails!: Flight;
  Name:string[] = [];
  Surname:string[] = [];
  Luggage:boolean[] = [];
  LuggageH:string[] = [];

  _reservationJsonObject : any;

  constructor(private seat: SeatsService, private flight:FlightService,
              private actualDate: DayOfWeekService, private ticket:TicketService,
              private navigation:NavigationService) {
    this.flightDetails = this.flight.getFlightDetails();
    this.getData();
  }

  ngOnInit(): void {

  }

  getData() {
    this._reservation.flightNo = this.flightDetails.cs_flight_number;
    this._reservation.depAirport = this.flightDetails.dep_iata;
    this._reservation.arrAirport = this.flightDetails.arr_iata;
    this._reservation.boardingTime = this.flightDetails.dep_time;

    for (let i = 0; i < this.seat.getSeats(); i++) {
      this.Name[i] = this.ticket.getName(i);
      this._reservation.name = this.ticket.getName(i);
      this.Surname[i] = this.ticket.getSurname(i);
      this._reservation.surname = this.ticket.getSurname(i);
      this.Luggage[i] = this.ticket.getLuggage(i);
      if(this.Luggage[i]){
        this.LuggageH[i] = "Y"
        this._reservation.luggage = "Y";
      }else {
        this.LuggageH[i] = "N"
        this._reservation.luggage = "N";
      }
      this._reservationJsonObject = JSON.parse(JSON.stringify(this._reservation));
      this._ticketObj.push(this._reservationJsonObject);
    }
      this.seatTable[this.seat.getSeats() - 1] = [];
      this._actualDate = this.actualDate._actualDate;
    }

    reserve()
    {
      for(let i = 0; i<this._ticketObj.length; i++){
        this.flight.sendTicket(this._ticketObj[i]);
      }
      this.navigation.setPage(1);
      this.navigation.goToPage('main');
    }

}
