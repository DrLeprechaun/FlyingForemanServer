import { Injectable } from '@angular/core';
import { BasicService } from './basic.service';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class MeasurementsService {

  constructor(private basicService: BasicService, private http: Http) { }

  getPhotoRegister(): Promise<any> {
    return this.http.get(this.basicService.getServerURL() + '/getPhotoRegister', {headers: this.basicService.getHeaders()}).toPromise()
  }

  /*getRightPhoto(id: number): Promise<any> {
    return this.http.get(this.basicService.getServerURL() + '/RightPhoto?id=' + id, {headers: this.basicService.getHeaders()}).toPromise()
  }*/

  getLeftPhotoUrl(id: number) {
  return new Promise((resolve,reject) =>{
    // this.imageUrl  is not static one, it may fetch from the server
    resolve(this.basicService.getServerURL() + '/getLeftPhoto?id=' + id);
  });
}

  getRightPhotoUrl(id: number) {
  return new Promise((resolve,reject) =>{
    // this.imageUrl  is not static one, it may fetch from the server
    resolve(this.basicService.getServerURL() + '/getRightPhoto?id=' + id);
  });
}

}
