import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFlyComponent } from './components/choose-fly/choose-fly.component';
import { MainComponent } from './components/main/main.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { SeatsComponent } from './components/Seats/seats.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main', },
  {path: 'main' , component: MainComponent},
  {path: 'choose' , component: ChooseFlyComponent},
  {path: 'Seats' , component: SeatsComponent},
  {path: 'passengers' , component: PassengersComponent},
  {path: 'ticket' , component: TicketComponent},
  {path: '**' , component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
