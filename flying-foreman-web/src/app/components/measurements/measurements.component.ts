import { Component, OnInit } from '@angular/core';
import * as EXIF from 'exif-js';
import { MeasurementsService } from '../../services/measurements.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-measurements',
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
  private photoRegister: any[] = [];
  data: any = null;

  constructor(
    private measurementsService: MeasurementsService,
    private modalService: NgbModal) {
      this.data = {title: "", content: ""}
  }

  ngOnInit() {
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
    document.getElementById("markerLeft").style.visibility = "hidden";
    document.getElementById("markerRight").style.visibility = "hidden";
    document.getElementById("svg").style.visibility = "hidden";

    this.loadPhotoRegister();
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
  var lineScale;
  var imageWidth;
  EXIF.getData(canvasImg, function() {
    var allMetaData = EXIF.getAllTags(this);
    photoDateTime_exif = allMetaData.DateTimeOriginal.toString();
    focalLength_exif = (allMetaData.FocalLength.numerator / allMetaData.FocalLength.denominator)/1000;
    resolution_exif = allMetaData.XResolution.numerator / allMetaData.XResolution.denominator;
    imageWidth = allMetaData.PixelXDimension;
    console.log(allMetaData.PixelXDimension);
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

    //длина отрезка на фотографии в пикселях
    this.lineLength = Math.sqrt(Math.pow((this.point2X - this.point1X), 2) + Math.pow((this.point2Y - this.point1Y), 2));
    //размер отрезка относительно ширины фотографии
    lineScale = this.lineLength/imageWidth;
    //перевод в мм
    //this.lineLengthMeter = this.lineLength/(this.photoResolution/0.0254);
    //размер отрезка на матрице
    this.lineLengthMeter = lineScale * 0.0048;
    this.goalDistance = (this.focalLength * (this.lineLengthMeter + this.poleDistance)) / this.lineLengthMeter;

    document.getElementById("markerRight").style.top = String(this.point2Y-16) + "px";
    document.getElementById("markerRight").style.left = String(this.point2X-16) + "px";
    document.getElementById("markerRight").style.visibility = "visible";
    document.getElementById("svg").style.visibility = "visible";

    //document.getElementById("svg").style.width = document.getElementById("canvas").style.width;
    //document.getElementById("svg").style.height = document.getElementById("canvas").style.height;
    document.getElementById("svgLine").setAttribute("x2", String(this.point2X));
    document.getElementById("svgLine").setAttribute("y2", String(this.point2Y));

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

      document.getElementById("markerLeft").style.top = String(this.point1Y-16) + "px";
      document.getElementById("markerLeft").style.left = String(this.point1X-16) + "px";
      document.getElementById("markerLeft").style.visibility = "visible";
      document.getElementById("svgLine").setAttribute("x1", String(this.point1X));
      document.getElementById("svgLine").setAttribute("y1", String(this.point1Y));
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

private loadPhotoRegister() {
  this.measurementsService.getPhotoRegister()
  .then((res) => {
      if (res.json().status === 'SUCCESS') {
          this.photoRegister = res.json().photo_register_list;
          console.log(res.json());
        }
      },
      (err) => {
          console.log(err);
    })
}

  private getHeaders() : Headers {
      const headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
