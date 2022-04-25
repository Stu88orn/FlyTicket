import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private navigation:NavigationService) { }

  ngOnInit(): void {
  }

  main(){
    this.navigation.setPage(1);
    this.navigation.goToPage('main');
  }
}
