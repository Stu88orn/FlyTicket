import { CityResponse } from '../../models/cityResponse';
import { FlightResponse } from '../../models/flightResponse';
import { FlightService } from '../../services/api/flight.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DayOfWeekService } from "../../services/Converters/day-of-week.service";
import { LanguageService } from "../../services/Language/language.service";
import { NavigationService } from 'src/app/services/navigation.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {error} from "@angular/compiler/src/util";

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}],
})

export class MainComponent implements OnInit {
  title__main: string = '';
  title__flightList: string = '';
  title__seatList: string = '';
  title__passengersDetails: string = '';
  nextButton: string = '';
  reservationButton: string = '';
  //status : any = false;

  findFormGroup: any = FormGroup;

  depCitys = [
    {id: 1 , name : "Katowice", value: 'KTW'},
    {id: 2 , name : "Warszawa", value: 'WAW'},
    {id: 3, name :  "Frankfurt", value: 'FRA'},
    {id: 4 , name : "London", value: 'LHR'},
  ]

  arrCitys = [
    {id: 1 , name : "Katowice", value: 'KTW'},
    {id: 2 , name : "Warszawa", value: 'WAW'},
    {id: 3, name :  "Frankfurt", value: 'FRA'},
    {id: 4 , name : "London", value: 'LHR'},
  ]

  depTimes = [
    {id: 1 , name: "01:00", value: "01:00"},
    {id: 1 , name: "02:00", value: "02:00"},
    {id: 1 , name: "03:00", value: "03:00"},
    {id: 1 , name: "04:00", value: "04:00"},
    {id: 1 , name: "05:00", value: "05:00"},
    {id: 1 , name: "06:00", value: "06:00"},
    {id: 1 , name: "07:00", value: "07:00"},
    {id: 1 , name: "08:00", value: "08:00"},
    {id: 1 , name: "09:00", value: "09:00"},
    {id: 1 , name: "10:00", value: "10:00"},
    {id: 1 , name: "11:00", value: "11:00"},
    {id: 1 , name: "12:00", value: "12:00"},
    {id: 1 , name: "13:00", value: "13:00"},
    {id: 1 , name: "14:00", value: "14:00"},
    {id: 1 , name: "15:00", value: "15:00"},
    {id: 1 , name: "16:00", value: "16:00"},
    {id: 1 , name: "17:00", value: "17:00"},
    {id: 1 , name: "18:00", value: "18:00"},
    {id: 1 , name: "19:00", value: "19:00"},
    {id: 1 , name: "20:00", value: "20:00"},
    {id: 1 , name: "21:00", value: "21:00"},
    {id: 1 , name: "22:00", value: "22:00"},
    {id: 1 , name: "23:00", value: "23:00"},
  ]

  selTimes = [
    {id: 1 , name: "01:00", value: "1"},
    {id: 1 , name: "02:00", value: "2"},
    {id: 1 , name: "03:00", value: "3"},
    {id: 1 , name: "04:00", value: "4"},
    {id: 1 , name: "05:00", value: "5"},
  ]

  isSubmitted = false;
  nameCalendar : string = "Date";

  depCity: string = '';
  arrCity: string = '';
  actualDay: string = '';
  hourDep: string = '';
  longHourDep: number = 0;
  minDate: Date | undefined;
  h__min: any[] = [];
  flightsResponse!: FlightResponse;
  cityResponse: CityResponse | undefined;
  day : any;
  result : any;

  constructor(private fb: FormBuilder,
    private flightService: FlightService,
    private dayOfWeek: DayOfWeekService,
    private language: LanguageService,
    private navigation: NavigationService) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.title__main = this.language.title__main;
    this.title__flightList = this.language.title__flightList;
    this.title__seatList = this.language.title__seatList;
    this.title__passengersDetails = this.language.title__passengersDetails;
    this.nextButton = this.language.nextButton;
    this.reservationButton = this.language.reservationButton;

    this.findFormGroup = this.fb.group({
      depCitys: ['', [Validators.required]],
      arrCitys: ['', [Validators.required]],
      calendar: ['', [Validators.required]],
      depTimes: ['', [Validators.required]],
      selTimes: ['', [Validators.required]]
    })

    this.setDefaults();
    this.findFormGroup.get('depCitys').valueChanges.subscribe((f: any) => {
      this.depCity = f.toString();
    })

    this.findFormGroup.get('arrCitys').valueChanges.subscribe((f: any) => {
      this.arrCity = f.toString();
    })

    this.findFormGroup.get('calendar').valueChanges.subscribe((f: any) => {
      f._i.month++;
      this.actualDay = f._i.year.toString() + '-' + f._i.month.toString()  + '-'  + f._i.date.toString();
      this.dayOfWeek.setActualDate(this.actualDay);
    })

    this.findFormGroup.get('depTimes').valueChanges.subscribe((f: any) => {
      this.hourDep = f.toString();
    })

    this.findFormGroup.get('selTimes').valueChanges.subscribe((f: any) => {
      this.longHourDep = f.toString();
      if (this.hourDep){
        if(this.longHourDep){
          this.h__min = this.dayOfWeek.getHour(this.hourDep,this.longHourDep);
      }
    }
    })
  }

  setDefaults(){
    this.findFormGroup.get('depCitys').patchValue(null);
    this.findFormGroup.get('arrCitys').patchValue(null);
    this.findFormGroup.get('calendar').patchValue(null);
    this.findFormGroup.get('depTimes').patchValue(null);
    this.findFormGroup.get('selTimes').patchValue(null);
  }

  getDay(day: string, depTimeMin: string, depTimeMax: string) {
    let a:any;
      if (day != null) {
        a = this.flightsResponse.response.filter((s) =>
          s.cs_airline_iata != null
          && s.days && s.days.includes(day)
          && s.dep_time >= depTimeMin
          && s.dep_time <= depTimeMax);
      }
    if (a.length > 0){
      return a;
    }else{
      return false
    }
  }

  getCity(city: string) {
    this.flightService.getCityBySearch(city).subscribe((cityResponse: CityResponse) => {
      this.cityResponse = cityResponse;
    })
  }

  getNameValidator(value:string) {
    return this.findFormGroup.get(value);
  }

  getFlight() {
    this.isSubmitted = true;
    const prom = new Promise((resolve, reject) => {
        this.flightService.getFlight(this.depCity, this.arrCity).subscribe((flightResponse: FlightResponse) => {
          this.flightsResponse = flightResponse;
          console.log(this.flightsResponse)
        })
        setTimeout(() => {
          resolve("prom");
        },2000)
    })
    prom.then(() => {
      this.day = this.dayOfWeek.getDayOfWeek(this.actualDay);
    }).then(() => {
      if(this.day != null){
        this.result = this.getDay(this.day, this.h__min[0], this.h__min[1]);
      }
    }).then(()=>{
      this.flightService.setFlightData(this.result);
      this.navigation.setPage(2);
      this.navigation.goToPage('choose');
    }).catch(() => {
        console.log("no flight")
      })

  }

  onSubmit() {
    this.getFlight();
  }}
