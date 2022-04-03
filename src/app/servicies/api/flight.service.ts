import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Flight } from 'src/app/models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  scheules: string =  'schedules/?';
  dep_iata : string = 'dep_iata=';
  arr_iata : string = 'arr_iata=';

  constructor(private http:HttpClient) { }

  getCity(city:string){
      return this.http.get(`${environment.apiUrl}${city}&${environment.apiKEY}`)
  }

  getFlight(depCity:string, arrCity:string){
    return this.http.get<Flight[]>(`${environment.apiUrl}${this.scheules}${this.dep_iata}${depCity}&${this.arr_iata}${arrCity}&${environment.apiKEY}`)
  }
}
