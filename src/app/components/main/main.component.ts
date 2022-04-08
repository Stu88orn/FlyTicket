import {CityResponse} from '../../models/cityResponse';
import {FlightResponse} from '../../models/flightResponse';
import {FlightService} from '../../servicies/api/flight.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DayOfWeekService} from "../../servicies/Converters/day-of-week.service";
import {LanguageService} from "../../servicies/Language/language.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title__main:string = '';
  title__flightList: string = '';
  title__seatList: string = '';
  title__passengersDetails: string = '';
  nextButton: string = '';
  reservationButton: string = '';
  secondFormGroup: any = FormGroup;

  depCity: string | undefined;
  arrCity: string | undefined;
  actualDay: string | undefined;
  checkDay:  string | undefined;
  hourDep: string | undefined;
  longHourDep: number | undefined;
  minDate: Date | undefined;
  flights: any = [];
  h__min: any[] | undefined;
  reservationTicket: any = [];
  passengersIndex: any = [];
  passengersNumber: number = 3;
  flightsResponse: FlightResponse | undefined;
  cityResponse: CityResponse | undefined;

  findFlyForm = new FormGroup({
    departure: new FormControl('', Validators.required),
    arrival: new FormControl('', Validators.required),
    departureDate: new FormControl('', Validators.required),
    departureTime: new FormControl('', Validators.required),
    departureHour: new FormControl('', Validators.required),
  })

  constructor(private formBuilder: FormBuilder, private flightService: FlightService,
              private dayOfWeek: DayOfWeekService, private language:LanguageService) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.title__main = this.language.title__main;
    this.title__flightList = this.language.title__flightList;
    this.title__seatList = this.language.title__seatList;
    this.title__passengersDetails = this.language.title__passengersDetails;
    this.nextButton = this.language.nextButton;
    this.reservationButton = this.language.reservationButton;
  }

  findFly() {
    this.depCity = this.findFlyForm.get('departure')?.value;
    this.arrCity = this.findFlyForm.get('arrival')?.value;
    this.checkDay = this.findFlyForm.get('departureDate')?.value;
    this.actualDay = this.checkDay;
    this.hourDep = this.findFlyForm.get('departureTime')?.value;
    this.longHourDep = this.findFlyForm.get('departureHour')?.value;
    if (this.hourDep){
      if(this.longHourDep){
        this.h__min = this.dayOfWeek.getHour(this.hourDep,this.longHourDep);
      }
    }
    this.getFlights();
  }

  getDay(day: string, depTimeMin: string, depTimeMax: string) {
    let a;
    if (this.flightsResponse) {
      if (day != null) {
        a = this.flightsResponse.response.filter((s) => s.cs_airline_iata != null
          && s.days && s.days.includes(day)
          && s.dep_time >= depTimeMin
          && s.dep_time <= depTimeMax);
      }
    }
    return a
  }

  getCity(city: string) {
    this.flightService.getCityBySearch(city).subscribe((cityResponse: CityResponse) => {
      this.cityResponse = cityResponse;
    })
  }

  getFlights() {
    console.log(this.depCity, this.arrCity);
    this.flightService.getFlight(this.depCity, this.arrCity).subscribe((flightResponse: FlightResponse) => {
      this.flightsResponse = flightResponse;
      console.log(this.flightsResponse)
      if(this.actualDay){
        const day = this.dayOfWeek.getDayOfWeek(this.actualDay);
        if(day){
          // @ts-ignore
          this.flights = this.getDay(day, this.h__min[0], this.h__min[1]);
        }
      }
      console.log(this.flights);
    })
  }

  goToReservation(i:number){
    this.reservationTicket = this.flights;
    console.log(this.reservationTicket[i]);
    for(let j = 0; j < this.passengersNumber;j++){
      this.passengersIndex[j] =this.reservationTicket[i];
    }
  }
}
