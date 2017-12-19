import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asmr-requests',
  templateUrl: './asmr-requests.component.html',
  styleUrls: ['./asmr-requests.component.css']
})
export class AsmrRequestsComponent implements OnInit {
  thumbnail1Water = "../../assets/asmr-requests-thumbnails/asmr-requests-video1-water.JPG";
  thumbnail2Esthetician = "../../assets/asmr-requests-thumbnails/asmr-requests-video2-esthetician.JPG";
  thumbnail3PT = "../../assets/asmr-requests-thumbnails/asmr-requests-video3-physTherapist.JPG";
  thumbnail4Departure = "../../assets/asmr-requests-thumbnails/asmr-requests-video4-departure.JPG";
  thumbnail5CranialNerve = "../../assets/asmr-requests-thumbnails/asmr-requests-video5-cranialNerve.JPG";

  

  constructor() { }

  ngOnInit() {
  }

}
