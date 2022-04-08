import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  title__main: string = 'System Rezerwacji Biletów Lotniczych';
  title__flightList: string = 'Lista Połączeń';
  title__seatList: string = 'Wybór Miejsca'
  title__passengersDetails: string = 'Dane Pasazerów'
  nextButton: string = 'Next';
  reservationButton: string = 'Reservation';

  constructor() { }

}
