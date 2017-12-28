import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmr-requests-video1',
  templateUrl: './asmr-requests-video1.component.html',
  styleUrls: ['./asmr-requests-video1.component.css']
})
export class AsmrRequestsVideo1Component implements OnInit {
  thumbnail1Water = "../../assets/asmr-requests-thumbnails/asmr-requests-video1-water.JPG";
  thumbnail2Esthetician = "../../assets/asmr-requests-thumbnails/asmr-requests-video2-esthetician.JPG";
  thumbnail3PT = "../../assets/asmr-requests-thumbnails/asmr-requests-video3-physTherapist.JPG";
  thumbnail4Departure = "../../assets/asmr-requests-thumbnails/asmr-requests-video4-departure.JPG";
  thumbnail5CranialNerve = "../../assets/asmr-requests-thumbnails/asmr-requests-video5-cranialNerve.JPG";
  thumbnail6Erasure = "../../assets/asmr-requests-thumbnails/asrmr-requests-erasure.JPG";
  showWater: boolean = false; 
  mainLogo: string = "../../assets/SpaASMR-logo.png";
  showDeparture: boolean = false; 
  logo: boolean = true; 
  showErasure: boolean = false; 
  showCranial: boolean = false; 
  
  constructor() { }

  ngOnInit() {
  }

  onShowWater() {
    this.logo = false;
    this.showDeparture = false; 
    this.showErasure = false;  
    this.showCranial = false; 
    this.showWater = true; 
  }

  onShowDeparture() {
    this.logo = false; 
    this.showWater = false;
    this.showErasure = false; 
    this.showCranial = false;  
    this.showDeparture = true;
  }

  onShowErasure() {
    this.logo = false; 
    this.showWater = false; 
    this.showDeparture = false; 
    this.showCranial = false; 
    this.showErasure = true; 
  }

  onShowCranial() {
    this.logo = false; 
    this.showWater = false; 
    this.showDeparture = false;
    this.showErasure = false; 
    this.showCranial = true; 
  }

}
