import { Component, OnInit } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-drone-control',
  templateUrl: './drone-control.component.html',
  styleUrls: ['./drone-control.component.css']
})
export class DroneControlComponent implements OnInit {

  data: any = null;
logColor: String = "green";

constructor(
  private _http: Http) {
    this.data = {title: "", content: ""}
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

ngOnInit(): void {

}

}
