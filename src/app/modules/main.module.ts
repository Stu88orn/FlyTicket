import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main/main.component';
import { AirbusA320Component } from '../components/airplanes/airbusA320/airbusA320.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PassengersComponent } from "../components/passengers/passengers.component";
import { Boeing787Component } from "../components/airplanes/boeing787/boeing787.component";
import { EmbraerComponent } from "../components/airplanes/embraer/embraer.component";
import { HomeComponent } from '../components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../appRouting.module';

@NgModule({
  declarations: [
    MainComponent,
    AirbusA320Component,
    Boeing787Component,
    EmbraerComponent,
    PassengersComponent,
    HomeComponent,

  ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        FormsModule
    ],
  exports:[
    MainComponent,
    AirbusA320Component,
    PassengersComponent,
    Boeing787Component,
    EmbraerComponent,
    PassengersComponent,
    HomeComponent,
  ]
})
export class MainModule { }
