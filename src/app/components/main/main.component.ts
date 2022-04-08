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

  dataSource:any = [];

  firstFormGroup:any = FormGroup;
  secondFormGroup:any = FormGroup;

  constructor(private formBuilder:FormBuilder) { }

// BLOKADA DATY



  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }




}
