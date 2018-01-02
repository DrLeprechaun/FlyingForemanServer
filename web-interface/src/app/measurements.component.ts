import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  private  lineLength: number;
  private clientX: number;
  private clientY: number;
  private clickFlag: boolean;
  private point1X: number;
  private point1Y: number;
  private point2X: number;
  private point2Y: number;
  private instructionMessage: string;
  private poleDistance: number;
  private focusDistance: number;
  private photoResolution: number;
  private goalDistance: number;
  //private canvas: HTMLElement;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.lineLength = 0;
    this.clientX = 0;
    this.clientY = 0;
    this.point1X = 0;
    this.point1Y = 0;
    this.point2X = 0;
    this.point2Y = 0;
    this.clickFlag = false;
    this.instructionMessage = "Выберите первую точку";
    this.poleDistance = 0;
    this.focusDistance = 0;
    this.photoResolution = 0;
    this.goalDistance = 0;
  }

  private canvasClick(event: MouseEvent): void {
    //var canvas = document.getElementById("canvas");
    //this.clientX = event.clientX;
    //this.clientY = event.clientY;
    //console.log(this.clientX + ", " + this.clientY);
    //console.log(canvas);

    //this.poleDistance = document.getElementById("poleDistanceInput").value;
    //this.focusDistance = document.getElementById("focusDistanceInput").value;
    //this.photoResolution = document.getElementById("photoResolutionInput").value;
    console.log(this.poleDistance);
    if (this.clickFlag) {
      this.clickFlag = false;
      this.instructionMessage = "Выберите первую точку";
      this.point2X = event.clientX;
      this.point2Y = event.clientY;
      this.lineLength = Math.sqrt(Math.pow((this.point2X - this.point1X), 2) + Math.pow((this.point2Y - this.point1Y), 2));
      this.goalDistance = (this.focusDistance * (this.poleDistance + this.lineLength)) / this.poleDistance;

      this.point1X = 0;
      this.point1Y = 0;
      this.point2X = 0;
      this.point2Y = 0;
    } else {
      this.clickFlag = true;
      this.instructionMessage = "Выберите вторую точку";
      this.point1X = event.clientX;
      this.point1Y = event.clientY;
    }
  }

}

/*window.onload = () => {
    HTMLElement canvas = document.getElementById("canvas");
};*/
