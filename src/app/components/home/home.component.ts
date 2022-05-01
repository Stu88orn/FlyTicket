import {Component, OnInit} from '@angular/core';
import {map, share, Subscription, timer} from 'rxjs';
import {NavigationService} from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  actualDate = new Date();
  rxTime = new Date();
  subscription!: Subscription;

  actualPage!: number;

  findFlyNav: boolean = true;
  selectFlyNav: boolean = true;
  seatsNav: boolean = true;
  passengersNav: boolean = true;
  reservationNav: boolean = true;

  constructor(private navigation: NavigationService) {

  }

  ngOnInit(): void {
    this.subscription = timer(0, 1000).pipe(map(() => new Date()), share()).subscribe(time => {
      this.rxTime = time;
    });

    this.subscription = timer(0, 100).pipe(map(() => new Date()), share()).subscribe(time => {
      this.rxTime = time;
      this.refreshMenu()
    });
  }

  refreshMenu() {
    this.actualPage = this.navigation.getPage();
    switch (this.actualPage) {
      case 1:
        this.findFlyNav = false;
        this.selectFlyNav = true;
        this.seatsNav = true;
        this.passengersNav = true;
        this.reservationNav = true;
        break
      case 2:
        this.findFlyNav = true;
        this.selectFlyNav = false;
        this.seatsNav = true;
        this.passengersNav = true;
        this.reservationNav = true;
        break
      case 3:
        this.findFlyNav = true;
        this.selectFlyNav = true;
        this.seatsNav = false;
        this.passengersNav = true;
        this.reservationNav = true;
        break
      case 4:
        this.findFlyNav = true;
        this.selectFlyNav = true;
        this.seatsNav = true;
        this.passengersNav = false;
        this.reservationNav = true;
        break
      case 5:
        this.findFlyNav = true;
        this.selectFlyNav = true;
        this.seatsNav = true;
        this.passengersNav = true;
        this.reservationNav = false;
        break
    }
  }

}
