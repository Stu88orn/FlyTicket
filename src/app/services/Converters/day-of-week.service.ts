import {Injectable} from '@angular/core';
import {FlightResponse} from "../../models/flightResponse";
import {FlightService} from "../api/flight.service";
import {NavigationService} from "../navigation.service";

@Injectable({
  providedIn: 'root'
})
export class DayOfWeekService {
  depCity: string = '';
  arrCity: string = '';
  hourDep: string = '';
  longHourDep: number = 0;
  minDate: Date | undefined;
  h__min: string[] = [];
  _actualDate : string = '';
  flightsResponse!: FlightResponse;
  day : any;
  result : any;
  actualDay: string = '';

  constructor(private  flightService:FlightService,
              private navigation: NavigationService) {
  }

  setFlightResponse(value:FlightResponse){
    this.flightsResponse = value;
  }

  getDay(day: string, depTimeMin: string, depTimeMax: string) {
    let a:any;
      a = this.flightsResponse.response.filter((s) =>
        s.cs_airline_iata != null
        && s.days && s.days.includes(day)
        && s.dep_time >= depTimeMin
        && s.dep_time <= depTimeMax);
    if (a.length > 0){
      return a;
    }else{
      return false
    }
  }

  getDate(){
    return this._actualDate;
  }

  setActualDate(value:any){
    return this._actualDate = value;
  }

  getDayOfWeek(checkDate: string) {
    const dayOfWeek = new Date(checkDate).getDay();
    return isNaN(dayOfWeek) ? null :
      ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][dayOfWeek];
  }

  getHour(date: string | undefined, hour: number) {
    let result = []
    if(date){
      const spilted = date.split(':', 2);
      let splitedHourMin: number = parseInt(spilted[0]);
      let splitedHourMax: number = parseInt(spilted[0]);
      const spiltedMin: number = parseInt(spilted[1]);

      if (splitedHourMin <= 10 && splitedHourMin >= 0) {
        result[0] = "0" + (splitedHourMin - hour).toString();
      } else {
        result[0] = (splitedHourMin - hour).toString();
      }

      if (splitedHourMax <= 10 && splitedHourMax >= 0) {
        result[1] = "0" +  (+(splitedHourMax) + (+hour)).toString()
      } else {
        result[1] = (+(splitedHourMax) + (+hour)).toString()
      }

      if (spiltedMin <= 10 && spiltedMin >= 0) {
        result[0] = result[0] + ":" + "0" + spiltedMin.toString();
      } else {
        result[0] = result[0] + ":" + spiltedMin.toString();
      }

      if (spiltedMin >= 0 && spiltedMin <= 10) {
        result[1] = result[1] + ":" + "0" + spiltedMin.toString();
      } else {
        result[1] = result[1] + ":" + spiltedMin.toString();
      }
    }
    return result
  }

  getDepCity(){
    return this.depCity;
  }

  setDepCity(value: string){
    this.depCity = value;
  }

  getArrCity(){
    return this.arrCity;
  }

  setArrCity(value:string){
    this.arrCity = value;
  }

  getHourDep(){
    return this.hourDep;
  }

  setHourDep(value:string){
    this.hourDep = value;
  }

  getLongHourDep(){
    return this.longHourDep;
  }

  setLongHourDep(value:number){
    this.longHourDep = value;
  }

  getHMin(){
    return this.h__min = this.getHour(this.hourDep, this.longHourDep);
  }

  getFlight() {
    this.getHMin();
    const prom = new Promise((resolve, reject) => {
      this.flightService.getFlight(this.depCity, this.arrCity).subscribe((flightResponse: FlightResponse) => {
        this.setFlightResponse(flightResponse);
      })
      setTimeout(() => {
        resolve("prom");
      },1000)
    })
    prom.then(() => {
      this.result = this.getDay(this.day, this.h__min[0], this.h__min[1]);
      console.log(this.result);
    }).then(()=>{
      if(this.result != false){
        this.flightService.setFlightData(this.result);
        this.navigation.setPage(2);
        this.navigation.goToPage('choose');
      }
    }).catch(() => {
      console.log("no flight on main")
    })

  }

}
