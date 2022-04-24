import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, map, share, Subscription, timer } from 'rxjs';
import { LanguageService } from 'src/app/services/Language/language.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  actualDate = new Date();
  rxTime = new Date();
  subscription: Subscription | undefined;

  actualPage : number | undefined;
  actualPages : any | undefined;

  showButton1: boolean = true;
  showButton2: boolean = true;
  showButton3: boolean = true;
  showButton4: boolean = true;
  showButton5: boolean = true;


  constructor(private navigation:NavigationService) { 
    
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

  refreshMenu(){
    this.actualPage = this.navigation.getPage();
    switch (this.actualPage){
      case 1:
        this.showButton1 = false;
        this.showButton2 = true;
        this.showButton3 = true;
        this.showButton4 = true;
        this.showButton5 = true;
        break
      case 2:
        this.showButton1 = true;
        this.showButton2 = false;
        this.showButton3 = true;
        this.showButton4 = true;
        this.showButton5 = true;
        break
      case 3:
        this.showButton1 = true;
        this.showButton2 = true;
        this.showButton3 = false;
        this.showButton4 = true;
        this.showButton5 = true;
        break
      case 4:
        this.showButton1 = true;
        this.showButton2 = true;
        this.showButton3 = true;
        this.showButton4 = false;
        this.showButton5 = true;
        break
      case 5:
        this.showButton1 = true;
        this.showButton2 = true;
        this.showButton3 = true;
        this.showButton4 = true;
        this.showButton5 = false;
        break      
    }
  }

}
