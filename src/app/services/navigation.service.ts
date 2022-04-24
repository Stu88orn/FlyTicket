import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  actualPage : number = 1;
  constructor(private router : Router) { }

  getPage(){
    return this.actualPage;
  }

  setPage(page : number){
    this.actualPage = page;
  }

  goToPage(name : string){
    this.router.navigate([name]);
  }
    
}
