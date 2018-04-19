import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class BasicService {

  private SERVER_URL: string = "http://178.63.57.162:8070";

  constructor() { }

  getHeaders() : Headers {
      const headers = new Headers();
      headers.append('Accept', 'application/json');
      return headers;
  }

  getServerURL(): string {
    return this.SERVER_URL;
  }

}
