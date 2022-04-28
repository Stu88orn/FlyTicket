import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../services/navigation.service";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private navigation:NavigationService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content);
  }

  main(){
    this.navigation.setPage(1);
    this.navigation.goToPage('main');
  }
}
