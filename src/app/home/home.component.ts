import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['login']); 
  }
  home() {
    this.router.navigate(['']); 
  }
  mobile() {
    this.router.navigate(['mobile'])
  }


}
