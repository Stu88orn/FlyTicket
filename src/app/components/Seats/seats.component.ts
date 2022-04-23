import {Component, DoCheck, OnInit} from '@angular/core';
import {Flight} from "../../models/flight";
import {SeatsService} from "../../services/seats.service";
import {FlightService} from "../../services/api/flight.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-Seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit, DoCheck {
  seat: number = 0;
  seatTable = [];
  planeType: any;
  flightDetails: Flight;
  showNextBtn: boolean = false;

  constructor(private seats: SeatsService, private flight: FlightService, private navigation: NavigationService) {
    this.flightDetails = flight.getFlightDetails();
  }

  ngOnInit(): void {
    this.planeType = 2;
    if (this.flightDetails.cs_airline_iata && this.flightDetails.cs_flight_iata) {
      //this.planeType = 1;
    }
    //this.seat = this.seats.getSeats();
  }

  goToPassengers() {
    if (this.seat > 0) {
      this.navigation.setPage(4);
      this.navigation.goToPage('passengers');
    }

  }

  backToMain() {
    this.navigation.setPage(1);
    this.navigation.goToPage('main');
  }

  ngDoCheck(): void {
    this.seat = this.seats.getSeats();
    this.showNextBtn = this.seat > 0;

  }


}
