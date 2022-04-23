import {CityResponse} from '../../models/cityResponse';
import {FlightResponse} from '../../models/flightResponse';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  scheules: string = 'schedules/?';
  dep_iata: string = 'dep_iata=';
  arr_iata: string = 'arr_iata=';
  flightData = [];
  _flightDetails : any;

  constructor(private http: HttpClient) {
  }

  getCityBySugest(city: string) {
    return this.http.get(`${environment.apiUrl}suggest?q=${city}&${environment.apiKEY}`)
  }

  getCityBySearch(city: string) {
    return this.http.get<CityResponse>(`${environment.apiUrl}suggest?search=${city}&${environment.apiKEY}`)
  }

  getFlight(depCity: string | undefined, arrCity: string | undefined) {
    return this.http.get<FlightResponse>(`${environment.apiUrl}routes/?${environment.apiKEY}&dep_iata=${depCity}&arr_iata=${arrCity}`)
  }

  getFlightScheules(depCity: string | undefined, arrCity: string | undefined) {
    return this.http.get<FlightResponse>(`${environment.apiUrl}${this.scheules}${this.dep_iata}${depCity}&${this.arr_iata}${arrCity}&${environment.apiKEY}`)
  }

  setFlightData(value: any){
    this.flightData = value;
  }

  getFlightData(){
    return this.flightData;
  }

  getFlightDetails(){
    return this._flightDetails;
  }

  setFlightDetails(value:any){
    return this._flightDetails = value;
  }
}
