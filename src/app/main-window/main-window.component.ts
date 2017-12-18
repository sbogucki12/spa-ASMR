import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  logo = "../../assets/Spa_ ASMR-logo.png"; 

  constructor() { }

  ngOnInit() {
  }

}
