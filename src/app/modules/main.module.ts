import {MaterialModule} from './material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from '../components/main/main.component';
import {AirbusA320Component} from '../components/airplanes/airbus-a320/airbus-a320.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PassengersComponent} from "../components/passengers/passengers.component";

@NgModule({
  declarations: [
    MainComponent,
    AirbusA320Component,
    PassengersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MainComponent,
    AirbusA320Component,
    PassengersComponent
  ]
})
export class MainModule {
}
