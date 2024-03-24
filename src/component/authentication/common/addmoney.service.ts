import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddmoneyService {
  addmoney(arg0: {phone:any; amount: any; }) {
    console.log(arg0);
    return this.http.post(`${this.apiUrl}/addamount`, arg0);
  }
private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  // create(userData: any): Observable<any> {
  //   console.log("data is "+ userData);
  //   return this.http.post(`${this.apiUrl}/addamount`, userData);
  }
