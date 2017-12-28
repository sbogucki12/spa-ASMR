import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logo: string = "../../assets/SpaASMR-logo.png";

  constructor() { }

  ngOnInit() {
  }

}
