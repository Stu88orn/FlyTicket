import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main/main.component';
import { AirbusA320Component } from '../components/airplanes/airbus-a320/airbus-a320.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PassengersComponent } from "../components/passengers/passengers.component";
import { Boeing787Component } from "../components/airplanes/boeing787/boeing787.component";
import { EmbraerComponent } from "../components/airplanes/embraer/embraer.component";

@NgModule({
  declarations: [
    MainComponent,
    AirbusA320Component,
    Boeing787Component,
    EmbraerComponent,
    PassengersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  exports:[
    MainComponent,
    AirbusA320Component,
    PassengersComponent,
    Boeing787Component,
    EmbraerComponent,
    PassengersComponent
  ]
})
export class MainModule { }
