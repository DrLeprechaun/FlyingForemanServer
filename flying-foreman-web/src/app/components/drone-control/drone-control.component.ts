import { Component, OnInit } from '@angular/core';
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
options: any = null;
manager: any = null;


constructor(
  private _http: Http) {
    this.data = {title: "", content: ""}
}

ngOnInit(): void {
  this.joyStick();
}

private executeCommand(cmd) {
  //return this._http.get('http://178.63.57.162:8080/executeCommand?cmd=' + cmd, {headers: this.getHeaders()})
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

private joyStick() {
  let container = document.getElementById("joystick1");
  let canvas = document.createElement('canvas');

  canvas.width = 100;
	canvas.height = 100;
	container.appendChild(canvas);
	let context=canvas.getContext('2d');
}

}
