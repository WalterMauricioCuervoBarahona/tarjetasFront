import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  private headers: any;

  // Return the header object
  private getOptionsHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  // Makes and solves a GET request
  getRequest(
    endpoint: string,
    resolve: any,
    reject: any,
    parameters?: any,
  ) {
    this.headers = this.getOptionsHeaders();
    this.http.get(endpoint, parameters === undefined ? this.headers : { headers: this.headers, params: parameters }).subscribe(
      (data: any) => {
        resolve(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  // Makes and solves a POST request
  postRequest(
    endpoint: string,
    requestBody: any,
    resolve: any,
    reject: any,
  ) {
    this.headers = this.getOptionsHeaders();
    this.http.post(endpoint, requestBody).subscribe(
      (data: any) => {
        resolve(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
