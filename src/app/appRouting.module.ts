import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFlyComponent } from './components/chooseFly/chooseFly.component';
import { MainComponent } from './components/main/main.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { SeatsComponent } from './components/seats/seats.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main', },
  {path: 'main' , component: MainComponent},
  {path: 'choose' , component: ChooseFlyComponent},
  {path: 'seats' , component: SeatsComponent},
  {path: 'passengers' , component: PassengersComponent},
  {path: 'ticket' , component: TicketComponent},
  {path: '**' , redirectTo: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
