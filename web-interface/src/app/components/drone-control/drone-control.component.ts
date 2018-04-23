import { Component, OnInit, NgModule, HostListener } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*import { NavController } from 'ionic-angular';*/
import { nipplejs } from 'nipplejs'

@Component({
  selector: 'app-drone-control',
  templateUrl: './drone-control.component.html',
  styleUrls: ['./drone-control.component.css']
})
export class DroneControlComponent implements OnInit {

data: any = null;
logColor: String = "green";
joystick1Pressed: boolean = false;
joystick2Pressed: boolean = false;
joystick1X:number = 0;
joystick1Y:number = 0;
joystick2X:number = 0;
joystick2Y:number = 0;
cx1:number = 50;
cy1:number = 50;
j1x:number = 0;
j1y:number = 0;
cx2:number = 50;
cy2:number = 50;
j2x:number = 0;
j2y:number = 0;


constructor(
  private _http: Http) {
    this.data = {title: "", content: ""}
}

ngOnInit(): void {
  /*this.joyStick();*/
  document.getElementById("joyStick1Button").addEventListener('mousedown', this.joystick1OnTouchStart.bind(this));
  document.getElementById("joyStick1Button").addEventListener('mouseup', this.joystick1OnTouchStop.bind(this));
  document.getElementById("joyStick2Button").addEventListener('mousedown', this.joystick2OnTouchStart.bind(this));
  document.getElementById("joyStick2Button").addEventListener('mouseup', this.joystick2OnTouchStop.bind(this));
  document.body.addEventListener('mouseup', this.bodyMouseDown.bind(this));
  document.addEventListener('keydown', this.onKeydown.bind(this));
  document.addEventListener('keyup', this.onKeyup.bind(this));
  document.getElementById("joyStick1Button").addEventListener('mousemove', this.joystick1Drag.bind(this));
  document.getElementById("joyStick2Button").addEventListener('mousemove', this.joystick2Drag.bind(this));
  this.joystick1X = document.getElementById("joystick1").clientWidth / 2;
  this.joystick1Y = document.getElementById("joystick1").clientHeight / 2;
}

private executeCommand(cmd) {
  return this._http.get('http://localhost:8080/executeCommand?cmd=' + cmd, {headers: this.getHeaders()})
              .map((res: Response) => res.json())
               .subscribe(data => {
                      this.data = data;
                      console.log(this.data);
              });
}

private getHeaders() : Headers {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
}

private getLogColor() : String {
  return this.logColor;
}

private bodyMouseDown(): void {
  if (this.joystick1Pressed) {
    this.joystick1Pressed = false;
    this.cx1 = 50;
    this.cy1 = 50;
  }
  if (this.joystick2Pressed) {
    this.joystick2Pressed = false;
    this.cx2 = 50;
    this.cy2 = 50;
  }
}

private joystick1OnTouchStart(event): void {
  this.joystick1Pressed = true;
  this.j1x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("joystick1").offsetLeft;
  this.j1y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("joystick1").offsetTop;
}

private joystick2OnTouchStart(event): void {
  this.joystick2Pressed = true;
  this.j2x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("joystick2").offsetLeft;
  this.j2y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("joystick2").offsetTop;
}

private joystick1OnTouchStop(event): void {
  this.joystick1Pressed = false;
  this.cx1 = 50;
  this.cy1 = 50;
}

private joystick2OnTouchStop(event): void {
  this.joystick2Pressed = false;
  this.cx2 = 50;
  this.cy2 = 50;
}

private joystick1Drag(event): void {
  event.preventDefault();
  if (this.joystick1Pressed) {

    let x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("joystick1").offsetLeft;
    let y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("joystick1").offsetTop;

    if (((this.j1x - x) > 0 && this.cx1 > 24) || ((this.j1x - x) < 0 && this.cx1 < 75)) {
      this.cx1 -= 0.5 * (this.j1x - x);
    }

    if (((this.j1y - y) > 0 && this.cy1 > 22) || ((this.j1y - y) < 0 && this.cy1 < 70)) {
      this.cy1 -= 0.5 * (this.j1y - y);
    }

    this.j1x = x;
    this.j1y = y;
  }
}

private joystick2Drag(event): void {
  event.preventDefault();
  if (this.joystick2Pressed) {

    let x = event.offsetX?(event.offsetX):event.pageX-document.getElementById("joystick2").offsetLeft;
    let y = event.offsetY?(event.offsetY):event.pageY-document.getElementById("joystick2").offsetTop;

    if (((this.j2x - x) > 0 && this.cx2 > 24) || ((this.j2x - x) < 0 && this.cx2 < 75)) {
      this.cx2 -= 0.5 * (this.j2x - x);
    }

    if (((this.j2y - y) > 0 && this.cy2 > 22) || ((this.j2y - y) < 0 && this.cy2 < 70)) {
      this.cy2 -= 0.5 * (this.j2y - y);
    }

    this.j2x = x;
    this.j2y = y;
  }
}

private onKeydown(event): void {
    //console.log("onKeydown");
    //console.log(event.key);
    if (event.key == "ArrowUp") {
      this.cy1 = 25;
    }
    if (event.key == "ArrowDown") {
      this.cy1 = 75;
    }
    if (event.key == "ArrowRight") {
      this.cx1 = 75;
    }
    if (event.key == "ArrowLeft") {
      this.cx1 = 25;
    }
    if (event.key == "w") {
      this.cy2 = 25;
    }
    if (event.key == "s") {
      this.cy2 = 75;
    }
    if (event.key == "d") {
      this.cx2 = 75;
    }
    if (event.key == "a") {
      this.cx2 = 25;
    }
}

private onKeyup(event): void {
    //console.log("onKeyup");
    //console.log(event.key);
    if (event.key == "ArrowUp") {
      this.cy1 = 50;
    }
    if (event.key == "ArrowDown") {
      this.cy1 = 50;
    }
    if (event.key == "ArrowRight") {
      this.cx1 = 50;
    }
    if (event.key == "ArrowLeft") {
      this.cx1 = 50;
    }
    if (event.key == "w") {
      this.cy2 = 50;
    }
    if (event.key == "s") {
      this.cy2 = 50;
    }
    if (event.key == "d") {
      this.cx2 = 50;
    }
    if (event.key == "a") {
      this.cx2 = 50;
    }
}

/*@HostListener('document:keypress', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  event.preventDefault();
    console.log(event.key);
  }*/

}
