import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main/main.component';
import { AirbusA320Component } from '../components/airplanes/airbus-a320/airbus-a320.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent,
    AirbusA320Component,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    MainComponent,
    AirbusA320Component
  ]
})
export class MainModule { }
