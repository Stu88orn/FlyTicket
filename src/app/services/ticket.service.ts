import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  name: string[] = [];
  surname: string[] = [];
  dateOfBirth: string[] = [];
  passport: string[] = [];
  luggage: boolean[] = [];

  constructor() {}

  getName(index:number){
    return this.name[index];
  }
  setName(value:string, index:number){
    return this.name[index] = value;
  }

  getSurname(index:number){
    return this.surname[index];
  }
  setSurname(value:string, index:number){
    return this.surname[index] = value;
  }

  getDateOfBirth(index:number){
    return this.dateOfBirth[index];
  }
  setDateOfBirth(value:string, index:number){
    return this.dateOfBirth[index] = value;
  }

  getPassport(index:number){
    return this.passport[index];
  }
  setPassport(value:string, index:number){
    return this.passport[index] = value;
  }

  getLuggage(index:number){
    return this.luggage[index];
  }

  setLuggage(value:boolean, index:number){
    return this.luggage[index] = value;
  }

}
