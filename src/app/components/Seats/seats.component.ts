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
    console.log(this.flightDetails.dep_iata  + this.flightDetails.arr_iata);
    if(this.flightDetails.dep_iata === "WAW" && this.flightDetails.arr_iata === "KTW"){
      this.planeType = 1;
    }else if(this.flightDetails.dep_iata === "KTW" && this.flightDetails.arr_iata === "WAW"){
      this.planeType = 1;
    }else if(this.flightDetails.dep_iata === "KTW" && this.flightDetails.arr_iata === "FRA"){
      this.planeType = 2;
    }else if(this.flightDetails.dep_iata === "FRA" && this.flightDetails.arr_iata === "KTW"){
      this.planeType = 2;
    } else if(this.flightDetails.dep_iata === "FRA" && this.flightDetails.arr_iata === "JFK"){
      this.planeType = 3;
    } else if(this.flightDetails.dep_iata === "JFK" && this.flightDetails.arr_iata === "FRA"){
      this.planeType = 3;
    } else if(this.flightDetails.dep_iata === "WAW" && this.flightDetails.arr_iata === "JFK"){
      this.planeType = 3;
    } else if(this.flightDetails.dep_iata === "JFK" && this.flightDetails.arr_iata === "WAW"){
      this.planeType = 3;
    }else{
      console.log("Brak takiego lotu");
    }

    this.seat = this.seats.getSeats();
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
