import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as EXIF from 'exif-js';

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
  private lineLengthMeter: number;
  private focalLength: number;
  private photoResolution: number;
  private goalDistance: number;
  private photoDateTime: string;
  private leftImageOpacity: number;
  private rightImageOpacity: number;

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
    this.poleDistance = 1;
    this.lineLengthMeter = 0;
    this.focalLength = 0;
    this.photoResolution = 0;
    this.goalDistance = 0;
    this.photoDateTime = "";
    this.leftImageOpacity = 50;
    this.rightImageOpacity = 50;
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

    var canvasImg = document.getElementById("canvasImgRight");
    var photoDateTime_exif;
    var focalLength_exif;
    var resolution_exif;
    var realSize;
    var k;
    EXIF.getData(canvasImg, function() {
      var allMetaData = EXIF.getAllTags(this);
      //var allMetaDataSpan = document.getElementById("allMetaDataSpan");
      //allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
      console.log(allMetaData.DateTimeOriginal);
      photoDateTime_exif = allMetaData.DateTimeOriginal.toString();
      focalLength_exif = (allMetaData.FocalLength.numerator / allMetaData.FocalLength.denominator)/1000;
      resolution_exif = allMetaData.XResolution.numerator / allMetaData.XResolution.denominator;
      console.log(allMetaData);
    });

    this.photoDateTime = photoDateTime_exif;
    this.focalLength = focalLength_exif;
    this.photoResolution = resolution_exif;

    if (this.clickFlag) {
      this.clickFlag = false;
      this.instructionMessage = "Выберите первую точку";

      this.point2X = event.offsetX?(event.offsetX):event.pageX-document.getElementById("canvasImgRight").offsetLeft;
	    this.point2Y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("canvasImgRight").offsetTop;

      this.lineLength = Math.sqrt(Math.pow((this.point2X - this.point1X), 2) + Math.pow((this.point2Y - this.point1Y), 2));
      k = this.lineLength/4032;
      //this.lineLengthMeter = this.lineLength/(this.photoResolution/0.0254);
      this.lineLengthMeter = k * 0.00393;
      this.goalDistance = (this.focalLength * (this.lineLengthMeter + this.poleDistance)) / this.lineLengthMeter;




      console.log(this.poleDistance);


      this.point1X = 0;
      this.point1Y = 0;
      this.point2X = 0;
      this.point2Y = 0;
    } else {
      this.clickFlag = true;
      this.instructionMessage = "Выберите вторую точку";
      //this.point1X = event.clientX;
      //this.point1Y = event.clientY;
      this.point1X = event.offsetX?(event.offsetX):event.pageX-document.getElementById("canvasImgRight").offsetLeft;
	    this.point1Y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("canvasImgRight").offsetTop;
    }
  }

  private leftOpacityChange(): void {
    if (this.leftImageOpacity >= 0 && this.leftImageOpacity < 101) {
      document.getElementById("canvasImgLeft").style.opacity = String(this.leftImageOpacity/100);
    }
  }

  private rightOpacityChange(): void {
    if (this.rightImageOpacity >= 0 && this.rightImageOpacity < 101) {
      document.getElementById("canvasImgRight").style.opacity = String(this.rightImageOpacity/100);
    }
  }

}

/*window.onload = () => {
    HTMLElement canvas = document.getElementById("canvas");
};*/
