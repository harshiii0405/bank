import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidmoneyService {
  widmoney(arg0: { phone: any; amount: any; }) {
    console.log(arg0);
    return this.http.post(`${this.apiUrl}/withamount`, arg0);
  }
private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

}
