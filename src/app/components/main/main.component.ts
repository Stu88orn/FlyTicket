import { city } from './../../models/city';
import { Flight } from './../../models/flight';
import { FlightService } from './../../servicies/api/flight.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title__main: string = 'System Rezerwacji Biletów Lotniczych';
  title__flightList: string = 'Lista Połączeń';
  title__seatList: string = 'Wybór Miejsca'
  title__passengersDetails: string = 'Dane Pasazerów'
  nextButton: string = 'Next';
  reservationButton: string = 'Reservation';

  dataSource: any = [];

  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;

  depCity: string = 'KTW';
  arrCity: string = 'WAW';
  flights: Flight[] = [];

  constructor(private formBuilder: FormBuilder, private flightService: FlightService) { }

  ngOnInit(): void {

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get departure() {
    if(this.flights[0]){
      return this.flights[0].arr_iata;
    }else{
      return 0;
    }
  }

  getCity() {
    this.flightService.getCity(this.depCity).subscribe((data) => {
      console.log(data);
    })
  }

  getFlights(){
    this.flightService.getFlight(this.depCity, this.arrCity).subscribe((_flights : Flight[]) => {
      this.flights = _flights;
      console.log(this.flights);
    })
  }
}
