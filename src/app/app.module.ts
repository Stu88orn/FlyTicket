import { MainModule } from './modules/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SeatsComponent } from './components/seats/seats.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ChooseFlyComponent } from './components/chooseFly/chooseFly.component';
import {FormsModule} from "@angular/forms";
import { InfoComponent } from './components/info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    TicketComponent,
    ChooseFlyComponent,
    InfoComponent,

  ],
    imports: [
        BrowserModule,
        MainModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgbModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
