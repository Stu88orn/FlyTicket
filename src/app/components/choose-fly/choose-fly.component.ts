import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/app/services/api/flight.service';
import { LanguageService } from 'src/app/services/Language/language.service';
import { NavigationService } from 'src/app/services/navigation.service';
import {DayOfWeekService} from "../../services/Converters/day-of-week.service";

@Component({
  selector: 'app-choose-fly',
  templateUrl: './choose-fly.component.html',
  styleUrls: ['./choose-fly.component.scss']
})
export class ChooseFlyComponent implements OnInit {
  flights: Flight[];
  filteredFlight: Flight[];
  depCity : string = '';
  arrCity : string = '';
  checkDay : string = '';
  title__flightList : string = '';

  constructor(private navigation:NavigationService,
              private flight:FlightService,
              private language:LanguageService,
              private actualDate: DayOfWeekService) {
    this.title__flightList = language.title__flightList;
    this.flights = flight.getFlightData();
    this.filteredFlight = Array.from(this.flights.reduce((m, t) => m.set(t.dep_time, t), new Map()).values()).sort();
    this.depCity = this.flights[0].dep_iata;
    this.arrCity = this.flights[0].arr_iata;
    this.checkDay = actualDate._actualDate;
   }

  ngOnInit(): void {
    console.log(this.flights);

  }

  goToReservation(value: any){
    if(this.flights[value] != null){
      this.flight.setFlightDetails(this.flights[value]);
      this.navigation.setPage(3);
      this.navigation.goToPage('Seats');
    }
  }

  prevPage(){
    this.navigation.setPage(1);
    this.navigation.goToPage('main');
  }

}
