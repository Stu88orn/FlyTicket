import { MainModule } from './modules/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SeatsComponent } from './components/Seats/seats.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChooseFlyComponent } from './components/choose-fly/choose-fly.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    TicketComponent,
    ChooseFlyComponent,
  ],
    imports: [
        BrowserModule,
        MainModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
