import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-info-box',
  templateUrl: './right-info-box.component.html',
  styleUrls: ['./right-info-box.component.css']
})
export class RightInfoBoxComponent implements OnInit {
  aboutASMR: boolean = true; 

  constructor() { }

  ngOnInit() {
  }

  onAboutASMR(){
    this.aboutASMR = !this.aboutASMR;
  }

}
