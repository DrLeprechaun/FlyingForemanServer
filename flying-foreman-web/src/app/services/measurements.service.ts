import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class MeasurementsService {

  constructor(private basicService: BasicService, private http: Http) { }

  getPhotoRegister(): Promise<any> {
    return this.http.get(this.basicService.getServerURL() + '/getPhotoRegister', {headers: this.basicService.getHeaders()}).toPromise()
  }

}
